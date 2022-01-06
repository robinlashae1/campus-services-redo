class UserService < ApplicationRecord
belongs_to :user
belongs_to :service
belongs_to :school
end
