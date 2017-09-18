import React from 'react';
import InputUser from './InputUser';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "World"
        };

        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(e){
        let value = e.target.value || "World";
        this.setState({
            name: value
        });
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}!</h1>
                <InputUser onChange={this.onNameChange}/>
            </div>
        );
    }
}
