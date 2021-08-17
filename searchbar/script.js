const search = () => {
    const myInp = document.getElementById("myinp").value.toLowerCase();
    let table = document.getElementById("table");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        
            if (td.innerHTML.toLowerCase().indexOf(myInp) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none"
            }

        }
  

}
