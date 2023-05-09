import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./style.css";

const contentContainer = document.getElementById("content");
const headerLinks = ["Home", "Menu", "Contact"];

function renderHeaderLinks() {
  return headerLinks.map(link => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<button type="button">${link}</button>`
    listItem.classList.add("header-link")
    listItem.addEventListener("click", (e) => {
        renderPage(e.target.textContent);
    })
    return listItem;
})
}

function renderPage(title = "Home") {
  contentContainer.innerHTML = "";
  contentContainer.appendChild(Header(renderHeaderLinks()))
  if(title === "Contact") {
    contentContainer.appendChild(Contact());
  } else {
    contentContainer.appendChild(Home())
  }
  contentContainer.appendChild(Footer())
}

renderPage();