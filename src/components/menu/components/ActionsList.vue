<template>
    <section id="actions-list">


        <div v-for="(action, index) in actions.list"
             @click="actionEdit(index,actions.name)"
             :class="{'text-danger':action.isActive, 'd-none':!action.visible}"
             class="item-actions-list">

            <i @click.stop="switchAction(actions.name,actions.toSwitch,index)"
               :class="{
               'fa fa-play': action.status == 'receipt',
               'fa fa-check-circle': action.status == 'todo',
               'fa fa-trash': action.status == 'done',
               'fa fa-reply': action.status == 'incubation',
               'fa fa-recycle': action.status == 'destroy',
               }"
            ></i>
            {{ action.name }}
        </div>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'

    export default {
        name: 'actions-list',
        components : {

        },
        data ()  {
            return {
                data : app_store.data
            }
        },
        computed:{
        },
        props: {
            actions: Object
        },
        methods:{
            actionEdit: function (index, listName) {
                console.log(' ==>ActionsList.vue/actionEdit')
                app_store.actionEdit(index, listName)
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