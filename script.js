let intro = document.getElementById("intro");

let tasks = {
    1: { name: "Task 1",step: ["walk","talk"],island: "Arakas",items: [], completed: true},
    2: { name: "Task 2", island: "Arakas",items: ["water","food"], completed: false},
    3: { name: "Task 3", island: "Arakas",items: [], completed: true},
    4: { name: "Task 4", island: "Arakas",items: [], completed: false},
    5: { name: "Task 3", island: "Arakas",items: [], completed: true}
}


intro.innerHTML = `
    <p class="head">Task #</p>
    <p class="head">Task Name</p>
    <p class="head">Island</p>
    <p class="head">Items Needed</p>
    <p class="head">Steps</p>
    <p class="head">Status</p>
`;

for(let key in tasks) {

    let currentTask = tasks[key];

    intro.innerHTML += `
    <p>${key}</p>
    <p>${currentTask.name}</p>
    <p>${currentTask.island}</p>
    <p>${currentTask.items.length > 0 ? currentTask.items.join(", ") : "None"}</p>
    <p>$</p>
    <p>${currentTask.completed}</p>
    `;    
}


let test = document.getElementById("test2");

let stats = {
    "Health" : "100",
    "Ammo" : 5,
    "Mana" : 100
}

test.innerHTML = `
    <h2>Health</h2>
    <p>${stats.Health}</p>
    <h2>Ammo</h2>
    <p>${stats.Ammo}</p>
    <h2>Mana</h2>
    <p> ${stats.Mana}</p>
    

`

