<template>
  <div>
    <h2 class="product-title">
      Distributed Acoustic Sensing
    </h2>
    <h3 class="product-subtitle">
      Definition
    </h3>
    <p class="product-paragraph">
      Distributed acoustic sensing systems (DAS) are fiber optic based optoelectronic instruments which measure acoustic
      interactions along the length of a fiber optic sensing cable.
    </p>
    <p class="product-paragraph">
      The unique feature of a distributed acoustic sensing system is that it provides a continuous (or distributed)
      temperature profile along the length of the sensing cable and not at discrete sensing points.
    </p>
    <h3 class="product-subtitle">
      Distributed Acoustic Sensing Technology
    </h3>
    <img src="/images/kifta-horizon-das.jpg" style="height: 300px;" alt="Distributed Acoustic Sensing">
    <p class="product-paragraph">
      Typically DAS technology uses a standard telecoms fiber optic cable and specialised fibers are only required at
      elevated temperatures (greater than 100°C). The sensing fiber is typically based on single-mode fibers although
      there are some specialised applications that use multimode sensing fibers.
    </p>
    <p class="product-paragraph">
      The range of DAS systems is typically up to 50km per sensing fiber and each interrogation unit typically has 1 or
      2 channels that can operate simultaneously e.g. the Kifta Horizon DAS100 can measure up to 100km with a 2
      channel unit measuring 50km in either direction.
    </p>
    <img src="/images/kifta-das-measurement.png" alt="Distributed Acoustic Sensing">
    <h3 class="product-subtitle">
      Distributed Acoustic Sensing Theory And Applications
    </h3>
    <h5 class="product-subtitle-sm">
      Principle of Measurement
    </h5>
    <p class="product-paragraph">
      The Distributed Acoustic Sensor interrogation units transmit a pulse of laser light into the fiber optic. As this
      pulse of light travels down the fiber optic, interactions within the fibre, which result in light reflections
      known as backscatter, are determined by tiny strain (or vibration) events within the fiber optic which in turn are
      caused by localised acoustic energy. This backscattered light travels back up the fibre towards the interrogation
      unit where it is sampled at the Rayleigh frequencies. The time it takes the laser pulse allows the backscatter
      event to be accurately mapped to a fibre distance – this is known as optical time domain reflectometry.
    </p>
    <p class="product-paragraph">
      The majority of the distributed acoustic sensing systems on the market today are based on a principle known as
      Coherent Optical Time Domain Reflectometry (COTDR).
    </p>
    <img src="/images/kifta-das-tech.jpg" alt="Distributed Acoustic Sensing">
    <h5 class="product-subtitle-sm">
      Spatial Resolution And Spatial Sampling Period
    </h5>
    <p class="product-paragraph">
      The spatial resolution is mainly determined by the duration of the transmitted pulse, with a 100ns pulse giving
      10m resolution being a typical value. The amount of reflected light is proportional to the pulse length so there
      is a trade-off between spatial resolution and maximum range. To improve the maximum range, it would be desirable
      to use a longer pulse length to increase the reflected light level but this leads to a larger spatial resolution.
      Typically most systems have a spatial resolution of 5-10m.
    </p>
    <h3 class="product-subtitle">
      Comparison Of DAS With Other Fiber Optic Distributed Sensing Systems
    </h3>
    <p class="product-paragraph">
      There are a number of other distributed fiber sensing techniques that rely on different scattering mechanisms and
      can be used to measure other parameters.
    </p>
    <ul class="list-disc px-5">
      <li>Brillouin based systems are typically used for measuring distributed strain and temperature.</li>
      <li>
        Brillouin scatter is much weaker than Rayleigh scatter and so the reflections from a number of pulses must be
        summed together to enable the measurements to be made. Therefore, the maximum frequency at which changes can be
        measured using Brillouin scatter is typically a few tens of Hz where as whereas Rayleigh based COTDR DAS systems
        has kHz sensitivity.
      </li>
      <li>
        Raman based systems are typically used for temperature measurements and DTS systems are typically based on
        Raman technology. The intensity of the Raman scatter is even lower than the Brillouin scatter and so it is
        normally necessary to average for many seconds or even minutes in order to get reasonable results. Therefore,
        Raman-based systems are only suitable for measuring slowly varying temperatures.
      </li>
    </ul>
    <h3 class="product-subtitle">
      Data Acquisition, Signal Processing and Visualisation
    </h3>
    <p class="product-paragraph">
      Due to the large amounts of data produced by distributed acoustic sensing systems, it is critical that there is a
      strategy for management, processing and visualisation of the data. These systems acquire data at up to 20 sensing
      points at a rate greater than 10Khz. This equates to a rate where a terabyte drive can be filled in a matter of
      days.
    </p>
    <p class="product-paragraph">
      Typically the interrogation units are networked to a processing unit (industrial PC or server) which manages the
      data storage and processing. Typically there is a rolling buffer for storing the raw data as it is seldom
      practical to store more than this.
    </p>
    <p class="product-paragraph">
      The processing unit is programmed with a range of smart algorithms for interpreting the raw data and analysing if
      this matches pre-defined events such as an intruder event or a pipeline leak. The fiber optic sensing cable will
      be divided into a number of zones in which specifically chosen algorithms will be selected and alarms allocated
      within each zone.
    </p>
    <p class="product-paragraph">
      There are a number of ways to visualise these events. One is to use visualisation software which is specific to
      the DTS which, for example, may show the path of the fiber optic against a site map or diagram and in the event
      there is an event it will highlight the location of the event and show an alarm. An alternative is that the DAS
      software is interfaced with an existing 3rd party SCADA, control or security software package in which case the
      event will be highlighted in the 3rd party software.
    </p>
    <img src="/images/kifta-maxview-interface.png" alt="Distributed Acoustic Sensing">
    <h3 class="mt-0 product-subtitle">
      Distributed Acoustic Sensing Applications
    </h3>
    <p class="product-paragraph">
      Distributed acoustic sensing is a very versatile and evolving technology. Some of the more common areas of
      application that we see today include the following:
    </p>
    <ul class="list-disc px-5">
      <li>Power cable monitoring</li>
      <li>Subsea cable monitoring</li>
      <li>Overhead cable monitoring</li>
      <li>Perimeter intrusion detection systems</li>
      <li>Fire detection</li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {}
}
</script>

<style scoped>

</style>
