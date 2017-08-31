import React, {Component} from 'react';
import { setPeopleSort } from '../../actions/peopleActions';
import { connect } from 'react-redux';
import './SortMenu.css';

class SortMenu extends Component {
  onSortChange(e) {
    this.props.setPeopleSort(e.target.value);
  }

  render() {
    return (
      <div className='SortMenu'>
        Sort by:
          <select 
            defaultValue='default'
            onChange={this.onSortChange.bind(this)}
          >
          <option value='default'>Featured</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
          <option value='vip'>VIP</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortType: state.sortType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPeopleSort: (sortType) => dispatch(setPeopleSort(sortType))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
