import  React, { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
// import Input from '@mui/material/Input'
// import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
// import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
// import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
// import { Button } from '@mui/material'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  return (
    <Box
      sx={{ display: 'grid', flexWrap: '' }}
      className="border-2 border-black min-h-screen "
    >
      <div className="text-center font-bold text-2xl">
        <h1>Login</h1>
      </div>
      <form action="">
        <div className=" w-[80%] m-auto">
          <div className=" w-[80]">
            <InputLabel
              htmlFor="filled-adornment-username"
              className="py-8 text-black"
            >
              Username
            </InputLabel>
            <FormControl
              sx={{ m: 1, width: '100%' }}
              variant="filled"
              className="py-4"
            >
              <OutlinedInput className="border-4 border-black outline-none shadow-md " />
            </FormControl>
          </div>
          <div className="w-[80] py-8">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <OutlinedInput
                className="border-4 border-black outline-none shadow-md"
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="w-[30%] m-auto">
            <button className="text-black border-2 w-[100%] font-bold border-black outline-2 shadow-black shadow-2xl ">
              <Link to="/dashboard">Login</Link>
            </button>
          </div>
        </div>
      </form>
    </Box>
  )
}
