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
        console.log('> fireBase/actionsImport2')
        firebase.database().ref('actions/').once('value').then(function(snapshot) {
            actionsListInit(snapshot.val())
        }, function(error) {
            console.error('> fireBase/actionsImport : '+error);
        });
    }

    addAction(action) {
        console.log('> fireBase/writeTest')

        let path = 'actions/'+action.status+'/list/'

        let id = this.guid()
        action.id = id
        action.isActive = false
        return db.ref(path + id).set(action);
    }

    updateAction(action) {
        console.log('> fireBase/updateTest')
        let path = 'actions/'+action.status+'/list/'+action.id
        let updates = {};
        action = JSON.parse(JSON.stringify(action));
        action.isActive = false

        updates[path] = action;

        db.ref().update(updates)
    }

    switch(newListName, listName, action){
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
    addContact(contact) {
        console.log('> fireBase/addContact')

        let path = 'contacts/'+contact.id
        return db.ref(path).set(contact);
    }

    updateContact(contact) {
        console.log('> fireBase/updateContact')

    }

    getContactFB(id) {
        console.log('> fireBase/getContactFB')

        let path = 'contacts/'+id

        firebase.database().ref(path).once('value').then(function(snapshot) {
            app_store.data.currentLocation = snapshot.val()
        }, function(error) {
            console.error('> fireBase/getContactFB : '+error);
        });
    }

    /*----------------------------------------------------------------------------------------------------------------*/
    readTest2() {
        console.log('> fireBase/readTest')

        let actions = 'tututu'

        firebase.database().ref('/receipt/list').on('value', function(snapshot) {
            console.log(snapshot.val());
            actions = snapshotToArray(snapshot)
        });

        return actions
    }

    readTest() {
        console.log('> fireBase/readTest')

        let actions = 'tututu'

        firebase.database().ref('/receipt/list').once('value').then(function(snapshot) {
            // The Promise was "fulfilled" (it succeeded).
            console.log(snapshot.val());
            app_store.data.actions.receipt.list = snapshotToArray(snapshot)
        }, function(error) {
            // The Promise was rejected.
            console.error(error);
        });

        return actions
    }

    updateTest(path,action){
        console.log('> fireBase/updateTest')
        let updates = {};
        updates[path] = action;

        db.ref().update(updates)
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
}

function snapshotToArray(list) {
    console.log('> app_store/snapshotToArray2')
    var returnArr = [];

    $.each(list, function(index, value) {
        returnArr.push(value)
    });

    return returnArr;
}
