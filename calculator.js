let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let zero = document.querySelector(".zero")

let pendingNumber;
let newScreen = "0";
let evalArray = [];

let screen = document.querySelector(".result");
// let workings = document.querySelector(".store");
let operator = document.querySelectorAll(".operator");
operator.forEach(s =>{
  s.addEventListener("click", () =>{
   clickedSymbol(event.target.innerHTML)

  })
})

let btn = document.querySelectorAll(".btn")
btn.forEach(item =>{
  item.addEventListener("click", () =>{
    clickedNumber(event.target.innerHTML)
  })
})

const clickedNumber = (value) => {
  handleNumber(value)
  changeScreen()
}
const handleNumber= (num) =>{
  if (newScreen == "0"){
    newScreen = num 
  }else{
    newScreen += num
  }
}

const changeScreen = () => {
    screen.innerHTML = newScreen; 
  }



del.onclick = () => {
  if (newScreen.length === 1){
     newScreen = "0"
  } else{
    newScreen = newScreen.substring(0, newScreen.length-1)
  // let screenLength = newScreen[newScreen.length-1]
  // newScreen = newScreen.slice( screenLength, 1)
  } 
  changeScreen()
  //alert("got here")
}

clear.addEventListener("click", ()=>{ 
  newScreen = "0"
  changeScreen()
  
 pendingNumber = undefined
})

const clickedSymbol = (value) =>{
  handleSymbol(value)
  //changeScreen()
}

// const handleSymbol = (symbol)=>{
//   alert(symbol)
// }


const handleSymbol = (symbol)=>{
  switch(symbol){
      case "+":
      //newScreen = "0"
      pendingNumber = newScreen
        changeScreen()
      evalArray.push(pendingNumber)
      evalArray.push("+") 
      newScreen = "0"
      break;
      
       case "-":
     // newScreen = "0"
      pendingNumber = newScreen
      changeScreen()
      evalArray.push(pendingNumber)
      evalArray.push("-") 
      newScreen = "0"
      break;
      
       case "x":
      pendingNumber = newScreen
      changeScreen()
      evalArray.push(pendingNumber)
      evalArray.push("*") 
      newScreen = "0"
      break;
      
       case "/":
      pendingNumber = newScreen
      changeScreen()
      evalArray.push(pendingNumber)
      evalArray.push("/") 
      newScreen = "0"
      break;
      
       case "=":
      evalArray.push(newScreen)
      var evaluation = eval(evalArray.join(' '))
      newScreen = evaluation + " "
      changeScreen()
      evalArray = [];
      break;
default:
break;
  }
}

zero.addEventListener("click", ()=>{
  clickZero(event.target.innerHTML)
})

const clickZero = (zero)=>{
  if (newScreen == "0"){
    newScreen = zero
  }else{
    newScreen += zero
    changeScreen()
  }
}

