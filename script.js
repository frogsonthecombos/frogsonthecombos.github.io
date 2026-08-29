
/* =========================================================
   FROGS // NEXUS
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MODULE BUTTONS
       Opens each data-url in a NEW TAB
    ===================================================== */

    const modules = document.querySelectorAll(".module");

    modules.forEach((module) => {

        module.addEventListener("click", () => {

            const url = module.dataset.url;

            if (!url || url === "https://example.com") {
                console.warn("No valid URL configured for this module.");
                return;
            }

            // Small click animation
            module.style.transform = "translateY(-2px) scale(0.98)";

            setTimeout(() => {
                module.style.transform = "";
            }, 120);

            // Open destination in a new tab
            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });


    /* =====================================================
       CLOCK
    ===================================================== */

    const clock = document.getElementById("clock");

    function updateClock() {

        if (!clock) return;

        const now = new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        clock.textContent =
            `${hours}:${minutes}:${seconds}`;
    }

    updateClock();

    setInterval(updateClock, 1000);


    /* =====================================================
       TERMINAL TEXT
    ===================================================== */

    const terminalText =
        document.getElementById("terminalText");

    const messages = [
        "initializing secure connection...",
        "checking mainframe status...",
        "connection established.",
        "nexus systems online.",
        "awaiting user input..."
    ];

    let messageIndex = 0;

    function cycleTerminalText() {

        if (!terminalText) return;

        messageIndex =
            (messageIndex + 1) % messages.length;

        terminalText.style.opacity = "0";

        setTimeout(() => {

            terminalText.textContent =
                messages[messageIndex];

            terminalText.style.opacity = "1";

        }, 300);
    }

    setInterval(cycleTerminalText, 3500);


    /* =====================================================
       PARTICLES
    ===================================================== */

    const particleContainer =
        document.getElementById("particles");

    if (particleContainer) {

        for (let i = 0; i < 45; i++) {

            const particle =
                document.createElement("div");

            particle.className = "particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${8 + Math.random() * 15}s`;

            particle.style.animationDelay =
                `${Math.random() * -15}s`;

            particle.style.opacity =
                `${0.15 + Math.random() * 0.6}`;

            particleContainer.appendChild(
                particle
            );
        }
    }


    /* =====================================================
       FAKE NETWORK LATENCY DISPLAY
    ===================================================== */

    const latency =
        document.getElementById("latency");

    function updateLatency() {

        if (!latency) return;

        const value =
            Math.floor(
                18 + Math.random() * 25
            );

        latency.textContent =
            `${value} MS`;
    }

    updateLatency();

    setInterval(
        updateLatency,
        4000
    );


    /* =====================================================
       SESSION TIMER
    ===================================================== */

    const sessionTime =
        document.getElementById("sessionTime");

    let sessionSeconds = 0;

    function updateSession() {

        if (!sessionTime) return;

        sessionSeconds++;

        const minutes =
            Math.floor(
                sessionSeconds / 60
            );

        const seconds =
            sessionSeconds % 60;

        sessionTime.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    setInterval(
        updateSession,
        1000
    );


    /* =====================================================
       LOCAL SESSION COUNTER
       This is NOT a global visitor counter.
    ===================================================== */

    const visitorCount =
        document.getElementById("visitorCount");

    if (visitorCount) {

        let count =
            Number(
                localStorage.getItem(
                    "frogsLocalViews"
                ) || 0
            );

        count++;

        localStorage.setItem(
            "frogsLocalViews",
            count
        );

        visitorCount.textContent =
            count.toLocaleString();
    }


    /* =====================================================
       FULLSCREEN BUTTON
    ===================================================== */

    const fullscreenButton =
        document.getElementById(
            "fullscreenButton"
        );

    if (fullscreenButton) {

        fullscreenButton.addEventListener(
            "click",
            async () => {

                try {

                    if (!document.fullscreenElement) {

                        await document.documentElement
                            .requestFullscreen();

                    } else {

                        await document.exitFullscreen();

                    }

                } catch (error) {

                    console.log(
                        "Fullscreen unavailable:",
                        error
                    );

                }

            }
        );
    }


    /* =====================================================
       ORB MOUSE EFFECT
    ===================================================== */

    const orb =
        document.querySelector(".orb");

    if (orb) {

        document.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        0.5) * 12;

                const y =
                    (event.clientY /
                        window.innerHeight -
                        0.5) * -12;

                orb.style.transform =
                    `translate(${x}px, ${y}px)`;
            }
        );
    }


    /* =====================================================
       MODULE HOVER SOUND-LIKE FEEDBACK
       Visual only — no audio required.
    ===================================================== */

    modules.forEach((module) => {

        module.addEventListener(
            "mouseenter",
            () => {

                module.classList.add(
                    "module-active"
                );

            }
        );

        module.addEventListener(
            "mouseleave",
            () => {

                module.classList.remove(
                    "module-active"
                );

            }
        );

    });


    console.log(
        "%c FROGS // NEXUS ONLINE ",
        "background:#090812;color:#a996ff;font-weight:bold;padding:8px;"
    );

});
