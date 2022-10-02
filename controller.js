import { 
readAllTravelers, 
readAllWealth,
readAllFame,
readAllPower 
} from './models.js';

// 1 - Fetches All Traveler Data
export const fetchAllTravelers = (req, res) => {
    readAllTravelers()
    .then(data => {
        res.status(200).send(data);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}

// 2 - Fetches All Travelers /w Wealth Affiliation
export const fetchAllWealth = (req, res) => {
    readAllWealth()
    .then(data => {
        res.status(200).send(data);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}

// 3 - Fetches All Travelers /w Fame Affiliation
export const fetchAllFame = (req, res) => {
    readAllFame()
    .then(data => {
        res.status(200).send(data);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}

// 4 - Fetches All Travelers /w Power Affiliation
export const fetchAllPower = (req, res) => {
    readAllPower()
    .then(data => {
        res.status(200).send(data);
    })
    .catch((err) => {
        if(err) console.log(err);
    })
}
