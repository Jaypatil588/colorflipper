// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle= document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //console.log(links.classList.contains('links'));
    /*if(links.classList.contains('show-links')){
        console.log('yes')
        links.classList.remove('show-links');
    }
    else{
        console.log('no')
        links.classList.add('show-links');
    }
    */
    links.classList.toggle("show-links");
})