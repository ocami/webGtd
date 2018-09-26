import moment from 'moment';
import mtz from 'moment-timezone';
import app_store from '../store/app_store';


class DateTime {

    constructor() {

    }


    //******************************************************************************//

    dateTimeTest() {
        console.log('> DateTime.js/dateTimeTest')

        // let momentDate = this.now()
        // // let momentDate = moment('2018-02-01 19:00:00+0200')
        //
        // let result = {
        //     isActive: true,
        //     passed: this.isPassed(momentDate),
        //     expiry: false,
        //     milliseconds: momentDate.valueOf(),
        //     moment: momentDate.format('YYYY-MM-DD HH:mm:ssZZ'),
        //     longString: momentDate.locale('fr').format('dddd D MMM HH[H]mm'),
        //     shortString: this.getShortString(momentDate),
        //     date: momentDate.format('YYYY[-]MM[-]DD'),
        //     time: momentDate.format('HH[:]mm')
        // }

        return this.thisDay();
    }

    interval() {
        let interval = this.searchNextMonth()
        let d = this.now()

        interval.test = (d >= interval.start && d <= interval.end)

        return interval
    }

    edit(momentDate, expiry) {
        console.log('> DateTime.js/edit')
        return {
            isActive: true,
            passed: this.isPassed(momentDate),
            expiry: expiry,
            milliseconds: momentDate.valueOf(),
            moment: momentDate.format('YYYY-MM-DD HH:mm:ssZZ'),
            longString: momentDate.locale('fr').format('dddd D MMM HH[H]mm'),
            shortString: this.getShortString(momentDate),
            date: momentDate.format('YYYY[-]MM[-]DD'),
            time: momentDate.format('HH[:]mm')
        }
    }

    manualEdit(dateTime, expiry) {
        console.log('> DateTime.js/manualEdit')
        let momentDate = moment(dateTime).tz("Europe/Paris")

        return this.edit(momentDate,expiry)
    }
    
     
    autoEdit(request) {
        console.log('> DateTime.js/autoEdit')

        let momentDate

        switch (request) {

            case '@today' :
                momentDate = this.today()
                break

            case '@tomorrow' :
                momentDate = this.tomorrow()
                break

            case '@inWeek' :
                momentDate = this.inWeek()
                break

            case '@inMonth' :
                momentDate = this.inMonth()
                break

            case '@nextWeek' :
                momentDate = this.nextWeek()
                break

            case '@nextMonth' :
                momentDate = this.nextMonth()
                break

            default :
                console.log('!!ERR!! > DateTime.js/autoEdit => switch param tagValue')
                return
        }

        return this.edit(momentDate,false)

    }


    //***************************ADD DATE
    now() {
        return moment().tz("Europe/Paris")
        // return moment('2018-01-31 19:00').tz("Europe/Paris")
    }

    thisDay() {
        return this.now().format('YYYY-MM-DD')
    }

    today() {
        return this.now().startOf('day').add(18, 'hours');
    }

    tomorrow() {
        return this.today().add(1, 'day')
    }

    inWeek() {
        return this.endOfDay(this.nextDday(5))
    }

    inMonth() {
        return this.endOfDay(this.today().endOf('month'))
    }

    nextWeek() {
        return this.inWeek().add(1, 'week')
    }

    nextMonth() {
        return this.inMonth().add(1, 'month')
    }

    //***************************ADD SEARCH DATE
    searchToday() {
        let start = this.now().startOf('day')
        let end = this.now().endOf('day')
        return {start: start, end: end}
    }

    searchTomorrow() {
        let start = this.tomorrow().startOf('day')
        let end = this.tomorrow().endOf('day')
        return {start: start, end: end}
    }

    searchInWeek() {
        let start = this.now().startOf('isoWeek')
        let end = this.now().endOf('isoWeek')
        return {start: start, end: end}
    }

    searchInMonth() {
        let start = this.now().startOf('month')
        let end = this.now().endOf('month')
        return {start: start, end: end}
    }

    searchNextWeek() {
        let interval = this.searchInWeek()
        let start = interval.start.add(1, 'week')
        let end = interval.end.add(1, 'week')
        return {start: start, end: end}
    }

    searchNextMonth() {
        let start = this.now().endOf('month').add(1,'day').startOf('day')
        let end = start.clone().endOf('month')
        return {start: start, end: end}
    }


    //***************************TOOLS
    endOfDay(m) {
        return m.startOf('day').add(18, 'hours')
    }

    nextDday(day) {
        let today = this.now().isoWeekday();
        return moment().isoWeekday(day)
    }

    lastDday(day) {
        let today = this.now().startOf('isoWeek');
        return today.add(5, day)
    }

    getShortString(date) {
        if (this.isPassed(date))
            return date.format('DD[/]MM')

        let diff = date.diff(this.now(), 'days')

        if (diff === 0)
            return date.format('HH[H]mm')

        if (diff === 1)
            return 'demain'

        if (diff > 1 && diff < 6)
            return date.locale('fr').format('dddd')

        return date.format('DD[/]MM')
    }

    isPassed(date) {

        if (this.now() > date)
            return true

        return false
    }

}

export default new DateTime();