const navDropdown = document.querySelectorAll(".nav-dropdown");
const dropdownLabel = document.querySelectorAll(".dropdown-label");
const dropdownContent = document.querySelectorAll(".dropdown-content");

dropdownLabel.forEach((label, index) => {
    document.addEventListener('click', (e) => {
        if (e.target.isEqualNode(label)) {
            return navDropdown[index].classList.toggle("active");
        }

        if (navDropdown[index].contains(e.target)) {
            return navDropdown[index].classList.add("active");
        }

        return navDropdown[index].classList.remove("active");
    });
});
