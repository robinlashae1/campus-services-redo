class UserSerializer < ActiveModel::Serializer
  attributes :username, :password, :profile_picture, :password_confirmation,:name,:profile_picture,:description, :is_tech
end
