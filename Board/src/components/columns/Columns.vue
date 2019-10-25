<template>
    <div class="board-columns board__scroll">
        <app-column v-for="column in columns" :key="column.id" :column="column">

        </app-column>
        <modal 
            name="modal-ticket"
            @before-open="beforeOpen"
            @before-close="beforeClose"
        >
            <modal-ticket></modal-ticket>
        </modal>
    </div>
</template>

<script>
import Column from "./Column.vue";
import columnSet from "../../data/columns";
import ModalTicket from "../ticket/ModalTicket.vue";

export default {

    data() {
        return {
            columns: columnSet,//this.$store.getters.stocks,
        };
    },

    components: {
        appColumn: Column,
        ModalTicket,
    },

    methods: {
        beforeOpen (event) {
            
        },
        beforeClose (event) {
            this.$$updatableTicket = null;
        }
    },

}
</script>

<style>
.board-columns {
    display: flex;
    height: inherit;
    padding: 20px;
    overflow: auto;
    box-shadow: inset 0 0 5px #afafaf;
    border-radius: 2px;
    background-color: rgba(0,0,0,0.2)
}

/* Scrollbar */

.board__scroll::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

.board__scroll::-webkit-scrollbar
{
    width: 12px;
    border-radius: 10px;
    background-color: #F5F5F5;
}

.board__scroll::-webkit-scrollbar-thumb
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 10px;
    background-color: #555;
}

</style>
