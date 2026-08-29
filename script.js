const messages = [
    "🐸 Ribbit!",
    "You clicked the frog button!",
    "Welcome to the combo zone!",
    "This website actually works!",
    "🐸🐸🐸 MORE FROGS!",
    "You have discovered the secret.",
    "The frog approves."
];

const button = document.getElementById("frogButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    message.textContent = randomMessage;
});
