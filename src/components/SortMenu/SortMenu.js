import React, {Component} from 'react';

export default class SortMenu extends Component {
  render() {
    return (
      <div>
        Sort:
          <select 
            defaultValue="default">
          <option value="default">Featured</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="vip">VIP</option>
        </select>
      </div>
    );
  }
}