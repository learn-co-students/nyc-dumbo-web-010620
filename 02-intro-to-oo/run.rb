require 'pry'

class BankAccount
  attr_reader :account_number
  attr_accessor :balance
  # def account_number
  #   @account_number
  # end
  # def account_number=(value)
  #   @account_number = value
  # end

  @@all = []

  def initialize(balance, account_number)
    @balance = balance
    @account_number = account_number

    p self
    @@all << self
  end

  def print_balance
    "Account # #{self.account_number} has a balance of $#{self.balance}"
  end

  # instance method
  # getter method
  # def balance
  #   # p local_variable
  #   @balance
  # end

  # # setter method
  # def balance=(new_balance)
  #   # local_variable = "hmm"
  #   # this is the tricky part...
  #   @balance = new_balance
  # end
  
  def self.all
    @@all
  end

end # end of BankAccount class

BankAccount.new(1000, 123)
BankAccount.new(2000, 234)

binding.pry
0