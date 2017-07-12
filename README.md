# Freemail-Webpack

This is a webpack compatible version of [freemail](https://github.com/willwhite/freemail)

A database of free and [disposable](http://en.wikipedia.org/wiki/Disposable_email_address)
email domains and a handy Webpack module for querying it.


### Install

```
npm install --save freemail-webpack
```

```javascript
import freemail from 'freemail-webpack';

freemail.isFree('smith@gmail.com');
> true
freemail.isFree('jack@mailinator.com');
> true
freemail.isDisposable('smith@gmail.com');
> false
freemail.isDisposable('jack@mailinator.com');
> true

```