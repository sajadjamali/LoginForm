import { TextField, Slide, Box, InputAdornment, IconButton } from "@mui/material";
import {
    AccountCircle,
    EmailRounded,
    LockPerson,
    Login
} from "@mui/icons-material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import validationSchema from "../validation";
import { useState, useEffect } from "react";
import { RandomReveal } from "react-random-reveal";
import Spinner from "./Spinner";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useFormik} from "formik";


const Form = () => {

    const [loadingForm, setLoadingForm] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    useEffect(() => {
        setLoadingForm(true);
        return() => {
            setLoadingForm(false);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            window.open("#", "_self");
        },
    });

    const handleToasts = () => {
        toast.dismiss();
        let isemptyFeild = (formik.values.username === "" || formik.values.email === "");
        if (!formik.isValid || isemptyFeild){
            toast.error("Login failed 😑");
        }
        else{
            toast.success("Login was successful 🙂");
        }
    }

    return (
        <>
            <ToastContainer position="top-right" theme="dark" autoClose={3000}
               style={{marginTop: "5em"}}
            />

            <header className="text-center mt-3" >
                <RandomReveal isPlaying characters={"Welcome!"}
                              duration={3} characterSet={[
                    "🍇", "🍑", "🍒", "🍎", "🍓", "🥦", "🍅", "🥑", "🥕", "🍐", "🍆", "🍌"
                ]} onComplete={() => { setLoadingSpinner(false)} } />
            </header>

            {
                loadingSpinner && <Spinner />
            }

            <Slide direction="up" in={loadingForm} style={{
                transitionDelay: loadingForm ? "3000ms" : "0ms",
            }}>

                <form className="formContent m-auto mt-3 text-center pt-3" onSubmit={formik.handleSubmit} >

                    <span className="mt-2 fs-2 emogi">&#128578;</span>
                    <h3 className="mt-3 pt-2 pb-3">Login</h3>

                    {/*username feild*/}
                    <Box sx={{ display: 'flex' , alignItems: 'flex-end', justifyContent: 'center'}}>
                        <AccountCircle className="icon" sx={{ color: 'action.active'}} />
                        <TextField name="username" sx={{width: "75%", marginTop: "1em"}}
                                   id="input-with-sx" label="username" variant="standard"
                                   value={formik.values.username}
                                   onChange={formik.handleChange}
                                   error={formik.touched.username && Boolean(formik.errors.username)}
                                   helperText={formik.touched.username && formik.errors.username}
                        />
                    </Box>

                    {/*password feild*/}
                    <Box sx={{ display: 'flex' , alignItems: 'flex-end', justifyContent: 'center'}}>
                        <LockPerson className="icon" sx={{ color: 'action.active'}} />
                        <TextField name="password" sx={{width: "75%", marginTop: "1em"}}
                                   id="input-with-sx" label="password" variant="standard"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   type={showPassword ? 'text' : 'password'}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={handleClickShowPassword}
                                           >
                                               {showPassword ? <VisibilityOff className="icon" /> : <Visibility className="icon" />}
                                           </IconButton>
                                       </InputAdornment>,
                                   }}
                        />
                    </Box>

                    {/*email feild*/}
                    <Box sx={{ display: 'flex' , alignItems: 'flex-end', justifyContent: 'center'}}>
                        <EmailRounded className="icon" sx={{ color: 'action.active'}} />
                        <TextField name="email" sx={{width: "75%", marginTop: "1em"}}
                                   id="input-with-sx" label="email" variant="standard"
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>

                    {/*links*/}
                    <ul className="nav justify-content-around mt-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">forget password?</a>
                        </li>
                    </ul>

                    {/*button submit*/}
                    <Box>
                        <FormControlLabel
                            sx={{
                                display: 'block',
                            }}
                            control={
                                <Switch
                                    checked={loadingButton}
                                    onChange={() => setLoadingButton(!loadingButton)}
                                    name="loading"
                                    color="primary"
                                />
                            }
                            label="Loading"
                        />
                        <Box sx={{ '& > button': { m: 1 } }}>
                            <LoadingButton type="submit"
                                endIcon={<Login />}
                                loading={loadingButton}
                                loadingPosition="end"
                                variant="contained"
                                sx={{width: "50%"}}
                                 className="button"
                                onClick={handleToasts}
                            >
                                <span>LOGIN</span>
                            </LoadingButton>
                        </Box>
                    </Box>
                </form>
            </Slide>
        </>
    );
}

export default Form;
