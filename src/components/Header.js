function Header() {
    const header = document.createElement("header");
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo")
    const logoText = document.createElement("p");
    logoText.classList.add("logo-text");
    logoText.textContent = "Takayama";
    
    logoContainer.appendChild(logoText);
    header.appendChild(logoContainer);
    header.appendChild(HeaderNav())

    return header;
}

function HeaderNav() {
    const temporaryLinks = ["Home", "Menu", "Contact"];
    const nav = document.createElement("nav");
    const linkList = document.createElement("ul");
    linkList.classList.add("nav-links");
    temporaryLinks.forEach(link => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<button type="button">${link}</button>`
        listItem.classList.add("header-link")
        linkList.appendChild(listItem);
    })
    nav.appendChild(linkList);
    return nav;
}

export default Header;