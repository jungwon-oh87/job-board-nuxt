<template>
  <div>
    <b-card
      border-variant="primary"
      header="Header"
      :titleProp="this.jobTitle"
      :companyProp="company"
      header-text-variant="primary"
      style="max-width: 12rem;"
      class="m-2"
    >
      <!-- <b-card-title class="text-truncate">{{ this.jobTitle }}</b-card-title> -->
      <b-card-text class="mt-3">
        Company name: <strong>{{ this.company }}</strong>
      </b-card-text>

      <b-button href="#" variant="primary">See details</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    titleProp: String,
    companyProp: String
  },
  computed: {
    titleText() {
      return this.jobTitle;
    }
  },
  data() {
    return {
      company: this.companyProp,
      jobTitle: this.titleProp
    };
  }
};
</script>

<style></style>
