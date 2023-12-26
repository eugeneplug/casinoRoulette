let sound = document.getElementById('sound');
let btn = document.querySelector('.start');

btn.addEventListener('click', function() {
    sound.play();
});

function startGame() {
    let Go = document.querySelector ('.startGame');

    Go.addEventListener('click', function() {
        Go.style.display = 'none'
    });
}