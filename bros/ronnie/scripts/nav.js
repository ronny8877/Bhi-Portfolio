//Navbar web component
let ronnieNavbar = document.createElement("template");

ronnieNavbar.innerHTML = `
<style>
:host {
  --primary-color: #185ee0;
  --secondary-color: #e6eef9;
}
*, *:after, *:before {
  box-sizing: border-box;
}

.container {
  position: absolute;
  left: 0;
bottom:0;  
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.75rem;
  border-radius: 99px;
}
.tabs * {
  z-index: 2;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  color: var(--primary-color);
}
input[type="radio"]:checked + label > .notification {
  background-color: var(--primary-color);
  color: #fff;
}
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}
input[id="radio-1"]:checked ~ .glider {
  transform: translateX(0);
}
input[id="radio-2"]:checked ~ .glider {
  transform: translateX(100%);
}
input[id="radio-3"]:checked ~ .glider {
  transform: translateX(200%);
}
.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: var(--secondary-color);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}
@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}

</style>

<div class="container">
	<div class="tabs">
		<input type="radio" id="radio-1" name="tabs" checked />
		<label class="tab" for="radio-1">Home</label>
		<input type="radio" id="radio-2" name="tabs" checked />
		<label class="tab" for="radio-2">About</label>
		<input type="radio" id="radio-3" name="tabs" checked />
		<label class="tab" for="radio-3">Contact Us</label>
		<span class="glider"></span>
	</div>
</div>
`;
class Navbar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(ronnieNavbar.content.cloneNode(true));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		//reactive code here
	}
}
customElements.define("bhi-navbar-r", Navbar);
