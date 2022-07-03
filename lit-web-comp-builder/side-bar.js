import {LitElement, html, css} from 'lit';

export class SideBar extends LitElement {
  static properties = {
    homeLink: "",
    calendarLink: ""
  };

  static get styles() {
    return css`
      :host {
        position: fixed;
      }

      .container {
        /* Layout Properties */
        /* float: left; */
        top: 60px;
        left: 0px;
        width: 50px;
        height: 708px;
        /* transform: matrix(0, 1, -1, 0, 0, 0); */
        /* UI Properties */
        background: #2E308E 0% 0% no-repeat padding-box;
        opacity: 1;
      }

      #homeIcon {
        /* Layout Properties */
        position: absolute;
        top: 128px;
        left: 10px;
        width: 30px;
        height: 30px;
        /* UI Properties */
        opacity: 1;
      }

      #calendarIcon {
        /* Layout Properties */
        position: absolute;
        top: 187px;
        left: 10px;
        width: 30px;
        height: 30px;
        /* UI Properties */
        opacity: 1;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <h1 id="homeIcon"><a href=${this.homeLink}>H</a></h1>
        <h1 id="calendarIcon"><a href=${this.calendarLink}>C</a></h1>
      </div>
      
    `;
  }
}

window.customElements.define('side-bar', SideBar);
 