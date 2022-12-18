const summaryContent = document.querySelector(".summary-content");

const createDiv = (addon, date) => {
    const summaryAddonCardDiv = document.createElement("div");
    summaryAddonCardDiv.classList.add("summary-addon-card");
    summaryContent.appendChild(summaryAddonCardDiv);

    const summaryDetailsDiv = document.createElement("div");
    summaryDetailsDiv.classList.add("summary-details");
    summaryAddonCardDiv.appendChild(summaryDetailsDiv);

    const summaryAddonP = document.createElement("p");
    summaryAddonP.classList.add("summary-addon");
    summaryDetailsDiv.appendChild(summaryAddonP);

    const summaryAddonPriceP = document.createElement("p");
    summaryAddonPriceP.classList.add("summary-addon-price");
    summaryAddonCardDiv.appendChild(summaryAddonPriceP);

    const addonPriceSpan = document.createElement("span");
    addonPriceSpan.classList.add("addon-price");
    summaryAddonPriceP.appendChild(addonPriceSpan);

    const addonPriceTimelineSpan = document.createElement("span");
    addonPriceTimelineSpan.classList.add("addon-price-timeline");
    summaryAddonPriceP.appendChild(addonPriceTimelineSpan);

    summaryAddonP.innerHTML = addon.name;
    addonPriceSpan.insertAdjacentHTML('beforeBegin', "+$");
    if (formStatus.flicked) {
        addonPriceSpan.innerHTML = addon.price * 10;
    } else {
        addonPriceSpan.innerHTML = addon.price;
    }
    addonPriceTimelineSpan.insertAdjacentHTML('beforeBegin', "/");
    addonPriceTimelineSpan.innerHTML = date;

    addonPrice = document.getElementsByClassName("addon-price");
    addonPriceTimeline = document.querySelectorAll(".addon-price-timeline");

    summaryAddonCard = document.querySelectorAll(".summary-addon-card")
    summaryAddon = document.querySelectorAll(".summary-addon");
}
