const UUID = require('uuid');

const posts = new Map();

const createPost = ({name, description}) =>{
    const post = {
        name,
        description,
        id: UUID.v4(),
        date:new Date()
    };
    posts.set(post.id,post);
};

const getPosts = () =>{
    //posts.values return an iterator
    // ... deconstructs those iterator into the number of objects
    //[] this wraps it in an array
    //spread operator
    return [...posts.values()]
};

const getPost = (id) => {
    return posts.get(id);
};

module.exports = {createPost,getPost,getPosts};