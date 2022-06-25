class ServiceCategoriesController < ApplicationController
    def index
        render json: ServiceCategory.in_batches(of: 10).each_record
    end
    def create
        serviceCategory = ServiceCategory.create!(school_params)
        render json: serviceCategory, status: :created
    end
    def show
        serviceCategory = find_serviceCategory
        render json: serviceCategory, include: ['user_service']
    end
    def destroy
        serviceCategory = find_serviceCategory
        serviceCategory.destroy
        render json: {}, status: :no_content
    end
    private
    def serviceCategory_params
        params.permit(:name,:service_id)
    end
    def find_serviceCategory
        ServiceCategory.find_by(id: params[:id])
    end
end
