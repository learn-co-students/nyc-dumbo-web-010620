require 'sinatra'

get "/potatoes" do
  "<html>
    <head>
      <meta charset='utf-8' />
    </head>
    <body>
      #{ "🥔" * 100 }
    </body>
  </html>"
end

get "/crackers" do
  "<html>
    <head>
      <meta charset='utf-8' />
    </head>
    <body>
      #{ "🍘" * 100 }
    </body>
  </html>"
end

