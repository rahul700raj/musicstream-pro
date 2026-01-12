const express = require('express');
const router = express.Router();

// Mock earnings data
let earnings = {
  totalEarnings: 0,
  pendingPayout: 0,
  history: []
};

// Get earnings
router.get('/', (req, res) => {
  res.json(earnings);
});

// Track play/download for earnings
router.post('/track', (req, res) => {
  const { type, songId, amount } = req.body;
  
  earnings.totalEarnings += amount || 0.5;
  earnings.pendingPayout += amount || 0.5;
  earnings.history.push({
    type,
    songId,
    amount: amount || 0.5,
    timestamp: new Date()
  });
  
  res.json({ success: true, earnings });
});

// Request payout
router.post('/payout', (req, res) => {
  const { amount, method } = req.body;
  
  if (amount > earnings.pendingPayout) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }
  
  earnings.pendingPayout -= amount;
  
  res.json({ 
    success: true, 
    message: `Payout of ₹${amount} initiated via ${method}`,
    remainingBalance: earnings.pendingPayout
  });
});

module.exports = router;