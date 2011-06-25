
function isDate (date) {
    return (date && date.getFullYear);    
}

var TimeSpan = function (ms, secondDate) {
    if (isDate(secondDate) && isDate(ms)) {
        ms = (ms - secondDate);
    }
    if (!ms || isNaN(ms)) ms = 0;
    this.inMilliseconds = ms;
    this.inSeconds = Math.floor(ms/1000);
    this.inMinutes = Math.floor(ms/(1000*60));
    this.inHours = Math.floor(ms/(1000*60*60));
    this.inDays = Math.floor(ms/(1000*60*60*24));
    this.inMonths = 0;
    this.inYears = 0;
};

TimeSpan.prototype.from = function (firstDate, secondDate) {
    var ts = new TimeSpan(firstDate - secondDate);
    ts.inMonths = ((firstDate.getYear() - secondDate.getYear())* 12) + (firstDate.getMonth() - secondDate.getMonth());
    ts.inYears = (firstDate.getYear() - secondDate.getYear());
    return ts;
};

var TimeTraveller = function () {
   
};

TimeTraveller.prototype.now = function () {
    var d = new Date();

    var isValidPrecision = function (precision) {
        return (precision &&
            (precision === 's' ||
             precision === 'm' ||
             precision === 'h' || 
             precision === 'd' || 
             precision === 'M' || 
             precision === 'y') );
    }

    d.differenceFrom = function (date) {
        if (!isDate(date)) throw new Error('The param should be a date');
        var ts = new TimeSpan(date - this);
        ts.inMonths = ((date.getYear() - this.getYear())* 12) + (date.getMonth() - this.getMonth());
        ts.inYears = (date.getYear() - this.getYear());
        return new TimeSpan().from(date, this);
    };

    d.addMilliseconds = function (millisecondsToAdd) {
        this.setMilliseconds(this.getMilliseconds() + millisecondsToAdd);
        return this;
    };

    d.addSeconds = function (secondsToAdd) {
        this.setSeconds(this.getSeconds() + secondsToAdd);
        return this;
    };

    d.addMinutes = function (minutesToAdd) {
        this.setMinutes(this.getMinutes() + minutesToAdd);
        return this;
    };

    d.addHours = function (hoursToAdd) {
        this.setHours(this.getHours() + hoursToAdd);
        return this;
    };

    d.addDays = function (daysToAdd) {
        this.setDate(this.getDate() + daysToAdd);
        return this;
    };

    d.addMonths = function (monthsToAdd) {
        this.setMonth(this.getMonth() + monthsToAdd);
        return this;
    };

    d.addYears = function (yearsToAdd) {
        this.setFullYear(this.getFullYear() + yearsToAdd);
        return this;
    };

    d.isSameSecond = function (date) {
        return (d.isSameMinute(date) &&
                d.getSeconds() === date.getSeconds());
    };

    d.isSameMinute = function (date) {
        return (d.isSameHour(date) &&
                d.getMinutes() === date.getMinutes());
    };

    d.isSameHour = function (date) {
        return (d.isSameDate(date) &&
                d.getHours() === date.getHours());
    };

    d.isSameDate = function (date) {
        return (d.isSameMonth(date) && 
                d.getDate() === date.getDate());
    };

    d.isSameMonth = function (date) {
        return (d.isSameYear(date) &&
                d.getMonth() === date.getMonth());
    };

    d.isSameYear = function (date) {
        return (d.getFullYear() === date.getFullYear());
    };

    d.isSame = function (date, precision) {
        if (!isDate(date)) return false;
        if (!precision) return ((d - date) === 0);
        if (!isValidPrecision(precision)) return false;
        if (precision === 's') return this.isSameSecond(date);
        if (precision === 'm') return this.isSameMinute(date);
        if (precision === 'h') return this.isSameHour(date);
        if (precision === 'd') return this.isSameDate(date);
        if (precision === 'M') return this.isSameMonth(date);
        if (precision === 'y') return this.isSameYear(date);
    };

    return d;

};

exports.TimeTraveller = TimeTraveller;
exports.TimeSpan = TimeSpan;

