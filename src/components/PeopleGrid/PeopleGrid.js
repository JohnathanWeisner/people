import React, {Component} from 'react';
import Person from '../Person/Person';
import { loadPeople } from '../../actions/peopleActions';
import { connect } from 'react-redux';

class PeopleGrid extends Component {
  componentDidMount() {
    fetch('/people.json')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.props.loadPeople(response.data);
      });
  }

  render() {
    let { sortType, filterType } = this.props;
    let people = [...this.props.people].sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        switch (sortType) {
          case 'asc':
            return aName > bName ? 1 : (aName < bName ? -1 : 0);
          case 'desc':
            return aName < bName ? 1 : (aName > bName ? -1 : 0);
          case 'vip':
            return a.priority > b.priority ? 1 : (a.priority < b.priority ? -1 : 0);
          default:
            return 0;
        }
      })
      .filter((person) => {
        // If vip is selected in the sort by the only show priorities 1 and 2
        if (sortType === 'vip') {
          return [1, 2].indexOf(person.priority) > -1;
        }
        return true;
      })
      .filter((person) => {
        if (filterType !== 'none') {
          return person.category === filterType;
        }
        return true;
      })
      .map((person) => {
        return <Person key={person.name} { ...person }></Person>;
      });

    return (
        <div className='row'>{ people }</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
    sortType: state.sortType,
    filterType: state.filterType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPeople: (people) => dispatch(loadPeople(people))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleGrid);