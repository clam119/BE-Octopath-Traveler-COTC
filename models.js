import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1 - Reads All Traveler Data & Returns All Data In JSON
export const readAllTravelers = () => {
    return fs.readFile(`${__dirname}/data/traveler-index.json`)
    .then((data) => {
        const stringData = data.toString();
        const parsedData = JSON.parse(stringData);
        return JSON.stringify(parsedData, null, 2);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}

// 2 - Reads All Traveler Data & Returns Only Wealth Travelers in JSON
export const readAllWealth = () => {
    return fs.readFile(`${__dirname}/data/traveler-index.json`)
    .then((data) => {
        const parsedData = JSON.parse(data);
        const wealthCharacters = parsedData.filter(char => char.affiliation === 'Wealth');
        return JSON.stringify(wealthCharacters, null, 2);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}

// 3 - Reads All Traveler Data & Returns Only Fame Travelers in JSON
export const readAllFame = () => {
    return fs.readFile(`${__dirname}/data/traveler-index.json`)
    .then((data) => {
        const parsedData = JSON.parse(data);
        const fameCharacters = parsedData.filter(char => char.affiliation === 'Fame');
        return JSON.stringify(fameCharacters, null, 2);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}

// 4 - Reads All Traveler Data & Returns Only Power Travelers in JSON
export const readAllPower = () => {
    return fs.readFile(`${__dirname}/data/traveler-index.json`)
    .then((data) => {
        const parsedData = JSON.parse(data);
        const powerCharacters = parsedData.filter(char => char.affiliation === 'Power');
        return JSON.stringify(powerCharacters, null, 2);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}