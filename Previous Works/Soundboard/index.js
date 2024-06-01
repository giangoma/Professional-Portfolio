const convertBtn = document.querySelector(".speakBtn");
convertBtn.addEventListener("click", () => {
    let txt = document.querySelector("#text").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-us";
    speech.text = txt;
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    speechSynthesis.speak(speech);
});

window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const soundboard = document.querySelectorAll(".soundboard div");

    soundboard.forEach((box, index,) => {
        box.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});

