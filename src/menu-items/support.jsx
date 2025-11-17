

import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CommentIcon from '@mui/icons-material/Comment';

const support = {
 // id: 'support',
//  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'Mechanic',
      title: 'Mechanic',
      type: 'item',
      url: '/dashboard/Mechanic',
      icon: LocalPharmacyIcon
    },
    {
      id: 'Car Owner',
      title: 'Car Owner',
      type: 'item',
      url: '/dashboard/CarOwner',
      icon: CalendarMonthIcon
    },
    {
      id: 'Services',
      title: 'Services',
      type: 'item',
      url: '/dashboard/Services',
      icon: VolunteerActivismIcon
    },
    {
      id: 'Admins',
      title: 'Admins',
      type: 'item',
      url: '/dashboard/Admins',
      icon: MenuBookIcon
    },
    {
      id: 'Messages',
      title: 'Messages',
      type: 'item',
      url: '/dashboard/Messages',
      icon: AttractionsIcon
    },
    {
      id: 'Finance',
      title: 'Finance',
      type: 'item',
      url: '/dashboard/Finance',
      icon: CommentIcon
    }
  ]
};

export default support;
