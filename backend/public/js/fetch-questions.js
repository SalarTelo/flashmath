function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'http://127.0.0.1:3000/content/';
const ul = document.getElementById('questions');

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let content = data.flashmath;
        return content.map(function (content) {
            let li = createNode('li');
            li.innerHTML = content.question + " ==> " + content.answer + " ==> category ==> " + content.category;
            append(ul, li);
        })
    })
    .catch(function (error) {
        console.log(error);
    });
