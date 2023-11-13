import { Box, Button, Typography } from '@mui/material';

export default function AccountManagementMenuItem( {children} : any ) {
    return (
        <Box>
            <Button fullWidth sx={{ borderRadius:0, paddingBottom: 3, paddingTop: 3, borderColor: '#808080'}}>
                <Typography variant="h6" textAlign="left" color="black" fontWeight="300">
                    {children}
                </Typography>
            </Button>
        </Box>
    )
}