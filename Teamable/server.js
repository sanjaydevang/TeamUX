import express from 'express';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // Fixed: MongioClient -> MongoClient
const dbname = 'company_db';
const collname = 'employees';

const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const client = new MongoClient(url);

app.use(express.json());

// Serve static files from current directory instead of dist
app.use('/', express.static(__dirname + '/dist'));

// Store profile data (in production, use a database)
let profileData = {
  name: "John Doe",
  age: 30,
  email: "John@gmail.com",
  interests: "coding"
};

// Connect to MongoDB once at startup
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

// Initialize MongoDB connection
connectToMongoDB();

app.get('/get-profile', async function (req, res) {
  try {
    // Try to get profile from MongoDB first
    const db = client.db(dbname);
    const collection = db.collection(collname);
    const mongoProfile = await collection.findOne({ profileId: 'main' });
    
    // Use MongoDB data if available, otherwise use in-memory data
    const responseData = mongoProfile ? 
      { ...mongoProfile, _id: undefined, profileId: undefined, updatedAt: undefined } : 
      profileData;
    
    res.json(responseData);
  } catch (error) {
    console.error('Error getting profile:', error);
    // Fallback to in-memory data if MongoDB fails
    res.json(profileData);
  }
});

app.post('/update-profile', async function (req, res) {
  try {
    const payload = req.body;
    
    if (!payload || Object.keys(payload).length === 0) {
      return res.status(400).json({ error: 'No data provided' });
    }

    // Use the already connected client
    const db = client.db(dbname);
    const collection = db.collection(collname);

    // Update the profile data first
    profileData = { ...profileData, ...payload };
    
    // Update the profile in MongoDB
    const updateResult = await collection.updateOne(
      { profileId: 'main' }, // Query for main profile
      { 
        $set: {
          ...profileData,
          updatedAt: new Date()
        }
      },
      { upsert: true } // Create if doesn't exist, update if exists
    );
    
    console.log('Updated documents =>', updateResult);
    
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

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    process.exit(1);
  }
});