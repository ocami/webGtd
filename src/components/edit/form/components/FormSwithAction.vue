<template>
    <div>
        <b-button-group size="sm">
            <b-button
                    v-if="actions.acceptSwitch.todo"
                    @click="switchAction('todo')"><span class="fa fa-play"></span></b-button>
            <b-button
                    v-if="actions.acceptSwitch.done"
                    @click="switchAction('done')"><span class="fa fa-check-circle"></span></b-button>
            <b-button
                    v-if="actions.acceptSwitch.incubation"
                    @click="switchAction('incubation')"><span class="fa fa-recycle"></span></b-button>
            <b-button
                    v-if="actions.acceptSwitch.destroy"
                    @click="switchAction('destroy')"><span class="fa fa-trash"></span></b-button>
        </b-button-group>
    </div>
</template>

<script>

    import app_store from '../../../../store/app_store'

    export default {
        name: 'form-switch-action',
        computed: {
            actions: function () {
                return app_store.getList()
            }
        },
        methods:{
            switchAction: function (newListName) {
                app_store.switch(newListName, this.actions.name)
            }
        }
    }
</script>

<style scoped>

</style>