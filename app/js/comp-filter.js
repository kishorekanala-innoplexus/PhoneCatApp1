
'use strict';

angular.
  module('compfilter').
  filter('selectedPhones', function($filter) {
  return function(phones) {
    var i, len;

    var checkedPhones = $filter('filter')(phones, {checked: true});

    if(checkedPhones===undefined || checkedPhones.length === 0) {
      return phones;
    }

    
    var comps = [];
    for(i = 0, len = checkedPhones.length; i < len; ++i) {

    
      if(!comps.hasOwnProperty(checkedPhones[i].company)) {
        comps[checkedPhones[i].company] = true;
      }
    }
   
    var ret = [];
    for(i = 0, len = phones.length; i < len; ++i) {
     
      if(comps[phones[i].company]) {
        ret.push(phones[i]);
      }
    }

    
    return ret;
  };
});
