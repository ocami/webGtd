<template>
    <section>
        <div>
            <p>{{location.id}}</p>
            <span>x</span>
            <input v-model="location.x" @change="setMap" class="form-control">
            <span>y</span>
            <input v-model="location.y" @change="setMap" class="form-control">
            <span>city</span>
            <input v-model="location.city" class="form-control">
            <span v-if="!location.created" >
                <span>id</span>
                <input v-model="location.id" class="form-control">
            </span>

            {{location.shortcut}}
            <div>
                <b-form-checkbox id="checkbox1"
                                 v-model="location.shortcut"
                                 value=true
                                 unchecked-value=false
                                 @change="shortcutChange"
                >
                    Raccourcis
                </b-form-checkbox>
                <div>State: <strong>{{status}}</strong></div>
            </div>




            <b-button @click="submit">Valider</b-button>
            <b-button @click="destroy">Supprimer</b-button>
            <b-button @click="test">test</b-button>
            <a v-if="map" :href="mapHref" target="_blank">map</a>
        </div>

        {{location}}

    </section>
</template>

<script>

    import app_store from '../../../../../../store/app_store'

    export default {
        name: 'form-modal-location',
        components : {

        },
        data ()  {
            return {
                data : app_store.data,
                status: 'not_accepted',
                map: function () {
                    if(this.location.x && this.location.y)
                        return true

                    return false
                }
            }
        },
        computed:{
            action: function () { return this.data.action},
            myLocation: function () { return this.data.userData.locations},
            location: function () { return app_store.getLocation()},
            mapHref: function () {
                return 'http://www.google.com/maps/place/'+this.action.location.x+','+this.action.location.y
            }
        },
        props:{
        },
        methods:{
            submit : function () {
                if(!this.location.created)
                    app_store.createLocation(this.location)

                this.$emit('submit')
            },
            destroy : function () {
                console.log('>FormModalLocation/destroy')
                app_store.deleteActionLocation()
                this.$emit('submit')
            },
            test : function () {
                console.log(this.location.city)
            },
            setMap : function () {
                if(this.location.x && this.location.y)
                    this.map = true
                else
                    this.map = false
            },
            shortcutChange: function () {
                app_store.shortcutChange()
            }
        }
    }
</script>

<style scoped>

</style>