# ActiveRecord CRUD Test

Using either the `Player` model or the `Game` model.

## Create
1. How do I make a new player with the name "Ian", age 33, favorite console "PC", and then save it to the database?
```rb
ian = Player.new(name: "Ian", age: 33, console: "PC")
ian.save
```

2. How do I do the above with one method? (as in, making the new instance and saving it to the database?)
```rb
Player.create(name: "Ian", age: 33, console: "PC")

```

## Read
3. How do I get a collection of all players in the database?
```rb
Player.all
```

4. How do I get the first (oldest) instance? How do I get the last (newest) instance?
```rb
Player.all.first
Player.all.last

```

5. How do I find a specific game by its id (5)?
```rb
Game.find_by(id: 5)
Game.all.find_by(id: 5)
Game.find(5)
Game.all.find(5)
```

6. How do I find a specific game by its exact title?
```rb
Game.find_by(title: "Tetris")
Game.find_by("title like 'Tetris%'")
```

7. How do I retrieve a collection of all game instances with the genre "Sports RPG"?
```rb
Game.where(genre: "Sports RPG")
```

## Update
8. If I edited an attribute on an instance, how do I save the changes to the database?
```rb
game1.title = "New Title for This Game"
game1.save
```

9. How do I edit a game's attribute(s) and save the changes to the database in one method?
```rb
game1.update(title: "Newer Title")

```

## Delete
10. How do I wipe one instance from the table?
```rb
game1.destroy
```
11. How do I wipe all instances in the table?
```rb
Game.destroy_all
```
