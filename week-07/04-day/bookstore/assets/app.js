"use strict";

const xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let parsedResult = JSON.parse(xhr.responseText);
        let table = document.createElement("table");
        document.querySelector("main").appendChild(table);
        parsedResult.forEach(item => {
          let tr = document.createElement("tr");
          table.appendChild(tr);
          let td = document.createElement("td");
          td.textContent = item.book_name;
          tr.appendChild(td);
          let td1 = document.createElement("td");
          td1.textContent = item.aut_name;
          tr.appendChild(td1);
          let td2 = document.createElement("td");
          td2.textContent = item.cate_descript;
          tr.appendChild(td2);
          let td3 = document.createElement("td");
          td3.textContent = item.pub_name;
          tr.appendChild(td3);
          let td4 = document.createElement("td");
          td4.textContent = item.book_price;
          tr.appendChild(td4);
        });
    } else {
      console.log("Something went wrong with the xmlhttprequest");
    }
  }
};
xhr.open("GET", "http://localhost:5000/books");
xhr.send();

console.log("request has been sent");
