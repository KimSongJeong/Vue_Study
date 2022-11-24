<template>
  <div>
    <!-- v-on -->
    <h1>V-ON</h1>
    <p>이벤트 처리 v-on === @ 로 사용</p>

    <div class="mb-5">
      <button @click="clickEvent">Click</button>
      <h1>{{ onData }}</h1>
    </div>

    <div class="mb-5">
      <h1>{{ cnt }}</h1>
      <button style="margin-right: 1rem" @click="increase">증가</button>
      <button style="margin-right: 1rem" @click="decrease">감소</button>
    </div>

    <!-- change -->
    <h1>Change</h1>
    <div class="mb-5">
      <select :value="selectValue" @change="changeSelect($event)">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div>선택된 값 : {{ selectValue }}</div>
    </div>

    <!-- Key -->
    <h1>Key</h1>
    <div class="mb-5">
      <div>
        <input type="text" @keyup="handleEvent('keyup', $event)" />
        <span>keyUp</span>
      </div>
      <div>
        <input type="text" @keydown="handleEvent('keydown', $event)" />
        <span>keyDown</span>
      </div>
      <div>
        <input type="text" @keyproess="handleEvent('keyproess', $event)" />
        <span>keyProess</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onData: "",
      cnt: 0,
      selectValue: "",
    };
  },

  methods: {
    clickEvent() {
      this.onData = "버튼을 눌러 지구가 멸망하였습니다.";
    },
    increase() {
      this.cnt++;
    },

    decrease() {
      this.cnt--;
    },

    changeSelect(e) {
      this.selectValue = e.target.value;
    },

    handleEvent(eventName, e) {
      console.log(eventName, e.target.value);
    },
  },
};
</script>

<style></style>
