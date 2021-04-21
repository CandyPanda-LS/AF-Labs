const UUID = require('uuid');
const {getAll, getById, removeById, save, update} = require('../dal/post.dao');

const createPost = async ({name, description}) => {
    const post = {
        id: UUID.v4(),
        name:name,
        description:description,
        postedDate: new Date()
    }
    return await save(post);
};

const getPosts = async () =>{
    return await getAll();
};

const getPost = async (id) => {
    return await getById(id);
};

const deletePost = async (id)=>{
    return await removeById(id);
};

const updatePost = async (id,{name, description, postedDate})=>{
    const post = {
        name:name,
        description:description,
        postedDate: postedDate
    }
    return await update(id,post);};

module.exports = {createPost,getPost,getPosts,deletePost,updatePost};