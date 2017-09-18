import React from 'react';

export default class InputUser extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.props.onChange}/>
            </div>
        );
    }
}