# Cicstercian numerals components

A collection of web components to display [cistercian numerals](https://en.wikipedia.org/wiki/Cistercian_numerals).

## Usage (or install)

You can directly load these components in your web page using a smart CDN like [jspm](https://jspm.org/), [unpkg](https://unpkg.com/) or [Skypack](https://www.skypack.dev/).

⚠️ WARNING: Remember that you need to trust this project *AND* those smart CDNs before loading some third party code like that.

### Load from jspm

To load the components from jspm, add this to your `<head>`:

```html
<script type="module" src="https://unpkg.com/cistercian-numerals"></script>
```

### Load from unpkg

To load the components from unpkg, add this to your `<head>`:

```html
<script type="module" src="https://cdn.skypack.dev/cistercian-numerals"></script>
```

### Load from skypack

To load the components from skypack, add this to your `<head>`:

```html
<script type="module" src="https://jspm.dev/cistercian-numerals"></script>
```

### Install from npm

You can also install the components in your project with npm:

```bash
npm install cistercian-numerals
```

Then, you will need to import the file in your source:

```js
import 'cistercian-numerals'
```

You will need some kind of bundler or equivalent tool to resolve the bare identifier `cistercian-numerals` to a local file.

## Components

### `<cistercian-number>`

This component displays one number with cistercian numerals.

Use the `value` attribute to specify the number you want to display:

```html
<cistercian-number value="1972"></cistercian-number>
```

By default, it will display the image as a block.
If you want to display the number inside a paragraph of text, use the `inline` attribute. It should be sized and aligned correctly with the text:

```html
Some text <cistercian-number value="1972" inline></cistercian-number> around the number.
```

By default, the line use the same color as the text.
You can adjust the colors of the different lines with CSS custom properties:

```css
cistercian-number {
  --cistercian-color-0: #00000000; /* Color of the center line (always displayed) */
  --cistercian-color-1: #0019a7dd; /* Color of the top line */
  --cistercian-color-2: #751056dd; /* Color of the oblique NW-SE line */
  --cistercian-color-3: #007229dd; /* Color of the bottom line */
  --cistercian-color-4: #db241fdd; /* Color of the oblique NE-SW line */
  --cistercian-color-5: #fdcd01dd; /* Color of the right line */
}
```

You can also adjut the width of the lines.
Use a pixel value between `1px and 3px`.

```css
cistercian-number {
  --cistercian-width: 2px;
}
```

By default, the height of a number is `1em`.
You can of course adjust this by changing the font-size:

```css
cistercian-number {
  font-size: 10em;
}
```

### `<cistercian-clock>`

This component displays a live clock using cistercian numerals.

If you just want to display the current time (hours, minutes, seconds):

```html
<cistercian-clock></cistercian-clock>
```

If you just want to display the current time but without seconds (hours, minutes):

```html
<cistercian-clock no-seconds></cistercian-clock>
```

If you just want to display the current date and time (year, month, day, hours, minutes, seconds):

```html
<cistercian-clock date></cistercian-clock>
```

## About this project

Back in January 2021, I saw a tweet talking about [cistercian numerals](https://en.wikipedia.org/wiki/Cistercian_numerals).
I was very intrigued.

A week later, I saw someone who made a React component for it: https://twitter.com/aqandrew/status/1349762018639638528

I thought it would be a fun side projet to create a web component for this and then reuse the single number component to create a clock.
I took this opportunity to try Twitch and wrote the code for the first version live with some help from the chat.
At the end of the stream, the component was mostly working but no animation and the design was a bit clunky.
I improved it over the next few weeks.

Since then, I saw a few fun projects with cistercian numerals:

* Clairvo, a proof-of-concept font that uses OpenType Layout to implement cistercian numerals: https://github.com/TiroTypeworks/Clairvo
* Cistercian SVG by Adrian Roselli: https://adrianroselli.com/2021/02/cistercian-svg.html
* React based experiment by Maciej Ziarkowski: https://mz8i.com/cistercian
