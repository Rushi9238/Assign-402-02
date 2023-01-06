
let clear
// function add(){
    
//     let h1=document.createElement("h1");
//     let h1text=document.createTextNode("Image Element added");
//     h1.appendChild(h1text);
//     document.body.appendChild(h1);
// // ***************************************************
//     let img=document.createElement("img");
//     img.src="geekster.png";
//     document.body.appendChild(img);
//     img.innerHTML=" ";
    
// }
function add(){
    let h1=document.getElementById("addh1");
    h1.innerText="Image Element Added"
    let img=document.getElementById("addimg");
    img.src="geekster.png";
}