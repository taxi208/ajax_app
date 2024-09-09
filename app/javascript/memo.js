const buildHTML = (XHR) => {
  // console.log("ok")
  const item = XHR.response.post;
  const html = `
  <div class="post">
  <div class="post-date">
  投稿日時：${item.created_at}
  </div>
  <div class="post-content">
  ${item.content}
  </div>
  </div>`;
  return html;
};

function post (){
  console.log("ok")
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(form)
    // console.log(formDate)
    const XHR = new XMLHttpRequest();
    // console.assertlog(formData)
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
     formText.value = "";
      }; 
  });
 };
 
 window.addEventListener('turbo:load', post);