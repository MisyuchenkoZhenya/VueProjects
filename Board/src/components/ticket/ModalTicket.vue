<template>
  <div>
      <div v-if="isCreateNewTicket">
          Create new ticket for the "{{column.title}}" column.
      </div>
      <div v-else>
          Update ticket #{{ticket.id}}.
      </div>
  </div>
</template>

<script>
export default {

    props: [
        'ticket',
        'column',
    ],

    data() {
        return {
            isCreateNewTicket: true,
        }
    },

    methods: {
        
    },

    created: function () {
        this.isCreateNewTicket = (this.ticket == null);
    },
}
</script>

<style>

</style>
