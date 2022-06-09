const dropdownContainer = document.querySelector(".dropdown-container");
const dropdown = document.querySelector(".dropdown");

const handleClickOnDropdown = (e) => {
    if (e.target.isEqualNode(dropdown)) {
        return dropdownContainer.classList.toggle("expand");
    }

    if (dropdownContainer.contains(e.target)) {
        return dropdownContainer.classList.add("expand");
    }

    return dropdownContainer.classList.remove("expand");
}

document.addEventListener('click', handleClickOnDropdown)
