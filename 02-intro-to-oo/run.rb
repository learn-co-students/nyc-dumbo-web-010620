require 'pry'

class BankAccount
  attr_reader :account_number
  attr_accessor :balance

  @@all = []

  def initialize(balance, account_number)
    @balance = balance
    @account_number = account_number

    @@all << self
  end

  def print_balance
    "Account # #{self.account_number} has a balance of $#{self.balance}"
  end

  def deposit(amount)
    self.balance += amount
    # or @balance += amount
  end

  def withdraw(amount)
    self.balance -= amount
    # or @balance -= amount
  end

  def self.all
    @@all
  end

  def self.find_by_account_number(account_number)
    # inside class method, self is the BankAccount class
    # self.all is the same here as BankAccount.all
    self.all.find do |bank_account|
      # each element inside of @@all is a bank account instance
      # so we can call .account_number on the instance to read the account_number
      bank_account.account_number == account_number
    end
  end

end # end of BankAccount class

BankAccount.new(1000, 123)
BankAccount.new(2000, 234)

binding.pry
0