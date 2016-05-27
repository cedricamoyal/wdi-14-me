User.destroy_all

u1 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u2 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

puts "User count: #{User.all.count}"


Song.destroy_all

s1 = Song.create :name => 'All by electricity'
s2 = Song.create :name => 'Maranas trench'
s3 = Song.create :name => 'Have a safe trip'

puts "Song count: #{Song.all.count}"

Album.destroy_all

a1 = Album.create :name => 'Engine takes to the water'
a2 = Album.create :name => 'From the vapor...'
a3 = Album.create :name => 'Systems/Layers'

puts "Album count: #{Album.all.count}"

# songs belongs_to album, an album has_many songs:
a1.songs << s1
# .songs method is defined by has_many :songs in album.rb
  # When we use that method, it tries to find all songs with the particular album's id stored in the album_id column
  # It will always return an array
a2.songs << s2
a3.songs << s3
  # When we use the append operator (<<), it will change the album_id on a song to have the id of wichever album was specified
    # Then it will save the changes

puts "Song count on first album: #{a1.songs.count}"
puts "Song count on second album: #{a2.songs.count}"
puts "Song count on third album: #{a3.songs.count}"

puts "Album name for first song: #{s1.album.name}"
puts "Album name for second song: #{s2.album.name}"
puts "Album name for third song: #{s3.album.name}"


Genre.destroy_all

g1 = Genre.create :name => 'Nautical..'
g2 = Genre.create :name => 'Math rock...'
g3 = Genre.create :name => 'Chamber pop'

g1.songs << s1 << s2
g2.songs << s2
g3.songs << s3

puts "Genre one song count: #{g1.songs.count}"
puts "Genre two song count: #{g2.songs.count}"
puts "Genre three song count: #{g3.songs.count}"

puts "Song one genre count: #{s1.genres.count}"
puts "Song two genre count: #{s2.genres.count}"
puts "Song three genre count: #{s3.genres.count}"

Artist.destroy_all

r1 = Artist.create :name => 'June of 44'
r2 = Artist.create :name => 'The Mercury Program'
r3 = Artist.create :name => 'Rachels'

puts "Artist count: #{Artist.all.count}"

# Artist.first.songs
# Song.first.artist

r1.songs << s1
r2.songs << s2
r3.songs << s3

puts "First artist song count: #{r1.songs.count}"
puts "Second artist song count: #{r2.songs.count}"
puts "Third artist song count: #{r3.songs.count}"

puts "Name of the artist that wrote the song one: #{s1.artist.name}"
puts "Name of the artist that wrote the song two: #{s2.artist.name}"
puts "Name of the artist that wrote the song three: #{s3.artist.name}"

Mixtape.destroy_all

m1 = Mixtape.create :title => 'Fire'
m2 = Mixtape.create :title => 'Easter tunes'
m3 = Mixtape.create :title => 'Code jams'

puts "Mixtape count: #{Mixtape.all.count}"

u1.mixtapes << m1
u2.mixtapes << m2 << m3

m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s1



puts "User one mixtape count: #{u1.mixtapes.count}"
puts "User two mixtape count: #{u2.mixtapes.count}"

puts "Email of the user of the mixtape one #{m1.user.email}"
puts "Email of the user of the mixtape two #{m2.user.email}"
puts "Email of the user of the mixtape third #{m2.user.email}"

puts "First mixtape song count: #{m1.songs.count}"
puts "Second mixtape song count: #{m2.songs.count}"
puts "Third mixtape song count: #{m3.songs.count}"

puts "First song mixtape count: #{s1.mixtapes.count}"
puts "Second song mixtape count: #{s2.mixtapes.count}"
puts "Third song mixtape count: #{s3.mixtapes.count}"


puts "\n\nTesting has_many :through relationships...\n"
puts "First artist genres count: #{r1.genres.count}"
puts "Second artist genres count: #{r2.genres.count}"
puts "Third artist genres count: #{r3.genres.count}"

puts "\n\nTesting has_many :through relationships...\n"
puts "First artist albums count: #{r1.albums.count}"
puts "Second artist albums count: #{r2.albums.count}"
puts "Third artist albums count: #{r3.albums.count}"

# tunr $ rake db:seed
# tunr $ rails console
      # [1] pry(main)> Song.first
      # [2] pry(main)> User.first
      # [1] pry(main)> Artist.last
