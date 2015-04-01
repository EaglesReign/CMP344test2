//Phil Hofer
//CMP344 Exam 2 Practicum
//4/1/15
//array.js

//Problem 1 under Javascript 101
//This program will print 20 numbers between 10 and 200.

function array() {
  var arr = [];
  var min = 10;
  var max = 200;
  for (var i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * max + min);
    print(arr[i]);
  }
}

array();
