<template>
  <div>
    <h2 class="product-title">
      Fire & Security
    </h2>
    <h3 class="product-subtitle">
      Smart Monitoring Solutions For Intelligent Assets
    </h3>
    <p class="product-paragraph">
      Kifta has worked together with customers and partners for more than 10 years to develop monitoring solutions
      that enhance the safety and security of your critical infrastructure and personnel.
      Our range of fiber optic monitoring instrumentation combined with our smart software and services provide you with
      the right information at the right time to detect risks early, take action, to minimise damage, avoid catastrophic
      failure and reduce financial, environmental and reputational risk.
    </p>
    <div class="mt-10">
      <TabNavigation default-tab="applications">
        <template v-slot:nav="{ tab }">
          <TabMenuItem v-model="tab.activeTab" name="applications">
            Applications
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="features-and-benefits">
            Features And Benefits
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="references">
            References
          </TabMenuItem>
          <TabMenuItem v-model="tab.activeTab" name="approvals">
            Approvals
          </TabMenuItem>
        </template>
        <template v-slot:applications>
          <p class="product-paragraph">
            Applications areas include:
          </p>
          <h5 class="product-subtitle-sm">
            Transport
          </h5>
          <ul class="list-disc px-5">
            <li>
              Airport –
              <nuxt-link class="app-link" to="/secotrs/fire-and-security/linear-heat-detection">
                linear heat detection
              </nuxt-link>
              and perimeter security (PIDS)
            </li>
            <li>
              Tunnels –
              <nuxt-link class="app-link" to="/secotrs/fire-and-security/linear-heat-detection">
                linear heat detection
              </nuxt-link>
            </li>
            <li>
              Overhead power lines utilizing OPGW (Optical Groundwire) and OPPC (Optical Path Phase Conductors)
              <ul class="list-disc px-5">
                <li>Road</li>
                <li>Rail and Metro</li>
              </ul>
            </li>
          </ul>
          <h5 class="product-subtitle-sm">
            Power
          </h5>
          <ul class="list-disc px-5">
            <li>Cable trays and tunnels – linear heat & access</li>
            <li>Transformers and switch gear – linear heat</li>
            <li>Substation – perimeter</li>
          </ul>
          <h5 class="product-subtitle-sm">
            Petrochemical
          </h5>
          <ul class="list-disc px-5">
            <li>Refinery and storage tanks – perimeter security (PIDS)</li>
            <li>Offshore platforms – heat</li>
          </ul>
          <h5 class="product-subtitle-sm">
            Warehousing and storage
          </h5>
          <h5 class="product-subtitle-sm">
            Mining and minerals – conveyor belt
          </h5>
          <img src="/images/kifta-fire-application.jpg" alt="Real Time Thermal Rating">
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
                  <td>
                    DAS monitoring for third party intervention (TPI) detection before the event occurs, whether it is
                    malicious (terrorist, product theft) or accidental (3rd party digging)
                  </td>
                  <td>Prevention of theft, improved safety, lower maintenance and repair costs</td>
                </tr>
                <tr>
                  <td>Precise, real-time and actionable information at all points on your asset</td>
                  <td>
                    Rapid and focused decision making with improved custodianship over assets thus reducing risk to
                    reputation damage
                  </td>
                </tr>
                <tr>
                  <td>Smart configurable alarms - early rate of rise detection</td>
                  <td>Early detection of fire - prevention of damage to assets, protection of personnel</td>
                </tr>
                <tr>
                  <td>Passive optical components, no electronics or moving parts</td>
                  <td>Low maintenance and low cost of ownership. Suitable for use in Atex areas</td>
                </tr>
                <tr>
                  <td>Temperature monitoring information - dual use for ventilation control</td>
                  <td>Low cost of investment for additional assets</td>
                </tr>
                <tr>
                  <td>Utilize existing telecoms infrastructure working closely with telecoms/SCADA installer</td>
                  <td>Ease of installation, lowering overall cost of ownership</td>
                </tr>
              </tbody>
            </table>
          </div>
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
