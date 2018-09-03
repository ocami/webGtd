<template>
    <section>
        <form-tags-select v-for="tag in tags"
                          @open-form-modal="openFormModal"
                          :key="tag.name"
                          :tag="tag"
        ></form-tags-select>

        <b-modal ref="formModal" id="form-modal" hide-footer hide-header>
            <form-modal-layout @submit="closeFormModal" :tagPosition="tagPosition" :tagName="tagName" ></form-modal-layout>
        </b-modal>

        <input v-model="action.name" @blur="inputChange($event)" class="form-control">
        <textarea v-model="action.content" @blur="inputChange($event, true)" class="form-control" rows="12"></textarea>
    </section>
</template>

<script>

    import app_store from '../../../store/app_store'
    import FormTagsSelect from './components/FormTagsSelect.vue'
    import FormModalLayout from './components/modal/FormModalLayout.vue'


    export default {
        name: 'form-layout',
        components : {
            FormTagsSelect,
            FormModalLayout
        },
        data ()  {
            return {
                data : app_store.data,
                tagPosition : null,
                tagName : null
            }
        },
        computed:{
            action: function () { return this.data.action},
            tags: function () { return this.data.tags }
        },
        methods:{
            inputChange: function (event, isTextarea) {
                console.log('> FormLayout.vue/inputChange')
                app_store.inputChange(event, isTextarea)
            },
            openFormModal: function (tagPosition,tagName) {
                console.log('> FormLayout.vue/openFormModal')
                console.log(tagPosition + '/' + tagName)
                this.tagPosition = tagPosition
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

</style>