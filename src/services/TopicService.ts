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
    authorId: string;
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

async function getTopic(id: string): Promise<TopicDto> {
    const res = await axios.get(API_URL + `/topics/${id}`);
    return res.data;
}

async function deleteTopic(id: string): Promise<TopicDto> {
    const res = await axios.delete(API_URL + `/topics/${id}`, {
        withCredentials: true,
    });
    return res.data;
}

const functions = { createTopic, getAllTopics, getTopic, deleteTopic };
export default functions;
