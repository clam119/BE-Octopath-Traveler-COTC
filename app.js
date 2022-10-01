import express from 'express';
import { 
fetchAllTravelers, 
fetchAllWealth, 
fetchAllFame, 
fetchAllPower 
} from './controller.js';

const app = express();
app.use(express.json());

// 1 - GET Request - Return JSON Of All Travelers
app.get('/', fetchAllTravelers);

// 2 - GET Request - Return Wealth Affiliated Travelers
app.get('/affiliation/wealth', fetchAllWealth);

// 3 - GET Request - Return Fame Affiliated Travelers
app.get('/affiliation/Fame', fetchAllFame);

// 4 - GET Request - Return Power Affiliated Travelers
app.get('/affiliation/Power', fetchAllPower);
export default app;