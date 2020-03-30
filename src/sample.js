const returnVars = (...theArgs) => theArgs;

let myVariable = 'This is my variable';
myVariable = 'This is no longer my variable';
returnVars(myVariable);

// eval('alert("we should not be doing evals!!!")');

// Many lines above this comment

function MyFunction(param) {
  let uselessVar;
  let anotherVar;
  returnVars(uselessVar, anotherVar);
  if (param === 'yay') {
    returnVars('I said yay!');
  } else if (param === 'boo') returnVars('I said boo!');
  else {
    returnVars('well then');
  }
}

MyFunction();

const MyOtherFunction = (param1, param2) => {
  return `'boo!' ${param1} ${param2}`;
};
MyOtherFunction('me', 'you');

const myJSON = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
  key5: [
    'one',
    'two',
    'three',
    [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
    ],
  ],
};
returnVars(myJSON);
// console.log(myJSON);
