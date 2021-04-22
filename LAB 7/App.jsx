import React from 'react';
import Posts from './components/Posts';

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
export default class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Posts posts={posts}/>
        </div>;
    }
}