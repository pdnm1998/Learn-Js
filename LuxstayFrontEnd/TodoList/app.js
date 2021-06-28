let $lists = document.getElementsByTagName("li")
let $fm = document.getElementById("fm")
let $ulTodo = document.getElementById("ulTodo")
let $btnDel = document.getElementsByClassName("del")
    //Luu du dieu vao tong arr

// them su kien click vao li co san 
for (let i = 0; i < $btnDel.length; i++) {
    $btnDel[i].addEventListener("click", function(e) {
        e.target.parentNode.remove();
    })
}
$fm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Truy cap toi input co name la dl
        if ($fm.dl.value.trim() === "") {
            return;
        }
        // khoi tao the <li>
        let $li = document.createElement('li')
            // them text vao the <li>
        $li.innerText = fm.dl.value.trim();
        let $btn = document.createElement("button")
        $btn.classList.add("del")
        $btn.innerText = "x"
            // them su kien click vao li moi tao ra
        $btn.addEventListener("click", function(e) {
                e.target.parentNode.remove();
            })
            // them the button vao cuoi li
        $li.appendChild($btn)
            // them the li vao cuoi ul#ulTodo
        ulTodo.appendChild($li);
        $fm.dl.value = ""
    })
    // async function fetchData() {
    //     let res = await fetch("https://news-ncov-api.herokuapp.com/news?_page=1")
    //     let data = await res.json();
    //     console.log(data);
    //     let html = "";
    //     data.forEach(e => {
    //         html += `<tr>${e.title}</tr>`
    //     });
    //     console.log(html);
    //     $ulTodo.innerHTML = html;
    // }

// fetchData()