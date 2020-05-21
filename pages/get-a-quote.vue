<template>
  <main>
    <AppHeader />
    <div class="main bg-dark pt-10 pb-48 border-pt border-gray-8p00">
      <div class="container pt-10">
        <div class="grid grid-cols-2 gap-6 py-20">
          <div class="">
            <h3 class="product-subtitle w-2/3">
              We'll send a cost estimate of your project based on your submission
            </h3>

            <br>

            <p class="spaced-title">
              EMAIL US
            </p>
            <div>info@kiftatechnologies.com</div>
          </div>

          <div class="ml-5">
            <form class="grid grid-cols-2 gap-6">
              <div class="">
                <label>
                  <p class="mb-2 text-sm">Your name</p>
                  <input v-model="form.name" type="text" name="name" class="app-input-dark">
                </label>
                <span v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</span>
              </div>
              <div class="">
                <label>
                  <p class="mb-2 text-sm">Phone</p>
                  <input v-model="form.phone" type="text" name="phone" class="app-input-dark">
                </label>
                <span v-if="errors.phone" class="text-red-500 text-xs">{{ errors.phone }}</span>
              </div>
              <div class="">
                <label>
                  <p class="mb-2 text-sm">Email</p>
                  <input v-model="form.email" type="email" name="email" class="app-input-dark">
                </label>
                <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>
              </div>
              <div class="">
                <label>
                  <p class="mb-2 text-sm">Company</p>
                  <input v-model="form.company" type="text" name="company" class="app-input-dark">
                </label>
                <span v-if="errors.company" class="text-red-500 text-xs">{{ errors.company }}</span>
              </div>
              <div class="col-span-2">
                <label>
                  <p class="mb-2 text-sm">Your Requirements</p>
                  <textarea v-model="form.requirements" name="requirements" class="app-input-dark" />
                </label>
                <span v-if="errors.requirements" class="text-red-500 text-xs">{{ errors.requirements }}</span>
              </div>
              <div>
                <nuxt-link to="/get-a-quote" class="btn app-btn-theme">
                  Submit
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <AppFooter offset-banner />
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
  methods: {
    validateForm () {
      this.errors = {}
      let isValid = true
      const emailPattern = /\\S+@\\S+/
      if (emailPattern.test(this.form.email)) {
        isValid = false
        this.errors.email = 'Kindly provide a valid email'
      }

      const namePattern = /^[A-Za-z .'-]+$/
      if (namePattern.test(this.form.name)) {
        isValid = false
        this.errors.name = 'Kindly provide a valid name'
      }

      const phonePattern = /^[0-9]/
      if (phonePattern.test(this.form.phone)) {
        isValid = false
        this.errors.phone = 'Kindly provide a valid phone number'
      }

      if (this.form.requirements.length < 2) {
        isValid = false
        this.errors.requirements = 'Kindly provide some more details'
      }

      alert(isValid)
      return isValid
    }
  }
}
</script>

<style scoped>

</style>
