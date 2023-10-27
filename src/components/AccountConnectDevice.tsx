import { Typography, Box, IconButton, Button, Modal, Snackbar, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import devicesList from "../mockData/DevicesList";
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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
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
                        <Button variant="contained" color="warning" onClick={() => confirmRemoveDevice()}>Remove</Button>
                        <Button onClick={() => setRemoveDeviceModalOpen(false)}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={addDeviceModalOpen} onClose={handleAddDeviceClose}>
                <Box sx={modal}>
                    <Typography textAlign="center" paddingBottom={1}>Found Devices</Typography>
                    <Box padding={2} minWidth={250} maxWidth={500} minHeight={175} maxHeight={250}
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
                    <Box paddingTop={3} flexDirection="column"
                            display="flex" justifyContent="center"
                            alignItems="center" gap={1}
                            bottom="0px">
                            <Button variant="contained" onClick={() => handleRefresh()}>Rescan For Devices</Button>
                            <Button variant="contained" onClick={() => handleAddDeviceClose()}>Done</Button>
                    </Box>      
                </Box>
            </Modal>
            <Box display="flex" justifyContent="center" padding={4} flexDirection="column">
                <Typography variant="h5" textAlign="center">Connect Device</Typography>
                <Box display="flex" justifyContent="center" padding={2}>
                    {isConnected ?
                        <Typography>Currently connected to: {connectedDevice}</Typography>:
                        <Typography textAlign="center">You do not have any devices connected currently</Typography>}
                </Box>
                <Divider variant="middle"></Divider>
                <Box padding={1} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Typography textAlign="center" padding={2} variant="h6">Registered Devices</Typography>
                    <Box padding={4} minWidth={500} maxWidth={500} minHeight={200} maxHeight={200}
                        sx={{ overflow: "hidden", overflowY: "scroll" }}>
                            {registeredDevices.length > 0 ? registeredDevices.map((device) =>
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" padding={1}>
                                <Typography>{device}</Typography>
                                <Box display="flex" gap={1}>
                                    {(device === connectedDevice) ?
                                        <Button variant="contained" onClick={() => handleDisconnectDevice()}>Disconnect</Button>:
                                        <Button variant="contained" onClick={() => handleConnectDevice(device)}>Connect</Button>}
                                    <Button variant="contained" color="warning" onClick={() => handleRemoveDevice(device)}>Remove</Button>
                                </Box>
                            </Box>) : 
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Typography> No devices registered yet!</Typography>
                            </Box>
                            }
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" bottom={0}>
                <Button variant="contained" onClick={() => setAddDeviceModalOpen(true)}>Add New Device</Button>
            </Box>
        </div>
    );
}

export default AccountConnectDevice