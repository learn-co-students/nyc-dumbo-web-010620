Song.destroy_all
Artist.destroy_all
Genre.destroy_all


drake = Artist.create(:name=>'Drake')
mj = Artist.create(:name=>'Michael Jackson')
prince = Artist.create(:name=>'Prince')
cm = Artist.create(:name=>'Curtis Mayfield')
rj = Artist.create(:name=>'Rick James')
katg = Artist.create(:name=>'Kool and the Gang')

rap = Genre.create(:name=>'Rap')
pop = Genre.create(:name=>'Pop')
funk = Genre.create(:name=>'Funk')

hotline_bling = Song.create(:name=>'Hotline Bling', genre_id: rap.id, artist_id: drake.id)
thriller = Song.create(:name=>'Thriller', genre_id: pop.id, artist_id: mj.id)
superfly = Song.create(name: 'Superfly', genre_id: funk.id, artist_id: cm.id)
mary_jane = Song.create(name: 'Maryjane', genre_id: funk.id, artist_id: rj.id)
jungle_boogie = Song.create(name: 'Jungle Boogie', genre_id: funk.id, artist_id: katg.id)
