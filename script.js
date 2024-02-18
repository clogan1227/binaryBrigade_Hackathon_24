const { Configuration, OpenAIApi } = require('openai');
const openaiKey = process.env.openAIAPIKey;
const config = new Configuration({
    apiKey: openaiKey
});
require("dotenv").config(); //for the .env file

const openai = new OpenAIApi(config);
const runPrompt = async () => {
    const prompt = `what is 2+2?`;

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1
    });

    console.log(response.data);
}
runPrompt();



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

//---------------------------- API stuff ---------------------------------------

// // Function to send data to the API
// function sendData(data) {
//     // Replace 'your-api-endpoint' with the actual API endpoint
//     fetch('your-api-endpoint', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         // Optionally, you can display a success message to the user
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         // Optionally, you can display an error message to the user
//     });
// }


// document.getElementById('container').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const data = {
//         Form1: {
//             careerAspirations: document.getElementById('skills').value,
//             academicStrengths: document.getElementById('hobbies').value,
//             personalGoals: document.getElementById('courses-liked').value
//         },
//         Form2: {
//             careerAspirations: document.getElementById('scenerary').value,
//             academicStrengths: document.getElementById('job-type').value,
//             personalGoals: document.getElementById('environment-preference').value
//         },
//         Form3: {
//             careerAspirations: document.getElementById('career-aspirations').value,
//             academicStrengths: document.getElementById('academic-strengths').value,
//             personalGoals: document.getElementById('personal-goals').value
//         }
//     };

//     sendData(data);
// });




