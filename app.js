/*Animation from left to right*/

const observer=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));



//Animation for icon


const observer1=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show1");
        }
        else{
            entry.target.classList.remove("show1");
        }
    });
});

const hiddenElements1=document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) =>observer1.observe(el));



/*animatio for circle icom*/



const observer2=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show2");
        }
        else{
            entry.target.classList.remove("show2");
        }
    });
});

const hiddenElements2=document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) =>observer2.observe(el));


/*header*/


const togglebtn=document.querySelector('.toggle-btn')
const togglebtnicon=document.querySelector('.toggle-btn i')
const dropdownMenu=document.querySelector('.dropdown')

togglebtn.onclick=function()
{
    dropdownMenu.classList.toggle("open")
    const isopen=dropdownMenu.classList.contains("open")
    togglebtnicon.classList=isopen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}


/*chatbot*/

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


/*Counter*/


let valueDisplays=document.querySelectorAll(".achievments");
let interval=5000;
valueDisplays.forEach((valueDisplays)=>{
let startvalue=0;
let endValue=parseInt(valueDisplays.getAttribute
    ("data-Val"));
let duration=Math.floor(interval/endValue);
let counter=setInterval(function()
{
    startvalue++;
    valueDisplays.textContent=startvalue;
    if(startvalue==endValue)
    {
          clearInterval(counter);
    }
},duration );
});



/*customer reviews*/

    
var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick=function(){
    testimonials.style.transform = "translateX(870px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}

control2.onclick=function(){
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}

control3.onclick=function(){
    testimonials.style.transform = "translateX(-870px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}


