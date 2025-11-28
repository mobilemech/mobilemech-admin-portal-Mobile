
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import PaymentsIcon from '@mui/icons-material/Payments';

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
      icon: ConstructionIcon
    },
    {
      id: 'Car Owner',
      title: 'Car Owner',
      type: 'item',
      url: '/dashboard/CarOwner',
      icon: LocalShippingIcon
    },
    {
      id: 'Services',
      title: 'Services',
      type: 'item',
      url: '/dashboard/Services',
      icon: MiscellaneousServicesIcon
    },
       {
      id: 'Complaints and Resolutions',
      title: 'Complaints and Resolutions',
      type: 'item',
      url: '/dashboard/Complaints',
      icon: RecordVoiceOverIcon
    },
    {
      id: 'Admins',
      title: 'Admins',
      type: 'item',
      url: '/dashboard/Admins',
      icon: PeopleAltIcon
    },
    {
      id: 'Messages',
      title: 'Messages',
      type: 'item',
      url: '/dashboard/Messages',
      icon: MessageIcon
    },
    {
      id: 'Finance',
      title: 'Finance',
      type: 'item',
      url: '/dashboard/Finance',
      icon: PaymentsIcon
    }
  ]
};

export default support;
