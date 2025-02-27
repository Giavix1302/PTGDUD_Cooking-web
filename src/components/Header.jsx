import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <Box sx={{
      bgcolor: 'primary.main',
      height: '50px',
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingX: 3
    }}>
      <Box>Header</Box>
      <Avatar sx={{ width: 30, height: 30}} alt="Giavix" src="" />
    </Box>
  );
}

export default Header;