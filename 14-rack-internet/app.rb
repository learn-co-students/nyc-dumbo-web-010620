require 'pry'

class App

  def call(environment_hash)

    status_code = 200
    header = { "Content-type" =>  "text/html" }

    if environment_hash["REQUEST_URI"] == "/potato"
      body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>#{ "🥔" * 100 }</body>
        </html>"]
    else
      body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>Crackers</body>
        </html>"]
    end

    return [status_code, header, body]
  end

end
