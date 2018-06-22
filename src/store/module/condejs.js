
import * as services from '../../services/cnodejs';

const state = {
    topicList: [],
    topic: {},
    user: {},
    loginname: '',
    accesstoken: '',
    avatar_url: '',
    collectedTopics: [],
    unread: 0,
    notifications: {}
};
const app = {
    namespaced: true,
    state,
    mutations: {
        setTopicList(state, topicList) {
            state.topicList = topicList;
        }
    },
    actions: {
        async queryTopicList({ commit, state }, payload) {
            const { page = 1, tab = 'all' } = payload;
            const result = await services.queryTopicsByType(page, tab);
            return commit('setTopicList', result.data);
        }
    }
};

export default app;
