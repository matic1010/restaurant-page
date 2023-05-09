import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./style.css";

const contentContainer = document.getElementById("content");

contentContainer.appendChild(Header())
contentContainer.append(Home())
contentContainer.append(Footer())