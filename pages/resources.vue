<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container my-10">
        <h1 class="text-5xl font-bold leading-tight">
          Document Archive
        </h1>
        <div class="text-gray-700 text-xs mb-10">
          Download and view our brochures and manuals offline.
        </div>
      </div>
      <section class="container pb-20">
        <div class="col-span-2">
          <TabNavigation default-tab="general">
            <template v-slot:nav="{ tab }">
              <TabMenuItem v-model="tab.activeTab" name="general">
                General
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="technology">
                Technology
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="power">
                Power
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="fire-and-security">
                Fire and Security
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="pipeline">
                Pipeline
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="defense">
                Defense
              </TabMenuItem>
            </template>
            <template v-slot:general>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  General Brochures
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Fire Brochure
                    </p>
                    <div>
                      <a href="/resources/FireSecurity-Brochure.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Power Brochure
                    </p>
                    <div>
                      <a href="/resources/Power-Utility.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Pipeline Brochure
                    </p>
                    <div>
                      <a href="/resources/PipelineProcess-Brochure.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Security Brochure
                    </p>
                    <div>
                      <a href="/resources/Power-Utility.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </template>
            <template v-slot:technology>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Distributed Acoustic Sensing
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      DAS Technology Overview
                    </p>
                    <div>
                      <a href="/resources/distributed-acoustic-sensing.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Horizon Data Sheet
                    </p>
                    <div>
                      <a href="/resources/Horizon-DAS-datasheet.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Face Sentry Data Sheet
                    </p>
                    <div>
                      <a href="/resources/FaceSentry-Datasheet.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Face Sentry Cable Data Sheet
                    </p>
                    <div>
                      <a href="/resources/FaceSentry-Cable-Datasheet.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Distributed Temperature Sensing
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      DTS Technology Overview
                    </p>
                    <div>
                      <a href="/resources/.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Fibre TTT Datasheet
                    </p>
                    <div>
                      <a href="/resources/.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Fire Fibre AT Data Sheet
                    </p>
                    <div>
                      <a href="/resources/FireFiber-AT-Datasheet.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Fire Laser Data Sheet
                    </p>
                    <div>
                      <a href="/resources/Fire-Laser-Datasheet.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Fire Laser Mobdus Data Sheet
                    </p>
                    <div>
                      <a href="/resources/.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      T-Laser Mobdus Data Sheet
                    </p>
                    <div>
                      <a href="/resources/FireLaset-.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Fire Laser Relay Data Sheet
                    </p>
                    <div>
                      <a href="/resources/.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </template>
            <template v-slot:fire-and-security>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Case Studies
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Case Studies – Singapore Power
                    </p>
                    <div>
                      <a href="/resources/Singapore-Linear-Heat-Pharma-Casestudy.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Case Studies – LAFARGE Cement Plant
                    </p>
                    <div>
                      <a href="/resources/Lafarge-Conveyor-Belt-case-Study.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Papers and Technical Notes
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      App Note – Belt-Conveyor-Fire-Detection-DTS
                    </p>
                    <div>
                      <a
                        href="/resources/Application-Note-Belt-Conveyor-Fire-Detection-using-DTS.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      App Note – Cable-Tunnels-Linear-Heat-Detection-using-DTS
                    </p>
                    <div>
                      <a
                        href="/resources/Application-Note-Cable-Tunnels-Linear-Heat-Detection-using-DTS.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      App Note – Escalator-Fire-Detection-using-DTS
                    </p>
                    <div>
                      <a
                        href="/resources/Application-Note-Escalator-Fire-Detection-using-DTS.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      App Note – Railway-Metro-Tunnels-Fire-Detection-DTS
                    </p>
                    <div>
                      <a
                        href="/resources/Application-Note-Railway-Metro-Tunnels-Fire-Detection-DTS.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      App Note – Road-Tunnels-Linear-Heat-Detection-using-DTS
                    </p>
                    <div>
                      <a
                        href="/resources/Application-Note-Road-Tunnels-Linear-Heat-Detection-using-DTS.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </template>
            <template v-slot:power>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Case Studies
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Case Studies – Scottish Power – Windfarm capacity increased by 20%
                    </p>
                    <div>
                      <a
                        href="/resources/Scottish-Power-Increase-windfarm-capacity-by-20-percent-Case-study.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Case Studies – Scottish Power – Cyclic rating of windfarm connection
                    </p>
                    <div>
                      <a
                        href="/resources/Scottish-Power-Cyclic-rating-of-windfarm-connection-Case-study.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Papers and Technical Notes
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Paper – Integrated-Condition-Monitoring-for-Subsea-Power-Cable-Systems
                    </p>
                    <div>
                      <a
                        href="/resources/Integrated-Condition-Monitoring-for-Subsea-Power-Cable-Systems.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Paper –
                      An-introduction-to-fibre-optic-Intelligent-Distributed-Acoustic-Sensing-iDAS-technology-for-power-industry-applications
                    </p>
                    <div>
                      <a
                        href="/resources/An-introduction-to-fibre-optic-Intelligent-Distributed-Acoustic-Sensing-iDAS-technology-for-power-industry-applications-2015.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      White Paper – Role of Distributed Fiber Optic Sensing
                    </p>
                    <div>
                      <a
                        href="/resources/The-Role-of-Distributed-Fiber-Optic-Sensing.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      White Paper – Economic benefits of distributed acoustic temperature sensing
                    </p>
                    <div>
                      <a
                        href="/resources/What-are-the-economic-benefits-of-distributed-acoustic-sensing-white-paper.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Tech Note – Temp-monitoring-windfarm-cable-circuits
                    </p>
                    <div>
                      <a
                        href="/resources/Scottish-Power-Cyclic-rating-of-windfarm-connection-Case-study.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      White Paper – Real Time Thermal Rating
                    </p>
                    <div>
                      <a href="/resources/Real-Time-Thermal-Rating-Whitepaper.pdf" download class="btn app-btn-sm">
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </template>
            <template v-slot:pipeline>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Case Studies
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Case Studies – Pipeline Intrusion Detection System for Guangdong Natural Gas Pipeline
                    </p>
                    <div>
                      <a
                        href="/resources/Case-Studies-Pipeline-Intrusion-Detection-System-for-Guangdong-Natural-Gas-Pipeline.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Papers and Technical Notes
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      Papers and Technical Notes – Economic benefits of distributed fiber optic sensing for pipelines
                    </p>
                    <div>
                      <a
                        href="/resources/Economic-benefits-distributed-fiber-optic-sensing-Pipelines.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </template>
            <template v-slot:defense>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Brochures
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="download-card">
                    <img src="/images/download-icon.svg" class="inline">
                    <p class="download-text">
                      UAV general brochure
                    </p>
                    <div>
                      <a
                        href="/resources/UAV-general-brochure.pdf"
                        download
                        class="btn app-btn-sm"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </template>
          </TabNavigation>
        </div>
      </section>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import TabNavigation from '~/components/TabNavigation'
import TabMenuItem from '~/components/TabMenuItem'
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader,
    TabMenuItem,
    TabNavigation
  }
}
</script>

<style scoped>

</style>
