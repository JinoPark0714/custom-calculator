<template>
  <div class="tabs">
    <div>
      <ul class="tab-bar">
        <li :class="{ active: activeTab === 'first' }" @click="activeTab = 'first'">10진법 계산기</li>
        <li :class="{ active: activeTab === 'second' }" @click="activeTab = 'second'">2진법 계산기</li>
        <li :class="{ active: activeTab === 'third' }" @click="activeTab = 'third'">8진법 계산기</li>
        <li :class="{ active: activeTab === 'forth' }" @click="activeTab = 'forth'">16진법 계산기</li>
        <li :class="{ active: activeTab === 'fifth' }" @click="activeTab = 'fifth'">수수료 계산기</li>
        <!-- <li :class="{ active: activeTab === 'r' }" @click="activeTab = 'r'">third</li>
        <li :class="{ active: activeTab === 'f' }" @click="activeTab = 'f'">third</li> -->
      </ul>
    </div>
    <div>
      <div class="tab-content">
        <div v-if="activeTab === 'first'">
          <!-- First 탭 내용 -->
          <ConvertDecimalTo/>
        </div>
        <div v-if="activeTab === 'second'">
          <!-- Second 탭 내용 -->
          <ConvertBinaryTo/>
        </div>

        <div v-if="activeTab === `third`">
          <!-- Third 탭 내용 -->
          <ConvertOctalTo/>
        </div>

        <div v-if="activeTab === `forth`">
          <!-- Forth 탭 내용 -->
          <ConvertHexaDecimalTo/>
        </div>

        <div v-if="activeTab === `fifth`">
          <!-- Forth 탭 내용 -->
          <FeeCalculator/>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import ConvertDecimalTo from './ConvertDecimalTo.vue';
import ConvertBinaryTo from './ConvertBinaryTo.vue';
import ConvertOctalTo from './ConvertOctalTo.vue';
import ConvertHexaDecimalTo from './ConvertHexaDecimalTo.vue';
import FeeCalculator from './Fee-Calculator.vue';

export default {
  data() {
    return {
      activeTab: 'first', // 초기 탭 설정
      number: '',
      binary: '',
      hex: '',
    }
  },
  components : {
    ConvertBinaryTo, 
    ConvertOctalTo,
    ConvertDecimalTo,
    ConvertHexaDecimalTo,
    FeeCalculator
  }
}
</script>

<style>
/* 탭 메뉴 스타일링 */

.tabs {
  display: flex;
  flex-direction: row;
}

.tab-bar{
  display:flex;
  flex-direction: column;
  min-width: 130px;
}

.tabs ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
}

.tabs ul li {
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;
}

.tabs ul li.active {
  background-color: #fff;
  color: #000;
}

.tab-content {
  border: 1px solid #000;
  padding: 10px;
}
</style>
