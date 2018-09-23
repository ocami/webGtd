<template>
    <section>
        <h3>{{contact.id}}</h3>

        <span>Identifiant</span>
        <input
                v-if="!contact.created"
                v-model="contact.id"
                class="form-control mb-4 id-data">

        <span>Nom</span>
        <input v-model="contact.firstName" class="form-control mb-2">
        <span>Prénom</span>
        <input v-model="contact.lastName"  class="form-control mb-2">
        <span>Couriel</span>
        <input v-model="contact.mail" class="form-control mb-2">
        <span>Tel</span>
        <input v-model="contact.tel" class="form-control mb-2">



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
            }
        },
        computed:{
            contact: function () { return this.data.currentUserData },
        },
        methods:{
            submit : function () {
                if (!this.contact.id) {
                    this.$emit('errors','Vous devez indiquer un identifiant')
                    return
                }

                this.checked = true
                if(!this.contact.created){ app_store.createUserData('contact',this.contact, this.checked) }
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
           /* firstNameChange: function () {
                if(!this.idDefined)
                    document.getElementById('inputId').value = this.contact.firstName;
            },
            setIdDefined : function () {
                console.log('héhéhéhhé')
                this.idDefined = true
            }*/
        }
    }
</script>

<style scoped>

</style>