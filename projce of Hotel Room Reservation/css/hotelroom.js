let button = document.getElementById("button");
let FirstName = document.getElementById("FirstName");


function Fullname(){
    let FirstName = document.getElementById("FirstName");
    if(FirstName.value === ""){
        console.log("error");
        FirstName.style.borderColor = "red"
    }else{
        console.log("good");
        FirstName.style.borderColor = "Green"
    }
}
function FullLastname(){
    let LastName = document.getElementById("LastName");
    if(LastName.value === ""){
        console.log("error");
        LastName.style.borderColor = "red"
    }else{
        console.log("good");
        LastName.style.borderColor = "Green"
    }
}

function EMail(){
    let EMail = document.getElementById("EMail");
    if(EMail.value === ""){
        console.log("error");
        EMail.style.borderColor = "red"
    }else{
        console.log("good");
        EMail.style.borderColor = "Green"
    }
}

function Phone(){
    let Phone = document.getElementById("Phone");
    if(Phone.value === ""){
        console.log("error");
        Phone.style.borderColor = "red"
    }else{
        console.log("good");
        Phone.style.borderColor = "Green"
    }
}

function Address(){
    let Address = document.getElementById("Address");
    if(Phone.value === ""){
        console.log("error");
        Address.style.borderColor = "red"
    }else{
        console.log("good");
        Address.style.borderColor = "Green"
    }
}

function DateOfcheckin() {
    if (checkinDate.value === "") {
        Err.innerHTML = "checkin Date is required";
        checkinDate.style.borderColor = "red";
    } else {
        checkinErr.innerHTML = "";
        checkinDate.style.borderColor = "black";
    }
}

function checkInDate() {
    let checkInDate = document.getElementById("checkInDate").value;
    let userinput = new Date(checkinDate);
    let today = new Date();
    let diffrence = userinput - today;
    let totOutcome = Math.floor
        (diffrence / (1000 * 60 * 60 * 24))
    console.log(totOutcome + "  Days remaing");
}

function TimeOfcheckIn() {
    if (checkInTime.value === "") {
        TimeErr.innerHTML = "Time of checkIn is required";
        checkInTime.style.borderColor = "red";
    } else {
        TimeErr.innerHTML = "";
        checkInTime.style.borderColor = "black";
    }
}
function checkInTime() {
    let checkInTime = document.getElementById("checkInTime").value;
    console.log(checkInTime);
    timeOfcheckIn = checkInTime
}

// function trainService() {
//     let TypeofRoom = document.getElementById("TypeofRoom");
//     let Presidentiallodge = document.getElementById("Presidential lodge");
//     let Firstclass = document.getElementById("First-class").value;
//     let economyclass = document.getElementById("economy-class").value;

//     if (TypeofRoom.value == Presidentiallodge) {
//         console.log("good");
//         TypeofRoom.style.borderColor = "red"
//         serviceErr.innerHTML = "invalid "
//     }else{
//         TypeofRoom.style.borderColor = "black"

//     }}
//      if (TypeofRoom.value == Firstclass) {
//         console.log("good");
//         FirstClass -= 1;
//         TypeofRoom.style.borderColor = "black"
//         serviceErr.innerHTML = ""
//         console.log(FirstClass);
//     }
//     if (TypeofRoom.value == economyclass) {
//         console.log("good");
//         EconomyClass -= 2;
//         TypeofRoom.style.borderColor = "black"
//         serviceErr.innerHTML = ""
//         console.log(EconomyClass);
//     }
//     if (FirstClass <= 0) {
//         console.log("no more room");
//         alert("sorry no more room")
//     }

//     if (EconomyClass <= 0) {
//         console.log("no more room");
//         alert("sorry no more room")
//     }




button.addEventListener('click', Fullname)
button.addEventListener('click', FullLastname)
button.addEventListener('click', EMail)
button.addEventListener('click',Phone )
button.addEventListener('click',Address)

