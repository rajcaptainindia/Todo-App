var newData = document.getElementById('input1');
var ar =[];
function addData(){
    ar.push(newData.value);
    console.log(ar[ar.length-1]);
    let datacontainer = document.getElementById("data-container");
    let output = document.createElement('p');
   // output.textContent=ar[0];
    output.textContent=ar[ar.length-1];
   output.classList.add('data');
    datacontainer.appendChild(output);
    newData.textContent="";
        //newData.value="";
};

