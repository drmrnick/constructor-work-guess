var keys = require('./keys.js');

var spotify = new song();

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");


if (!search) {
  search = "song";
}


if (!term) {
  term = "Never Gonna Give You Up";
}

// Print whether searching for a show or actor, print the term as well
if (search === "song") {
  console.log("Searching for a song");
  tv.findShow(term);
} else {
  console.log("Searching for artist");
}
