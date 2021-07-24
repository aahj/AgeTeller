import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newDate: '',
            birthDay: '1992-01-31',
            showStats: false
        }
    }
    changeBirthday() {
        console.log(this.state);
        this.setState({
            birthDay: this.state.newDate,
            showStats: true
        });
    };

    render() {
        return (
            <div className='App'>
                <h2>Input Your Birthday</h2>
                <Form inline>
                    <FormControl type='date' onChange={e => this.setState({ newDate: e.target.value })} />
                    <Button variant="outline-dark" onClick={() => this.changeBirthday()}>Submit</Button>
                </Form>
                <br />
                {
                    this.state.showStats ?
                        <div className='statistic fade'><AgeStats date={this.state.birthDay} /></div> : <div></div>
                }

            </div>
        )
    }
}
export default App;