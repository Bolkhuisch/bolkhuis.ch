/**
 * File: huischborrel.js
 * Author: Aron Hoogeveen
 * Date: 2020-06-17
 * Copyright: boeie Ruurd
 * Opmerkingen:
 *  De derde-donderdag-van-de-maand-berekening is gedeeltelijk van StackOverflow
 *  gehaald.
 */

let borrelStartTijd = 20; // 20:00 uur

let nthWeekDayOfMonth = function (weekday, n, date) {
    let newDate = new Date(date.getFullYear(), date.getMonth(), 1),
        add = (weekday - newDate.getDay() + 7) % 7 + (n - 1) * 7;
    newDate.setDate(1 + add);
    return newDate;
};

let mainborrel = function () {
    let today = new Date();
    let nextThirdThursday = nthWeekDayOfMonth(4, 3, today);

    if (nextThirdThursday.getDate() < today.getDate()) {
        // Get third Thursday of the next month
        let nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

        nextThirdThursday = nthWeekDayOfMonth(4, 3, nextMonth);
    }

    // Set the start time of the borrel
    nextThirdThursday = new Date(nextThirdThursday.setHours(borrelStartTijd));


    // If it is the day of the huischborrel and it is past the start time, then it is time to borrel
    if (today.getDate() === nextThirdThursday.getDate() && today.getHours() >= borrelStartTijd) {
        // hide the numbers
        $("span.number").css("display", "none");
        $("span.text").css("display", "none");

        // make borrel-tijd visible
        $("#borrel-tijd").css("display", "block");
    } else {
        let timeDiff = nextThirdThursday - today;
        let days = Math.floor(timeDiff/1000/60/60/24);
        let hours = Math.floor((timeDiff-days*24*60*60*1000)/1000/60/60);
        let minutes = Math.floor((timeDiff-days*24*60*60*1000-hours*60*60*1000)/1000/60);
        let seconds = Math.floor((timeDiff-days*24*60*60*1000-(hours*60*60*1000)-(minutes*60*1000))/1000);

        // split the days, hours, and minutes into two numbers
        days = (days < 10) ? "0" + days : "" + days;
        hours = (hours < 10) ? "0" + hours : "" + hours;
        minutes = (minutes < 10) ? "0" + minutes : "" + minutes;
        seconds = (seconds < 10) ? "0" + seconds : "" + seconds;

        $("#day-0").text(days.charAt(0));
        $("#day-1").text(days.charAt(1));
        $("#hour-0").text(hours.charAt(0));
        $("#hour-1").text(hours.charAt(1));
        $("#minute-0").text(minutes.charAt(0));
        $("#minute-1").text(minutes.charAt(1));
        $("#second-0").text(seconds.charAt(0));
        $("#second-1").text(seconds.charAt(1));
    }
};

$(document).ready(function () {
    mainborrel();
    setInterval(mainborrel, 1000);
});