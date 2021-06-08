<template>
  <main>
    <AppHeader />
    <div class="main bg-dark">
      <div class="container py-20">
        <div class="md:grid grid-cols-2 gap-6 md:pt-10">
          <div class="mb-10">
            <h3 class="product-subtitle w-2/3">
              We'll send a cost estimate of your project based on your submission
            </h3>

            <br>

            <p class="spaced-title">
              EMAIL US
            </p>
            <div>info@kiftatechnologies.com</div>
          </div>

          <div class="md:ml-5">
            <div v-show="formMessage" class="font-semibold bg-blue-600 border-l border-blue-200 p-3 my-4">
              {{ formMessage }}
            </div>
            <form class="md:grid grid-cols-2 gap-6" method="post" action="/get-a-quote.php" @submit="validateForm">
              <div class="mb-5">
                <label>
                  <p class="mb-2 text-sm">Your name</p>
                  <input v-model="form.name" type="text" name="name" class="app-input-dark" required>
                </label>
                <span v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</span>
              </div>
              <div class="mb-5">
                <label>
                  <p class="mb-2 text-sm">Phone</p>
                  <input v-model="form.phone" type="text" name="phone" class="app-input-dark">
                </label>
                <span v-if="errors.phone" class="text-red-500 text-xs">{{ errors.phone }}</span>
              </div>
              <div class="mb-5">
                <label>
                  <p class="mb-2 text-sm">Email</p>
                  <input v-model="form.email" type="email" name="email" class="app-input-dark" required>
                </label>
                <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>
              </div>
              <div class="mb-5">
                <label>
                  <p class="mb-2 text-sm">Company</p>
                  <input v-model="form.company" type="text" name="company" class="app-input-dark">
                </label>
                <span v-if="errors.company" class="text-red-500 text-xs">{{ errors.company }}</span>
              </div>
              <div class="mb-5 col-span-2">
                <label>
                  <p class="mb-2 text-sm">Your Requirements</p>
                  <textarea v-model="form.requirements" name="requirements" class="app-input-dark" />
                </label>
                <span v-if="errors.requirements" class="text-red-500 text-xs">{{ errors.requirements }}</span>
              </div>
              <div class="mt-3">
                <button type="submit" class="btn app-btn app-btn-md app-btn-light">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader
  },
  data () {
    return {
      form: {},
      errors: {}
    }
  },
  computed: {
    formMessage () {
      if (this.$route.query.status === '200') {
        return 'Your form was submitted successfully!'
      }
      if (this.$route.query.status === '400') {
        return 'Your message was not sent, kindly try again'
      }
      if (this.$route.query.status === '422') {
        return 'Kindly fill in all the fields'
      }
      return ''
    }
  },
  methods: {
    validateForm (e) {
      this.errors = {}
      let isValid = true
      // eslint-disable-next-line no-useless-escape
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (emailPattern.test(this.form.email)) {
        isValid = false
        this.errors.email = 'Kindly provide a valid email'
      }

      if (this.form.name.length < 2) {
        isValid = false
        this.errors.name = 'Kindly provide a valid name'
      }

      if (this.form.message.length < 2) {
        isValid = false
        this.errors.message = 'Kindly provide some more details'
      }

      if (isValid) {
        return true
      }
      e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
