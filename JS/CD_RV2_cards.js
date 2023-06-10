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
        taskImg: "https://cdn.pixabay.com/photo/2023/01/02/12/53/poached-egg-7692040_1280.jpg",
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
        taskImg: "https://cdn.pixabay.com/photo/2023/01/02/12/53/poached-egg-7692040_1280.jpg",
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
for (let x of tasks) {
    document.getElementById("myGrid").innerHTML +=
        `<div class="card mycard">
            <a href="#" class="btn btn-primary">Task</a>
            <img id="bild" src="${x.taskImg}" class="card-img-top" alt="...">
            <div class="cardBody">
                <h5 class="cardTitle">${x.titel}</h5>
                <p class="cardText"> ${x.info} </p>
                <hr> 
                <label class="btnText">Priority level: </label>
                <button type="button" class="btn btn-light withKlick"><span class="badge badge-light badgeField">${x.priority}</span></button>
                <p class="dateText"> Deadline: ${x.date} </p>
                <hr>
            </div>
            <button type="button" class=" btn btn-danger delBtn">Delete</button>
            <button type="button" class=" btn btn-success donBtn">Done</button>
        </div>`;
}

//increase number of priority Btn
let btnPri = document.getElementsByClassName("withKlick");
for (let x in btnPri) {
    btnPri[x].addEventListener("click", function() {
            tasks[x].priority++;
            document.getElementsByClassName("badgeField")[x].innerHTML = tasks[x].priority;
        })
        // increasing till 5
        // if (priority == 5) {
        //     break
        // }
        // let priority = 5
        // break


}

// change background Colore
let numKlick = 0
let colorChange = ["yellow", "green", "red"];

btnPri.addEventListener('click', count);

function count() {
    numKlick = numKlick + 1;

    if (numKlick < 2) {
        this.style.backgroundColor = "yellow";
    } else if (numKlick = 2 && numKlick4 < 4) {
        this.style.backgroundColor = "green";
    } else {
        this.style.backgroundColor = "red";
    }
    document.querySelector('output').innerText = text;
}


//Sort by Priority


// tasks.sort()



//Delete Button
let btnDel = document.getElementsByClassName("delBtn");
for (let x in btnDel) {
    btnDel[x].addEventListener("click", function() {
        if (btnDel.onclick === "Delete") {
            target.parentNode.remove();
        }
    });
}




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
//     document.getElementsByClassName("myIcons").innerHTML +=
//         `<a href="#" class="" id="iconSM" src="${x.icon}" alt="..."></a>`


// }