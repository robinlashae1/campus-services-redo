class UserServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :user_id, :service_id, :school_id

belongs_to :user
belongs_to :service
belongs_to :school
end
