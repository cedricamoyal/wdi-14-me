class VisitsController < ApplicationController

  def index
    @visits = Visit.all
  end

  def new
    @visit = Visit.new
  end

  def create
    visit = Visit.create visit_params
    redirect_to visit
  end

  def show
    @visit = Visit.find params[:id]
  end

  def edit # see new
    @visit = Visit.find params[:id]

  end

  def update # see create
    visit = Visit.find params[:id]
    visit.update visit_params

    redirect_to visit
  end

  def destroy
    visit = Visit.find params[:id]
    visit.destroy

    redirect_to visits_path
  end


  private

  def visit_params
    # Strong params, only receive the information that we want:
    params.require(:visit).permit(:name, :type, :duration, :image, :country_id)
  end

end
#
# t.text :name
# t.text :type
# t.text :duration
# t.text :image
