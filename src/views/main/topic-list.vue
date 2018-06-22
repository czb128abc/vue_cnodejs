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
      this.$store.dispatch("condejs/queryTopicList", { page: 1, tab: tabType });
    },
    calcDate(dataStr) {
      return moment(dataStr).fromNow(true);
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
        <div v-for="topic in condejs.topicList" class="topic-item">
           <Avatar icon="person" :src="topic.author.avatar_url" />
           {{topic.reply_count}}/   
           {{topic.visit_count}}   
          {{ topic.title }}
          {{calcDate(topic.create_at)}}
        </div>
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
