export const state = () => ({
  all: [
    {
      name: 'UAV',
      path: '/product/uav',
      type: 'hardware',
      description: "An Unmanned Aerial Vehicle (UAV) is an aircraft that carries no human pilot or passengers. UAVs can be fully or partially autonomous but are more often controlled remotely by a human pilot. ",
      image: "/images/kifta-uav-parts-1.jpg",
      featured: true
    },
    {
      name: 'Horizon - DAS',
      path: '/product/horizon-das',
      type: 'software',
      description: "The Kifta Horizon technology is a sophisticated Distributed Acoustic Sensing (DAS) technology which forms a key part of a perimeter monitoring and intrusion detection solution. ",
      image: "/images/kifta-horizon-das.jpg",
      featured: true
    },
    {
      name: 'Fire laser - DTS',
      path: '/product/fire-laser-dts',
      type: 'software',
      description: "FireLaser is a Linear Heat Detector System specifically designed for use in Special Hazard fire detection applications. The Fire Laser Distributed Temperature Sensing (DTS) system connects to a distributed fiber optic cable (FireFiber) and determines temperature and distance data at thousands of points along the length of the cable. ",
      image: "/images/kifta-FireLaser.jpg",
      featured: true
    },
    {
      name: 'T-Laser - DTS',
      path: '/product/t-laser-dts',
      type: 'software',
      description: "For medium to long range (5-30km) industrial monitoring applications where reliability, safety and seamless system integration are essential, the compact, low-power, user friendly T-Laser Distributed Temperature Sensor (DTS) is the ideal solution. The T-Laser DTS has been designed with safety in mind and has been tested to the industry’s most rigorous standards. ",
      image: "/images/kifta-T-Laser.jpg",
      featured: false
    },
    {
      name: 'Real-time Thermal Rating',
      path: '/product/real-time-thermal-rating',
      type: 'hardware',
      description: "Kifta’s RTTR is a key component of a utility operator’s intelligent condition monitoring systems. This system helps you to reduce risk, to implement smart maintenance programs and to increase the efficiency of your load management system. Based on the thermal analysis defined by IEC-60287 and IEC-60853 and combined with Distributed Temperature Sensors (DTS) and Distributed Acoustic Sensors (DAS),",
      image: "/images/kifta-real-time-thermal-rating-1.png",
      featured: false
    },
    {
      name: 'Maxview - software',
      path: '/product/maxview-software',
      type: 'software',
      description: "The Max View integrated monitoring platform provides operators with a fully customisable system with advanced visualisation and analytics. Max View is a truly versatile solution and has been used in a wide range of industries including power utilities, structural health, processing, refining and pipeline monitoring. ",
      image: "/images/kifta-maxview-software.jpg",
      featured: true
    },
    {
      name: 'FenceSentry',
      path: '/product/face-sentry',
      type: 'hardware',
      description: "The FenceSentry series of Distributed Acoustic Sensors (DAS) are optimised for Perimeter Intrusion Detection (PIDS) and provides detection and locating of intrusion events with minimal nuisance events and false alarms. ",
      image: "/images/sentry-fencing.jpeg",
      featured: false
    },
    // {
    //   name: 'ROV',
    //   path: '/product/rov',
    //   type: 'hardware',
    //   description: "ROVs are unoccupied, highly maneuverable underwater vehicles that can be used to explore ocean depths while the controller is located somewhere above the water. ",
    //   image: "/images/kifta-rov.jpg",
    //   featured: false
    // },
    // {
    //   name: 'AUV',
    //   path: '/product/auv',
    //   type: 'hardware',
    //   description: "The medium-sized AUV is mainly used for submarine search and pipeline inspection, its main task is to cruise along the submarine oil and gas pipeline and find the buried, suspended, leaking and other damages of the pipeline. In addition, it can also be used for general investigation and marine investigation tasks. ",
    //   image: "/images/kifta-auv.png",
    //   featured: false
    // },
    {
      name: 'RUV',
      path: '/product/ruv',
      type: 'hardware',
      description: "An RUV is a brilliant combination of a sports utility vehicle (SUV) and a recreational vehicle (RV). They're smaller in size, and smoother to drive than other types of motorhomes, but the inside is still spacious enough to accommodate the whole family. ",
      image: "/images/kifta-ruv.jpeg",
      featured: false
    },
    {
      name: 'National Facial Database - Software',
      path: '/product/national-facial-database',
      type: 'software',
      description: "A facial recognition system is a technology capable of matching a human face from a digital image or a video frame against a database of faces, typically employed to authenticate users through ID verification services, works by pinpointing and measuring facial features from a given image.",
      image: "/images/face-recognition.jpg",
      featured: true
    },
    {
      name: 'Smart Glasses ',
      path: '/product/smart-glasses',
      type: 'hardware',
      description: "Monocular AR glasses is a kind of lightweight AR intelligent glasses with high imaging quality and high performance, weighing only 35 grams (equivalent to the weight of ordinary myopic glasses), thus ensuring long-term burden-free wearing",
      image: "/images/kifta-smart-glass-1.jpg",
      featured: true
    },
    {
      name: 'Smart Helmet',
      path: '/product/smart-helmet',
      type: 'hardware',
      description: "It is developed for the military industry and applicable to such scenarios as individual soldier combat, equipment maintenance, military training and operation commanding, etc. ",
      image: "/images/kifta-smart-military-helmet-2.jpg",
      featured: true
    },
    {
      name: 'Long Range PTZ Camera',
      path: '/product/long-range-ptz-camera',
      type: 'hardware',
      description: "Military Grade Intelligent Pan Tilt Camera Ultra Long Range 20KM. Support multiple lens preset setting function, variable multiple adaptive, rotation speed can be adjusted automatically according to lens variable multiple and multiple;",
      image: "/images/kifta-long-range-camera.jpg",
      featured: true
    },
    {
      name: 'AI Laser Night Vision Camera',
      path: '/product/ai-laser-night-vision-camera',
      type: 'hardware',
      description: "ES-HD3081 long distance laser infrared night vision camera, using intelligent laser infrared night vision technology, can achieve continuous monitoring day and night. It adopts high strength aluminum alloy and stainless steel material,with special reinforcement and sealing treatment,it has good seismic, impact resistance, dust prevention, rain prevention and other characteristics,it is the first choice equipment for long distance night vision monitoring.",
      image: "/images/kifta-AI-laser-night-vision-camera.jpg",
      featured: false
    }
  ]
})

// getters
export const getters = {
  all: state => state.all,
  softwares: state => state.all.filter(p => p.type == 'software'),
  hardwares: state => state.all.filter(p => p.type == 'hardware'),
}