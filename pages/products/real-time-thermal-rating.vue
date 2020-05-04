<template>
  <div>
    <h2 class="product-title">
      Real Time Thermal Rating (RTTR)
    </h2>
    <p class="product-paragraph">
      Kifta’s RTTR is a key component of a utility operator’s intelligent condition monitoring systems. This system
      helps you to reduce risk, to implement smart maintenance programs and to increase the efficiency of your load
      management system
    </p>
    <p class="product-paragraph">
      Based on the thermal analysis defined by IEC-60287 and IEC-60853 and combined with Distributed Temperature Sensors
      (DTS) and Distributed Acoustic Sensors (DAS), the Kifta RTTR can be used in the following applications
    </p>
    <ul class="list-disc px-5">
      <li>Subsea power cable</li>
      <li>Cable tunnels & Cable bridges</li>
      <li>Underground Cable and Cable Pipes</li>
      <li>Subsea Umbilical cables and ROV cables</li>
      <li>Power generation, transmission and substations</li>
      <li>Overhead Lines utilizing OPPC</li>
    </ul>
    <br>
    <p class="product-paragraph">
      The
      <nuxt-link to="/products/maxview">
        Maxview
      </nuxt-link>
      Horizon platform is a very versatile platform which provides information at all points along
      your asset. This covers both buried assets (pipelines, cables) and assets above ground (overhead power
      lines, fences, perimeters).
      Kifta’s extensive library of event classification engines assures that a wide variety of events can be
      detected before any potential threat or damage occurs. With intelligent zone configuration you are able to
      configure and customize according to your needs.
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
                <td rowspan="4">
                  <strong>Alarm Indicators</strong>
                </td>
                <td colspan="2">
                  <strong>Fault Monitoring</strong>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  Maximum Temperature Conductor Surface (MaxTCS)<br>
                  Peak Temperature Conductor Surface (Peak TCS)
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <strong>Load Monitoring</strong>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  Circuit Load (Amps from current sensor or SCAD feed)<br>
                  Temperature of cable conductor (TCC)
                </td>
              </tr>
              <tr>
                <td rowspan="2">
                  <strong>Emergency Load</strong>
                </td>
                <td colspan="2">
                  Short Term Permissable Load (STPL – Amps)<br>
                  Short Term Permissable Duration (STPD)<br>
                  30 min, 1 hr, 2hr, 4hr, 8hr
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  Medium Term Permissible Duration<br>
                  8hr – 48hr
                </td>
              </tr>
              <tr>
                <td rowspan="2">
                  <strong>Software Input paremeters</strong>
                </td>
                <td><strong>Cable</strong></td>
                <td><strong>Environment</strong></td>
              </tr>
              <tr>
                <td>
                  Cable dimensions<br>
                  Dielectric loss<br>
                  Sheath Loss<br>
                  Nominal rating
                </td>
                <td>
                  Tunnel/room – convection characteristics<br>
                  Buried – Soil thermal resistance &amp; capacity<br>
                  Buried – multilayer option<br>
                  IEC – T4option<br>
                  Self adpation option
                </td>
              </tr>
              <tr>
                <td><strong>Sensor Input Parameters</strong></td>
                <td colspan="2">
                  Temperature – Distributed Temperature Sensor (Kiftaor 3rd party)<br>
                  Current sensor (Kifta supplied or 3rd party)<br>
                  Security &amp; Environemnts sensors (Gas, CCTV, PSTN)<br>
                  Vibration &amp; Acoustic (Distributed Acoustic Sensors)
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
            Real Time Thermal Rating (RTTR)
          </h5>
          <p class="product-paragraph">
            Kifta’s RTTR is a key component of a utility operator’s intelligent condition monitoring systems. This
            system helps you to reduce risk, to implement smart, proactive maintenance programs and to increase the
            efficiency of your load management system
          </p>
          <p class="product-paragraph">
            Based on the thermal analysis defined by IEC-60287 and IEC-60853 and combined with Kifta’s Distributed
            Temperature Sensors (DTS) and Distributed Acoustic Sensors (DAS) our RTTR provides the following benefits:
          </p>
          <p class="product-paragraph">
            Determine current and future loading and provide emergency rating calculations
            Fault Location for the precise localisation of any issues in the circuit
            Analyse power cable hot-spots to determine if a circuit requires upgrading or providing required
            quantitative information for life extension case
            Circuit Diagnostics of a variety of circuit parameters including potential partial discharges.
          </p>
        </template>

        <template v-slot:interface>
          <h5 class="product-subtitle-sm">
            Advanced Visualisation and User Friendly Interface
          </h5>
          <p class="product-paragraph">
            Kifta’s RTTR provides a user friendly solution to managing your network. The RTTR software can pull
            multiple sensors (current sensors, 3rd party DTS, security sensors…) from multiple circuits across a number
            of sites into one central location for complete control.
          </p>
          <p class="product-paragraph">
            The RTTR also has the output to interface with legacy systems and can output in a number of industry
            standard formats (Modbus, RS485, RS232 …) or can be customised according to customer requests
          </p>
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
