class UserServicesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: UserService.all
    end
    def create
        services = UserService.create!(uService_params)
        render json: services, status: :created
    end
    def show
        service = find_uService
        render json: service, include: ['school', 'service', 'user']
    end
    def update
        service = find_uService
        service.update(uService_params)
        render json: service, status: :ok
    end
    def destroy
        service = find_uService
        service.destroy
        render json: {}, status: :no_content
    end
    private
    def uService_params
        params.permit(:name,:description,:price,:service_id,:service_category_id,:user_id,:school_id,:images)
    end
    def find_uService
        UserService.find_by(id: params[:id])
    end
    def render_not_found_response
        render json: { error: "This service can not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
#@current_user.


    
    
    
