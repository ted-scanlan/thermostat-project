'use strict';

function Thermostat() {
  this._temp = 20;

};

Thermostat.prototype.currentTemperature = function() {
  return this._temp;
};
