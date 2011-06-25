# Time Traveller

A library to work with date and time.

## Purpose

Time traveller is my attempt to provide a better api to work with date and time operations.
My hope is to grow this library to make working with dates as enjoyable as possible.

## Objects

### TimeTraveller

Factory object to extend Date with some utility methods to do comparison and perform common operations on dates. 

As of version 0.2.1 only has a now() factory method that's equivalent to doing new Date().

The returned date object is enhanced with some utility methods as described below.

+++++++++++++++++
+ COMPLETE METHOD DOCUMENTATION
+++++++++++++++++

### TimeSpan

A simple object tha represents a period of time. As of version 0.2.1 a TimeSpan object can be created in 3 ways.

Calling the differenceFrom(secondDate) method on an enhanced Date object.


    var d = new TimeTraveller().now();
    var ts = d.differenceFrom(new Date());


Passing milliseconds into the constructor:

    var ts = new TimeSpan(1300);

Passing two dates into the contructor

    var ts = new TimeSpan(date, secondDate);

