function getRandomColor() {
  var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.getElementById('theme-icon').addEventListener('click', function (e) {
  document.getElementById("body-bg").style.background = getRandomColor()
})
const date = new Date();
const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
const week_name = weeks[date.getDay()];
const year = date.getFullYear();
let Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', "jun", "jul", 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];
const month = Months[date.getMonth() + 1]
const day = date.getDate();
const fullDate = `${month} ${day} ${year}`
// alert(fullDate)
document.getElementById('weekName').innerText = week_name;
document.getElementById('fullDate').innerText = fullDate;
document.getElementById('discoverNew').addEventListener('click', function (e) {
  window.location.href = 'learnNew.html'
})
const completeBTN = document.querySelectorAll('.btn-primary');
let TaskNumber = document.getElementById('task-number');
TaskNumber.innerText = parseInt(completeBTN.length)


let TaskCompleted = document.getElementById("completedTask")


for (const btn of completeBTN) {
  btn.addEventListener('click', function (e) {
    const div = (e.target.parentElement).parentElement;
    const text = div.querySelector('p').innerText;
    btn.classList.add("btn-disabled")
    TaskNumber.innerText = TaskNumber.innerText - 1

    let hour = date.getHours();
let minute = date.getMinutes()
let sec = date.getSeconds()
let time;

if (hour >= 0 && hour < 13){
   time = `${hour}:${minute}:${sec} AM`
}else{
   time = `${hour}:${minute}:${sec} PM`
}

    if (TaskNumber.innerText == 0) {
      alert("Board Updated Sucessfully")
      alert("All Task Completed")
      TaskCompleted.innerText = parseInt(TaskCompleted.innerText) + 1
      const addToBeTaskList = document.getElementById("add-tobe-taskList");
      let li = document.createElement("li");
      li.classList = "bg-[#F4F7FF] w-full h-fit p-3 text-black font-semibold mt-2 rounded-lg "
      li.innerText = `You've completed the task ${text} at ${time}`
      addToBeTaskList.appendChild(li)
    } else {
      alert("Board Updated Sucessfully")
      TaskCompleted.innerText = parseInt(TaskCompleted.innerText) + 1
      const addToBeTaskList = document.getElementById("add-tobe-taskList");
      let li = document.createElement("li");
      li.classList = "bg-[#F4F7FF] w-full h-fit p-3 text-black font-semibold mt-2 rounded-lg "
      li.innerText = `You've completed the task ${text} at ${time}`
      addToBeTaskList.appendChild(li)
    }

  })
}
document.getElementById("clearHistory").addEventListener('click', function (e) {
  const ullist = document.getElementById("add-tobe-taskList");
  alert("You really want to delete all history?");
  ullist.innerHTML = '';
})
