<template>
    <section>
        <p>currentView</p>
        <pre>{{currentView}}</pre>
        <hr/>
        <p>currentList</p>
        <pre>{{currentList.name}}</pre>
        <hr/>
        <p>currentAction</p>
        <pre>{{currentAction.name}}</pre>
        <hr/>


        <!--<button @click="letest">TEST</button>-->


    </section>
</template>

<script>

    import app_store from '../../store/app_store'
    import actionsList_store from '../../store/ActionsList_store'
    import Action_store from '../../store/Action_store'
    import Control_store from '../../store/Control_store'

    export default {
        name: 'test',
        data ()  {
            return {
                result: 'result',
                actionsListData : actionsList_store.data,
                actionData : Action_store.data,
                controlData : Control_store.data
            }
        },
        computed:{
            actionsList : function () {
                return this.actionsListData.actionsList
            },
            currentList :function () {
                return this.actionsListData.currentList
            },
            currentAction : function () {
                return this.actionData.action
            },
            currentView : function () {
                return this.controlData.editSeen
            }
        },
        methods:{
            letest : function () {

            },

        }
    }
</script>

<style scoped>

</style>