class Game
  attr_accessor :id, :title, :genre, :price

  # TODO: if there's time, refactor using mass assignment
  def initialize(id, title, genre, price)
    @id = id
    @title = title
    @genre = genre
    @price = price

    # TODO: replace with database!
    # @@all << self
  end

  def save
    sql = "INSERT INTO games (title, genre, price) VALUES (?, ?, ?)"
    DB[:conn].execute(sql, self.title, self.genre, self.price)
  end

  def self.all
    sql = "SELECT * FROM games;"
    games_array = DB[:conn].execute(sql)

    games_array.map do |game_hash|
      Game.new(game_hash["id"], game_hash["title"], game_hash["genre"], game_hash["price"])
    end
  end

end