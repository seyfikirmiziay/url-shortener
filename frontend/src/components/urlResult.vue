<template>
  <div class="row">
    <div class="col-md-6 col-xs-10 m-auto">
      <div class="card codeCard">
        <div class="card-body">
          <div class="row">
            <h5 class="card-title text-center shortUrl">
              shorty.com/{{ code }}
            </h5>
          </div>
          <div class="row">
            <h6 class="text-center">
              Your original Url: <b> {{ url }} </b>
            </h6>
          </div>
          <div class="row">
            <router-link
              :to="{ name: 'HomePage' }"
              class="btn btn-warning m-auto"
            >
              new URL
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: null,
      url: null,
    };
  },
  created() {
    this.code = this.$route.query.code;
    this.url = this.$route.query.url;
  },
};
</script>
