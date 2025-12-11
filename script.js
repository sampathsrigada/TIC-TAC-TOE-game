let boxes = document.querySelectorAll("#box");
let rbtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg-container");
let newgame = document.querySelector("#newbtn");
let newgame1 = document.querySelector("#newbtn1");
let para = document.querySelector("#msg");
let drawcon = document.querySelector(".draw-condition");
let drawmsg = document.querySelector("#draw");


let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO === true){
            box.innerHTML = "X"
            box.style.color = "red"
            turnO = false;

        }
        else{
            box.innerHTML = "O"
            box.style.color = "blue"
            turnO = true;
        }
        box.disabled = true
        checkwinner();
    });
});



const resetbtn = () =>{
    turnO = true;
    msg.classList.add("hide");
    drawcon.classList.add("hide");
    enablebtn();

}

const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const drawcheck = () =>{
    let filled = 0;
    boxes.forEach((box) =>{
        if(box.innerText !==""){
            filled++
        }
    });
    if(filled === 9){
        msg.classList.add("hide");
        drawcon.classList.remove("hide");
        disablebtn()
    }

}

const showWinner = (winner) => {
    para.innerHTML = `Congratulations! player ${winner} wins the match`;
    msg.classList.remove("hide");
    disablebtn();

}
const checkwinner = ()=>{
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        
        if(pos1!= "" && pos2!= "" && pos3!= ""){
        if(pos1 === pos2 && pos2===pos3){
            console.log("winner", pos1);
            showWinner(pos1);
            return;
        }
        
    }
} 
drawcheck();   
};


newgame.addEventListener("click", resetbtn);
newgame1.addEventListener("click", resetbtn);
rbtn.addEventListener("click", resetbtn);
