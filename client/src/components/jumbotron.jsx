// import "./css/out/jumbotron.css";
import { useEffect } from "react";

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

const Stars = () => {
    const canvas = document.getElementById('stars-canvas');
    if(!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var stars = [];
    var numStars = canvas.width/7;
    for (var i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
        });
    }
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 0, x = stars.length; i < x; i++) {
            var s = stars[i];
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'grey';
            ctx.stroke();
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
            s.x += s.vx / FPS;
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
    // <button type="button" class="btn btn-outline-dark m-1" onClick={onClickOpenContactsPage}>Contact Me</button>
    
    // adding stars to the jumbotron on Component resize
    useEffect(() => {
        Stars();
        window.addEventListener('resize', Stars)
    }, []);

    return (
        <div className="p-0 customJumbotron">
            <canvas id="stars-canvas" className="star-canvas" />
            <div className="jumbotron mb-0 customJumbotron-jumbotron">
                <div className="container customJumbotron-container">
                    <h1 className="display-4">Hello!</h1>
                    <p className="lead">I am <span className="customJumbotron-name-highlight">Zakwan</span> Ashfaq Zian</p>
                    <div className="row">Honours in Computer Science</div>
                    <div className="row">Memorial University of Newfoundland</div>
                    <div className="row">Web and Game Developer</div>
                    <br />
                    <div className="row ">
                        <button type="button" class="btn btn-dark" onClick={onClickOpenProjectsPage}>Portfolio / Projects</button>
                    </div>
                    <div className="p-2">
                        <button type="button" class="btn btn-outline-dark m-1" onClick={onClickOpenGithub}>Github</button>
                        <button type="button" class="btn btn-outline-dark m-1" onClick={onClickOpenLinkedIn}>LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}