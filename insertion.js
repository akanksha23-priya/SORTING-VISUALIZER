const insertionSortBtn = document.getElementById("insertionSort_btn");

const insertionSorting = async() => {
    const divBar = document.querySelectorAll(".div_bar");
    divBar[0].style.background = "green";
    for(let i = 1; i < divBar.length; i++){
        let j = i - 1;
        let key = divBar[i].style.height;
        divBar[i].style.background = "red";
        while(j >= 0 && (parseInt(divBar[j].style.height) > parseInt(key))){
            divBar[j].style.background = "red";
            divBar[j+1].style.height = divBar[j].style.height;
            j = j - 1;
            await takingTime(400)
            for (let n = i; n >= 0; n--) {
                divBar[n].style.background = 'green';
            }
        };
        divBar[j+1].style.height = key;
        divBar[i].style.background = "green"
    };
};


insertionSortBtn.addEventListener("click", insertionSorting);


