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

    let borrelSpan = $("#huisch-borrel");
    // If it is the day of the huischborrel and it is past the start time, then it is time to borrel
    if (today.getDate() === nextThirdThursday.getDate() && today.getHours() >= borrelStartTijd) {
        borrelSpan.text("TIJD OM TE BORRELEN!");
    } else {
        let timeDiff = nextThirdThursday - today;
        let days = Math.floor(timeDiff/1000/60/60/24);
        let hours = Math.floor((timeDiff-days*24*60*60*1000)/1000/60/60);
        let minutes = Math.floor((timeDiff-days*24*60*60*1000-hours*60*60*1000)/1000/60);
        let seconds = Math.floor((timeDiff-days*24*60*60*1000-(hours*60*60*1000)-(minutes*60*1000))/1000);

        // Add correct single or plural time denotation
        // TODO fix that "0 dag" becomes "0 dagen". Also for seconds and minutes.
        // days = (days > 1) ? days + " dagen" : days + " dag";
        days = (days > 1) ? days + " dagen" : ((days == 0) ? days + " dagen" : days + " dag");
        // hours can already be expressed in "nog 3 uur" so no singular/plural needed
        minutes = (minutes > 1) ? minutes + " minuten" : ((minutes == 0) ? minutes + " minuten" : minutes + " minuut");
        seconds = (seconds > 1) ? seconds + " seconden" : seconds + " seconde";

        borrelSpan.text("Nog " + days + ", " + hours + " uur, " + minutes + " en " + seconds + " tot de volgende Huischborrel.");
    }
};

$(document).ready(function () {
    mainborrel();
    setInterval(mainborrel, 1000);
});