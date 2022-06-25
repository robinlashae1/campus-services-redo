class UserServicesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: UserService.in_batches(of: 20).each_record
    end

    def create
        services = UserService.create!(uService_params)
        render json: services, status: :created
    end
    def show
        service = UserService.find_by(school_id: params[:id])
       render json: service
        # by_school = UserService.find_by(school_id: params[:id])
        # by_service = by_school.find_by(service_id: params[:id])
        # by_category = by_service.find_by(service_category_id: params[:id])
        # render json: by_category
    end

    def query
        find_uQueries
        if @services
            render json: @services
       else
        
       render_unprocessable_entity_response
        end
    end

    def update
        find_uService
        if 
        @service.update(uService_params)
        render json: @service, status: :ok
        else 
            render_unprocessable_entity_response
        end
    end

    def find_by_school
        by_school = UserService.find_by(school_id: params[:id])
        by_service = by_school.find_by(service_id: params[:id])
        by_category = by_service.find_by(service_category_id: params[:id])
        render json: by_category
    end
    
    def destroy
        service = find_uService
        service.destroy
        render json: {}, status: :no_content
    end
    
    private
    def uService_params
        params.permit(:name,:description,:price,:service_id,:service_category_id,:user_id,:school_id,:id,:image)
    end
    def find_uService
        @service = UserService.find_by(id: params[:id])
    end
    def find_uQueries
       @services = UserService.where("school_id = ? AND service_id = ? AND  service_category_id = ?" , params[:school_id], params[:service_id], params[:service_category_id])
    end

    def render_not_found_response
        render json: { error: "This service can not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
#@current_user.


    
    
    
