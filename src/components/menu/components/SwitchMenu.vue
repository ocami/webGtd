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
    import Control_store from '../../../store/Control_store'
    import ActionsList_store from '../../../store/ActionsList_store'
    import Action_store from '../../../store/Action_store'


    export default {
        name: 'switch-menu',
        methods:{
            actionsListChange: function (listName) {
                console.log('> SwitchMenu/actionsListChange')

                ActionsList_store.setCurrent(listName)

                Control_store.data.menuSeen = listName
                Control_store.data.editSeen = 'edit'
            },
            searchAll: function () {
                console.log('> SwitchMenu.vue/searchAll')
                ActionsList_store.allVisible()
                ActionsList_store.sortByTag({nature: 'autoTag',name:'updateOn'}, true)
                Action_store.setCurrentByIndex(0)
                Control_store.data.searchSeen = 'all'
            },
            searchDefault: function () {
                console.log('> SwitchMenu.vue/searchDefault')
                let cl = ActionsList_store.data.currentList
                ActionsList_store.tagsCompare(cl.searchDefault)
                ActionsList_store.sortByTag(cl.sortTagDefault, cl.sortAscDefault)
                Action_store.setCurrentByIndex(0)
                Control_store.data.searchSeen = 'default'
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