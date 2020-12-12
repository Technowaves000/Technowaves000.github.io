// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZ5d8-zJwjwUS3z1jKtoP9D_hymUGvbaU",
    authDomain: "ccapdev-resume-901fc.firebaseapp.com",
    databaseURL: "https://ccapdev-resume-901fc.firebaseio.com",
    projectId: "ccapdev-resume-901fc",
    storageBucket: "ccapdev-resume-901fc.appspot.com",
    messagingSenderId: "362008302563",
    appId: "1:362008302563:web:5bfdd5db9a5b44521946d6"
};
// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

//EDUCATIONS
// db.collection("educations").get().then(function(snapshot){
//     snapshot.forEach(function(doc){
//         renderEduc(doc);
//     })
// });

let educListC = document.querySelector("#educ-list");

//real time
db.collection("educations").onSnapshot(function(snapshot){
    let changes = snapshot.docChanges();
    changes.forEach(function(change){
        if(change.type == "added"){
            renderEduc(change.doc);
        }else if(change.type == "removed"){
            console.log(change.doc.id);
            let ed = educListC.querySelector("[data-id=" + "\'" + change.doc.id + "\'" + "]");
            console.log(ed);
            educListC.removeChild(ed);
        }
    })
})

//create element and render educ
function renderEduc(doc) {
    //place educ in ul
    let educList = document.querySelector("#educ-list");

    let li = document.createElement("li");
    let degree = document.createElement("div");
    let school = document.createElement("div");
    let yend = document.createElement("div");
    let ystart = document.createElement("span");
    let cross = document.createElement("button");

    //style delete button
    cross.style.backgroundColor="lightcoral";
    cross.style.color="lightcyan";
    cross.style.border="none";
    cross.style.float="right";
    cross.style.position="relative";
    cross.style.top="-55px";

    li.setAttribute("data-id", doc.id)
    degree.textContent = doc.data().degree;
    school.textContent = doc.data().school;
    yend.textContent = doc.data().year_end;
    ystart.textContent = doc.data().year_start;
    cross.textContent = "delete";

    li.appendChild(degree);
    li.appendChild(school);
    li.appendChild(ystart);
    li.appendChild(yend);

    educList.appendChild(li);


    // //testing delete
    // var remove_button = document.createElement("input")
    // remove_button.type = "button"
    // remove_button.className = "remEduc";
    // remove_button.onclick = function(){
    //     remove_educ(doc.id)
    // };
}

//delete educ
// function remove_educ(id) {
//     db.collection('educations').doc(id).delete()
//     .then(function(docRef){
//         location.reload();
//     })
//     .catch(function(error){
//         console.error("Error deleting: ", error);
//         alert("error deleting educ");
//     });
// }

//add educ
$(document).ready(function(){
    $("#butteduc").click(function(){
        let formE = $(this).parent().serializeArray()
        console.log(formE)
        db.collection("educations").add({
            degree: formE[0].value,
            school: formE[1].value,
            year_start: formE[2].value,
            year_end: formE[3].value
        }).then(function(){
            document.querySelector("form#addeduc").reset();
        });
        
    })
})

//ORGANIZATIONS
// db.collection("organizations").get().then(function(snapshot){
//     snapshot.forEach(function(doc){
//         renderOrg(doc);
//     })
// });

let orgListC = document.querySelector("#org-list");

//real time
db.collection("organizations").onSnapshot(function(snapshot){
    let changes = snapshot.docChanges();
    changes.forEach(function(change){
        if(change.type == "added"){
            renderOrg(change.doc);
        }else if(change.type == "removed"){
            console.log(change.doc.id);
            let od = orgListC.querySelector("[data-id=" + "\'" + change.doc.id + "\'" + "]");
            console.log(od);
            orgListC.removeChild(od);
        }
    })
})

//create element and render org
function renderOrg(doc) {
    //place org in ul
    let orgList = document.querySelector("#org-list");

    let li = document.createElement("li");
    let name = document.createElement("div");
    let position = document.createElement("div");
    let yend = document.createElement("div");
    let ystart = document.createElement("span");
    let cross = document.createElement("button");

    //style delete button
    cross.style.backgroundColor="lightcoral";
    cross.style.color="lightcyan";
    cross.style.border="none";
    cross.style.float="right";
    cross.style.position="relative";
    cross.style.top="-55px";

    li.setAttribute("data-id", doc.id)
    name.textContent = doc.data().name;
    position.textContent = doc.data().position;
    yend.textContent = doc.data().year_end;
    ystart.textContent = doc.data().year_start;
    cross.textContent = "delete";

    li.appendChild(name);
    li.appendChild(position);
    li.appendChild(ystart);
    li.appendChild(yend);

    orgList.appendChild(li);

}

//add org
$(document).ready(function(){
    $("#buttorg").click(function(){
        let formO = $(this).parent().serializeArray()
        console.log(formO)
        db.collection("organizations").add({
            name: formO[0].value,
            position: formO[1].value,
            year_start: formO[2].value,
            year_end: formO[3].value
        // }).then(function(){
        //     $("#org-list").append("<li><div>"+formO[0].value+"</div><div>"+formO[1].value+"</div><div>"+formO[2].value+"</div><div>"+formO[3].value+"</div></li>")
        });
        
    })
})

