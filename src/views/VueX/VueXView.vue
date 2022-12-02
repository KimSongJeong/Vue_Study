<template>
  <div>
    <h1>VUEX store 바로 가져오기</h1>
    <div class="mb-5">
      store에서 가져온 count :
      <span style="color: red">{{ formatCnt }}</span>

      <div>
        <p>STATE의 값을 바로 변경</p>
        <button style="margin-right: 5px" type="button" @click="increase">
          증가
        </button>
        <button type="button" @click="decrease">감소</button>
      </div>
    </div>

    <div class="mb-5">
      <VueXMapStateView />
    </div>

    <div class="mb-5">
      <VueXAsyncExView />
    </div>

    <div class="mb-5">
      <VueModuleView />
    </div>
  </div>
</template>

<script>
import VueXMapStateView from "./VueXMapStateView.vue";
import VueXAsyncExView from "./VueXAsyncExView.vue";
import VueModuleView from "./VueModuleView.vue";

export default {
  components: {
    VueXMapStateView,
    VueXAsyncExView,
    VueModuleView,
  },

  computed: {
    formatCnt() {
      return this.$store.getters.formatCnt;
    },
  },

  methods: {
    increase() {
      this.$store.state.count++;
    },
    decrease() {
      this.$store.state.count--;
    },
  },
};
</script>

<style></style>
