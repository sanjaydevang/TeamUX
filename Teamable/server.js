const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Serve static files from current directory instead of dist
app.use('/', express.static(__dirname + '/dist'));

// Store profile data (in production, use a database)
let profileData = {
  name: "John Doe",
  age: 30,
  email: "John@gmail.com",
  interests: "coding"
};

app.get('/get-profile', function (req, res) {
  try {
    res.json(profileData);
  } catch (error) {
    console.error('Error getting profile:', error);
    res.status(500).json({ error: 'Failed to get profile' });
  }
});

app.post('/update-profile', function (req, res) {
  try {
    const payload = req.body;
    
    if (!payload) {
      return res.status(400).json({ error: 'No data provided' });
    }
    
    // Update the profile data
    profileData = { ...profileData, ...payload };
    
    console.log('Updated profile:', profileData);
    
    // Respond consistently with JSON
    res.json({ 
      message: "Profile updated successfully", 
      profile: profileData 
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

app.listen(3000, function () {
  console.log("App listening on port 3000");
  console.log("Visit: http://localhost:3000");
});