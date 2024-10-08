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

const Stars = (isDarkMode = false) => {
    const canvas = document.getElementById('stars-canvas');
    if(!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var stars = [];
    var numStars = canvas.width/10;
    for (var i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
        });
    }

    const StarColor = '#5b8f49';
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 0, x = stars.length; i < x; i++) {
            var s = stars[i];
            ctx.fillStyle = StarColor;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            //ctx.stroke();
        }
    }
    function animateStars() {
        drawStars();
        updateStars();
        requestAnimationFrame(animateStars);
    }
    function updateStars() {
        for (var i = 0, x = stars.length; i < x; i++) {
            var s = stars[i];
            //s.x += s.vx / FPS;
            s.y += s.vy / FPS;
            if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
            if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
    }
    var FPS = 50;
    animateStars();
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
        Stars(darkMode);
        window?.addEventListener('resize', Stars);
        
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
    }, []);

    
    return (
        <div className="p-0 customJumbotron">
            <FloatingNavigation />
            <canvas id="stars-canvas" className={darkMode ? "star-canvas-dark" : "star-canvas"} />
            <div className={"jumbotron mb-0 customJumbotron-jumbotron" + (darkMode ? " dark-jumbotron" : "")}>
                <div className="container customJumbotron-container">
                    {/* <img className='pb-4 ms-md-5' src={"nameText.png"}/> */}
                    <p className="lead fs-1">Hi! I am <span className="customJumbotron-name-highlight">Zakwan</span> Ashfaq</p>
                    <div className="row">Honours in Computer Science from Memorial University of Newfoundland</div>
                    <div className="row"></div>
                    <div className="row">Game and Full-Stack Web Developer</div>
                    <div className="row">Certified AWS Solutions Architect Associate</div>
                    <br />
                    {/* <div className="row">
                        <button type="button" className={"btn " + (darkMode ? "btn-light" : "btn-dark")} onClick={onClickOpenResumePage}>Resume</button>
                        <button type="button" className={"mt-2 btn " + (darkMode ? "btn-light" : "btn-dark")} onClick={onClickOpenProjectsPage}>Portfolio / Projects</button>
                    </div> */}
                    
                    <div className="p-2 btn-group btn-group-sm">
                        <button type="button" className={"btn " + (darkMode ? "btn-outline-light" : "btn-outline-dark")} onClick={onClickOpenProjectsPage}>Projects</button>
                        {/* <button type="button" className={"btn m-1 " + (darkMode ? "btn-outline-light" : "btn-outline-dark")} onClick={onClickOpenResumePage}>About Me</button> */}
                        <button type="button" className={"btn " + (darkMode ? "btn-outline-light" : "btn-outline-dark")} onClick={onClickOpenGithub}>Github</button>
                        <button type="button" className={"btn " + (darkMode ? "btn-outline-light" : "btn-outline-dark")} onClick={onClickOpenLinkedIn}>LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}