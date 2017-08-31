import React, {Component} from 'react';
import Person from '../Person/Person';

export default class PeopleGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch('/people.json')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ people: response.data });
      });
  }

  render() {
    let { people } = this.state;
    let peopleDivs = people.map((person) => {
      return <Person { ...person }></Person>;
    });

    return (
        <div className='row'>{ peopleDivs }</div>
    );
  }
}