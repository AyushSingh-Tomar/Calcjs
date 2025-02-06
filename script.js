let btns=document.getElementsByClassName('btns');
let btns_action=document.getElementsByClassName('action');
let screen =document.getElementById('display');
for(let i=0; i<btns.length; i++) {
btns[i].addEventListener("click", function(){
   screen.value+=this.value;
})
}

for(let i=0; i<btns_action.length; i++) {
    btns_action[i].addEventListener("click", function(){
       if(btns_action[i].value==="AC"){
        screen.value="";
       }
       else if(btns_action[i].value==="DE"){
        let temp = screen.value;
        screen.value=temp.slice(0,-1);
       }
       else if(btns_action[i].value==="="){
        let temp = screen.value;
        screen.value=eval(temp);
       }
       
    })
    }
