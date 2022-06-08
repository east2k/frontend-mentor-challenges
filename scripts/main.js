const filters = {
  difficulty: {
    newbie: false,
    junior: false,
    intermediate: false,
    advanced: false,
  },
  type: {
    html: false,
    css: false,
    js: false,
  },
};

const handleOnCheckboxChange = (name, value) => {
  // change filter object value
  filters[name][value] = !filters[name][value];
  // actual filter
  const list = filterChallenges(challengeList, filters);
  // render filtered list
  renderChallenges(list);
};

renderChallenges(challengeList);
