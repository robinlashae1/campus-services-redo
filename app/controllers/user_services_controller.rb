class UserServicesController < ApplicationController
    def index
        render json: UserService.all
    end
    def create
        service = user_service.create!(uService_params)
        render json: service, status: :created
    end
    def show
        service = find_uService
        render json: service, include: ['school', 'service', 'user']
    end
    def destroy
        service = find_uService
        service.destroy
        render json: {}, status: :no_content
    end
    private
    def uService_params
        params.permit(:name,:description,:price,:user_id,:school_id,:images)
    end
    def find_uService
        UserServices.find_by(id: params[:id])
    end
end
#@current_user.

    
    
    
