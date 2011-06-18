var TimeTraveller = function() {
    
};


TimeTraveller.prototype.now = function () {
  var d = new Date();

  d.addDays = function (daysToAdd) {
    this.setDate(this.getDate() + daysToAdd);
    return this;
  }

  d.addMonths = function (monthsToAdd) {
      this.setMonth(this.getMonth() + monthsToAdd);
      return this;
  }

  return d;

};

module.exports = TimeTraveller;