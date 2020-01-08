class Tweet
  attr_reader :message, :user
  # def user
  #   @user
  # end
  @@all = []

  def initialize(message, user)
    @message = message
    @user = user # this tweet instance belongs to this user instance

    @@all << self
  end

  def username
    self.user.username
  end

  def self.all
    @@all
  end

  def self.print_tweets
    # self in a class method is the class, so here we're calling Tweet.all
    self.all.each do |tweet_instance|
      # for each tweet instance, print out a string with information about the tweet
      puts "@#{tweet_instance.username} posted: #{tweet_instance.message}"
    end
  end
end # end of Tweet class
