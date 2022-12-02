<template>
  <div>
    <h1>VUEX mapState로 가져오기</h1>
    <div class="mb-5">
      store에서 가져온 formatMapCnt :
      <span style="color: red">{{ formatMapCnt }}</span>

      <div>
        <p>STATE의 값을 바로 변경</p>
        <button
          style="margin-right: 5px"
          type="button"
          @click="changeMapCnt(1)"
        >
          증가
        </button>
        <button type="button" @click="changeMapCnt(-1)">감소</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // ...mapState(["mapCount"]), // mapCount() { return this.$store.state.mapCount; },
    ...mapGetters(["formatMapCnt"]),
  },

  methods: {
    // ...mapMutations(["changeMapCnt"]), // === changeCnt(value) { this.$store.commit("changeCnt", value)}
    ...mapActions(["changeMapCnt"]), // === changeMapCnt(value) {this.$store.dispatch("changeCnt", value)}
  },
};
</script>

<style></style>
