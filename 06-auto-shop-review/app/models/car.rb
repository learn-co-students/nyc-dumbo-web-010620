class Car

  attr_reader :make, :model

  def initialize(make, model, classification)
    @make = make
    @model = model
    @classification = classification
  end

end
