# Mod 1 Group Review

## Notes
- This practice challenge is less explicit about what code you'll need to write in order to complete the deliverables. It's meant to test your ability to think critically about the functionality of the application and make whatever methtods are needed to implement that functionality
- Think about the domain: how are our classes related? What will we need to establish the relationships between our classes?

## CarOwner

- `CarOwner.all`
  - returns an array of car owner instances
- `CarOwner#cars`
  - returns an array of all the cars that a specific owner has
- `CarOwner#mechanics`
  - returns an array of all the mechanics that a specific owner goes to
- `CarOwner.average_owned`
  - returns a float representing the average number of cars owned for all owners

## Car

- `Car.all`
  - returns an array of all car instances
- `Car.classification`
  - returns an array of strings for all car classifications
- `Car#expert_mechanics`
  - returns an array mechanic instances that have a specialty that matches the car classification

## Mechanic

- `Mechanic.all`
  - returns an array of all mechanic instances
- `Mechanic#cars`
  - returns an array of car instances that a mechanic services
- `Mechanic#car_owners`
  - returns an array of car owners that go to a specific mechanic
- `Mechanic#car_owner_names`
  - returns an array of names of all car owners who go to a specific mechanic