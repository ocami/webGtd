<template>
    <section>
        <search-tags-select v-for="tag in tags"
                          :key="tag.name"
                          :tag="tag"
        ></search-tags-select>


        <button @click="tagsCompare">Appliquer</button>
        <button @click="tagsEmpty">Vider</button>
        <button @click="setDefaultSearch">Définir comme requête auto</button>

        <b-form-group>
            <b-form-radio-group id="radioAsc"
                                buttons
                                button-variant="outline-primary"
                                size="sm"
                                v-model="sortAscModel"
                                :options="sortAscOptions"
                                name="radioBtnOutline"
                                @change="sortAscChange($event)"
            />
        </b-form-group>

        <b-form-group>
            <b-form-radio-group id="radioSortSelect"
                                buttons
                                stacked
                                v-model="sortTagModel"
                                :options="sortTagOptions"
                                name="radioBtnStacked"
                                @change="sortTagChange($event)"
            />
        </b-form-group>

        <search-modal-layout></search-modal-layout>

    </section>
</template>

<script>

    import app_store from '../../../store/app_store'
    import SearchTagsSelect from './components/SearchTagsSelect.vue'
    import SearchModalLayout from './components/modal/SearchModalLayout.vue'

    export default {
        name: 'search-layout',
        components : {
            SearchTagsSelect,
            SearchModalLayout
        },
        data ()  {
            return {
                data: app_store.data,
                sortTagModel: app_store.getList().sortTag,
                sortAscModel: app_store.getList().sortAsc,
                sortTagOptions: app_store.getSortFilters(),
                sortAscOptions: [{text:'up', value: true},{text:'down', value: false}]
            }
        },
        computed:{
            tags: function () { return this.data.tags }
        },
        methods:{
            tagsCompare: function () {
                console.log('==> actionSearch/tagsCompare')
                app_store.tagsCompare()
            },
            tagsEmpty: function () { app_store.tagsEmpty() },
            setDefaultSearch: function () {
                console.log('==> actionSearch/defaultSearch')
                app_store.setDefaultSearch()
            },
            sortAscChange: function (event) {
                console.log('==> actionSearch/sortAscChange')
                app_store.sortAscChange(event)
            },
            sortTagChange: function (event) {
                console.log('==> actionSearch/sortTagChange')
                app_store.sortTagChange(event)
            },
        }
    }
</script>

<style scoped>

</style>