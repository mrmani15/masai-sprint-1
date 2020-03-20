var add = document.getElementById('add-btn');
add.addEventListener("click", addingItem);
var del = document.getElementById('list');
del.addEventListener("click", removeItem);

function addingItem(e){
  e.preventDefault();
  var item = document.getElementById('input-field').value;
  if(!item){
    alert("Please Add item");
    return
  }
  var newItem = document.createElement("li");
  var btn1 = document.getElementsByClassName("del");
  var btn = document.createElement("button");
  btn.className = "del";
  btn.type = "submit"
  btn.appendChild(document.createTextNode("X"))
  newItem.appendChild(document.createTextNode(item));
  newItem.appendChild(btn);
  var ul = document.getElementById('list');
  ul.appendChild(newItem)
}

function removeItem(e){
  if(e.target.classList.contains("del")){
    if(confirm("Are You Sure?")){
      var li = e.target.parentElement;
      del.removeChild(li);
    }
  }
}
