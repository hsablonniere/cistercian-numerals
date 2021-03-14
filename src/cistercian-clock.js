import { css, html, LitElement } from 'lit';
import './cistercian-number.js';

/**
 * A custom element to display a clock with cistercian numerals.
 *
 * 🎨 default CSS display: `block`
 *
 * @prop {Boolean} date - Enables displaying date (year-month-day) before displaying time.
 */
export class CistercianClock extends LitElement {

  static get properties () {
    return {
      date: { type: Boolean, reflect: true },
      noSeconds: { type: Boolean, attribute: 'no-seconds', reflect: true },
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
    this.noSeconds = false;
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
        <cistercian-number value="${this._year}"></cistercian-number>
        <cistercian-number value="${this._month}"></cistercian-number>
        <cistercian-number value="${this._day}"></cistercian-number>
      ` : ''}
      <cistercian-number value="${this._hours}"></cistercian-number>
      <cistercian-number value="${this._minutes}"></cistercian-number>
      ${!this.noSeconds ? html`
        <cistercian-number value="${this._seconds}"></cistercian-number>
      ` : ''}
    `;
  }

  static get styles () {
    return [
      // language=CSS
      css`
        :host {
          align-items: center;
          display: flex;
        }

        cistercian-number:not(:last-child) {
          margin-right: 0.1em;
        }
      `,
    ];
  }
}

window.customElements.define('cistercian-clock', CistercianClock);
