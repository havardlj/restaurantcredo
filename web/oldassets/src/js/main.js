var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);

var $deactiveTransitions = document.querySelectorAll('.deactive-transition');

[].forEach.call($deactiveTransitions, function(el) {
  el.classList.remove('deactive-transition');
});
