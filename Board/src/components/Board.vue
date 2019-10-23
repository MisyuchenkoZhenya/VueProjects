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
    /* background-color: rgb(160, 105, 98) */
}

/* Scrollbar */

.board__scroll::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

.board__scroll::-webkit-scrollbar
{
    width: 10px;
    background-color: #F5F5F5;
}

.board__scroll::-webkit-scrollbar-thumb
{
    background-color: #F90;
    background-image: -webkit-linear-gradient(45deg,
                                              rgba(255, 255, 255, .2) 25%,
                                              transparent 25%,
                                              transparent 50%,
                                              rgba(255, 255, 255, .2) 50%,
                                              rgba(255, 255, 255, .2) 75%,
                                              transparent 75%,
                                              transparent)
}
</style>
