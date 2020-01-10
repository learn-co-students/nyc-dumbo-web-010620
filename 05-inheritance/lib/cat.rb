class Cat < Animal

    include MammalMobility
    attr_reader :lives

    def initialize(name, lives = 9)
        super(name)
        @lives = lives
    end

    def speak
        puts "Meow"
        super
    end

end 