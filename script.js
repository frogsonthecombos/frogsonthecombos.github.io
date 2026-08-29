function changeMessage() {

    const messages = [
        "🐸 Ribbit!",
        "You clicked the frog button!",
        "Welcome to the combo zone!",
        "This website actually works!",
        "🐸🐸🐸 MORE FROGS!",
        "You have discovered the secret.",
        "The frog approves."
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("message").textContent = randomMessage;
}

