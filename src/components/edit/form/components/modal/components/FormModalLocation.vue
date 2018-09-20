<template>
    <section>
        <div>
            <p>{{location.id}}</p>

            <span v-if="!location.created">
                <input v-model="location.id" class="form-control">
            </span>

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
            <a v-if="map" :href="mapHref" target="_blank">map</a>
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
                data: app_store.data,
                checked: true,
                map: function () {
                    if (this.location.x && this.location.y)
                        return true

                    return false
                }
            }
        },
        computed: {
            location: function () {
                return this.data.currentUserData
            },
            mapHref: function () {
                return 'http://www.google.com/maps/place/' + this.location.x + ',' + this.location.y
            },
        },
        methods: {
            submit: function () {
                if (!this.location.created) {
                    app_store.createUserData('location', this.location, this.checked)
                }
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

</style>