<template>
  <div class="mb-5">
    <p>name : {{ form.name }}</p>
    <p>age : {{ form.age }}</p>
    <p>email : {{ form.email }}</p>
  </div>
</template>

<script>
export default {
  inject: ["form"], // 부모에서 잔달 받은 form
};
</script>

<style></style>
