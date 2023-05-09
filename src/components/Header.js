function Header(links) {
    const header = document.createElement("header");
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo")
    const logoText = document.createElement("p");
    logoText.classList.add("logo-text");
    logoText.textContent = "Takayama";
    
    logoContainer.appendChild(logoText);
    header.appendChild(logoContainer);
    header.appendChild(HeaderNav(links))

    return header;
}

function HeaderNav(links) {
    const nav = document.createElement("nav");
    const linkList = document.createElement("ul");
    linkList.classList.add("nav-links");
    links.forEach(link => {
        linkList.appendChild(link);
    })
    nav.appendChild(linkList);
    return nav;
}

export default Header;