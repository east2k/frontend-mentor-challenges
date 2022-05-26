const itemContainer = document.getElementsByClassName("item-container");

for (let i = 0; i < itemContainer.length; i++) {
    itemContainer[i].addEventListener('click', () => {
        console.log(itemContainer[i].classList.contains("active"));
        if (itemContainer[i].classList.contains("active")) {
            itemContainer[i].classList.remove("active");
        } else {
            let activeElem = document.querySelector('.active');
            if (activeElem !== null) activeElem.classList.remove("active");
            
            itemContainer[i].classList.add("active");
        }
    });
}