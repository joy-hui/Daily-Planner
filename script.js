var containerEl = $("#container");
var savebuttonEl = $(".saveBtn");
//var currenthourEl = moment().format("LT").substring(0, 2);
var currenthourEl = moment().hours();
//var currenthourEl=11;
//var hourBlock=;
console.log(currenthourEl);
// var check=$(".hour").text();
// console.log(check);
var currentdayEl = moment().format("llll");
$("#currentDay").text(currentdayEl);
//console.log(currentdayEl);

//case 9
// $("#9").addClass("present");
// $("#10").addClass("present");
var currenthourArry = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//currenthourArry[i];
for (var i = 0; i < 9; i++) {
  var ct = currenthourArry[i];
  if (ct < currenthourEl) {
    //$(this).addClass("past");
    //console.log(currenthourArry[i]);
    var t = document.getElementById(ct);
    // t.style.backgroundColor='gray';
    t.setAttribute("class", "past");
  }
  if (ct == currenthourEl) {
    //$(this).addClass("present");
    var t = document.getElementById(ct);
    //t.style.backgroundColor='blue';
    t.setAttribute("class", "present");
  }
  if (currenthourArry[i] > currenthourEl) {
    // $(this).addClass("future");
    var t = document.getElementById(ct);
    //t.style.backgroundColor='pink';
    t.setAttribute("class", "future");
  }
}