//Array with tasks
let tasks = [{
        titel: "Do the Groceries",
        info: "We need fruits, milk, bread, nuts, Prosecco",
        details: "Please, go to the farmers market too",
        priority: 0,
        date: "07/27/2023",
        taskImg: "https://cdn.pixabay.com/photo/2022/05/29/03/25/milk-7228322_1280.jpg",
    },
    {
        titel: "Prepare Dinner",
        info: "Look up the recipe for Carbonara",
        details: "Use lactose free ingredients, we have guests!",
        priority: 0,
        date: "06/20/2023",
        taskImg: "https://cdn.pixabay.com/photo/2022/09/05/09/23/spaghetti-7433732_1280.jpg",
    },
    {
        titel: "Walk the Dog",
        info: "Even days My-turn, Uneven days Your-turn",
        details: "Need to call the vet to make an appointment for end of June",
        priority: 0,
        date: "06/25/2023",
        taskImg: "https://cdn.pixabay.com/photo/2023/05/28/18/46/dog-8024345_1280.jpg",
    },
    {
        titel: "Finish Taxes",
        info: "Finish the paper work of the last six month",
        details: "Don't forget to pay the open invoice!",
        priority: 0,
        date: "08/01/2023",
        taskImg: "https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_1280.png",
    },
    {
        titel: "Time for Sports",
        info: "Re-new the membership this month",
        details: "Try the conditioning class next Tuesday",
        priority: 0,
        date: "06/30/2023",
        taskImg: "https://cdn.pixabay.com/photo/2023/06/03/17/32/yoga-8038152_1280.png",
    },
    {
        titel: "Do the Cleaning",
        info: "kitchen, bathroom, floors, windows,...",
        details: "Next week, wash the curtains",
        priority: 0,
        date: "07/01/2023",
        taskImg: "https://cdn.pixabay.com/photo/2022/10/21/21/17/interior-7537974_1280.jpg",
    },
    {
        titel: "Pick up the Bike",
        info: "Number is: A0678",
        details: "It is already payed!",
        priority: 0,
        date: "08/30/2023",
        taskImg: "https://cdn.pixabay.com/photo/2022/07/24/19/42/bike-7342379_1280.png",
    },
    {
        titel: "Prepare the Costume",
        info: "Finish the details",
        details: "Use red, green and blue",
        priority: 0,
        date: "08/14/2023",
        taskImg: "https://cdn.pixabay.com/photo/2022/03/05/10/08/beauty-7048849_1280.jpg",
    },
    {
        titel: "Repot the Plants",
        info: "The big pots are in the backyard",
        details: "Don't forget to water them",
        priority: 0,
        date: "06/14/2023",
        taskImg: "https://cdn.pixabay.com/photo/2023/05/14/09/39/circle-7992340_640.jpg",
    },
]


//Card-Setting
function printTasks() {

    for (let x of tasks) {
        document.getElementById("myGrid").innerHTML +=
            `<div class="card mycard p-1 bg-light" id="taskCard">
            <a href="#" class="btn btn-primary w-25 mb-1">Task</a>
            <img id="bild" src="${x.taskImg}" class="card-img-top" alt="...">
            <div class="cardBody pt-2">
                <h5 class="cardTitle">${x.titel}</h5>
                <p class="cardText"> ${x.info} </p>
                <hr> 
                <div class="d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill pe-2"></i>
                <label class="btnText "> Priority level: </label>
                <span class="withKlick ms-2 bg-success p-2">${x.priority}</span>
                <button type="button" class="btn btn-light ms-2 myPrio"><i class="bi bi-caret-up-square" ></i></button>
                </div>
                <div class="d-flex">
                <i class="bi bi-calendar-week pe-2"></i><p class="dateText">Deadline: ${x.date} </p></div>
                <hr>
            </div>
            <div class="d-flex flex-column align-items-end gap-2">
            <button type="button" class=" btn btn-danger delBtn w-50 "><i class="bi bi-trash3 pe-2"></i>Delete</button>
            <button type="button" class=" btn btn-success donBtn w-50 "><i class="bi bi-bag-check pe-2"></i>
            Done</button>
            </div>
        </div>`;
    }
}
printTasks()


//Btn
let btnPri = document.getElementsByClassName("myPrio");
let colPri = document.getElementsByClassName("withKlick");
// let delBtn = document.getElementsByClassName("delBtn");


//Priority Btn: increase number & Color Switch
for (let x in btnPri) {
    btnPri[x].addEventListener("click", function() {
        if (tasks[x].priority < 5) {
            tasks[x].priority++;
            document.getElementsByClassName("withKlick")[x].innerHTML = tasks[x].priority;
        }
        if (tasks[x].priority == 2 || tasks[x].priority == 3) {
            colPri[x].classList.remove("bg-success");
            colPri[x].classList.add("bg-warning");
        } else if (tasks[x].priority == 4 || tasks[x].priority == 5) {
            colPri[x].classList.remove("bg-warning");
            colPri[x].classList.add("bg-danger");
        }
    })
};

//Sort by Priority
function sortbyPriority() {
    let sortedTasks = tasks.sort((a, b) => b.priority - a.priority);
    document.getElementById("myGrid").innerHTML = "";
    printTasks(sortedTasks)
}
document.getElementsByClassName("sortBtn").addEventListener("click", sortbyPriority);
console.log(sortbyPriority);


//Delete Button
// function Delete() {
//     for (let x in btnDel) {
//         btnDel[x].addEventListener("click", function() {
//             if (btnDel.onclick === "Delete") {
//                 target.parentNode.remove();
//             }
//         });
//     }
// }




//creating Icons
// const icons = [{
//         name: "fb",
//         icon: "Icons/facebook.svg"
//     },
//     {
//         name: "insta",
//         icon: "Icons/instagram.svg"
//     },
//     {
//         name: "google",
//         icon: "Icons/google-plus.svg"
//     },
//     {
//         name: "git",
//         icon: "Icons/github.svg"
//     },
//     {
//         name: "twitter",
//         icon: "Icons/twitter.svg"
//     },
// ]

// for (let x of icons) {
//     document.getElementsByClassName("myIcons")[0].innerHTML +=
//         `<a href="#" class="" id="iconSM" src="${x.icon}" alt="..."></a>`
// }