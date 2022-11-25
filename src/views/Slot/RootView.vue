<template>
  <div id="app">
    <button @click="handleVisible()">Open Slot Modal Box</button>
    <ModalVue :on="visible">
      <template v-slot:title class="titleCss"
        ><span style="margin-left: 15px">SLOT</span>
        <button
          style="margin-right: 15px"
          type="button"
          @click="handleVisible()"
        >
          X
        </button>
      </template>
      <template #sub-title>부제목</template>
      <template #contentbox>
        <div><span>이름 : </span><input type="text" /></div>
      </template>
    </ModalVue>
  </div>
</template>

<script>
import ModalVue from "./ModalView.vue";

export default {
  name: "App",

  data() {
    return {
      visible: true,
    };
  },
  components: {
    ModalVue,
  },

  methods: {
    handleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style></style>
