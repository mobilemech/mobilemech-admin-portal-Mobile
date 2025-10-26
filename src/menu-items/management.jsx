// assets

import Diversity3Icon from '@mui/icons-material/Diversity3';
import ChurchIcon from '@mui/icons-material/Church';

import SettingsIcon from '@mui/icons-material/Settings';



















const Managemnt = {
  id: 'Managemnt',
  title: 'Managemnt',
  type: 'group',
  children: [
    {
      id: 'Team-Members',
      title: 'Team Members',
      type: 'item',
      url: '/dashboard/TeamMember',
      icon: Diversity3Icon
    },
    {
      id: 'Church-Settings',
      title: 'Church Settings',
      type: 'item',
      url: '/dashboard/ChurchSettings',
      icon: ChurchIcon
    },
    {
      id: 'Verification',
      title: 'Verification',
      type: 'item',
      url: '/dashboard/Verification',
      icon: ChurchIcon
    },
    {
      id: 'Merchandise',
      title: 'Merchandise',
      type: 'item',
      url: '/dashboard/Merchandise',
      icon: SettingsIcon
    }
  ]
};





export default Managemnt;



















