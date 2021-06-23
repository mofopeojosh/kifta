<template>
  <div>
    <h2 class="product-title">
      Fire Laser - DTS
    </h2>
    <h3 class="product-subtitle">
      Fire Laser Distributed Temperature Sensing (DTS)
    </h3>
    <p class="product-paragraph">
      FireLaser is a Linear Heat Detector System specifically designed for use in Special Hazard fire detection
      applications.
    </p>
    <img src="/images/kifta-FireLaser.jpg" style="height: 300px;" alt="Firelaser DTS">
    <p class="product-paragraph">
      The Fire Laser Distributed Temperature Sensing (DTS) system connects to a distributed fiber optic cable (FireFiber)
      and determines temperature and distance data at thousands of points along the length of the cable. The fiber optic
      cable is installed within the asset to be protected and this cable acts as the sensing element. The FireLaser
      Sensor Control Unit is responsible for generating alarms based upon the calculated temperature profile. The
      FireLaser DTS can therefore detect the location of a hot spot on up to a 5km length of fiber optic cable with
      unrivaled precision. The system is able to monitor the movement of the hot spot, or multiple hot spots, in terms
      of physical position, temperature and also in real-time. FireLaser Distributed Temperature Sensing Technology
      provides a line type heat detector solution vastly superior to conventional copper based or multipoint heat
      detector.
    </p>
    <ul class="list-disc px-5">
      <li>Highly reliable embedded system technology</li>
      <li>Cost effective solution</li>
      <li>Network Scalable for distributed architectures</li>
      <li>Sensor Cable suitable for use in hazardous areas</li>
      <li>Circuit lengths up to 5000 m</li>
      <li>Multiple hotspot location to within 1m</li>
      <li>Intelligent Alarm Algorithms</li>
      <li>Relay and Modbus interface options</li>
    </ul>
    <br>
    <p class="product-paragraph">
      The
      <nuxt-link class="app-link" to="/product/maxview">
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
          <h5 class="product-subtitle-sm">
            Summary of sensing capabilities
          </h5>
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <!-- first table.  table headers-->
                  <th>FireLaser DTS Model</th>
                  <th>Range</th>
                  <th>Number of Channels</th>
                  <th>Number of Zones</th>
                  <th>Measurement Time (per circuit)</th>
                  <th>Temperature Resolution</th>
                  <th>Sample Resolution</th>
                </tr>
                <tr>
                  <!-- first row -->
                  <td>FL-03-02-1CH</td>
                  <td>2km</td>
                  <td>1</td>
                  <td>250</td>
                  <td>4 s</td>
                  <td>&lt;0.5</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- second row -->
                  <td>FL-03-02-2CH</td>
                  <td>2km</td>
                  <td>2</td>
                  <td>250</td>
                  <td>4 s</td>
                  <td>&lt;0.5</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- third row -->
                  <td>FL-03-02-4CH</td>
                  <td>2km</td>
                  <td>4</td>
                  <td>250</td>
                  <td>4 s</td>
                  <td>&lt;0.5</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- fourth row -->
                  <td>FL-03-05-1CH</td>
                  <td>5km</td>
                  <td>1</td>
                  <td>500</td>
                  <td>6 s</td>
                  <td>&lt;0.5</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- fifth row -->
                  <td>FL-03-05-2CH</td>
                  <td>5km</td>
                  <td>2</td>
                  <td>500</td>
                  <td>6 s</td>
                  <td>&lt;0.5</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- sixth row -->
                  <td>FL-03-05-4CH</td>
                  <td>5km</td>
                  <td>4</td>
                  <td>500</td>
                  <td>6 s</td>
                  <td>&lt;0.5</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- seventh row -->
                  <td>FL-03-10-2CH*</td>
                  <td>10km</td>
                  <td>2</td>
                  <td>1000</td>
                  <td>10 s</td>
                  <td>&lt;1</td>
                  <td>1 m</td>
                </tr>
                <tr>
                  <!-- eighth row -->
                  <td>FL-03-10-4CH*</td>
                  <td>10km</td>
                  <td>4</td>
                  <td>1000</td>
                  <td>10 s</td>
                  <td>&lt;1</td>
                  <td>1 m</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <!-- first row -->
                  <th>Fiber Type</th>
                  <th>Temperature Range</th>
                  <th>Attenuation</th>
                </tr>
                <tr>
                  <!-- second row -->
                  <td>Multi-mode 62.5/125 μm</td>
                  <td>
                    -60°C ~ 85°C (long term **)
                    -60°C ~ 150°C (short term **)
                  </td>
                  <td>&lt; 2.5 / 0.8 dB/km @ 850/1300nm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <!-- first row -->
                  <th colspan="7">
                    FireLaser DTS Operating Environment
                  </th>
                </tr>

                <tr>
                  <!-- first row -->
                  <td>Operating Temperature</td>
                  <td>Storage Temperature</td>
                  <td>Humidity</td>
                  <td>Height</td>
                  <td>Width</td>
                  <td>Depth</td>
                  <td>Weight</td>
                </tr>

                <tr>
                  <!-- second row -->
                  <td>-10℃ to 60℃</td>
                  <td>-20℃ to +85℃</td>
                  <td>0 to 95% RH NC</td>
                  <td>131 mm (3U)</td>
                  <td>432 mm</td>
                  <td>332 mm</td>
                  <td>10 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <!-- first row -->
                  <th>Compliance</th>
                  <th>Fire Approval</th>
                </tr>
                <tr>
                  <!-- second row -->
                  <td>
                    CE Marked, EN50081-1 (immunity), EN50082-1 (emissions) EN50130-4 (immunity), IEC 60185-1 :2001 Class
                    1M laser
                  </td>
                  <td>VdS Approved to prEN54 part 22</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <!-- first row -->
                  <th colspan="3">
                    FireLaser DTS Communications Interface
                  </th>
                </tr>
                <tr>
                  <!-- second row -->
                  <td>Relay Ports</td>
                  <td>Serial</td>
                  <td>Ethernet</td>
                </tr>
                <tr>
                  <!-- third row -->
                  <td>50 way</td>
                  <td>
                    RS 232/485
                    USB
                  </td>
                  <td>RJ-45 100Mb/s</td>
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
            its products to leading international standards
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
            FireLaser Interfaces and System Integration
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
