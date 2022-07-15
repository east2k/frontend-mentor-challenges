const totalAmount = document.querySelector(".total-amount");
const totalBackers = document.querySelector(".total-backer");
const totalDays = document.querySelector(".total-days");

const lowPledge = document.querySelectorAll(".low");
const mediumPledge = document.querySelectorAll(".medium");
const highPledge = document.querySelectorAll(".high");

const updateDetails = () => {
    totalAmount.innerHTML = pledgeDetail["totalCash"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalBackers.innerHTML = pledgeDetail["totalBackers"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalDays.innerHTML = pledgeDetail["daysLeft"];

    lowPledge[0].innerHTML = remainingPledge.low;
    lowPledge[1].innerHTML = remainingPledge.low;

    mediumPledge[0].innerHTML = remainingPledge.medium;
    mediumPledge[1].innerHTML = remainingPledge.medium;

    highPledge[0].innerHTML = remainingPledge.high;
    highPledge[1].innerHTML = remainingPledge.high;
}

updateDetails();