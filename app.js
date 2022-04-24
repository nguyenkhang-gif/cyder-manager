const dataDiv= document.querySelector('.data-div')
const addBtn = document.querySelector('.add-btn')
const removeBtn=document.querySelector('.remove-btn')
let dem=0;
let previusPer
let MaxNum=localStorage.length
var EventPer
let textOfPer

refreshData()
getData()
addBtn.addEventListener("click",addtoData)
removeBtn.addEventListener("click",removePerson)
dataDiv.addEventListener("click",(e)=>{selectPer(e)})

function getData(){
    const rowE=[]
    //console.log(localStorage)
    for(let i=0;i<MaxNum;i++){
        let num="num"+i
        //console.log(localStorage[num]);
        let row=localStorage[num]
        if(row!=null){addPerson(row.split(','))}
    }
}


function addtoData(){
    const Name = document.getElementById("name")
    const Age = document.getElementById("age")
    const Money = document.getElementById("money")
    localStorage.setItem("num"+localStorage.length,[Name.value,Age.value,Money.value])
    if(MaxNum<localStorage.length)MaxNum=localStorage.length
    //console.log(Name.value+"whdaiw")
   

    
    addPerson([Name.value,Age.value,Money.value])

}   


function removePerson(){
    if(previusPer!=undefined){
        const num = "num" + previusPer.firstChild.innerText
        console.log(num)
        localStorage.removeItem(num)
        previusPer.remove()
    }
    dem=0
    
    clearDiv()
    getData()
    refreshData()
    
}

function addPerson(rowE){
   
    const stt=document.createElement("span")
    const Div = document.createElement("div")
    const Name = document.createElement("div")
    const Age = document.createElement("span")
    const Money = document.createElement("span")
    //console.log(rowE[1])
    stt.innerText=dem
    dem++
    Name.innerText=rowE[0]
    Age.innerText=rowE[1]
    Money.innerText=rowE[2]
    Div.classList.add("person")
    Div.appendChild(stt)
    Div.appendChild(Name)
    Div.appendChild(Age)
    Div.appendChild(Money)
    dataDiv.append(Div)
    
}


function selectPer(e){
    const parent=e.target.parentElement.classList.contains('person')
    const person=e.target.classList.contains('person')
    if (parent || person) {
        //console.log("this can be added")
        
        if (parent&& !person) {
            if ( previusPer != null && previusPer!=e.target ) {
                previusPer.classList.remove("select")
                e.target.parentElement.classList.toggle("select")
            }else {
                e.target.parentElement.classList.toggle("select")
            }
            previusPer=e.target.parentElement
            //console.log(previusPer) test 
        } else {
            if ( previusPer != null && previusPer!=e.target ) {
                previusPer.classList.remove("select")
                e.target.classList.toggle("select")
            }else {
                e.target.classList.toggle("select")
            }
            
            previusPer=e.target
        }
    }
    
}

function clearDiv(){
    for(let i=0 ; i<localStorage.length;i++){
        if(!dataDiv.lastElementChild.classList.contains("head")){
            //console.log(dataDiv.lastElementChild.classList.contains("head"))
            dataDiv.lastChild.remove()
        }
    }
    //console.log(dataDiv.firstElementChild.classList.contains("head"))
    //dataDiv.firstElementChild.remove()
}




//copy of local storage

function refreshData(){
    let localCopy=[]

    for(let i=0;i<MaxNum+1;i++){
        if(localStorage["num"+i]!=undefined){
            localCopy.push(localStorage["num"+i])
        }
    }  
    localStorage.clear()
    for(let i=0;i<localCopy.length;i++){
        localStorage.setItem("num"+i,localCopy[i])
    }
    console.log(localCopy)
}




