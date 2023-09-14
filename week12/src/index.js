"use strict";
class DateClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
    getTime() {
        var d = new Date();
        return d.getTime();
    }
    getMonth() {
        var d = new Date();
        return d.getMonth();
    }
    getTimezone() {
        return this.timeZone;
    }
}
const dateObj = new DateClass("IND");
console.log(dateObj.getMonth());
