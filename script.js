
// TOOK OUT THE API KEY for now 

async function getChatGPTResponse(textInput) {
    // spread operator
    // 
      
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Be a helpful assistant for time management, productivty, and relaed topics. Be relatively concise in your answers as the window you are chatting in is small. Make sure to look at the users SCHEDULE CONTEXT for data on how to help them. Scheduled events are structured like { title: 'name of event', start: starting timestamp, end: ending timestamp}",
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
    }
    fetch("https://api.openai.com/v1/chat/completions", {
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
        console.log(data.choices[0].message)
        
      })
      .catch((error) => {
        console.error("Error:", error)
        return null;
      })
  }




getChatGPTResponse("what is today's date?")









// console.log(openaiKey);


// var Form1 = document.getElementById("Form1");
// var Form2 = document.getElementById("Form2");
// var Form3 = document.getElementById("Form3");


// var Next1 = document.getElementById("Next1");
// var Next2 = document.getElementById("Next2");
// var Back1 = document.getElementById("Back1");
// var Back2 = document.getElementById("Back2");

// var progress = document.getElementById("progress");

// Next1.onclick = function(){
//     Form1.style.left = "-450px";
//     Form2.style.left = "40px";
//     progress.style.width = "240px";
// }

// Back1.onclick = function(){
//     Form1.style.left = "40px";
//     Form2.style.left = "450px";
//     progress.style.width = "120px";
// }

// Next2.onclick = function(){
//     Form2.style.left = "-450px";
//     Form3.style.left = "40px";
//     progress.style.width = "360px";
    
// }

// Back2.onclick = function(){
//     Form2.style.left = "40px";
//     Form3.style.left = "450px";
//     progress.style.width = "240px";
// }

// // ---------------------------- API stuff ---------------------------------------

// // Function to send data to the API
// // ... your existing code ...

// // This function makes a call to the OpenAI API
// async function getMajor(skills, hobbies, coursesLiked, scenery, jobType, studyEnvironment, careerAspirations, academicStrengths, personalGoals) {
//     var data = JSON.stringify({
//         'prompt': `The user has the following skills: ${skills}, hobbies: ${hobbies}, and likes these courses: ${coursesLiked}. They prefer ${scenery}, ${jobType}, and ${studyEnvironment}. Their career aspirations are ${careerAspirations}, and they are strong in ${academicStrengths}. Their personal goals are ${personalGoals}. What major should they pursue?`,
//         'max_tokens': 60
//     });

//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     xhr.addEventListener("readystatechange", function() {
//         if (this.readyState === this.DONE) {
//             console.log(this.responseText);
//         }
//     });

//     xhr.open("POST", "https://api.openai.com/v1/engines/davinci-codex/completions");
//     xhr.setRequestHeader("content-type", "application/json");
//     xhr.setRequestHeader("authorization", "Bearer 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");

//     xhr.send(data);
// }

// Form3.onsubmit = function(e){
//     e.preventDefault();
//     // Get the values from the form
//     var skills = document.getElementById("skills").value;
//     var hobbies = document.getElementById("hobbies").value;
//     var coursesLiked = document.getElementById("courses-liked").value;
//     var scenery = document.getElementById("scenerary").value;
//     var jobType = document.getElementById("job-type").value;
//     var studyEnvironment = document.getElementById("environment-preference").value;
//     var careerAspirations = document.getElementById("career-aspirations").value;
//     var academicStrengths = document.getElementById("academic-strengths").value;
//     var personalGoals = document.getElementById("personal-goals").value;

//     // Call the function to get the major
//     getMajor(skills, hobbies, coursesLiked, scenery, jobType, studyEnvironment, careerAspirations, academicStrengths, personalGoals);
// }



