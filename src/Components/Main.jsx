import React from 'react';
import InputUser from './InputUser';
import Button from './Button';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "World"
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onNameChange(e){
        let value = e.target.value || "World";
        this.setState({
            name: value
        });
    }

    onButtonClick(){
        this.setState({
            name: "World"
        });
    }

    render(){
        let props = {
            name: "Reset",
            onChange: this.onButtonClick
        };

        return(
            <div>
                <h1>Hello {this.state.name}!</h1>
                <InputUser onChange={this.onNameChange}/>
                <Button {...props}/>
            </div>
        );
    }
}
