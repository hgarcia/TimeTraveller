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
        'When I compare to another date without a precision': {
            topic: function (date) {             
                return date.isSame(new Date(2011,1,1));
            },

            'Should compare to the millisecond': function (result) {
                assert.isFalse(result);
            }
        },
        'When I compare to another date with seconds precision': {
            topic: function (date) {
                return date.isSame(new Date(),'s');
            },
            'Should compare to the seconds': function (result){
                assert.isTrue(result);
            }
        },
        'When I compare to another date with minutes precision': {
            topic: function (date) {
                return date.isSame(new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),0),'m');
            },
            'Should compare to the minutes': function (result){
                assert.isTrue(result);
            }
        },
        'When I compare to another date with hours precision': {
            topic: function (date) {
                return date.isSame(new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),0,0),'h');
            },
            'Should compare to the hour': function (result){
                assert.isTrue(result);
            }
        },
        'When I compare to another date with date precision': {
            topic: function (date) {
                return date.isSame(new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0),'d');
            },
            'Should compare to the date': function (result){
                assert.isTrue(result);
            }
        },
        'When I compare to another date with month precision': {
            topic: function (date) {
                return date.isSame(new Date(date.getFullYear(),date.getMonth(),1,0,0,0),'M');
            },
            'Should compare to the month': function (result){
                assert.isTrue(result);
            }
        },
        'When I compare to another date with year precision': {
            topic: function (date) {
                return date.isSame(new Date(date.getFullYear(),0,1,0,0,0),'y');
            },
            'Should compare to the year': function (result){
                assert.isTrue(result);
            }
        }
    }    
})

.export(module);
