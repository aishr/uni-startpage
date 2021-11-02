<script setup lang="ts">
import $ from 'jquery';
$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#search_submit').click();
    });
});

var config = {
    links: [
        {key: "marks", url: "https://docs.google.com/spreadsheets/d/1xVwISSWXJJKRenIa2uEx2CcAih7aZF1dAVuTif9UvTs/edit?usp=sharing"},
        {key: "463", url: "https://www.student.cs.uwaterloo.ca/~se463/"},
        {key: "463cw", url: "https://campuswire.com/c/G6A5F90C2/"},
        {key: "463pi", url: "https://piazza.com/class/k9ta27cqmme6dn"}
 ],
    dock: [
        {key: "fb", url: "https://www.facebook.com/"},
        {key: "m", url: "https://www.messenger.com"},
        {key: "wa", url: "https://web.whatsapp.com/"},
        {key: "i", url: "https://www.instagram.com/"},
        {key: "yt", url: "https://www.youtube.com/", search: "results?search_query="},
        {key: "pl", url: "https://app.plex.tv", search: "#!/search?query="},
        {key: "dh", url: "https://hub.docker.com", search: "/search?q="},
        {key: "t", url: "https://www.tumblr.com/"},
        {key: "li", url: "https://www.linkedin.com/"},
        {key: "gh", url: "https://github.com/", search: "search?q="},
        {key: "tci", url: "https://travis-ci.com/", search: "search/"},
        {key: "gd", url: "https://drive.google.com/", search: "drive/search?q="},
        {key: "gm", url: "https://mail.google.com/", search: "mail/u/0/#search/"},
        {key: "gc", url: "https://calendar.google.com/"},
        {key: "an", url: "https://notebooks.azure.com/"},
        {key: "tt", url: "https://www.twitter.com/"},
        {key: "s", url: "https://play.spotify.com/"},
        {key: "q", url: "https://quest.pecs.uwaterloo.ca/psp/SS/ACADEMIC/SA/?cmd=login"},
        {key: "ol", url: "https://www.overleaf.com/"},
        {key: "a", url: "https://acorn.utoronto.ca/"},
        {key: "utm", url: "https://mail.utoronto.ca/"},
        {key: "uwm", url: "https://connect.uwaterloo.ca/"},
        {key: "pi", url: "https://piazza.com/"},
        {key: "atp", url: "https://portal.accommod8u.com/tp_acc/Login.php"},
        {key: "aws", url: "https://console.aws.amazon.com/console/home"},
        {key: "l", url: "https://learn.uwaterloo.ca"}
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

</script>

<template>
    <div class="wrap">
      <form onsubmit="window.location.href = get_url(); return false;" autocomplete="on">
        <input ref="search" id="search" v-model="search" name="search" type="text" placeholder="Search Here!"/>
        <input id="search_submit" value="Search" type="search">
        <input id="submit" value="Submit" type="submit">
      </form>
    </div>
</template>

<style lang="scss">
.wrap {
        position: absolute;
        right: 10px;
        top: 10px;
}
input[type="text"] {
        height: 60px;
        font-size: 35px;
        display: inline-block;
        font-family: "Lato";
        font-weight: 50;
        border: none;
        outline: none;
        color: #FFF;
        padding: 3px;
        padding-right: 60px;
        width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        z-index: 3;
        transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
        cursor: pointer;
        &:focus {
        width: 400px;
        z-index: 1;
        border-bottom: 1px solid #FFF;
        cursor: text;
          &:hover {
        border-bottom: 1px solid #FFF;

          }
        }
}

input[type="search"] {
        height: 67px;
        width: 63px;
        display: inline-block;
        color:red;
        float: right;
        background: url(/src/assets/search.png) center center no-repeat;
        background-size: 80% auto;
        text-indent: -10000px;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        opacity: 0.4;
        cursor: pointer;
        transition: opacity .4s ease;
        &:hover {
          opacity: 0.8;
        }
}

input[type="submit"] {
        height: 67px;
        width: 63px;
        display: inline-block;
        color:red;
        float: right;
        background: url(/src/assets/arrow.png) center center no-repeat;
        background-size: 80% auto;
        text-indent: -10000px;
        border: none;
        position: absolute;
        top: 0;
        right: 467px;
        z-index: 2;
        cursor: pointer;
        opacity: 0.4;
        cursor: pointer;
        transition: opacity .4s ease;
        &:hover {
          opacity: 0.8;
        }
}
</style>