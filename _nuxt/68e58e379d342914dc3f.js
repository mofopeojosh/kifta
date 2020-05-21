(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20],{179:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("c2da6f5c",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var r=n(179);n.n(r).a},183:function(t,e,n){(e=n(47)(!1)).push([t.i,".tab-item[data-v-44d4d03c]{margin-right:1.25rem;font-size:1.25rem;font-weight:700}.tab-item-sm[data-v-44d4d03c]{font-size:1.125rem}.tab-item.active[data-v-44d4d03c]{--text-opacity:1;color:#9f7aea;color:rgba(159,122,234,var(--text-opacity));border-bottom-width:2px;--border-opacity:1;border-color:#9f7aea;border-color:rgba(159,122,234,var(--border-opacity))}",""]),t.exports=e},184:function(t,e,n){"use strict";var r={name:"TabNavigation",props:{defaultTab:{type:String,required:!0}},data:function(){return{tabConfig:{activeTab:this.defaultTab}}}},o=n(20),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"flex"},[this._t("nav",null,{tab:this.tabConfig})],2),this._v(" "),e("div",{staticClass:"mt-10"},[this._t(this.tabConfig.activeTab,null,{tab:this.tabConfig})],2)])}),[],!1,null,"31e337a5",null);e.a=component.exports},185:function(t,e,n){"use strict";var r={name:"TabMenuItem",props:{value:{type:String,required:!0},name:{type:String,required:!0},sm:{type:Boolean,required:!1}}},o=(n(182),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"tab-item",class:{active:t.value===t.name,"tab-item-sm":t.sm},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("input",t.name)}}},[t._t("default")],2)}),[],!1,null,"44d4d03c",null);e.a=component.exports},193:function(t,e,n){"use strict";n.r(e);var r=n(184),o={components:{TabMenuItem:n(185).a,TabNavigation:r.a}},l=n(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"product-title"},[t._v("\n    Fire & Security\n  ")]),t._v(" "),n("h3",{staticClass:"product-subtitle"},[t._v("\n    Smart Monitoring Solutions For Intelligent Assets\n  ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n    Kifta has worked together with customers and partners for more than 10 years to develop monitoring solutions\n    that enhance the safety and security of your critical infrastructure and personnel.\n    Our range of fiber optic monitoring instrumentation combined with our smart software and services provide you with\n    the right information at the right time to detect risks early, take action, to minimise damage, avoid catastrophic\n    failure and reduce financial, environmental and reputational risk.\n  ")]),t._v(" "),n("div",{staticClass:"mt-10"},[n("TabNavigation",{attrs:{"default-tab":"applications"},scopedSlots:t._u([{key:"nav",fn:function(e){var r=e.tab;return[n("TabMenuItem",{attrs:{name:"applications"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Applications\n        ")]),t._v(" "),n("TabMenuItem",{attrs:{name:"features-and-benefits"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Features And Benefits\n        ")]),t._v(" "),n("TabMenuItem",{attrs:{name:"references"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          References\n        ")]),t._v(" "),n("TabMenuItem",{attrs:{name:"approvals"},model:{value:r.activeTab,callback:function(e){t.$set(r,"activeTab",e)},expression:"tab.activeTab"}},[t._v("\n          Approvals\n        ")])]}},{key:"applications",fn:function(){return[n("p",{staticClass:"product-paragraph"},[t._v("\n          Applications areas include:\n        ")]),t._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Transport\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("\n            Airport –\n            "),n("nuxt-link",{staticClass:"app-link",attrs:{to:"/secotrs/fire-and-security/linear-heat-detection"}},[t._v("\n              linear heat detection\n            ")]),t._v("\n            and perimeter security (PIDS)\n          ")],1),t._v(" "),n("li",[t._v("\n            Tunnels –\n            "),n("nuxt-link",{staticClass:"app-link",attrs:{to:"/secotrs/fire-and-security/linear-heat-detection"}},[t._v("\n              linear heat detection\n            ")])],1),t._v(" "),n("li",[t._v("\n            Overhead power lines utilizing OPGW (Optical Groundwire) and OPPC (Optical Path Phase Conductors)\n            "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("Road")]),t._v(" "),n("li",[t._v("Rail and Metro")])])])]),t._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Power\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("Cable trays and tunnels – linear heat & access")]),t._v(" "),n("li",[t._v("Transformers and switch gear – linear heat")]),t._v(" "),n("li",[t._v("Substation – perimeter")])]),t._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Petrochemical\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("Refinery and storage tanks – perimeter security (PIDS)")]),t._v(" "),n("li",[t._v("Offshore platforms – heat")])]),t._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Warehousing and storage\n        ")]),t._v(" "),n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Mining and minerals – conveyor belt\n        ")]),t._v(" "),n("img",{attrs:{src:"/images/kifta-fire-application.jpg",alt:"Real Time Thermal Rating"}})]},proxy:!0},{key:"features-and-benefits",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Features and Benefits\n        ")]),t._v(" "),n("table",{staticClass:"border-show w-full"},[n("tbody",[n("tr",[n("th",[t._v("Feature")]),t._v(" "),n("th",[t._v("Benefits")])]),t._v(" "),n("tr",[n("td",[t._v("\n                DAS monitoring for third party intervention (TPI) detection before the event occurs, whether it is\n                malicious (terrorist, product theft) or accidental (3rd party digging)\n              ")]),t._v(" "),n("td",[t._v("Prevention of theft, improved safety, lower maintenance and repair costs")])]),t._v(" "),n("tr",[n("td",[t._v("Precise, real-time and actionable information at all points on your asset")]),t._v(" "),n("td",[t._v("\n                Rapid and focused decision making with improved custodianship over assets thus reducing risk to\n                reputation damage\n              ")])]),t._v(" "),n("tr",[n("td",[t._v("Smart configurable alarms - early rate of rise detection")]),t._v(" "),n("td",[t._v("Early detection of fire - prevention of damage to assets, protection of personnel")])]),t._v(" "),n("tr",[n("td",[t._v("Passive optical components, no electronics or moving parts")]),t._v(" "),n("td",[t._v("Low maintenance and low cost of ownership. Suitable for use in Atex areas")])]),t._v(" "),n("tr",[n("td",[t._v("Temperature monitoring information - dual use for ventilation control")]),t._v(" "),n("td",[t._v("Low cost of investment for additional assets")])]),t._v(" "),n("tr",[n("td",[t._v("Utilize existing telecoms infrastructure working closely with telecoms/SCADA installer")]),t._v(" "),n("td",[t._v("Ease of installation, lowering overall cost of ownership")])])])])]},proxy:!0},{key:"references",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Global Leader\n        ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n          With more than 300 employees and facilities in 4 global hubs and 450 projects across 6 continents,\n          Kifta is committed to providing you with state of the art, reliable monitoring systems to improve the\n          efficiency and security of your assets.\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("10,000 sqm state-of-the-art production facility")]),t._v(" "),n("li",[t._v("More than 30 R&D Engineers")]),t._v(" "),n("li",[t._v("Class 100 clean room and testing facilities")])])]},proxy:!0},{key:"approvals",fn:function(){return[n("h5",{staticClass:"product-subtitle-sm"},[t._v("\n          Reliability and Approvals\n        ")]),t._v(" "),n("p",{staticClass:"product-paragraph"},[t._v("\n          Kifta is ISO 9001 certified and undergoes a rigorous continuous improvement program and tests all of\n          its products to leading international standards.\n          "),n("br"),t._v("\n          For the power sector, Kifta tests according to both industry standards (IEC, CIGRE) and customer\n          specific type testing. These types tests include environmental, EMC test results and specific product\n          qualifications. Reports can be made available on request.\n          "),n("br"),t._v("\n          In addition to our industrial monitoring customers, Kifta is also a leading international supplier to\n          the telecoms industry which has some of the most stringent quality and reliability requirements.\n          Kifta has extensive in-house environmental testing facilities but also utilizes leading 3rd party\n          testing houses for independent verification and approvals.\n        ")]),t._v(" "),n("ul",{staticClass:"list-disc px-5"},[n("li",[t._v("Extensive environmental testing on all products")]),t._v(" "),n("li",[t._v("Components to telecom standards > 25 years MTBF")]),t._v(" "),n("li",[t._v("Products are designed for low maintenance and cost of ownership (e.g. fan free design..)")])])]},proxy:!0}])})],1)])}),[],!1,null,"8f3b24b0",null);e.default=component.exports},213:function(t,e,n){"use strict";n.r(e);var r={components:{FireAndSecurity:n(193).default}},o=n(20),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("FireAndSecurity")}),[],!1,null,"9b26d998",null);e.default=component.exports}}]);