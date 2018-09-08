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
                        v-if="option.shortcut && currentSelect.value !== option.value && option.value !=='+'"
                        :value="option.value">
                    <span >{{ option.text }}</span>
                </option>
            </select>

            <b-button
                    v-if="currentSelect.button"
                    @click="tagBtnChange(tag.name)"
                    size="sm">
                {{currentSelect.button}}
            </b-button>
        </span>
</template>

<script>

    import app_store from '../../../../store/app_store'

    export default {
        name: 'search-tags-select',
        components : {
        },
        data ()  {
            return {
                data : app_store.data
            }
        },
        props:{
            tag : Object
        },
        computed:{
            currentSelect: function () {return app_store.getOnceSearchTag(this.tag.name)},
        },
        methods:{
            tagSelected: function (tagName, event) {
                console.log('SearchTagSelect/tagSelected')
                let tagValue = event.target.value

                if(tagValue === '@') {
                    this.data.currentSearch = app_store.getOnceSearchTag(tagName)
                    this.$emit('open-search-modal', tagName)
                    return
                }

                isNaN(Number(tagValue)) ? tagValue : tagValue = Number(tagValue)
                tagValue === 'null' ? tagValue = null : tagValue

                this.currentSelect.value = tagValue
                app_store.tagsCompare()
            },
            tagBtnChange: function (tagName) {
                this.data.currentSearch = app_store.getOnceSearchTag(tagName)
                this.$emit('open-search-modal', tagName)
            }
        }
    }
</script>

<style scoped>

</style>