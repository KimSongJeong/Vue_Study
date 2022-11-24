<template>
  <h2 style="color: blue">Props Child</h2>

  <!-- String -->
  <div class="mb-5">
    String 형태 props : <span style="color: red">{{ message }}</span>
  </div>

  <div class="mb-5">
    <div>
      <span style="font-weight: bold">type : </span>
      props로 받을 수 있는 변수의 타입
    </div>

    <div>
      <span style="font-weight: bold">default : </span>
      props가 없을 때, default 적용
    </div>

    <div>
      <span style="font-weight: bold">required : </span>
      디폴트 : false, true 설정할 경우, 부모에서 자식에게 props를 넘겨주지 않을
      때 콘솔 경고
    </div>

    <div>
      <span style="font-weight: bold">validator : </span>
      props값이 정상적인지 체크(true를 리턴할 경우 정상, false를 리턴할경우,
      검증 실패 경고 로그)
    </div>
  </div>

  <!-- v-bind -->
  <div class="mb-5">
    v-bind로 넘겨준 number : <span style="color: red">{{ vBindMessage }}</span>
    <div>v-bind로 주지 않을 경우 문자열 처리</div>

    <h3 style="color: red">정적인 데이터는 v-bind로 넘겨주지 않아도 되지만,</h3>
    <h3 style="color: red">
      숫자가 아니더라도 동적인 데이터의 경우 반드시 v-bind로 넘겨주어야 동작
    </h3>
  </div>

  <!-- list Props -->
  <div class="mb-5">
    <h3>Array Props Data</h3>
    <div v-for="fruit in fruits" :key="fruit.key">
      {{ fruit.name }}
    </div>

    <p>props 데이터 또한 this를 사용하여 다른곳에서 사용 가능</p>
    <div>총 과일 갯수 : {{ totalFruitsLength }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "asd",
      required: true,
      validator(value) {
        return value === "Props Message 부모가 자식에게";
      },
    },
    vBindMessage: {
      type: Number,
      default: 15,
    },
    fruits: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  computed: {
    totalFruitsLength() {
      return this.fruits.length;
    },
  },
};
</script>

<style></style>
