import React, {Component} from 'react';
import { setPeopleFilter } from '../../actions/peopleActions';
import { connect } from 'react-redux';
import './Categories.css';

class Categories extends Component {
  onFilterChange(e) {
    this.props.setPeopleFilter(e.target.value);
  }

  render() {
    let { people, filterType } = this.props;
    // Get unique categories dynamically from the people
    let categories = [...new Set(people.map((person) => person.category ))];
    let inputs = categories.sort();

    inputs.unshift('none');
    inputs = inputs.map((category) => {
        return (
          <div key={category} className="Categories">
            <input
              type='radio'
              checked={filterType === category}
              value={category}
              id={category}
              name='categories'
              onChange={this.onFilterChange.bind(this)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        );
      });

    return (
      <div className="Categories">
        Categories: {inputs}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterType: state.filterType,
    people: [...state.people]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPeopleFilter: (filterType) => dispatch(setPeopleFilter(filterType))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);