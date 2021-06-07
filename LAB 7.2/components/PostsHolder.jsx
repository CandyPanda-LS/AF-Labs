import React, {Component} from 'react';
import Posts from "./Posts";
import {Link, Route, Switch} from "react-router-dom";
import AddPost from "./AddPost";

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    },{
        id: 2,
        name: 'Angular',
        description: 'By google'
    }
]

class PostsHolder extends Component {

    constructor(props) {
        super(props);
        this.addPosts = this.addPosts.bind(this)
    }

    addPosts({name, description}){
        posts.push({id: posts.length + 1, name, description});
    }
    render() {
        return (
            <div>

                <Switch>
                    <Route exact path='/posts'>
                        <Posts posts={posts}/>
                    </Route>
                    <Route exact path="/posts/add">
                        <AddPost save={this.addPosts}/>
                    </Route>
                </Switch>
                <Link to="/posts/add">Add</Link>

            </div>
        );
    }
}

export default PostsHolder;