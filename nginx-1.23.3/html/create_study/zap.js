const url = "http://localhost:8000/api/applications/"

async function getResponse() {
    let response = await fetch(url, {
        mode: 'cors',
    });
    let content = await response.json()
    console.log(content)

}

getResponse()


// function getDataAndFill() {
//     let link = url;
//     fetch(link, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             //'Content-Type': 'application/json',
//             //'X-CSRFToken': getCookie('csrftoken')
//         },
//         //body: JSON.stringify({'email':this.state.email, 'password':this.state.password})
//     }).then((response) => {
//         let data = response.json();
//         return data;
//     }).then((data) => {
//         console.log(data)
//         //document.getElementById("get-response").innerText = JSON.stringify(data, null, '    ');


//         fillBlocks(data.applications);
//     }).catch((err) => {
//         console.log('Fetch Error:', err);
//     });
// }

function sendDataAndFill() {
    let data = {
        'application': {
           
            'title': document.getElementById('address').value,
            'reason': document.getElementById('address2').value,
           
            
        }
    }

    //document.getElementById("post-request").innerText = JSON.stringify(data, null, '    ');

    let link = url;
    fetch(link, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(data)
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((data) => {
        console.log(data)
        // document.getElementById("post-response").innerText = JSON.stringify(data, null, '    ');
        //getDataAndFill();

    }).catch((err) => {
        console.log('Fetch Error:', err);
    });

}

// let element_template = `<div id="article-{i}" class="article-block">
//                             <h2 id="article-title-{i}" class="article-title">{title}</h2>
//                             <p id="article-description-{i}" class="article-description">{description}</p>
//                             <details>
//                                 <summary>Ñîäåðæèìîå ñòàòüè</summary>
//                                 <div id="article-body-{i}" class="article-body">{body}</div>
//                             </details>
//                         </div>`


// function fillBlocks(applications) {
//     let main_element = document.getElementById("main")
//     let html_to_insert = "" // Переменная, для собирания всех создаваемых полей

//     let element_html = ""
//     for (let index = 0; index < applications.length; index++) {
//         const article = applications[index];

//         // приписка g означает заменить во всех местах, а не только в одном
// // подстановка в шаблон: номера(index) вместо {i} название(title) вместо {title}
//         element_html = element_template.replace(/{i}/g, index)                          // номера(index) вместо {i}
//             .replace(/{title}/, article.title)
//             .replace(/{reason}/, article.description)
//             .replace(/{details}/, article.body);


//         // посмотрим в консоли, какой текст элемента будет вставлен
//         console.log(element_html)

//        // лучше проводить вставку всех элементов разом, поэтому пока собираем их все в строковую переменную
//         html_to_insert = html_to_insert + element_html;
//     }

//     // вставляем готовые элементы
//     main_element.innerHTML = html_to_insert
// }

// выполнить действия после загрузки страницы
window.onload = function () {
    sendDataAndFill();
};



