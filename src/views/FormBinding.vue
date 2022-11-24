<template>
  <div>
    <h1>양방향 바인딩</h1>

    <!-- v-model : 한글 처리가 바로바로 되지 않음 -->
    <div class="mb-5">
      <input type="text" v-model="textInput" />

      <div class="mb-5">
        Input에 입력된 내용 출력 :
        <span style="color: red">{{ textInput }}</span>
      </div>

      <input type="number" v-model.number="numberInput" />
      <div>
        Input_v-model.number 에 입력한 내용 출력 :
        <span style="color: blue">{{ numberInput }}</span>
      </div>
    </div>

    <!-- 한글 입력 바로 처리되도록 하기 -->
    <div class="mb-5">
      <h5>즉시 입력되는 한글 v-on:input</h5>
      <input type="text" v-on:input="textVOnInputMessage" />
      <div>
        입력된 글자 : <span style="color: green">{{ textVOnInput }}</span>
      </div>
    </div>

    <!-- SELECT -->
    <div class="mb-5">
      <select v-model="selectOption">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>

      <div class="mb-5">
        선택된 값 : <span style="color: steelblue">{{ selectOption }}</span>
      </div>

      <select v-model="multipleSelectOption" multiple>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <div class="mb-5">
        다중 선택된 값 :
        <span style="color: steelblue">{{ multipleSelectOption }}</span>
      </div>

      <!-- checkBox -->
      <div class="mb-5">
        <input type="checkbox" v-model="checkValue" />

        <h5>다중 checkBox</h5>
        <div>
          <input type="checkbox" v-model="multipleCheckValue" value="1" />1
          <input type="checkbox" v-model="multipleCheckValue" value="2" />2
          <input type="checkbox" v-model="multipleCheckValue" value="3" />3
          <input type="checkbox" v-model="multipleCheckValue" value="4" />4
          <input type="checkbox" v-model="multipleCheckValue" value="5" />5
          <div>
            선택된 값 : <span style="color: red">{{ multipleCheckValue }}</span>
          </div>
        </div>
      </div>

      <!-- Radio -->
      <div>
        <input type="radio" value="option1" v-model="radioInputValue" />1
        <input type="radio" value="option2" v-model="radioInputValue" />2

        <div>
          선택된 값 : <span style="color: red">{{ radioInputValue }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "",
      numberInput: "",
      textVOnInput: "",
      selectOption: "",
      multipleSelectOption: [],
      checkValue: true,
      multipleCheckValue: [],
      radioInputValue: "",
    };
  },

  methods: {
    textVOnInputMessage(e) {
      this.textVOnInput = e.target.value;
    },
  },
};
</script>

<style></style>
