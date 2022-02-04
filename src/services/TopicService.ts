import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export interface CreateTopicDto {
    name: string;
    description: string;
}

export interface TopicDto {
    id: string;
    name: string;
    description: string;
    authorName: string;
    updatedOn: string;
}

const createTopic = (topic: CreateTopicDto) => {
    return axios.post(API_URL + '/topics', topic, {
        withCredentials: true,
    });
};

async function getAllTopics(): Promise<TopicDto[]> {
    const res = await axios.get(API_URL + '/topics');
    return res.data;
}

const functions = { createTopic, getAllTopics };
export default functions;
