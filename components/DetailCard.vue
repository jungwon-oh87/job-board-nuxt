<template>
  <!-- <b-card :titleProp="this.title"> -->
  <b-card>
    <template v-slot:header>
      {{ titleProp }}
      <!-- {{ this.titleProp }} -->
      <!-- <h4>{{ this.title }}</h4> -->
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
export default {
  props: ["titleProp"],
  data() {
    // console.log("title: ", this.props.titleProp);
    return {
      title: this.titleProp,
    };
  },
  //   watch: {
  //     titleProp: function (newOne) {
  //       this.title = newOne;
  //     },
  //   },
};
</script>

<style>
</style>