function add_items(){
    var x = document.getElementById("initial");
    
let item = document.getElementById("text");
let list = document.getElementById("list");
if(item.value != "")
{
    let make_li = document.createElement("li");
    let text = document.createTextNode(item.value);
    make_li.appendChild(text);
    list.appendChild(make_li);
    item.value="";
   
    
    make_li.onclick = function(){
        this.parentNode.removeChild(this);
    }
    x.remove();
}
else{
    alert("Enter item to be added first !");
}


}
