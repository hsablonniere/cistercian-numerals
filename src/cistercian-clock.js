import { css, html, LitElement } from 'lit';
import './cistercian-nb.js';

/**
 * TODO DOCS
 */
export class CistercianClock extends LitElement {

  static get properties () {
    return {
      date: { type: Boolean, reflect: true },
      _year: { type: Number },
      _month: { type: Number },
      _day: { type: Number },
      _hours: { type: Number },
      _minutes: { type: Number },
      _seconds: { type: Number },
    };
  }

  constructor () {
    super();
    this.date = false;
  }

  connectedCallback () {
    super.connectedCallback();
    this._id = setInterval(() => {
      const currentDatetime = new Date();
      this._year = currentDatetime.getFullYear();
      this._month = currentDatetime.getMonth() + 1;
      this._day = currentDatetime.getDate();
      this._hours = currentDatetime.getHours();
      this._minutes = currentDatetime.getMinutes();
      this._seconds = currentDatetime.getSeconds();
    }, 500);
  }

  disconnectedCallback () {
    super.disconnectedCallback();
    clearInterval(this._id);
  }

  render () {
    return html`
      ${this.date ? html`
        <cistercian-nb nb="${this._year}"></cistercian-nb>
        <cistercian-nb nb="${this._month}"></cistercian-nb>
        <cistercian-nb nb="${this._day}"></cistercian-nb>
      ` : ''}
      <cistercian-nb nb="${this._hours}"></cistercian-nb>
      <cistercian-nb nb="${this._minutes}"></cistercian-nb>
      <cistercian-nb nb="${this._seconds}"></cistercian-nb>
    `;
  }

  static get styles () {
    return [
      // language=CSS
      css`
        :host {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        :host([date]) {
          grid-template-columns: repeat(6, 1fr);
        }
      `,
    ];
  }
}

window.customElements.define('cistercian-clock', CistercianClock);
