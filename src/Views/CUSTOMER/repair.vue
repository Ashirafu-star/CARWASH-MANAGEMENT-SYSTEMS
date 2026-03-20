<template>
  <div class="service-container">

    <h2>Select Services</h2>

    <div class="grid">
      <div
        v-for="(item, index) in services"
        :key="index"
        class="card"
        :class="{ selected: item.selected }"
        @click="toggleSelect(index)"
      >
        <img :src="item.image" alt="service" />

        <p>{{ item.name }}</p>

        <!-- Tick -->
        <div v-if="item.selected" class="tick">✔</div>

        <!-- Input box (only for one item) -->
        <input
          v-if="item.hasInput"
          type="text"
          placeholder="Type here..."
          v-model="item.input"
          @click.stop
        />
      </div>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <input type="file" @change="handleImageUpload" />
      <button @click="submitData">Submit</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: null,

      services: [
        { name: "Engine Repair", image: "https://via.placeholder.com/100", selected: false },
        { name: "Car Wash", image: "https://via.placeholder.com/100", selected: false },
        { name: "Painting", image: "https://via.placeholder.com/100", selected: false },
        { name: "Oil Change", image: "https://via.placeholder.com/100", selected: false },
        { name: "Tire Fix", image: "https://via.placeholder.com/100", selected: false },
        { name: "Battery Check", image: "https://via.placeholder.com/100", selected: false },
        { name: "Brake Repair", image: "https://via.placeholder.com/100", selected: false },
        { name: "Car Trade", image: "https://via.placeholder.com/100", selected: false },
        { name: "Parking", image: "https://via.placeholder.com/100", selected: false },

        // Special box with input
        {
          name: "Other (Type)",
          image: "https://via.placeholder.com/100",
          selected: false,
          hasInput: true,
          input: ""
        }
      ]
    };
  },

  methods: {
    toggleSelect(index) {
      this.services[index].selected = !this.services[index].selected;
    },

    handleImageUpload(event) {
      this.uploadedImage = event.target.files[0];
    },

    async submitData() {
      const selectedServices = this.services
        .filter(item => item.selected)
        .map(item => ({
          name: item.name,
          input: item.input || null
        }));

      const formData = new FormData();

      formData.append("services", JSON.stringify(selectedServices));
      formData.append("image", this.uploadedImage);

      try {
        const response = await fetch("http://localhost:3000/request", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        alert("Submitted successfully ✅");
        console.log(data);

      } catch (error) {
        console.error(error);
        alert("Error submitting data ❌");
      }
    }
  }
};
</script>

<style scoped>
.service-container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* left + right */
  gap: 15px;
  margin-top: 20px;
}

.card {
  position: relative;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: 0.3s;
  background: white;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.card p {
  margin-top: 10px;
  font-weight: bold;
}

/* Selected style */
.card.selected {
  border: 2px solid #42b983;
  background: #e8f5e9;
}

/* Tick */
.tick {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #42b983;
  color: white;
  border-radius: 50%;
  padding: 5px 8px;
  font-size: 12px;
}

/* Input */
input[type="text"] {
  margin-top: 10px;
  width: 90%;
  padding: 5px;
}

/* Buttons */
.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>