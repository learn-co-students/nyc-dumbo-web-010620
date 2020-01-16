class Game < ActiveRecord::Base

  # CRUD
  # Create
  # Game.new - create a Ruby object
  # Game#save - save to the database
  # Game.create - new + save

  # Read
  # Game.all - returns a collection of game instances
  # Game.first/last - returns the first/last instance from the database
  # Game.find(:id) - returns the instance that matches
  # Game.find_by(:hash) - return the first instance that matches
  # Game.where(:hash / :string) - return all instances that matches
  # Game.all.pluck(:column_name) - return an array with values from the columns

  # Update
  # Game#save - if the instance has an id, will update that row in the database
  # Game#update(:hash) - updates the row in the database
  # Game.update(:hash) - updates all rows in the database

  # Delete
  # Game#destroy - delete the row from the database
  # Game#destroy_all - delete rows from the database
end