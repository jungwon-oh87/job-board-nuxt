<template>
  <div>
    <b-card
      border-variant="primary"
      :titleProp="this.jobTitle"
      :companyProp="company"
      header-text-variant="primary"
      style="width: 100%"
      class="m-2"
    >
      <a class="stretched-link" style="color: black; cursor: pointer">
        <h3 class="text-truncate">
          {{ this.cleanText(this.jobTitle) }}
        </h3>
      </a>
      <b-card-text class="mt-3 mb-0"> Company name: </b-card-text>
      <b-card-text
        class="overflow-hidden font-weight-bold w-100 h-25 text-truncate"
      >
        {{ this.company }}
      </b-card-text>

      <!-- <b-button size="sm" variant="primary">Apply</b-button> -->
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Card",
  props: {
    titleProp: String,
    companyProp: String,
  },
  methods: {
    cleanText(input) {
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
});
</script>

<style></style>
