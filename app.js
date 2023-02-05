const items = [
    {
        img: "images/img-1.png",
        id: "1"
    },
    {
        img: "images/img-2.png",
        id: "2"
    },
    {
        img: "images/img-3.png",
        id: "3"
    },
]

const buttons = document.querySelectorAll(".controls a");
const image = document.querySelector(".hero img");
const searchIcon = document.querySelector(".search i");
const search = document.querySelector(".search");
const input = document.querySelector(".search input");

  
  // changing images as slide 
  let i = 0;
  const buttonsArray = [...buttons];
  let interval = setInterval(() => {
    secondDelay();
  }, 7000);
  
  function firstDelay() {
      setInterval(() => {
          image.setAttribute("src", `${items[i].img}`);
          buttonsArray[i].classList.add("active");
        }, 7000);
  }
  
  function secondDelay() {
      firstDelay();
      buttonsArray[i].classList.remove("active");
    i++;
    if(i === items.length) {
      i = 0;
    }
  }

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        buttons.forEach(button => {
            button.classList.remove("active");
        })
        let element = e.target;
        let id = element.dataset.id;
        let item = items.find(obj => obj.id === id);
        image.setAttribute("src", `${item.img}`);
        element.classList.add("active");
        clearInterval(interval);
       
    })
})

//search input
searchIcon.addEventListener("click", e => {
    search.classList.add("show");
    input.classList.add("show");
    e.target.previousElementSibling.focus();
  })
  search.addEventListener("focusout", () => {
      input.classList.remove("show");
      search.classList.remove("show");
  })


