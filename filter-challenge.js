const dropdown = document.getElementsByClassName("dropdown");
const dropdownOptions = document.getElementsByClassName("dropdown-options");

// Dropdown toggle
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', () => {
        dropdown[i].classList.toggle("expand");
        clickOutside(i);

    });
}

// When clicked outside dropdown
const clickOutside = (i) => {
    document.addEventListener('click', (e) => {
        if (!dropdown[i].contains(e.target)) {
            dropdown[i].classList.remove("expand");
        }
    });
}



const filterChallenges = (challenge, filter) => {
    const filterKeys = Object.keys(filter);
    const difficultyKeys = Object.keys(filter.difficulty);
    const typeKeys = Object.keys(filter.type);

    const filterList = challenge.filter((challenge) => {
        let include = true;
        for (let i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] === "difficulty") {
                for (let diff of difficultyKeys) {
                    // console.log(filter.difficulty[diff] === false)
                    // console.log(diff === challenge.tags[0].toLowerCase() && filter.difficulty[diff] === false)
                    if (diff === challenge.tags[0].toLowerCase() && filter.difficulty[diff] === false) include = false;
                }
            } else if (filterKeys[i] === "type") {}
        }
        return include;
    });

    for(let i = 0; i<filterList.length; i++){
        addChallenge(filterList[i])
    }}

// Filters Object
const filters = {
    difficulty: {
        newbie: false,
        junior: false,
        intermediate: false,
        advanced: false
    },
    type: {
        html: false,
        css: false,
        js: false
    }
}

// Update Filters depending on clicked

const updateFilterObject = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    filters[name][value] = checked
    filterChallenges(challengeList, filters);
}

const difficultyList = document.querySelectorAll("input[name='difficulty'");
const typeList = document.querySelectorAll("input[name='type'");

// add listener to difficulty list
for (let i = 0; i < difficultyList.length; i++) {
    difficultyList[i].addEventListener('change', updateFilterObject)
}
for (let i = 0; i < typeList.length; i++) {
    typeList[i].addEventListener('change', updateFilterObject)
}