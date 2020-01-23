class Genre < ActiveRecord::Base
    has_many :songs
    has_many :artists, through: :songs

    def self.find_funk_songs
        funk_id = Genre.find_by(name: "Funk").id
        Song.where(genre_id: funk_id)
        
        # Song.where(genre_id: Genre.find_by(name: "Funk").id)
    end

end
