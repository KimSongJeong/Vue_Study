<template>
  <div class="mb-5">
    name :
    <input type="text" name="name" :value="form.name" @input="changeInput" />
  </div>
  <div class="mb-5">
    age :
    <input type="number" name="age" :value="form.age" @input="changeInput" />
  </div>
  <div class="mb-5">
    email :
    <input type="text" name="email" v-model="form.email" />
  </div>
</template>

<script>
export default {
  inject: ["form", "changeForm"],

  methods: {
    changeInput(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.changeForm(name, value);
    },
  },
};
</script>

<style></style>
