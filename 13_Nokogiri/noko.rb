require 'nokogiri'
require 'open-uri'
require 'pry'

base_url = 'http://www.badtaxidermy.com/'

index = Nokogiri::HTML( open(base_url))
name = index.css(".header .title").text.strip

puts ""
puts name

post = index.css(".post")
post.each do |p|
  puts p.css('.title').text
  puts p.css(".postimage img").attr("src").value
end
