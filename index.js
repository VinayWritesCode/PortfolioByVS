let menuBar = ""; 

const sidebar = (x) =>{
  let sidebar = document.querySelector("#sidebar");
  if (sidebar.style.marginLeft === "0vw") {
    sidebar.style.marginLeft = "-40vw";
    x.style.display = "inline-block";
  }
  else {
    sidebar.style.marginLeft = "0vw";
    x.style.display = "none";
  }
}
const toggleMenu = (x) => {
  x.classList.toggle("change");
  menuBar = x;
  sidebar(x);
  console.log("hello, this is togglemenu");
}

const toggleMenuInside = ()=>{
  toggleMenu(menuBar);
}

