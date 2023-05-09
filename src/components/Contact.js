export default function Contact(){
  const contactContainer = document.createElement("main");
  const contactInfo = document.createElement("div")
  contactInfo.classList.add("info");
  const contactText = document.createElement("p");
  contactText.textContent = "This is the contact page";
  contactInfo.appendChild(contactText);
  contactContainer.appendChild(contactInfo);

  return contactContainer;
}