<template>
  <div>
    <h2 class="product-title">
      AI Laser Night Vision Camera
    </h2>
    <h3 class="product-subtitle">
      Remote HD Laser PTZ Camera
    </h3>
    <img src="/images/kifta-AI-laser-night-vision-camera.jpg" style="height: 300px;" alt="AUV">
    <h4 class="product-subtitle-sm">
      Product Description
    </h4>
    <p class="product-paragraph">
      ES-HD3081 long distance laser infrared night vision camera, using intelligent laser infrared night vision technology, can achieve continuous monitoring day and night. It adopts high strength aluminum alloy and stainless steel material,with special reinforcement and sealing treatment,it has good seismic, impact resistance, dust prevention, rain prevention and other characteristics,it is the first choice equipment for long distance night vision monitoring.
    </p>

    <h3 class="product-subtitle">
      Multi-Spectral High-definition Heavy-duty Pan Tilt Camera
    </h3>
    <img src="/images/kifta-multi-spectral-high-definition-heavy-duty-pan-tilt-camera.jpg" style="height: 300px;" alt="AUV">
    <h4 class="product-subtitle-sm">
      Product Description
    </h4>
    <p class="product-paragraph">
      ES-HD3081 long distance laser infrared night vision camera, using intelligent laser infrared night vision technology, can achieve continuous monitoring day and night. It adopts high strength aluminum alloy and stainless steel material,with special reinforcement and sealing treatment,it has good seismic, impact resistance, dust prevention, rain prevention and other characteristics,it is the first choice equipment for long distance night vision monitoring.
    </p>

    <h3 class="product-subtitle">
      Multi-spectral High-definition Electro-optical Turret
    </h3>
    <img src="/images/kifta-multi-spectral-high-definition-electro-optical-turret.jpg" style="height: 300px;" alt="AUV">
    <h4 class="product-subtitle-sm">
      Product Characteristics
    </h4>
    <ol class="list-disc px-5 mb-10">
      <li>High stability: military design specification, high strength aluminum alloy shell, spherical wind resistance design;</li>
      <li>Precision:30W electro-optical coaxial encoder,servo drive, positioning accuracy up to 0.01°</li>
      <li>High torque and high speed:160 rare earth permanent magnet motor,strong load capacity;</li>
      <li>Wide speed: maximum speed200°/s,minimum speed0.01°/s;</li>
      <li>Strong adaptability: using visible light, thermal imaging,laser imaging, not affected by haze,smoke,rain and snow,night and other adverse environmental factors;</li>
      <li>Monitoring distance: day time monitoring distance can achieve 10 km recognition,night visual distance of 3 km meters, thermal imaging 10km to detect the source of fire;</li>
      <li>Coaxial adjustment:night detection,can support electric coaxial adjustment;</li>
      <li>Adaptive optical fog penetration function: with automatic,off, open optical fog setting options, fog level 1-9 adjustable,when the fog concentration reached a predetermined threshold, can automatically switch between digital and optical fog;</li>
      <li>Hidden monitoring: passive thermal imaging, no red storm laser night vision.</li>
    </ol>
    
    <div class="mt-10 mb-3 view-more">
      <a href="#" @click.prevent="downloadItem()" class="btn app-btn app-btn-dark app-btn-sm">
        Click to Download More Details
      </a>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Vue from 'vue';
export default {
  methods: {
  downloadItem () {
    Axios.get('/files/AI-aser-night-vision-camera.pdf', { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = "AI Laser Night Vision Camera"
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
  }
}
}
</script>

<style scoped>

</style>
