function copyIP() {
    const ipText = document.querySelector(".ip").textContent;
    navigator.clipboard.writeText(ipText).then(() => {
        alert("Server IP copied to clipboard: " + ipText);
    });
}
