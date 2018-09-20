<template>
    <section>
        <div>
            <p>{{location.id}}</p>

            <div v-if="errors.length">
                <ul>
                    <li v-for="error in errors" class="text-danger">{{ error }}</li>
                </ul>
            </div>

            <input
                    v-if="!location.created"
                    v-model="location.id"
                    class="form-control mb-4 id-data">

            <form-location
                    @location-change="locationChange"
            ></form-location>


            <label>Définir comme raccourcis</label>
            <input v-if="this.location.created" type="checkbox" v-model="location.shortcut" @change="shortcutChange">

            <input name="Définir comme raccourcis" v-if="!this.location.created" type="checkbox" v-model="checked"
                   @change="shortcutChange">
            <br>
            <b-button @click="submit">Valider</b-button>
            <b-button @click="destroy">Supprimer</b-button>

            <a v-if="mapHref" :href="mapHref" target="_blank" class="float-right">
                <img border="0" alt="W3Schools" src="https://img.talkandroid.com/uploads/2017/12/google-maps-go.png" width="50" height="50">
            </a>
        </div>

    </section>
</template>

<script>

    import app_store from '../../../../../../store/app_store'
    import FormLocation from '../../../../../tools/FormLocation.vue'
    import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
    import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';

    export default {
        name: 'form-modal-location',
        components: {
            bFormCheckboxGroup,
            bFormCheckbox,
            FormLocation
        },
        data() {
            return {
                errors: [],
                data: app_store.data,
                checked: true,
            }
        },
        computed: {
            location: function () {
                return this.data.currentUserData
            },
            mapHref: function () {
                if(this.location.features.x && this.location.features.y)
                    return 'http://www.google.com/maps/place/' + this.location.features.y + ',' + this.location.features.x
                else
                    return null
            },
        },
        methods: {
            submit: function () {
                this.errors = []
                if (!this.location.id) {
                    this.errors.push('Vous devez indiquer un identifiant');
                    console.log(this.location.id)
                    return
                }

                this.checked = true

                if (!this.location.created) {
                    app_store.createUserData('location', this.location, this.checked)
                    this.$emit('submit')
                    return
                }

                app_store.updateUserData('location', this.location, this.checked)

                this.$emit('submit')

            },
            destroy: function () {
                console.log('>FormModalLocation/destroy')
                app_store.deleteActionTag('location')
                this.$emit('submit')
            },
            setMap: function () {
                if (this.location.x && this.location.y)
                    this.map = true
                else
                    this.map = false
            },
            shortcutChange: function () {
                console.log('>FormModalLocation.vue/shortcutChange')
                if (this.location.created)
                    app_store.shortcutChange('location', this.location.id, this.location.shortcut)

            },
            locationChange: function (features) {
                console.log('>FormModalLocation.vue/locationChange')
                this.location.features = features
            }
        }
    }
</script>

<style scoped>

    .id-data {
        background-color: rgba(46, 139, 87, 0.2);
    }

</style>