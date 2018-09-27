<template>
    <section>
        <speed-add></speed-add>
        <switch-menu></switch-menu>
        <actions-list :actions="actions"></actions-list>
    </section>
</template>

<script>

    import ActionsList_store from '../../store/ActionsList_store'
    import SpeedAdd from './components/SpeedAdd.vue'
    import SwitchMenu from './components/SwitchMenu.vue'
    import ActionsList from './components/ActionsList.vue'

    export default {
        name: 'menu-layout',
        components : {
            SpeedAdd,
            SwitchMenu,
            ActionsList
        },
        data ()  {
            return {
                actionListData : ActionsList_store.data,
            }
        },
        computed:{
            actions: function () { return this.actionListData.currentList}
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>