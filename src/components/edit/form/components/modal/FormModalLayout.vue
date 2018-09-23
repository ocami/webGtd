<template>
    <section>
        <div v-if="errors.length">
            <ul>
                <li v-for="error in errors" class="text-danger">{{ error }}</li>
            </ul>
        </div>

        <form-modal-date
                v-if="tagName === 'date'"
                @submit="closeFormModal"
        ></form-modal-date>
        <form-modal-location
                v-if="tagName === 'location'"
                @submit="closeFormModal"
                @errors="setErrors"
        ></form-modal-location>
        <form-modal-contact
                v-if="tagName === 'contact'"
                @submit="closeFormModal"
                @errors="setErrors"
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
        components: {
            FormModalDate,
            FormModalLocation,
            FormModalContact
        },
        data() {
            return {
                data: app_store.data,
                errors: [],
            }
        },
        computed: {
            currentAction: function () {
                return this.data.currentAction
            }
        },
        props: {
            tagName: String
        },
        methods: {
            closeFormModal: function () {
                console.log('> FormModalLocation.vue/closeFormModal')
                this.$emit('submit')
                this.errors = []
            },
            setErrors: function (txt) {
                console.log('> FormModalLocation.vue/setErrors')
                console.log(txt)
                if(!this.errors.includes(txt))
                    this.errors.push(txt);
            }
        },

    }
</script>

<style scoped>

</style>