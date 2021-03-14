import { css, LitElement, svg } from 'lit';

/**
 * A custom element to display a number with cistercian numerals.
 *
 * 🎨 default CSS display: `block`
 *
 * @prop {Boolean} inline - Tries to size and align the number with the text around.
 * @prop {Number} value - Sets the value of the number to display (between 0-9999).
 *
 * @cssprop {Color} --cistercian-color-0 - Color of the center line (always displayed).
 * @cssprop {Color} --cistercian-color-1 - Color of the top line.
 * @cssprop {Color} --cistercian-color-2 - Color of the oblique NW-SE line.
 * @cssprop {Color} --cistercian-color-3 - Color of the bottom line.
 * @cssprop {Color} --cistercian-color-4 - Color of the oblique NE-SW line.
 * @cssprop {Color} --cistercian-color-5 - Color of the right line.
 * @cssprop {Width} --cistercian-width - Width of the line.
 */
export class CistercianNumber extends LitElement {

  static get properties () {
    return {
      value: { type: Number },
    };
  }

  constructor () {
    super();
    this.value = 0;
  }

  _renderZone (nb) {

    // https://en.wikipedia.org/wiki/File:Cistercian_digits_(vertical).svg
    const state1 = [1, 5, 7, 9].includes(nb) ? '' : 'closed';
    const state2 = [3].includes(nb) ? '' : 'closed';
    const state3 = [2, 8, 9].includes(nb) ? '' : 'closed';
    const state4 = [4, 5].includes(nb) ? '' : 'closed';
    const state5 = [6, 7, 8, 9].includes(nb) ? '' : 'closed';

    return svg`
      <line class="line line-1 ${state1} short" x1="12" y1="2" x2="22" y2="2" />
      <line class="line line-2 ${state2} long" x1="12" y1="2" x2="22" y2="12" />
      <line class="line line-3 ${state3} short" x1="12" y1="12" x2="22" y2="12" />
      <line class="line line-4 ${state4} long" x1="12" y1="12" x2="22" y2="2" />
      <line class="line line-5 ${state5}" x1="22" y1="2" x2="22" y2="12" />
    `;
  }

  render () {

    const units = Array
      .from(new Array(4))
      .map(($, i) => Math.floor(this.value / 10 ** i) % 10);

    // https://css-tricks.com/accessible-svgs/
    // TODO: test and ask around about the a11y
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34"
       aria-labelledby="title" role="img">
        <title id="title">${this.value}</title>
        <g class="unit unit-0">${this._renderZone(units[0])}</g>
        <g class="unit unit-1">${this._renderZone(units[1])}</g>
        <g class="unit unit-2">${this._renderZone(units[2])}</g>
        <g class="unit unit-3">${this._renderZone(units[3])}</g>
        <line x1="12" y1="2" x2="12" y2="32" />
      </svg>
    `;
  }

  static get styles () {
    return [
      // language=CSS
      css`
        :host {
          display: block;
        }
        
        :host([inline]) {
          display: inline-block;
        }

        svg {
          display: block;
          height: 1em;
          width: auto;
        }

        :host([inline]) svg {
          display: block;
          /* Those magic numbers are an attempt at aligning the number with some japanese katakana (as a reference) */
          height: 0.9em;
          margin-bottom: -0.1em;
        }

        .unit {
          transform-origin: center center;
        }

        .unit-1 {
          transform: scale(-1, 1);
        }

        .unit-2 {
          transform: scale(1, -1);
        }

        .unit-3 {
          transform: scale(-1, -1);
        }

        line {
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: var(--cistercian-width, 3px);
          stroke: var(--cistercian-color-0, currentColor);
          transition: 150ms all ease-in-out;
        }

        .short {
          --lg: 10;
        }

        .long {
          --lg: 15;
        }

        .short,
        .long {
          stroke-dasharray: var(--lg) var(--lg);
          stroke-dashoffset: 0;
        }

        .short.closed,
        .long.closed {
          stroke-dashoffset: var(--lg);
        }

        .line-5.closed {
          transform: translateX(-10px);
        }

        .line-1 {
          stroke: var(--cistercian-color-1, currentColor);
        }

        .line-2 {
          stroke: var(--cistercian-color-2, currentColor);
        }

        .line-3 {
          stroke: var(--cistercian-color-3, currentColor);
        }

        .line-4 {
          stroke: var(--cistercian-color-4, currentColor);
        }

        .line-5 {
          stroke: var(--cistercian-color-5, currentColor);
        }
      `,
    ];
  }
}

window.customElements.define('cistercian-number', CistercianNumber);
