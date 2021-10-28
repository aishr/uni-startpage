
<script setup lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { data } from 'jquery';
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
  
    function makeTwoDigits(standIn:number) {
        let standInStr:string = standIn.toString();
        if (standIn < 10) {
            standInStr = '0' + standInStr;
        }
        return standInStr;
    }
    function twelveHourTime(input:string) {
        let inputNum:number = parseInt(input);
        if (inputNum > 12) {
            inputNum = inputNum - 12
        }
        return inputNum.toString();
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

    let daymonth = document.getElementById('daymonth');
    if (daymonth != null){
        daymonth.innerHTML = months[month] + " " + day + ", ";
    }
    let finalYear = document.getElementById('year');
    if (finalYear != null) {
        finalYear.innerHTML = year.toString();
    }
}
setInterval(getDate, 1000);
</script>

<template>
    <time class="clock"></time>
    <div class="box">
      <div class="date">
        <div id="daymonth"></div>
        <div id="year"></div>
      </div>
    </div>
</template>

<style lang="scss">
.clock {
  font-size:33px;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  position: absolute;
  bottom: 12px;
  letter-spacing: 6px;
  text-shadow: 4px 4px 5px gray;
}

.box {
  border-radius:5px;
  display:inline-block;
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 12px;
    .date {
        #daymonth {
            color:rgba(255, 255, 255, 0.5);
            font-size:30px;
            padding:10px 0;
            display: inline-block;
            text-shadow: 4px 4px 5px gray;
        }
        #year {
            color:rgba(255, 255, 255, 0.5);
            font-size:30px;
            display:inline-block;
            text-shadow: 4px 4px 5px gray;
        }
    }
}

</style>