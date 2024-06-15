const target=document.getElementById('target');
let yes=document.getElementById('yes');
//tabnine:test|Explain|document|ask
yes.addEventListener('click',()=>{
    
    alert("I love you too. You mean the world to me. ");
})
//tabnine:test|Explain|document|ask
function moveTarget(){
    const maxWidth=400;
    const maxHeight=400;
    const ranomX=Math.floor(Math.random()*maxWidth);
    const ranomY=Math.floor(Math.random()*maxHeight);
    target.style.left= ranomX+'px';
    target.style.top=ranomY+'px';
}
//tabnine:test|Explain|document|ask
target.addEventListener('mouseenter',function(){
    moveTarget();
})