<template>
  <div class="row m-auto">
    <div class="col-6 m-auto w-auto">
      <h4 class="upperText">Please Set Url:</h4>
    </div>
  </div>
  <div class="row m-auto">
    <div class="col-md-6 m-auto col-xs-12">
      <input
        v-model="url"
        type="text"
        class="form-control urlInput"
        placeholder="https://www.shortlink.com"
      />
    </div>
  </div>
  <div class="row m-auto">
    <div class="col-6 m-auto w-auto mt-2">
      <button @click="postUrl" class="btn btn-danger">Cut Link!</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: null,
      data: null,
    };
  },
  methods: {
    async postUrl() {
      axios
        .post("http://192.168.1.103:8080/url", { url: this.url })
        .then((response) => {
          const code = response.data.code;
          this.$router.push({
            name: "ResultPage",
            query: { code: code, url: this.url },
          });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
