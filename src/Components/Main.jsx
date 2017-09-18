import React from 'react';

export default class Main extends React.Component {
    constructor(){
        super();
    }

    _log(methodName, args){
        console.log(methodName, args);
    }

    componentWillUpdate(){
        this._log('componentWillUpdate', arguments);
    }

    componentDidUpdate(){
        this._log('componentDidUpdate', arguments);
    }

    componentWillMount(){
        this._log('componentWillMount', arguments);
    }

    componentDidMount(){
        this._log('componentDidMount', arguments);
    }

    componentWillUnmount(){
        this._log('componentWillUnmount', arguments);
    }

    shouldComponentUpdate(newProps, newState){

    }

    render(){
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}
