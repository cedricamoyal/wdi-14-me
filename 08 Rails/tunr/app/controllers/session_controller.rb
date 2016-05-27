# tunr $ rails generate controller Session new
# Singular

class SessionController < ApplicationController

  before_action :authenticate_user, :only => [:new]

  def new
  end

  def create

    user = User.find_by :email => params[:email]

        if user.present? && user.authenticate( params[:password] )
            flash[:success] = "Successfully logged in"
            session[:user_id] = user.id
            redirect_to login_path
        else
            flash[:error] = "Invalid email or password"
            session[:user_id] = nil
            redirect_to login_path

        end
    end

    def destroy
        flash[:success] = "User successfully logged out"
        session[:user_id] = nil
        redirect_to login_path
    end

    private

        def authenticate_user
          redirect_to users_path if @current_user.present?
        end

end
