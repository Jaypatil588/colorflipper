const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    var randomNum= Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomNum];
})