function getThirdThursdayOfTheMonth(){
    var today = new Date();
    var thursdays = getThursdays(today.getMonth(), today);

    if(today.getTime() - thursdays[2].getTime() < 0){
        printCountdown(thursdays[2], today);
    } else {
        var array = getThursdays(today.getMonth() + 1, today);
        printCountdown(array[2], today);
    }
}

function getThursdays(month, today){
    var array = [];
    for(i=1; i<=31; i++){
        var checkDate = new Date(today.getFullYear(), month, i, 20);
        if(checkDate.getDay() == 4){
            array.push(checkDate);
        }
    }
    return array;
}

function printCountdown(nextHuisborrel, today){
    var timediff = nextHuisborrel.getTime() - today.getTime();

    var days = addLeadingZero(parseInt(timediff/1000/60/60/24));
    var hours = addLeadingZero(parseInt(timediff/1000/60/60) - days * 24);
    var minutes = addLeadingZero(parseInt(timediff/1000/60) - days * 24 * 60 - hours * 60);
    var seconds = addLeadingZero(parseInt(timediff/1000) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

    document.getElementById('day-0').innerHTML = days.charAt(0);
    document.getElementById('day-1').innerHTML = days.charAt(1);
    document.getElementById('hour-0').innerHTML = hours.charAt(0);
    document.getElementById('hour-1').innerHTML = hours.charAt(1);
    document.getElementById('minute-0').innerHTML = minutes.charAt(0);
    document.getElementById('minute-1').innerHTML = minutes.charAt(1);
    document.getElementById('second-0').innerHTML = seconds.charAt(0);
    document.getElementById('second-1').innerHTML = seconds.charAt(1);
}

function addLeadingZero(num){
    if (num < 10){
        return '0' + num;
    }
    return num.toString();
}

setInterval(function(){
    getThirdThursdayOfTheMonth();
}, 1000);