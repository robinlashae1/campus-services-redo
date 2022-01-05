class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :name, :is_tech
end
