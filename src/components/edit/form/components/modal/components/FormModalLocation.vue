<template>
    <section>
        <div>
            <p>{{location.id}}</p>

            <!--<select
                    v-if="!location.created"
                    @change="tagSelected($event)">
                    <option value=""  selected>-</option>
                    <option v-for="option in tag.options" :value="option.value" v-if="option.value !=='+'">
                        <span>{{ option.text }} {{option.shortcut}}</span>
                    </option>

            </select>-->

            <span v-if="!location.created" >
                <input v-model="location.id" class="form-control">
            </span>
            <span>x</span>
            <input v-model="location.x" @change="setMap" class="form-control">
            <span>y</span>
            <input v-model="location.y" @change="setMap" class="form-control">
            <span>city</span>
            <input v-model="location.city" class="form-control">


            <label>Définir comme raccourcis</label>
            <input v-if="this.location.created" type="checkbox" v-model="location.shortcut" @change="shortcutChange">

            <input name="Définir comme raccourcis" v-if="!this.location.created" type="checkbox" v-model="checked" @change="shortcutChange">
            <br>
            <b-button @click="submit">Valider</b-button>
            <b-button @click="destroy">Supprimer</b-button>
            <a v-if="map" :href="mapHref" target="_blank">map</a>
        </div>

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
            currentAction: function () { return this.data.currentAction},
            location: function () {
                console.log(app_store.getLocation())
                return app_store.getLocation()
            },
            mapHref: function () {
                return 'http://www.google.com/maps/place/'+this.location.x+','+this.location.y
            },
            tag:function () {
                return this.data.tags.find(function (obj) { return obj.name === 'location' })
            }
        },
        methods:{
            submit : function () {
                if(!this.location.created){
                    let tag = app_store.createTag('location',this.location, this.checked)
                    this.data.userData.locations.push(tag)
                }

                this.$emit('submit')
            },
            destroy : function () {
                console.log('>FormModalLocation/destroy')
                app_store.deleteActionTag('location')
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

            },
        }
    }
</script>

<style scoped>

</style>