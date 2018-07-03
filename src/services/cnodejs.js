import util from '../libs/util';
const { ajax } = util;

export const queryTopicsByType = async function (page = 1, tab = 'all', limit = 20) {
    const result = await ajax(`/topics?tab=${tab}&page=${page}&limit=${limit}`);
    return result.data;
};

export const queryTopicInfo = async function (id) {
    const result = await ajax(`/topic/${id}`);
    return result.data;
};