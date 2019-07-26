'use strict';

function Thermostat() {
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this._temp = 20;
  this.DEFAULT_TEMP = 20;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18

};

Thermostat.prototype.currentTemperature = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {

  if(this.isMaxTemp()) {

    return;
  }
  this._temp++;
};

Thermostat.prototype.down = function() {

  if(this.isMinTemp()) {
    return;
  }
  this._temp--;
};

Thermostat.prototype.isMaxTemp = function() {

  if(this.isPowerSavingModeOn() === false) {
    return (this._temp === this.MAX_TEMP_PSM_OFF);
  }
  return (this._temp === this.MAX_TEMP_PSM_ON)

};

Thermostat.prototype.isMinTemp = function() {

return (this._temp === this.MIN_TEMP);

};

Thermostat.prototype.isPowerSavingModeOn = function() {

  return (this.powerSavingMode === true);
};

Thermostat.prototype.turnPowerSavingModeOff = function() {

    this.powerSavingMode = false;
};

Thermostat.prototype.turnPowerSavingModeOn = function() {

    this.powerSavingMode = true;

    if (this.currentTemperature() > 25) {
      this._temp = this.MAX_TEMP_PSM_ON
    };
};


Thermostat.prototype.reset = function() {

  this._temp = this.DEFAULT_TEMP;

};

Thermostat.prototype.currentEnergyUsage = function() {

  if(this.currentTemperature() < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "low-usage"
  }
  if(this.currentTemperature() >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.currentTemperature() < this.MAX_TEMP_PSM_ON) {
    return "medium-usage"
  }
  return "high-usage"
};
