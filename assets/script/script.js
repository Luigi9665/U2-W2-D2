const divWelcome = document.getElementById("box-welcome-summer");
const allCard = divWelcome.querySelectorAll(".card");
console.log(divWelcome);
console.log(allCard);

const generateBtnHot = (card) => {
  for (let i = 0; i < card.length; i++) {
    const element = card[i];
    const img = element.querySelector("img");
    img.classList.add("position-relative");
    const btnHot = element.querySelector(".btn-hot");
    if (btnHot) {
      btnHot.remove();
    } else {
      const btn = document.createElement("button");
      btn.innerText = "hot";
      btn.classList.add("btn-hot", "text-uppercase", "w-0", "px-1", "text-white", "bg-danger", "border-0", "rounded-2", "position-absolute", "top-0", "end-0");
      console.log(btn);
      img.after(btn);
    }
  }
};

const btnHOT = document.querySelector("#btnHot");

btnHOT.addEventListener("click", () => {
  generateBtnHot(allCard);
});
