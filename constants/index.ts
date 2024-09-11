// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },           // Scrolls to section with id="home"
  { href: '/About', key: 'about_us', label: 'About us' },  // Scrolls to section with id="about"
  { href: '#services', key: 'services', label: 'Services' }, // Scrolls to section with id="services"
  { href: '#contact', key: 'contact_us', label: 'Contact Us' }, // Scrolls to section with id="contact"
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Fuel Services',
    icon: '/map.svg',
    variant: 'green',
    description:
      'High-quality petrol and diesel available.',
      description1:
      'Order fuel for delivery to other locations.',
      description3:
      'Convenient fuel credit services for regular customers.',
      point1:
      'Fuel supply',
      point2:
      'Bulk fuel Delivery',
      point3:
      'Fuel Credits',
    },
  {
    title: 'Wheel Care',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      'Free air pressure checks for all vehicles.',
      description1:
      'Professional nitrogen filling for better tire performance.',
      description3:
      'Expert advice on maintaining tire health.',
      point1:
      'Air Pressure Check',
      point2:
      'Nitrogen Filling',
      point3:
      'Tire Care Tips',
    },
  {
    title: 'Vehicle Maintenance',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Complimentary windshield cleaning services.',
      description1:
      'Top-quality oil lubricants for all vehicle types.',
      description3:
      'Complimentary oil change for two-wheelers with lubricant purchase.',
      point1:
      'Windshield Cleaning',
      point2:
      'Oil Lubricants',
      point3:
      'Free Oil Change',
    },
  {
    title: 'Customer Rewards',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Special gifts for our loyal customers.',
      description1:
      'Enjoy free snacks and refreshments.',
      description3:
      'Earn rewards and discounts with every visit.',
      point1:
      'Exclusive Gifts',
      point2:
      'Complimentary Snacks',
      point3:
      'Loyalty Program',
    },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Pulikkal fuels',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },

];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Phone number', value: '91 90616 70782', towards: 'tel:+919061670782' },
    { label: 'Email', value: 'Pulikkalfuels@gmail.com', towards: 'mailto:Pulikkalfuels@gmail.com' },
    { label: 'Address', value: 'Musliyarangadi, Nediyiruppu PO, Malappuram, Kerala pin-673638', towards: 'https://www.google.com/maps/search/?api=1&query=Musliyarangadi,+Nediyiruppu+PO,+Malappuram,+Kerala+673638' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',

  ],
};
