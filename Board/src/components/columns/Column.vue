<template>
  <div class="board-column ml-3 mr-3">
        <div class="column__header">
            {{this.column.title}}
        </div>
        <div class="column__body">
            <app-tickets :columnId="this.column.id"></app-tickets>
        </div>
  </div>
</template>

<script>
import AppTickets from "../ticket/Tickets";

export default {

    data() {
        return {

        }
    },
    components: {
        appTickets: AppTickets,
    },
    props: [
        'column',
        'tickets'
    ]
}
</script>

<style>
.board-column {
    position: relative;
    padding: 5px 10px;
    width: 340px;
    margin-bottom: auto;
    background-color: #ffffff;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
}

.column__header {
    height: 30px;
    border-bottom: 1px solid;
}
</style>
