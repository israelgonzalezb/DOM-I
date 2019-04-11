const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navLinks = document.querySelectorAll('a'); 
for(let i = 1;i<7;i++){
  navLinks[i-1].textContent = siteContent["nav"]["nav-item-"+i];
}

let ctaContent = Object.keys(siteContent["cta"]);
for(let i = 0;i<ctaContent.length;i++){
  let tag = document.querySelector(ctaContent[i]);
  (tag !== null) ? (tag.textContent = siteContent["cta"][ctaContent[i]]) : (false);
}

// main content selectors
let textContent = document.querySelectorAll(".text-content");
let mainContentKeys = Object.keys(siteContent["main-content"]);

let h4Content = mainContentKeys.filter( (x) => x.search("h4") > -1 );
let h4Elements = document.querySelectorAll("h4");
for (let i = 0; i < h4Elements.length; i++){
  h4Elements[i].textContent = siteContent["main-content"][h4Content[i]];
}

let mainPContent = mainContentKeys.filter( (x) => x.search("content") > -1 );
let mainPElements = document.querySelectorAll(".main-content p");
for (let i = 0; i < mainPElements.length; i++){
  mainPElements[i].textContent = siteContent["main-content"][mainPContent[i]];
}

// contact selectors
let contactKeys = Object.keys(siteContent.contact);
let contactNodes = document.querySelector(".contact").children;
let contactNodesArray = Array.from(contactNodes);
for (let i = 0; i < contactNodesArray.length; i++){
  contactNodesArray[i].textContent = siteContent["contact"][contactKeys[i]];
}

// footer selector
document.querySelector("footer").children[0].textContent=siteContent["footer"]["copyright"];


// prepend item to nav bar
let howdy = document.createElement("a");
howdy.textContent="Howdy"
howdy.style.color="green";
howdy.setAttribute("src","#")
document.querySelector("nav").prepend(howdy);

// append item to nav bar
let hola = document.createElement("a");
hola.textContent="Hola"
hola.style.color="green";
hola.setAttribute("src","#")
document.querySelector("nav").appendChild(hola);

// green nav text

navLinks.forEach(x=>x.style.color="green");



// set random color to p elements
let tieDye = () => {
  let randomColor = x => {
    let arr = [];
    let rgbToHex = function (rgb) { 
      let hex = Number(rgb).toString(16);
      if (hex.length < 2) {
         hex = "0" + hex;
      }
        return hex;
      };
    for(let i =0;i<3;i++){
      arr.push(rgbToHex(Math.floor(Math.random() * (255 - 16 + 1)) + 16));
    }
    return "#"+arr.join("");
  }
  let allPElements = document.querySelectorAll("p");
  allPElements.forEach( x => x.style.setProperty("color",randomColor()));
}

// event... on button click make background tie dye



let button = document.querySelector("button");
button.addEventListener("click",(x)=>{
  document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/e/e1/Tie-dye.png')";
  document.body.style.color="white";
  document.querySelector("h1").textContent = "'Muddy water is best cleared by leaving it alone.' – Alan Watts."
  headerImg.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Enso.svg/379px-Enso.svg.png");
  tieDye();
});