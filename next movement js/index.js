const imageFolder = "./images/";
const images =["charlie.jpg", "christopher.jpg" ,"lady.png"]

const reviews =[{
    id:1,
    name:"Christopher",
    job:"UI/UX Designer",
    description:"I am a UI/UX Designer ,that speacilizes in delivering nice interface. ",

},
{
    id:2,
    name:"Charlie",
    job:"Web Developer",
    description:"I am a web developer with experience in html, CSS and Javascript."
},
{
    id:3,
    name:"lady Margret",
    job:"Data Analyst",
    description:"I am a data Analyst that analysis the data of the data."
}
]

let currentItem = 0;

const names = document.getElementById("named");
const jobs = document.getElementById("jobs");
const descri = document.getElementById("descri");
const prevBtn= document.getElementById("prev");
const nextBtn = document.getElementById("next");
const random = document.getElementById("btns-btn");
//add event listner to the buttons

window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem)
})

function showPerson(person){
    const item =reviews[person];
    names.textContent = item.name;
    jobs.textContent = item.job;
    descri.textContent = item.description;
}

//nextBtn

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
})

// prevbTN
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem)
})


// random
random.addEventListener("click", function(){

   currentItem = Math.floor(Math.random() * reviews.length)

   console.log(currentItem);
   
   showPerson(currentItem);


})