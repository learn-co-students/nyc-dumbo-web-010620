require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee_dad", "just a coffee lovin dad")
t_mom = User.new("tea_mom", "tea > coffee")

tweet1 = Tweet.new("coofffeeee #time#", coffee_dad)
tweet2 = Tweet.new("java is king", coffee_dad)
tweet3 = Tweet.new("i am so sad about my dead son.", coffee_dad)

tweet4 = Tweet.new("tea is my fave!", t_mom)
tweet5 = Tweet.new("T T T", t_mom)

binding.pry
"hi"