import { Typography, Box, IconButton, Button, Modal, Snackbar, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import devicesList from "../../mockData/DevicesList";
import BackButton from "../utils/BackButton";
import { useState } from "react";

function AccountConnectDevice(){
    const [availableDevices, setAvailableDevices] = useState(devicesList);
    const [registeredDevices, setRegisteredDevices] = useState<string[]>([]);
    const [addDeviceModalOpen, setAddDeviceModalOpen] = useState(false);
    const [removeDeviceModalOpen, setRemoveDeviceModalOpen] = useState(false);
    const [deviceToRemove, setDeviceToRemove] = useState<string>();
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [connectedOpen, setConnectedOpen] = useState(false);
    const [disconnectedOpen, setDisconnectedOpen] = useState(false);
    const [removeOpen, setRemoveOpen] = useState(false);
    const [connectedDevice, setConnectedDevice] = useState<string>();
    const [isConnected, setIsConnected] = useState(false);

    const handleAddDevice = (device:string) => {
        setRegisteredDevices([...registeredDevices, device]);
        var avail = availableDevices.filter((e) => e !== device);
        setAvailableDevices(avail);
        setConfirmationOpen(true);
    };

    const handleRemoveDevice = (device:string) => {
        setDeviceToRemove(device);
        setRemoveDeviceModalOpen(true);
    }

    const confirmRemoveDevice = () => {
        var conn = registeredDevices.filter((e) => e !== deviceToRemove);
        setRegisteredDevices(conn);
        setRemoveOpen(true);
        setRemoveDeviceModalOpen(false);
    }

    const handleRefresh = () => {
        setAvailableDevices(devicesList);
        setRegisteredDevices([]);
    };

    const handleAddDeviceClose = () => {
        setAddDeviceModalOpen(false);
    }

    const handleRemoveDeviceClose = () => {
        setRemoveDeviceModalOpen(false);
    }

    const handleConfirmationClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setConfirmationOpen(false);
        setConnectedOpen(false);
        setDisconnectedOpen(false);
        setRemoveOpen(false);
    }

    const handleConnectDevice = (device:string) => {
        setConnectedDevice(device);
        setIsConnected(true);
        setConnectedOpen(true);
    }

    const handleDisconnectDevice = () => {
        setConnectedDevice(""); //this is janky
        setIsConnected(false);
        setDisconnectedOpen(true);
    }

    const modal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: (window.innerWidth < 570) ? 250 : 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 8,
        boxShadow: 24,
        p: 3,
      };

    return(
        <div>
            <Snackbar open={confirmationOpen}
                autoHideDuration={3000}
                onClose={handleConfirmationClose}
                message="Successfully added device to account!"
            />
            <Snackbar open={connectedOpen}
                autoHideDuration={3000}
                onClose={handleConfirmationClose}
                message="Successfully connected to device!"
            />
            <Snackbar open={disconnectedOpen}
                autoHideDuration={3000}
                onClose={handleConfirmationClose}
                message="Successfully disconnected device!"
            />
            <Snackbar open={removeOpen}
                autoHideDuration={3000}
                onClose={handleConfirmationClose}
                message="Successfully removed device from account!"
            />
            <Modal open={removeDeviceModalOpen} onClose={handleRemoveDeviceClose}>
                <Box sx={modal}>
                    <Typography textAlign="center">Remove Device</Typography>
                    <Typography padding={3}>Are you sure you want to remove {deviceToRemove} from your registered devices?</Typography>
                    <Box display="flex" flexDirection="column" padding={1} gap={1} bottom="0px">
                        <Button variant="contained" color="error" onClick={() => confirmRemoveDevice()}>Remove</Button>
                        <Button onClick={() => setRemoveDeviceModalOpen(false)}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={addDeviceModalOpen} onClose={handleAddDeviceClose}>
                <Box sx={modal} display="flex" justifyContent="center" flexDirection="column">
                    <Typography textAlign="center" paddingBottom={1} variant="h5">Found Devices</Typography>
                    <Box padding={4}
                        sx={{ overflow: "hidden", overflowY: "scroll" }}>
                        {availableDevices.length > 0 ? availableDevices.map((device) =>
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                <Typography textAlign="center">{device}</Typography>
                                <IconButton onClick={() => handleAddDevice(device)}><AddIcon/></IconButton>
                            </Box>) : 
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Typography> No devices found!</Typography>
                            </Box>
                        }
                    </Box>
                    <Box paddingTop={3} flexDirection="column" display="flex" justifyContent="center"
                            alignItems="center" gap={1} bottom="0px">
                            <Box sx={{width:"50%"}}>
                                <Button fullWidth variant="contained" onClick={() => handleRefresh()}>Rescan For Devices</Button>
                            </Box>
                            <Box sx={{width:"50%"}} padding={1}>
                                <Button fullWidth variant="contained" onClick={() => handleAddDeviceClose()}>Done</Button>
                            </Box>
                    </Box>      
                </Box>
            </Modal>
            <Box padding={5}>
                <BackButton route="/Account/" />
                <Typography variant="h5" fontWeight="bold" textAlign="center">Connect Device</Typography>
                <Box display="flex" justifyContent="center" padding={2} textAlign="center">
                    {isConnected ?
                        <Typography>Currently connected to: {connectedDevice}</Typography>
                        :<Typography textAlign="center">You do not have any devices connected currently</Typography>
                    }
                </Box>
                <Divider variant="middle"></Divider>
                    <Box padding={1} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                        <Typography textAlign="center" padding={2} variant="h6">Registered Devices</Typography>
                        <Box padding={4}
                            sx={{ border: 1, 
                                width: (window.innerWidth < 570) ? "80%" : "30%",
                                height: (window.innerWidth < 570) ? "180px" : "400px",
                                borderRadius: 3,
                                margin: 1,
                                borderColor: "ActiveBorder",
                                overflow: "hidden",
                                overflowY: "scroll" }}>
                                {registeredDevices.length > 0 ? registeredDevices.map((device) =>
                                <Box display="flex"
                                    flexDirection={(window.innerWidth < 570) ? "column" : "row"}
                                    alignItems="center"
                                    justifyContent={(window.innerWidth < 570) ? "center" : "space-between"}
                                    padding={1}>
                                    <Typography>{device}</Typography>
                                    <Box display="flex">
                                        <Box padding={1}>
                                            {(device === connectedDevice) ?
                                                <Button variant="contained" onClick={() => handleDisconnectDevice()}>Disconnect</Button>:
                                                <Button variant="contained" onClick={() => handleConnectDevice(device)}>Connect</Button>}
                                        </Box>
                                        <Box padding={1}>
                                            <Button variant="contained" color="error" onClick={() => handleRemoveDevice(device)}>Remove</Button>
                                        </Box>
                                    </Box>
                                </Box>) : 
                                <Typography textAlign="center"> No devices registered yet!</Typography>
                                }
                        </Box>
                    </Box>
                <Box display="flex" justifyContent="center" alignItems="center" bottom={0}>
                    <Button variant="contained" onClick={() => setAddDeviceModalOpen(true)}>Add New Device</Button>
                </Box>
            </Box>
        </div>
    );
}

export default AccountConnectDevice