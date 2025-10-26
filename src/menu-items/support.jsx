

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
      id: 'All-Streams',
      title: 'All Streams',
      type: 'item',
      url: '/dashboard/AllStreams',
      icon: LocalPharmacyIcon
    },
    {
      id: 'Events',
      title: 'Events',
      type: 'item',
      url: '/dashboard/Events',
      icon: CalendarMonthIcon
    },
    {
      id: 'Donations',
      title: 'Donations',
      type: 'item',
      url: '/dashboard/Donations',
      icon: VolunteerActivismIcon
    },
    {
      id: 'Bible Study',
      title: 'Bible Study',
      type: 'item',
      url: '/dashboard/BibleStudy',
      icon: MenuBookIcon
    },
    {
      id: 'Community',
      title: 'Community',
      type: 'item',
      url: '/dashboard/Community',
      icon: AttractionsIcon
    },
    {
      id: 'Requests',
      title: 'Requests',
      type: 'item',
      url: '/dashboard/Requests',
      icon: CommentIcon
    }
  ]
};

export default support;
