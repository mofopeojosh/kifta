(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{220:function(e,t,n){"use strict";n.r(t);var r={components:{}},o=n(20),component=Object(o.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"product-title"},[e._v("\n    Distributed Acoustic Sensing\n  ")]),e._v(" "),n("h3",{staticClass:"product-subtitle"},[e._v("\n    Definition\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    Distributed acoustic sensing systems (DAS) are fiber optic based optoelectronic instruments which measure acoustic\n    interactions along the length of a fiber optic sensing cable.\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    The unique feature of a distributed acoustic sensing system is that it provides a continuous (or distributed)\n    temperature profile along the length of the sensing cable and not at discrete sensing points.\n  ")]),e._v(" "),n("h3",{staticClass:"product-subtitle"},[e._v("\n    Distributed Acoustic Sensing Technology\n  ")]),e._v(" "),n("img",{staticStyle:{height:"300px"},attrs:{src:"/images/kifta-horizon-das.jpg",alt:"Distributed Acoustic Sensing"}}),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    Typically DAS technology uses a standard telecoms fiber optic cable and specialised fibers are only required at\n    elevated temperatures (greater than 100°C). The sensing fiber is typically based on single-mode fibers although\n    there are some specialised applications that use multimode sensing fibers.\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    The range of DAS systems is typically up to 50km per sensing fiber and each interrogation unit typically has 1 or\n    2 channels that can operate simultaneously e.g. the Kifta Horizon DAS100 can measure up to 100km with a 2\n    channel unit measuring 50km in either direction.\n  ")]),e._v(" "),n("img",{attrs:{src:"/images/kifta-das-measurement.png",alt:"Distributed Acoustic Sensing"}}),e._v(" "),n("h3",{staticClass:"product-subtitle"},[e._v("\n    Distributed Acoustic Sensing Theory And Applications\n  ")]),e._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[e._v("\n    Principle of Measurement\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    The Distributed Acoustic Sensor interrogation units transmit a pulse of laser light into the fiber optic. As this\n    pulse of light travels down the fiber optic, interactions within the fibre, which result in light reflections\n    known as backscatter, are determined by tiny strain (or vibration) events within the fiber optic which in turn are\n    caused by localised acoustic energy. This backscattered light travels back up the fibre towards the interrogation\n    unit where it is sampled at the Rayleigh frequencies. The time it takes the laser pulse allows the backscatter\n    event to be accurately mapped to a fibre distance – this is known as optical time domain reflectometry.\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    The majority of the distributed acoustic sensing systems on the market today are based on a principle known as\n    Coherent Optical Time Domain Reflectometry (COTDR).\n  ")]),e._v(" "),n("img",{attrs:{src:"/images/kifta-das-tech.jpg",alt:"Distributed Acoustic Sensing"}}),e._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[e._v("\n    Spatial Resolution And Spatial Sampling Period\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    The spatial resolution is mainly determined by the duration of the transmitted pulse, with a 100ns pulse giving\n    10m resolution being a typical value. The amount of reflected light is proportional to the pulse length so there\n    is a trade-off between spatial resolution and maximum range. To improve the maximum range, it would be desirable\n    to use a longer pulse length to increase the reflected light level but this leads to a larger spatial resolution.\n    Typically most systems have a spatial resolution of 5-10m.\n  ")]),e._v(" "),n("h3",{staticClass:"product-subtitle"},[e._v("\n    Comparison Of DAS With Other Fiber Optic Distributed Sensing Systems\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    There are a number of other distributed fiber sensing techniques that rely on different scattering mechanisms and\n    can be used to measure other parameters.\n  ")]),e._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[e._v("Brillouin based systems are typically used for measuring distributed strain and temperature.")]),e._v(" "),n("li",[e._v("\n      Brillouin scatter is much weaker than Rayleigh scatter and so the reflections from a number of pulses must be\n      summed together to enable the measurements to be made. Therefore, the maximum frequency at which changes can be\n      measured using Brillouin scatter is typically a few tens of Hz where as whereas Rayleigh based COTDR DAS systems\n      has kHz sensitivity.\n    ")]),e._v(" "),n("li",[e._v("\n      Raman based systems are typically used for temperature measurements and DTS systems are typically based on\n      Raman technology. The intensity of the Raman scatter is even lower than the Brillouin scatter and so it is\n      normally necessary to average for many seconds or even minutes in order to get reasonable results. Therefore,\n      Raman-based systems are only suitable for measuring slowly varying temperatures.\n    ")])]),e._v(" "),n("h3",{staticClass:"product-subtitle"},[e._v("\n    Data Acquisition, Signal Processing and Visualisation\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    Due to the large amounts of data produced by distributed acoustic sensing systems, it is critical that there is a\n    strategy for management, processing and visualisation of the data. These systems acquire data at up to 20 sensing\n    points at a rate greater than 10Khz. This equates to a rate where a terabyte drive can be filled in a matter of\n    days.\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    Typically the interrogation units are networked to a processing unit (industrial PC or server) which manages the\n    data storage and processing. Typically there is a rolling buffer for storing the raw data as it is seldom\n    practical to store more than this.\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    The processing unit is programmed with a range of smart algorithms for interpreting the raw data and analysing if\n    this matches pre-defined events such as an intruder event or a pipeline leak. The fiber optic sensing cable will\n    be divided into a number of zones in which specifically chosen algorithms will be selected and alarms allocated\n    within each zone.\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    There are a number of ways to visualise these events. One is to use visualisation software which is specific to\n    the DTS which, for example, may show the path of the fiber optic against a site map or diagram and in the event\n    there is an event it will highlight the location of the event and show an alarm. An alternative is that the DAS\n    software is interfaced with an existing 3rd party SCADA, control or security software package in which case the\n    event will be highlighted in the 3rd party software.\n  ")]),e._v(" "),n("img",{attrs:{src:"/images/kifta-maxview-interface.png",alt:"Distributed Acoustic Sensing"}}),e._v(" "),n("h3",{staticClass:"mt-0 product-subtitle"},[e._v("\n    Distributed Acoustic Sensing Applications\n  ")]),e._v(" "),n("p",{staticClass:"product-paragraph"},[e._v("\n    Distributed acoustic sensing is a very versatile and evolving technology. Some of the more common areas of\n    application that we see today include the following:\n  ")]),e._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[e._v("Power cable monitoring")]),e._v(" "),n("li",[e._v("Subsea cable monitoring")]),e._v(" "),n("li",[e._v("Overhead cable monitoring")]),e._v(" "),n("li",[e._v("Perimeter intrusion detection systems")]),e._v(" "),n("li",[e._v("Fire detection")])])])}],!1,null,"da9ec114",null);t.default=component.exports}}]);