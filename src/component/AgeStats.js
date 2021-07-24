import React, { Component } from 'react';
import Popper from '../assets/popper.jpg'

export default class AgeStats extends Component {
    calculateTime(input_date) {
        let today = new Date().getTime();
        let other_date = new Date(input_date).getTime();
        let difference = Math.abs(today - other_date);
        let days = Math.floor(difference / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;

        return `${years} years, ${months} months, ${days} days since !.`
    }

    render() {
        return (
            <div className='ageStats'>
                <br />
                <h3>Congrats!! {this.calculateTime(this.props.date)}</h3>
                <img src={Popper} alt='popper' className='img-fluid' />
            </div>
        )
    }
}
