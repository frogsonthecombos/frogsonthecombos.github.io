
/* ==========================================
   FROGS // NEXUS
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   MODULE LINKS
   =========================================

   Put your real URLs here.

   Every module opens in a NEW TAB.

========================================== */

const moduleLinks = {

    HOME:
        "https://example.com",

    GAMES:
        "https://example.com",

    PROJECTS:
        "https://example.com",

    TOOLS:
        "https://example.com",

    MEDIA:
        "https://example.com",

    ABOUT:
        "https://example.com",

    STATUS:
        "https://example.com",

    SECRET:
        "https://example.com"

};


/* ==========================================
   PARTICLES
========================================== */

const particleContainer =
    document.getElementById("particles");


for (let i = 0; i < 55; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 14 + 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 12) + "s";

    const size =
        Math.random() * 2 + 1;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particleContainer.appendChild(
        particle
    );
}


/* ==========================================
   CLOCK
========================================== */

function updateClock() {

    const now =
        new Date();

    const hours =
        String(
            now.getHours()
        ).padStart(2, "0");

    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");

    const seconds =
        String(
            now.getSeconds()
        ).padStart(2, "0");

    document.getElementById(
        "clock"
    ).textContent =
        `${hours}:${minutes}:${seconds}`;
}


setInterval(
    updateClock,
    1000
);

updateClock();


/* ==========================================
   TYPING TERMINAL
========================================== */

const terminalMessages = [

    "Nexus connection established.",

    "All systems responding normally.",

    "Awaiting module selection.",

    "Secure channel initialized.",

    "Welcome back, operator."

];


let messageIndex = 0;

let characterIndex = 0;

let deleting = false;


const typingElement =
    document.getElementById(
        "typingText"
    );


function typeTerminal() {

    const message =
        terminalMessages[
            messageIndex
        ];


    if (!deleting) {

        typingElement.textContent =
            message.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex >=
            message.length
        ) {

            deleting = true;

            setTimeout(
                typeTerminal,
                1800
            );

            return;
        }

    } else {

        typingElement.textContent =
            message.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex <= 0) {

            deleting = false;

            messageIndex =
                (messageIndex + 1) %
                terminalMessages.length;
        }
    }


    setTimeout(
        typeTerminal,
        deleting ? 25 : 45
    );
}


typeTerminal();


/* ==========================================
   LOCAL VIEW COUNTER
========================================== */

let views =
    Number(
        localStorage.getItem(
            "frogsNexusViews"
        ) || 0
    );


views++;


localStorage.setItem(
    "frogsNexusViews",
    views
);


document.getElementById(
    "viewCount"
).textContent =
    String(views).padStart(
        6,
        "0"
    );


/* ==========================================
   SESSION TIMER
========================================== */

const sessionStart =
    Date.now();


