import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export interface CreatePostDto {
    title: string;
    content: string;
}

export interface PostDto {
    id: string;
    title: string;
    content: string;
    authorName: string;
    authorId: string;
    createdOn: string;
}

const createPost = (post: CreatePostDto) => {
    return axios.post(API_URL + '/posts', post, {
        withCredentials: true,
    });
};

async function getPostsForTopic(topicId: string): Promise<PostDto[]> {
    const res = await axios.get(API_URL + `/posts/topic/${topicId}`);
    return res.data;
}

async function getPost(id: string): Promise<PostDto> {
    const res = await axios.get(API_URL + `/posts/${id}`);
    return res.data;
}

async function deletePost(id: string): Promise<PostDto> {
    const res = await axios.delete(API_URL + `/posts/${id}`, {
        withCredentials: true,
    });
    return res.data;
}

const functions = { createPost, getPostsForTopic, getPost, deletePost };
export default functions;
