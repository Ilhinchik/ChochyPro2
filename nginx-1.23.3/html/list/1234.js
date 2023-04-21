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
    let link = url;
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

    //  for (let i = 0; i < 3; i++) {
    //      document.getElementById("problem${i}").innerText = data.applications[i].reason;
    // }
        //document.queryselectorall('.dists').foreach((problem, index) => {
        //    problem.textcontent = data.applications[index].reason;
        

        //});
       
          document.querySelectorAll('.problems').forEach((problem, index) => {
              problem.textContent = data.applications[index].discipline;
              document.getElementById("problem1").innerText = data.applications[0].reason;
          document.getElementById("problem2").innerText = data.applications[1].reason;
        document.getElementById("problem3").innerText = data.applications[2].reason;
         });
       
        //  document.getElementById("problem1").innerText = data.applications[0].reason;
        //  document.getElementById("problem2").innerText = data.applications[1].reason;
        //document.getElementById("problem3").innerText = data.applications[2].reason;
        //document.getElementById("dist1").innerHTML = data.applications[0].title;
        //document.getElementById("dist2").innerHTML = data.applications[1].title;
        //document.getElementById("dist3").innerHTML = data.applications[2].title;

        //document.querySelectorAll('.dists').forEach((dist, index) => {
        //    dist.textContent = data.applications[index].title;
        //});
      
         //document.getElementById("dist2").innerText = data.applications[1].title;
         //document.getElementById("dist3").innerText = data.applications[2].title;


        fillBlocks(data.applications);
       // GetDataAndFill()
    }).catch((err) => {
        console.log('Fetch Error:', err);
    });
}

//function sendDataAndFill() {
//    let data = {
//        'article': {
//            'title': document.getElementById('title-field').value,
//            'reason': document.getElementById('description-field').value,
//            'details': document.getElementById('body-field').value,
//            'user_id': 1 
//        }
//    }

//    document.getElementById("post-request").innerText = data.user.money;

//    let link = url;
//    fetch(link, {
//        method: 'POST',
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json',
//            //'X-CSRFToken': getCookie('csrftoken')
//        },
//        body: JSON.stringify(data)
//    }).then((response) => {
//        let data = response.json();
//        return data;
//    }).then((data) => {
//        console.log(data)
//        document.getElementById("get-responseB").innerText = JSON.stringify(data, null, '    ');

//        getDataAndFill();
//    }).catch((err) => {
//        console.log('Fetch Error:', err);
//    });

//}

let element_template = `<div id="article-{i}" class="article-block">
                            <h2 id="article-title-{i}" class="article-title">{title}</h2>
                            <p id="article-description-{i}" class="article-description">{description}</p>
                            <details>
                                <summary>Ñîäåðæèìîå ñòàòüè</summary>
                                <div id="article-body-{i}" class="article-body">{body}</div>
                            </details>
                        </div>`


function fillBlocks(applications) {
    let main_element = document.getElementById("main")
    let html_to_insert = "" // Ïåðåìåííàÿ, äëÿ ñîáèðàíèÿ âñåõ ñîçäàâàåìûõ ïîëåé

    let element_html = ""
    for (let index = 0; index < applications.length; index++) {
        const article = applications[index];

        // ïðèïèñêà g îçíà÷àåò çàìåíèòü âî âñåõ ìåñòàõ, à íå òîëüêî â îäíîì
        // ïîäñòàíîâêà â øàáëîí:     íîìåðà(index) âìåñòî {i}   íàçâàíèå(title) âìåñòî {title} 
        element_html = element_template.replace(/{i}/g, index)                          // íîìåðà(index) âìåñòî {i} 
            .replace(/{title}/, article.title)
            .replace(/{reason}/, article.description)
            .replace(/{details}/, article.body);


        // ïîñìîòðèì â êîíñîëè, êàêîé òåêñò ýëåìåíòà áóäåò âñòàâëåí
        console.log(element_html)

        // ëó÷øå ïðîâîäèòü âñòàâêó âñåõ ýëåìåíòîâ ðàçîì, ïîýòîìó ïîêà ñîáèðàåì èõ âñå â ñòðîêîâóþ ïåðåìåííóþ
        html_to_insert = html_to_insert + element_html;
    }

    // âñòàâëÿåì ãîòîâûå ýëåìåíòû
    main_element.innerHTML = html_to_insert
}

// âûïîëíèòü äåéñòâèÿ ïîñëå çàãðóçêè ñòðàíèöû
window.onload = function () {
    getDataAndFill();
};



