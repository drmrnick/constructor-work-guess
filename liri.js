const inquirer = require("inquirer");
const keys = require('./keys.js');
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

axios.get("https://rest.bandsintown.com/artists/ + artist + ")

inquirer
  .prompt([
    {
      name: "search",
      message: "Are you search for a song or an artist?",
      type: "list",
      choices: ["Song", "Artist"]
    },
    {
      name: "term",
      message: "Enter your search:",
      default: "Never Gonna Give You Up"
    }
  ])
  .then(function(answer) {
    if (answer.search === "song") {
      songs.findSong(answer.term);
    } else {
      songs.findArtist(answer.term);
    }
  });













