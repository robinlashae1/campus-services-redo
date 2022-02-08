class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def update
      user = User.find_by(id: params[:user_id])
      if user
        user.update(user_params)
        render json: user, status: :accepted
      else
        render json: { error: "Not Sucessfull" }, status: :unauthorized
    end
  end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, include: ['user_services','school']
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    private

    def user_params
        params.permit(:username, :password, :profile_picture, :password_confirmation,:name,:profile_picture,:description, :is_tech)
    end
end
