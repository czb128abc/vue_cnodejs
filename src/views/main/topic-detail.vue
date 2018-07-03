<script>
import { mapState } from "vuex";
export default {
  name: "topicDetail",
  computed: mapState({
    topic: state => state.condejs.topic,
    replies: state => state.condejs.topic.replies || []
  }),
  mounted() {
    this.query();
  },
  methods: {
    query() {
      const { params } = this.$route;
      const { id } = params;
      this.$store.dispatch("condejs/queryTopicInfo", {
        id
      });
    },
    topic() {
      return this.condejs.topic;
    }
  }
};
</script>

<template>
    <div>
        <Card >
            <p slot="title">{{topic.title}}</p>
            <div class="reply-content markdown-body" v-html="topic.content"></div>
            
        </Card>
        <Card >
            <p slot="title">{{replies.length}}人回复</p>
            <p>
                <div v-for="reply in replies">
                    <div>
                        <div><Avatar icon="person" :src="reply.author.avatar_url" />{{reply.author.loginname}}</div>
                        <div class="reply-content markdown-body" v-html="reply.content"></div>
                    </div>
                </div>
            </p>
        </Card>
    </div>
</template>

