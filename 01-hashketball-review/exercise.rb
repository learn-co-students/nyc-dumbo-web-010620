require 'pry'

# EXERCISE:
instructors = [
  { name: 'Ian', hometown: 'Suttons Bay', excitement_level: 10 },
  { name: 'Otha', hometown: 'Los Angeles', excitement_level: 7 },
  { name: 'Leizl', hometwon: 'Staten Island', excitement_level: 5 }
]

# Define a method called get_names that takes an array of instructors
# and returns an array of strings of the instructors names
def get_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end
end
puts "get_names"
p get_names(instructors)

# Define a method called excited_instructors that takes an array of instructors
# and returns an array of hashes with only the instructors with an energy level higher than 5
def excited_instructors(instructors)
  instructors.select do |instructor|
    instructor[:excitement_level] > 5
  end
end
puts "excited_instructors"
p excited_instructors(instructors)

# Define a method called get_instructor_by_hometown that takes an array of instructors AND a string of a hometown
# and returns just the one instructor hash whose hometown matches
def get_instructor_by_hometown(instructors, hometown)
  instructors.find do |instructor|
    instructor[:hometown] == hometown
  end
end
puts "get_instructor_by_hometown"
p get_instructor_by_hometown(instructors, "Suttons Bay")

binding.pry
"pls"