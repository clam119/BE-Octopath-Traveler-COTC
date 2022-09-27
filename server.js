const http = require('http')
const fs = require('fs');
const fsPromise = require('fs/promises')

const server = http.createServer((req, res) => {

    //----- GET METHODS -----//

    // 1 - GET Request - Returns JSON Of All Travelers
    if(req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let body = '';
        fsPromise.readFile(`${__dirname}/data/traveler-index.json`)
            .then((data) => {
                body+= data.toString();
                res.write(body);
                res.end();
            })
            .catch((err) => {
                if(err) console.log(err);
            })
    }

    // 2 - GET Request - Return By Affiliation: Wealth

    if(req.url === '/affiliation/wealth' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let body = '';
        fsPromise.readFile(`${__dirname}/data/traveler-index.json`)
            .then((data) => {
                const parsedData = JSON.parse(data);
                const wealthCharacters = parsedData.filter(char => char.affiliation === 'Wealth');
                body += JSON.stringify(wealthCharacters);
                fs.writeFile(`${__dirname}/data/wealthCharacters.json`, JSON.stringify(wealthCharacters), (err) => {
                    if (err) console.log(err)
                })
            .catch((err) => {
                if(err) console.log(err);
            })
                res.write(body)
                res.end();
            })
    }

    // 3 - GET Request - Return By Affiliation: Fame

    if(req.url === '/affiliation/fame' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let body = '';
        fsPromise.readFile(`${__dirname}/data/traveler-index.json`)
            .then((data) => {
                const parsedData = JSON.parse(data);
                const fameCharacters = parsedData.filter(char => char.affiliation === 'Fame');
                body += JSON.stringify(fameCharacters);
                console.log(fameCharacters)
                fs.writeFile(`${__dirname}/data/fameCharacters.json`, JSON.stringify(fameCharacters), (err) => {
                    if (err) console.log(err)
                })
            .catch((err) => {
                if(err) console.log(err)
            })
                res.write(body)
                res.end();
            })
    }




})

server.listen(9090, (err) => {
    if(err) console.log(err)
    console.log('Successful connection on port 9090!')
})