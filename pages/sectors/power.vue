<template>
  <div>
    <h2 class="product-title">
      Power
    </h2>
    <h3 class="product-subtitle">
      Distributed Fiber Optic Sensing Solutions For Intelligent Condition Monitoring
    </h3>
    <p class="product-paragraph">
      When used in conjunction with a proactive maintenance approach, Kifta’s distributed fiber optic
      <nuxt-link class="app-link" to="/technology/distributed-acoustic-sensing">
        acoustic
      </nuxt-link>
      and
      <nuxt-link class="app-link" to="/technology/distributed-temperature-sensing">
        temperature
      </nuxt-link>
      sensing systems provide the operator with real time critical information on their network. This assists in
      reducing planned and unplanned maintenance and avoiding catastrophic failure along with managing risk effectively.
      For the power sector, Kifta has developed the Real Time Thermal Rating (RTTR) software which has dynamic
      cable rating algorithms that have been developed according to CIGRE and IEC60287.
    </p>
    <div class="mt-10">
      <TabNavigation default-tab="applications">
        <template v-slot:nav="{ tab }">
          <TabMenuItem v-model="tab.activeTab" sm name="applications">
            Applications
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" sm name="features-and-benefits">
            Features & Benefits
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" sm name="system-overview">
            System Overview
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" sm name="references">
            References
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" sm name="approvals">
            Approvals
          </TabMenuItem>
        </template>
        <template v-slot:applications>
          <h5 class="product-subtitle-sm">
            Power Applications For Distributed Fiber Optic Sensing
          </h5>
          <p>
            Below are some of the applications within the power sector that utilize Kifta’s range of
            <nuxt-link class="app-link" to="/products">
              distributed temperature and acoustic fiber optic sensors
            </nuxt-link>
            and intelligent software solutions. For the power sector,
            Kifta has developed the
            <nuxt-link class="app-link" to="/technology/real-time-thermal-rating/">
              Real Time Thermal Rating (RTTR)
            </nuxt-link>
            software which has dynamic cable rating algorithms developed according to CIGRE and IEC60287.
          </p>
          <h5 class="product-subtitle-sm">
            Applications
          </h5>
          <ul class="list-disc px-5">
            <li>HVAC and HVDC underground transmission power cables</li>
            <li>Joint/Splice Manhole security</li>
            <li>Overhead power lines utilizing OPGW (Optical Groundwire) and OPPC (Optical Path Phase Conductors)</li>
            <li>Cable tunnels and cable bridges</li>
            <li>Subsea cables, offshore substation and wind farms</li>
            <li>Substation Perimeter Intrusion Detection Systems (PIDS)</li>
            <li>Generating station perimeter protection</li>
            <li>Substation and transformer cables</li>
          </ul>
        </template>

        <template v-slot:features-and-benefits>
          <h5 class="product-subtitle-sm">
            Features and Benefits
          </h5>
          <div class="table-wrapper">
            <table class="table-auto border-show w-full">
              <tbody>
                <tr>
                  <th>Feature</th>
                  <th>Benefits</th>
                </tr>
                <tr>
                  <td>Precise, real-time and actionable information at all points on the grid</td>
                  <td>Rapid and focused decision making which improves custodianship over grid assets</td>
                </tr>
                <tr>
                  <td>Integrated thermal modelling of cables to industry standards (GIGRE &amp; IEC)</td>
                  <td>
                    Improved situational awareness, increased compliance, reduced risk of fines and lower insurance
                    premiums
                  </td>
                </tr>
                <tr>
                  <td>Proactive, risk based maintenance using accurately measured real-time information</td>
                  <td>Optimisation of planned maintenance program and reduction in unscheduled downtime</td>
                </tr>
                <tr>
                  <td>
                    Monitoring and alarms at all points on the grid, including associated perimeters, entry and access
                    points
                  </td>
                  <td>Improved security, lower potential for malicious or accidental third party intrusion (TPI)</td>
                </tr>
                <tr>
                  <td>Smart condition monitoring leads to effective prediction and prevention of equipment failure</td>
                  <td>Reduced downtime leading to improved return on investment and delayed capital spending</td>
                </tr>
                <tr>
                  <td>Smart management of operations windows to predict and prevent operations in harsh environments</td>
                  <td>Maximization of component lifetime increasing return on investment and delayed capital spending</td>
                </tr>
                <tr>
                  <td>Utilize existing telecoms infrastructure for sensing elements</td>
                  <td>Ease of installation, lowering overall cost of ownership</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>

        <template v-slot:system-overview>
          <h5 class="product-subtitle-sm">
            System Approach
          </h5>
          <p class="product-paragraph">
            Kifta’s extensive range of sensors and integrated smart software solutions, combined with our ability
            to interface with industry standard communication protocols, enables us to tailor the system to meet your
            specific needs.
          </p>
          <h5 class="product-subtitle-sm">
            RTTR System Overview
          </h5>
          <img src="/images/kifta-RTTR.jpg" alt="Real Time Thermal Rating">
        </template>

        <template v-slot:references>
          <h5 class="product-subtitle-sm">
            Global Leader
          </h5>
          <p class="product-paragraph">
            With more than 300 employees and facilities in 4 global hubs and 450 projects across 6 continents,
            Kifta is committed to providing you with state of the art, reliable monitoring systems to improve the
            efficiency and security of your assets.
          </p>
          <ul class="list-disc px-5">
            <li>10,000 sqm state-of-the-art production facility</li>
            <li>More than 30 R&D Engineers</li>
            <li>Class 100 clean room and testing facilities</li>
          </ul>
        </template>

        <template v-slot:approvals>
          <h5 class="product-subtitle-sm">
            Reliability and Approvals
          </h5>
          <p class="product-paragraph">
            Kifta is ISO 9001 certified and undergoes a rigorous continuous improvement program and tests all of
            its products to leading international standards.
            <br>
            For the power sector, Kifta tests according to both industry standards (IEC, CIGRE) and customer
            specific type testing. These types tests include environmental, EMC test results and specific product
            qualifications. Reports can be made available on request.
            <br>
            In addition to our industrial monitoring customers, Kifta is also a leading international supplier to
            the telecoms industry which has some of the most stringent quality and reliability requirements.
            Kifta has extensive in-house environmental testing facilities but also utilizes leading 3rd party
            testing houses for independent verification and approvals.
          </p>
          <ul class="list-disc px-5">
            <li>Extensive environmental testing on all products</li>
            <li>Components to telecom standards > 25 years MTBF</li>
            <li>Products are designed for low maintenance and cost of ownership (e.g. fan free design..)</li>
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
