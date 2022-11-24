<template>
  <h1>Router Parameter Detail Page</h1>

  <div class="mb-5">
    <h2>
      <span style="color: red">{{ $route.params.id }}</span
      >번 게시물 입니다.
    </h2>

    <div>
      Parameter Message :
      <span style="color: red">{{ $route.query.message }}</span>
    </div>
    <div>
      <button type="button" @click="goToList">뒤로가기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    goToList() {
      this.$router.push(`/routerParamterView`);
    },
  },
};
</script>

<style></style>
