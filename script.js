const play_btn = document.querySelector('#play-btn')
const pause_btn = document.querySelector('#pause-btn')
const stop_btn = document.querySelector('#stop-btn')

const equalizer = document.querySelector('.equalizer')
const bars = document.querySelectorAll('.bar')

const audio = new Audio('music.mp3')

const getRandomFloat = (min, max, decimals) => {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);

    return parseFloat(str);
}

play_btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        equalizer.classList.add('active')
        Array.from(bars).forEach(bar =>
            bar.style.animationDelay = getRandomFloat(0, 0.5, 1) + 's'
        )
        Array.from(bars).forEach(bar =>
            bar.style.animationDuration = getRandomFloat(2, 5, 1) + 's'
        )
    }
})

pause_btn.addEventListener('click', () => {
    if (audio.paused == false) {
        audio.pause()
        equalizer.classList.remove('active')
    }
})

stop_btn.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
    equalizer.classList.remove('active')
})