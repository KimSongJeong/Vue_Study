<template>
  <div>
    <h1>V-BINDING</h1>
    <p>
      v-model과 비슷, But 동적으로 사용하고자 할 때 v-bind (value 값 변경 등)
    </p>

    <div>
      <input type="checkbox" v-model="checkBoxArray" v-bind:value="orange" />
      {{ orange }}
      <input type="checkbox" v-model="checkBoxArray" v-bind:value="apple" />
      {{ apple }}
      <input type="checkbox" v-model="checkBoxArray" v-bind:value="peach" />
      {{ peach }}
      <input type="checkbox" v-model="checkBoxArray" v-bind:value="grape" />
      {{ grape }}

      <div>
        선택된 값 : <span style="color: blue">{{ checkBoxArray }}</span>
      </div>

      <!-- v-bind => :로도 사용가능(v-bind:class = :class) -->
      <div>
        <p class="blue" :class="{ italic: italic, bold: bold }">
          v-bind css 수정
        </p>
        <button v-on:click="italic = !italic">italic</button>
        <button v-on:click="bold = !bold">bold</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkBoxArray: [],
      italic: false,
      bold: false,

      orange: "오렌지",
      apple: "사과",
      peach: "복숭아",
      grape: "포도",
    };
  },
};
</script>

<style>
.blue {
  color: bule;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>
