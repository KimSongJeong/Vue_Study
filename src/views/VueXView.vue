<template>
  <div>
    <h1>VUEX</h1>
    <div class="mb-5">
      store에서 가져온 count :
      <span style="color: red">{{ count }}</span>

      <div>
        <p>STATE의 값을 바로 변경</p>
        <button style="margin-right: 5px" type="button" @click="increase">
          증가
        </button>
        <button type="button" @click="decrease">감소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
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
