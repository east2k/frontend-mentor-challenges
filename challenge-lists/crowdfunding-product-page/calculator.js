const barProgress = document.querySelector(".bar");

const calculate = (selectedAmount, values) => {
    pledgeDetail.totalCash += parseInt(selectedAmount);
    pledgeDetail.totalBackers++;

    for (let i = 0; i < values.length; i++) {
        const pledges = Object.keys(remainingPledge)
        if (values === pledges[i]) {
            remainingPledge[values]--;
        }
    }

    barProgress.style.width = ((pledgeDetail.totalCash / 100000) * 100).toFixed(2)  + "%";

    if(barProgress.style.width >= "100%"){
        barProgress.style.color = "var(--dark-cyan)";
    }

    updateDetails();
}
