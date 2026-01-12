# 🎵 MusicStream Pro - Multi-Language Music Player

![MusicStream Pro](https://img.shields.io/badge/Music-Streaming-purple?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-Hindi%20%7C%20English%20%7C%20Korean-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A full-featured music streaming platform with **30+ real songs** from Hindi, English, and Korean (K-Pop) artists. Stream music videos, earn from plays/downloads, and enjoy premium features!

## ✨ Features

### 🎵 **30+ Real Songs with YouTube Integration**
- **10 Hindi Songs**: Arijit Singh, Jubin Nautiyal, Atif Aslam, King, Jasleen Royal, Kaifi Khalil
- **7 English Songs**: Ed Sheeran, The Weeknd, Dua Lipa, Justin Bieber, Harry Styles, Lewis Capaldi
- **7 Korean K-Pop Songs**: BTS, BLACKPINK, PSY
- All songs with **real YouTube video embeds** and **high-quality thumbnails**

### 🎬 **Audio & Video Streaming**
- Embedded YouTube player for seamless playback
- High-quality music videos
- Auto-play next song feature
- Beautiful player UI with controls

### 📥 **Download Functionality**
- One-click download (opens YouTube)
- Track downloads for earnings
- Download history

### 💰 **Earning System**
- **₹0.5 per song play**
- **₹1 per download**
- Real-time earnings dashboard
- Payout requests (minimum ₹100)
- Earnings history tracking

### 🔐 **Complete Authentication**
- User signup/login with JWT
- Secure password hashing (bcrypt)
- Profile management
- Session persistence
- Admin email: **rm2778643@gmail.com**

### 💳 **4 Subscription Plans**

| Plan | Price | Features |
|------|-------|----------|
| **Free** | ₹0/month | Limited songs, Ads, Standard quality |
| **Basic** | ₹99/month | Ad-free, HD quality, 50 downloads |
| **Premium** | ₹199/month | All songs, Ultra HD, Unlimited downloads |
| **Family** | ₹299/month | 6 accounts, All premium features |

### 🎨 **Beautiful UI/UX**
- Gradient purple theme
- Responsive design (mobile-friendly)
- Smooth animations
- Card-based layout
- Sticky header
- Modal authentication

### 🔍 **Search & Filters**
- Search by song name or artist
- Filter by language (Hindi/English/Korean)
- Filter by type (Audio/Video)
- Real-time search results

## 🎼 Complete Song Library

### Hindi Songs (10)
1. **Tum Hi Ho** - Arijit Singh
2. **Kesariya** - Arijit Singh
3. **Apna Bana Le** - Arijit Singh
4. **Chaleya** - Arijit Singh (Premium)
5. **Raataan Lambiyan** - Jubin Nautiyal
6. **Dil Diyan Gallan** - Atif Aslam
7. **Pal Pal Dil Ke Paas** - Kishore Kumar
8. **Kabira** - Tochi Raina (Premium)
9. **Tera Ban Jaunga** - Akhil Sachdeva
10. **Shayad** - Arijit Singh
11. **Ve Kamleya** - Arijit Singh
12. **Satranga** - Arijit Singh
13. **Maan Meri Jaan** - King
14. **Heeriye** - Jasleen Royal (Premium)
15. **Kahani Suno** - Kaifi Khalil
16. **Pasoori** - Ali Sethi & Shae Gill

### English Songs (7)
1. **Shape of You** - Ed Sheeran
2. **Blinding Lights** - The Weeknd
3. **Levitating** - Dua Lipa (Premium)
4. **Stay** - Justin Bieber & The Kid LAROI
5. **As It Was** - Harry Styles
6. **Perfect** - Ed Sheeran
7. **Someone You Loved** - Lewis Capaldi (Premium)

### Korean K-Pop Songs (7)
1. **Dynamite** - BTS
2. **How You Like That** - BLACKPINK
3. **Butter** - BTS (Premium)
4. **Kill This Love** - BLACKPINK
5. **Gangnam Style** - PSY
6. **DDU-DU DDU-DU** - BLACKPINK
7. **Boy With Luv** - BTS ft. Halsey (Premium)

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Stripe** integration ready
- **Nodemailer** for emails
- RESTful API architecture

### Frontend
- **Vanilla JavaScript** (ES6+)
- **HTML5** with semantic markup
- **CSS3** with gradients & animations
- **Font Awesome** icons
- **YouTube Embed API**

### Database Ready
- MongoDB schema ready
- Mongoose models prepared
- Easy migration from in-memory to MongoDB

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/rahul700raj/musicstream-pro.git
cd musicstream-pro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key_here
STRIPE_SECRET_KEY=your_stripe_key
ADMIN_EMAIL=rm2778643@gmail.com
```

### 4. Run the Server
```bash
npm start
```

### 5. Access the App
Open browser: **http://localhost:3000**

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/signup      - User registration
POST   /api/auth/login       - User login
GET    /api/auth/profile     - Get user profile
```

### Music
```
GET    /api/music/songs      - Get all songs
GET    /api/music/songs/:id  - Get song by ID
GET    /api/music/search     - Search songs (?q=query)
POST   /api/music/download/:id - Download song
```

### Subscription
```
GET    /api/subscription/plans     - Get all plans
POST   /api/subscription/subscribe - Subscribe to plan
POST   /api/subscription/cancel    - Cancel subscription
```

### Earnings
```
GET    /api/earnings         - Get earnings data
POST   /api/earnings/track   - Track play/download
POST   /api/earnings/payout  - Request payout
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select GitHub repo: `rahul700raj/musicstream-pro`
4. Add environment variables
5. Click "Deploy"

### Environment Variables for Vercel
```
PORT=3000
JWT_SECRET=your_secret_key
ADMIN_EMAIL=rm2778643@gmail.com
```

## 📱 Screenshots

### Home Page
Beautiful gradient UI with song cards showing thumbnails, artist names, and metadata.

### Music Player
Embedded YouTube player with controls, song info, and earnings tracking.

### Subscription Plans
Four tiers with clear pricing and feature comparison.

### Earnings Dashboard
Real-time earnings display with payout request functionality.

## 🎯 Key Features Explained

### Earning System
- Users earn **₹0.5** for every song play
- Users earn **₹1** for every download
- Minimum payout: **₹100**
- Earnings tracked in real-time
- Payout requests sent to admin email

### Premium Content
- Some songs marked as "Premium"
- Free users see lock icon
- Premium/Basic/Family subscribers get full access
- Smooth upgrade flow

### YouTube Integration
- All songs use real YouTube videos
- Embedded player with autoplay
- High-quality thumbnails from YouTube
- Direct YouTube links for downloads

## 🔒 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT tokens with 30-day expiry
- Protected API routes
- Input validation
- XSS protection
- CORS enabled

## 📊 Project Structure

```
musicstream-pro/
├── public/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # All styling
│   └── app.js          # Frontend JavaScript
├── routes/
│   ├── auth.js         # Authentication routes
│   ├── music.js        # Music library routes
│   ├── subscription.js # Subscription routes
│   └── earnings.js     # Earnings routes
├── server.js           # Express server
├── package.json        # Dependencies
├── vercel.json         # Vercel config
└── README.md           # Documentation
```

## 🎨 Customization

### Add More Songs
Edit `routes/music.js` and add to `musicLibrary` array:
```javascript
{
  id: 31,
  title: 'Your Song',
  artist: 'Artist Name',
  language: 'hindi',
  type: 'video',
  duration: '3:45',
  genre: 'Pop',
  thumbnail: 'https://youtube-thumbnail-url',
  audioUrl: 'https://youtube.com/watch?v=...',
  videoUrl: 'https://youtube.com/watch?v=...',
  premium: false
}
```

### Change Theme Colors
Edit `public/styles.css`:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Subscription Plans
Edit `routes/subscription.js` and update the `plans` array.

## 🐛 Troubleshooting

### Songs not playing?
- Check YouTube video IDs are correct
- Ensure videos are not region-blocked
- Check browser console for errors

### Authentication not working?
- Verify JWT_SECRET is set in .env
- Check token expiry (30 days default)
- Clear browser localStorage

### Earnings not tracking?
- Ensure user is logged in
- Check Authorization header
- Verify token is valid

## 📞 Contact & Support

- **Admin Email**: rm2778643@gmail.com
- **GitHub**: [rahul700raj/musicstream-pro](https://github.com/rahul700raj/musicstream-pro)
- **Issues**: [Report bugs](https://github.com/rahul700raj/musicstream-pro/issues)

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Credits

- **YouTube** for video hosting
- **Font Awesome** for icons
- **Google Fonts** for typography
- All artists for their amazing music

## 🚀 Future Enhancements

- [ ] MongoDB integration
- [ ] Real Stripe payment gateway
- [ ] Playlist creation
- [ ] Social sharing
- [ ] Lyrics display
- [ ] Artist profiles
- [ ] AI recommendations
- [ ] Mobile apps (iOS/Android)
- [ ] Offline mode
- [ ] Comments & ratings

---

**Made with ❤️ for music lovers worldwide** 🎵

**Star ⭐ this repo if you like it!**