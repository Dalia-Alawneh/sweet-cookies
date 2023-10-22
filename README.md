
# Sweet Cookies

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Dalia-Alawneh/sweet-cookies/main/LICENSE)

Sweet Cookies is a lightweight JavaScript library for handling cookies in the browser. It provides a simple and efficient way to set, get, and remove cookies, making it convenient for storing small pieces of information on the client-side.

## Features

- **Simplicity**: Easy-to-use API for managing cookies.
- **Lightweight**: A small library with no external dependencies.
- **Cross-browser Support**: Works in modern browsers.
- **Expiration and Options**: Set cookies with expiration date and additional options.

## Installation

Include the script directly in your HTML:

```html
<script src="path/to/sweet-cookies.js"></script>
```

## Usage

To use Sweet Cookies, include it in your project and access its methods via the `SweetCookie` object.

### Set a Cookie with Expiration Time

```javascript
// Set a cookie that expires in 1 day
SweetCookie.set('name', 'dalia', '1d');
```

### Get a Cookie

```javascript
const name = SweetCookie.get('name');
console.log(name);
```

### Remove a Cookie

```javascript
SweetCookie.remove('name');
```

## API Reference

### `SweetCookie.set(name, value, expiresIn)`

Set a cookie with the given `name` and `value`. The `expiresIn` parameter accepts a string with time format in 's' (seconds), 'm' (minutes), 'h' (hours), or 'd' (days).

Example usage: `SweetCookie.set('name', 'dalia', '1d');;`

### `SweetCookie.get(name)`

Retrieve the value of the cookie with the specified `name`. If the cookie does not exist, it returns `null`.

Example usage: `const name = SweetCookie.get('name');`

### `SweetCookie.remove(name)`

Remove the cookie with the given `name`.

Example usage: `SweetCookie.remove('name');`

## License

This project is licensed under the [MIT License](https://github.com/YourUsername/sweet-cookies/blob/main/LICENSE).

---
