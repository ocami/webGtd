<template>
    <section>
        <div>
            <p>{{location.id}}</p>


            <select
                    v-if="!location.created"
                    @change="tagSelected($event)">
                    <option value=""  selected>-</option>
                    <option v-for="option in tag.options" :value="option.value" v-if="option.value !=='+'">
                        <span>{{ option.text }} {{option.shortcut}}</span>
                    </option>

            </select>


            <span v-if="!location.created" >
                <span>id</span>
                <input v-model="location.id" class="form-control">
            </span>
            <span>x</span>
            <input v-model="location.x" @change="setMap" class="form-control">
            <span>y</span>
            <input v-model="location.y" @change="setMap" class="form-control">
            <span>city</span>
            <input v-model="location.city" class="form-control">


            <!--<b-form-checkbox id="checkbox1"
                             v-model="location.shortcut"
                             value=false
                             unchecked-value=true
                             @change="shortcutChange"
            >Raccourcis
            </b-form-checkbox>-->

            <input v-if="this.location.created" type="checkbox" v-model="location.shortcut" @change="shortcutChange">
            1-{{location.shortcut}}

            <input v-if="!this.location.created" type="checkbox" v-model="checked" @change="shortcutChange">
            2-{{checked}}


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
    import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
    import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';

    export default {
        name: 'form-modal-location',
        components : {
            bFormCheckboxGroup,
            bFormCheckbox
        },
        data ()  {
            return {
                data : app_store.data,
                checked : true,
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
            },
            tag:function () {
                return this.data.tags.find(function (obj) { return obj.name === 'location' })
            }
        },
        props:{
        },
        methods:{
            submit : function () {
                if(!this.location.created){
                    let tag = app_store.createLocation('location',this.location, this.checked)
                    this.data.userData.locations.push(tag)
                }

                this.$emit('submit')
            },
            destroy : function () {
                console.log('>FormModalLocation/destroy')
                app_store.deleteActionLocation()
                this.$emit('submit')
            },
            test : function () {
                console.log(this.data.tags.find(function (obj) { return obj.name === 'location' }))
            },
            setMap : function () {
                if(this.location.x && this.location.y)
                    this.map = true
                else
                    this.map = false
            },
            shortcutChange: function () {
                console.log('>FormModalLocation.vue/shortcutChange')
                if(this.location.created)
                    app_store.shortcutChange('location',this.location.id,this.location.shortcut)
                else {
                    console.log('not created')
                }
            },
            tagSelected: function (event) {
                let tag = this.data.action.tags.find(function (obj) { return obj.name === 'location' })
                tag.value = event.target.value
                let truc = app_store.getLocation()
                this.location = truc
            }
        }
    }
</script>

<style scoped>

</style>