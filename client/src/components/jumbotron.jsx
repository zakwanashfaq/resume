import { init, track } from '@amplitude/analytics-node';
import { useEffect, useState } from "react";
import { FloatingNavigation } from './floatingNavigation';
import nameLogo from '../../public/nameText.png';

const onClickOpenGithub = (e) => {
    window.open(
        'https://github.com/zakwanashfaq',
        '_blank'
    );
}

const onClickOpenLinkedIn = (e) => {
    window.open(
        'https://www.linkedin.com/in/zakwanashfaq/',
        '_blank'
    );
}

const onClickOpenContactsPage = (e) => {
    window.open('/contact', "_self");
}

const onClickOpenProjectsPage = (e) => {
    window.open('/projects', "_self");
}

const onClickOpenResumePage = (e) => {
    window.open('/resume', "_self");
}

// Interactive constellation field: dots drift and twinkle, nearby dots link
// with faint lines, the cursor attracts dots and draws connections to them,
// and clicking sparks a small particle burst.
const initStarfield = () => {
    const canvas = document.getElementById('stars-canvas');
    if (!canvas) return;
    // tear down any previous run (resize / fast-refresh) before starting a new one
    if (window.__starfieldStop) window.__starfieldStop();

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const reducedMotion = typeof window.matchMedia !== "undefined"
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const drift = reducedMotion ? 0 : 0.18;

    const LINK_DIST = 110;
    const MOUSE_DIST = 190;
    const count = Math.max(40, Math.min(Math.floor((w * h) / 16000), 130));
    const dots = [];
    for (let i = 0; i < count; i++) {
        dots.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * drift,
            vy: (Math.random() - 0.5) * drift,
            // mouse pull lives in a separate decaying velocity so the base drift never dies
            pvx: 0,
            pvy: 0,
            r: 1 + Math.random() * 1.5,
            phase: Math.random() * Math.PI * 2,
        });
    }
    const sparks = [];

    const mouse = { x: -9999, y: -9999 };
    const onPointerMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };
    const onPointerOut = (e) => {
        if (!e.relatedTarget) {
            mouse.x = -9999;
            mouse.y = -9999;
        }
    };
    const onPointerDown = (e) => {
        // don't fire bursts when the click is on a control
        if (e.target.closest && e.target.closest('button, a')) return;
        const n = 14;
        for (let i = 0; i < n; i++) {
            const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
            const speed = 1 + Math.random() * 2.2;
            sparks.push({
                x: e.clientX,
                y: e.clientY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
            });
        }
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerout', onPointerOut);

    let t = 0;
    let raf;
    const frame = () => {
        const dark = canvas.classList.contains('star-canvas-dark');
        const rgb = dark ? '52, 211, 153' : '5, 150, 105';
        const lineAlpha = dark ? 0.14 : 0.1;
        ctx.clearRect(0, 0, w, h);
        t += 0.02;

        for (const d of dots) {
            const dx = mouse.x - d.x;
            const dy = mouse.y - d.y;
            const md = Math.hypot(dx, dy);
            if (md < MOUSE_DIST && md > 1) {
                const pull = (1 - md / MOUSE_DIST) * 0.012;
                d.pvx += (dx / md) * pull;
                d.pvy += (dy / md) * pull;
            }
            d.pvx *= 0.94;
            d.pvy *= 0.94;
            d.x += d.vx + d.pvx;
            d.y += d.vy + d.pvy;
            if (d.x < -20) d.x = w + 20;
            if (d.x > w + 20) d.x = -20;
            if (d.y < -20) d.y = h + 20;
            if (d.y > h + 20) d.y = -20;
        }

        // faint links between nearby dots
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                if (Math.abs(dx) > LINK_DIST || Math.abs(dy) > LINK_DIST) continue;
                const dist = Math.hypot(dx, dy);
                if (dist > LINK_DIST) continue;
                ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / LINK_DIST) * lineAlpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
            }
        }

        // brighter links from the cursor to nearby dots
        for (const d of dots) {
            const dist = Math.hypot(mouse.x - d.x, mouse.y - d.y);
            if (dist > MOUSE_DIST) continue;
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / MOUSE_DIST) * 0.32})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(d.x, d.y);
            ctx.stroke();
        }

        // twinkling dots with a soft halo
        for (const d of dots) {
            const r = d.r * (0.75 + 0.25 * Math.sin(t * 1.5 + d.phase));
            ctx.fillStyle = `rgba(${rgb}, 0.08)`;
            ctx.beginPath();
            ctx.arc(d.x, d.y, r * 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgba(${rgb}, ${dark ? 0.7 : 0.55})`;
            ctx.beginPath();
            ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        // click bursts
        for (let i = sparks.length - 1; i >= 0; i--) {
            const s = sparks[i];
            s.x += s.vx;
            s.y += s.vy;
            s.vx *= 0.96;
            s.vy *= 0.96;
            s.life -= 0.02;
            if (s.life <= 0) {
                sparks.splice(i, 1);
                continue;
            }
            ctx.fillStyle = `rgba(${rgb}, ${s.life * 0.8})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, 1.6 * s.life + 0.4, 0, Math.PI * 2);
            ctx.fill();
        }

        raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    window.__starfieldStop = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerout', onPointerOut);
        window.__starfieldStop = undefined;
    };
}

