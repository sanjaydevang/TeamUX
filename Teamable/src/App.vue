<template>
  <div id="display-view">
    <h1>User Profile</h1>
    <img :src="image" alt="profile" class="profile-pic" />
    <hr/>

    <span>Name: </span><b id="name">Anna Smith</b>
    <hr />

    <span>Email: </span><b id="email">anna.smith@example.com</b>
    <hr />

    <span>Date of Birth: </span>
    <input type="text" id="dob-display" placeholder="YYYY-MM-DD" />
    <hr />

    <span>Interests: </span><b id="interests">coding</b>
    <hr />

    <button @click="handleEditProfile">Edit Profile</button>
  </div>
</template>

<script>
import image from './Ma.png';

export default {
  name: 'App',
  data() {
    return {
      image
    };
  },
  methods: {
    handleEditProfile() {
      console.log('Edit clicked');
    }
  }
};
</script>

<style>

#display-view {
  margin: 20px;
  font-family: Arial, sans-serif;
}

.profile-container {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-details {
  flex: 1;
  text-align: left;
}

.profile-details p {
  margin: 10px 0;
}
</style>


