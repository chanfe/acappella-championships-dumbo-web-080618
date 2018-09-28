const URL = "http://localhost:3000/a_cappella_groups"
document.addEventListener("DOMContentLoaded",function(){
  let table_body = document.querySelector("#table-body")
  get(URL).then(res => {
    res.forEach(function(list){
      table_body.append(renderTableList(list))
    })
  })
})

function renderTableList(data){
  let newThead = document.createElement("tr")
  newThead.className += "padding";
  newThead.innerHTML = renderTable(data)

  let winner_btn = newThead.querySelector("button")
  winner_btn.addEventListener("click", function(){
    let winner = document.querySelector("#winner")
    winner.innerHTML = `Winner: ${data.college.name} ${data.name}`
    newThead.parentElement.removeChild(newThead)
  })

  return newThead
}

function renderTable(data){
  return `
  <td>${data.college.name}</td>
  <td>${data.name}</td>
  <td>${data.membership}</td>
  <td>${data.college.division}</td>
  <td><button><img src="./assets/trophy.png" data-id='${data.id}'></button></td>
  `
}

function get(path){
  return fetch(path).then(res => res.json())
}
