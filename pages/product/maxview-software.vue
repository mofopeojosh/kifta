<template>
  <div>
    <h2 class="product-title">
      Max View - Software
    </h2>
    <h3 class="product-subtitle">
      Max View Integrated Monitoring
    </h3>
    <p class="product-paragraph">
      The Max View integrated monitoring platform provides operators with a fully customisable system with advanced
      visualisation and analytics. Max View is a truly versatile solution and has been used in a wide range of industries
      including power utilities, structural health, processing, refining and pipeline monitoring.
    </p>
    <p class="product-paragraph">
      Key features and benefits:
    </p>
    <ul class="list-disc px-5">
      <li>Advanced visualisation ensures situational awareness across your infrastructure</li>
      <li>Improve ROI on existing assets and systems</li>
      <li>Scalable across global infrastructure</li>
      <li>Supports multiple devices and hardware</li>
      <li>Low cost of ownership and easy to deploy</li>
      <li>No software or hardware installation required</li>
      <li>High adaptable user interface</li>
      <li>Flexible and adaptable to your requirements</li>
      <li>Suitable for small and large operators</li>
    </ul>
    <br>
    <p class="product-paragraph">
      Max View Software Core Functions:
    </p>
    <ul class="list-disc px-5">
      <li>Data export and import</li>
      <li>Data storage</li>
      <li>Intelligent control and alarms</li>
      <li>Advanced visualisation</li>
      <li>Complex analytics</li>
    </ul>
    <div class="mt-10">
      <TabNavigation default-tab="specifications">
        <template v-slot:nav="{ tab }">
          <TabMenuItem v-model="tab.activeTab" name="specifications">
            Specifications
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="technology">
            Technology
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="interface">
            Interface
          </TabMenuItem>
        </template>
        <template v-slot:specifications>
          <img src="/images/kifta-maxview-specification.png" alt="Maxview">
        </template>

        <template v-slot:technology>
          <img src="/images/kifta-maxview-technology.png" alt="Maxview">
        </template>

        <template v-slot:interface>
          <h5 class="product-subtitle-sm">
            System Integration – The Max View Advantage
          </h5>
          <p class="product-paragraph">
            You decide how to configure your user interface. Intuitive parent-child page hierarchy allows you to have a
            wide range of views from site overview, sub-stations or partial views down to specific pieces equipment. The
            user can select the background image that meets requirements. This could be a site diagram, photo, GIS map
            or 3D modelling available.
          </p>
          <p class="product-paragraph">
            Dynamically linked images can be placed as required on the site overview and can link through to real time
            sensor information, real time video feeds and intelligent, zone based alarms can be configured as required.
          </p>
          <img src="/images/kifta-maxview-interface.png" alt="Maxview">
        </template>
      </TabNavigation>
    </div>
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
