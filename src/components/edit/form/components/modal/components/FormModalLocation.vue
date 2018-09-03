<template>
    <section>
        <div>
            <p>Location : {{tagPosition}} / {{tagName}}</p>
            <input v-model="action.location.x" class="form-control">
            <input v-model="action.location.y" class="form-control">
            <input v-model="action.location.city" class="form-control">
            <b-button @click="submit">Valider</b-button>
            <b-button @click="destroy">Supprimer</b-button>
            <a :href="mapHref" target="_blank">map</a>
        </div>
        <div>
            <p>Location : {{tagPosition}} / {{tagName}}</p>
            <input v-model="action.location.x" class="form-control">
            <input v-model="action.location.y" class="form-control">
            <input v-model="action.location.city" class="form-control">
            <b-button @click="submit">Valider</b-button>
            <b-button @click="destroy">Supprimer</b-button>
            <b-button @click="test">test</b-button>
            <a :href="mapHref" target="_blank">map</a>
        </div>

        {{myLocation}}

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
                data : app_store.data
            }
        },
        computed:{
            action: function () { return this.data.action},
            myLocation: function () { return this.data.locations},
            mapHref: function () {
                return 'http://www.google.com/maps/place/'+this.action.location.x+','+this.action.location.y
            }
        },
        props:{
            tagPosition : Number,
            tagName: String
        },
        methods:{
            submit : function () {
                app_store.tagSelected('+'+this.action.location.city,this.tagPosition)
                this.$emit('submit')
            },
            destroy : function () {
                this.action.location = {x:'',y:''}
                app_store.tagSelected('',this.tagPosition)
                this.$emit('submit')
            },
            test : function () {
                var obj = this.myLocation.find(function (obj) { return obj.id === '12'; });
                console.log('myLocation :' + obj.city)
                console.log(obj)
            }
        }
    }
</script>

<style scoped>

</style>