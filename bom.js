const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function(){
    if (input != '') {
        li = document.createElement("li");
        del = document.createElement("button");

        li.innerText = input;
        del.textContent = "❌";

        list.append(li, del);
        
        del.addEventListener("click", function(){
            li.remove();
            del.remove();
        });
    }
});