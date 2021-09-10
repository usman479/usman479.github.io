const firebaseConfig = {
    apiKey: "AIzaSyCVUYEQXrxFn_fDlSUMH_yrb6O993J4wl0",
    authDomain: "team-reporter-bf9f2.firebaseapp.com",
    projectId: "team-reporter-bf9f2",
    storageBucket: "team-reporter-bf9f2.appspot.com",
    messagingSenderId: "473907083669",
    appId: "1:473907083669:web:72f178a9034a0da5759e9c",
    measurementId: "G-SBME2D9246"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();


const logOut = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

}

auth.onAuthStateChanged((user) => {
    if (user) {
        showData()
    } else {
        location.href = "./index.html"
    }
});

const createTeam = () => {
    const teamName = document.getElementById("teamname").value;
    const category = document.getElementById("category").value;
    const members = document.getElementById("members").value;
    let databaseRef = database.ref("teams");
    databaseRef.push({
        teamName,
        category,
        admin: auth.currentUser.email,
        members,
    })

}

const showData = () => {
    let databaseRef = database.ref("teams");
    databaseRef.on("child_added", (snapshot) => {
        let data = snapshot.val();
        showGroups(data)
    })
}


const delGroup = (e) => {
    let databaseRef = database.ref("teams");
    databaseRef.on("child_added", (snapshot) => {
        if (snapshot.val().teamName === e.getAttribute("id")) {
           database.ref("teams/" + snapshot.key).remove();
           location.reload()
        }

    })
    
}
// delGroup()

const showGroups = (data) => {
    let teamsOwn = document.getElementById("teamsown");
    let teamsPart = document.getElementById("teamspart");
    if (auth.currentUser.email === data.admin) {
        teamsOwn.innerHTML += `<div class="container border border-1 border-dark my-5 position-relative">
        <div class="position-absolute top-0 end-0">
            <div class="btn-group">
                <button class="btn border-0 btn-secondary bg-white" type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-three-dots-vertical h3" style="color: black;"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" id="${data.teamName}"  onclick="delGroup(this);">Delete</a></li>
                </ul>
            </div>
        </div>
        <div class="row p-4">
            <div class="col-12">
                <p class="h1">${data.teamName}</p>
            </div>
            <div class="col-12">
                <p><span class="fw-bold">Category: </span>${data.category}</p>
            </div>
            <div class="col-12">
                <p><span class="fw-bold">Members: </span>${data.members}</p>
            </div>
        </div>

    </div>`
    } else if (auth.currentUser.email === data.members) {
        teamsPart.innerHTML += `<div class="container border border-1 border-dark my-5 position-relative">
        <div class="row p-4">
            <div class="col-12">
                <p class="h1">${data.teamName}</p>
            </div>
            <div class="col-12">
                <p><span class="fw-bold">Category: </span>${data.category}</p>
            </div>
            <div class="col-12">
                <p><span class="fw-bold">Members: </span>${data.members}</p>
            </div>
        </div>

    </div>`
    }
}