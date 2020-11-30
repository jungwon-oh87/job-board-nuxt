<template>
  <div class="container">
    <b-card>
      <template v-slot:header>
        {{ cleanText(jobs[index].title) }}
      </template>
      <b-card-body>
        Category: {{ jobs[index].category.label }}<br />
        Type: {{ jobs[index].contract_time }}<br />
        Location: {{ jobs[index].location.display_name }} <br />
        <hr />
        <p>Description: {{ cleanText(jobs[index].description) }}</p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "DetailCard",
  props: {
    jobs: Array,
    index: Number,
  },
  methods: {
    cleanText(input) {
      const newText = input.replace(/<\/?[^>]+(>|$)/g, "");
      return newText;
    },
  },
});
</script>

<style scoped>
.container {
  /* border: 1px solid blue; */
  width: 100%;
}
</style>