export const Jumbotron = (props) => {
    // add back when contact page is ready
    // <button type="button" className="btn btn-outline-dark m-1" onClick={onClickOpenContactsPage}>Contact Me</button>
    init('9245e556252008ae4890fecb25ad7e42');
    track('Homepage loaded', undefined, {
        event_type : "home-page-opened",
        user_id: "sdsfdghgjreywrtqer",
    });
      
    const [darkMode, setDarkMode] = useState(false);
    const onDarkModeButtonClick = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("theme", !darkMode)
    }
    // adding stars to the jumbotron on Component resize
    useEffect(() => {
        initStarfield();
        let resizeTimer;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initStarfield, 150);
        };
        window.addEventListener('resize', onResize);

        if (localStorage.getItem("theme")) {
            console.log(localStorage.getItem("theme"));
            if (localStorage.getItem("theme") === 'false') {
                console.log('true val');
                setDarkMode(false);
            }
            else {
                console.log('false val');
                setDarkMode(true);
            }
        }
        else {
            console.log('init val');

            if (typeof window.matchMedia !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            }
        }

        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', onResize);
            if (window.__starfieldStop) window.__starfieldStop();
        };
    }, []);

    
    return (
        <div className="p-0 customJumbotron">
            <FloatingNavigation />
            <canvas id="stars-canvas" className={darkMode ? "star-canvas-dark" : "star-canvas"} />
            <div className={"jumbotron mb-0 customJumbotron-jumbotron" + (darkMode ? " dark-jumbotron" : "")}>
                <div className="container customJumbotron-container">
                    <span className="hero-eyebrow">Software Developer</span>
                    <h1 className="hero-title">Hi, I'm <span className="hero-name">Zakwan</span> Ashfaq</h1>
                    <div className="hero-badges">
                        <span className="hero-badge"><i className="bi bi-mortarboard-fill"></i>Honours in Computer Science, Memorial University</span>
                        <span className="hero-badge"><i className="bi bi-controller"></i>Game &amp; Full-Stack Web Developer</span>
                        <span className="hero-badge"><i className="bi bi-cloud-check-fill"></i>AWS Solutions Architect Associate</span>
                    </div>
                    <div className="hero-actions">
                        <button type="button" className="hero-btn hero-btn-primary" onClick={onClickOpenProjectsPage}>Projects<i className="bi bi-arrow-right"></i></button>
                        <button type="button" className="hero-btn" onClick={onClickOpenGithub}><i className="bi bi-github"></i>GitHub</button>
                        <button type="button" className="hero-btn" onClick={onClickOpenLinkedIn}><i className="bi bi-linkedin"></i>LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}