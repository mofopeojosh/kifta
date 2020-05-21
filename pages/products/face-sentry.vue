<template>
  <div>
    <h2 class="product-title">
      Fence Sentry
    </h2>
    <h3 class="product-subtitle">
      Fence Sentry™ – Distributed Acoustic Sensors
    </h3>
    <p class="product-paragraph">
      The FenceSentry series of Distributed Acoustic Sensors (DAS) are optimised for Perimeter Intrusion Detection
      (PIDS) and provides detection and locating of intrusion events with minimal nuisance events and false alarms.
    </p>
    <img src="/images/kifta-FaceSentry.png" style="height: 300px;" alt="Horizon Das">
    <ul class="list-disc px-5">
      <li>Location of temperature events to within 1m</li>
      <li>Based on single fiber optic sensing cable. No individual sensors, no metal or moving parts</li>
      <li>
        Robust and reliable instrumentation with no moving parts (fan free) and utilising high reliability telecom
        components
      </li>
      <li>Ability to react to precise location of event for rapid action and effective troubleshooting</li>
      <li>Easy to install and low cost of ownership with low ongoing maintenance costs</li>
      <li>
        High percentage system uptime (mean time between failures > 19 years) giving complete coverage at all times
      </li>
    </ul>
    <br>
    <p class="product-paragraph">
      The
      <nuxt-link class="app-link" to="/products/maxview">
        Maxview
      </nuxt-link>
      Horizon platform is a very versatile platform which provides information at all points along
      your asset. This covers both buried assets (pipelines, cables) and assets above ground (overhead power
      lines, fences, perimeters).
    </p>
    <div class="mt-10">
      <TabNavigation default-tab="specifications">
        <template v-slot:nav="{ tab }">
          <TabMenuItem v-model="tab.activeTab" name="specifications">
            Specifications
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="approvals">
            Approvals
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="technology">
            Technology
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="interface">
            Interface
          </TabMenuItem>
        </template>
        <template v-slot:specifications>
          <table class="border-show w-full">
            <tbody>
              <tr>
                <!-- first table.  table headers-->
                <th />
                <th>FenceSentry 5</th>
                <th>FenceSentry 10</th>
              </tr>
              <tr>
                <!-- first row -->
                <td>Smart Zones</td>
                <td colspan="2">
                  1000+ zone, fully configurable, independent of each other
                </td>
              </tr>
              <tr>
                <!-- second row -->
                <td>Intelligent Classification Engines</td>
                <td colspan="2">
                  Fence related intrusion alerts. Environmental noise reduction
                </td>
              </tr>
              <tr>
                <!-- third row -->
                <td>Range (per unit)</td>
                <td>5km</td>
                <td>10km</td>
              </tr>
              <tr>
                <!-- fourth row -->
                <td>Positional Accuracy</td>
                <td colspan="2">
                  ±5m
                </td>
              </tr>
              <tr>
                <!-- fifth row -->
                <td>Number of channels</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <!-- sixth row -->
                <td>Optical fiber type</td>
                <td>G.652/ G.654 single mode optical fiber</td>
                <td>FC/APC connector</td>
              </tr>
              <tr>
                <!-- seventh row -->
                <td>Frequency range</td>
                <td colspan="2">
                  1Hz~40Hz
                </td>
              </tr>
              <tr>
                <!-- eighth row -->
                <td>Response Time</td>
                <td colspan="2">
                  3 to 10 seconds
                </td>
              </tr>
              <tr>
                <!-- ninth row -->
                <td>Voltage</td>
                <td colspan="2">
                  110V~220V(AC)
                </td>
              </tr>
              <tr>
                <!-- tenth row -->
                <td>Power Consumption</td>
                <td colspan="2">
                  20W average (40W Maximum)
                </td>
              </tr>
              <tr>
                <!-- eleventh row -->
                <td>Data Export</td>
                <td colspan="2">
                  48 relays, TCP/IP , RS 485
                </td>
              </tr>
              <tr>
                <!-- twelfth row -->
                <td>Operating Temperature</td>
                <td colspan="2">
                  0 – 40°C
                </td>
              </tr>
              <tr>
                <!-- thirteenth row -->
                <td>Integration with security system</td>
                <td colspan="2">
                  Integration with cameras (Onviv) and DVR (via Maxview for Fence)
                </td>
              </tr>
              <tr>
                <!-- thirteenth row -->
                <td>Dimensions</td>
                <td colspan="2">
                  431 x 132 x 384 mm (19” rack - 3U height)
                </td>
              </tr>
            </tbody>
          </table>
        </template>

        <template v-slot:approvals>
          <h5 class="product-subtitle-sm">
            Approvals & Testing
          </h5>
          <p class="product-paragraph">
            Kifta is ISO 9001 certified and undergoes a rigorous continuous improvement program and tests all of
            its
            products to leading international standards
          </p>
          <ul class="list-disc px-5">
            <li>Extensive environmental testing on all products</li>
            <li>Components to telecom standards > 25 years MTBF</li>
            <li>Products are designed for low maintenance and cost of ownership (e.g. fan free design..)</li>
          </ul>
          <h5 class="product-subtitle-sm">
            Industry Approvals
          </h5>
          <p class="product-paragraph">
            Kifta tests all of it’s equipment to the highest standards both based on internal specifications and
            guidelines and also to leading industry 3rd party standards. Kifta has extensive internal testing
            facilities but in addition we also test with internationally leading 3rd party test houses.
          </p>
        </template>

        <template v-slot:technology>
          <h5 class="product-subtitle-sm">
            The Technology Principle
          </h5>
          <p class="product-paragraph">
            The Distributed Acoustic Sensor (DAS) measures the temperature along the fiber optic cable using a technique
            called Coherent Optical Time Domain Reflectometry (COTDR). The distributed acoustic sensor rapidly sends
            laser pulses into the fiber optic and measures the reflected light from the optical fiber sensing cable. The
            COTDR system returned scattered signal is mixed with a local oscillator and then filtered. By analyzing the
            returned light at the Rayleigh frequencies, the distributed acoustic sensing system is able to create a
            distributed acoustic (or vibration) measurement along the entire length of the fiber, effectively turning
            the telecoms cable into a continuous series of microphones.
          </p>
        </template>

        <template v-slot:interface>
          <h5 class="product-subtitle-sm">
            System Integration – The Maxview Advantage
          </h5>
          <p class="product-paragraph">
            The FenceSentry system has an extremely flexible system architecture enabling it to integrate either
            with Kifta’s Maxview SCADA software or with any 3rd party control systems.
            With the loose coupling architecture of Maxview it can integrate multiple systems across multiple
            sites with one coherent, customisable, easy to install user friendly interface
          </p>
          <ul class="list-disc px-5">
            <li>SCADA</li>
            <li>Modbus / DNP3</li>
            <li>WITSML</li>
            <li>Electrical relay outputs</li>
            <li>OPC / IEC61850 / Generic Object Oriented Substaion Events</li>
          </ul>
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
