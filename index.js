// Javascript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://wr7xsrh23w5a5ucf6tjxtcnhbi0iitvv.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;

}

updateCounter();