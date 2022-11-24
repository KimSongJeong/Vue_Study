<template>
  <div>
    <h1>List Rendering</h1>

    <!-- v-for문(arr) -->
    <h3 style="color: red">v-for</h3>
    <div class="mb-5">
      <div v-for="(fruit, index) in fruitArr" :key="fruit">
        {{ index }} : {{ fruit }}
      </div>
    </div>

    <!-- v-for문(obj) -->
    <div class="mb-5">
      <div v-for="(item, key, index) in fruitObj" :key="key">
        index : {{ index }} || key : {{ key }} || item : {{ item }}
      </div>
    </div>

    <!-- v-if문 -->
    <h3 style="color: blue">v-if</h3>
    <div class="mb-5">
      <div>
        ifData는
        <span v-if="ifData"> 참입니다</span>
        <span v-else-if="!ifData"> 거짓입니다</span>
        <span v-else> 난 뭐지?</span>
      </div>
    </div>

    <!-- v-show문 -->
    <h3 style="color: green">v-show</h3>
    <div class="mb-5">
      <span v-show="showData">showData는 참입니다</span>
      <span v-show="!showData">showData는 거짓입니다</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruitArr: ["사과", "오렌지", "복숭아"],
      fruitObj: {
        apple: "사과",
        orange: "오렌지",
        peach: "복숭아",
      },

      ifData: false,
      showData: true,
    };
  },
};
</script>

<style></style>
