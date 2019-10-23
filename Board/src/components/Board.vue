<template>
  <div class="board__body board__scroll">
      <app-columns>

      </app-columns>
  </div>
</template>

<script>
import AppColumns from "./columns/Columns"

export default {

    data() {
        return {
            columns: []
        }
    },
    components: {
        appColumns: AppColumns
    }
}
</script>

<style>
.board__body {
    position: relative;
    width: auto;
    height: 100%;
    padding: 20px 15px;
    flex: 1 1 auto;
}
</style>
