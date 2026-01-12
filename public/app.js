// State
let currentUser = null;
let currentSong = null;
let allSongs = [];
let isPlaying = false;
let isLoginMode = true;

// API Base URL
const API_URL = window.location.origin + '/api';

// Elements
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const loginBtn = document.getElementById('loginBtn');
const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');
const musicGrid = document.getElementById('musicGrid');
const plansGrid = document.getElementById('plansGrid');
const player = document.getElementById('player');
const audioPlayer = document.getElementById('audioPlayer');
const videoPlayer = document.getElementById('videoPlayer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadSongs();
    loadPlans();
    setupEventListeners();
});

function setupEventListeners() {
    loginBtn.addEventListener('click', () => openAuthModal(true));
    logoutBtn.addEventListener('click', logout);
    authForm.addEventListener('submit', handleAuth);
    document.getElementById('switchBtn').addEventListener('click', toggleAuthMode);
    document.querySelector('.close').addEventListener('click', () => authModal.style.display = 'none');
    
    searchBtn.addEventListener('click', searchSongs);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchSongs();
    });
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterSongs(btn.dataset.filter);
        });
    });
    
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('downloadBtn').addEventListener('click', downloadSong);
    document.getElementById('requestPayoutBtn').addEventListener('click', requestPayout);
    document.getElementById('nextBtn').addEventListener('click', playNext);
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    videoPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', () => playNext());
    videoPlayer.addEventListener('ended', () => playNext());
}

function checkAuth() {
    const token = localStorage.getItem('token');
    if (token) {
        fetch(`${API_URL}/auth/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(r => r.json())
        .then(user => {
            currentUser = user;
            updateUIForAuth();
        })
        .catch(() => {
            localStorage.removeItem('token');
        });
    }
}

function openAuthModal(isLogin) {
    isLoginMode = isLogin;
    authModal.style.display = 'block';
    document.getElementById('authTitle').textContent = isLogin ? 'Login' : 'Sign Up';
    document.getElementById('nameInput').style.display = isLogin ? 'none' : 'block';
    document.getElementById('switchBtn').textContent = isLogin ? 'Sign Up' : 'Login';
}

function toggleAuthMode() {
    openAuthModal(!isLoginMode);
}

async function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const name = document.getElementById('nameInput').value;
    
    const endpoint = isLoginMode ? '/auth/login' : '/auth/signup';
    const body = isLoginMode ? { email, password } : { name, email, password };
    
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            currentUser = data.user;
            authModal.style.display = 'none';
            updateUIForAuth();
            alert(`Welcome ${data.user.name}!`);
        } else {
            alert(data.error);
        }
    } catch (error) {
        alert('Authentication failed');
    }
}

function logout() {
    localStorage.removeItem('token');
    currentUser = null;
    updateUIForAuth();
    location.reload();
}

function updateUIForAuth() {
    if (currentUser) {
        loginBtn.style.display = 'none';
        profileBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'inline-block';
        profileBtn.textContent = currentUser.name;
        document.getElementById('earningsSection').style.display = 'block';
        loadEarnings();
    } else {
        loginBtn.style.display = 'inline-block';
        profileBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
        document.getElementById('earningsSection').style.display = 'none';
    }
}

async function loadSongs() {
    try {
        const response = await fetch(`${API_URL}/music/songs`);
        allSongs = await response.json();
        displaySongs(allSongs);
    } catch (error) {
        console.error('Failed to load songs:', error);
    }
}

function displaySongs(songs) {
    musicGrid.innerHTML = songs.map(song => `
        <div class="music-card" onclick="playSong(${song.id})">
            <img src="${song.thumbnail}" alt="${song.title}">
            <div class="music-card-content">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <div class="music-card-meta">
                    <span><i class="fas fa-${song.type === 'audio' ? 'music' : 'video'}"></i> ${song.type}</span>
                    <span>${song.duration}</span>
                    ${song.premium ? '<span class="premium-badge">PREMIUM</span>' : ''}
                </div>
                <span class="language-badge">${song.language.toUpperCase()}</span>
            </div>
        </div>
    `).join('');
}

function filterSongs(filter) {
    let filtered = allSongs;
    
    if (filter === 'hindi' || filter === 'english' || filter === 'korean') {
        filtered = allSongs.filter(s => s.language === filter);
    } else if (filter === 'audio' || filter === 'video') {
        filtered = allSongs.filter(s => s.type === filter);
    }
    
    displaySongs(filtered);
}

async function searchSongs() {
    const query = searchInput.value;
    if (!query) {
        displaySongs(allSongs);
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/music/search?q=${query}`);
        const results = await response.json();
        displaySongs(results);
    } catch (error) {
        console.error('Search failed:', error);
    }
}

