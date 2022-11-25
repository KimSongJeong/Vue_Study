export default {
  // mixin : 공통으로 사용되는 함수나 변수 등을 모아두는 곳
  // mixin을 전역적으로 사용하기 위해선 main.js에 등록
  methods: {
    toYmdHms(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, 0);
      const _date = String(date.getDate()).padStart(2, 0);
      const hours = String(date.getHours()).padStart(2, 0);
      const minutes = String(date.getMinutes()).padStart(2, 0);
      const seconds = String(date.getSeconds()).padStart(2, 0);
      return `${year}-${month}-${_date} ${hours}:${minutes}:${seconds}`;
    },
  },

  //   mounted() {
  //     // mixin에서도 라이프사이클 사용 가능
  //     console.log("mounted : mixin에서도 라이프사이클 사용 가능");
  //   },
};
