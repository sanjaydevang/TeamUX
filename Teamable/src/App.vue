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
      <button @click="isEditing = false">Save</button>
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
      name: 'Anna Smith',
      email: 'anna.smith@example.com',
      dob: '',
      interests: 'coding',
      isEditing: false
    };
  }
};
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


</style>