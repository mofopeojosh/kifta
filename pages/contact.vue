<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container py-20">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-2 col-start-2 ml-5">
            <h2 class="product-title">
              Contact us
            </h2>
          </div>

          <div class="py-5">
            <p class="spaced-title">
              EMAIL US
            </p>
            <div>info@kiftatechnologies.com</div>

            <br>

            <p class="spaced-title">
              VISIT US
            </p>
            <p class="font-bold">
              Nigeria
            </p>
            <div>2, CIBN Towers, Adeola Hopewell</div>
            <div>Victoria Island, Lagos</div>
            <div>+2348134589139</div>

            <br>

            <p class="font-bold">
              UK
            </p>
            <div>37 Salisbury St</div>
            <div>Liverpool L3 8DR</div>
            <div>++447562789175</div>
          </div>

          <div class="col-span-2 ml-5">
            <div class="bg-light p-5">
              <form class="grid grid-cols-2 gap-6 py-3" method="post" action="http://localhost:4000/contact.php" @submit.prevent="validateForm">
                <div class="">
                  <label>
                    <p class="mb-2 text-sm">Your name</p>
                    <input v-model="form.name" type="text" name="name" class="app-input">
                  </label>
                  <span v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</span>
                </div>
                <div class="">
                  <label>
                    <p class="mb-2 text-sm">Phone</p>
                    <input v-model="form.phone" type="text" name="phone" class="app-input">
                  </label>
                  <span v-if="errors.phone" class="text-red-500 text-xs">{{ errors.phone }}</span>
                </div>
                <div class="">
                  <label>
                    <p class="mb-2 text-sm">Email</p>
                    <input v-model="form.email" type="email" name="email" class="app-input" required>
                  </label>
                  <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>
                </div>
                <div class="">
                  <label>
                    <p class="mb-2 text-sm">Company</p>
                    <input v-model="form.company" type="text" name="company" class="app-input">
                  </label>
                  <span v-if="errors.company" class="text-red-500 text-xs">{{ errors.company }}</span>
                </div>
                <div class="col-span-2">
                  <label>
                    <p class="mb-2 text-sm">Your Requirements</p>
                    <textarea v-model="form.message" name="message" class="app-input" />
                  </label>
                  <span v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</span>
                </div>
                <div>
                  <button type="submit" class="btn app-btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
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

      if (this.form.message.length < 2) {
        isValid = false
        this.errors.message = 'Kindly provide some more details'
      }

      alert(isValid)
      return isValid
    }
  }
}
</script>

<style scoped>

</style>
