class DuckSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :image_url, :category_name
  belongs_to :category

  def category_name
    # self is the DuckSerializer instance
    # self.object is the Duck instance
    self.object.category.name
  end
end
