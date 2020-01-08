class User
  attr_reader :username
  attr_accessor :bio

  @@all = []

  def initialize(username, bio)
    @username = username
    @bio = bio
    # @tweets = []

    @@all << self
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  # user has many tweets
  def tweets
    Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
    end
  end

  def self.all
    @@all
  end

  def self.most_tweets
    # One approach: iterate over the users, 
    # set up a variable to keep track of the user with the most tweets
    # return that user
    
    # most_tweets_user = User.all.first
    # User.all.each do |user_instance|
    #   if user_instance.tweets.count > most_tweets_user.tweets.count
    #     most_tweets_user = user_instance
    #   end
    # end
    # most_tweets_user

    # Another approach: use max_by
    User.all.max_by do |user_instance|
      user_instance.tweets.count
    end
  end
end # end of User class
