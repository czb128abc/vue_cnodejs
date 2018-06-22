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
      this.$store.dispatch("condejs/queryTopicList", { a: 1 }, 1);
    },
    calcDate(dataStr) {
      return moment(dataStr).fromNow(true);
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
