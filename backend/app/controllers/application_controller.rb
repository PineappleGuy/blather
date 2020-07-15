class ApplicationController < ActionController::API
    protect_from_forgery with: :exception

    def log_in(user)
        session[:user_id] = user.id
    end

end
