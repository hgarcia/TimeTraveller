var TimeTraveller = function() {
    
};


TimeTraveller.prototype.now = function () {
  var d = new Date();

  d.addHours = function (hoursToAdd) {
      this.setHours(this.getHours() + hoursToAdd);
      return this;
  }

  d.addDays = function (daysToAdd) {
    this.setDate(this.getDate() + daysToAdd);
    return this;
  }

  d.addMonths = function (monthsToAdd) {
      this.setMonth(this.getMonth() + monthsToAdd);
      return this;
  }

  d.addYears = function (yearsToAdd) {
      this.setFullYear(this.getFullYear() + yearsToAdd);
      return this;
  }

  return d;

};

module.exports = TimeTraveller;