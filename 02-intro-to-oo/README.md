Intro to Object Orientation
===

## SWBATs
- [ ] Describe the benefits of Object Oriented Programming
- [ ] Explain the difference between a class and an instance
- [ ] Explain how `self` changes based on context
- [ ] Define attribute readers and writers using `attr_` macros
- [ ] Explain the difference between local variables, class variables, and instance variables
- [ ] Get more practice with enumerable methods (`each`, `map`, `select`, `find`)

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
- What are the benefits of Object Oriented Programming?
- In Ruby, everything is an object
- What is an object?
- What is the difference between a class and an instance?

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```rb
bank_account = { account_number: 12345, balance: 100 }
```

Write an implementation of a bank account that meets the following requirements:

- can print the balance of the account
- can deposit money into the account
- can withdraw money from the account
- keeps track of the account holder
- can show me all the bank accounts that have been created
*bonus*
- can find a bank account based on the account number

## Discussion Questions
- What's the difference between a class and an instance?
- What is the difference betweem a local variable, an instance variable, and a class variable?
- What is `self` in an instance method?
- What is `self` in a class method?