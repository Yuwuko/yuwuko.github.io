$.getJSON('https://www.nooksworkbench.com/api/guilds', function(data) {
    $("#guilds").html(commafy(data[0].guildCount));
});
$.getJSON('https://www.nooksworkbench.com/api/events', function(data) {
    $("#events").html(commafy(data[0].messageEvents));
});
$.getJSON('https://www.nooksworkbench.com/api/uptime', function(data) {
    $("#uptime").html(msToTime(data[0].uptime));
});

// Found on SO (shock), modified for my needs.
function msToTime (ms) {
    var seconds = (ms/1000);
    var minutes = parseInt(seconds/60, 10);
    var hours = parseInt(minutes/60, 10);
    minutes = minutes%60;
    var days = parseInt(hours/24, 10);
    hours = hours%24;

    return days + " day" + (days>1?"s":"") + ", " + hours + " hour" + (hours>1?"s":"") + ", and " + minutes + " minute" + (minutes>1?"s":"") +".";
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript?page=2&tab=active#tab-top
function commafy(num){
    var parts = (''+(num<0?-num:num)).split("."), s=parts[0], L, i=L= s.length, o='';
    while(i--){ o = (i===0?'':((L-i)%3?'':','))
        +s.charAt(i) +o }
    return (num<0?'-':'') + o + (parts[1] ? '.' + parts[1] : '');
}