import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const NavigationBar = ()=>{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            Sources
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>All</MenuItem>
                <MenuItem onClick={handleClose}>Articles</MenuItem>
                <MenuItem onClick={handleClose}>Books</MenuItem>
                <MenuItem onClick={handleClose}>Presentations</MenuItem>
                <MenuItem onClick={handleClose}>Videos</MenuItem>
        </Menu>
    </Box>
    );
}

export default NavigationBar;