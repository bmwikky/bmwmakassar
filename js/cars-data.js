const cars = [
  // SERI 2
  {
    id: "218-gran-coupe",
    name: "218 Gran Coupe M Sport",
    series: "Seri 2 Gran Coupe",
    price: " Mulai dari Rp. 922.000.000",
    image: "images/cars/218.png",
    engine: "1.5L TwinPower Turbo, 140 hp",
    transmission: "7-Speed Dual Clutch",
    color: "Alpine White, Black Sapphire, Brooklyn Grey",
    features: ["M Sport Package", "Sensatec Leather Interior", "BMW Live Cockpit Plus"]
  },
  // SERI 3
  {
    id: "320i",
    name: "320i M Sport",
    series: "Seri 3",
    price: " Mulai dari Rp. 1.072.000.000",
    image: "images/cars/320i.png",
    engine: "2.0L TwinPower Turbo, 184 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Alpine White,Black Sapphie, Arctic Race Blue, Brooklyn Grey",
    features: ["M Sport Package", "Sensatec Leather Interior", "BMW Live Cockpit"]
  },
  {
    id: "330i",
    name: "330i M Sport Pro",
    series: "Seri 3",
    price: "Mulai dari Rp. 1.172.000.000",
    image: "images/cars/330i.png",
    engine: "2.0L TwinPower Turbo, 258 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Alpine White, Black Sapphire, Mediterranean Blue",
    features: ["M Sport Pro Package", "Harman Kardon Sound", "BMW Live Cockpit Professional"]
  },
  // SERI 4
  {
    id: "430i-coupe",
    name: "430i Coupe",
    series: "Seri 4",
    price: "Mulai dari Rp. 1.584.000.000",
    image: "images/cars/430i-coupe.png",
    engine: "2.0L TwinPower Turbo, 258 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Black Sapphire, Mineral White, Phytonic Blue",
      features: ["M Aerodynamics Package", "Frameless Door Design", " Vernasca Leather Interior"]
  },
  {
    id: "430i-convertible",
    name: "430i Convertible",
    series: "Seri 4",
    price: "Mulai dari Rp. 1.724.000.000",
    image: "images/cars/430i-convertible.png",
    engine: "2.0L TwinPower Turbo, 258 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Alpine White, Black Sapphire, Sophisto Grey",
    features: ["Convertible Soft Top", "M Sport Package", "Adaptive LED Headlights"]
  },
  // SERI 5 & 7
  {
    id: "520i",
    name: "520i M Sport",
    series: "Seri 5",
    price: "Mulai dari Rp. 1.353.000.000",
    image: "images/cars/520i.png",
    engine: "2.0L TwinPower Turbo, 184 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Alpine White, Black Sapphire, Bluestone",
    features: ["Executive Lounge Comfort", "Harman Kardon Audio", " Vernasca Leather Interior"]
  },
  {
    id: "735i",
    name: "735i M Sport",
    series: "Seri 7",
    price: "Mulai dari Rp. 2.457.000.000",
    image: "images/cars/735i.png",
    engine: "3.0L TwinPower Turbo, 340 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Black Sapphire, Mineral White, Manhattan Grey",
    features: ["BMW Theatre Screen 31", "Executive lounge seating", "Luxury Leather Interior", "Bowers & Wilkins Audio"]
  },
  // X SERIES
  {
    id: "x1",
    name: "X1 sDrive18i xLine",
    series: "The X1",
    price: "Mulai dari Rp. 931.000.000",
    image: "images/cars/x1.png",
    engine: "1.5L TwinPower Turbo, 140 hp",
    transmission: "7-Speed Dual Clutch",
    color: "Alpine White, Black Sapphire, Mineral Grey",
    features: ["xLine Package", "LED Headlights", "Panoramic Sunroof"]
  },
  {
    id: "x3",
    name: "X3 20 xDrive M Sport",
    series: "The X3",
    price: "Mulai dari Rp. 1.375.000.000",
    image: "images/cars/x3.png",
    engine: "2.0L TwinPower Turbo, 184 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Alpine White, Black Sapphire, Phytonic Blue",
    features: ["M Sport Package", "Adaptive LED Headlights", "Line keep Assistant", "Panoramic Sunroof"]
  },
  {
    id: "x5-lci",
    name: "X5 xDrive40i M Sport LCI",
    series: "The X5",
    price: "Mulai dari Rp. 1.925.000.000",
    image: "images/cars/x5.png",
    engine: "3.0L TwinPower Turbo, 340 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Black Sapphire, Mineral White, Phytonic Blue",
    features: ["M Sport Package", "Panoramic Sunroof", "Harman Kardon Sound", "Air Suspension"]
  },
  {
    id: "x6",
    name: "X6 xDrive40i M Sport Pro",
    series: "The X6",
    price: "Mulai dari Rp. 2.176.000.000",
    image: "images/cars/x6.png",
    engine: "3.0L TwinPower Turbo, 340 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Black Sapphire, Mineral White, Phytonic Blue",
    features: ["M Sport Pro Package", "Adaptive LED Headlights", "Panoramic Sunroof"]
  },
  {
    id: "x7",
    name: "X7 xDrive40i M Sport",
    series: "The X7",
    price: "Mulai dari Rp. 2.558.000.000",
    image: "images/cars/x7.png",
    engine: "3.0L TwinPower Turbo, 340 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Black Sapphire, Mineral White, Phytonic Blue",
    features: ["M Sport Package", "Panoramic Sunroof", "Merino Leather Interior"]
  },
  // Z SERIES
  {
    id: "z4",
    name: "Z4 sDrive30i M Sport",
    series: "BMW Z",
    price: "Mulai dari Rp. 1.644.000.000",
    image: "images/cars/z4.png",
    engine: "2.0L TwinPower Turbo, 258 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Alpine White, Black Sapphire, Sanremo Green",
    features: ["M Sport Package", "Convertible Soft Top", "LED Headlights"]
  },
  {
    id: "z4-m40i",
    name: "Z4 M40i",
    series: "BMW Z",
    price: "Mulai dari Rp. 1.855.000.000",
    image: "images/cars/z4-m40i.png",
    engine: "3.0L TwinPower Turbo, 387 hp",
    transmission: "8-Speed Steptronic Automatic",
    color: "Black Sapphire, Mineral White, Sanremo Green",
    features: ["M40i Package", "Convertible Soft Top", "Adaptive LED Headlights"]
  },
  // BMW i
  {
    id: "ix",
    name: "iX xDrive45 M Sport",
    series: "BMW i",
    price: "Mulai dari Rp. 2.600.000.000",
    image: "images/cars/ix.png",
    engine: "Elektrik, 523 hp",
    transmission: "Single-Speed Automatic",
    color: "Sophisto Grey, Mineral White, BMW i Blue",
    features: ["M Sport Package", "Panoramic Glass Roof", "BMW iDrive"]
  },
  {
    id: "i7",
    name: "i7 xDrive60 Gran Lusso",
    series: "BMW i",
    price: "Mulai dari Rp. 3.401.000.000",
    image: "images/cars/i7.png",
    engine: "Elektrik, 544 hp",
    transmission: "Single-Speed Automatic",
    color: "Sophisto Grey, Mineral White, BMW i Blue",
    features: ["Luxury Interior", "Panoramic Glass Roof", "BMW iDrive Professional"]
  },
  // BMW M
  {
    id: "m3",
    name: "M3 Competition M xDrive",
    series: "BMW M",
    price: "Mulai dari Rp. 2.507.000.000",
    image: "images/cars/m3.png",
    engine: "3.0L TwinPower Turbo, 510 hp",
    transmission: "8-Speed M Steptronic",
    color: "Alpine White, Black Sapphire, Toronto Red",
    features: ["M Competition Package", "Adaptive M Suspension", "BMW Live Cockpit Professional"]
  },
  {
    id: "m3-cs",
    name: "M3 CS Touring",
    series: "BMW M",
    price: "Mulai dari Rp. 3.321.000.000",
    image: "images/cars/m3-cs.png",
    engine: "3.0L TwinPower Turbo, 550 hp",
    transmission: "8-Speed M Steptronic",
    color: "Toronto Red, Black Sapphire, Frozen Grey",
    features: ["CS Package", "Adaptive M Suspension", "M Carbon Exterior"]
  },
  {
    id: "m4-coupe",
    name: "M4 Competition Coupe M xDrive",
    series: "BMW M",
    price: "Mulai dari Rp. 2.558.000.000",
    image: "images/cars/m4-competition.png",
    engine: "3.0L TwinPower Turbo, 510 hp",
    transmission: "8-Speed M Steptronic",
    color: "Alpine White, Black Sapphire, Marina Bay Blue",
    features: ["M Competition Package", "Adaptive M Suspension", "BMW Live Cockpit Professional"]
  },
  {
    id: "m4-convertible",
    name: "M4 Competition Convertible M xDrive",
    series: "BMW M",
    price: "Mulai dari Rp. 2.889.000.000",
    image: "images/cars/m4.png",
    engine: "3.0L TwinPower Turbo, 510 hp",
    transmission: "8-Speed M Steptronic",
    color: "Alpine White, Black Sapphire, Marina Bay Blue",
    features: ["Convertible Soft Top", "M Competition Package", "Adaptive M Suspension"]
  },
  {
    id: "m4-cs",
    name: "M4 CS",
    series: "BMW M",
    price: "Mulai dari Rp. 3.060.000.000",
    image: "images/cars/m4-cs.png",
    engine: "3.0L TwinPower Turbo, 550 hp",
    transmission: "8-Speed M Steptronic",
    color: "Toronto Red, Black Sapphire, Frozen Grey",
    features: ["CS Package", "Adaptive M Suspension", "M Carbon Exterior"]
  }
];
