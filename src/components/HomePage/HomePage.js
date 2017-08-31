import React, { Component } from 'react';
import PeopleGrid from '../PeopleGrid/PeopleGrid';
import SortMenu from '../SortMenu/SortMenu';
import Categories from '../Categories/Categories';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-header">
          <h2>PEOPLE</h2>
        </div>
        <SortMenu/><Categories/>
        <PeopleGrid/>
      </div>
    );
  }
}

export default HomePage;
