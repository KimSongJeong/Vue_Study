<template>
  <h1>Computed</h1>
  <!-- computed -->
  <div class="mb-5">
    성<input type="text" @input="firstNameInput($event)" /> 이름<input
      type="text"
      @input="lastNameInput($event)"
    />

    <div>이름 : {{ fullName }}</div>
  </div>

  <!-- computed get, set -->
  <div class="mb-5">
    1<input type="text" v-model="firstText" /> 2<input
      type="text"
      v-model="lastText"
    />
    <div>get/set 적용 : {{ fullText }}</div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      firstText: "",
      lastText: "",
    };
  },

  computed: {
    fullName() {
      return this.firstName + this.lastName;
    },

    fullText: {
      get() {
        return this.firstText + this.lastText;
      },
      set(value) {
        const fullTextSplite = value.split(" ");
        this.lastText = fullTextSplite[0];
        if (fullTextSplite.length > 1) {
          this.firstText = fullTextSplite[1];
        } else this.firstText = "";
      },
    },
  },

  methods: {
    firstNameInput(e) {
      this.firstName = e.target.value;
    },

    lastNameInput(e) {
      this.lastName = e.target.value;
    },
  },
};
</script>

<style></style>
