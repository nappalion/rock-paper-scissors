function textTyper(text, interval) {
    let index = 0;
    let introTyper = setInterval(function() {
        if (index < text.length) {
            intro.textContent += text.charAt(index);
            index += 1;
        } else {
            clearInterval(introTyper);
        }
    }, interval);
}

let intro = document.querySelector('.intro');
let text = "Pitou, a chimera ant, has killed your friend! She's threatening humanity by using your murdered friends as puppets. Avenge Kite, Gon, only YOU can save the world...";

textTyper(text, 80);

setTimeout(function() { window.location.replace('game.html'); }, 20000);


const menuThemeAudio = new Audio('assets/sounds/menu-theme.mp3');
menuThemeAudio.volume = 0.2;
menuThemeAudio.play();
