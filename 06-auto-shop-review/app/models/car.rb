class Car

  attr_reader :make, :model, :classification, :car_owner, :mechanic

  @@all = []

  def initialize(make, model, classification, car_owner, mechanic)
    @make = make
    @model = model
    @classification = classification
    @car_owner = car_owner
    @mechanic = mechanic
    @@all << self
  end

  def expert_mechanics
    # we need to iterate over all the mechanics
    # narrow down the list (use select)
    Mechanic.all.select do |mechanic_instance|
      # access the mechanic's specialty
      # and see if it matches the car's classification
      mechanic_instance.specialty == self.classification
    end
    # return an array of mechanic instances
  end

  def self.classification
    Car.all.map do |car|
      car.classification
    end

    # self.all.map(&:classification)
  end

  def self.all
    @@all
  end

end
