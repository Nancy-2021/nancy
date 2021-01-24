/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const newSection=document.querySelectorAll("Section");
const ul=document.getElementById("navbar__list");
const fragment=document.createDocumentFragment();

newSection.forEach(section=>{
    const att=section.getAttribute("data-nav"); 
   const newli=document.createElement("li");
   newli.addEventListener('click',()=>{
       section.scrollIntoView({'behavior':"smooth"});
       fragment.appendChild(newli);
   })

   newli.textContent=att;
 ul.appendChild(fragment);
 
});
