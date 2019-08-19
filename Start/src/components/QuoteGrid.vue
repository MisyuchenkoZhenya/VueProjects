<template>
    <div class="row">
        <appQuote v-for="(quote, index) in quotes" @click.native="DeleteQuote(index)">
            {{ quote }}
        </appQuote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'

    export default {
        props: [
            'quotes'
        ],
        methods: {
            DeleteQuote: function(index) {
                this.$emit('DeleteQuote', index);
            }
        },
        components: {
            appQuote: Quote,
        }
    }
</script>

<style>
</style>