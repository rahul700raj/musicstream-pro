const express = require('express');
const router = express.Router();

// Music library with REAL working Hindi, English, Korean songs
const musicLibrary = [
  // Hindi Songs - Real YouTube links
  { 
    id: 1, 
    title: 'Tum Hi Ho', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '4:22', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/Umqb9KENgmk/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=Umqb9KENgmk',
    videoUrl: 'https://www.youtube.com/watch?v=Umqb9KENgmk',
    premium: false 
  },
  { 
    id: 2, 
    title: 'Kesariya', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '4:28', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/xsdvF4NfJ8s/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=xsdvF4NfJ8s',
    videoUrl: 'https://www.youtube.com/watch?v=xsdvF4NfJ8s',
    premium: false 
  },
  { 
    id: 3, 
    title: 'Apna Bana Le', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:56', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/qri_amqjEz4/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=qri_amqjEz4',
    videoUrl: 'https://www.youtube.com/watch?v=qri_amqjEz4',
    premium: false 
  },
  { 
    id: 4, 
    title: 'Chaleya', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:18', 
    genre: 'Dance', 
    thumbnail: 'https://i.ytimg.com/vi/OsGJYXgGsP0/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=OsGJYXgGsP0',
    videoUrl: 'https://www.youtube.com/watch?v=OsGJYXgGsP0',
    premium: true 
  },
  { 
    id: 5, 
    title: 'Raataan Lambiyan', 
    artist: 'Jubin Nautiyal', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:58', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/ixMVzEXfB_A/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=ixMVzEXfB_A',
    videoUrl: 'https://www.youtube.com/watch?v=ixMVzEXfB_A',
    premium: false 
  },
  { 
    id: 6, 
    title: 'Dil Diyan Gallan', 
    artist: 'Atif Aslam', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:56', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/SAcpESN_Fk4/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=SAcpESN_Fk4',
    videoUrl: 'https://www.youtube.com/watch?v=SAcpESN_Fk4',
    premium: false 
  },
  { 
    id: 7, 
    title: 'Pal Pal Dil Ke Paas', 
    artist: 'Kishore Kumar', 
    language: 'hindi', 
    type: 'audio', 
    duration: '4:45', 
    genre: 'Classic', 
    thumbnail: 'https://i.ytimg.com/vi/Uj-_0Kbr0Ck/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=Uj-_0Kbr0Ck',
    videoUrl: 'https://www.youtube.com/watch?v=Uj-_0Kbr0Ck',
    premium: false 
  },
  { 
    id: 8, 
    title: 'Kabira', 
    artist: 'Tochi Raina', 
    language: 'hindi', 
    type: 'video', 
    duration: '5:41', 
    genre: 'Sufi', 
    thumbnail: 'https://i.ytimg.com/vi/jHNNMj5bNQw/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=jHNNMj5bNQw',
    videoUrl: 'https://www.youtube.com/watch?v=jHNNMj5bNQw',
    premium: true 
  },
  { 
    id: 9, 
    title: 'Tera Ban Jaunga', 
    artist: 'Akhil Sachdeva', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:56', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/XGrKOhYT6ts/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=XGrKOhYT6ts',
    videoUrl: 'https://www.youtube.com/watch?v=XGrKOhYT6ts',
    premium: false 
  },
  { 
    id: 10, 
    title: 'Shayad', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:58', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/MJyKN-8UncM/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=MJyKN-8UncM',
    videoUrl: 'https://www.youtube.com/watch?v=MJyKN-8UncM',
    premium: false 
  },
  
  // English Songs - Real YouTube links
  { 
    id: 11, 
    title: 'Shape of You', 
    artist: 'Ed Sheeran', 
    language: 'english', 
    type: 'video', 
    duration: '3:53', 
    genre: 'Pop', 
    thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    premium: false 
  },
  { 
    id: 12, 
    title: 'Blinding Lights', 
    artist: 'The Weeknd', 
    language: 'english', 
    type: 'video', 
    duration: '3:20', 
    genre: 'Pop', 
    thumbnail: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    videoUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    premium: false 
  },
  { 
    id: 13, 
    title: 'Levitating', 
    artist: 'Dua Lipa', 
    language: 'english', 
    type: 'video', 
    duration: '3:23', 
    genre: 'Dance', 
    thumbnail: 'https://i.ytimg.com/vi/TUVcZfQe-Kw/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw',
    videoUrl: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw',
    premium: true 
  },
  { 
    id: 14, 
    title: 'Stay', 
    artist: 'Justin Bieber & The Kid LAROI', 
    language: 'english', 
    type: 'video', 
    duration: '2:21', 
    genre: 'Pop', 
    thumbnail: 'https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=kTJczUoc26U',
    videoUrl: 'https://www.youtube.com/watch?v=kTJczUoc26U',
    premium: false 
  },
  { 
    id: 15, 
    title: 'As It Was', 
    artist: 'Harry Styles', 
    language: 'english', 
    type: 'video', 
    duration: '2:47', 
    genre: 'Pop', 
    thumbnail: 'https://i.ytimg.com/vi/H5v3kku4y6Q/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=H5v3kku4y6Q',
    videoUrl: 'https://www.youtube.com/watch?v=H5v3kku4y6Q',
    premium: false 
  },
  { 
    id: 16, 
    title: 'Perfect', 
    artist: 'Ed Sheeran', 
    language: 'english', 
    type: 'video', 
    duration: '4:23', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    videoUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    premium: false 
  },
  { 
    id: 17, 
    title: 'Someone You Loved', 
    artist: 'Lewis Capaldi', 
    language: 'english', 
    type: 'video', 
    duration: '3:02', 
    genre: 'Pop', 
    thumbnail: 'https://i.ytimg.com/vi/zABLecsR5UE/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=zABLecsR5UE',
    videoUrl: 'https://www.youtube.com/watch?v=zABLecsR5UE',
    premium: true 
  },
  
  // Korean Songs (K-Pop) - Real YouTube links
  { 
    id: 18, 
    title: 'Dynamite', 
    artist: 'BTS', 
    language: 'korean', 
    type: 'video', 
    duration: '3:19', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
    videoUrl: 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
    premium: false 
  },
  { 
    id: 19, 
    title: 'How You Like That', 
    artist: 'BLACKPINK', 
    language: 'korean', 
    type: 'video', 
    duration: '3:02', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/ioNng23DkIM/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=ioNng23DkIM',
    videoUrl: 'https://www.youtube.com/watch?v=ioNng23DkIM',
    premium: false 
  },
  { 
    id: 20, 
    title: 'Butter', 
    artist: 'BTS', 
    language: 'korean', 
    type: 'video', 
    duration: '2:44', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/WMweEpGlu_U/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=WMweEpGlu_U',
    videoUrl: 'https://www.youtube.com/watch?v=WMweEpGlu_U',
    premium: true 
  },
  { 
    id: 21, 
    title: 'Kill This Love', 
    artist: 'BLACKPINK', 
    language: 'korean', 
    type: 'video', 
    duration: '3:13', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/2S24-y0Ij3Y/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=2S24-y0Ij3Y',
    videoUrl: 'https://www.youtube.com/watch?v=2S24-y0Ij3Y',
    premium: false 
  },
  { 
    id: 22, 
    title: 'Gangnam Style', 
    artist: 'PSY', 
    language: 'korean', 
    type: 'video', 
    duration: '3:39', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    premium: false 
  },
  { 
    id: 23, 
    title: 'DDU-DU DDU-DU', 
    artist: 'BLACKPINK', 
    language: 'korean', 
    type: 'video', 
    duration: '3:29', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=IHNzOHi8sJs',
    videoUrl: 'https://www.youtube.com/watch?v=IHNzOHi8sJs',
    premium: false 
  },
  { 
    id: 24, 
    title: 'Boy With Luv', 
    artist: 'BTS ft. Halsey', 
    language: 'korean', 
    type: 'video', 
    duration: '3:49', 
    genre: 'K-Pop', 
    thumbnail: 'https://i.ytimg.com/vi/XsX3ATc3FbA/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=XsX3ATc3FbA',
    videoUrl: 'https://www.youtube.com/watch?v=XsX3ATc3FbA',
    premium: true 
  },
  
  // More Hindi Songs
  { 
    id: 25, 
    title: 'Ve Kamleya', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '4:12', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/Ej_fN_Ixzys/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=Ej_fN_Ixzys',
    videoUrl: 'https://www.youtube.com/watch?v=Ej_fN_Ixzys',
    premium: false 
  },
  { 
    id: 26, 
    title: 'Satranga', 
    artist: 'Arijit Singh', 
    language: 'hindi', 
    type: 'video', 
    duration: '4:31', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/Eq5OWQi7q_Y/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=Eq5OWQi7q_Y',
    videoUrl: 'https://www.youtube.com/watch?v=Eq5OWQi7q_Y',
    premium: false 
  },
  { 
    id: 27, 
    title: 'Maan Meri Jaan', 
    artist: 'King', 
    language: 'hindi', 
    type: 'video', 
    duration: '2:38', 
    genre: 'Pop', 
    thumbnail: 'https://i.ytimg.com/vi/NdEzJMo1EH0/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=NdEzJMo1EH0',
    videoUrl: 'https://www.youtube.com/watch?v=NdEzJMo1EH0',
    premium: false 
  },
  { 
    id: 28, 
    title: 'Heeriye', 
    artist: 'Jasleen Royal', 
    language: 'hindi', 
    type: 'video', 
    duration: '3:18', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/2QT5eGHCJdE/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=2QT5eGHCJdE',
    videoUrl: 'https://www.youtube.com/watch?v=2QT5eGHCJdE',
    premium: true 
  },
  { 
    id: 29, 
    title: 'Kahani Suno', 
    artist: 'Kaifi Khalil', 
    language: 'hindi', 
    type: 'video', 
    duration: '4:45', 
    genre: 'Romantic', 
    thumbnail: 'https://i.ytimg.com/vi/FKy6J7gMZPg/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=FKy6J7gMZPg',
    videoUrl: 'https://www.youtube.com/watch?v=FKy6J7gMZPg',
    premium: false 
  },
  { 
    id: 30, 
    title: 'Pasoori', 
    artist: 'Ali Sethi & Shae Gill', 
    language: 'hindi', 
    type: 'video', 
    duration: '4:03', 
    genre: 'Folk', 
    thumbnail: 'https://i.ytimg.com/vi/5Eqb_-j3FDA/maxresdefault.jpg', 
    audioUrl: 'https://www.youtube.com/watch?v=5Eqb_-j3FDA',
    videoUrl: 'https://www.youtube.com/watch?v=5Eqb_-j3FDA',
    premium: false 
  }
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
    downloadUrl: song.videoUrl,
    message: 'Download started - Opening YouTube link' 
  });
});

module.exports = router;