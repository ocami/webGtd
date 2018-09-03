<template>
    <span>
        <select
                v-if="!button"
                :class="{ select_title: !curentSelect }"
                @change="tagSelected($event,tag.position,tag.name)">

            <option v-if="curentSelect === ''" value=""  selected>-{{tag.name}}</option>
            <option v-if="curentSelect !== ''" value="">-{{tag.name}}</option>
            <option v-for="option in tag.options" :value="option.value" v-if="curentSelect === option.value" selected>
                <span >{{ option.text }}</span>
            </option>
            <option v-for="option in tag.options" :value="option.value" v-if="curentSelect != option.value">
                <span >{{ option.text }}</span>
            </option>

        </select>

        <b-button
                v-if="button"
                @click="tagBtnChange(tag.position,tag.name)"
                size="sm">
            {{buttonText}}
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
            curentSelect: function () {return this.action.tags[this.tag.position]},
            button: function () {
                let firstChar = this.curentSelect.charAt(0)

                if (firstChar === '+'){
                    this.buttonText = this.curentSelect.substring(1);
                    return true
                }
                if (firstChar === '@'){
                    this.buttonText = this.action.dateTime.date
                    return true
                }
            }
        },
        props:{
          tag : Object
        },
        methods:{
            tagSelected: function (event,tagPosition, tagName) {
                console.log('TagSelect.vue/tagSelected')

                let tagValue = event.target.value

                if(tagValue.charAt(0) === '+'){
                    console.log('++++++++++++++')
                    console.log(tagName)
                    this.$emit('open-form-modal',tagPosition,tagName)
                }

                if(tagValue.charAt(0) === '@')
                    app_store.dateAutoEdit(tagValue,tagPosition, tagName)

                app_store.tagSelected(tagValue,tagPosition, tagName)
            },
            tagBtnChange: function (tagPosition, tagName) {
                this.$emit('open-form-modal',tagPosition, tagName)
            }
        }
    }
</script>

<style scoped>

</style>