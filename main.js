window.onload = function () {
    const submit = document.getElementById("submit");
    const container = document.getElementById("container");
    let index = 0;
    submit.onclick = function () {
        if (index === 0) {
            const myNewTxt = document.createElement("p");
            myNewTxt.classList.add("text")
            myNewTxt.append("First todo item")
            container.appendChild(myNewTxt)
            console.log(myNewTxt)
        }
        else if (index === 1) {
            const myNewTxt = document.createElement("p");
            myNewTxt.classList.add("text")
            myNewTxt.append("Other todo item")
            container.appendChild(myNewTxt)
            console.log(myNewTxt)
        }
        else{
            const myNewTxt = document.createElement("p");
            myNewTxt.classList.add("text")
            myNewTxt.append("And this another one:)")
            container.appendChild(myNewTxt)
            console.log(myNewTxt)
        }
        index++;
    }
}