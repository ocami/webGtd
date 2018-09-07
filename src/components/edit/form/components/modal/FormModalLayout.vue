<template>
    <section>
        <form-modal-date v-if="tagName === 'date'"
                         @submit="closeFormModal"
        ></form-modal-date>
        <form-modal-location v-if="tagName === 'location'"
                             @submit="closeFormModal"

        ></form-modal-location>
        <form-modal-contact v-if="tagName === 'contact'"
                         @submit="closeFormModal"
        ></form-modal-contact>
    </section>
</template>

<script>

    import app_store from '../../../../../store/app_store'
    import FormModalDate from './components/FormModalDate.vue'
    import FormModalLocation from './components/FormModalLocation.vue'
    import FormModalContact from './components/FormModalContact.vue'

    export default {
        name: 'form-modal-layout',
        components : {
            FormModalDate,
            FormModalLocation,
            FormModalContact
        },
        data ()  {
            return {
                data : app_store.data
            }
        },
        computed:{
            action: function () {return this.data.action}
        },
        props:{
            tagName: String
        },
        methods:{
            closeFormModal: function () {this.$emit('submit')}
        }
    }
</script>

<style scoped>

</style>