# active_record_intro $ gem install activerecord

# Gem needed:
require 'sqlite3'
require 'active_record'
require 'pry'

# Connect to active record:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
  );

ActiveRecord::Base.logger = Logger.new(STDERR)

class User < ActiveRecord::Base
end

# Do this in pry to check:
    # [1] pry(main)> User
    # => User (call 'User.connection' to establish a connection)

# To see all the users, type User.all in pry:
      # [2] pry(main)> User.all
                # D, [2016-05-20T14:45:21.216588 #37760] DEBUG -- :   User Load (1.0ms)  SELECT "users".* FROM "users"
                # => [#<User:0x007fba033221b0
                #   id: 1,
                #   first_name: "Bill",
                #   last_name: "Withers",
                #   username: "leaning",
                #   description: "What a person">,
                #  #<User:0x007fba02c4a540
                #   id: 2,
                #   first_name: "Django",
                #   last_name: "Reinhardt",
                #   username: "minor swing",
                #   description: "Stephen Grappelli">,
                #  #<User:0x007fba02c49bb8
                #   id: 3,
                #   first_name: "Roger",
                #   last_name: "Spring",
                #   username: "no idea",
                #   description: "no idea">]

# READ:
all_users = User.all
first_users = User.first
users_with_id_2 = User.find 2
users_with_id_2 = User.find_by :id => 2
bill = User.find_by( :first_name => "Bill" )
bill_option2 = User.find_by :first_name => "Bill", :last_name => "Withers"

# CREATE:
u = User.new
u.first_name = "Justin"
u.last_name = "Time"
u.username = "justintime"
u.description = "Great work"
u.save

User.create({
  :first_name => "Tom",
  :last_name => "Friend",
  :username => "tomfriend",
  :description => "Good"
})
# with create we don't need to save

p User.all

# UPDATE
# user = User.find_by :first_name => "Bill"
# user.last_name = "Murray"
# user.save
#
# user = User.find_by :first_name => "Bill"
# user.update :first_name => "William"

# DELETE

# cedric = User.find(5)
# cedric.destroy

# User.destry_all




binding.pry

puts ""
