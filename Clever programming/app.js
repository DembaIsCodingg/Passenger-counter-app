let count = 0;

document.getElementById("iBtn").onclick = function(){
    count++;
    document.getElementById("count").innerHTML = count;
   
}

let count_el = document.getElementById("count-el")
let sss = document.getElementById("count")
document.getElementById("save-btn").onclick = function(){
    let countStr = count + "-"
    count_el.textContent += countStr
    sss.innerText = 0;
    count = 0
    

}









    
