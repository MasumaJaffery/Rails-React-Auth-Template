# frozen_string_literal: true

# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://127.0.0.1:3000' # Replace with your frontend URL

    resource '/api/v1/*',
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options],
             expose: ['access-token', 'expiry', 'token-type', 'Authorization'],
             credentials: true
  end

  allow do
    origins 'http://127.0.0.1:3000' # Replace with your frontend URL

    resource '/login',
             headers: :any,
             methods: [:post], # Adjust with the method used for login
             expose: ['access-token', 'expiry', 'token-type', 'Authorization'],
             credentials: true
  end

  allow do
    origins 'http://127.0.0.1:3000' # Replace with your frontend URL

    resource '/signup',
             headers: :any,
             methods: [:post], # Adjust with the method used for signup
             expose: ['access-token', 'expiry', 'token-type', 'Authorization'],
             credentials: true
  end

  allow do
    origins 'http://127.0.0.1:3000' # Replace with your frontend URL

    resource '/logout',
             headers: :any,
             methods: [:delete], # Adjust with the method used for logout
             expose: ['access-token', 'expiry', 'token-type', 'Authorization'],
             credentials: true
  end
end
