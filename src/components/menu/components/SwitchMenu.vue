<template>
    <section class="switch-menu">
        <b-button-group size="sm">
            <b-button @click="menuSeenChange('receipt')"><span class="fa fa-shopping-basket"></span></b-button>
            <b-button @click="menuSeenChange('todo')"><span class="fa fa-play"></span></b-button>
            <b-button @click="menuSeenChange('done')"><span class="fa fa-check-circle"></span></b-button>
            <b-button @click="menuSeenChange('incubation')"><span class="fa fa-recycle"></span></b-button>
            <b-button @click="menuSeenChange('destroy')"><span class="fa fa-trash"></span></b-button>
        </b-button-group>

        <b-button-group  size="sm">
            <b-button variant="outline-primary" @click="searchAll">all</b-button>
            <b-button variant="outline-primary" @click="searchAuto">auto</b-button>
            <b-button variant="outline-primary" @click="searchEdit">perso</b-button>
        </b-button-group>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'

    export default {
        name: 'switch-menu',
        methods:{
            menuSeenChange: function (listName) {
                console.log('> SwitchMenuSeen.vue/menuSeenChange')
                app_store.setMenuSeen(listName)
            },
            searchAll: function () {
                console.log('> SwitchMenuSeen.vue/searchAll')
                app_store.searchAll()
            },
            searchAuto: function () {
                console.log('> SwitchMenuSeen.vue/searchAuto')
                app_store.searchAuto()
            },
            searchEdit: function () {
                console.log('> SwitchMenuSeen.vue/searchEdit')
                app_store.searchEdit()
            }
        }
    }
</script>

<style scoped>

    .switch-menu{
        margin-top: 0.5em;
    }

</style>