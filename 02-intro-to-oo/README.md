Intro to Object Orientation
===

## SWBATs
- [ ] Describe the benefits of Object Oriented Programming
- [ ] Explain the difference between a class and an instance
- [ ] Explain how `self` changes based on context
- [ ] Define attribute readers and writers using `attr_` macros
- [ ] Explain the difference between local variables, class variables, and instance variables
- [ ] (maybe) Get more practice with enumerable methods (`each`, `map`, `select`, `find`)

## Outline
- Discuss Object Oriented Programming
- Discuss classes and instances
  - describe methods as the 'interface' for our class
- Demonstrate class methods and instance methods on in-built Ruby classes (String, Array)
  - methods as sending messages
  - different approaches for sending messages (dot notation, `send`)
  - Monkey patching
- Build a `BankAccount` class using the deliverables below
  - `new` and `initialize`
  - instance methods
  - instance variables
  - `attr_` macros


## Discuss
- What is an object?
  data (attributes, properties) + behavior
- What does the phrase "In Ruby, everything is an object" mean?
  you can give everything a behavior
- What are the benefits of Object Oriented Programming?
  simplifies what's repetitive: gives us a group functions
  easier, makes it easy to organize code
  can be really flexible! open to change
  thinking about our code with nouns!

- What is the difference between a class and an instance?

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```rb
bank_account = { account_number: 12345, balance: 100 }
bank_account2 = { account_number: 12345, balace: 100 }

def deposit(bank_acct, money)
  bank_acct[:balance] += money
end
```

Write an implementation of a bank account that meets the following requirements:

- [x] can print the balance of the account
- [x] can deposit money into the account
- [x] can withdraw money from the account
- [x] keeps track of the account holder
- [x] can show me all the bank accounts that have been created
- *bonus* can find a bank account based on the account number

## Discussion Questions
- What's the difference between a class and an instance?
- What is the difference betweem a local variable, an instance variable, and a class variable?
- What is `self` in an instance method?
- What is `self` in a class method?