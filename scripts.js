$(document).ready(function(){
	$("ul.osx-dock li").each(function (type) {
		$(this).hover(function () {
			$(this).prev("li").addClass("nearby");
			$(this).next("li").addClass("nearby");
		},
			function () {
				$(this).prev("li").removeClass("nearby");
				$(this).next("li").removeClass("nearby");
			});
	});
});
		
$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#search_submit').click();
    });
});

window.onkeydown = function (e) {
    e = e || window.event || {};
    var charCode = e.charCode || e.keyCode || e.which;
    if(charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57) {
            $('#search').focus();
    }
}

var config = {
    links: [
        {key: "marks", url: "https://docs.google.com/spreadsheets/d/1xVwISSWXJJKRenIa2uEx2CcAih7aZF1dAVuTif9UvTs/edit?usp=sharing"},
        {key: "309", url: "http://www.cs.toronto.edu/~arnold/309/19s/"},
        {key: "309db", url: "https://mcs.utm.utoronto.ca/~mybb/utmcs2/forumdisplay.php?fid=63"},
        {key: "363", url: "http://www.vincentmaccio.com/csc363_2019/"},
        {key: "490", url: "https://q.utoronto.ca/courses/70067"},
        {key: "490s", url: "https://csc490-w19.slack.com/"},
        {key: "492", url: "https://utmpeople.slack.com/"},
        {key: "301", url: "https://mcs.utm.utoronto.ca/~301/"},
        {key: "258", url: "http://www.cs.toronto.edu/~ylzhang/csc258/"},
        {key: "258m", url: "https://mcsmark.utm.utoronto.ca/csc258s19/"},
        {key: "258db", url: "https://mcs.utm.utoronto.ca/~mybb/utmcs2/forumdisplay.php?fid=32"},
        {key: "258s", url: "https://csc258h5s19.slack.com/"},
        {key: "358", url: "http://www.cs.toronto.edu/~ylzhang/csc358/"},
        {key: "358m", url: "https://mcsmark.utm.utoronto.ca/csc358s19/"},
        {key: "358db", url: "https://mcs.utm.utoronto.ca/~mybb/utmcs2/forumdisplay.php?fid=33"},
        {key: "358s", url: "https://358w19.slack.com/"},
        {key: "224", url: "https://q.utoronto.ca/courses/84106"}
 ],
    dock: [
        {key: "fb", url: "https://www.facebook.com/"},
        {key: "m", url: "https://www.messenger.com"},
        {key: "wa", url: "https://web.whatsapp.com/"},
        {key: "i", url: "https://www.instagram.com/"},
        {key: "yt", url: "https://www.youtube.com/", search: "results?search_query="},
        {key: "t", url: "https://www.tumblr.com/"},
        {key: "li", url: "https://www.linkedin.com/"},
        {key: "gh", url: "https://github.com/", search: "search?q="},
        {key: "tpu", url: "https://travis-ci.org/", search: "search/"},
        {key: "tpr", url: "https://travis-ci.com/", search: "search/"},
        {key: "gd", url: "https://drive.google.com/", search: "drive/search?q="},
        {key: "gm", url: "https://mail.google.com/", search: "mail/u/0/#search/"},
        {key: "tt", url: "https://www.twitter.com/"},
        {key: "s", url: "https://play.spotify.com/"},
        {key: "bb", url: "https://portal.utoronto.ca/"},
        {key: "ol", url: "https://www.overleaf.com/"},
        {key: "a", url: "https://acorn.utoronto.ca/"},
        {key: "utm", url: "https://mail.utoronto.ca/"},
        {key: "utt", url: "https://student.utm.utoronto.ca/timetable/"},
        {key: "pi", url: "https://piazza.com/"},
    ],
    extras: {
        urlRegex: /^(?:(http|https)?:\/\/)?(?:[\w-]+\.)+([a-z]|[A-Z]|[0-9]){2,6}/i,
        protocolRegex: /^[a-zA-Z]+:\/\//i
    }
};
function get_url()
{
    var input = document.getElementById("search").value;
    if (input.match(config.extras.urlRegex)){
        return input.match(config.extras.protocolRegex) ? input : "http://" + input;
    }
    var test = goThroughOptions(input, config.links);
    if (test != false) return test;
    var test = goThroughOptions(input, config.dock);
    if (test != false) return test;
    return "https://google.com/search?q=" + encodeURIComponent(input);
}

function goThroughOptions(input, lst){
    var split = input.split(":")
    for (var i = 0; i < lst.length; i++){
        if (split[0] != input && split[0] === lst[i].key){
            return lst[i].url + lst[i].search + encodeURIComponent(split[1])
        }
        if (input === lst[i].key){
            return lst[i].url;
        }
    }
    return false;
}

function clock() {// We create a new Date object and assign it to a variable called "time".
    var daysOfTheWeek = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"
    }

    var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    
    seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = twelveHourTime(makeTwoDigits(hours)) + ":" + makeTwoDigits(minutes) + ":" + makeTwoDigits(seconds);
  
    function makeTwoDigits(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
    function twelveHourTime(input) {
        if (input > 12) {
            input = input - 12
        }
        return input;
    }
}
setInterval(clock, 1000);

function getDate()
{
    var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    document.getElementById('daymonth').innerHTML = months[month] + " " + day + ",";
    document.getElementById('year').innerHTML = year;
}
setInterval(getDate, 1000);
