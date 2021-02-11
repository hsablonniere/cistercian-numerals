import { css, LitElement, svg } from 'lit-element';

/**
 * TODO DOCS
 */
export class CistercianNb extends LitElement {

  static get properties () {
    return {
      nb: { type: Number },
    };
  }

  constructor () {
    super();
    this.nb = 0;
  }

  _renderPart (nb) {

    // https://en.wikipedia.org/wiki/File:Cistercian_digits_(vertical).svg
    const state1 = [1, 5, 7, 9].includes(nb) ? '' : 'closed';
    const state2 = [3].includes(nb) ? '' : 'closed';
    const state3 = [2, 8, 9].includes(nb) ? '' : 'closed';
    const state4 = [4, 5].includes(nb) ? '' : 'closed';
    const state5 = [6, 7, 8, 9].includes(nb) ? '' : 'closed';

    return svg`
      <line class="line line-1 ${state1} short" x1="11" y1="1" x2="21" y2="1" />
      <line class="line line-2 ${state2} long" x1="11" y1="1" x2="21" y2="11" />
      <line class="line line-3 ${state3} short" x1="11" y1="11" x2="21" y2="11" />
      <line class="line line-4 ${state4} long" x1="11" y1="11" x2="21" y2="1" />
      <line class="line line-5 ${state5}" x1="21" y1="1" x2="21" y2="11" />
    `;
  }

  render () {

    const units = Array
      .from(new Array(4))
      .map(($, i) => Math.floor(this.nb / 10 ** i) % 10);

    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32">
        <g class="unit unit-0">${this._renderPart(units[0])}</g>
        <g class="unit unit-1">${this._renderPart(units[1])}</g>
        <g class="unit unit-2">${this._renderPart(units[2])}</g>
        <g class="unit unit-3">${this._renderPart(units[3])}</g>
        <line x1="11" y1="1" x2="11" y2="31" />
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

        svg {
          height: 100%;
          width: 100%;
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
          stroke-width: 1px;
          stroke: #000;
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
      `,
    ];
  }
}

window.customElements.define('cistercian-nb', CistercianNb);
