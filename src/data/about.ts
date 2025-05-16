import { FaUsers, FaChartLine, FaAward, FaHeart, FaLightbulb, FaHandshake } from 'react-icons/fa';

export const stats = [
  { number: '5+', label: 'Years Experience', icon: FaAward },
  { number: '50+', label: 'Projects Completed', icon: FaChartLine },
  { number: '30+', label: 'Team Members', icon: FaUsers },
  { number: '100%', label: 'Client Satisfaction', icon: FaHeart }
];

export const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    icon: FaLightbulb
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer service.',
    icon: FaAward
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency.',
    icon: FaHandshake
  }
]; 