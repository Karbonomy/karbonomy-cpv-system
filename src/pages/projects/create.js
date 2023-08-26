import * as Yup from 'yup';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
    Container,
    Box,
    TextField,
    Stack,
    Button,
    Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import { FormProvider as Form, useForm } from 'react-hook-form';
// import { fileToBase64 } from '../../utils/fileUltils'
import Empty from '../../assets/images/empty.jpeg';
import UploadWidget from '../../components/UploadWidget/UploadWidget';
import axios from "axios";

const baseURL = "http://localhost:3333/projectNfts/";

export default function CreateProject() {
    const { wallet } = useSelector((state) => state.user);
    const [url, updateUrl] = useState();
    const [error, updateError] = useState();
    function handleOnUpload(error, result, widget) {
        if (error) {
            updateError(error);
            widget.close({
                quiet: true
            });
            return;
        }
        updateUrl(result?.info?.secure_url);
    }
    const theme = createTheme({
        components: {
            MuiFormHelperText: {
                styleOverrides: {
                    root: {
                        color: "red"
                    }
                }
            }
        }
    });

    const navigate = useNavigate();

    const returnPage = async (event) => {
        event.preventDefault()
        navigate('/projects',  {
            state: {
              result: true,
            }
          })
    }

    // const onChangeFile = async (event) => {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     const file = event.target.files[0];
    //     setFileContent(await fileToBase64(file))
    //     setFile(URL.createObjectURL(file))
    //     const arrValue = event.target.value.split('\\')
    //     setFileName(arrValue[arrValue.length - 1])
    // }

    const [isSubmit, setIsSubmit] = useState(false);
    // const [fileContent, setFileContent] = useState('');
    // const [file, setFile] = useState('');
    // const [fileName, setFileName] = useState('');

    const CreateSchema = Yup.object().shape({
        name: Yup.string().required('please enter name'),
        organization: Yup.string().required('please enter organization name'),
        mail_address: Yup.string().email('please enter conrrect email format')
    })

    const methods = useForm({
        resolver: yupResolver(CreateSchema)
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = methods

    const onSubmit = async (data) => {
        setIsSubmit(true);
        let image = {url}
        let wallet_company = {wallet};
        const datas = {
            name: data.name,
            wallet: wallet_company.wallet,
            origin: data.organization,
            address: data.address,
            start_date: data.start_date,
            end_date: data.end_date,
            amount: data.amount,
            price: data.price,
            description: data.description,
            image:  image.url ,
        };
        console.log(datas)

        axios.post(baseURL + "create", datas).then((res) => {
            console.log(res);
            navigate('/projects', {
                state: {
                    message: "Minted carbon certificates successfully"
                }
            });
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Create Project</title>
            </Helmet>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography style={{ fontWeight: 'Bold' }} variant="h5" gutterBottom>
                        Create Project
                    </Typography>
                </Stack>

                <Form>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { mb: 2, mt: 2, mr: 2, width: '60ch', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                {...register("name")}
                                helperText={errors.name?.message}
                                name="name"
                                id="name"
                                label="Name *"
                            />

                            <TextField
                                {...register("organization")}
                                helperText={errors.organization?.message}
                                name="organization"
                                id="organization"
                                label="Organization *"
                            />
                        </Box>

                        <Box
                            sx={{
                                '& .MuiTextField-root': { mb: 2, mt: 2, mr: 2, width: '60ch', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                {...register("address")}
                                helperText={errors.address?.message}
                                name="address"
                                id="address"
                                label="Address *"
                            />

                            <TextField
                                {...register("mail_address")}
                                helperText={errors.mail_address?.message}
                                name="mail_address"
                                id="mail_address"
                                label="Mail Address *"
                            />
                        </Box>

                        <Box
                            sx={{
                                '& .MuiTextField-root': { mb: 2, mt: 2, mr: 2, width: '60ch', },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField
                                {...register("start_date")}
                                name="start_date"
                                id="start_date"
                                label="Start Date"
                                InputLabelProps={{ shrink: true }}
                                type='date'
                            />

                            <TextField
                                {...register("end_date")}
                                name="end_date"
                                InputLabelProps={{ shrink: true }}
                                label="End Date"
                                id="end_date"
                                type='date'
                            />
                        </Box>

                        <Box
                            sx={{
                                '& .MuiTextField-root': { mb: 2, mt: 2, mr: 2, width: '60ch', },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField
                                {...register("amount")}
                                name="amount"
                                id="amount"
                                type='number'
                                label="Amount"
                            />

                            <TextField
                                {...register("price")}
                                name="price"
                                id="price"
                                type='number'
                                label="Price"
                            />
                        </Box>

                        <Box
                            sx={{
                                '& .MuiTextField-root': { mb: 2, mt: 2, mr: 2, width: '60ch', },
                            }}
                            style={{ display: 'flex' }}
                            noValidate
                            autoComplete="off"
                        >

                            <UploadWidget onUpload={handleOnUpload}>
                                {({ open }) => {
                                    function handleOnClick(e) {
                                        e.preventDefault();
                                        open();
                                    }
                                    return (
                                        <label htmlFor='img' className='form-input_title'>
                                            <div className='form-img' style={{ width: '447px' }}>
                                                <p className='label'>Image</p>
                                                <img onClick={handleOnClick} height={110} style={{ cursor: 'pointer' }} alt="#" src={url || Empty} />
                                            </div>
                                        </label>
                                    )
                                }}
                            </UploadWidget>
                            {error && <p>{error}</p>}
                            {/* <img src={ url } alt="Uploaded resource" /> */}

                            <TextField
                                style={{ marginLeft: '35px', }}
                                {...register("description")}
                                id="description"
                                name="description"
                                label="Description"
                                multiline
                                rows={5}
                            />

                        </Box>

                        <Stack spacing={2} alignItems="center" justifyContent="center" direction="row" m={2}>
                            <Button onClick={returnPage} variant="outlined">Back</Button>
                            <LoadingButton loading={isSubmit} type='submit' variant="contained">Submit</LoadingButton>
                        </Stack>
                    </form>
                </Form>
            </Container >
        </ThemeProvider>
    )
}