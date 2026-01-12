const express = require('express');
const router = express.Router();

// Subscription plans
const plans = [
  { id: 'free', name: 'Free', price: 0, features: ['Limited songs', 'Ads supported', 'Standard quality'] },
  { id: 'basic', name: 'Basic', price: 99, features: ['Ad-free', 'HD quality', 'Download up to 50 songs'] },
  { id: 'premium', name: 'Premium', price: 199, features: ['All premium songs', 'Ultra HD quality', 'Unlimited downloads', 'Offline mode'] },
  { id: 'family', name: 'Family', price: 299, features: ['Up to 6 accounts', 'All premium features', 'Family mix playlist'] }
];

// Get all plans
router.get('/plans', (req, res) => {
  res.json(plans);
});

// Subscribe to plan
router.post('/subscribe', async (req, res) => {
  try {
    const { planId, paymentMethod } = req.body;
    const plan = plans.find(p => p.id === planId);
    
    if (!plan) return res.status(404).json({ error: 'Plan not found' });
    
    // Here you would integrate with Stripe or other payment gateway
    // For demo, we'll just return success
    
    res.json({ 
      success: true, 
      subscription: { plan: plan.name, status: 'active', expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) }
    });
  } catch (error) {
    res.status(500).json({ error: 'Subscription failed' });
  }
});

// Cancel subscription
router.post('/cancel', (req, res) => {
  res.json({ success: true, message: 'Subscription cancelled' });
});

module.exports = router;