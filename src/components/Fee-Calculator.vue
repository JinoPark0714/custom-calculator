<template>
  <div class="body">
    <div class="input-form">
      <h2>수수료 계산기</h2>
      <h3>
        1. 입력 후 엔터 키 누르면 자동으로 계산됩니다.
      </h3>
      <h3>
        2. 5번, 6번, 7번 항목은 입력 할 수 없습니다.
      </h3>
    </div>

    <div class="input-form">
      <label class="label-custom" for="start-amount">1. 판매가</label>
      <input type="number" v-model="productPrice" v-on:keyup.enter="calculateAll">
    </div>

    <div class="input-form">
      <label class="label-custom" for="start-amount">2. 판매 갯수</label>
      <input type="number" v-model="productCount" v-on:keyup.enter="calculateAll">
    </div>

    <div class="input-form">
      <label class="label-custom" for="interest-rate">3. 수수료(%)</label>
      <input type="number" v-model="commission" v-on:keyup.enter="calculateAll">
    </div>

    <div class="input-form">
      <label class="label-custom" for="deposit-period">4. 인플루언서 수수료(%)</label>
      <input type="number" v-model="influencerCommission" v-on:keyup.enter="calculateAll" placeholder="없으면 입력 안해도 됩니다.">
    </div>

    <div class="input-form">
      <label class="label-custom" for="deposit-period">5. 총 판매 금액</label>
      <input disabled v-model="totalPrice">
    </div>

    <div class="input-form">
      <label class="label-custom" for="deposit-period">6. 총 수수료 금액</label>
      <input disabled v-model="totalCommissionprice">
    </div>

    <div class="input-form">
      <label class="label-custom" for="deposit-period">7. 총 인플루언서 수수료 금액</label>
      <input disabled v-model="totalInfluencerCommissionPrice">
    </div>

    <div class="button-form">
      <button type="button" v-on:click="calculateAll">계산하기</button>
      <button type="button" v-on:click="initialize">초기화</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      productPrice : 0,
      productCount : 1,
      commission : 0,
      influencerCommission : '',
      totalPrice : 0,
      totalCommissionprice : 0,
      totalInfluencerCommissionPrice : 0
    };
  },
  methods : {
    calculateAll : function(){
      this.getTotalPrice();
      this.getTotalCommisionPrice();
      this.getTotalInfluencerCommissionPrice();
    },

    initialize : function(){
      this.productPrice = 0;
      this.productCount = 1;
      this.commission = 0;
      this.influencerCommission = '';
      this.totalPrice = 0;
      this.totalCommissionprice = 0;
      this.totalInfluencerCommissionPrice = 0;
    },

    getTotalPrice : function(){
      this.totalPrice = this.productPrice * this.productCount;
    },

    getTotalCommisionPrice : function(){
      this.totalCommissionprice = this.totalPrice * (this.commission / 100);
    },

    getTotalInfluencerCommissionPrice : function(){
      if(this.influencerCommission === '' || this.influencerCommission === undefined)
        this.influencerCommission = 0;
      this.totalInfluencerCommissionPrice = this.totalPrice * (this.influencerCommission / 100);
    }



  }
}
</script>

<style scoped>

  .body {
    display: flex;
    flex-direction: column;
    min-width: 400px;
    width: 500px;
  }


  .label-custom {
    font-size: 15pt;
    margin: 2px;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    margin: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .input-form input{
    font-weight: 700;
    font-size : 15pt;
    height: 25px;
    background-color: #fff;
    border: 1px solid #000;
    resize: none;
  }

  .button-form{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .button-form button {
    width: calc(50% - 15px);
    height: 45px;
    font-size: 15pt;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }

  .button-form button:active{
    color: #fff;
    background-color: #000;
  }

</style>