<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav mr-auto">
          <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link to="/stocks" class="nav-item" activeClass="active" tag="li">
            <a class="nav-link">Stocks</a>
          </router-link>

      </ul>
      <strong class="navbar-text navbar-right">Funds {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li 
          class="nav-item dropdown"
          :class="{open: isDropdownOpen}"
          @click="isDropdownOpen = !isDropdownOpen">
          <a 
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">Save / Load <span class="caret"></span></a>
          <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#" @click="saveData()">Save data</a></li>
            <li><a class="dropdown-item" href="#" @click="loadData()">Load data</a></li>
          </ul>
        </li>
      </ul>
        
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false,
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData',
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style>

</style>