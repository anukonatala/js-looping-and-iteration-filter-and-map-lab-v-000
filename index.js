// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){ 
    return parseInt(driver.revenue) > parseInt(revenue)
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > parseInt(revenue)}).map(function(driver) {return driver.name});
}



function attributeFilter() {
  console.log("attributeFilter == key --" + key );
  if (driver.hasOwnProperty('key') && driver['key'] === value) {
    return driver;
  }
}

function exactMatch(drivers, {key: value}) {
  return drivers.filter(attributeFilter;
}

exactMatch(drivers, { name: 'Sally' });