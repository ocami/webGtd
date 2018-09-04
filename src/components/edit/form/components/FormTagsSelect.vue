<template>
    <span>
        <select
                v-if="curentSelect.button === false"
                :class="{ select_title: !curentSelect }"
                @change="tagSelected(tag.name, $event)">

            <option v-if="curentSelect === ''" value=""  selected>-{{tag.name}}</option>
            <option v-if="curentSelect !== ''" value="">-{{tag.name}}</option>
            <!--<option v-for="option in tag.options" :value="option.value" v-if="curentSelect === option.value" selected>
                <span >{{ option.text }}</span>
            </option>
            <option v-for="option in tag.options" :value="option.value" v-if="curentSelect != option.value">
                <span >{{ option.text }} {{option.shortcut}}</span>
            </option>-->
            <option v-for="option in tag.options" :value="option.value" v-if="option.shortcut">
                <span>{{ option.text }} {{option.shortcut}}</span>
            </option>

        </select>

        <b-button
                v-if="curentSelect.button === true"
                @click="tagBtnChange(tag.name)"
                size="sm">
            {{curentSelect.value}}
        </b-button>
    </span>
</template>

<script>

    import app_store from '../../../../store/app_store'

    export default {
        name: 'form-tags-select',
        components : {

        },
        data ()  {
            return {
                data : app_store.data,
                buttonText: ''
            }
        },
        computed:{
            tags: function () { return this.data.tags},
            action: function () { return this.data.action},
            control: function () { return this.data.control},
            curentSelect: function () {return app_store.curentSetlect(this.tag.name)},

        },
        props:{
          tag : Object
        },
        methods:{
            tagSelected: function (tagName, event) {
                console.log('TagSelect.vue/tagSelected')
                console.log(this.tag)

                let tagValue = event.target.value

                if(tagValue === '+'){
                    this.$emit('open-form-modal', tagName)
                }else{
                    this.curentSelect.value = tagValue
                    if(this.tag.modal === true)
                        this.curentSelect.button = true
                }
            },
            tagBtnChange: function (tagName) {
                this.$emit('open-form-modal', tagName)
            }
        }
    }
</script>

<style scoped>

</style>