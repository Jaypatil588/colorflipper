let count=0;

const value=document.getElementById('value');
const btns=document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(){
    if(btn.classList.contains('increase')){
        count++;
        
    }
    else if(btn.classList.contains('decrease')){
        count--;
        
    }
    else if(btn.classList.contains('reset')){
        count=0;
        
    }
    value.textContent=count;
    if(count>0){
        value.style.color="green";
    }
    if(count<0){
        value.style.color="red";
    }
    if(count==0){
        value.style.color="#222"
    }
    })
})