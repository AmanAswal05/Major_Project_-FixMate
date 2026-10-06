export const services = [
  { id: 'plumbing', name: 'Plumbing', icon: 'Wrench', description: 'Expert solutions for taps, pipes, and drains.' },
  { id: 'electrical', name: 'Electrical', icon: 'Zap', description: 'Safe electrical repairs and installations.' },
  { id: 'carpentry', name: 'Carpentry', icon: 'Hammer', description: 'Woodwork, furniture repair, and custom builds.' },
  { id: 'painting', name: 'Painting', icon: 'Paintbrush', description: 'Interior and exterior house painting.' },
  { id: 'ac-repair', name: 'AC Repair', icon: 'Snowflake', description: 'AC servicing, installation, and gas refilling.' },
  { id: 'appliance-repair', name: 'Appliance Repair', icon: 'WashingMachine', description: 'Washing machine, fridge, and oven repairs.' }
];

export const professionals = [
  {
    id: 'p1',
    name: 'Raj Plumbing Services',
    service: 'plumbing',
    rating: 4.8,
    experience: 7,
    distance: 1.2,
    priceMin: 300,
    priceMax: 500,
    availability: 'Available Today',
    description: 'Specialist in all types of residential plumbing works. Quick and reliable.',
    servicesOffered: ['Tap repair', 'Pipe leakage', 'Drain cleaning', 'Bathroom plumbing'],
    reviews: [
      { id: 1, text: 'Quick and professional service.', rating: 5 },
      { id: 2, text: 'Good pricing and reliable.', rating: 4 }
    ]
  },
  {
    id: 'p2',
    name: 'Kumar Electricals',
    service: 'electrical',
    rating: 4.7,
    experience: 6,
    distance: 2.4,
    priceMin: 250,
    priceMax: 600,
    availability: 'Available Today',
    description: 'Expert electrician for all household electrical issues.',
    servicesOffered: ['Wiring repair', 'Switchboard fix', 'Fan installation', 'MCB replacement'],
    reviews: [
      { id: 1, text: 'Very knowledgeable.', rating: 5 }
    ]
  },
  {
    id: 'p3',
    name: 'Woodcare Carpentry',
    service: 'carpentry',
    rating: 4.6,
    experience: 8,
    distance: 3.1,
    priceMin: 400,
    priceMax: 800,
    availability: 'Tomorrow',
    description: 'Quality woodwork and furniture repair at affordable prices.',
    servicesOffered: ['Door repair', 'Furniture assembly', 'Cabinet fixing', 'Custom woodwork'],
    reviews: [
      { id: 1, text: 'Excellent finishing.', rating: 5 }
    ]
  },
  {
    id: 'p4',
    name: 'Sharma AC Services',
    service: 'ac-repair',
    rating: 4.9,
    experience: 10,
    distance: 1.8,
    priceMin: 500,
    priceMax: 1500,
    availability: 'Available Today',
    description: 'Top-rated AC service and repair specialist in your area.',
    servicesOffered: ['AC Servicing', 'Gas Refill', 'Installation', 'PCB Repair'],
    reviews: [
      { id: 1, text: 'Fixed my AC in 30 minutes!', rating: 5 }
    ]
  },
  {
    id: 'p5',
    name: 'City Appliance Care',
    service: 'appliance-repair',
    rating: 4.5,
    experience: 4,
    distance: 4.0,
    priceMin: 350,
    priceMax: 900,
    availability: 'Available Today',
    description: 'Repair for washing machines, refrigerators, and microwaves.',
    servicesOffered: ['Washing Machine repair', 'Refrigerator fix', 'Microwave repair'],
    reviews: [
      { id: 1, text: 'Professional behavior, reasonable price.', rating: 4 }
    ]
  },
  {
    id: 'p6',
    name: 'QuickFix Plumbing',
    service: 'plumbing',
    rating: 4.2,
    experience: 3,
    distance: 0.5,
    priceMin: 200,
    priceMax: 450,
    availability: 'Available Today',
    description: 'Local plumber for quick fixes.',
    servicesOffered: ['Tap repair', 'Pipe leakage'],
    reviews: [
      { id: 1, text: 'Arrived fast, did the job.', rating: 4 }
    ]
  }
];
