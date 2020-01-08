class User
  attr_reader :username
  attr_accessor :bio

  @@all = []

  def initialize(username, bio)
    @username = username
    @bio = bio

    @@all << self
  end

  def self.all
    @@all
  end
end # end of User class