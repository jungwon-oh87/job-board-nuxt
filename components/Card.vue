<template>
  <div>
    <b-card
      border-variant="primary"
      header="Header"
      :titleProp="this.jobTitle"
      :companyProp="company"
      header-text-variant="primary"
      style="width: 12rem; height: 15rem"
      class="m-2"
    >
      <h6 class="text-truncate">
        {{ this.cleanText(this.jobTitle) }}
      </h6>
      <b-card-text class="mt-3 mb-0"> Company name: </b-card-text>
      <b-card-text
        class="overflow-hidden font-weight-bold w-100 h-25 text-truncate"
      >
        {{ this.company }}
      </b-card-text>

      <b-button size="sm" variant="primary">See details</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    titleProp: String,
    companyProp: String,
  },
  methods: {
    cleanText(input) {
      console.log("cleanText called", input);
      const newText = input.replace(/<\/?[^>]+(>|$)/g, "");
      return newText;
    },
  },

  data() {
    return {
      company: this.companyProp,
      jobTitle: this.titleProp,
    };
  },
};
</script>

<style></style>
