class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url

  has_many :user_services
end
