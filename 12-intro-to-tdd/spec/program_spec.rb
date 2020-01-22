require_relative '../program'

# happy path -> the ideal situation, our users are using the code as expected
# edge cases -> things that we might have planned for in our code
# unhappy path, sad path -> things that should throw an error

describe "palindrome?" do

  it "should return true if the input is the same forwards and backwards" do
    expect(palindrome?("racecar")).to eq(true)
    expect(palindrome?("tacocat")).to eq(true)
  end

  it "should return false if the input is NOT the same forwards and backwards" do
    expect(palindrome?("hello")).to eq(false)
    expect(palindrome?("palindrome")).to eq(false)
  end

  # single character word
  it "should return false if the input is fewer than 2 characters" do
    expect(palindrome?("I")).to eq(false)
    expect(palindrome?("a")).to eq(false)
  end

  # capitalization
  # RaceCar
  it "should return true if the input is the same forwards and backwards, regardless of capitalization" do
    expect(palindrome?("RaceCar")).to eq(true)
    expect(palindrome?("TacoCat")).to eq(true)
  end

  # spaces
  it "should return true if the input is the same forwards and backwards, regardless of spacing" do
    expect(palindrome?("a man a plan a canal panama")).to eq(true)
    expect(palindrome?("race car")).to eq(true)
  end

  # punctuation
  it "should return true if the input is the same forwards and backwards, regardless of any non alphabetic characters" do
    expect(palindrome?("A man, a plan, a canal: Panama.")).to eq(true)
    expect(palindrome?("Racecar!")).to eq(true)
  end
  # symbols? 

  # numbers -> no.
  # arrays -> [1,2,1]
  # hash
  # 121, 111, 123, 212
  it "should raise an exception if the input is not a String" do
    expect { palindrome?(123) }.to raise_exception(ArgumentError)
    expect { palindrome?([1,2,3]) }.to raise_exception(ArgumentError)
    expect { palindrome?({}) }.to raise_exception(ArgumentError)
    expect { palindrome?(true) }.to raise_exception(ArgumentError)
  end


end