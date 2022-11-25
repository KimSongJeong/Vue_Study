<template>
  <div class="mb-5">
    <h1>Axios</h1>

    <a href="https://reqres.in">reqres.in</a>

    <h4>USER LIST</h4>
    <div class="mb-5">
      <input
        style="margin-right: 10px"
        type="text"
        placeholder="이름"
        v-model="inputName"
      />
      <input type="text" placeholder="이메일" v-model="inputEmail" />
      <div style="margin-top: 10px">
        <button @click="register">등록</button>
      </div>
    </div>
    <div class="userList">
      <div v-for="user in list" :key="user.id">
        <img :src="user.avatar" />
        <p class="name-card">{{ user.last_name }} {{ user.first_name }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],

      inputName: "",
      inputEmail: "",
    };
  },

  methods: {
    // GET
    async callApi() {
      const response = await axios({
        url: "https://reqres.in/api/users",
        method: "GET",
        params: {
          page: 1,
        },
      });
      this.list = response.data.data;
    },

    // POST
    async register() {
      const response = await axios({
        url: "https://reqres.in/api/users",
        method: "POST",
        data: {
          name: this.inputName,
          email: this.inputEmail,
        },
      });
      console.log("POST response : ", response);
    },
  },

  created() {
    this.callApi();
  },
};
</script>

<style>
@media (min-width: 720px) {
  .userList {
    display: flex;
    justify-content: space-between;
  }
}
</style>
