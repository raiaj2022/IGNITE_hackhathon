import {LitElement, html, css} from 'lit';

export class SideBar extends LitElement {
  static get styles() {
    return css`
      .mainContainer {
        float: right;
        top: 60px;
        left: 0px;
        width: 1366px;
        height: 708px;
        background: #D0D0CE33 0% 0% no-repeat padding-box;
        opacity: 1;
      }

      .container {
        /* Layout Properties */
        float: left;
        top: 60px;
        left: 0px;
        width: 50px;
        height: 708px;
        transform: matrix(0, 1, -1, 0, 0, 0);
        /* UI Properties */
        background: #2E308E 0% 0% no-repeat padding-box;
        opacity: 1;
      }
    `;
  }

  static get properties() {
    return {
      /**
      * The name to say "Hello" to.
      * @type {string}
      */
      name: {type: String},

      /**
      * The number of times the button has been clicked.
      * @type {number}
      */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
    <div class="mainContainer">
      <div class="container">
        <slot></slot>
      </div>
    </div>
      
    `;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
  * Formats a greeting
  * @param name {string} The name to say "Hello" to
  * @returns {string} A greeting directed at `name`
  */
  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define('side-bar', SideBar);
 