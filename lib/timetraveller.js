var TimeTraveller = function() {
    
};


TimeTraveller.prototype.now = function () {
  var d = new Date();

  d.addDays = function (daysToAdd){
    this.setDate(this.getDate() + daysToAdd);
    return this;
  }
  return d;

};

module.exports = TimeTraveller;