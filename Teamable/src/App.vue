<template>
  <div class="profile-wrapper">
    <h1>User Profile</h1>

    <img :src="image" alt="profile" class="profile-pic" />

    <!-- View Mode -->
    <div class="profile-details" v-show="!isEditing">
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>DOB:</strong> {{ dob }}</p>
      <p><strong>Interests:</strong> {{ interests }}</p>
      <button @click="isEditing = true">Edit Profile</button>
    </div>

    <!-- Edit Mode -->
    <div class="profile-details" v-show="isEditing">
      <p><strong>Name:</strong> <input v-model="name" /></p>
      <p><strong>Email:</strong> <input v-model="email" /></p>
      <p><strong>DOB:</strong> <input v-model="dob" /></p>
      <p><strong>Interests:</strong> <input v-model="interests" /></p>
      <button @click="handleUpdateProfile">Save</button>
    </div>
  </div>
</template>

<script>
import image from './Ma.png';

export default {
  name: 'App',
  data() {
    return {
      image,
      name: '',
      email: '',
      dob: '',
      interests: '',
      isEditing: false
    }
  },
  async created() {
    try {
      const userData = await this.fetchUserProfile(); // Fixed typo: fetechUserProfile -> fetchUserProfile
      this.name = userData.name;
      this.email = userData.email;
      this.dob = userData.dob;
      this.interests = userData.interests;
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },
  methods: {
    handleEditProfile() {
      this.isEditing = true; // Fixed: isEditMode -> isEditing
    },
    async handleUpdateProfile() {
      try {
        const payload = {
          name: this.name,
          email: this.email,
          dob: this.dob,
          interests: this.interests
        };
        const resJson = await this.updateUserProfile(payload); // Added await
        console.log(resJson);
        this.isEditing = false; // Fixed: isEditMode -> isEditing
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    },
    async fetchUserProfile() { // Fixed typo: fetechUserProfile -> fetchUserProfile
      const res = await fetch('/get-profile'); // Added leading slash
      return await res.json();
    },
    async updateUserProfile(payload) {
      const res = await fetch('/update-profile', {
        method: 'POST',
        headers: { // Added missing headers
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // Fixed: missing colon and JSON.stringify
      });
      return await res.json();
    }
  }
}
</script>

<style>
.profile-wrapper {
  text-align: left;
  font-family: Arial, sans-serif;
  margin: 40px;
  max-width: 400px;
}

.profile-pic {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.profile-details {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fefefe;
}

.profile-details p {
  margin: 12px 0;
  font-size: 16px;
}

button {
  margin-top: 16px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
}

button:hover {
  background-color: #0056b3;
}

input {
  margin-left: 10px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>