require 'sinatra/base'



class Thermostat < Sinatra::Base



  get '/' do

"Hello!!!"
  # <script type="text/javascript" src="js/thermostat.js"></script>

  end

  run! if app_file == $0

end
