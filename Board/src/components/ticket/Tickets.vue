<template>
  <div>
    <draggable
                v-model="tickets"
                group="tickets"
                :component-data="getComponentData()"
                class="bigger-area draggable-area"
                ghost-class="ghost"
    >
        <app-ticket v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" @RemoveTicket="RemoveTicket"></app-ticket>
    </draggable>
  </div>
</template>

<script>
import Ticket from "./Ticket.vue";
import ticketSet from "../../data/tickets";
import ticketTypeSet from "../../data/ticketTypes";

import draggable from "vuedraggable";

export default {

    props: [
        'columnId'
    ],

    data() {
        return {
            tickets: [],
        };
    },

    components: {
        appTicket: Ticket,
        draggable,
    },

    methods: {
        handleChange() {

        },
        getComponentData() {
            return {
                on: {
                    change: this.handleChange,
                },
                attrs:{
                    wrap: true
                },
                props: {

                }
            };
        },
        RemoveTicket(ticketId) {
            this.tickets.forEach((el, index)=>{
                if(el.id === ticketId) {
                    this.tickets.splice(index,1);
                }
            });
        },
    },

    created: function () {
        ticketSet.forEach((ticket)=>{
            if(ticket.columnId == this.columnId) {
                ticket.type = ticketTypeSet.find(el=>el.id == ticket.typeId);
                this.tickets.push(ticket);
            }
        });
    },
}
</script>

<style>
.draggable-area {
    padding: 15px 0;
}
.ghost {
    opacity: 0.3;
}
</style>
