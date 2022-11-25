<template>
  <div class="home">
    <HelloWorld msg="VUE" />
    <div>{{ _today }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import mixin from "@/mixin";
// mixin을 main.js에서 전역적으로 선언해놓아 각각 import 불필요

export default {
  name: "HomeView",
  // mixins: [mixin],

  data() {
    return {
      today: new Date(),
    };
  },

  components: {
    HelloWorld,
  },

  computed: {
    _today() {
      return this.toYmdHms(this.today);
    },
  },
};
</script>
