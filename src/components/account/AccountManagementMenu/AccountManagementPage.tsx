import { ArrowBack } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import AccountManagementMenu from './AccountManagementMenu';

export default function AccountManagementPage() {
    return (
        <Box padding={5}>

            <Box paddingTop={6} paddingBottom={6}>
                <Typography variant="h5" textAlign="center" fontWeight={700}>
                    Account Management
                </Typography>
            </Box>

            <AccountManagementMenu></AccountManagementMenu>

            <Box textAlign="center" justifyContent="center">
                <Button variant="contained" size='large' sx={{width:"70%"}} color="primary" disableElevation>
                    <Typography textAlign="center" fontWeight="300" fontSize="20px" color="white">
                        Log Out
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}