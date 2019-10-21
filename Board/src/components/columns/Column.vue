<template>
  <div class="board-column">
        <div class="column__header">
            {{this.column.title}}
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
    margin: 0 15px;
    padding: 5px 5px;
    width: 300px;
    height: auto;
    background-color: #eaeafa;
    border-radius: 3px;
}

.column__header {
    height: 30px;
    border-bottom: 1px solid;
    /* box-shadow: 0px 3px 5px #000000; */

}
</style>
