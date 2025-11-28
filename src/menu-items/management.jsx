// assets


import SettingsIcon from '@mui/icons-material/Settings';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AnalyticsIcon from '@mui/icons-material/Analytics';


import LogoutIcon from '@mui/icons-material/Logout';

















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
      icon: Diversity2Icon
    },
    {
      id: 'Analytics',
      title: 'Analytics',
      type: 'item',
      url: '/dashboard/Analytics',
      icon: AnalyticsIcon
    },
    {
      id: 'Settings',
      title: 'Settings',
      type: 'item',
      url: '/dashboard/Settings',
      icon: SettingsIcon
    },
    {
      id: 'Logout',
      title: 'Log Out',
      type: 'item',
      url: '/dashboard/Logout',
      icon: LogoutIcon
    }
  ]
};





export default Managemnt;



















