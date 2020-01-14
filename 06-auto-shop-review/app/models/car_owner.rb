class CarOwner

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def cars
    # iterate thru the cars
    # find the cars that match the car_owner
    Car.all.select do |car_instance|
      car_instance.car_owner == self
    end
  end

  def mechanics
    # Mechanic.all.select do |mechanic_instance|
    #   mechanic_instance.mechanic == self
    # end
    my_mechanics = self.cars.map do |car|
      car.mechanic
    end
    my_mechanics.uniq
  end

  def self.all
    @@all
  end

  def self.average
    # total number of cars / number of owners
    Car.all.length / self.all.length.to_f
  end

end