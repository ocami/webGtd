<template>
    <section>
        <h2 v-if="this.contact.created">{{contact.id}}</h2>
        <span>Nom</span>
        <input v-model="contact.firstName" @change="firstNameChange"  class="form-control">
        <span>Prénom</span>
        <input v-model="contact.lastName"  class="form-control">
        <span>Couriel</span>
        <input v-model="contact.mail" class="form-control">
        <span>Tel</span>
        <input v-model="contact.tel" class="form-control">

        <span v-if="!contact.created" >
                <span>Identifiant</span>
                <input v-model="contact.id" id="inputId" @keyup="setIdDefined" class="form-control">
        </span>

        <label>Inclure à la liste</label>
        <input v-if="this.contact.created" type="checkbox" v-model="contact.shortcut" @change="shortcutChange">

        <input name="Définir comme raccourcis" v-if="!this.contact.created" type="checkbox" v-model="checked" @change="shortcutChange">
        <br>
        <b-button @click="submit">Valider</b-button>
        <b-button @click="destroy">Supprimer</b-button>
    </section>
</template>

<script>

    import app_store from '../../../../../../store/app_store'
    import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
    import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';

    export default {
        name: 'form-modal-contact',
        components : {
            bFormCheckboxGroup,
            bFormCheckbox
        },
        data ()  {
            return {
                data : app_store.data,
                checked : true,
                idDefined : false
            }
        },
        computed:{
            action: function () { return this.data.action},
            contact: function () {
                console.log(app_store.getContact())
                return app_store.getContact()
            },
            tag:function () {
                return this.data.tags.find(function (obj) { return obj.name === 'contact' })
            }
        },
        props:{
        },
        methods:{
            submit : function () {
                if(!this.contact.created){
                    let tag = app_store.createTag('contact',this.contact, this.checked)
                    this.data.userData.contacts.push(tag)
                }

                this.$emit('submit')
            },
            destroy : function () {
                console.log('>FormModalContact/destroy')
                app_store.deleteActionTag('contact')
                this.$emit('submit')
            },
            shortcutChange: function () {
                console.log('>FormModalContact.vue/shortcutChange')
                if(this.contact.created)
                    app_store.shortcutChange('contact',this.contact.id,this.contact.shortcut)

            },
            firstNameChange: function () {
                if(!this.idDefined)
                    document.getElementById('inputId').value = this.contact.firstName;
            },
            setIdDefined : function () {
                console.log('héhéhéhhé')
                this.idDefined = true
            }
        }
    }
</script>

<style scoped>

</style>