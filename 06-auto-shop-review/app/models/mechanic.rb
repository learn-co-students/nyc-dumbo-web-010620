class Mechanic

  attr_reader :name, :specialty

  @@all = []

  def initialize(name, specialty)
    @name = name
    @specialty = specialty
    @@all << self
  end

  def cars
    Car.all.select do |car_instance|
      car_instance.mechanic == self
    end
  end

  def car_owners
    owners = self.cars.map do |car|
      car.car_owner
    end
    owners.uniq
    # self.cars.map(&:car_owner).uniq
  end

  def car_owner_names
    self.car_owners.map do |car_owner|
      car_owner.name
    end
  end

  def self.all
    @@all
  end
end
