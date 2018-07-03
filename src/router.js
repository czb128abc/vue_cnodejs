const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/main/topic-list.vue'], resolve)
}, {
    path: '/tab/:tabType',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/main/topic-list.vue'], resolve)
}, {
    path: '/topic/detail/:id',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/main/topic-detail.vue'], resolve)
}];
export default routers;