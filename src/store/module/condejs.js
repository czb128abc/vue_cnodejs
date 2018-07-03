
import * as services from '../../services/cnodejs';

const state = {
    topicList: [],
    topicListCurrentPage: 1,
    topicListTabType: 'all',
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
        setTopicList(state, payload) {
            state.topicList = payload;
        },
        setTopicListCurrentPage(state, payload) {
            const { currentPage, tab } = payload;
            state.topicListCurrentPage = currentPage;
            state.topicListTabType = tab;
        },
        setTopic(state, payload) {
            state.topic = payload;
        },
    },
    actions: {
        async queryTopicList({ commit, state }, payload) {
            const { tab = 'all', isAppendData } = payload;
            let currentPage = 1;
            if (isAppendData) {
                currentPage = 1 + state.topicListCurrentPage;
            }
            const result = await services.queryTopicsByType(currentPage, tab);
            const list = result.data;
            if (isAppendData) {
                list.unshift(...state.topicList);
            }
            commit('setTopicList', list);
            commit('setTopicListCurrentPage', { currentPage, tab });
            return true;
        },
        async queryTopicInfo({ commit, state }, { id }) {

            const result = await services.queryTopicInfo(id);
            commit('setTopic', result.data);
            return true;
        }

    }
};

export default app;
