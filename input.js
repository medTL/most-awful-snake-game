let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0,y: 0};
window.addEventListener('keydown', e =>{
   
    switch(e.code){
        case 'ArrowUp':
        
            if(lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y: -1};
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break;
        inputDirection = {x:0, y:1};
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break;
            inputDirection = {x: 1, y:0};
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break;
            inputDirection = {x:-1, y:0};
            break;
    }
})
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

const mobileUp  = document.getElementById('up-arrow').addEventListener('click',() =>{
    if(lastInputDirection.y !== 0) return;
    inputDirection = {x:0, y: -1};
    return;
})

const mobileDown  = document.getElementById('down-arrow').addEventListener('click',() =>{
    if(lastInputDirection.y !== 0) return;
    inputDirection = {x:0, y:1};
    return;
})

const mobileLeft  = document.getElementById('left-arrow').addEventListener('click',() =>{
    if(lastInputDirection.x !== 0) return;
    inputDirection = {x:-1, y:0};
    return;
})

const mobileRight  = document.getElementById('right-arrow').addEventListener('click',() =>{
    if(lastInputDirection.x !== 0) return;
            inputDirection = {x: 1, y:0};
    return;
})