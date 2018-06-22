
<template>
    <div>
        <appHeader />
        <router-view></router-view>
    </div>
</template>
<script>
import appHeader from "./main/header";
export default {
  name: "app-index",
  components: {
    appHeader
  },
  methods: {
    handleStart() {
      this.$Modal.info({
        title: "Bravo",
        content: "Now, enjoy the convenience of iView."
      });
    }
  }
};
</script>