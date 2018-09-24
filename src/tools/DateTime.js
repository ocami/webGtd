import moment from 'moment';

class DateTime {

    constructor() {
        this.cr = moment()
    }


    dateTimeTest() {
        console.log('> DateTime.js/dateTimeTest')
        var a = moment('2016-01-01');
        console.log(a)
        return cr().locale("fr").format('MMMM Do YYYY, h:mm:ss a')
    }

    tomorrow() {
        this.cr.add(1, 'days')
    }

}

export default new DateTime();