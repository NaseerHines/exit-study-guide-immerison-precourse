// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
// Be sure you understand the instructions.
// Pseudocode your logic.
// Breathe.
// You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


var pureShuffle = array => {
  let copyArray = array.slice();
  let shuffled = [];
  for (var i = copyArray.length - 1; i >= 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[r]] = [copyArray[r], copyArray[i]];
    shuffled.push(copyArray.pop());
  }
  return shuffled;
};


var dirtyShuffle = array => {
  for (var i = array.length - 1; i >= 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [array[i], array[r]] = [array[r], array[i]];
  }
  return array;
};


var isPalindrome = (string) => !string.length ? undefined : string.toLowerCase() === string.split('').reverse().join('').toLowerCase();


var mergeObjects = (...obj) => Object.assign({}, ...obj);


var semiMergeObjects = (obj, ...objs) => {
  for (let i = 0; i < objs.length; i++) {
    let currentObject = objs[i];
    _.each(currentObject, (value, key) => {
      obj[key] = currentObject[key];
    });
  }
  return obj;
};


//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
  for (let key in obj) {
    if (obj[key] === value) {
      obj[key] = newValue;
    }
    if (typeof(obj[key]) === 'object') {
      replaceValuesInObj(obj[key], value, newValue);
    }
  }
  return obj;
};


var addKeysToExistingObj = (obj, newKey, newValue) => {
  obj[newKey] = newValue;
  for (let key in obj) {
    if (obj[key] === newValue) {
      obj[key] = newValue;
    }
    if (typeof(obj[key]) === 'object') {
      addKeysToExistingObj(obj[key], newKey, newValue);
    }
  }
  return obj;
};


var map = (arr, func) => !arr.length ? [] : [func(arr[0])].concat(map(arr.slice(1), func));


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
  { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
  { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
  { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
  { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
  { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
  { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
  { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
  { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
  { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
  { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];


/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = comedians => {
  return comedians.filter(comedian => {
    if (comedian.actor.length >= 10 && comedian.begin >= 2005) {
      return comedian;
    }
  })
    .map(comedian => {
      return {
        appearanceNumber: "#" + comedian.number,
        name: comedian.actor,
        seasonsActive: comedian.end - comedian.begin + 1,
      };
    });
};
// console.log(comediansFilteredAndMapped(comedians));


var comedianNamesFilteredAndMapped = (comedians) => {
  return comedians.filter(comedian => {
    if (comedian.actor.length >= 10 && comedian.begin >= 2005) {
      return comedian;
    }
  })
  .map(comedian => {
    return comedian.actor;
  });
};
// console.log(comedianNamesFilteredAndMapped(comedians))




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
  return comedians.reduce((comediansArr, currComedian) => {
    if (currComedian.actor.length >= 10 && currComedian.begin >= 2005) {
      comediansArr.push({
        appearanceNumber: "#" + currComedian.number,
        name: currComedian.actor,
        seasonsActive: currComedian.end - currComedian.begin + 1,
      });
      return comediansArr
    }
    return comediansArr;
  }, []);
};
// console.log(comediansReduced1(comedians));

var comediansReduced2 = (comedians) => {
  return comedians.reduce((arrayOfActor, comedianObj) => {
    if (comedianObj.actor.length >= 10 && comedianObj.begin >= 2005) {
      arrayOfActor.push(comedianObj.actor);
      return arrayOfActor;
    }
    return arrayOfActor;
  }, []);
};
// console.log(comediansReduced2(comedians));


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE