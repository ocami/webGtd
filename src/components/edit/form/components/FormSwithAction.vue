<template>
    <div>
        <b-button-group size="sm">
            <b-button
                    v-if="currentList.acceptSwitch.todo"
                    @click="switchAction('todo')"><span class="fa fa-play"></span></b-button>
            <b-button
                    v-if="currentList.acceptSwitch.done"
                    @click="switchAction('done')"><span class="fa fa-check-circle"></span></b-button>
            <b-button
                    v-if="currentList.acceptSwitch.incubation"
                    @click="switchAction('incubation')"><span class="fa fa-recycle"></span></b-button>
            <b-button
                    v-if="currentList.acceptSwitch.destroy"
                    @click="switchAction('destroy')"><span class="fa fa-trash"></span></b-button>
        </b-button-group>
    </div>
</template>

<script>

    import app_store from '../../../../store/app_store'

    export default {
        name: 'form-switch-currentAction',
        data ()  {
            return {data : app_store.data}
        },
        computed: {
            currentList: function () { return this.data.currentList }
        },
        methods:{
            switchAction: function (newListName) {
                app_store.switch(newListName, this.currentList.name)
            }
        }
    }
</script>

<style scoped>

</style>