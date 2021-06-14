export const state = () => ({
  all: [
    {
      name: 'IT Manager',
      path: '/career/it-manager',
      type: 'management',
      description: "We are looking for an IT Manager to be responsible and accountable for the smooth running of our computer systems within the limits of requirements, specifications, costs and timelines - helping the company scale its remote workforce. You will supervise the implementation and maintenance of our company's computing needs. The successful candidate will have improved skills, a proven professional experience and a detailed knowledge of industry’s best practice processes.",
      image: "",
      featured: false
    },
    {
      name: 'Mechanical/Manufacturing Engineer',
      path: '/career/mechanical-manufacturing-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking a manufacturing design engineer to join the structural design group. The manufacturing engineer will design, build, and test prototype experimental aircraft in a fast-paced research and development environment, and with significant vertical responsibility. The work will span preliminary design, tooling, and manufacturing support",
      image: "",
      featured: false
    },
    {
      name: 'Flight Test Engineer',
      path: '/career/flight-test-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking a flight test engineer to join the engineering team. The flight test engineer will develop flight test plans, plan a flight test program, validate systems, publish flight test reports for prototype experimental aircraft in a fast-paced research environment. This position will hold significant vertical responsibility. It does requires significant travel and a possible temporary overseas re-location of the flight test program.",
      image: "",
      featured: false
    },
    {
      name: 'Lead Auto Pilot/GNC Engineer',
      path: '/career/lead-auto-pilot-gnc-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking a Flight Controls Engineer to lead our Autopilot team. The group will design, analyze and implement control algorithms for unconventional manned and unmanned air vehicles. The team is involved in physical modeling, controls and estimation, control law development with test pilots in simulated environments, software development, flight testing of small scale unmanned airplanes, supporting manned flight testing and whatever else is needed to make things fly.",
      image: "",
      featured: false
    },
    {
      name: 'Stress Engineer',
      path: '/career/stress-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking a composite structural analyst to join the stress analysis group. The composite structural analyst will design, analyze, build and test prototype experimental aircraft in a fast-paced research and development environment. The work will focus on preliminary and detail design development, composite manufacturing, and assembly support, but could also include flight test and post flight data reduction. The structural analyst is responsible for generating, maintaining, and running vehicle level FEA models and reporting on interpreting the results for design engineering and program management.",
      image: "",
      featured: false
    },
    {
      name: 'Propulsion and Systems Engineer',
      path: '/career/propulsion-and-systems-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking a propulsion and mechanical systems engineer to join the engineering team. The propulsion and mechanical systems engineer will be responsible for integrating two P&W PT6A engines into the airframe. The engineer will design, build, and test prototype experimental aircraft in a fast-paced research and development environment, and with significant vertical responsibility. The work will span preliminary design, part and assembly design, system design, manufacturing support, and flight test engineering support. Typically this work requires the integration of all engine systems into the aircraft.",
      image: "",
      featured: false
    },
    {
      name: 'Software Engineer',
      path: '/career/software-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking a software engineer for our Autopilot team. The group will design, analyze and implement control algorithms for unconventional manned and unmanned air vehicles. The team is involved in physical modeling, controls and estimation, control law development with test pilots in simulated environments, software development, flight testing of small scale unmanned airplanes, supporting manned flight testing and whatever else is needed to make things fly.",
      image: "",
      featured: false
    },
    {
      name: 'Aerodynamics Engineer',
      path: '/career/aerodynamics-engineer',
      type: 'emgineering',
      description: "KIFTA is seeking an aerodynamicist to join the engineering team. The aerodynamicist will design, build, and test prototype experimental aircraft in a fast-paced research and development environment, and with significant vertical responsibility. The work will span preliminary design, part and assembly design, system design, manufacturing support, and flight test engineering support. Typically, this work includes design of a BWB aircraft with full aerodynamic analysis of the vehicle as a whole, including control surfaces, thrust lines, trim, stability and control. Full scale CFD analysis and wind tunnel testing will also be required.",
      image: "",
      featured: false
    },
    {
      name: 'Office Manager/Chief of Staff',
      path: '/career/office-manager-chief-of-staff',
      type: 'management',
      description: "KIFTA is looking for an Office Manager for our San Diego office to create a smooth and welcoming environment to enable all of our employees to work effectively. As we are a growing company, there is opportunity for this person to take on a variety of more specialized tasks according to their skill and interests.",
      image: "",
      featured: false
    }
  ]
})

// getters
export const getters = {
  all: state => state.all
}
