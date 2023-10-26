import { Typography, Box, IconButton, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import devicesList from "../mockData/DevicesList";
import { useState } from "react";

function AccountConnectDevice(){
    const [availableDevices, setAvailableDevices] = useState(devicesList);
    const [connectedDevices, setConnectedDevices] = useState<string[]>([]);

    const handleAddDevice = (device:string) => {
        setConnectedDevices([...connectedDevices, device]);
        var avail = availableDevices.filter((e) => e !== device);
        setAvailableDevices(avail);
    };

    const handleRefresh = () => {
        setAvailableDevices(devicesList);
        setConnectedDevices([]);
    }

    return(
        <div>            
            <Box display="flex" justifyContent="center" padding={4} flexDirection="column">
                <Typography variant="h5" textAlign="center">Connect A New Device</Typography>
                <Box padding={1} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Typography textAlign="center" padding={2}>Found Device:</Typography>
                    <Box padding={4} minWidth={400} maxWidth={700} minHeight={400} maxHeight={400}
                        sx={{ border:1, borderColor:'primary.main', overflow: "hidden", overflowY: "scroll" }}>
                            {availableDevices.length > 0 ? availableDevices.map((device) =>
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                <Typography textAlign="center">{device}</Typography>
                                <IconButton onClick={() => handleAddDevice(device)}><AddIcon/></IconButton>
                            </Box>) : 
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Typography> No Devices Found </Typography>
                            </Box>
                            }
                    </Box>                
                </Box>
            </Box>
            <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center" gap={2}>
                <Button variant="contained" onClick={() => handleRefresh()}>Scan For Devices</Button>
                <Button variant="contained">Cancel</Button>
            </Box>
        </div>
    );
}

export default AccountConnectDevice