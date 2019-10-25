<template>
    <div class="ticket__body">
        <div class="card mb-3 mt-3" :style="{border: this.borderColor}">
            <div class="card-header" :style="{boxShadow: this.headerColor}" :title="this.ticket.title">
                <b>{{this.ticket.title}}</b>
            </div>
            <div class="card-body text-dark">
                <p class="card-text">{{this.ticket.description}}</p>
            </div>
            <div class="card-footer text-muted">
                <div class="card-footer__cell">
                    <button type="button" class="btn card__button modify-button" @click="ModifyTicket()"></button>
                </div>
                <div class="card-footer__cell">
                    <span class="badge" :style="{backgroundColor: this.ticket.type.mainColor}">
                        {{this.ticket.type.name}}
                    </span>
                </div>
                <div class="card-footer__cell">
                    <button type="button" class="btn card__button remove-button" @click="RemoveTicket()"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalTicket from "./ModalTicket.vue";

export default {

    props: [
        'ticket'
    ],

    components: {
        ModalTicket
    },

    data() {
        return {
            headerColor: "",
            borderColor: "",
        }
    },

    methods: {
        ModifyTicket() {
            this.$modal.show(ModalTicket, {
                ticket: this.ticket,
            });
        },
        RemoveTicket() {
            this.$emit("RemoveTicket", this.ticket.id);
        },
    },

    created: function () {
        this.headerColor = `inset 0px 0px 5px ${this.ticket.type.backgroundColor}`;
        this.borderColor = `1px solid ${this.ticket.type.mainColor}`;
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

.card-footer {
    // display: flex;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: .25rem 1.25rem;
}

.card-footer__cell {
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge {
    color: #efefef;
}

.modify-button {
    background: url(../../assets/modify-icon.png) no-repeat;
}

.remove-button {
    background: url(../../assets/trash-icon.png) no-repeat;
}

.card__button {
    background-size: contain;
    height: 20px;
    width: 20px;
}
</style>
