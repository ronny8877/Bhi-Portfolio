//Navbar web component
let bhiNavBar = document.createElement("template");

bhiNavBar.innerHTML = `
 <style>
        .navbar{
            background-color: #1d1d1d;
            color: #fff;
            padding: 10px;
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px 0px 10px #000;
        }
        .navbar a{
            color: #fff;
            text-decoration: none;
        }
        .navbar a:hover{
            text-decoration: underline;
        }
        </style>
        <div class="navbar">
            <a href="#">Home</a>
            <a href="#">Socials</a>
            <a href="#">Select Bhi</a>
        </div>
`;
class Navbar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(bhiNavBar.content.cloneNode(true));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		//reactive code here
	}
}
customElements.define("bhi-navbar", Navbar);
