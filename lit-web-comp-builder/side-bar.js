import {LitElement, html, css} from 'lit';

export class SideBar extends LitElement {
  static properties = {
    homeLink: "",
    calendarLink: "",
    personLink: ""
  };

  static get styles() {
    return css`
      :host {
        position: fixed;
      }

      .container {
        /* Layout Properties */
        position: absolute;
        top: 52px;
        left: 0px;
        width: 50px;
        height: 708px;
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
        color: white;
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
        color: white;
      }

      #personIcon {
        /* Layout Properties */
        position: absolute;
        top: 246px;
        left: 10px;
        width: 30px;
        height: 30px;
        /* UI Properties */
        opacity: 1;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <a href=${this.homeLink}>
          <svg id="homeIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
          </svg>
        </a>

        <a href=${this.calendarLink}>
          <svg id="calendarIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
        </a>

        <a href=${this.personLink}>
          <svg id="personIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </a>
      </div>
      
    `;
  }
}

window.customElements.define('side-bar', SideBar);
 