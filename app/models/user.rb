class User < ApplicationRecord
# belongs_to :school
has_many :user_services
has_secure_password   
validates :username, presence: true, uniqueness: true  
end
