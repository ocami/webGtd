<template>
    <section>
        <form-swith-action></form-swith-action>

        <form-tags-select v-for="tag in tags"
                          @open-form-modal="openFormModal"
                          :key="tag.name"
                          :tag="tag"
        ></form-tags-select>

        <b-modal ref="formModal" id="form-modal" hide-footer hide-header>
            <form-modal-layout @submit="closeFormModal" :tagName="tagName" ></form-modal-layout>
        </b-modal>

        <input v-model="currentAction.name" @blur="inputChange($event)" class="form-control">
        <textarea v-model="currentAction.content" @blur="inputChange($event, true)" class="form-control" rows="12"></textarea>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'
    import FormTagsSelect from './components/FormTagsSelect.vue'
    import FormSwithAction from './components/FormSwithAction.vue'
    import FormModalLayout from './components/modal/FormModalLayout.vue'


    export default {
        name: 'form-layout',
        components : {
            FormTagsSelect,
            FormModalLayout,
            FormSwithAction
        },
        data ()  {
            return {
                data : app_store.data,
                tagName : null,
            }
        },
        computed:{
            currentAction: function () { return this.data.currentAction},
            tags: function () { return this.data.tags }
        },
        methods:{
            inputChange: function (event, isTextarea) {
                console.log('> FormLayout.vue/inputChange')

                app_store.inputChange(event, isTextarea)
            },
            openFormModal: function (tagName) {
                console.log('> FormLayout.vue/openFormModal')
                app_store.setCurrentUserData(tagName)
                this.tagName = tagName
                this.$refs.formModal.show()
            },
            closeFormModal: function () {
                console.log('> FormLayout.vue/closeFormModal')

                this.$refs.formModal.hide()
            }
        }
    }
</script>

<style scoped>
    .id-data {
        background-color: rgba(46, 139, 87, 0.2);
    }
</style>