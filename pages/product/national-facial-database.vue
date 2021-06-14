<template>
  <div>
    <h2 class="product-title">
      National Facial Database - Software
    </h2>
    <h5 class="product-subtitle-sm">
      Design Principle
    </h5>
    <img src="/images/national-facial-database-design-principle.png" alt="National Facial Database Design Principles">
    
    <h5 class="product-subtitle-sm">
      Solution Architecture
    </h5>
    <img src="/images/national-facial-database-solution-architecture-img.jpg" alt="National Facial Database Design Principles">

    <div class="mt-10 mb-10">
      <h5 class="product-subtitle-sm">
        Construction Procedure
      </h5>
      <TabNavigation default-tab="step1">
        <template v-slot:nav="{ tab }">
          <TabMenuItem v-model="tab.activeTab" name="step1">
            Step 1
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="step2">
            Step 2
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="step3">
            Step 3
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="step4">
            Step 4
          </TabMenuItem>
        </template>
        <template v-slot:step1>
          <div>
            <h5 class="product-subtitle-sm">
              State-level Population Data Collection
            </h5>
            <p class="product-paragraph">
              Organize state-level census of population, collect the population data and load to the national population database including name, gender, birthday, ID No., address, face image, etc.
            </p>
          </div>
        </template>
        <template v-slot:step2>
          <div>
            <h5 class="product-subtitle-sm">
              Industries Population Data Collection
            </h5>
            <p class="product-paragraph">
              Collect specified people data by industries for industry facial database. For instance, the suspect facial image database for public security, the VIP customer database for bank, etc.
            </p>
          </div>
        </template>
        <template v-slot:step3>
          <div>
            <h5 class="product-subtitle-sm">
              System Integration
            </h5>
            <p class="product-paragraph">
              Integrate the databases with the frontend devices and 3rd parties system, make readiness for service application for each industries. 
            </p>
          </div>
        </template> 
        <template v-slot:step4>
          <div>
            <h5 class="product-subtitle-sm">
              Service Application
            </h5>
            <p class="product-paragraph">
              Provide identification confirmation services by collecting frontend facial images and compare with the facial image in the database.
            </p>
          </div>
        </template> 
      </TabNavigation>
    </div>

    <h5 class="product-subtitle-sm">
      Solution Network
    </h5>
    <img src="/images/national-facial-database-system-network.jpg" alt="National Facial Database Design Principles">

    <h5 class="product-subtitle-sm">
      System Feature
    </h5>
    <ul class="list-disc px-5 mb-10">
      <li>Billion-level DL Algorithm</li>
      <li>High Accuracy in Different Environments </li>
      <li>32-channel Video Stream Analysis/Server</li>
      <li>Facial image DB 70mil/single server 2bln/cluster server</li>
      <li>Facial Comparison in bn-level Database</li>
      <li>Trajectory, Foothold, Peer Analysis</li>
      <li>Static Recognition/Dynamic Search</li>
      <li>1000 pics/sec Image Import Capability</li>
      <li>Visible Display of Abstract Data</li>
    </ul>
  </div>
</template>

<script>
import TabNavigation from '~/components/TabNavigation'
import TabMenuItem from '~/components/TabMenuItem'

export default {
  components: {
    TabMenuItem,
    TabNavigation
  }
}
</script>

<style scoped>

</style>
