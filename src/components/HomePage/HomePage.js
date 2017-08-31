import React, { Component } from 'react';
import PeopleGrid from '../PeopleGrid/PeopleGrid';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-header">
          <h2>PEOPLE</h2>
        </div>
        <PeopleGrid></PeopleGrid>
      </div>
    );
  }
}

export default HomePage;
