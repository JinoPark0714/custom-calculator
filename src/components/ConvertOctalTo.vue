<template>
  <div class="body">    
    <div class="input-form">
      <h2>10진법에서 변환하기</h2>
    </div>

    <div class="input-form">
      <label class="label-custom">8진수 입력</label>
      <input v-model="octalNumber" v-on:keyup.enter="toConvert" placeholder="너무 큰 수는 동작 안 합니다. 입력 후 엔터키"/>
    </div>

    <div class="input-form">
      <label class="label-custom">2진수</label>
      <input disabled v-model="binaryNumber">
    </div>

    <div class="input-form">
      <label class="label-custom">10진수</label>
      <input disabled v-model="decimalNumber">
    </div>

    <div class="input-form">
      <label class="label-custom">16진수</label>
      <input disabled v-model="hexadecimalNumber">
    </div>

    <div class="button-form">
      <button v-on:click="toConvert">클릭</button>
      <button v-on:click="init">초기화</button>
    </div>
    
  </div>
</template>

<script>


export default {
  data(){
    return{
      decimalNumber : '',
      binaryNumber : '',
      octalNumber : '',
      hexadecimalNumber : '',
    };
  },
  methods: {

    toConvert : function(){
      const regex =/^[0-7]+$/
      if(regex.test(this.octalNumber)){
        const parsedNumber = parseInt(this.octalNumber, 8);
        this.decimalNumber = parsedNumber;
        this.binaryNumber = parsedNumber.toString(2);
        this.hexadecimalNumber = this.getHexadecimalNumber(parsedNumber);
        return;
      }
      else
        alert("숫자를 입력해 주세요");
      
    },

    init : function(){
      this.decimalNumber = '';
      this.binaryNumber = '';
      this.octalNumber = '';
      this.hexadecimalNumber = '';
    },
    
    isNull : function(parameter){
      return ((parameter === undefined) && (parameter === ''));
    },

    getOctalNumber : function(decimalNumber){
      return "0" + decimalNumber.toString(8);
    },

    getHexadecimalNumber : function(decimalNumber){
      return "0x" + decimalNumber.toString(16).toUpperCase();
    }

  },
}

</script>

<style scoped>

  .body {
    display: flex;
    flex-direction: column;
    min-width: 400px;
    width:500px;
  }

  select {
    width: 100px;
    height: 30px;
    font-size: 15pt;
    text-align: center;
  }

  input {
    font-weight: 700;
    font-size : 15pt;
    height: 50px;
    background-color: #fff;
    border: 1px solid #000;
    resize: none;
  }

  button {
    height: 45px;
    font-size: 15pt;
    font-weight: 700;
    background-color: #fff;
  }

  button:active{
    color: #fff;
    background-color: #000;
  }

  .label-custom {
    font-size: 15pt;
    margin: 2px;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    margin : 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .button-form{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin : 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .button-form button {
    width: calc(50% - 15px);
  }

</style>