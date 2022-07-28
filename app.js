const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelector(".hand");

setInterval(updateClock, 1000);


function updateClock() {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    let secondDegrees = seconds * 6 + 90;
    const minuteDegrees = minutes * 6 + 90;
    const hourDegrees = hours * 15 * 2 + 90;

    // these if statements are to prevent the animation from looping backwards when seconds/minutes/hours get set to 0
    if (seconds === 0) {                
        secondHand.classList.add("notransition");
    } else if (seconds === 1) {
        secondHand.classList.remove("notransition");
    }
    if (minutes === 0) {
        minuteHand.classList.add("notransition");
    } else if (minutes === 1) {
        minuteHand.classList.remove("notransition");
    }
    if (hours === 0) {
        hourHand.classList.add("notransition");
    } else if (hours === 1) {
        hourHand.classList.remove("notransition");
    }

    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
