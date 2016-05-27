class WorksController < ApplicationController

  def index
    @works = Work.all
  end

  def new
    @work = Work.new
  end

  def create
    work = Work.create work_params
    redirect_to work #Show the work - Get /works/:id
  end

  def show
    @work = Work.find params[:id]
  end

  def edit # see new
    @work = Work.find params[:id]

  end

  def update # see create
    work = Work.find params[:id]
    work.update work_params

    redirect_to work # redirecting means GET request - show this particular work
  end

  def destroy
    work = Work.find params[:id]
    work.destroy

    redirect_to works_path
  end


  private

  def work_params
    # Strong params, only receive the information that we want:
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end

end