function updateSession() {

    const elapsed =
        Math.floor(
            (
                Date.now() -
                sessionStart
            ) / 1000
        );


    const minutes =
        Math.floor(
            elapsed / 60
        );


    const seconds =
        elapsed % 60;


    document.getElementById(
        "sessionTime"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


setInterval(
    updateSession,
    1000
);


/* ==========================================
   UPTIME
========================================== */

const uptimeStart =
    Date.now();


function updateUptime() {

    const elapsed =
        Math.floor(
            (
                Date.now() -
                uptimeStart
            ) / 1000
        );


    const hours =
        Math.floor(
            elapsed / 3600
        );


    const minutes =
        Math.floor(
            (elapsed % 3600) / 60
        );


    const seconds =
        elapsed % 60;


    document.getElementById(
        "uptime"
    ).textContent =
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


setInterval(
    updateUptime,
    1000
);


/* ==========================================
   FAKE LIVE LATENCY DISPLAY
========================================== */

const latencyElement =
    document.getElementById(
        "latency"
    );


function updateLatency() {

    const latency =
        Math.floor(
            Math.random() * 15
        ) + 18;


    latencyElement.textContent =
        `${latency} MS`;
}


setInterval(
    updateLatency,
    3000
);

updateLatency();


/* ==========================================
   BUTTONS
========================================== */

const modules =
    document.querySelectorAll(
        ".module"
    );


modules.forEach(
    module => {

        module.addEventListener(
            "click",
            () => {

                const name =
                    module.dataset.module;


                const url =
                    moduleLinks[name];


                console.log(
                    `[NEXUS] MODULE REQUEST: ${name}`
                );


                playClick();


                /*
                    Don't navigate if the
                    URL hasn't been configured.
                */

                if (
                    !url ||
                    url.includes(
                        "example.com"
                    )
                ) {

                    console.log(
                        `[NEXUS] ${name} has no configured destination.`
                    );

                    showTemporaryMessage(
                        `${name} MODULE NOT CONFIGURED`
                    );

                    return;
                }


                /*
                    Open destination in
                    a completely new tab.
                */

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }
);


/* ==========================================
   TEMPORARY SYSTEM MESSAGE
========================================== */

function showTemporaryMessage(
    message
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.textContent =
        message;


    notification.style.position =
        "fixed";

    notification.style.left =
        "50%";

    notification.style.bottom =
        "30px";

    notification.style.transform =
        "translateX(-50%)";

    notification.style.padding =
        "12px 18px";

    notification.style.border =
        "1px solid rgba(139,108,255,.5)";

    notification.style.borderRadius =
        "10px";

    notification.style.background =
        "rgba(10,10,18,.95)";

    notification.style.color =
        "#b9adff";

    notification.style.font =
        "9px monospace";

    notification.style.letterSpacing =
        "2px";

    notification.style.zIndex =
        "9999";

    notification.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.4)";


    document.body.appendChild(
        notification
    );


    setTimeout(
        () => {

            notification.style.opacity =
                "0";

            notification.style.transition =
                "opacity .3s";

            setTimeout(
                () => notification.remove(),
                300
            );

        },
        1800
    );
}


/* ==========================================
   UI SOUND
========================================== */

let soundEnabled =
    true;


const soundToggle =
    document.getElementById(
        "soundToggle"
    );


let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return null;
        }

        audioContext =
            new AudioContext();
    }

    return audioContext;
}


function playClick() {

    if (!soundEnabled) {
        return;
    }


    const audio =
        getAudioContext();


    if (!audio) {
        return;
    }


    if (
        audio.state ===
        "suspended"
    ) {

        audio.resume();
    }


    const oscillator =
        audio.createOscillator();


    const gain =
        audio.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.setValueAtTime(
        650,
        audio.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        350,
        audio.currentTime + 0.07
    );


    gain.gain.setValueAtTime(
        0.025,
        audio.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.07
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audio.destination
    );


    oscillator.start();


    oscillator.stop(
        audio.currentTime + 0.07
    );
}


soundToggle.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;


        soundToggle.textContent =
            soundEnabled
                ? "◉"
                : "○";


        if (soundEnabled) {
            playClick();
        }

    }
);


/* ==========================================
   MODULE HOVER EFFECT
========================================== */

modules.forEach(
    module => {

        module.addEventListener(
            "mouseenter",
            () => {

                if (soundEnabled) {
                    // Very subtle hover feedback.
                    // Intentionally quieter than click.
                }

            }
        );

    }
);


/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
            Number keys 1-8 open
            the corresponding module.
        */

        const number =
            Number(event.key);


        if (
            number >= 1 &&
            number <= 8
        ) {

            const module =
                modules[number - 1];


            if (module) {
                module.click();
            }

        }

    }
);


/* ==========================================
   CONSOLE BRANDING
========================================== */

console.log(
    "%c FROGS // NEXUS ",
    "color:#9b83ff;font-size:22px;font-weight:800;"
);

console.log(
    "%c SYSTEM ONLINE ",
    "color:#55e6a5;font-size:11px;"
);

console.log(
    "%c 8 MODULES AVAILABLE ",
    "color:#59e1ff;font-size:10px;"
);

