# MusicStream Pro - Multi-Language Music Player

## Features

### 🎵 Multi-Language Support
- **Hindi Songs**: Arijit Singh, Jubin Nautiyal, Atif Aslam, and more
- **English Songs**: Ed Sheeran, The Weeknd, Dua Lipa, Harry Styles, and more
- **Korean Songs (K-Pop)**: BTS, BLACKPINK, PSY, and more

### 🎬 Audio & Video Support
- Stream audio tracks
- Watch music videos
- Seamless switching between audio and video

### 📥 Download Functionality
- Download songs for offline listening
- Download music videos
- Track downloads for earnings

### 💰 Earning System
- Earn from song plays (₹0.5 per play)
- Earn from downloads (₹1 per download)
- Request payouts (minimum ₹100)
- Real-time earnings dashboard

### 🔐 Authentication
- User signup with email: rm2778643@gmail.com
- Secure login system
- JWT-based authentication
- Profile management

### 💳 Subscription Plans
1. **Free Plan** (₹0/month)
   - Limited songs
   - Ads supported
   - Standard quality

2. **Basic Plan** (₹99/month)
   - Ad-free experience
   - HD quality
   - Download up to 50 songs

3. **Premium Plan** (₹199/month)
   - All premium songs
   - Ultra HD quality
   - Unlimited downloads
   - Offline mode

4. **Family Plan** (₹299/month)
   - Up to 6 accounts
   - All premium features
   - Family mix playlist

### 🎨 Features
- Beautiful gradient UI
- Responsive design
- Search functionality
- Filter by language (Hindi/English/Korean)
- Filter by type (Audio/Video)
- Music player with controls
- Progress bar
- Play/Pause/Next controls

## Tech Stack

### Backend
- Node.js + Express
- JWT Authentication
- bcryptjs for password hashing
- Stripe for payments
- Nodemailer for emails

### Frontend
- Vanilla JavaScript
- HTML5 Audio/Video API
- CSS3 with gradients and animations
- Font Awesome icons

## Setup Instructions

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Environment**
Create a `.env` file:
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
ADMIN_EMAIL=rm2778643@gmail.com
```

3. **Run the Server**
```bash
npm start
```

4. **Access the App**
Open browser: `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Music
- `GET /api/music/songs` - Get all songs
- `GET /api/music/songs/:id` - Get song by ID
- `GET /api/music/search?q=query` - Search songs
- `POST /api/music/download/:id` - Download song

### Subscription
- `GET /api/subscription/plans` - Get all plans
- `POST /api/subscription/subscribe` - Subscribe to plan
- `POST /api/subscription/cancel` - Cancel subscription

### Earnings
- `GET /api/earnings` - Get earnings data
- `POST /api/earnings/track` - Track play/download
- `POST /api/earnings/payout` - Request payout

## Music Library

The app includes 20+ songs across:
- **Hindi**: Tum Hi Ho, Kesariya, Apna Bana Le, Chaleya, Raataan Lambiyan, and more
- **English**: Shape of You, Blinding Lights, Levitating, Stay, As It Was, and more
- **Korean**: Dynamite, How You Like That, Butter, Kill This Love, Gangnam Style, and more

## Deployment

### GitHub
```bash
git clone https://github.com/rahul700raj/musicstream-pro.git
cd musicstream-pro
npm install
npm start
```

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Follow prompts

## Admin Contact
- Email: rm2778643@gmail.com

## License
MIT License

## Future Enhancements
- MongoDB integration
- Real payment gateway
- Playlist creation
- Social sharing
- Lyrics display
- Artist profiles
- Recommendations
- Mobile apps

---

**Developed with ❤️ for music lovers worldwide**