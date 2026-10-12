// Moving dots background (particles.js)
function initParticles(color) {
    // Fewer dots on phones (performance/battery), and still dots for "reduce motion" users.
    const smallScreen = window.matchMedia('(max-width: 767.98px)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": smallScreen ? 30 : 80,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": color },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": color,
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !reduceMotion,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse", /* Kaçış efekti */
                    "parallax": { "enable": true, "force": 60, "smooth": 10 } /* 3D derinlik efekti */
                },
                "onclick": { "enable": true, "mode": "push" }, /* Tıklayınca yeni nokta ekleme */
                "resize": true
            },
            "modes": {
                "repulse": { "distance": 120, "duration": 0.4 } /* Fareden kaçma mesafesi */
            }
        },
        "retina_detect": true
    });
}

function setParticlesColor(color) {
    if (!window.pJSDom || window.pJSDom.length === 0) return;

    const pJS = window.pJSDom[0].pJS;
    pJS.particles.color.value = color;
    pJS.particles.line_linked.color = color;
    pJS.fn.particlesRefresh();
}
