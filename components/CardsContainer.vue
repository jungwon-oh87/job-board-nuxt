<template>
  <div class="cards-container">
    <div class="cards-list">
      <card
        v-for="(job, idx) in jobs"
        :key="job.id"
        :titleProp="job.title"
        :companyProp="job.company.display_name"
        @click.native="clickCard(idx)"
      />
    </div>
    <detail-card :jobs="jobs" :index="cardIndex" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "~/components/Card.vue";
import DetailCard from "~/components/DetailCard.vue";

export default Vue.extend({
  name: "CardsContainer",
  data() {
    return {
      cardIndex: 0,
    };
  },
  components: {
    Card,
    DetailCard,
  },
  props: {
    jobs: Array,
  },
  methods: {
    clickCard(index) {
      this.cardIndex = index;
    },
  },
});
</script>

<style scoped>
.cards-container {
  display: flex;
  overflow: hidden;
  /* border: 1px solid red; */
}
.cards-list {
  width: 50%;
  /* border: 1px solid red; */
}
</style>