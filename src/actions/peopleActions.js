export const setPeopleSort = (sortType) => {
  return {
    type: 'SET_PEOPLE_SORT',
    sortType: sortType
  }
};

export const loadPeople = (people) => {
  return {
    type: 'LOAD_PEOPLE',
    people: people
  };
}

export const setPeopleFilter = (filterType) => {
  return {
    type: 'SET_PEOPLE_FILTER',
    filterType: filterType
  }
}