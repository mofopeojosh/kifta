<template>
  <div>
    <h2 class="product-title">
      Pipeline
    </h2>
    <h3 class="product-subtitle">
      Pipeline Monitoring
    </h3>
    <p class="product-paragraph">
      Kifta has worked together with customers and partners for more than 10 years to develop security, process
      efficiency and asset integrity solutions for the petrochemical and industrial process industry.
      Whether it is a long-distance remote pipeline monitoring with limited security, an inner city pipe at risk of
      accidental damage from 3rd party interference or a process facility with pipeline condition monitoring
      requirements, Kifta’s unique and versatile range of systems can provide you with a solution.
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
            System Approach
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
            Applications
          </h5>
          <ul class="list-disc px-5">
            <li>Pipeline leak detection systems for liquid and gas pipelines</li>
            <li>
              Third party interference detection (intentional sabotage or unintentional digging, drilling in
              vicinity)
            </li>
            <li>Perimeter intrusion detection system</li>
            <li>PIG Tracking – Pipeline Inspection Gauge Tracking</li>
            <li>Pipeline Condition monitoring of pipe and valves</li>
            <li>Seismic and landfall detection</li>
            <li>LNG terminal and pipeline security and integrity</li>
            <li>Vessel integrity (leak detection , skin monitoring)</li>
          </ul>
        </template>

        <template v-slot:features-and-benefits>
          <h5 class="product-subtitle-sm">
            Features and Benefits
          </h5>
          <table class="border-show w-full">
            <tbody>
              <tr>
                <th>Feature</th>
                <th>Benefits</th>
              </tr>
              <tr>
                <td>
                  DAS monitoring for third party intervention (TPI) detection before the vent occurs, whether it is
                  malicious (terroist, product theft) or accidental (3rd party digging)
                </td>
                <td>Prevention of product theft, improved safety, lower maintenance and repair costs</td>
              </tr>
              <tr>
                <td>Precise, real-time and actionable information at all points on the pipeline</td>
                <td>
                  Rapid and focused decision making which improves custodianship over pipeline thus reducing risk to
                  reputational damage
                </td>
              </tr>
              <tr>
                <td>Proactive, risk based maintenance based on accurate measure real-time information</td>
                <td>Optimization of planned maintenance program and reduction in unscheduled downtime</td>
              </tr>
              <tr>
                <td>Smart condition monitoring leads to effective prediction and prevention of equipment failure</td>
                <td>Reduced downtime leading to improved return on investment and delayed capital spending</td>
              </tr>
              <tr>
                <td>Lead detection using both distributed acoustic (DAS) and distributed temperature sensors(DTS)</td>
                <td>Early detection of leaks can prevent environmental damage, avoid fines and risk to reputation</td>
              </tr>
              <tr>
                <td>
                  Utilize existing telecoms infrastructure along pipelines – working closely with telecoms/SCADA
                  installer
                </td>
                <td>Ease of installation, lowering overall cost of ownership</td>
              </tr>
            </tbody>
          </table>
          <h5 class="product-subtitle-sm">
            Kifta Services
          </h5>
          <p class="product-paragraph">
            Kifta has the expertise and personnel to provide services with the following disciplines, to ensure
            the system performs to your needs:
          </p>
          <ul class="list-disc px-5">
            <li>Front End Engineering Design (FEED)</li>
            <li>Project management</li>
            <li>System installation & commissioning</li>
            <li>Product training</li>
            <li>Support & maintenance</li>
          </ul>
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
          <img src="/images/kifta-pipeline-application.png" alt="Pipeline">
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
