# Cicstercian numerals components

A collection of web components to display cistercian numerals.

## `<cistercian-number>`

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

## `<cistercian-clock>`

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
