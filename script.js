'use strict';

let customers = 0;


document.querySelector(".submit").addEventListener('click', function(e) {
    customers++;
    console.log(customers);
    document.getElementById('clear').style.display = "block";

    // --------- Select elements
    const nameInput = document.getElementById("name");
    const loanInput = document.getElementById("loan");
    const dateInput = document.getElementById("date");
    const durationInput = document.getElementById("duration");


    let custTable = document.querySelector(".customersData");
    
    const cusName = nameInput.value;
    const cusLoan = Number(loanInput.value);
    const cusDate = new Date(dateInput.value);
    const cusDuration = Number(durationInput.value);
    const expDate = new Date(cusDate);
    expDate.setMonth(expDate.getMonth() + cusDuration);
    
    // DOM Manipulation
    let row = document.createElement("tr");
    row.id = String(customers);
    row.classList.add('row');
    row.style.height = "120px";
    let col1 = document.createElement("td");
    col1.id = 'col1';

    col1.innerHTML = "<img class='profile' src = 'images/profile.png'>";
    let col2 = document.createElement("td");
    col2.id = 'col2';

    col2.style.lineHeight = "15%";
    col2.innerHTML = `<h2>${cusName}</h2><h4>Rs. ${cusLoan}</h4><h4>Issue Date: <span style='color:red'>${Intl.DateTimeFormat('en-GB').format(cusDate)} </span></h4><h4>Expiry Date: <span style='color:red'>${Intl.DateTimeFormat('en-GB').format(expDate)} </span></h4>`;

    let col3 = document.createElement("td");
    col3.id = 'col3';
    col3.innerHTML= `<button class='del' id=${customers}>REMOVE</button>`;
    
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    custTable.appendChild(row);

});

document.getElementById('clear').addEventListener('click', function(e) {
    let container = document.querySelector(".customersData"); // 
    // Removing all childs
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    document.getElementById('clear').style.display = "none";
});

document.querySelector(".customersData").addEventListener('click', function(e){
    if(e.target.classList[0] == 'del') // When to remove item
    {
        const cusId = e.target.id;
        const items = document.querySelector(".customersData").children;
        for(let i=0; i<items.length; i++)
        {
            if(items[i].id == cusId)
            {
                document.querySelector(".customersData").removeChild(items[i]);
                break;
            }
        }
        if(document.querySelector(".customersData").children.length == 0)
            document.getElementById('clear').style.display = "none";
    }
})