let url = "http://localhost:8000/api/applications/"
async function getResponse() {
    let response = await fetch(url, {
        mode: 'cors',
    });
    let content = await response.json()
    console.log(content)

}

getResponse()


function getDataAndFill() {
    let applicationsLink = "http://localhost:8000/api/applications/";
    let userLink = "http://localhost:8000/api/user/1";
    
    fetch(applicationsLink, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((data) => {
        console.log(data)
        document.querySelectorAll('.problems').forEach((problem, index) => {
            problem.textContent = data.applications[index].discipline;
            document.getElementById("problem1").innerText = data.applications[0].reason;
            document.getElementById("problem2").innerText = data.applications[1].reason;
            document.getElementById("problem3").innerText = data.applications[2].reason;
            document.getElementById("problem4").innerText = data.applications[3].reason;
        });
    }).catch((err) => {
        console.log('Fetch Error:', err);
    });

    fetch(userLink, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((data) => {
        console.log(data)
        document.getElementById("group1").innerText = data.user.group;
    }).catch((err) => {
        console.log('Fetch Error:', err);
    });
}

function getDataAndFill1() {
    let link = "http://localhost:8000/api/user/1";
    fetch(link, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            //'Content-Type': 'application/json',
            //'X-CSRFToken': getCookie('csrftoken')
        },
        //body: JSON.stringify({'email':this.state.email, 'password':this.state.password})
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((data) => {
        console.log(data)
        
        document.getElementById("get-responseN").innerText = data.user.first_name;
        document.getElementById("get-responseS").innerText = data.user.last_name;
        document.getElementById("get-responseG").innerText = data.user.group;
        //fillBlocks(data.applications);
    }).catch((err) => {
        console.log('Fetch Error:', err);
    });
}

window.onload = function () {
    getDataAndFill();
    getDataAndFill1();
   
};



