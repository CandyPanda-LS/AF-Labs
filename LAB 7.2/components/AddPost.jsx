import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {save} = this.props;
        return (
        <div>
            <Link to="/posts">Posts</Link>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"
                           value={this.state.name}
                           onChange={event =>
                               this.onChange(event)}/>
                </div>
                <div>
                    <label htmlFor="description">Description:
                    </label>
                    <input type="text" name="description"
                           id="description" value={this.state.description}
                           onChange={event =>
                               this.onChange(event)}/>
                </div>
                <div>
                    <button onClick={event => {
                        event.preventDefault();
                        save({name: this.state.name, description:
                            this.state.description});
                        this.setState({
                            name: '',
                            description: ''
                        }
                        )
                    }}>Save
                    </button>
                </div>
            </form>
        </div>

    );
    }
}

export default AddPost;