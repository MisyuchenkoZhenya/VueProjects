<template>
  <div>
    <app-ticket v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"></app-ticket>
  </div>
</template>

<script>
import Ticket from "./Ticket.vue";
import ticketSet from "../../data/tickets";
import ticketTypeSet from "../../data/ticketTypes";

export default {
    data() {
        return {
            tickets: [],
        };
    },
    components: {
        appTicket: Ticket
    },

    created: function () {
        ticketSet.forEach((ticket)=>{
            if(ticket.columnId == this.columnId) {
                ticket.type = ticketTypeSet.find(el=>el.id == ticket.typeId);
                this.tickets.push(ticket);
            }
        });
    },

    props: [
        'columnId'
    ]
}
</script>

<style>

</style>
