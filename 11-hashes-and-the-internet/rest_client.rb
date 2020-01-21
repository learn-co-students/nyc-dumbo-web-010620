require 'rest-client'
require 'pry'
require 'json'

def welcome
    puts " 📕 Welcome to Book Title Searcher 📕 "
end

def get_user_input
    puts "What book do you want to search??"
    book = gets.chomp
    do_search(book)
end

def do_search(book)
    items_hash = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{book}")
    volume_info = JSON.parse(items_hash)["items"].map { |item| item["volumeInfo"] }
    puts volume_info.map {|vol| vol["title"]}
end

welcome
get_user_input

# binding.pry
0