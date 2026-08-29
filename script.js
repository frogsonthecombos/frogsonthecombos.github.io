/* ==========================================
   FROGS // MAINFRAME
========================================== */


/* ==========================================
   MODULE LINKS
   CHANGE THESE URLS
========================================== */

const moduleLinks = {

    HOME:
        "https://example.com/home",

    GAMES:
        "https://example.com/games",

    PROJECTS:
        "https://example.com/projects",

    TOOLS:
        "https://example.com/tools",

    MEDIA:
        "https://example.com/media",

    ABOUT:
        "https://example.com/about",

    STATUS:
        "https://example.com/status",

    SECRET:
        "https://example.com/secret"

};


/* ==========================================
   PARTICLES
========================================== */

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 12 + 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 10) + "s";

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
   TYPING EFFECT
========================================== */

const text =
    "Initializing secure connection... Mainframe ready.";

const typingElement =
    document.getElementById(
        "typingText"
    );

let typingIndex = 0;

function typeText() {

    if (
        typingIndex <
        text.length
    ) {

        typingElement.textContent +=
            text.charAt(
                typingIndex
            );

        typingIndex++;

        setTimeout(
            typeText,
            35
        );
    }
}

typeText();


/* ==========================================
   LOCAL VIEW COUNTER
========================================== */

let views =
    Number(
        localStorage.getItem(
            "frogViews"
        ) || 0
    );

views++;

localStorage.setItem(
    "frogViews",
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

function updateSessionTime() {

    const elapsed =
        Math.floor(
            (Date.now() -
                sessionStart) /
            1000
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
    updateSessionTime,
    1000
);


/* ==========================================
   MODULE BUTTONS
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
                    module.dataset.name;

                const url =
                    moduleLinks[name];

                console.log(
                    `[MAINFRAME] Accessing ${name}`
                );

                playClick();

                if (
                    !url ||
                    url.includes(
                        "example.com"
                    )
                ) {

                    console.log(
                        `[MAINFRAME] ${name} has no URL configured.`
                    );

                    return;
                }

                /*
                    Open in a new tab.

                    noopener prevents the
                    destination from accessing
                    the original page through
                    window.opener.
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
   SOUND
========================================== */

let soundEnabled =
    true;

const soundButton =
    document.getElementById(
        "soundToggle"
    );

function playClick() {

    if (!soundEnabled) {
        return;
    }

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    const audio =
        new AudioContext();

    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();

    oscillator.frequency.value =
        500;

    oscillator.type =
        "square";

    gain.gain.setValueAtTime(
        0.025,
        audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.06
    );

    oscillator.connect(
        gain
    );

    gain.connect(
        audio.destination
    );

    oscillator.start();

    oscillator.stop(
        audio.currentTime + 0.06
    );
}


soundButton.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;

        soundButton.textContent =
            soundEnabled
                ? "SOUND: ON"
                : "SOUND: OFF";
    }
);


/* ==========================================
   CONSOLE
========================================== */

console.log(
    "%c FROGS // MAINFRAME ",
    "color:#00ff9c;font-size:20px;font-weight:bold;"
);

console.log(
    "%c SYSTEM ONLINE ",
    "color:#00eaff;font-size:12px;"
);