function playSong(id) {
    const song = allSongs.find(s => s.id === id);
    if (!song) return;
    
    if (song.premium && (!currentUser || currentUser.subscription === 'free')) {
        alert('This is a premium song. Please upgrade your subscription!');
        return;
    }
    
    currentSong = song;
    player.style.display = 'block';
    
    document.getElementById('playerTitle').textContent = song.title;
    document.getElementById('playerArtist').textContent = song.artist;
    document.getElementById('playerThumbnail').src = song.thumbnail;
    
    if (song.type === 'audio') {
        audioPlayer.src = song.audioUrl;
        audioPlayer.style.display = 'block';
        videoPlayer.style.display = 'none';
        audioPlayer.play();
    } else {
        videoPlayer.src = song.videoUrl;
        videoPlayer.style.display = 'block';
        audioPlayer.style.display = 'none';
        videoPlayer.play();
    }
    
    isPlaying = true;
    document.getElementById('playPauseBtn').innerHTML = '<i class=\"fas fa-pause\"></i>';
    
    if (currentUser) {
        trackEarning('play', song.id);
    }
}

function togglePlayPause() {
    const media = currentSong.type === 'audio' ? audioPlayer : videoPlayer;
    
    if (isPlaying) {
        media.pause();
        document.getElementById('playPauseBtn').innerHTML = '<i class=\"fas fa-play\"></i>';
    } else {
        media.play();
        document.getElementById('playPauseBtn').innerHTML = '<i class=\"fas fa-pause\"></i>';
    }
    
    isPlaying = !isPlaying;
}

function updateProgress() {
    const media = currentSong.type === 'audio' ? audioPlayer : videoPlayer;
    const progress = (media.currentTime / media.duration) * 100;
    document.getElementById('progressBar').value = progress;
    document.getElementById('currentTime').textContent = formatTime(media.currentTime);
    document.getElementById('duration').textContent = formatTime(media.duration);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function playNext() {
    const currentIndex = allSongs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % allSongs.length;
    playSong(allSongs[nextIndex].id);
}

async function downloadSong() {
    if (!currentSong) return;
    
    if (!currentUser) {
        alert('Please login to download songs');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/music/download/${currentSong.id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            const a = document.createElement('a');
            a.href = data.downloadUrl;
            a.download = `${currentSong.title}.${currentSong.type === 'audio' ? 'mp3' : 'mp4'}`;
            a.click();
            
            alert('Download started!');
            trackEarning('download', currentSong.id);
        }
    } catch (error) {
        alert('Download failed');
    }
}

async function loadPlans() {
    try {
        const response = await fetch(`${API_URL}/subscription/plans`);
        const plans = await response.json();
        
        plansGrid.innerHTML = plans.map(plan => `
            <div class="plan-card">
                <h3>${plan.name}</h3>
                <div class="price">₹${plan.price}/month</div>
                <ul>
                    ${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <button class="btn-primary" onclick="subscribeToPlan('${plan.id}')">
                    ${plan.id === 'free' ? 'Current Plan' : 'Subscribe'}
                </button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Failed to load plans:', error);
    }
}

async function subscribeToPlan(planId) {
    if (!currentUser) {
        alert('Please login to subscribe');
        return;
    }
    
    if (planId === 'free') return;
    
    try {
        const response = await fetch(`${API_URL}/subscription/subscribe`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ planId, paymentMethod: 'card' })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert(`Successfully subscribed to ${data.subscription.plan}!`);
            currentUser.subscription = planId;
        }
    } catch (error) {
        alert('Subscription failed');
    }
}

async function loadEarnings() {
    try {
        const response = await fetch(`${API_URL}/earnings`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        
        const data = await response.json();
        document.getElementById('totalEarnings').textContent = `₹${data.totalEarnings.toFixed(2)}`;
        document.getElementById('pendingPayout').textContent = `₹${data.pendingPayout.toFixed(2)}`;
    } catch (error) {
        console.error('Failed to load earnings:', error);
    }
}

async function trackEarning(type, songId) {
    try {
        await fetch(`${API_URL}/earnings/track`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type, songId, amount: type === 'play' ? 0.5 : 1 })
        });
        
        loadEarnings();
    } catch (error) {
        console.error('Failed to track earning:', error);
    }
}

async function requestPayout() {
    const amount = parseFloat(document.getElementById('pendingPayout').textContent.replace('₹', ''));
    
    if (amount < 100) {
        alert('Minimum payout amount is ₹100');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/earnings/payout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount, method: 'bank' })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert(data.message);
            loadEarnings();
        }
    } catch (error) {
        alert('Payout request failed');
    }
}