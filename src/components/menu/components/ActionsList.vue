<template>
    <section id="actions-list">
        <div v-for="(currentAction, index) in actions.list"
             @click="actionEdit(index)"
             :class="{'text-danger':currentAction.isActive, 'd-none':!currentAction.visible}"
             class="item-actions-list">

            <i @click.stop="switchAction(actions.name,actions.toSwitch,index)"
               :class="{
               'fa fa-play': currentAction.status == 'receipt',
               'fa fa-check-circle': currentAction.status == 'todo',
               'fa fa-trash': currentAction.status == 'done',
               'fa fa-reply': currentAction.status == 'incubation',
               'fa fa-recycle': currentAction.status == 'destroy',
               }"
            ></i>
            {{ currentAction.name }}
        </div>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'

    export default {
        name: 'actions-list',
        data ()  {
            return {
                data : app_store.data
            }
        },
        props: {
            actions: Object
        },
        methods:{
            actionEdit: function (index) {
                console.log(' ==>ActionsList.vue/actionEdit')
                app_store.actionEdit(index)
            },
            switchAction: function (listName, newListName, index) {
                console.log(' ==> ActionsList.vue/switchAction')
                app_store.switch(newListName, listName, index)
            },
        }
    }
</script>

<style scoped>

    #actions-list{
        margin-top: 0.5em;
    }

    .item-actions-list{
        background: lightgrey;
        border-bottom: solid black;
        cursor: pointer;
    }

    #actions-list button{
        width: 100%;
    }
    option
    {
        color: #000;
    }
    option:first-child
    {
        color: #ccc;
    }
</style>