require 'sinatra/base'
set :public_folder, File.dirname(__FILE__)+'/'



class Thermostat < Sinatra::Base




  get '/' do

    File.read(File.join('public','index.html'))



  # '<script type="text/javascript" src="public/js/thermostat.js"></script>'

  end

  run! if app_file == $0

end
