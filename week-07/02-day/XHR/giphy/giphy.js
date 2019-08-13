"use strict";
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let parsedResult = JSON.parse(xhr.responseText);
      parsedResult.data.forEach(data => {
        //   console.log(data);
        let giph = document.createElement("img");
        giph.setAttribute("src", data.images.downsized_still.url);
        document.body.appendChild(giph);
      });
      let giphs = document.querySelectorAll("img");
      for (let i=0; i<giphs.length; i++) {
          giphs[i].addEventListener("click", ()=>{
              giphs[i].setAttribute('src', parsedResult.data[i].images.downsized.url)
          })
      }
    } else {
      console.log("Something went wrong");
    }
  }
};
xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?api_key=hHDvkAiwNdvr6PbXtUTo1DbCJTiGcbAd&q=dog&limit=25&offset=0&rating=G&lang=en"
);
xhr.send();

console.log("request has been sent");
