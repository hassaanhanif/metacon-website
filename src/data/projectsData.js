export const portfolioCategories = [
  { id: "all", name: "All Projects" },
  { id: "new-builds", name: "Turn-Key New Residential Builds" },
  { id: "remodeling", name: "Residential Remodeling & Extensions" },
  { id: "interiors", name: "Bespoke Interior Design & Luxury Styling" }
];

export const portfolioProjects = [
  {
    id: "villa-10marla",
    category: "new-builds",
    title: "10-Marla Contemporary Luxury Residence",
    size: "10 Marla (35' x 70')",
    scope: "Turn-key Architectural Design & Construction",
    description: "Multi-level modern villa featuring geometric timber accents, recessed LED profiles, cantilevered balconies, and an integrated cutaway 3D floor plan optimized for cross-ventilation.",
    image: "/images/villa-10marla.jpg",
    blueprint: "/images/villa-10marla.jpg",
    highlights: ["Grade-60 Steel Reinforcement", "Tempered Glass Railings", "Double-Glazed Thermal Windows", "CDA/LDA/PDA Compliant"],
    completionYear: "2024"
  },
  {
    id: "villa-estate-2kanal",
    category: "new-builds",
    title: "2-Kanal Architectural Masterpiece Villa",
    size: "2 Kanal (100' x 90')",
    scope: "Architectural Elevation, Engineering & Turn-Key Execution",
    description: "An estate villa with grand double-height foyer, floor-to-ceiling glass curtain walls, private lap pool, triple car garage, and comprehensive ground & first floor layout planning.",
    image: "/images/villa-estate-floorplan.jpg",
    blueprint: "/images/villa-estate-floorplan.jpg",
    highlights: ["Ground & First Floor Custom CAD Plans", "Private Swimming Pool Structure", "Entertainment Terrace", "Smart Home Automation"],
    completionYear: "2024"
  },
  {
    id: "villa-courtyard-pool",
    category: "new-builds",
    title: "The Courtyard Pavilion & Pool Villa",
    size: "1 Kanal (50' x 90')",
    scope: "Turn-key Structural Build & Modern Landscape",
    description: "Modern minimalist single-storey with central reflection pool, covered sun pavilion, open-plan gourmet kitchen, dining area, and 3-ensuite master wing.",
    image: "/images/villa-courtyard-pool.jpg",
    blueprint: "/images/villa-courtyard-pool.jpg",
    highlights: ["Center Sunken Courtyard", "Thermal Insulation Slabs", "Underground Rainwater Harvesting", "Seismic Compliance"],
    completionYear: "2023"
  },
  {
    id: "remodel-living-space",
    category: "remodeling",
    title: "Structural Living Room Overhaul & Open Plan",
    size: "Ground Floor Conversion (2,200 sq.ft)",
    scope: "Load-Bearing Wall Removal & Contemporary Living Facelift",
    description: "Complete transformation from a segmented structural brick space with temporary support props into an expansive, naturally lit living sanctuary featuring floor-to-ceiling glass patio doors, fluted oak architectural beam, and porcelain floors.",
    image: "/images/remodel-openplan-after.jpg",
    beforeImage: "/images/remodel-openplan-before.jpg",
    afterImage: "/images/remodel-openplan-after.jpg",
    isBeforeAfter: true,
    highlights: ["Steel Structural Retrofitting", "Fluted Oak Beam Cladding", "Zero-Threshold Patio Doors", "Underfloor Heating Ready"],
    completionYear: "2024"
  },
  {
    id: "remodel-industrial-loft",
    category: "remodeling",
    title: "High-Ceiling Cathedral Villa Transformation",
    size: "Complete Residence (5,500 sq.ft)",
    scope: "Structural Extension & Panoramic Glazing",
    description: "Dramatic before-and-after conversion of a raw vaulted industrial structure with exposed trusses into an ultra-luxury modern residence with black steel cathedral trusses, panoramic infinity pool views, and chef island.",
    image: "/images/remodel-warehouse-after.jpg",
    beforeImage: "/images/remodel-warehouse-before.jpg",
    afterImage: "/images/remodel-warehouse-after.jpg",
    isBeforeAfter: true,
    highlights: ["Restored Engineered Steel Trusses", "Thermally Broken Curtain Walls", "Quartz Chef Waterfall Island", "Multi-Tier Glass Chandelier"],
    completionYear: "2024"
  },
  {
    id: "interior-grand-marble",
    category: "interiors",
    title: "Travertine Grand Salon & Double-Height Hearth",
    size: "Main Formal Lounge",
    scope: "Bespoke Interior Design & Custom Millwork",
    description: "Towering travertine slab feature wall with integrated flush gas fireplace, fluted acoustic wooden columns, circular halo chandelier, and custom cream modular seating.",
    image: "/images/interior-grand.jpg",
    highlights: ["Full-Height Bookmatched Travertine", "Custom Fluted Wall Paneling", "Concealed Perimeter Uplighting", "Acoustically Tuned"],
    completionYear: "2024"
  },
  {
    id: "interior-penthouse-suite",
    category: "interiors",
    title: "Duplex Penthouse Living Room & Floating Glass Mezzanine",
    size: "Penthouse Suite",
    scope: "Bespoke Interior Design & Luxury Styling",
    description: "Sunset-facing double-height living room featuring sculptural cylinder fireplace, glass-enclosed wine repository, bronze teardrop pendant cluster, and floating timber staircase.",
    image: "/images/interior-penthouse.jpg",
    highlights: ["Bespoke Glass Wine Wall", "Floating Solid Oak Stairs", "Sunset Panoramic View Framing", "Automated Louvered Shades"],
    completionYear: "2024"
  },
  {
    id: "interior-modern-kitchen",
    category: "interiors",
    title: "Open-Concept Gourmet Kitchen & Fluted Media Wall",
    size: "Combined Family Living & Kitchen",
    scope: "Custom Cabinetry & False Ceiling Design",
    description: "Harmonious flow of natural white oak cabinetry, linear fluted wooden entertainment unit, under-cabinet warm LED wash, and integrated glass stair banister.",
    image: "/images/interior-modern-kitchen.jpg",
    highlights: ["Fluted Oak Wall Panelling", "Step-Light Integrated Stairs", "Concealed Blum Hardware", "Granite Breakfast Counter"],
    completionYear: "2024"
  },
  {
    id: "interior-dining-bar",
    category: "interiors",
    title: "Chef's Kitchen & Fluted Island Dining Room",
    size: "Culinary & Dining Suite",
    scope: "Full Interior Execution & Lighting Design",
    description: "Underlit fluted bar island, brushed gold vertical pendant lights, flush built-in stainless refrigeration, and a monolithic dining table with plush suede seating.",
    image: "/images/interior-dining-bar.jpg",
    highlights: ["Backlit Fluted Bar Island", "Brushed Brass Pendant Drops", "Seamless Shadowline Ceilings", "Smart Dimming Controls"],
    completionYear: "2024"
  },
  {
    id: "interior-chandelier-atrium",
    category: "interiors",
    title: "Contemporary Glass Atrium & Chandelier Lounge",
    size: "Central Atrium",
    scope: "Interior Architecture & High-Rise Glazing",
    description: "Light-filled atrium with cascading glass sphere chandeliers, bookmatched Calacatta marble fireplace column, and seamless garden patio connection.",
    image: "/images/interior-chandelier.jpg",
    highlights: ["18-Drop Bubble Chandelier", "Calacatta Marble Fireplace", "Zero-Threshold Patio Doors", "Custom Curved Sectional"],
    completionYear: "2023"
  },
  {
    id: "interior-feature-wall",
    category: "interiors",
    title: "Textured Stone Media Wall & Cantilevered Floating Stairs",
    size: "Formal Reception Suite",
    scope: "Interior Architecture & Lighting Planning",
    description: "Minimalist stone media backdrop with floating hearth, dark smoked glass shelving, open-riser cantilevered wooden stairs, and vertical linear brass luminaires.",
    image: "/images/interior-feature-wall.jpg",
    highlights: ["Cantilevered Open-Riser Stairs", "Backlit Stone Media Panel", "Recessed Glass Display Vitrines", "Minimalist Firebox"],
    completionYear: "2024"
  }
];

