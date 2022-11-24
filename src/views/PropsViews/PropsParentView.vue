<template>
  <h1>Props Parent</h1>
  <div class="mb-5">
    <ChildView
      message="Props Message 부모가 자식에게"
      :vBindMessage="12"
      :fruits="fruits"
    ></ChildView>
    <h1>==========================</h1>
    <div class="mb-5">
      <ChildView2 :selected="selected" :fruits="fruits" @change-select="change">
      </ChildView2>
    </div>
  </div>
</template>

<script>
import ChildView from "./PropsChildView.vue";
import ChildView2 from "./PropsChild2View.vue";
export default {
  data() {
    return {
      fruits: [
        { name: "사과", key: "apple" },
        { name: "오렌지", key: "orange" },
        { name: "딸기", key: "strawberry" },
        { name: "복숭아", key: "peach" },
      ],
      selected: [],
    };
  },
  components: {
    ChildView,
    ChildView2,
  },

  methods: {
    change(value) {
      this.selected = value;
    },
  },

  watch: {
    selected: {
      handler(value) {
        console.log(value);
      },
    },
  },
};
</script>

<style></style>
