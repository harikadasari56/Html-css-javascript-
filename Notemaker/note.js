// let key="trial";
// let value="random trial value";

// let a=localStorage.getItem(key);
// console.log(a);
// value="hiiii";
// localStorage.setItem(key,value);
// localStorage.removeItem(key);
// localStorage.clear();
let a=document.getElementById("title");
let b=document.getElementById("notes");
let save_btn=document.getElementById("save");
let load_btn=document.getElementById("load");
let togl=document.getElementById("tog")
let body1=document.querySelector("body");
let h11=document.querySelector("h1");
let lab=document.querySelector("label");
let but=document.querySelectorAll("button");
let b1=document.querySelector("b");
let h33=document.querySelector("h3");
let ta=document.querySelector("textarea");


const load_notes=()=>{
    let allNotes={};
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        let value=localStorage.getItem(key);
        if(key!="" || value!=""){
            allNotes[key]=value;
        }

    }
    return allNotes;
}
const delete_notes=(key)=>{
    localStorage.removeItem(key);
}
let display=document.getElementById("load_notes");
save_btn.addEventListener("click",()=>{
    let title=a.value;
    let notes=b.value;
    if(title!=="" || notes!==""){
        console.log(title,notes);
        localStorage.setItem(title,notes);

    }
   else{
    Window.alert("add notes and title to save");
   }
});
load_btn.addEventListener("click",()=>{
    let notes=load_notes();
    for(let i in notes ){
        display.innerHTML=display.innerHTML+`<h1>${i}</h1>
                                             <h2>${notes[i]}</h2>
                                             <button onclick="delete_notes('${i}')">Delete</button>`

    }
    // load_btn.click();
});
togl.addEventListener("click",()=>{
    body1.classList.toggle("pbody");
    h11.classList.toggle("text");
    lab.classList.toggle("text");
    h33.classList.toggle("text");
    ta.classList.toggle("pbody");
    for(oo in but){
        oo.classList.toggle("text");
    }

});
