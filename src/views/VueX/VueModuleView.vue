<template>
  <div class="mb-5">
    <h1>Vuex Module</h1>
    <p>
      vuex index에 정의되는것이 많아질수록 복잡/난잡해지는데 이를 해결하기위해
      module로 분리
    </p>
    <div>{{ name }}, {{ id }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["name", "id"),    // namespaced 미적용
    ...mapGetters({ name: "user/name", id: "user/id" }), // namespaced 적용
  },
};
</script>

<style></style>
