<template>
  <h1>Watch</h1>
  <p>Console Check</p>
  <div class="mb-5">
    <input type="text" v-model="watchMessage" />
  </div>

  <!-- obj watch -->
  <div class="mb-5">
    <h3>{{ arrayToStr }}</h3>
    <p>{{ watchArray }}</p>
    <button @click="pushArray">OBJ WATCH BTN</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      watchMessage: "",
      watchArray: [],
    };
  },

  computed: {
    arrayToStr() {
      return this.watchArray.toString();
    },
  },

  methods: {
    pushArray() {
      this.watchArray.push(1);
    },
  },

  watch: {
    watchMessage: function (value, oldValue) {
      console.log(
        "message 변경 감지, oldValue : ",
        oldValue,
        "새로운 Value : ",
        value
      );
    },

    watchArray: {
      deep: true, // 배열, object ... 주소값이 변하지 않는 값은 deep : true를 해야지 감지 가능
      immediate: true, // 즉시 실행, 최초 실행? 값이 변하지않아도 바로 한번 실행
      handler: function (value, oldValue) {
        console.log("arr ::", value, oldValue);
      },
    },
  },
};
</script>
