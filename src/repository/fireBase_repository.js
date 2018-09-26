import firebase from 'firebase';
import app_store from "../store/app_store"
var Promise = require('es6-promise').Promise;

firebase.initializeApp({
    apiKey: "AIzaSyBePWofeodc6wCIQ0vXl27jJQ6zSp4G0-M",
    authDomain: "web-gtd.firebaseapp.com",
    databaseURL: "https://web-gtd.firebaseio.com",
    projectId: "web-gtd",
    storageBucket: "web-gtd.appspot.com",
    messagingSenderId: "662197326589"
});

var db = firebase.database();


class DbStore {

    actionsImport(){
        console.log('> fireBase/actionsImport')
        firebase.database().ref('actions/').once('value').then(function(snapshot) {
            actionsListInit(snapshot.val())
        }, function(error) {
            console.error('> fireBase/actionsImport : '+error);
        });
    }

    tagsImport(){
        console.log('> fireBase/tagsImport')
        firebase.database().ref('tags/').once('value').then(function(snapshot) {
            tagsListInit(snapshot.val())
        }, function(error) {
            console.error('> fireBase/actionsImport : '+error);
        });
    }

    /*----------------------------------------------------------------------------------------------------------------*/
    addAction(action) {
        console.log('> fireBase/addAction')

        let path = 'actions/'+action.status+'/list/'

        let id = this.guid()
        action.id = id
        action.isActive = false
        return db.ref(path + id).set(action);
    }

    updateAction(action) {
        console.log('> fireBase/updateAction')
        if(!action) action = app_store.data.currentAction

        let path = 'actions/'+action.status+'/list/'+action.id
        let updates = {};

        action = JSON.parse(JSON.stringify(action));
        action.isActive = false

        updates[path] = action;

        db.ref().update(updates)
    }

    switch(newListName, listName, action){
        console.log('> fireBase/switch')

        let oldPath = 'actions/'+listName+'/list/'+action.id
        let newPath = 'actions/'+newListName+'/list/'+action.id

        action = JSON.parse(JSON.stringify(action));
        action.isActive = false

        db.ref(oldPath).remove()
        return db.ref(newPath).set(action);
    }

    setDefaultSearch(listName,sortTagDefault,sortAscDefault,defaultSearch){
        console.log('> fireBase/setDefaultSearch')

        let updates = {};
        updates['actions/'+listName+'/sortTagDefault'] = sortTagDefault;
        updates['actions/'+listName+'/sortAscDefault'] = sortAscDefault;
        updates['actions/'+listName+'/defaultSearch'] = defaultSearch;

        db.ref().update(updates)
    }

    /*----------------------------------------------------------------------------------------------------------------*/
    addUserData(dataName, data) {
        console.log('> fireBase/addUserData')

        let path = 'user_data/'+dataName+'/'+data.id
        console.log(path+' ajouté')

        return db.ref(path).set(data);
    }

    updateUserData(dataName, data){
        let path = 'user_data/'+dataName+'/'+data.id
        let updates = {};
        data = JSON.parse(JSON.stringify(data));
        updates[path] = data;
        db.ref().update(updates)
    }

    getUserData(dataName,id){
        console.log('> fireBase/getUserData')
        let path = 'user_data/'+dataName+'/'+id

        console.log(path)

        firebase.database().ref(path).once('value').then(function(snapshot) {
            console.log(snapshot.val())
            app_store.data.currentUserData = snapshot.val()
        }, function(error) {
            console.error('> fireBase/getContactFB : '+error);
        });
    }

    /*----------------------------------------------------------------------------------------------------------------*/
    updateAppTagOption(tag) {
        console.log('> fireBase/updateAppTagOption')
        let path = 'tags/'+tag.name+'/options'
        let updates = {};
        let options = JSON.parse(JSON.stringify(tag.options));

        return db.ref(path).set(options);
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

}

export default new DbStore();

function actionsListInit(actionsList){
    console.log('> app_store/actionsListInit')
    $.each(actionsList, function(index, value) {
        let list = app_store.getList(index)

        list.sortTagDefault = value.sortTagDefault
        list.sortAscDefault = value.sortAscDefault
        list.defaultSearch = value.defaultSearch
        list.list = snapshotToArray(value.list)
    });
    app_store.searchAll()
}

function tagsListInit(tagsList){
    console.log('> app_store/tagsListInit')
    let tagsArray = snapshotToArray(tagsList)

    function compare(a,b) {
        if (a.position < b.position)
            return -1;
        if (a.position > b.position)
            return 1;
        return 0;
    }

    app_store.data.tags = tagsArray.sort(compare);
}

function snapshotToArray(list) {
    console.log('> app_store/snapshotToArray2')
    var returnArr = [];

    $.each(list, function(index, value) {
        returnArr.push(value)
    });

    return returnArr;
}
