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
      <Card />
      <Card />
      <Card />
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
      this.position = "";
      this.location = "";
      this.fetchData();
    },
    async fetchData() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/us/${process.env.BASE_PARAMS}&app_id=${process.env.VUE_APP_ID}&app_key=${process.env.VUE_APP_KEY}&what=${this.position}&where=${this.location}`
        );

        console.log("res.data: ", res.data);
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
