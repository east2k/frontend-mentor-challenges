const timeFrameOptions = document.querySelectorAll(".timeframe");
const cardTitle = document.querySelectorAll(".card-header p");
const givenTime = document.querySelectorAll(".given-time");
const previousTime = document.querySelectorAll(".previous-time");

const changeTime = (range) => {
    cardTitle.forEach((title, i) => {
        givenTime[i].innerHTML = timelist[i].timeframes[range].current;
        previousTime[i].innerHTML = timelist[i].timeframes[range].previous;
    });
}
changeTime("weekly");

timeFrameOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const currentActive = document.querySelector(".active");
        if (currentActive !== null) currentActive.classList.remove("active");
        option.classList.add("active");

        changeTime(option.innerHTML.toLowerCase())
    });
});

