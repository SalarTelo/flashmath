const questionForm = document.getElementById('question-form');
const questionElement = document.getElementById('flashmath-question');
const answerElement = document.getElementById('flashmath-answer');
const categoryElement = document.getElementById("flashmath-category");
const elOutput = document.getElementById('show-output');

function newContent(event) {
    event.preventDefault();
    let questionContent = questionElement.value;
    let answerContent = answerElement.value;
    let categoryContent = categoryElement.value;

    elOutput.textContent = "Added the new element!"


    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({question: questionContent, answer: answerContent, category: categoryContent})
        });
        return response.json();
    }

    postData('http://127.0.0.1:3000/content/')
        .then((data) => {
            console.log(data);
        });
}

questionForm.addEventListener('submit', newContent, false);