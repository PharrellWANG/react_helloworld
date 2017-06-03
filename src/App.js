import React, {Component} from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};


class App extends Component {
    render() {
        return (
            <div>
                <Welcome name="Sara"/>
                <Welcome name="Cahal"/>
                <Welcome name="Edite"/>

                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}/>
            </div>
        );
    }
}

export default App;
