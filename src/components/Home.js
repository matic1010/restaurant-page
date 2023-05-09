export default function Home() {
  const homeContainer = document.createElement("main");
  const homeInfo = document.createElement("div")
  homeInfo.classList.add("info");
  const homeText = document.createElement("p");
  homeText.textContent = "Enoy the freshest coffe, roasted in house and prepared by our expert baristas";
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("home-image");
  homeInfo.appendChild(homeText);
  homeInfo.appendChild(imageContainer);
  const bottomText = document.createElement("p");
  bottomText.textContent = "Pay us a visit or order our freshly roasted beans here!";
  homeInfo.appendChild(bottomText)
  homeContainer.appendChild(homeInfo);

  return homeContainer;
}