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
        console.log(response)
        this.props.loadPeople(response.data);
      });
  }

  render() {
    let people = this.props.people.map((person) => {
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
    sortType: state.sortType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPeople: (people) => dispatch(loadPeople(people))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleGrid);