require 'pry'

# TODO: write a palindrome? method
# a word that is the same forwards and backwards
# racecar

def palindrome?(word)
  # Guard Clause
  raise ArgumentError unless word.is_a? String
  
  parsed_word = word.downcase.gsub(/[^0-9a-z]/i, '')
  if parsed_word.length > 1
    parsed_word == parsed_word.reverse
  else
    false
  end
  
end