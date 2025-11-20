
import PropTypes from 'prop-types';
import { Link, useLocation, matchPath } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import IconButton from 'components/@extended/IconButton';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

const ORANGE = '#f17a28';

export default function NavItem({ item, level, isParents = false, setSelectedID }) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const itemHandler = () => {
    if (downLG) handlerDrawerOpen(false);
    if (isParents && setSelectedID) setSelectedID(item.id);
  };

  const Icon = item.icon;
  const itemIcon = Icon ? (
    <Icon
      style={{
        fontSize: drawerOpen ? '1.7rem' : '1.9rem',
        ...(isParents && { fontSize: 20, stroke: '1.5' })
      }}
    />
  ) : false;

  const { pathname } = useLocation();
  const isSelected = !!matchPath({ path: item?.link ? item.link : item.url, end: false }, pathname);

  return (
    <Box sx={{ position: 'relative' }}>
      <ListItemButton
        component={Link}
        to={item.url}
        target={item.target ? '_blank' : '_self'}
        disabled={item.disabled}
        selected={isSelected}
        onClick={itemHandler}
        sx={{
          pl: drawerOpen ? `${level * 28}px` : downLG ? 2 : 1.5, // responsive padding-left
          py: downLG ? 1.5 : !drawerOpen && level === 1 ? 1.25 : 1.7, // responsive padding-y
          color: 'white',
          transition: 'all 180ms ease',

          // hover: white bg, orange text/icon
          '&:hover': {
            bgcolor: 'white',
            color: ORANGE,
            '& .MuiListItemIcon-root': { color: ORANGE },
            '& .MuiTypography-root': { color: ORANGE }
          },

          // selected: white bg, orange icon & text
          '&.Mui-selected': {
            bgcolor: 'white',
            color: ORANGE,
            '& .MuiListItemIcon-root': { color: ORANGE },
            '& .MuiTypography-root': { color: ORANGE }
          }
        }}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              minWidth: 45,
              color: 'white', // default icon color
              transition: 'color 160ms ease'
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}

        {(drawerOpen || (!drawerOpen && level !== 1)) && (
          <ListItemText
            primary={
              <Typography
                variant="h4"
                sx={{
                  color: isSelected ? ORANGE : 'white',
                  transition: 'color 160ms ease'
                }}
              >
                {item.title}
              </Typography>
            }
          />
        )}

        {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
          <Chip
            color={item.chip.color}
            variant={item.chip.variant}
            size={item.chip.size}
            label={item.chip.label}
            avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
          />
        )}
      </ListItemButton>
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.any,
  level: PropTypes.number,
  isParents: PropTypes.bool,
  setSelectedID: PropTypes.oneOfType([PropTypes.any, PropTypes.func])
};











