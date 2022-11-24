<template>
  <div class="mb-5">
    <h1>데이터 바인딩</h1>

    <div class="mb-5">
      <div>일반 출력</div>
      {{ firstMessage }}
    </div>

    <!-- v-html : html 출력 -->
    <div class="mb-5">
      <span v-html="html"></span>
    </div>

    <!-- v-text : text를 그대로 출력 -->
    <div class="mb-5">
      <span v-text="text"></span>
      <div>{{ text }}</div>
    </div>

    <!-- v-pre : 컴파일하지않고 그대로 출력 -->
    <div class="mb-5">
      <span v-pre>{{ text }}</span>
    </div>

    <!-- v-once : 최초 한번만 컴파일 -->
    <div class="mb-5">
      <div v-once><span>v-once</span> : {{ vOnceText }}</div>
      <!-- 바뀌지 않음 -->

      <div>!v-once : {{ vOnceText }}</div>
      <!-- 바뀜 -->
    </div>

    <!-- v-cloak : 화면이 그려지는 동안, mustache 표기 여부 -->
    <div class="mb-5">
      <p v-cloak>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstMessage: "Hello World",
      html: "<apn style='color:red'> HTML : </span> <span>HTML</span>",
      text: "<span>TEXT TEST</span>",
      vOnceText: "v-Once TEST MESSAGE",
    };
  },

  created() {
    setTimeout(() => {
      this.vOnceText = "vOnceText Change!!";
    }, 5000);
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
