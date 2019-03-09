// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

const tracks = album.tracks
const artist = album.artist

// WRITE YOUR CODE ////////////////////////

function addTrack (name) {
  let newTrack = document.createElement('li')
  newTrack.classList.add('nav-item')
  newTrack.innerHTML = `
<a class="nav-link" href="#">${name}</a>
`
  songList.appendChild(newTrack)
}

for (let track of tracks) {
  addTrack(track)
  // addLyricsArea (track)
}

// function addLyricsArea (name) {
//   let newArea = document.createElement('div')
//   newArea.innerHTML = `
// <div class="tab-pane fade" id="pills-${name}" role="tabpanel" aria-labelledby="pills-${name}-tab"></div> 
// `
//   lyricsPanel.appendChild(newArea)
// }

songList.addEventListener('click',  (event) =>{
  let listItem = document.querySelectorAll('.nav-link')
  listItem.forEach(item => {
  item.classList.remove('active')
  })
  event.target.classList.add('active')
  const track = event.target.innerHTML
  showLyrics(track)
})

function showLyrics (track) {
  const url = BASE_URL + 'Adele/' + track
  console.log(track)
  axios
    .get(url).then(res => {
    console.log(res.data)
    const lyrics = res.data.lyrics
    lyricsPanel.innerHTML = `
<h1>${track}</h1>
<pre>${lyrics}</pre>
`
  })
    .catch(err => console.log(err))
}
