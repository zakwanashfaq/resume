import { useState, useEffect } from "react";

export function FloatingNavigation(props) {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === 'false') {
                setDarkMode(false);
            }
            else {
                setDarkMode(true);
            }
        }
        else if (typeof window.matchMedia !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, [])

    const onDarkModeButtonClick = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("theme", !darkMode);
        location.reload();
    }
    return (
        <>
            <div className='floating-navigation-container'>
                {/* <a
                    className={darkMode ? 'btn btn-light' : 'btn btn-dark'}
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title={darkMode ? "Toggle light-mode" : "Toggle dark-mode"}
                    href="/resume"
                >
                    Resume
                </a>
                <a
                    className={darkMode ? 'btn mx-2 btn-light' : 'btn mx-2 btn-dark'}
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title={darkMode ? "Toggle light-mode" : "Toggle dark-mode"}
                    href="/projects"
                >
                    Projects
                </a> */}
                <button
                    className={'theme-toggle' + (darkMode ? ' theme-toggle-dark' : '')}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title={darkMode ? "Toggle light-mode" : "Toggle dark-mode"}
                    onClick={onDarkModeButtonClick}
                >
                    {darkMode ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars"></i>}
                </button>
            </div>
        </>
    );
}