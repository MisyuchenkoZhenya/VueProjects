<template>
  <div>
    <app-ticket v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"></app-ticket>
  </div>
</template>

<script>
import Ticket from "./Ticket.vue"

export default {
    data() {
        return {
            tickets: [],//this.$store.getters.stocks,
        };
    },
    components: {
        appTicket: Ticket
    },
}
</script>

<style>

</style>
