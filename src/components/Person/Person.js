import React, {Component} from 'react';
import './Person.css';

export default class Person extends Component {
    render() {
        let {
            name,
            age,
            priority,
            category
        } = this.props;

        let personClasses = `Person col priority-${priority}`;

        return (
            <div className={personClasses}>
                <h2 className='Person-name'>{name}</h2>
                <div className='Person-age'>{age}</div>
                <div className='Person-category'>{category}</div>
            </div>
        );
    }
}