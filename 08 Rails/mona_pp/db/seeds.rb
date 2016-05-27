Artist.destroy_all
Artist.create :name => "Joan Miro", :nationality => "Spanish", :dob => "1893/04/20", :period => "20th century", :image => "http://www.joan-miro.net/images/joan-miro.jpg"

# mona_pp $ rake db:seed
#
# mona_pp $ rails db
        # SQLite version 3.8.10.2 2015-05-20 18:17:19
        # Enter ".help" for usage hints.
        # sqlite> SELECT * FROM artists;
                    # 1|Joan Miro|Spanish|1893-04-20|20th century|http://www.joan-miro.net/images/joan-miro.jpg|2016-05-24 00:31:48.689832|2016-05-24 00:31:48.689832
                    # sqlite>

Work.destroy_all
Work.create :title => "The flight...", :year => "1968", :medium => "oil and canvas", :style => "Abstract", :image => "http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg"
