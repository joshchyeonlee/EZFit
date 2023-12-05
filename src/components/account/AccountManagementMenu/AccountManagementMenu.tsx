import { Box } from "@mui/material";
import AccountManagementMenuItem from "./AccountManagementMenuItem";

export default function AccountManagementMenu() {
  return (
    <Box>
      <Box textAlign="center" padding={2} marginBottom={5}>
        <Box sx={{ borderTop: 2, borderBottom: 2, borderColor: "#808080" }}>
          <AccountManagementMenuItem buttonLink="/Account/PersonalInformation">
            Personal Information
          </AccountManagementMenuItem>
        </Box>
        <Box sx={{ borderBottom: 2, borderColor: "#808080" }}>
          <AccountManagementMenuItem buttonLink="./">
            Connected Devices
          </AccountManagementMenuItem>
        </Box>
        <Box sx={{ borderBottom: 2, borderColor: "#808080" }}>
          <AccountManagementMenuItem buttonLink="/Account/Preferences">
            Preferences
          </AccountManagementMenuItem>
        </Box>
      </Box>
    </Box>
  );
}
