<template>
  <div class="item">
    <h1>what to do ?</h1>
    <h1>{{ todoList[currentSelected] }}</h1>
    <div class="selected-wrap">
      <div
        v-for="(item, idx) in todoList"
        @click="handleSelectedClick(idx)"
        :key="item"
        :class="{
          'selected-item': true,
          animate__animated: currentSelected == idx,
          animate__flipInY: currentSelected == idx,
          'selected-color': currentSelected == idx
        }"
      >
        <div v-show="idx === currentSelected">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import _ from 'lodash'
let todoList = reactive([
  '骑车去佘村',
  '去南京市图书馆',
  '色色',
  '去车站上第一辆车去n站',
  '去鱼嘴公园',
  '学习',
  '去KTV',
  '去DIY',
  '去撸猫'
])
todoList = _.shuffle(todoList)
let currentSelected = ref(999)

const handleSelectedClick = (idx: number) => {
  currentSelected.value = idx
}
</script>

<style scoped>
.selected-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
}

.selected-item {
  width: 180px;
  height: 350px;
  background-color: aquamarine;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 2px 2px #5d5d5d;
}

.selected-color {
  background-color: antiquewhite;
}

.box {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
