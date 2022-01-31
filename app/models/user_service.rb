class UserService < ApplicationRecord
belongs_to :user
belongs_to :service
belongs_to :school
belongs_to :service_category
has_many_attached :images
end
