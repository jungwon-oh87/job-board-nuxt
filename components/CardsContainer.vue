<template>
  <div class="card-container">
    <div class="card-brief">
      <card
        v-for="job in jobs"
        :key="job.id"
        :titleProp="job.title"
        :companyProp="job.company.display_name"
        @click.native="clickCard(job)"
      />
    </div>
    <!-- <detail-card :job="jobs" ref="detailCard"/> -->
    <div class="detail" ref="detail">{{ jobs[0].title }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "~/components/Card.vue";
import DetailCard from "~/components/DetailCard.vue";

export default Vue.extend({
  name: "CardsContainer",
  components: {
    Card,
    DetailCard,
  },
  props: {
    jobs: Array,
  },
  methods: {
    clickCard(job) {
      this.$refs["detail"].innerText = job.title;
      // this.$refs["detailCard"]
    },
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
}
.detail {
  width: 100px;
  border: 1px solid red;
}
</style>