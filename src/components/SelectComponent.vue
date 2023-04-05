<template>
  <div class="inner">    
    <div class="input-form">
      <select name="type" v-model="selectedNumber">
        <option
        v-for="(item, index) in selectNumberList"
        :key="index"
        :value="item.value"
        >{{ item.name }}</option>
      </select>
    </div>
    <div class="input-form">
      <input disabled v-model="selectedNumber">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedNumber : "10",
      selectNumberList : [
        { name : "선택", value : "" },
        { name : "2진수", value : "2" },
        { name : "8진수", value : "8" },
        { name : "10진수", value : "10" }
      ]
    };
  }
}
</script>

<style scoped>
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    font-weight: 400;
    font-size: 15pt;
    width: 550px;
  }

  select {
    width: 100px;
    height: 30px;
    font-size: 15pt;
    text-align: center;
  }

  .input-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
</style>