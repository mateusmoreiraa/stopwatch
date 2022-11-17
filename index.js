let interval
let sec = 00
let min = 00
let hr = 00

function watch() {
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
        hr++
        min=0}
    }
    document.getElementById('timer').innerText=hr+':'+ min +':'+sec
}

function Started() {
    interval = setInterval(watch,1000)
}

function Paused() {
    clearInterval(interval)
}

function Stoped() {
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById('timer').innerText='00:00:00'
}