function getTimeDiv(time) {
    let timeDiv = document.querySelector(`#${time}`)
    return timeDiv.firstElementChild
}


function getRemainingTime(future) {
    let now = new Date()
    return new Date(future.getTime() - now.getTime())
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function setCountdown() {
    let inputElement = document.querySelector("#input-time")

    if (inputElement.value == "") {return}

    let futureTime = new Date(inputElement.value)
    inputElement.value = ""

    if (getRemainingTime(futureTime) < 0) {
        alert("Atenção! Você só pode usar tempos futuros!")
        return
    }
    
    document.body.firstElementChild.remove()

    while (getRemainingTime(futureTime) >= 0) {
        var time = getRemainingTime(futureTime)
        getTimeDiv("days").innerHTML = (time / 86400000)|0
        time %= 86400000
        getTimeDiv("hours").innerHTML = (time / 3600000)|0
        time %= 3600000
        getTimeDiv("minutes").innerHTML = (time / 60000)|0
        time %= 60000
        getTimeDiv("seconds").innerHTML = (time / 1000)|0
        await sleep(1000)
    }
}
