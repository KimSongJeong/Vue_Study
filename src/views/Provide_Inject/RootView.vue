<template>
  <h1>Provide & Inject</h1>
  <PanelView></PanelView>
  <hr />
  <FormView></FormView>
</template>

<script>
import PanelView from "./PanelView.vue";
import FormView from "./FormView.vue";
export default {
  data() {
    return {
      form: {
        name: "",
        age: null,
        email: "",
      },
    };
  },
  components: {
    PanelView,
    FormView,
  },

  methods: {
    changeForm(name, value) {
      this.form[name] = value;
    },
  },

  provide() {
    // 자식들에게 전달해주는 내용을 담고 있음
    return {
      form: this.form,
      changeForm: this.changeForm,
    };
  },
};
</script>

<style></style>
