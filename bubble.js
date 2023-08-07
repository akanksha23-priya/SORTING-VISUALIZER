const bubbleSortBtn = document.getElementById("bubbleSort_btn");

const bubbleSort = async () => {
  const ele = document.querySelectorAll(".div_bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "red";
      ele[j + 1].style.background = "red";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await takingTime(30);
        swap(ele[j], ele[j + 1]);
        
      };
      ele[j].style.background = "yellow";
      ele[ele.length - i - 1].style.background = "green";
    };
    ele[0].style.background = "green"
  };
};



bubbleSortBtn.addEventListener("click", bubbleSort);