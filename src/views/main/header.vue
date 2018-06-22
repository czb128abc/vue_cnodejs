<script>
export default {
  name: "appHeader",
  methods: {
    handleMenuSelect(path) {
      this.$router.push(path);
    }
  }
};
</script>

<template>
    <Menu mode="horizontal" :active-name="$route.path" @on-select="handleMenuSelect">
         <MenuItem name="/">
            首页 
        </MenuItem>
        <MenuItem name="/tab/good">
            精华 
        </MenuItem>
        <MenuItem name="/tab/share">
            分享 
        </MenuItem>
        <MenuItem name="/tab/ask">
            问答
        </MenuItem>
        <MenuItem name="/tab/job">
            招聘
        </MenuItem>
    </Menu>
</template>
