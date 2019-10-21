<template>
  <div id="app" class="app-body">
    <app-header>

    </app-header>

    <app-board>

    </app-board>
  </div>
</template>

<script>
import AppBoard from "./components/Board.vue";
import AppHeader from "./components/Header.vue";

export default {
  name: 'app',

  components: {
    appBoard: AppBoard,
    appHeader: AppHeader,
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },

  methods: {
    
  },

  computed: {
    testcomp: function() {
      return `${Date.now()} ${this.msg}`
    },
  },

}
</script>

<style lang="scss">
.app-body {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: url("./assets/background.jpg");
  background-repeat: repeat;
}
</style>
