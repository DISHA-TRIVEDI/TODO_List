let input= document.getElementById("item-name")//Created var for input field
let item= document.getElementById("list1")//Created var for item list

function Add(){
  if(input.value==""){
  alert("Please enter value...")
}
  else{
    //Created element(li) for adding new item as a list
    let element= document.createElement("li")
    //Add input into the list created with trash icon
    element.innerHTML= `${input.value} <i class="fas fa-trash"></i>`
    //Shows the item to the user
    item.appendChild(element)
    //For making the input field empty after adding the task in the item list
    input.value="" 
    //Performs remove function on click of trash icon
    element.querySelector("i").addEventListener('click', remove)  
    function remove(){
      element.remove()
    }
  }
}