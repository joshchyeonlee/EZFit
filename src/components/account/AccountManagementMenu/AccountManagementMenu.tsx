import { Box } from '@mui/material';
import AccountManagementMenuItem from './AccountManagementMenuItem';

export default function AccountManagementMenu() {
    return (
        <Box>

            <Box textAlign="center" padding={4} marginBottom={5}>
                <Box sx={{ borderTop: 2, borderBottom: 2, borderColor: '#808080'}}>
                    <AccountManagementMenuItem>
                        Personal Information
                    </AccountManagementMenuItem>
                </Box>   
                <Box sx={{ borderBottom: 2, borderColor: '#808080'}}>
                    <AccountManagementMenuItem>
                        Connected Devices
                    </AccountManagementMenuItem>
                </Box>   
                <Box sx={{ borderBottom: 2, borderColor: '#808080'}}>
                    <AccountManagementMenuItem>
                        Preferences
                    </AccountManagementMenuItem>
                </Box>
            </Box>

        </Box>
    )
}