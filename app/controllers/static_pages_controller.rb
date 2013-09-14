class StaticPagesController < ApplicationController
  before_action { expires_in 1.hour, :public => true }

end