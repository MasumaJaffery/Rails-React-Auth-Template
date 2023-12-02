class Api::V1::UsersController < ApplicationController
  before_action :set_api_user, only: %i[show destroy]

  # GET /api/v1/users
  def index
    @api_users = User.all
    if @api_users.present?
      render json: { success: true, users: @api_users }
    else
      render json: { success: false, message: 'No users found' }
    end
  # handle errors
  rescue StandardError => e
    render json: { success: false, message: e.message }
  end

  # GET /api/v1/users/1
  def show
    if @api_user.present?
      render json: { success: true, user: @api_user }
    else
      render json: { success: false, message: 'User not found' }
    end
  end

  # POST /api/v1/users
  def create
    @api_user = User.new(api_user_params)
    if @api_user.save
      render json: { success: true, user: @api_user }
    else
      render json: { success: false, message: @api_user.errors.full_messages }
    end
  end

  # DELETE /api/v1/users/:id
  def destroy
    if @api_user.destroy
      render json: { success: true, message: 'User deleted' }
    else
      render json: { success: false, message: @api_user.errors.full_messages }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_user
    @api_user = User.find(params[:id])
  end

  def api_user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
