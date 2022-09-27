# BE - Octopath Traveler COTC Index

## Background Information - What is this project about?
Octopath Traveler is a video game that was originally released on the Nintendo Switch on July 13th 2018. It has been one of the most phenomenal JRPG games that I have been able to have ever played, and on July 27th 2022 - the prequel to the original Octopath Traveler game was released, this being "Octopath Traveler Champions Of The Continent".

Thus it is abbreviated as "Octopath COTC". This version of the game features a gacha system whereby the user is able to use ingame resources known as "Rubies" to spend and get characters.

With this in mind, the sheer amount of characters that are available in the game is absolutely abysmal and as long as the game is active, there will continue to be new additions to the games' character roster, and thus the idea for creating my own full-scale project specifically for Octopath Traveler Champions Of The Continent. 

## Problem Statement: Too Many Characters
As there are too many characters that will continue to be released as the game is on the market, I want to be able to solve the issue of being able to keep track of the characters that currently exist. 

## Solution: Scalable Character Index
The end-goal of this project is to be able to create a fully functional back-end server that will allow the user to make HTTP requests `GET/POST` to the database. Being able to get a single specific character, or get characters by their "character rarity", "affiliation" and "jobClass" will allow users to keep track of what current characters are available at the time of the database's last update.

By allowing post requests to be made, users will be able to manually insert a new character that's released into the existing `traveler-index` and later retrieve that data as well. 

This is a long-term project that is building upon the core concepts that I am learning at the [Northcoders Bootcamp](https://northcoders.com)

### Run Project Locally
If you are interested in seeing this project on your own machine, then here are a few prerequisites:
* 1 - VS Code/IDE
* 2 - Nodemon (Preferrable) - Available upon using the `npm install` command in the terminal.
* 3 - Postman/Insomnia - To make GET/POST requests to the server.

By proceeding with the following steps, you will be able to see the server in action:
* 1 - First fork this repository and use the `git clone` command and open up the folder into your VS Code or IDE of choice.
* 2 - Open up your terminal and make sure that you are currently in the correct directory - after which run the command: `npm install` - This will install the nodemon dependency.
* 3 - By entering `node server.js` or `npx nodemon server.js` you will be able to get the server up and running. (Nodemon is just a convenient package that will allow you to automatically refresh the server upon saving)
* 4 - Once the server is working and you have the "Successful connection on port 9090" then the server is up and running! 
* 5 - Now head on over to Postman/Insomnia's HTTP Client and following the steps below this, make GET requests to the currently available endpoints. 
  
### Current Available `GET` Requests
* [x] Accessing the `'/'` root directory (localhost:9090/) will return an array of every existing character currently in Octopath COTC.
* [x] Accessing the `/affiliation/wealth'` directory (localhost:9090/affiliation/wealth) will return an array of every existing character with the affiliation of "Wealth".  
* [x] Accessing the `/affiliation/fame'` directory (localhost:9090/affiliation/fame) will return an array of every existing character with the affiliation of "Fame".  
* [ ] Accessing the `/affiliation/power'` directory (localhost:9090/affiliation/power) will return an array of every existing character with the affiliation of "Power".  
  
