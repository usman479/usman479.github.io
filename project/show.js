const teamsOwn = document.getElementById("teamsown");
const teamsPart = document.getElementById("teamspart");
let currentUser = localStorage.getItem("currentUser");
let getData = JSON.parse(localStorage.getItem(currentUser));
console.log(getData);
console.log(getData.teams.length);
console.log(getData.teams[0].admin)
for (let i = 0; i < getData.teams.length; i++) {
    if (currentUser === getData.teams[i].admin) {
        teamsOwn.innerHTML += `<div class="container border border-1 border-dark my-5">
<div class="row p-4">
    <div class="col-12">
        <p class="h2">${getData.teams[i].name}</p>
    </div>
    <div class="col-12">
        <p><span class="fw-bold">Members: </span>${getData.teams[i].members[0]}</p>
    </div>
</div>

</div>`
    } else {
        teamsPart.innerHTML += `<div class="container border border-1 border-dark my-5">
            <div class="row p-4">
                <div class="col-12">
                    <p class="h2">${getData.teams[i].name}</p>
                </div>
                <div class="col-12">
                    <p><span class="fw-bold">Members: </span>${getData.teams[i].members[0]}</p>
                </div>
            </div>
            
            </div>`
    }
}
