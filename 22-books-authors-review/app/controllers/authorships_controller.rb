class AuthorshipsController < ApplicationController

  def new
    @authors = Author.all
    @books = Book.all
    @authorship = Authorship.new
  end

  def create
    @authorship = Authorship.create(authorship_params)
    if @authorship.valid?
      redirect_to @authorship.book
    else
      @authors = Author.all
      @books = Book.all
      render :new
    end
  end

  private

  def authorship_params
    params.require(:authorship).permit(:author_id, :book_id)
  end

end
