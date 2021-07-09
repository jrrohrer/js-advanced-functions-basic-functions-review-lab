function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work="go to the office") {
  return `This Monday, I will ${work}.`;
}

const wrapAdjective = function(flair="*") {
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {
  add: function(a,b) { return a + b },
  subtract: function(a,b) { return a - b },
  multiply: function(a,b) { return a * b },
  divide: function(a,b) { return a / b }
};

function actionApplyer(int, arr) {
  let a = int;
  for (let i = 0; i < arr.length; i++) {
    a = arr[i](a)
  }
  return a;
}