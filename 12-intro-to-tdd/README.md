Intro to Test Driven Development
================================

## SWBAT

- [ ] Set up testing in a new project
- [ ] Define Test-Driven development
- [ ] Describe what a testing framework is and what the RSpec framework does
- [ ] Write tests for a basic function while considering entire problem space
- [ ] Use output from a testing framework to guide their development
- [ ] Explain the need for testing in general
- [ ] Describe the difference between Unit Tests and Integration Tests

## Lecture Notes

### Why do we need tests?

### What and Why

[TDD: Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
- You are going to write tests for what your feature should be doing, and ultimately those tests will drive your development process.
- Write tests first to scope out your feature first, then write code.
- Remember "Red, Green, Refactor"

The need for tests.
- One change, one break, will affect the bigger picture 
- Writing tests can isolate which method broke, what caused a chain reaction breaking your app, and what you need to do to fix it.
- Now think about long projects.
  - Can you remember your code?
  - Can you do something to old code with breaking?
  - Chances are, that's a "no" for most people.
  - Test help you catch errors when you make a change later on and unexpectedly break code somewhere else in your application.

- Unit Tests
  - Test a module of code in isolation from the rest of your project (without dependencies)
  - Small in scope
  - Easier to write
- Integration Tests
  - Test the entire system 
  - Harder to write

### rspec

`rspec --init`

- Definitely read through the comments once in your life.
- There are different ways to run rspec:
  - Default runs all the tests in all files.
  - You can `--fail-fast`.
  - You can run a specific test file.
  - You can run a specific line in a test file.

Three main guidelines to writing a test:

1. make sure it works - input that returns true
2. make sure it doesn't work - input that returns false
3. edge cases - input that you don't expect, how to handle those?
  - This is where ideas split.
  - So who decides? Your boss.

Sample RSpec methods:

```ruby
describe "palindrome?" do
  it "should return true if the word is a palindrome" do
    expect palindrome?("racecar").to eq(true)
    expect palindrome?("level").to eq(true)
    expect palindrome?("redivider").to eq(true)
  end

  it "should return false if the word is not a palindrome" do
    expect palindrome?("person").to eq(false)
    expect palindrome?("Sydney").to eq(false)
    expect palindrome?("anything else").to eq(false)
  end

  it "should expect ArgumentError if the word is not a String" do
    expect { palindrome?(1) }.to raise_error(ArgumentError)
    expect { palindrome?(true) }.to raise_error(ArgumentError)
    expect { palindrome?([1,2,3]) }.to raise_error(ArgumentError)
    expect { palindrome?({ key: "value" }) }.to raise_error(ArgumentError)
  end
end
```

Red, Green, Refactor cycle
- Test
- Write Method
- Make it pretty

### Palindrome

Edge Cases:
- numbers/non-string input
- symbols <=== emoji, invisible characters, etc
- punctuation
  - A man, a plan, a canal: Panama
- case sensitivity
- space complexity
- etc...

Example of a well tested, refactored, code reviewed piece of code:

```ruby
def palindrome?(word)
  raise ArgumentError unless word.is_a? String # Guard Clause
  parsed_word = word.downcase.gsub(/\W/,"")
  return false if parsed_word.length < 2
  parsed_word == parsed_word.reverse
end
```
