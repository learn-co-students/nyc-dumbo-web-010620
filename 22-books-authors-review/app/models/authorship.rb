class Authorship < ApplicationRecord
  belongs_to :book
  belongs_to :author

  validates_uniqueness_of :book_id, scope: :author_id 

end
