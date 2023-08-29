import axios from 'axios';
import { mattermost_server } from '../utils/setting'

let api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
})

// HEADER
export const setHeader = (token: string) => {
  
  if(token) {

  api = axios.create({
    headers: {
      'Authorization': `BEARER ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  });

  return true;
  }
  else return false;
}

// USERS
export const loginUser = async (data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/users/login`,data);
    return response;
  } catch(error) {
    return error;
  }
}

export const getUser = async (id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/users/${id}`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getUsers = async () => {
  try{
    const response = await api.get(`${mattermost_server}/users`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getUserWithUsername = async (username: string) => {
  try{
    const response = await api.get(`${mattermost_server}/users/username/${username}`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getUserWithEmail = async (email: string) => {
  try{
    const response = await api.get(`${mattermost_server}/users/email/${email}`);
    return response;
  } catch(error) {
    return error;
  }
}


// TEAMS 
export const createTeam = async (data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/teams`,data);
    return response;
  } catch(error) {
    return error;
  }
}

export const getTeam = async (id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/teams/${id}`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getTeams = async () => {
  try{
    const response = await api.get(`${mattermost_server}/teams`);
    return response;
  } catch(error) {
    return error;
  }
}

export const inviteToTeam = async (teamId: string, userId: string) => {
  try{
    const response = await api.post(`${mattermost_server}/teams/${teamId}/members/batch?graceful=true`, 
    [{
      team_id: teamId, 
      user_id: userId
    }]
    );
    return response;
  } catch(error) {
    return error;
  }
}

// CHANNELS
export const createChannel = async (data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/channels`,data);
    return response;
  } catch(error) {
    return error;
  }
}

export const createDirectMessageChannel = async (user1Id: string, user2Id: string) => {
  try{
    const response = await api.post(`${mattermost_server}/channels/direct`,[user1Id, user2Id]);
    return response;
  } catch(error) {
    return error;
  }
}

export const getChannel = async (id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/channels/${id}`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getChannels = async () => {
  try{
    const response = await api.get(`${mattermost_server}/channels`);
    return response;
  } catch(error) {
    return error;
  }
}

export const inviteMembersToChannel = async (channel_id: string, data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/channels/${channel_id}/members`,data);
    return response;
  } catch(error) {
    return error;
  }
}

// GROUPS
export const createGroup = async (data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/groups`,data);
    return response;
  } catch(error) {
    return error;
  }
}

export const getGroup = async (id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/channels/${id}`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getGroups = async () => {
  try{
    const response = await api.get(`${mattermost_server}/channels`);
    return response;
  } catch(error) {
    return error;
  }
}

// POSTS
export const createPost = async (data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/posts`,data);
    return response;
  } catch(error) {
    return error;
  }
}

export const getPost = async (id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/channels/${id}/posts`);
    return response;
  } catch(error) {
    return error;
  }
}

export const getSinglePost = async (id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/posts/${id}`);
    return response;
  } catch(error) {
    return error;
  }
}

// Emojies
export const getEmojies = async () => {
  try{
    const response = await api.get(`${mattermost_server}/api/v4/emoji`);
    return response;
  } catch(error) {
    return error;
  }
}

// Reactions
export const createReactions = async (data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/reactions`,data);
    return response;
  } catch(error) {
    return error;
  }
}

export const getReactionsForAPost = async (post_id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/posts/${post_id}/reactions`);
    return response;
  } catch(error) {
    return error;
  }
}

// THREADS
export const getThreadsForAPost = async (post_id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/posts/${post_id}/thread`);
    return response;
  } catch(error) {
    return error;
  }
}

// FILES 
export const getFiles = async (file_id: string) => {
  try{
    const response = await api.get(`${mattermost_server}/files/${file_id}`);
    return response;
  } catch(error) {
    return error;
  }
}

export const createFiles = async (channel_id: string, filename: string, data: object) => {
  try{
    const response = await api.post(`${mattermost_server}/files?channel_id=${channel_id}&filename=${filename}`,data);
    return response;
  } catch(error) {
    return error;
  }
}

// ROLES
export const updateUserRole = async (userId: string, data: object) => {
  try{
    const response = await api.put(`${mattermost_server}/users/${userId}/roles`,data);
    return response;
  } catch(error) {
    return error;
  }
}