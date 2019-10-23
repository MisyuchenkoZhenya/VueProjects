<template>
  <div class="board-columns">
    <app-column v-for="column in columns" :key="column.id" :column="column"></app-column>
  </div>
</template>

<script>
import Column from "./Column.vue";
import columnSet from "../../data/columns";

export default {
    data() {
        return {
            columns: columnSet,//this.$store.getters.stocks,
        };
    },
    components: {
        appColumn: Column
    },
}
</script>

<style>
.board-columns {
    display: flex;
    height: inherit;
}
</style>
