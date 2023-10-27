import { Box, Button, MenuItem, MenuList, Typography } from '@mui/material';
import './AccountManagementMenu.css';
import * as React from 'react';

export default function AccountManagementMenu() {
    return (
        <Box padding={5}>
            
            <Box paddingBottom={4}>
                <Typography variant="h5" textAlign="center" fontWeight="800">
                Account Management
                </Typography>
            </Box>

            <Box textAlign="center" padding={4} marginBottom={5}>
                <MenuList>
                    <MenuItem sx={{paddingBottom: 2, paddingTop: 2, borderTop: 2, borderBottom: 2, borderColor: '#808080'}}>
                        <Typography variant="h6" textAlign="left" fontWeight="300">
                            Personal Information
                        </Typography>
                    </MenuItem>
                    <MenuItem sx={{paddingBottom: 2, paddingTop: 2, borderBottom: 2, borderColor: '#808080'}}>
                        <Typography variant="h6" textAlign="left" fontWeight="300">
                            Connected Devices
                        </Typography>
                    </MenuItem>
                    <MenuItem sx={{paddingBottom: 2, paddingTop: 2, borderBottom: 2, borderColor: '#808080'}}>
                        <Typography variant="h6" textAlign="left" fontWeight="300">
                            Preferences
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Box>

            <Box textAlign="center" justifyContent="center">
                <Button variant="contained" size='large' color="secondary" disableElevation>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Log Out
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}