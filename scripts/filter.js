const filterByKeys = (list, filters) => {
  return list.filter((item) => {
    if (
      Object.keys(filters).some(
        (key) =>
          filters[key] &&
          !item.tags.find((x) => x.toLowerCase() === key.toLowerCase())
      )
    ) {
      return false;
    }
    return true;
  });
};

const filterChallenges = (challenges, filters) => {
  const filterDifficulty = Object.values(filters.difficulty).some((x) => x);
  const filterTypes = Object.values(filters.type).some((x) => x);

  let list = challenges;

  if (filterDifficulty) {
    list = filterByKeys(list, filters.difficulty);
  }

  if (filterTypes) {
    list = filterByKeys(list, filters.type);
  }

  return list;
};
