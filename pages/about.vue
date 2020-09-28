<template>
  <div>
    <p>About Page</p>
    <!-- <p>{{ API_KEY }}</p> -->
  </div>
</template>
<script>
export default {
  created() {
    console.log("check: ", this.API_KEY);
  },
  data() {
    return {
      API_KEY: process.env.VUE_APP_KEY
    };
  },
  head() {
    return {
      title: "About The App",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best Job Board for international students"
        }
      ]
    };
  }
};
</script>
