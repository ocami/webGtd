<template>
    <span>
        <select
                v-if="currentSelect.button === false"
                :class="{ select_title: !currentSelect.value }"
                @change="tagSelected(tag.name, $event)">

            <option v-if="!currentSelect.value" value = 'null'  selected>-{{tag.name}}</option>
            <option v-if="currentSelect.value" value = 'null'>-{{tag.name}}</option>
            <option
                    v-for="option in tag.options"
                    v-if="currentSelect.value === option.value" selected
                    :value="option.value">
                <span >{{ option.text }}</span>
            </option>
            <option v-for="option in tag.options"
                    v-if="option.shortcut && currentSelect.value !== option.value && option.value !=='@'"
                    :value="option.value">
                <span >{{ option.text }}</span>
            </option>
        </select>

        <b-button
                v-if="currentSelect.button === true"
                @click="tagBtnChange(tag.name)"
                size="sm">
            {{currentSelect.value}}
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
            currentAction: function () { return this.data.currentAction},
            control: function () { return this.data.control},
            currentSelect: function () {
                return app_store.getOnceActionTag(this.tag.name)
            },
        },
        props:{
          tag : Object
        },
        methods:{
            tagSelected: function (tagName, event) {
                console.log('TagSelect.vue/tagSelected')

                let tagValue = event.target.value

                if(tagValue === '+') {
                    this.$emit('open-form-modal', tagName)
                    return
                }

                isNaN(Number(tagValue)) ? tagValue : tagValue = Number(tagValue)
                tagValue === 'null' ? tagValue = null : tagValue
                this.currentSelect.value = tagValue
                if(this.tag.modal === true)
                    this.currentSelect.button = true

            },
            tagBtnChange: function (tagName) {
                this.$emit('open-form-modal', tagName)
            }
        }
    }
</script>

<style scoped>
    .select_title{
        color: grey;
    }
</style>