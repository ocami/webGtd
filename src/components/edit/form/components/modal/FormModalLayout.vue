<template>
    <section>
        <form-modal-date v-if="tagName === 'date'"
                         :tagPosition="tagPosition" :tagName="tagName"
                         @submit="closeFormModal"
        ></form-modal-date>
        <form-modal-location v-if="tagName === 'location'"
                             :tagPosition="tagPosition" :tagName="tagName"
                             @submit="closeFormModal"

        ></form-modal-location>
        <form-modal-with v-if="tagName === 'with'"
                         :tagPosition="tagPosition" :tagName="tagName"
                         @submit="closeFormModal"
        ></form-modal-with>
    </section>
</template>

<script>

    import app_store from '../../../../../store/app_store'
    import FormModalDate from './components/FormModalDate.vue'
    import FormModalLocation from './components/FormModalLocation.vue'
    import FormModalWith from './components/FormModalWith.vue'

    export default {
        name: 'form-modal-layout',
        components : {
            FormModalDate,
            FormModalLocation,
            FormModalWith
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
            tagPosition : Number,
            tagName: String
        },
        methods:{
            closeFormModal: function () {this.$emit('submit')}
        }
    }
</script>

<style scoped>

</style>