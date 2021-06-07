import React from 'react';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import PostsHolder from "./components/PostsHolder";

export default class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/posts">
                        <PostsHolder/>
                    </Route>
                    <Redirect to="/posts" />
                </Switch>
            </Router>
        );


    }
}