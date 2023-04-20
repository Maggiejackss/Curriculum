const express = require('express');

const server = express();

server.get("/mvp/years/:year", (req, res) => {
  const {year} = req.params;
  const target = mvps.filter(mvps => mvps.year === year);
  res.json(target);
})

server.get("/mvp/players/:player", (req, res) => {
  const {player} = req.params;
  const target = mvps.filter(mvps => mvps.player === player);
  res.json(target);
})

server.get('/mvps', (req, res) => {
  res.json([
    {
      "year": "2022",
      "player": "Nikola Jokic",
      "team": "Denver Nuggets"
    },
    {
      "year": "2021",
      "player": "Nikola Jokic",
      "team": "Denver Nuggets"
    },
    {
      "year": "2020",
      "player": "Giannis Antetokounmpo",
      "team": "Milwaukee Bucks"
    },
    {
      "year": "2019",
      "player": "Giannis Antetokounmpo",
      "team": "Milwaukee Bucks"
    },
    {
      "year": "2018",
      "player": "James Harden",
      "team": "Houston Rockets"
    },
    {
      "year": "2017",
      "player": "Russell Westbrook",
      "team": "Oklahoma City Thunder"
    },
    {
      "year": "2016",
      "player": "Stephen Curry",
      "team": "Golden State Warriors"
    },
    {
      "year": "2015",
      "player": "Stephen Curry",
      "team": "Golden State Warriors"
    },
    {
      "year": "2014",
      "player": "Kevin Durant",
      "team": "Oklahoma City Thunder"
    },
    {
      "year": "2013",
      "player": "LeBron James",
      "team": "Miami Heat"
    },
    {
      "year": "2012",
      "player": "LeBron James",
      "team": "Miami Heat"
    },
    {
      "year": "2011",
      "player": "Derrick Rose",
      "team": "Chicago Bulls"
    },
    {
      "year": "2010",
      "player": "LeBron James",
      "team": "Cleveland Cavaliers"
    },
    {
      "year": "2009",
      "player": "LeBron James",
      "team": "Cleveland Cavaliers"
    },
    {
      "year": "2008",
      "player": "Kobe Bryant",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "2007",
      "player": "Dirk Nowitzki",
      "team": "Dallas MAvericks"
    },
    {
      "year": "2006",
      "player": "Steve Nash",
      "team": "Phoenix Suns"
    },
    {
      "year": "2004",
      "player": "Kevin Garnett",
      "team": "Minnesota Timberwolves"
    },
    {
      "year": "2003",
      "player": "Tim Duncan",
      "team": "San Antonio Spurs"
    },
    {
      "year": "2002",
      "player": "Tim Duncan",
      "team": "San Antonio Spurs"
    },
    {
      "year": "2001",
      "player": "Allen Iverson",
      "team": "Philadelphia 76ers"
    },
    {
      "year": "2000",
      "player": "Shaquille O'Neal",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1999",
      "player": "Karl Malone",
      "team": "Utah Jazz"
    },
    {
      "year": "1998",
      "player": "Michael Jordan",
      "team": "Chicago Bulls"
    },
    {
      "year": "1997",
      "player": "Karl Malones",
      "team": "Utah Jazz"
    },
    {
      "year": "1996",
      "player": "Michael Jordan",
      "team": "Chicago Bulls"
    },
    {
      "year": "1995",
      "player": "David Robinson",
      "team": "San Antonio Spurs"
    },
    {
      "year": "1994",
      "player": "Hakeem Olajuwon",
      "team": "Houston Rockets"
    },
    {
      "year": "1993",
      "player": "Charles Barkley",
      "team": "Phoenix Suns"
    },
    {
      "year": "1992",
      "player": "Michael Jordan",
      "team": "Chicago Bulls"
    },
    {
      "year": "1991",
      "player": "Michael Jordan",
      "team": "Chicago Bulls"
    },
    {
      "year": "1990",
      "player": "Magic Johnson",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1989",
      "player": "Magic Johnson",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1988",
      "player": "Michael Jordan",
      "team": "Chicago Bulls"
    },
    {
      "year": "1987",
      "player": "Magic Johnson",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1986",
      "player": "Larry Bird",
      "team": "Boston Celtics"
    },
    {
      "year": "1985",
      "player": "Larry Bird",
      "team": "Boston Celtics"
    },
    {
      "year": "1984",
      "player": "Larry Bird",
      "team": "Boston Celtics"
    },
    {
      "year": "1983",
      "player": "Moses Malone",
      "team": "Philadelphia 76ers"
    },
    {
      "year": "1982",
      "player": "Moses Malone",
      "team": "Houston Rockets"
    },
    {
      "year": "1981",
      "player": "Julius Erving",
      "team": "Philadelphia 76ers"
    },
    {
      "year": "1980",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1979",
      "player": "Moses Malone",
      "team": "Houston Rockets"
    },
    {
      "year": "1978",
      "player": "Bill Walton",
      "team": "Portland Trail Blazers"
    },
    {
      "year": "1977",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1977",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1976",
      "player": "Kareem Abdul-Jabbar",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1975",
      "player": "Bob McAdoo",
      "team": "Buffalo Braves"
    },
    {
      "year": "1974",
      "player": "Kareem Abdul-Jabbar",
      "team": "Milwaukee Bucks"
    },
    {
      "year": "1973",
      "player": "David Cowens",
      "team": "Boston Celtics"
    },
    {
      "year": "1972",
      "player": "Kareem Abdul-Jabbar",
      "team": "Milwaukee Bucks"
    },
    {
      "year": "1971",
      "player": "Kareem Abdul-Jabbar",
      "team": "Milwaukee Bucks"
    },
    {
      "year": "1970",
      "player": "Willis Reed",
      "team": "Los Angeles Lakers"
    },
    {
      "year": "1969",
      "player": "Westley Unseld",
      "team": "Baltimore Bullets"
    },
    {
      "year": "1968",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia 76ers"
    },
    {
      "year": "1967",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia 76ers"
    },
    {
      "year": "1966",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia 76ers"
    },
    {
      "year": "1965",
      "player": "Bill Russell",
      "team": "Boston Celtics"
    },
    {
      "year": "1964",
      "player": "Oscar Robertson",
      "team": "Cincinatti Royals"
    },
    {
      "year": "1963",
      "player": "Bill Russell",
      "team": "Boston Celtics"
    },
    {
      "year": "1962",
      "player": "Bill Russell",
      "team": "Boston Celtics"
    },
    {
      "year": "1961",
      "player": "Bill Russell",
      "team": "Boston Celtics"
    },
    {
      "year": "1960",
      "player": "Wilt Chamberlain",
      "team": "Philadelphia Warriors"
    },
    {
      "year": "1959",
      "player": "Bob Pettit",
      "team": "St. Louis Hawks"
    },
    {
      "year": "1958",
      "player": "Bill Russell",
      "team": "Boston Celtics"
    },
    {
      "year": "1957",
      "player": "Bob Cousy",
      "team": "Boston Celtics"
    },
    {
      "year": "1956",
      "player": "Bob Pettit",
      "team": "Boston Celtics"
    }
])
})


server.listen(8080, () => {
  console.log('the server is running at PORT 8080');
})


