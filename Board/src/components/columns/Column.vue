<template>
  <div class="board-column ml-3 mr-3">
        <div class="column__header">
            {{this.column.title}}
            <button type="button" class="btn add-ticket-button" @click="show"></button>
        </div>
        <div class="column__body">
            <app-tickets :columnId="this.column.id"></app-tickets>
        </div>
  </div>
</template>

<script>
import AppTickets from "../ticket/Tickets";
import ModalTicket from "../ticket/ModalTicket.vue";

export default {

    props: [
        'column',
        'tickets',
    ],

    components: {
        appTickets: AppTickets,
        ModalTicket,
    },

    data() {
        return {

        }
    },

    methods: {
        show () {
            this.$modal.show(ModalTicket, {
                column: this.column,
            });
        },
    },

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
    display: flex;
    justify-content: space-between;
    height: 30px;
    border-bottom: 1px solid;
}

.add-ticket-button {
    background: url(../../assets/add-icon.png) no-repeat;
    background-size: contain;
    height: 20px;
    width: 20px;
}

</style>
