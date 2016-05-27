require 'httparty'
# http://www.omdbapi.com/?s=Alien
# http://www.omdbapi.com/?s=Satantango
HTTParty.get "http://www.omdbapi.com?s=Satantango"
  # Try to customise after the =
# response is an hash:
response = HTTParty.get( "http://www.omdbapi.com?s=Satantango" )
all_results = response["Search"]
response["Search"][0]
first_result = response["Search"][0]
poster_of_first_result = response["Search"][0]["Poster"]

<img src="<%= @poster %>"> #example

# MORE RESULTS EXAMPLE
result = HTTParty.get "http://omdbapi.com?s=Alien" # s ---> all the movies
poster_of_first_result = response["Search"][0]["Poster"]

# cleaner response:
result = HTTParty.get "http://omdbapi.com?t=Satantango" # t ---> the exact movie

DO AN EACH LOOP ON SEARCH!

parameter: use t, s, plot
result["Plot"]

home.erb:
    form (Action + GET)
        input for user to type movie name
        input to submit
main.rb:
    get
    make request
    save instance variables
    show it in the view
