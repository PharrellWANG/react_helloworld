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

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
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

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // lifecycle hooks
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h4>** ==================== **</h4>
                <h2>   It is {this.state.date.toLocaleTimeString()}.</h2>
                <h4>** ==================== **</h4>
            </div>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div>
                <Clock/>

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
