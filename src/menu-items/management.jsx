// assets

import Diversity3Icon from '@mui/icons-material/Diversity3';
import ChurchIcon from '@mui/icons-material/Church';

import SettingsIcon from '@mui/icons-material/Settings';



















const Managemnt = {
  id: 'Managemnt',
 // title: 'Managemnt',
  type: 'group',
  children: [
    {
      id: 'Activities',
      title: 'Activities',
      type: 'item',
      url: '/dashboard/Activities',
      icon: Diversity3Icon
    },
    {
      id: 'Analytics',
      title: 'Analytics',
      type: 'item',
      url: '/dashboard/Analytics',
      icon: ChurchIcon
    },
    {
      id: 'Settings',
      title: 'Settings',
      type: 'item',
      url: '/dashboard/Settings',
      icon: ChurchIcon
    },
    {
      id: 'Logout',
      title: 'Log Out',
      type: 'item',
      url: '/dashboard/Logout',
      icon: SettingsIcon
    }
  ]
};





export default Managemnt;



















