<template>
  <div>
    <h2 class="product-title">
      Horizon - DAS
    </h2>
    <h3 class="product-subtitle">
      Horizon Distributed Acoustic Sensor (DAS)
    </h3>
    <p class="product-paragraph">
      The Kifta Horizon technology is a sophisticated Distributed Acoustic Sensing (DAS) technology which
      forms a key part of a perimeter monitoring and intrusion detection solution.
    </p>
    <img src="/images/kifta-horizon-das.jpg" style="height: 300px;" alt="Horizon Das">
    <ul class="list-disc px-5">
      <li>High performance intrusion detection solution</li>
      <li>Simple installation</li>
      <li>Low cost of ownership</li>
      <li>Solution immune to RFI</li>
      <li>Event classification algorithms</li>
      <li>High detection rate – low nuisance alarm level</li>
      <li>100km range per system</li>
      <li>Location to within 5m</li>
      <li>No distributed electronics along intrusion path</li>
      <li>2 year standard warranty</li>
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
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <th style="text-align: center;" colspan="7">
                    Specifications for Horizon Range of DAS
                  </th>
                </tr>
                <tr>
                  <td>Horizon Model</td>
                  <td style="text-align: center;">
                    Das 5
                  </td>
                  <td style="text-align: center;">
                    Das 10
                  </td>
                  <td style="text-align: center;">
                    Das 20
                  </td>
                  <td style="text-align: center;">
                    Das 40
                  </td>
                  <td style="text-align: center;">
                    DAS 50
                  </td>
                  <td style="text-align: center;">
                    DAS 100
                  </td>
                </tr>
                <tr>
                  <td>
                    Smart<br>
                    Zones
                  </td>
                  <td style="text-align: center;" colspan="6">
                    1000+ zone, fully configurable, independent of each other
                  </td>
                </tr>
                <tr>
                  <td>Event Classification</td>
                  <td style="text-align: center;" colspan="6">
                    Personnel, Manual Digging, Vehicle, Mechanical Digging
                  </td>
                </tr>
                <tr>
                  <td>
                    Range<br>
                    (per unit)
                  </td>
                  <td style="text-align: center;">
                    5km
                  </td>
                  <td style="text-align: center;">
                    10km
                  </td>
                  <td style="text-align: center;">
                    20km
                  </td>
                  <td style="text-align: center;">
                    40km
                  </td>
                  <td style="text-align: center;">
                    50km
                  </td>
                  <td style="text-align: center;">
                    100km
                  </td>
                </tr>
                <tr>
                  <td>
                    Positional<br>
                    Accuracy
                  </td>
                  <td style="text-align: center;" colspan="6">
                    ±5m
                  </td>
                </tr>
                <tr>
                  <td colspan="1">
                    Number<br>
                    of Channels
                  </td>
                  <td style="text-align: center;">
                    1
                  </td>
                  <td style="text-align: center;">
                    2
                  </td>
                  <td style="text-align: center;">
                    1
                  </td>
                  <td style="text-align: center;">
                    2
                  </td>
                  <td style="text-align: center;">
                    1
                  </td>
                  <td style="text-align: center;">
                    2
                  </td>
                </tr>
                <tr>
                  <td>
                    Optical<br>
                    Fiber
                  </td>
                  <td style="text-align: center;" colspan="6">
                    G.652/ G.654 single mode optical fiber
                  </td>
                </tr>
                <tr>
                  <td>
                    Frequency<br>
                    range
                  </td>
                  <td style="text-align: center;" colspan="2">
                    1Hz~2.5kHz
                  </td>
                  <td style="text-align: center;" colspan="2">
                    1Hz~1.6kHz
                  </td>
                  <td style="text-align: center;" colspan="2">
                    1Hz~800Hz
                  </td>
                </tr>
                <tr>
                  <td>
                    Response<br>
                    time
                  </td>
                  <td style="text-align: center;" colspan="6">
                    2 to 10 seconds
                  </td>
                </tr>
                <tr>
                  <td>Voltage</td>
                  <td style="text-align: center;" colspan="6">
                    100V~240V (AC)
                  </td>
                </tr>
                <tr>
                  <td>
                    Power<br>
                    Consumption
                  </td>
                  <td style="text-align: center;" colspan="6">
                    25W
                  </td>
                </tr>
                <tr>
                  <td>
                    Data<br>
                    Export
                  </td>
                  <td style="text-align: center;" colspan="6">
                    TCP/IP to IPC. Multiple interfaces via IPC/MaxView)
                  </td>
                </tr>
                <tr>
                  <td>
                    Operating<br>
                    Temperature
                  </td>
                  <td style="text-align: center;" colspan="6">
                    -10 to 55°C
                  </td>
                </tr>
                <tr>
                  <td>Laser Safety Class</td>
                  <td style="text-align: center;" colspan="6">
                    Class 1M (EN60825-1) 2000 / Output power &lt; 10mW
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <p class="product-paragraph">
            The Horizon Distributed Acoustic Sensor (DAS) measures the temperature along the fiber using a technique
            called Coherent Optical Time Domain Reflectometry (COTDR). The DAS rapidly sends laser pulses into the fiber
            optic and measures the reflected light from the optical fiber sensing cable. However, differing from the
            Distributed Temperature Sensor, the COTDR system returned scattered signal is mixed with a local oscillator
            and then filtered. By analyzing the returned light at the Rayleigh frequencies, the Horizon DAS is able to
            create a distributed acoustic (or vibration) measurement along the entire length of the fiber, effectively
            turning the telecoms cable into a continuous series of microphones.
          </p>
        </template>

        <template v-slot:interface>
          <h5 class="product-subtitle-sm">
            System Integration – The Maxview Advantage
          </h5>
          <p class="product-paragraph">
            Kifta’s Maxview SCADA integration software is a proven solution to provide advanced visualization and
            integration with existing security technologies deployed on site. Maxview provides a system mapping
            function, along with real time event management.
            <br>
            The Horizon IPC units also provide alarm management capabilities by the use of event database management and
            seamless integration with other security technologies including DCS, CCTV and access control, to provide an
            effective integrated security solution.
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
