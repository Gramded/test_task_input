async function getFromServer() {
    let flag = event.target.id;
    let check = document.getElementById('reg-filter').checked;
    let data = await fetch("http://localhost:63342/test_task_input/test.json", {method: "GET"});
    let result = await data.json();
    let input = document.getElementById('input').value;
    document.getElementById('place').innerText = '';
    sort(result.data, input, flag, check)

}


function sort (mass, input, flag, check) {
    if (flag == "num") {
        mass.forEach((el) => {
        if (el.length <= input) {
            let doc = document.createElement('p');
            doc.innerText = el;
            document.getElementById('place').append(doc);
            console.log(el.length, el)
        }
    })
    } else if (flag == 'text') {
        let regEx = new RegExp(`${input}`, `${check == false ? 'i' : ''}g`)
        mass.forEach((el) => {
            let res = el.match(regEx);
            if (res !== null) {
                let doc = document.createElement('p');
                doc.innerText = el;
                document.getElementById('place').append(doc);
                alert(res);
            }
        })
    }
}

