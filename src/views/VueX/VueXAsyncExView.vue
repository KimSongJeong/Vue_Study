<template>
  <div class="mb-5">
    <h1>vuex 비동기</h1>
    <div class="mb-5">
      <button @click="getList">call API</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getList"]),
  },
};
</script>

<style></style>
