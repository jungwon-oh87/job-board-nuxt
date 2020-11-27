<template>
  <!-- <b-card :titleProp="this.title"> -->
  <b-card>
    <template v-slot:header>
      {{ job.title }}
    </template>
    <b-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, deleniti
      id. Tempora quis tempore illo qui itaque natus fugit molestias
      perspiciatis quam. Cum natus officia similique fugit! Natus, possimus
      cumque!
    </b-card-text>
  </b-card>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "DetailCard",
  props: {
    job: Object,
  },
  // data() {
  // console.log("title: ", this.props.titleProp);
  // return {
  //   title: this.titleProp,
  // };
  // },
  created() {
    console.log("in created, props:  ", this.job);
  },
  mounted() {
    console.log("in mounted, props:  ", this.job);
  },
  //   watch: {
  //     titleProp: function (newOne) {
  //       this.title = newOne;
  //     },
  //   },
});
</script>

<style>
</style>