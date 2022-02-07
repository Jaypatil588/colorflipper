const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items= document.querySelectorAll('.deadline-format h4')

let futureDate= new Date(2022,1,8,15,00)
 
const year=futureDate.getFullYear();
const hours= futureDate.getHours();
const minutes=futureDate.getMinutes();
const date=futureDate.getDate();

const weekday=futureDate.getDay();
let day=weekdays[weekday];

let month= futureDate.getMonth();
month=months[month];

giveaway.textContent=`Interview ends on ${year} ${month} ${date}th ${day} ${hours}:00 hours `;

// Time in ms future
const futureTime=futureDate.getTime();

function calc(){

let presentTime=new Date().getTime();
let t=futureTime-presentTime;
const oneDay=24*60*60*1000;
const oneHour=60*60*1000;
const oneMin=60*1000;

let days=Math.floor(t/oneDay);
let hours=Math.floor((t%oneDay)/oneHour);
let mins=Math.floor((t%oneHour)/oneMin);
let secs=Math.floor((t%oneMin)/1000);

const values=[days,hours,mins,secs];

items.forEach(function(item,index){
  item.innerHTML=values[index];

})
if(t<0){
  giveaway.innerHTML='Yay! Its over!'
  values=[0,0,0,0];
}
}

const countdown= setInterval(calc,1000);
calc();