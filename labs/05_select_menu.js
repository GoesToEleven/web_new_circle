/**
 * Created by toddmcleod on 10/15/14.
 */

var time = performance.now();

function fillSelect(id, from, to) {
    var select = document.querySelector("#" + id);
    var html = "";
    for (var i = from; i <= to; i++) {
        html += "<option>" + i;
    }
    select.innerHTML = html;
}

function fillData() {
    fillSelect("day", 1, 31);
    fillSelect("month", 1, 12);
    fillSelect("year", 1900, 2014);
}

var duration = performance.now() - time;
console.log("Duration: " + duration)