export const regionalOffices = [
  {
    id: "islamabad",
    city: "Islamabad / Rawalpindi",
    badge: "Headquarters (HQ)",
    address: "H-9 Islamabad, Pakistan",
    phone: "+92-334-5092939 / +92-336-4522111",
    primaryPhone: "+923345092939",
    secondaryPhone: "+923364522111",
    email: "cmetacon@gmail.com",
    compliance: "CDA, RDA & DHA Islamabad Approved",
    focus: "Turnkey Luxury Villas, Grey Structures, Design Studios",
    mapQuery: "H-9, Islamabad"
  },
  {
    id: "peshawar",
    city: "Peshawar",
    badge: "Regional Office",
    address: "Warsak Road Peshawar, Pakistan",
    phone: "+92-334-5092939",
    primaryPhone: "+923345092939",
    secondaryPhone: null,
    email: "cmetacon@gmail.com",
    compliance: "PDA & Peshawar Cantt Authority Regulated",
    focus: "Modern Residential Villas, Structural Renovations",
    mapQuery: "Warsak Road, Peshawar"
  },
  {
    id: "lahore",
    city: "Lahore",
    badge: "Regional Hub",
    address: "Paragon City Lahore, Pakistan",
    phone: "+92-334-5092939",
    primaryPhone: "+923345092939",
    secondaryPhone: null,
    email: "cmetacon@gmail.com",
    compliance: "LDA & DHA Lahore Approved",
    focus: "Architectural 3D Elevations, Turnkey Residential Builds",
    mapQuery: "Paragon City, Lahore"
  }
];
