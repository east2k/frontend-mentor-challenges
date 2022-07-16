const slider = document.querySelector(".slider");

function setBackgroundSize(slider) {
    slider.style.setProperty("--background-size", `${getBackgroundSize(slider)}%`);
}

setBackgroundSize(slider);

slider.addEventListener('input', () => setBackgroundSize(slider));

function getBackgroundSize(slider) {
    const min = +slider.min || 0;
    const max = +slider.max || 100;
    const value = +slider.value;

    const size = (value - min) / (max - min) * 100;

    return size;
}
