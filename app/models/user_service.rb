class UserService < ApplicationRecord
belongs_to :user
belongs_to :service
belongs_to :school
has_many_attached :images
end
