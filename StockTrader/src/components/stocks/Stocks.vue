<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from "./Stock.vue"

  export default {
    data() {
      return {
        stocks: this.$store.getters.stocks,
      };
    },
    components: {
      appStock: Stock
    },
  }
</script>

<style>

</style>