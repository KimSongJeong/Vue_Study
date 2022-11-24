<template>
  <h1>Router Parameter</h1>

  <div class="mb-5">
    <div>
      <button type="button" @click="goToDetail(1)" class="mr-1">
        1번 게시물
      </button>
      <button type="button" @click="goToDetail(2)" class="mr-1">
        2번 게시물
      </button>
      <button type="button" @click="goToDetail(3)" class="mr-1">
        3번 게시물
      </button>
      <button type="button" @click="goToDetail(4)" class="mr-1">
        4번 게시물
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomMessage: "오늘의 암구호는 문어에는 역시 초장",
    };
  },
  methods: {
    goToDetail(pageNumber) {
      let randomNumber = Math.floor(Math.random() * 5);

      switch (randomNumber) {
        case 1:
          this.randomMessage = "오늘의 암구호는 문어에는 역시 초장";
          break;
        case 2:
          this.randomMessage = "안녕";
          break;
        case 3:
          this.randomMessage = "호에에에에에에에엥";
          break;
        case 4:
          this.randomMessage = "오늘도 원조커피";
          break;
        case 5:
          this.randomMessage = "vue 넘모 좋아용";
          break;
      }

      this.$router.push({
        path: `/routerParamterDetailView/${pageNumber}`,
        query: {
          message: this.randomMessage,
        },
      });
    },
  },
};
</script>

<style></style>
