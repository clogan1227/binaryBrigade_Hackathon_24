
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
    console.log("being clicked")
}

Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
}

Next2.onclick = function(){
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
    
}

Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";
}


/*
to run the openAI implmentation in the terminal comment out lines 1-37, then use the command 'node script.js'
*/

// ---------------------------------------- OpenAI Implementation ------------------------------------------------------------ // 

require('dotenv').config(); //enables the api key to work
const openAIAPIKey = process.env.openAIAPIKey;


async function getChatGPTResponse(textInput) {
    // spread operator
    //
      
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Be the best helpful guide for choosing a college major. Be concise in your responses as the chat window is limited. Consider the user's interests, skills, career goals, favorite subjects, career aspirations, and any relevant experiences. Provide suggestions based on their input. Keep track of the user's context for better assistance. Return a short an concise answer that includes 3 majors, if there are. example: computer sci, reason: <one of inputs from the user that was the reason> .",
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `${textInput}` ,
            },
          ],
        },
      ],
    };

    // to access 'content' outside of the function you actually have to return the fetch block
    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAIAPIKey}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // console.log(data.choices[0].message)
        const {role, content} = data.choices[0].message;
        // content_ = content; 
        console.log(`this is from the function: ${content}`)
        return content;
      })
      .catch((error) => {
        console.error("Error:", error)
        return null;
      })
}

"Consider the user's interests, skills, career goals, favorite subjects, career aspirations, and any relevant experiences"

async function main(){

    const ans = await getChatGPTResponse("interested in gaming, i can code, i want to be an engineer of sort, fav subject is math and physical education, i want to build applications for people, i have html experience");    
}


main();
// getChatGPTResponse("what is today's date?");
