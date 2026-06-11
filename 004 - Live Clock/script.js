// new concepts
// string.padStart(targetLength, padString)... add characters to beginning of the string until you reach target length

function updateClock(){
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    let period = hours >= 12 ? "PM" : "AM";

    // In javascript 0 is falsy value so 0 || 12 will return 12
    hours = hours % 12 || 12 ;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    const colon1 = document.getElementById('colon');
    const colon2 = document.getElementById('colon2');

    if(now.getSeconds() % 2 === 0){
        colon1.style.visibility = "visible";
        colon2.style.visibility = "visible";
    }
    else{
        colon1.style.visibility = "hidden";
        colon2.style.visibility = "hidden";
    }

    const options = {
        weekday : "long",
        year: "numeric",
        month : "long",
        day : "numeric"
    }

    document.getElementById("date").textContent = now.toLocaleString("en-IN", options);

    const hour = now.getHours();

    if(hour >= 6 && hour < 12){
        document.body.style.background = "#87CEEB"
    }
    else if(hour >= 6 && hour < 12){
        document.body.style.background = "#FFD700"
    }
    else if(hour >= 6 && hour < 12){
        document.body.style.background = "#FF8C00"
    }
    else{
        document.body.style.background = "#1B1B2F"
    }
}

updateClock();

setInterval(updateClock, 1000);