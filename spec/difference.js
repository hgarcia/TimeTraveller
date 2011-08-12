var should = require('should'), 
    assert = require('assert'), 
    tt = require('../lib/timetraveller'),
    vows = require('vows');

vows.describe('Compares to other dates')

.addBatch({
    'Given a new date by a time traveller object': {
        topic: function () {            
            return new tt.TimeTraveller().now();
        }, 
        'When I diff to another date without a precision': {
            topic: function (date) {
                var d = new Date();
                d.setMilliseconds(date.getMilliseconds()+100);
                return date.differenceFrom(d);
            },

            'Should compare to the millisecond': function (result) {
                result.inMilliseconds.should.be.above(0);
            }
        },
        'When I diff to another date with seconds precision': {
            topic: function (date) {
                var d = new Date();
                d.setSeconds(d.getSeconds()+1);
                return date.differenceFrom(d);
            },
            'Should compare to the seconds': function (result) {
                result.inSeconds.should.equal(1);
            }
        },
        'When I diff to another date with minutes precision': {
            topic: function (date) {
                var d = new Date();
                d.setMinutes(d.getMinutes()+1);
                return date.differenceFrom(d);
            },
            'Should compare to the minutes': function (result){
                result.inMinutes.should.equal(1);
            }
        },
        'When I diff to another date with hours precision': {
            topic: function (date) {
                var d = new Date();
                d.setHours(d.getHours()+25);
                return date.differenceFrom(d);
            },
            'Should compare to the hour': function (result){
                result.inHours.should.equal(25);
            }
        },
        'When I diff to another date with date precision': {
            topic: function (date) {
                var d = new Date();
                d.setDate(d.getDate()+1);
                return date.differenceFrom(d);
            },
            'Should compare to the date': function (result){
                result.inDays.should.equal(1);
            }
        },
        'When I diff to another date with month precision': {
            topic: function (date) {
                var d = new Date();
                d.setMonth(d.getMonth()+13);
                return date.differenceFrom(d);
            },
            'Should compare to the month': function (result){
                result.inMonths.should.equal(13);
            }
        },
        'When I diff to another date with year precision': {
            topic: function (date) {
                var d = new Date();
                d.setFullYear(d.getFullYear()+1);
                return date.differenceFrom(d);
            },
            'Should compare to the year': function (result){
                result.inYears.should.equal(1);
            }
        }
    }    
})

.export(module);
