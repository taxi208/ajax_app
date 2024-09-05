class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  リクエストを処理する

  def create
    
    Post.create(content: params[:content])
    render json:{ post: post }
  end
end
