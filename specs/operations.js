var should = require('should'), 
    assert = require('assert'), 
    tt = require('../lib/timetraveller'),
    vows = require('vows');

vows.describe('Operate with dates')

.addBatch({
    'Given a time traveller object': {
        topic: function () {
            return new tt.TimeTraveller();
        }, 
        'When I get a new date object': {
            topic: function (timeTraveller) {
                return timeTraveller.now();
            },

            'Should return an enhanced date': function (date) {
                date.should.respondTo('addDays');
                date.should.be.an.instanceof(Date);
            },

            'but should not modify the native date object': function(date){
                var d = new Date();
                d.should.not.respondTo('addDays');
            },
        }   
    }
})


.addBatch({
    'Given a timeTraveller object':{
        topic: function () {
            return new tt.TimeTraveller();
        },
        'When calling addMilliseconds with a positive value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addMilliseconds(120000);
            },
            'should return a date as many milliseconds in the future' : function (date) {
                var actual = new Date().getMinutes();
                var modified = date.getMinutes();
                (modified - actual).should.equal(2);
            }
        },
        'When calling addMilliseconds with a negative value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addMilliseconds(-120000);
            },
            'should return a date as many milliseconds in the pass' : function (date) {
                var actual = new Date().getMinutes();
                var modified = date.getMinutes();
                (actual- modified).should.equal(2);
            }
        }
    }
})

.addBatch({
    'Given a timeTraveller object':{
        topic: function () {
            return new tt.TimeTraveller();
        },
        'When calling addSeconds with a positive value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addSeconds(120);
            },
            'should return a date as many seconds in the future' : function (date) {
                var actual = new Date().getMinutes();
                var modified = date.getMinutes();
                (modified - actual).should.equal(2);
            }
        },
        'When calling addSeconds with a negative value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addSeconds(-120);
            },
            'should return a date as many seconds in the pass' : function (date) {
                var actual = new Date().getMinutes();
                var modified = date.getMinutes();
                (actual- modified).should.equal(2);
            }
        }
    }
})

.addBatch({
    'Given a timeTraveller object':{
        topic: function () {
            return new tt.TimeTraveller();
        },
        'When calling addMinutes with a positive value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addMinutes(60);
            },
            'should return a date as many minutes in the future' : function (date) {
                var actual = new Date().getHours();
                var modified = date.getHours();
                if (actual === 23) {
                    modified.should.equal(0);
                } else {
                    (modified - actual).should.equal(1);
                }
            }
        },
        'When calling addMinutes with a negative value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addMinutes(-60);
            },
            'should return a date as many minutes in the pass' : function (date) {
                var actual = new Date().getHours();
                var modified = date.getHours();
                if (actual === 0) {
                    modified.should.equal(23);
                } else {
                    (actual - modified).should.equal(1);
                }
            }
        }
    }
})

.addBatch({
    'Given a timeTraveller object':{
        topic: function () {
            return new tt.TimeTraveller();
        },
        'When calling addHours with a positive value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addHours(1);
            },
            'should return a date as many hours in the future' : function (date) {
                var actual = new Date().getHours();
                var modified = date.getHours();
                if (actual === 23) {
                    modified.should.equal(0);   
                } else {
                    (modified - actual).should.equal(1);
                }
            }
        },
        'When calling addHours with a negative value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addHours(-1);
            },
            'should return a date as many hours in the pass' : function (date) {
                var actual = new Date().getHours();
                var modified = date.getHours();
                if (actual === 0) {
                    modified.should.equal(23);
                } else {
                    (actual- modified).should.equal(1);
                }
            }
        }
    }
})

.addBatch({
    'Given a time traveller object': {
        topic: function () {
            return new tt.TimeTraveller();
        }, 
        'When calling addDays with a positive value': {
            topic: function (timeTraveller) {
                var d = timeTraveller.now();
                return d.addDays(5);
            },
            'should return a date in the future': function (date) {
                (date > new Date()).should.be.ok;
            }
        },

        'When calling addDays with a negative value': {
            topic: function (timeTraveller) {
                var d = timeTraveller.now();
                return d.addDays(-5);
            },
            'should return a date in the past': function (date) {
                (date < new Date()).should.be.ok;
            }
        }
    }
})

.addBatch({
    'Given a timeTraveller object':{
        topic: function () {
            return new tt.TimeTraveller();
        },
        'When calling addMonths with a positive value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addMonths(12);
            },
            'should return a date as many months in the future' : function (date) {
                var actual = new Date().getYear();
                var modified = date.getYear();
                (modified - actual).should.equal(1);
            }
        },
        'When calling addMonths with a negative value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addMonths(-12);
            },
            'should return a date as many months in the pass' : function (date) {
                var actual = new Date().getYear();
                var modified = date.getYear();
                (actual- modified).should.equal(1);
            }
        }
    }
})


.addBatch({
    'Given a timeTraveller object':{
        topic: function () {
            return new tt.TimeTraveller();
        },
        'When calling addYears with a positive value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addYears(20);
            },
            'should return a date as many years in the future' : function (date) {
                var actual = new Date().getFullYear();
                var modified = date.getFullYear();
                (modified - actual).should.equal(20);
            }
        },
        'When calling addYears with a negative value':{
            topic: function (timeTraveller) {
                return timeTraveller.now().addYears(-20);
            },
            'should return a date as many years in the pass' : function (date) {
                var actual = new Date().getFullYear();
                var modified = date.getFullYear();
                (actual- modified).should.equal(20);
            }
        }
    }
})

.export(module);