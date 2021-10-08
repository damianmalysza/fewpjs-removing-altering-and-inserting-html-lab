// Write your code here!
document.querySelector("#main").remove()

let newHeader = document.createElement("h1")
newHeader.setAttribute('id','victory')

document.body.appendChild(newHeader)
newHeader.innerHTML = "is the champion"