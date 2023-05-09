<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="content">
      <div class="first-content">
        <div class="title-first-content">
          <h2>Now, about your project</h2>
        </div>
        <div class="title-child-first-content">
          <p>
            We like being a first-name basic, but it also helps us get in touch
            with you
          </p>
        </div>
        <div class="form-one">
          <div class="form-one-child">
            <div class="label">
              <label for="">What is your full name?</label>
            </div>
            <div class="input">
              <input
                type="text"
                placeholder="Write your name..."
                v-model="quiz.fullName"
                :class="{ error: error.status, success: success.status }"
              />
              <p class="text-error" v-if="error.status">{{ error.text }}</p>
              <p class="text-success" v-if="success.status">
                {{ success.text }}
              </p>
            </div>
          </div>
          <div class="form-two-child">
            <div class="label">
              <label for="">What is your email address?</label>
            </div>
            <div class="input">
              <input
                type="email"
                placeholder="Write your email..."
                v-model="quiz.email"
              />
            </div>
          </div>
        </div>
        <div class="form-two-paper">
          <div class="title-form-two">
            <h2>
              What sort of creative work do you need help with? You can read
              about our services
            </h2>
          </div>
          <div class="form-two">
            <div
              class="radio"
              v-for="option in jobOptions"
              :key="option.id"
              :style="{
                backgroundColor: quiz.jobs.includes(option.id)
                  ? 'lightseagreen'
                  : '',
              }"
            >
              <input
                type="checkbox"
                name=""
                :value="option.id"
                v-model="quiz.jobs"
                id=""
              /><label for="Branding">{{ option.name }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="two-content">
        <div class="title-in-two-content">
          <p>
            Tell us what you need help with, the purpose of this project and
            problems we're solving
          </p>
        </div>
        <div class="title-paper-two-content">
          <h5>What is your project all about?</h5>
        </div>
        <div class="form-two-content">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="I love you..."
            v-model="quiz.desc"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="button">
        <button type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      quiz: {
        fullName: "",
        email: "",
        desc: "",
        jobs: [],
      },
      jobOptions: [
        {
          id: 1,
          name: "developer",
        },
        {
          id: 2,
          name: "teacher",
        },
        {
          id: 3,
          name: "doctor",
        },
        {
          id: 4,
          name: "student",
        },
        {
          id: 5,
          name: "engineer",
        },
        {
          id: 6,
          name: "farmer",
        },
      ],
      error: {
        text: "",
        status: false,
      },
      success: {
        text: "",
        status: false,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.quiz.fullName.length < 6 || this.quiz.fullName.length > 18) {
        this.error = {
          text: "Look fail ! Fullname only 6-18 character!",
          status: true,
        };
        this.success.status = false;
      } else if (this.quiz.fullName.length > 5 && this.quiz.fullName.length < 19){
        this.success = {
            text: "Look Greate!",
            status: true
        }
        this.error.status = false;
      } else {
        this.error = {
          text: "",
          status: false,
        };
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: auto;
  background-color: #0c070e;
  color: #ffffff;
}
.content {
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 50px 100px 50px 100px;
}
.title-first-content {
  width: 100%;
  margin-bottom: 30px;
}
.title-first-content h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 50px;
  text-align: left;
}
.title-child-first-content {
  width: 100%;
}
.title-child-first-content p {
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 20px;
  text-align: left;
}
.form-one {
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  column-gap: 5px;
  text-align: left;
  margin-bottom: 40px;
}
.form-one .label {
  margin-bottom: 10px;
}
.form-one.input {
  width: 100%;
}
.form-one .input input {
  height: 10px;
  font-size: 20px;
  padding: 10px 7px 10px 7px;
}
.form-two-child input {
  width: 83%;
}
.form-one-child {
  width: 100%;
}
.form-two-paper {
  text-align: left;
}
.title-form-two {
  margin-bottom: 20px;
}
.form-two {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 10px;
}
.radio {
  width: 100%;
  height: 60px;
  background-color: gray;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.radio input[type="checkbox"] {
  margin-left: 60px;
  margin-right: 20px;
  transform: scale(1.5);
}
.radio:hover {
  background-color: darkgoldenrod;
}
.radio label {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #0c070e;
}
.two-content {
  text-align: left;
  margin-top: 90px;
}
.title-in-two-content {
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.title-paper-two-content {
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.form-two-content {
  width: 80%;
}
.form-two-content textarea {
  width: 100%;
  font-size: 20px;
  padding: 10px 0 0 10px;
  height: 200px;
}
.footer {
  border-top: 1px solid silver;
  padding-bottom: 100px;
}
.button {
  text-align: right;
  margin-right: 100px;
}
.button button {
  font-size: 30px;
  background-color: lightseagreen;
  color: #333;
  padding: 10px 10px 10px 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
}
.error {
  border: 2px solid crimson;
}
.text-error {
  color: red;
}
.text-success {
  margin-top: 4px;
  color: green;
}
.success {
  border: 2px solid green;
}
</style>
