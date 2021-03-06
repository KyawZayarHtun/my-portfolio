console.log("hi");

let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme == null) {
    setTheme("light");
} else {
    setTheme(theme);
}

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener("click", function () {
        let mode = this.dataset.mode;
        console.log("option click", mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById("theme-style").href = "style.css";
    }
    if (mode == "blue") {
        document.getElementById("theme-style").href = "Theme/blue.css";
    }
    if (mode == "green") {
        document.getElementById("theme-style").href = "Theme/green.css";
    }
    if (mode == "purple") {
        document.getElementById("theme-style").href = "Theme/purple.css";
    }

    localStorage.setItem('theme', mode);
}
