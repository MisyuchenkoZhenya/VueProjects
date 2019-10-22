<template>
    <div class="ticket__body" >
        <div class="card mb-3" :style="this.borderColor">
            <div class="card-header" :style="this.headerColor" :title="this.ticket.title">{{this.ticket.title}}</div>
            <div class="card-body text-dark">
                <p class="card-text">{{this.ticket.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [
        'ticket'
    ],
    data() {
        return {
            headerColor: {},
            borderColor: {},
        }
    },

    created: function () {
        this.headerColor = {
                            boxShadow: `inset 0px 0px 5px ${this.ticket.type.backgroundColor}`,
                        };
        this.borderColor = {
                            border: `1px solid ${this.ticket.type.borderColor}`,
                            }
    },
}
</script>

<style  lang="scss">

.ticket__body {
    -ms-user-select: none;
    user-select: none;
}

.card {
    box-shadow: 0px 0px 3px #a0a0a0;
    border: none;
}

.card-header {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: default;
}
</style>
