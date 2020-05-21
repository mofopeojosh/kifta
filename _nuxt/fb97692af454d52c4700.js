(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{179:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("c2da6f5c",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var r=n(179);n.n(r).a},183:function(t,e,n){(e=n(47)(!1)).push([t.i,".tab-item[data-v-44d4d03c]{margin-right:1.25rem;font-size:1.25rem;font-weight:700}.tab-item-sm[data-v-44d4d03c]{font-size:1.125rem}.tab-item.active[data-v-44d4d03c]{--text-opacity:1;color:#9f7aea;color:rgba(159,122,234,var(--text-opacity));border-bottom-width:2px;--border-opacity:1;border-color:#9f7aea;border-color:rgba(159,122,234,var(--border-opacity))}",""]),t.exports=e},184:function(t,e,n){"use strict";var r={name:"TabNavigation",props:{defaultTab:{type:String,required:!0}},data:function(){return{tabConfig:{activeTab:this.defaultTab}}}},o=n(20),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"flex"},[this._t("nav",null,{tab:this.tabConfig})],2),this._v(" "),e("div",{staticClass:"mt-10"},[this._t(this.tabConfig.activeTab,null,{tab:this.tabConfig})],2)])}),[],!1,null,"31e337a5",null);e.a=component.exports},185:function(t,e,n){"use strict";var r={name:"TabMenuItem",props:{value:{type:String,required:!0},name:{type:String,required:!0},sm:{type:Boolean,required:!1}}},o=(n(182),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"tab-item",class:{active:t.value===t.name,"tab-item-sm":t.sm},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("input",t.name)}}},[t._t("default")],2)}),[],!1,null,"44d4d03c",null);e.a=component.exports},203:function(t,e,n){"use strict";n.r(e);var r=n(184),o={components:{TabMenuItem:n(185).a,TabNavigation:r.a}},v=n(20),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"product-title"},[t._v("\n    Fire Laser - DTS\n  ")]),t._v(" "),n("h3",{staticClass:"product-subtitle"},[t._v("\n    Fire Laser Distributed Temperature Sensing (DTS)\n  ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n    FireLaser is a Linear Heat Detector System specifically designed for use in Special Hazard fire detection\n    applications.\n  ")]),t._v(" "),n("img",{staticStyle:{height:"300px"},attrs:{src:"/images/kifta-FireLaser.jpg",alt:"Firelaser DTS"}}),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n    The Fire Laser Distributed Temperature Sensing (DTS) system connects to a distributed fiber optic cable (FireFiber)\n    and determines temperature and distance data at thousands of points along the length of the cable. The fiber optic\n    cable is installed within the asset to be protected and this cable acts as the sensing element. The FireLaser\n    Sensor Control Unit is responsible for generating alarms based upon the calculated temperature profile. The\n    FireLaser DTS can therefore detect the location of a hot spot on up to a 5km length of fiber optic cable with\n    unrivaled precision. The system is able to monitor the movement of the hot spot, or multiple hot spots, in terms\n    of physical position, temperature and also in real-time. FireLaser Distributed Temperature Sensing Technology\n    provides a line type heat detector solution vastly superior to conventional copper based or multipoint heat\n    detector.\n  ")]),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n    The\n    "),n("nuxt-link",{staticClass:"app-link",attrs:{to:"/products/maxview"}},[t._v("\n      Maxview\n    ")]),t._v("\n    Horizon platform is a very versatile platform which provides information at all points along\n    your asset. This covers both buried assets (pipelines, cables) and assets above ground (overhead power\n    lines, fences, perimeters).\n    Kifta’s extensive library of event classification engines assures that a wide variety of events can be\n    detected before any potential threat or damage occurs. With intelligent zone configuration you are able to\n    configure and customize according to your needs.\n  ")],1),t._v(" "),n("div",{staticClass:"mt-10"},[n("TabNavigation",{attrs:{"default-tab":"specifications"},scopedSlots:t._u([{key:"nav",fn:function(e){var r=e.tab;return[n("TabMenuItem",{attrs:{name:"specifications"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Specifications\n        ")]),t._v(" "),n("TabMenuItem",{attrs:{name:"approvals"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Approvals\n        ")]),t._v(" "),n("TabMenuItem",{attrs:{name:"technology"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Technology\n        ")]),t._v(" "),n("TabMenuItem",{attrs:{name:"interface"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Interface\n        ")])]}},{key:"specifications",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Summary of sensing capabilities\n        ")]),t._v(" "),n("table",{staticClass:"border-show w-full"},[n("tbody",[n("tr",[n("th",[t._v("FireLaser DTS Model")]),t._v(" "),n("th",[t._v("Range")]),t._v(" "),n("th",[t._v("Number of Channels")]),t._v(" "),n("th",[t._v("Number of Zones")]),t._v(" "),n("th",[t._v("Measurement Time (per circuit)")]),t._v(" "),n("th",[t._v("Temperature Resolution")]),t._v(" "),n("th",[t._v("Sample Resolution")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-02-1CH")]),t._v(" "),n("td",[t._v("2km")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("250")]),t._v(" "),n("td",[t._v("4 s")]),t._v(" "),n("td",[t._v("<0.5")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-02-2CH")]),t._v(" "),n("td",[t._v("2km")]),t._v(" "),n("td",[t._v("2")]),t._v(" "),n("td",[t._v("250")]),t._v(" "),n("td",[t._v("4 s")]),t._v(" "),n("td",[t._v("<0.5")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-02-4CH")]),t._v(" "),n("td",[t._v("2km")]),t._v(" "),n("td",[t._v("4")]),t._v(" "),n("td",[t._v("250")]),t._v(" "),n("td",[t._v("4 s")]),t._v(" "),n("td",[t._v("<0.5")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-05-1CH")]),t._v(" "),n("td",[t._v("5km")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("500")]),t._v(" "),n("td",[t._v("6 s")]),t._v(" "),n("td",[t._v("<0.5")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-05-2CH")]),t._v(" "),n("td",[t._v("5km")]),t._v(" "),n("td",[t._v("2")]),t._v(" "),n("td",[t._v("500")]),t._v(" "),n("td",[t._v("6 s")]),t._v(" "),n("td",[t._v("<0.5")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-05-4CH")]),t._v(" "),n("td",[t._v("5km")]),t._v(" "),n("td",[t._v("4")]),t._v(" "),n("td",[t._v("500")]),t._v(" "),n("td",[t._v("6 s")]),t._v(" "),n("td",[t._v("<0.5")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-10-2CH*")]),t._v(" "),n("td",[t._v("10km")]),t._v(" "),n("td",[t._v("2")]),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("10 s")]),t._v(" "),n("td",[t._v("<1")]),t._v(" "),n("td",[t._v("1 m")])]),t._v(" "),n("tr",[n("td",[t._v("FL-03-10-4CH*")]),t._v(" "),n("td",[t._v("10km")]),t._v(" "),n("td",[t._v("4")]),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("10 s")]),t._v(" "),n("td",[t._v("<1")]),t._v(" "),n("td",[t._v("1 m")])])])]),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"border-show w-full"},[n("tbody",[n("tr",[n("th",[t._v("Fiber Type")]),t._v(" "),n("th",[t._v("Temperature Range")]),t._v(" "),n("th",[t._v("Attenuation")])]),t._v(" "),n("tr",[n("td",[t._v("Multi-mode 62.5/125 μm")]),t._v(" "),n("td",[t._v("\n                -60°C ~ 85°C (long term **)\n                -60°C ~ 150°C (short term **)\n              ")]),t._v(" "),n("td",[t._v("< 2.5 / 0.8 dB/km @ 850/1300nm")])])])]),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"border-show w-full"},[n("tbody",[n("tr",[n("th",{attrs:{colspan:"7"}},[t._v("\n                FireLaser DTS Operating Environment\n              ")])]),t._v(" "),n("tr",[n("td",[t._v("Operating Temperature")]),t._v(" "),n("td",[t._v("Storage Temperature")]),t._v(" "),n("td",[t._v("Humidity")]),t._v(" "),n("td",[t._v("Height")]),t._v(" "),n("td",[t._v("Width")]),t._v(" "),n("td",[t._v("Depth")]),t._v(" "),n("td",[t._v("Weight")])]),t._v(" "),n("tr",[n("td",[t._v("-10℃ to 60℃")]),t._v(" "),n("td",[t._v("-20℃ to +85℃")]),t._v(" "),n("td",[t._v("0 to 95% RH NC")]),t._v(" "),n("td",[t._v("131 mm (3U)")]),t._v(" "),n("td",[t._v("432 mm")]),t._v(" "),n("td",[t._v("332 mm")]),t._v(" "),n("td",[t._v("10 kg")])])])]),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"border-show w-full"},[n("tbody",[n("tr",[n("th",[t._v("Compliance")]),t._v(" "),n("th",[t._v("Fire Approval")])]),t._v(" "),n("tr",[n("td",[t._v("\n                CE Marked, EN50081-1 (immunity), EN50082-1 (emissions) EN50130-4 (immunity), IEC 60185-1 :2001 Class\n                1M laser\n              ")]),t._v(" "),n("td",[t._v("VdS Approved to prEN54 part 22")])])])]),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"border-show w-full"},[n("tbody",[n("tr",[n("th",{attrs:{colspan:"3"}},[t._v("\n                FireLaser DTS Communications Interface\n              ")])]),t._v(" "),n("tr",[n("td",[t._v("Relay Ports")]),t._v(" "),n("td",[t._v("Serial")]),t._v(" "),n("td",[t._v("Ethernet")])]),t._v(" "),n("tr",[n("td",[t._v("50 way")]),t._v(" "),n("td",[t._v("\n                RS 232/485\n                USB\n              ")]),t._v(" "),n("td",[t._v("RJ-45 100Mb/s")])])])])]},proxy:!0},{key:"approvals",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Approvals & Testing\n        ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n          Kifta is ISO 9001 certified and undergoes a rigorous continuous improvement program and tests all of\n          its products to leading international standards\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("Extensive environmental testing on all products")]),t._v(" "),n("li",[t._v("Components to telecom standards > 25 years MTBF")]),t._v(" "),n("li",[t._v("Products are designed for low maintenance and cost of ownership (e.g. fan free design..)")])]),t._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Industry Approvals\n        ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n          Kifta tests all of it’s equipment to the highest standards both based on internal specifications and\n          guidelines and also to leading industry 3rd party standards. Kifta has extensive internal testing\n          facilities but in addition we also test with internationally leading 3rd party test houses.\n        ")])]},proxy:!0},{key:"technology",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          T-Laser Technology Principle\n        ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n          The Kifta T-Laser Distributed Temperature Sensor (DTS) measures the temperature along the fiber using a\n          technique called Optical Time Domain Reflectometry (OTDR). The DTS rapidly sends laser pulses into the fiber\n          optic and measures the reflected light from the optical fiber sensing cable. By analyzing the scattered\n          light at the Raman frequencies the DTS is able to create a distributed temperature measurement along the\n          entire length of the fiber.\n        ")])]},proxy:!0},{key:"interface",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          FireLaser Interfaces and System Integration\n        ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n          Kifta has operated as a system integrator for more than 10 years and has a full range of services from\n          system design through to installation and commissioning.\n          We have extensive experiencing in designing our systems to interface with standard industrial formats and\n          specific customer request.\n          "),n("br"),t._v("\n          Kifta has designed specific customer user interfaces to consolidate, manage and visualize both DTS data\n          (including 3rd party DTS systems) and integrating other data feeds. Equally, Kifta is also comfortable\n          exporting data into 3rd party systems and networks. Examples of some of the interfaces Kifta has worked\n          with include:\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("SCADA")]),t._v(" "),n("li",[t._v("Modbus / DNP3")]),t._v(" "),n("li",[t._v("WITSML")]),t._v(" "),n("li",[t._v("Electrical relay outputs")]),t._v(" "),n("li",[t._v("OPC / IEC61850 / Generic Object Oriented Substaion Events")])])]},proxy:!0}])})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("Highly reliable embedded system technology")]),t._v(" "),n("li",[t._v("Cost effective solution")]),t._v(" "),n("li",[t._v("Network Scalable for distributed architectures")]),t._v(" "),n("li",[t._v("Sensor Cable suitable for use in hazardous areas")]),t._v(" "),n("li",[t._v("Circuit lengths up to 5000 m")]),t._v(" "),n("li",[t._v("Multiple hotspot location to within 1m")]),t._v(" "),n("li",[t._v("Intelligent Alarm Algorithms")]),t._v(" "),n("li",[t._v("Relay and Modbus interface options")])])}],!1,null,"fd023270",null);e.default=component.exports}}]);