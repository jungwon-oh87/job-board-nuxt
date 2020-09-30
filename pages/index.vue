<template>
  <div class="container">
    <b-form class="w-25" @submit="onSubmit">
      <b-form-group label="Key word:">
        <b-form-input
          v-model="position"
          required
          placeholder="Enter your preferred position"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="City:">
        <b-form-input
          v-model="location"
          required
          placeholder="Enter your preferred location"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div class="d-flex flex-wrap">
      <Card
        v-for="job in jobs"
        :key="job.id"
        :titleProp="job.title"
        :companyProp="job.company.display_name"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      jobs: [],
      position: "",
      location: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.fetchData();
      console.log("position: ", this.position);
      console.log("location: ", this.location);
      this.position = "";
      this.location = "";
    },
    makeToast() {
      this.$bvToast.toast(`No data found, man...`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000
      });
    },
    async fetchData() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/us/search/1?app_id=${process.env.VUE_APP_ID}&app_key=${process.env.VUE_APP_KEY}&results_per_page=20&what=${this.position}&where=${this.location}&content-type=application/json`
        );

        // console.log("base url: ", process.env.BASE_URL);
        // console.log("base params: ", process.env.BASE_PARAMS);
        // console.log("vue app id: ", process.env.VUE_APP_ID);
        // console.log("vue app key: ", process.env.VUE_APP_KEY);

        this.jobs = res.data.results;
        console.log("jobs: ", this.jobs);
        if (this.jobs.length === 0) {
          this.makeToast();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  /* text-align: center; */
}
</style>
