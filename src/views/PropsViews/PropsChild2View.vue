<template>
  <div class="mb-5">
    <h1>자식 -> 부모 값 변경</h1>
    <p style="color: red">부모에서 자식에게 함수를 넘길땐 v-on(@) 사용</p>

    <div class="mb-5">
      <select multiple v-model="_selected">
        <option v-for="fruit in fruits" :key="fruit.key" :value="fruit.key">
          {{ fruit.name }}
        </option>
      </select>
      <div>선택됨 : {{ selectedFruits }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFruits: [],
    };
  },
  props: {
    fruits: {
      type: Array,
      default: () => {
        return [];
      },
    },

    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  computed: {
    _selected: {
      set(value) {
        this.$emit("changeSelect", value);
        this.selectedFruits = value;
      },
      get() {
        return this.selected;
      },
    },
  },
};
</script>

<style></style>
