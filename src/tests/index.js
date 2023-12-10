const YoutubeMusicApi = require('../index.js')

const api = new YoutubeMusicApi()
api.initalize() // Retrieves Innertube Config
.then(info => {
	// api.getSongDetail("g_okDS6ot8M").then(console.log) // just search for songs
  // api.getPlaylist('VLPL6-Jq0YLbzbpNy270uDD16lfSmNUpcokY').then(res => console.log(res.content[0].album))
  // api.getArtist("UCXTKo1DTENKCqbgkcdyJoHA").then(res => console.log(res.products.songs.content[0]))
  // api.getAlbum("MPREb_7IrnhenAUMJ")
	
})