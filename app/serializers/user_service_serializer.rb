class UserServiceSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers 
  attributes :id, :name, :description, :price, :image

belongs_to :user
belongs_to :service
belongs_to :service_category
belongs_to :school

def image
  if object.image.attached?
  {
    url: rails_blob_url(object.image,only_path: true),
    signed_id: object.image.signed_id
  }
  end
end
end
# , disposition: "attachment" ,if object.image.attached?
    # {url: rails_blob_path(object.image,only_path: true)}