<template>
    <section>
        <speed-add></speed-add>
        <switch-menu></switch-menu>
        <actions-list v-if="seen === 'receipt'" :actions="actions.receipt"></actions-list>
        <actions-list v-if="seen === 'todo'"    :actions="actions.todo"></actions-list>
        <actions-list v-if="seen === 'done'"    :actions="actions.done"></actions-list>
        <actions-list v-if="seen === 'incubation'" :actions="actions.incubation"></actions-list>
        <actions-list v-if="seen === 'destroy'" :actions="actions.destroy"></actions-list>
    </section>
</template>

<script>

    import app_store from '../../store/app_store'
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
                data : app_store.data
            }
        },
        computed:{
            seen: function () { return this.data.control.menuSeen},
            actions: function () { return this.data.actions}
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>