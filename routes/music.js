const express = require('express');
const router = express.Router();

// Music library with Hindi, English, Korean songs
const musicLibrary = [
  // Hindi Songs
  { id: 1, title: 'Tum Hi Ho', artist: 'Arijit Singh', language: 'hindi', type: 'audio', duration: '4:22', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/Umqb9KENgmk/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', premium: false },
  { id: 2, title: 'Kesariya', artist: 'Arijit Singh', language: 'hindi', type: 'video', duration: '4:28', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/xsdvF4NfJ8s/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', premium: false },
  { id: 3, title: 'Apna Bana Le', artist: 'Arijit Singh', language: 'hindi', type: 'audio', duration: '3:56', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/qri_amqjEz4/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', premium: false },
  { id: 4, title: 'Chaleya', artist: 'Arijit Singh', language: 'hindi', type: 'video', duration: '3:18', genre: 'Dance', thumbnail: 'https://i.ytimg.com/vi/OsGJYXgGsP0/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/movie.mp4', premium: true },
  { id: 5, title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal', language: 'hindi', type: 'audio', duration: '3:58', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/ixMVzEXfB_A/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', premium: false },
  
  // English Songs
  { id: 6, title: 'Shape of You', artist: 'Ed Sheeran', language: 'english', type: 'audio', duration: '3:53', genre: 'Pop', thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', premium: false },
  { id: 7, title: 'Blinding Lights', artist: 'The Weeknd', language: 'english', type: 'video', duration: '3:20', genre: 'Pop', thumbnail: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', premium: false },
  { id: 8, title: 'Levitating', artist: 'Dua Lipa', language: 'english', type: 'audio', duration: '3:23', genre: 'Dance', thumbnail: 'https://i.ytimg.com/vi/TUVcZfQe-Kw/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', premium: true },
  { id: 9, title: 'Stay', artist: 'Justin Bieber', language: 'english', type: 'video', duration: '2:21', genre: 'Pop', thumbnail: 'https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/movie.mp4', premium: false },
  { id: 10, title: 'As It Was', artist: 'Harry Styles', language: 'english', type: 'audio', duration: '2:47', genre: 'Pop', thumbnail: 'https://i.ytimg.com/vi/H5v3kku4y6Q/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', premium: false },
  
  // Korean Songs (K-Pop)
  { id: 11, title: 'Dynamite', artist: 'BTS', language: 'korean', type: 'video', duration: '3:19', genre: 'K-Pop', thumbnail: 'https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', premium: false },
  { id: 12, title: 'How You Like That', artist: 'BLACKPINK', language: 'korean', type: 'video', duration: '3:02', genre: 'K-Pop', thumbnail: 'https://i.ytimg.com/vi/ioNng23DkIM/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/movie.mp4', premium: false },
  { id: 13, title: 'Butter', artist: 'BTS', language: 'korean', type: 'audio', duration: '2:44', genre: 'K-Pop', thumbnail: 'https://i.ytimg.com/vi/WMweEpGlu_U/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', premium: true },
  { id: 14, title: 'Kill This Love', artist: 'BLACKPINK', language: 'korean', type: 'video', duration: '3:13', genre: 'K-Pop', thumbnail: 'https://i.ytimg.com/vi/2S24-y0Ij3Y/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', premium: false },
  { id: 15, title: 'Gangnam Style', artist: 'PSY', language: 'korean', type: 'video', duration: '3:39', genre: 'K-Pop', thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/movie.mp4', premium: false },
  
  // More Hindi Songs
  { id: 16, title: 'Dil Diyan Gallan', artist: 'Atif Aslam', language: 'hindi', type: 'audio', duration: '3:56', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/SAcpESN_Fk4/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', premium: false },
  { id: 17, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', language: 'hindi', type: 'audio', duration: '4:45', genre: 'Classic', thumbnail: 'https://i.ytimg.com/vi/Uj-_0Kbr0Ck/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', premium: false },
  { id: 18, title: 'Kabira', artist: 'Tochi Raina', language: 'hindi', type: 'video', duration: '5:41', genre: 'Sufi', thumbnail: 'https://i.ytimg.com/vi/jHNNMj5bNQw/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', premium: true },
  { id: 19, title: 'Tera Ban Jaunga', artist: 'Akhil Sachdeva', language: 'hindi', type: 'audio', duration: '3:56', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/XGrKOhYT6ts/maxresdefault.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', premium: false },
  { id: 20, title: 'Shayad', artist: 'Arijit Singh', language: 'hindi', type: 'video', duration: '3:58', genre: 'Romantic', thumbnail: 'https://i.ytimg.com/vi/MJyKN-8UncM/maxresdefault.jpg', videoUrl: 'https://www.w3schools.com/html/movie.mp4', premium: false }
];

// Get all songs
router.get('/songs', (req, res) => {
  const { language, type, genre } = req.query;
  let filtered = musicLibrary;
  
  if (language) filtered = filtered.filter(s => s.language === language);
  if (type) filtered = filtered.filter(s => s.type === type);
  if (genre) filtered = filtered.filter(s => s.genre === genre);
  
  res.json(filtered);
});

// Get song by ID
router.get('/songs/:id', (req, res) => {
  const song = musicLibrary.find(s => s.id === parseInt(req.params.id));
  if (!song) return res.status(404).json({ error: 'Song not found' });
  res.json(song);
});

// Search songs
router.get('/search', (req, res) => {
  const { q } = req.query;
  const results = musicLibrary.filter(s => 
    s.title.toLowerCase().includes(q.toLowerCase()) ||
    s.artist.toLowerCase().includes(q.toLowerCase())
  );
  res.json(results);
});

// Download song (track download for earnings)
router.post('/download/:id', (req, res) => {
  const song = musicLibrary.find(s => s.id === parseInt(req.params.id));
  if (!song) return res.status(404).json({ error: 'Song not found' });
  
  // Track download for earnings
  res.json({ 
    success: true, 
    downloadUrl: song.type === 'audio' ? song.audioUrl : song.videoUrl,
    message: 'Download started' 
  });
});

module.exports = router;