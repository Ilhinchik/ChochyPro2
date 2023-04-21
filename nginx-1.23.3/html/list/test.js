const url = "http://localhost:8000/api/application/1"

async function getData() {
    let response = await fetch(url, {
        mode: 'cors',
    });
    let data = await response.json();
    console.log (data);
}

async function sendData(data) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

function fillCardByClass(data) {
        /*document.querySelectorAll('.problems').forEach((problem, index) => {
            problem.textContent = data[index].description;
        });*/
    let problemsData = data.application.reason;// он берет как массив или?

    //for (let i = 0; i < 2; i++) { // как вообще заполнить 
    //    let nameElem = document.getElementsByClassName("problems")[i];
    //    nameElem.innerText = problemsData[i];
    //}
    let nameElem = document.getElementsByClassName("problems")[0];
    nameElem.innerText = problemsData;
}

window.onload = async function () {
    let data = {
        'article': {
            'title': document.getElementById('title-field').value,
            'reason': document.getElementById('description-field').value,
            'details': document.getElementById('body-field').value,
            'user_id': 1
        }
    };

    try {
        await sendData(data);
        let response = await getData();
        fillCardByClass(response.application);// что тут в параметрах 
    } catch (error) {
        console.log('Fetch Error:', error);
    }
};