//WORKS
// db.collection("works").get().then(function(snapshot){
//     snapshot.forEach(function(doc){
//         renderWork(doc);
//     })
// });

let workListC = document.querySelector("#work-list");

//real time
db.collection("works").onSnapshot(function(snapshot){
    let changes = snapshot.docChanges();
    changes.forEach(function(change){
        if(change.type == "added"){
            renderWork(change.doc);
        }else if(change.type == "removed"){
            console.log(change.doc.id);
            let wd = workListC.querySelector("[data-id=" + "\'" + change.doc.id + "\'" + "]");
            console.log(wd);
            workListC.removeChild(wd);
        }
    })
})

//create element and render org
function renderWork(doc) {
    //place org in ul
    let workList = document.querySelector("#work-list");
    
    let li = document.createElement("li");
    let name = document.createElement("div");
    let subject = document.createElement("div");
    let yend = document.createElement("div");
    let ystart = document.createElement("span");
    let cross = document.createElement("button");

    //style delete button
    cross.style.backgroundColor="lightcoral";
    cross.style.color="lightcyan";
    cross.style.border="none";
    cross.style.float="right";
    cross.style.position="relative";
    cross.style.top="-55px";

    li.setAttribute("data-id", doc.id)
    name.textContent = doc.data().name;
    subject.textContent = doc.data().subject;
    yend.textContent = doc.data().year_end;
    ystart.textContent = doc.data().year_start;
    cross.textContent = "delete";

    li.appendChild(name);
    li.appendChild(subject);
    li.appendChild(ystart);
    li.appendChild(yend);

    workList.appendChild(li);

}

//add works
$(document).ready(function(){
    $("#buttwork").click(function(){
        let formW = $(this).parent().serializeArray()
        console.log(formW)
        db.collection("works").add({
            name: formW[0].value,
            subject: formW[1].value,
            year_start: formW[2].value,
            year_end: formW[3].value
        }).then(function(){
            $("#work-list").append("<li><div>"+formW[0].value+"</div><div>"+formW[1].value+"</div><div>"+formW[2].value+"</div><div>"+formW[3].value+"</div></li>")
        });
        
    })
})

//OTHERS
// db.collection("others").get().then(function(snapshot){
//     snapshot.forEach(function(doc){
//         renderOth(doc);
//     })
// });

let othListC = document.querySelector("#org-list");

//real time
db.collection("others").onSnapshot(function(snapshot){
    let changes = snapshot.docChanges();
    changes.forEach(function(change){
        if(change.type == "added"){
            renderOth(change.doc);
        }
        else if(change.type == "modified"){
            console.log(change.doc.id);
            // let otd = workListC.querySelector("[data-id=" + "\'" + change.doc.id + "\'" + "]");
            // console.log(otd);
            // workListC.update(otd);
            console.log("nc")
            // renderOth(change.doc);
        }
    })
})

//create element and render others
function renderOth(doc) {
    //place oth in ul
    let othList = document.querySelector("#oth-list");
    
    // let li = document.createElement("li");
    // let intro = document.createElement("div");
    let git = document.createElement("li");
    let link = document.createElement("li");
    let twit = document.createElement("li");

    // li.setAttribute("data-id", doc.id)
    $("#introt").text(doc.data().value);
    git.textContent = doc.data().github;
    link.textContent = doc.data().linkedin;
    twit.textContent = doc.data().twitter;

    // li.appendChild(intro);
    othList.appendChild(git);
    othList.appendChild(link);
    othList.appendChild(twit);

    // othList.appendChild(li);
}

//edit intro
$(document).ready(function(){
    $("#buttintro").click(function(){
        let formO = $(this).parent().serializeArray()
        console.log(formO)
        db.collection("others").doc("intro").update({
            value: formO[0].value
        }).then(function(){
            $("#introt").text(formO[0].value)
        })
        
    })
})

//edit links
$(document).ready(function(){
    $("#buttlink").click(function(){
        let formL = $(this).parent().serializeArray()
        console.log(formL)
        db.collection("others").doc("intro").update({
            github: formL[0].value,
            linkedin: formL[1].value,
            twitter: formL[2].value
        }).then(function(){
            $("#oth-list").html("<li><div>"+formL[0].value+"</div></li><li><div>"+formL[1].value+"</div></li><li><div>"+formL[2].value+"</div></li>")
        });
        
    })
})

//place 

//For adding
// var newObject =  {
//     name
// }

// db.collection("organizations").add(newObject).then(function(doc){
//     console.log("Added with the uid: " = doc.id);
// })

//For deleting
// db.collection("organizations").doc("*UID*").delete().then(function(){
//     console.log("item deleted");
// }).catch(function(err){
//     console.log("error in deleting item" +  err);
// });

//log in

$(document).ready(function(){
    $("#buttlog").click(function(){
        let formL = $(this).parent().serializeArray()
        firebase.auth().signInWithEmailAndPassword(formL[0].value, formL[1].value).then(function(user){
            console.log("user signed in");
        
            var user = firebase.auth().currentUser;
            if (user != null) {
                console.log(user.email);
                alert("signed in")
                window.location.replace("edit.html")
            }
        }).catch(function(err){
            if(err.code == "auth/wrong-password"){
                alert("wrong password")
            }else {
                alert(err.message);
            }
        })
    })
    
})



// function login() {
    
// }
