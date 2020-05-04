<template>
  <div>
    <h2 class="product-title">
      T-Laser DTS
    </h2>
    <h3 class="product-subtitle">
      T-Laser Distributed Temperature Sensor (DTS)
    </h3>
    <p class="product-paragraph">
      For medium to long range (5-30km) industrial monitoring applications where reliability, safety and seamless system
      integration are essential, the compact, low-power, user friendly T-Laser Distributed Temperature Sensor (DTS) is
      the ideal solution.
      The T-Laser DTS has been designed with safety in mind and has been tested to the industry’s most rigorous
      standards. The system can be used in many monitoring fields including:
    </p>
    <ul class="list-disc px-5">
      <li>Tunnel fire detection</li>
      <li>Power cable monitoring</li>
      <li>Oil well (upstream and downstream)</li>
      <li>Pipe line monitoring and dam leak detection</li>
    </ul>
    <br>
    <h4 class="product-subtitle">
      Features and Benefits
    </h4>
    <p class="product-paragraph">
      This T-Laser is part of the next generation of Kifta Distributed Temperature Sensors (DTS). These systems are
      designed specifically for industrial monitoring applications and have the following design features and
      capabilities:
    </p>
    <ul class="list-disc px-5">
      <li>Compact. low power consumption</li>
      <li>Fast response</li>
      <li>Built-in alarm and relay capabilities</li>
    </ul>
    <br>
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
                <th>Model</th>
                <th>Range</th>
                <th>Temperature Resolution</th>
                <th>Temperature Accuracy</th>
                <th>Sampling Resolution</th>
                <th>Meas. Time</th>
                <th>No. of Channels</th>
              </tr>
              <tr>
                <!-- first row -->
                <td>TL-02-10-4CH</td>
                <td>10km</td>
                <td>0.5°C</td>
                <td>≤±1°C</td>
                <td>1m</td>
                <td>&lt;15s</td>
                <td>4</td>
              </tr>
              <tr>
                <!-- second row -->
                <td>TL-02-10-8CH</td>
                <td>8km</td>
                <td>0.5°C</td>
                <td>≤±1°C</td>
                <td>1m</td>
                <td>&lt;15s</td>
                <td>8</td>
              </tr>
              <tr>
                <!-- third row -->
                <td>TL-02-20-4CH</td>
                <td>20km</td>
                <td>0.5°C</td>
                <td>≤±1°C</td>
                <td>1m</td>
                <td>&lt;60s</td>
                <td>4</td>
              </tr>
              <tr>
                <!-- fourth row -->
                <td>TL-02-20-8CH</td>
                <td>20km</td>
                <td>0.5°C</td>
                <td>≤±1°C</td>
                <td>1m</td>
                <td>&lt;60s</td>
                <td>8</td>
              </tr>
              <tr>
                <!-- fifth row -->
                <td>TL-02-30-4CH</td>
                <td>30km</td>
                <td>0.5°C</td>
                <td>≤±2°C</td>
                <td>2m</td>
                <td>&lt;120s</td>
                <td>4</td>
              </tr>
              <tr>
                <!-- sixth row -->
                <td>TL-02-30-8CH</td>
                <td>30km</td>
                <td>0.5°C</td>
                <td>≤±2°C</td>
                <td>2m</td>
                <td>&lt;120s</td>
                <td>8</td>
              </tr>
              <tr>
                <!-- seventh row -->
                <td>TL-02-40-4CH</td>
                <td>40km</td>
                <td>1.5°C</td>
                <td>≤±2°C</td>
                <td>2m</td>
                <td>&lt;240s</td>
                <td>4</td>
              </tr>
              <tr>
                <!-- eighth row -->
                <td>TL-02-40-8CH</td>
                <td>40km</td>
                <td>1.5°C</td>
                <td>≤±2°C</td>
                <td>2m</td>
                <td>&lt;240s</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
          <br>
          <!-- second table -->
          <table class="border-show w-full">
            <tbody>
              <tr>
                <!-- first table.  table headers-->
                <th>Fibre Type</th>
                <th>Channels</th>
                <th>Temperature Range</th>
                <th>Max Zone</th>
              </tr>
              <tr>
                <!-- fifth row -->
                <td>Multi-mode 50/125 (OM2, G.651.1)</td>
                <td>&lt;2.5 / 0.8 dB/km @ 850/1300nm</td>
                <td>
                  -60°C ~ 85°C (standard acrylate fiber)
                  -60°C ~ 150°C (speciality fiber)
                </td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
          <!-- third table -->
          <h5 class="product-subtitle-sm">
            Operating Environment
          </h5>
          <table class="border-show w-full">
            <tbody>
              <tr>
                <!-- first table.  table headers-->
                <th>Operating Temperature</th>
                <th>Storage Temperature</th>
                <th>Humidity </th>
                <th>Height</th>
                <th>Width</th>
                <th>Depth</th>
                <th>Weight</th>
              </tr>
              <tr>
                <!-- second row -->
                <td>-10°C ~ 50°C</td>
                <td>-10°C ~ 85°C</td>
                <td>0% ~ 95% RH NC</td>
                <td>131mm</td>
                <td>432mm</td>
                <td>332mm</td>
                <td>10kg</td>
              </tr>
            </tbody>
          </table>
          <!-- fourth table -->
          <h5 class="product-subtitle-sm">
            System Interface
          </h5>
          <table class="border-show w-full">
            <tbody>
              <tr>
                <!-- first table.  table headers-->
                <th>Internet ports</th>
                <th>Relay output</th>
                <th>Other ports</th>
                <th>Power Supply Requirements</th>
              </tr>
              <tr>
                <!-- second row -->
                <td>RJ-45, Ethernet 100Mb/s</td>
                <td>50 way</td>
                <td>RS232/485, USB</td>
                <td>15 to 40 W (25W typical), 24 VDC or AC (optional)</td>
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
            T-Laser Technology Principle
          </h5>
          <p class="product-paragraph">
            The Kifta T-Laser Distributed Temperature Sensor (DTS) measures the temperature along the fiber using a
            technique called Optical Time Domain Reflectometry (OTDR). The DTS rapidly sends laser pulses into the fiber
            optic and measures the reflected light from the optical fiber sensing cable. By analyzing the scattered
            light at the Raman frequencies the DTS is able to create a distributed temperature measurement along the
            entire length of the fiber.
          </p>
        </template>

        <template v-slot:interface>
          <h5 class="product-subtitle-sm">
            T-Laser Interfaces and System Integration
          </h5>
          <p class="product-paragraph">
            Kifta has operated as a system integrator for more than 10 years and has a full range of services from
            system design through to installation and commissioning.
            We have extensive experiencing in designing our systems to interface with standard industrial formats and
            specific customer request.
            <br>
            Kifta has designed specific customer user interfaces to consolidate, manage and visualize both DTS data
            (including 3rd party DTS systems) and integrating other data feeds. Equally, Kifta is also comfortable
            exporting data into 3rd party systems and networks. Examples of some of the interfaces Kifta has worked
            with include:
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
