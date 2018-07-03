<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  name: "topicList",
  mounted() {
    this.query();
  },
  computed: mapState({
    condejs: "condejs"
  }),
  methods: {
    query() {
      const { params } = this.$route;
      const { tabType } = params;
      this.$store.dispatch("condejs/queryTopicList", {
        tab: tabType,
        isAppendData: false
      });
    },
    calcDate(dataStr) {
      return moment(dataStr).fromNow(true);
    },
    handleReachBottom() {
      const { params } = this.$route;
      const { tabType } = params;
      const action = this.$store.dispatch("condejs/queryTopicList", {
        tab: tabType,
        isAppendData: true
      });
      action.then(data => console.log(data));
    }
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      this.query();
    }
  }
};
</script>

<template>
    <div class="topic-list">
        <Scroll :on-reach-bottom="handleReachBottom" height="600"> 
          <div v-for="topic in condejs.topicList" class="topic-item">
            <Avatar icon="person" :src="topic.author.avatar_url" />
            {{topic.reply_count}}/   
            {{topic.visit_count}}   
            <router-link :to="{path:`/topic/detail/${topic.id}`}">{{ topic.title }}</router-link>
            {{calcDate(topic.create_at)}}
          </div>
        </Scroll>
        
    </div>
</template>
<style lang="less" scoped>
.topic {
  &-list {
    background: #ffffff;
  }

  &-item {
    padding: 8px;
    &:hover {
      background-color: aquamarine;
    }
  }
}
</style>
