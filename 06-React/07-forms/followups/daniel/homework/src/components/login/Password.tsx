import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";


interface InputPasswordProps {
    onInput: (ev: React.ChangeEvent<HTMLInputElement>) => void
}


export const InputPassword = ({ onInput }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    };

    return (
        <div>
            <FormControl color='secondary' variant="outlined" fullWidth size="small" margin="dense">
                <OutlinedInput placeholder="Password" type={showPassword ? 'text' : 'password'} endAdornment={<InputAdornment position="end"><IconButton sx={{color:'#635858'}} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} 
                    disableRipple>{showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}</IconButton></InputAdornment>} onInput={onInput} />
            </FormControl>
        </div>
    )
}

