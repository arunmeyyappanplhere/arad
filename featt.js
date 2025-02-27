window.onload = () => {
    let counter1 = document.getElementById("counter-stuck");
    let count1 = 0;
    let target1 = 12; // Change this to the number you want to count to
    let speed1 = 100; // Time in milliseconds between each increase

    let interval1 = setInterval(() => {
        count1++;
        counter1.innerText = `${count1}%`;

        if (count1 === target1) {
            clearInterval(interval1);
        }
    }, speed1);
    let counter2 = document.getElementById("counter-possible");
    let count2 = 0;
    let target2 = 95; // Change this to the number you want to count to
    let speed2 = 20; // Time in milliseconds between each increase

    let interval2 = setInterval(() => {
        count2++;
        counter2.innerText = `${count2}%`;

        if (count2 === target2) {
            clearInterval(interval2);
        }
    }, speed2);
};