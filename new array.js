const newArrayBtn = document.getElementById("newArray_btn");

const swap = (ele1, ele2) => {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
};

let array = [];

const newArrayGenrate = () => {
    emptyDiv();
    array = [];
    for(let i = 1; i < 101; i++){
        array.push(Math.floor(Math.random(i)*28));
    };

    const division = document.getElementById("division");
    for(let i = 1; i < 101; i++){
        const divBar = document.createElement("divBar");
        divBar.style.height = `${array[i]}rem`;
        divBar.className = "div_bar";
        division.appendChild(divBar);
    };
};

const emptyDiv = () => {
        const division = document.getElementById("division");
        division.innerHTML = '';
};

const takingTime = (time) => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('')}, time)
    });
};

newArrayBtn.addEventListener("click", newArrayGenrate)