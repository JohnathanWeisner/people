const initialState = {
  people: [],
  sortType: 'default',
  filterType: 'none'
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'LOAD_PEOPLE': 
      return Object.assign({}, state, {people: [...action.people]});
    case 'SET_PEOPLE_SORT':
      return Object.assign({}, state, {sortType: action.sortType});
    case 'SET_PEOPLE_FILTER':
      return Object.assign({}, state, {filterType: action.filterType});
    default:
      return state;
  }
};