Many to Many Relationship
===

## SWBATs
- Implement both sides of a many to many relationships
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate Single Source of Truth by not storing collections of objects on other objects
- Demonstrate Single Source of Truth by not storing one object in multiple collections

## OOP
- `self`
- when to use instance variables vs class variables vs local var
- using conditional logic in a class (in a method)

## Objectives
- Review Relationships (one to many => has many, belongs to)
- Expand on relationships to express many to many
  - We'll build out a new relationship from scratch to teach this concept

Tweet >- User

Player >- Team >- League

Doctor -< Appointment >- Patient
doctor has many appointments
1. For the doctor, look at the appointments and figure out which ones belong to me

doctor has many patients through the appointments
2. Once we have the appointments, figure out which patient that appointment is for

Driver -< Ride >- Passenger

Manager -< Store >- Employee 

Agent -< Building -< Unit >- Tenant

Player -< FightingMatch >- Character

Student -< Subject >- Teacher

Magazine -< Subscription >- Reader
for each x, how many y
for each y, how many x

AlienSpecies -< Colony >- Planet
alien species has many colonies
1. For the alien species, look at the colonies and figure out which ones belong to me

alien species has many planets through the colonies
2. Once we have the colonies, figure out which planet that colony is on

planet has many colonies
1. For the planet, look at the colonies and figure out which ones belong to me

planet has many alien species through the colonies
2. Once we have the colonies, figure out which alien species that colony is on