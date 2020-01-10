class Animal

    attr_reader :name
    attr_accessor :mood

    def initialize(name, mood = "nervous")
        @name = name
        @mood = mood
    end

    def speak
        puts "Sup"
    end

end