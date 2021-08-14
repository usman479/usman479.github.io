function add() {
    const inpVal = document.getElementById("inpval");
    const list = document.getElementById("list")

    // CREATE DIV
    let d = document.createElement("div");
    d.setAttribute("class", "buttons")

    // CREATE SPAN
    let span = document.createElement("span");
    let spanTxt = document.createTextNode(inpVal.value);
    span.appendChild(spanTxt)

    // CREATE LIST ITEM
    let li = document.createElement("li");
    let text = document.createTextNode(inpVal.value);
    
    // CREATE DONE BUTTON 
    let done = document.createElement("button");
    let doneTxt = document.createTextNode("DONE");
    done.appendChild(doneTxt);
    done.setAttribute("class", "done-btn");
    done.setAttribute("onclick", "done(this);")
    d.appendChild(done)

    //CREATE UNDONE BUTTON
    let undone = document.createElement("button");
    let undoneTxt = document.createTextNode("UNDONE");
    undone.appendChild(undoneTxt)
    undone.setAttribute("class", "hide");
    undone.setAttribute("onclick", "undone(this);")
    d.appendChild(undone);

    // CREATE EDIT BUTTON
    let edit = document.createElement("button");
    let editTxt = document.createTextNode("EDIT");
    edit.appendChild(editTxt);
    edit.setAttribute("class", "done-btn");
    edit.setAttribute("onclick", "edit(this);")
    d.appendChild(edit)

    // CREATE DELETE BUTTON
    let del = document.createElement('button');
    let delTxt = document.createTextNode("X");
    del.appendChild(delTxt);
    del.setAttribute("onclick", "del(this);")
    del.setAttribute("class", "del-btn");
    d.appendChild(del);
    li.appendChild(span);
    li.appendChild(d)

    if (inpVal.value === "") {
        alert("please enter something")
    } else {
        list.appendChild(li);

        inpVal.value = "";
    }
}

function delAll() {
    const list = document.getElementById("list");
    list.innerHTML = ""
}

function del(e) {
    e.parentNode.parentNode.remove()
}

function done(e) {
    e.parentNode.parentNode.firstChild.className += "done";
    e.nextSibling.setAttribute("onclick", "undone(this);")
    e.nextSibling.className = "done-btn"
    e.className += " hide";
}

function edit(e) {
 let n = prompt("Edit your To Do", e.parentNode.parentNode.firstChild.firstChild.nodeValue)
e.parentNode.parentNode.firstChild.firstChild.nodeValue = n
}

function undone (e) {
    e.parentNode.parentNode.firstChild.className = ""
    e.className = "hide";
    e.previousSibling.className = "done-btn";
}