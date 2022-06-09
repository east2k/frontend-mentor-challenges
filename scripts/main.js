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

const handleOnChangeCheckbox = (name, value) => {
    filters[name][value] = !filters[name][value];

    const list = filterChallenges(challengeList, filters);

    renderChallenges(list);
}
 
renderChallenges(challengeList);