<template>
        <span>
            <select
                    v-if="curentSelect.button === false"
                    :class="{ select_title: !curentSelect.value }"
                    @change="tagSelected(tag.name, $event)">

                <option v-if="!curentSelect.value" value = 'null'  selected>-{{tag.name}}</option>
                <option v-if="curentSelect.value" value = 'null'>-{{tag.name}}</option>
                <option v-for="option in tag.options"
                        v-if="option.shortcut && curentSelect.value !== option.value"
                        :value="option.value">
                    <span >{{ option.text }}</span>
                </option>
                <option
                        v-for="option in tag.options"
                        v-if="curentSelect.value === option.value" selected
                        :value="option.value">
                    <span >{{ option.text }}</span>
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
            curentSelect: function () {return app_store.getOnceSearchTag(this.tag.name)},
        },
        methods:{
            tagSelected: function (tagName, event) {
                console.log('SearchTagSelect/tagSelected')
                let tagValue = event.target.value

                isNaN(Number(tagValue)) ? tagValue : tagValue = Number(tagValue)
                tagValue === 'null' ? tagValue = null : tagValue

                this.curentSelect.value = tagValue
                app_store.tagsCompare()
            }
        }
    }
</script>

<style scoped>

</style>