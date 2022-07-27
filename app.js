

setInterval(updateClock, 1000);


function updateClock() {

    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");

    const date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    const secondDegrees = seconds * 6 + 90;
    const minuteDegrees = minutes * 6 + 90;
    const hourDegrees = hours * 15 + 90;

    secondHand.setAttribute("style", `transform:rotate(${secondDegrees}deg);`);
    minuteHand.setAttribute("style", `transform:rotate(${minuteDegrees}deg);`);
    hourHand.setAttribute("style", `transform:rotate(${hourDegrees}deg);`);
}
