Intro to SQL
===

## SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table
* [ ] Perform CRUD actions across related tables

## Outline
* 15 mins: discussion of databases and SQL
* 30 mins: look at a SQL database and write some SQL

## Key Questions
* What can I do with data?
- derive insight, analzye
- query (read) manipulate (create update delete)

* Why is persistence important? How have we been persisting data so far?
- saving as a variable, an array, @@all
  - it only exists while running the program (ephemeral)
  - not safe (easy to get deleted or accidentally altered)
  - not efficient
  - doesn't scale

* What is a (relational) database?
- excel spreadsheets, different tables that are related using id primary key and foreign keys

* What kinds of databases are there?
- SQL (relational) -> SQLite, MySQL, MSSQL Server, Postgresql
- NoSQL -> Mongo Db (document database), redis (key-value), GraphQL

* What is SQL?
Structured Query Language
declarative language

* What is CRUD?
Create
Read
Update
Delete

* How does an app like Slack use CRUD?
Create - creating new users, create a channel, writing a message
Read - reading messages in a channel, searching for a message
Update - change your user profile, update a channel description, user settings (notifications, etc), messages
Delete - delete a message (with regret), delete your profile (delete users)

* How can we establish relationships between a Tweet and a User in our Twitter example?

Tweet >- User

**users**
| *id* | *username*   | *bio*                     | 
| 1    | "coffee_dad" | "just a coffee lovin dad" |
| 2    | "tea_mom"    | "tea > coffee"            |

**tweets**
| *id* | *message*         | *user_id* |
| 1    | "havin #a coffee" | 1         |
| 2    | "java time"       | 1         |
| 3    | "T for me"        | 2         |

Game -< Review >- Player

reviews: game_id, player_id

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the games table
```sql
SELECT *
FROM games;
```

2. Write the SQL to select the game with the title "Mario Kart 64"
```sql
SELECT *
FROM games
WHERE title = "Mario Kart 64";
```

  2a. Change the query to include all games with the word 'Mario' in their title

```sql
SELECT *
FROM games
WHERE title like "%mario%";
```

3. Write the SQL to display a game's titles next to their review ratings
```sql
SELECT title, rating, comment, games.id, reviews.game_id
FROM games
JOIN reviews ON games.id = reviews.game_id
```

  3a. Write the SQL to show the game title, the review rating, and the player's name

```sql
SELECT title, rating, comment, games.id, reviews.game_id, players.name, players.age
FROM games
JOIN reviews ON reviews.game_id = games.id
JOIN players ON players.id = reviews.player_id
```

4. Write the SQL to create a review
