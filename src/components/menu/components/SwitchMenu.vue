<template>
    <section class="switch-menu">
        <b-button-group size="sm">
            <b-button @click="actionsListChange('receipt')"><span class="fa fa-shopping-basket"></span></b-button>
            <b-button @click="actionsListChange('todo')"><span class="fa fa-play"></span></b-button>
            <b-button @click="actionsListChange('done')"><span class="fa fa-check-circle"></span></b-button>
            <b-button @click="actionsListChange('incubation')"><span class="fa fa-recycle"></span></b-button>
            <b-button @click="actionsListChange('destroy')"><span class="fa fa-trash"></span></b-button>
        </b-button-group>

        <b-button-group  size="sm">
            <b-button variant="outline-primary" @click="searchAll">all</b-button>
            <b-button variant="outline-primary" @click="searchDefault">auto</b-button>
            <b-button variant="outline-primary" @click="searchEdit">perso</b-button>
        </b-button-group>

        <b-button @click="actionAdd">+</b-button>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'
    import control_store from '../../../store/Control_store'
    import actionsList_store from '../../../store/ActionsList_store'


    export default {
        name: 'switch-menu',
        methods:{
            actionsListChange: function (listName) {
                console.log('> SwitchMenu/actionsListChange')
                app_store.setMenuSeen(listName)
                actionsList_store.setCurrent(listName)
            },
            searchAll: function () {
                console.log('> SwitchMenu.vue/searchAll')
                app_store.searchAll()
            },
            searchDefault: function () {
                console.log('> SwitchMenu.vue/searchDefault')
                app_store.searchDefault()
            },
            searchEdit: function () {
                console.log('> SwitchMenu.vue/searchEdit')
                app_store.searchEdit()
            },
            actionAdd: function () {
                console.log('> SwitchMenuS.vue/addAction')
                app_store.actionAddSeen()
            }
        }
    }
</script>

<style scoped>

    .switch-menu{
        margin-top: 0.5em;
    }

</style>