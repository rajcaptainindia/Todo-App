var newData = document.getElementById('input1');
var ar =[];
function addData(){
    ar.push(newData.value);
    console.log(ar);
    newData.value="";
    let datacontainer = document.getElementById("data-container");
    let output = document.createElement('H1');
    output.textContent="Rajkumar"
    output.classList.add('data');
    datacontainer.appendChild(output);
    
};

