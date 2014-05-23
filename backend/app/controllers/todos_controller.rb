class TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.where(id: params[:id]).first
  end
end