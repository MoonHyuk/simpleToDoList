let toDoData = JSON.parse(localStorage.getItem("simpleToDoListData"));
if (toDoData === null) toDoData = [];

function addTask() {
    let input1 = document.getElementById("ToDo").value;
    let input2 = document.getElementById("importance").value;
    if (input1 === "") {
        alert("할 일을 적어주세요!");
        return;
    }
    else if (input2 === "") {
        alert("중요도를 적어주세요!");
        return;
    }

    toDoData.push([parseInt(input2), input1]);
    document.getElementById("ToDo").value = "";
    document.getElementById("importance").value = "";
    toDoData.sort(function(a,b) {
      return a[0] - b[0];
    });

    let len = toDoData.length;
    document.getElementById("priority_task").innerText = toDoData[len - 1][1];
    localStorage.setItem("simpleToDoListData", JSON.stringify(toDoData));
}

function deleteTask() {
    toDoData.pop();
    let len = toDoData.length;
    if (len === 0) {
        document.getElementById("priority_task").innerText = "없음";
    }
    else {
        document.getElementById("priority_task").innerText = toDoData[len - 1][1];
    }
    localStorage.setItem("simpleToDoListData", JSON.stringify(toDoData));
}

window.onload = function () {
    let len = toDoData.length;
    if (len) {
        document.getElementById("priority_task").innerText = toDoData[len - 1][1];
    }
    let inputs = document.getElementsByTagName("input");
    for (const input of inputs) {
        input.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                addTask();
            }
        });
    }
};