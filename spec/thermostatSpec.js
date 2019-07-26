'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('can increase the temperature', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('should have a min temp of 10 degrees', function() {

    for(var i=0; i< 11; i++){
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10)

  });

  it('knows if power saving mode is on', function() {

    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can turn power saving mode off', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);

  });

  it('can turn power saving mode on', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('should set max temp at 25 degress if power saving in on', function() {

    for(var i=0; i< 6; i++){
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('should set max temp at 32 degrees if power saving is off', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);

    for(var i=0; i< 13; i++){
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(32);


  });

  it('can reset the temp to 20 degress', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20)
  });

  describe('give energy usage', function() {

    it('should state low-usage if temp is lower than 18 degrees', function() {
      for(var i=0; i< 3; i++){
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
    });

    it('should state medium-usage if temp is lower than 25 degrees', function() {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
    });

    it('should state high-usage if temp is equal or higher than 25 degrees', function() {

      for(var i=0; i< 6; i++){
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
    });


});
});
