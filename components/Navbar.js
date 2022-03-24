//Navbar web component
let bhiNavBar = document.createElement("template");

bhiNavBar.innerHTML = `
 <style>
    :host {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        border-radius: 0 5rem 0 0;
        height: 60px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
</style>
<nav class="container">
	<div class="tabs">
		<input type="radio" id="radio-1" name="tabs" checked />
		<label class="tab" for="radio-1">Home</label>
		<input type="radio" id="radio-2" name="tabs" checked />
		<label class="tab" for="radio-2">About</label>
		<input type="radio" id="radio-3" name="tabs" checked />
		<label class="tab" for="radio-3">Contact Us</label>
		<span class="glider"></span>
	</div>
</nav>

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
