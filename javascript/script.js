function addTask(){
    var task = document.getElementById("task").value;
    var taskList = document.getElementById("List");
    var li = document.createElement("li");
    var textnode = document.createTextNode(task);
    li.appendChild(textnode);
    taskList.appendChild(li);
    document.getElementById("task").value = "";

    var deleteButton=document.createElement("button");
    deleteButton.innerHTML="Delete";
    taskList.appendChild(deleteButton);
    deleteButton.onclick=function(){
        taskList.removeChild(li);
    }
    }


        







