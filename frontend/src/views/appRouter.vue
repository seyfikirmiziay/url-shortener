<template>
  <span></span>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      code: "",
    };
  },
  created() {
    this.code = this.$route.params.code;
    this.getUrl();
  },
  methods: {
    async getUrl() {
      axios
        .get(`http://192.168.1.103:8080/url/${this.code}`)
        .then((data) => {
          window.location.href = data.data.url;
        })
        .catch((err) => {
          const errcode = err.response.status;
          if (errcode == 404 || errcode == 422) {
            this.$router.push({ name: "HomePage" });
          }
        });
    },
  },
};
</script>
