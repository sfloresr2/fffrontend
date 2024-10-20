import React, { useState, useEffect } from 'react';
import { TextField, Container, Typography, Grid, Box, Button, MenuItem, Select, InputLabel } from '@mui/material';
import ApiRequest from '../../../helpers/axiosInstances';
import Page from '../../common/Page';
import ToastAutoHide from '../../common/ToastAutoHide';



//ventas
const Ventasvf = () => {
    const initialState = {
            id: "",	
            codigo:"",
            placa:"",
            tipo_vehiculo:"",
            marca: "",	
            modelo: "",	
            color: "",
            uso:"",
            linea:"",
            chasis:"",
            serie:"",
            numero_asientos: "",
            ejes:"",
            numero_vin: "",
            motor:"",
            cilindros:"",
            c_c:"",	
            id_clientes: "",
            fecha_venta: "",	
            precio_compra: "",	
            precio_venta: ""	
    };



    // Modificación para evitar desfase por zona horaria
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        // Ajustar la fecha sumando horas para evitar el desfase por la zona horaria
        d.setHours(d.getHours() + 12);  // Sumar 12 horas para asegurar el día correcto
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const day = ('0' + d.getDate()).slice(-2);
        return d.getFullYear() + '-' + month + '-' + day;
    };



    const [roles, setRoles] = useState([]);
    const [body, setBody] = useState(initialState);
    const [isEdit, setIsEdit] = useState(false);
    const [mensaje, setMensaje] = useState({ ident: null, message: null, type: null });



    const fetchRoles = async () => {
        try {
            const response = await ApiRequest().get('/clientesvvv');
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles data:', error);
        }
    };



    const onChange = ({ target }) => {
        const { name, value } = target;
        setBody({
            ...body,
            [name]: value
        });
    };



    const onSubmit = async () => {
        try {
            const { data } = await ApiRequest().post('/guardar_vehicv', body);
            setMensaje({
                ident: new Date().getTime(),
                message: data.message,
                type: 'success'
            });
            setBody(initialState);
            setIsEdit(false);
        } catch ({ response }) {
            setMensaje({
                ident: new Date().getTime(),
                message: response.data.sqlMessage,
                type: 'error'
            });
        }
    };



    const onEdit = async () => {
        try {
            const { data } = await ApiRequest().post('/editar_vehicv', body);
            setMensaje({
                ident: new Date().getTime(),
                message: data.message,
                type: 'success'
            });
            setBody(initialState);
            setIsEdit(false);
        } catch ({ response }) {
            setMensaje({
                ident: new Date().getTime(),
                message: response.data.sqlMessage,
                type: 'error'
            });
        }
    };



    useEffect(() => {
        fetchRoles();
    }, []);



    return (
        <Page title="FF | Ventas Vehiculos">
            <ToastAutoHide message={mensaje} />
            <Container maxWidth='lg'>
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h5">Módulo de Registro de Información de  {isEdit ? 'Editar Vehiculo' : 'Ventas de Vehiculo'}</Typography>
                </Box>
                <Grid container spacing={2}>

                
                <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='codigo'
                            value={body.codigo}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Codigo'
                        />
                    </Grid>
                
                
                
                <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='placa'
                            value={body.placa}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Placa'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='tipo_vehiculo'
                            value={body.tipo_vehiculo}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Tipo vehiculo'
                        />
                    </Grid>


                    
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='marca'
                            value={body.marca}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Marca'
                        />
                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='modelo'
                            value={body.modelo}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Modelo'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='color'
                            value={body.color}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Color'
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='uso'
                            value={body.uso}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Uso'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='linea'
                            value={body.linea}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Linea'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='chasis'
                            value={body.chasis}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Chasis'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='serie'
                            value={body.serie}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Serie'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='numero_asientos'
                            value={body.numero_asientos}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Numero de Asientos'
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='ejes'
                            value={body.ejes}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Ejes'
                        />
                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='numero_vin'
                            value={body.numero_vin}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Numero de VIN'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='motor'
                            value={body.motor}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Motor'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='cilindros'
                            value={body.cilindros}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Cilindros'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin='normal'
                            name='c_c'
                            value={body.c_c}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='c_c'
                        />
                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="id_clientes">Cliente Vehiculo</InputLabel>
                        <Select
                            name="id_clientes"
                            value={body.id_clientes || ''}
                            onChange={onChange}
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {roles.map((id_clie) => (
                                <MenuItem key={id_clie.id} value={id_clie.id}>
                                    {id_clie.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            type='date'
                            margin='normal'
                            name='fecha_venta'
                            value={formatDate(body.fecha_venta)}
                            onChange={onChange}
                            variant='outlined'
                            size='small'
                            fullWidth
                            label='Fecha Venta'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>


                    <Grid item xs={12}>
    <TextField
        margin='normal'
        name='precio_compra'
        value={body.precio_compra}
        onChange={onChange}
        variant='outlined'
        size='small'
        fullWidth
        label='Precio Compra'
        InputProps={{
            startAdornment: <Typography>Q.</Typography>
        }}
    />
</Grid>


<Grid item xs={12}>
    <TextField
        margin='normal'
        name='precio_venta'
        value={body.precio_venta}
        onChange={onChange}
        variant='outlined'
        size='small'
        fullWidth
        label='Precio Venta'
        InputProps={{
            startAdornment: <Typography>Q.</Typography>
        }}
    />
    </Grid>




                    
                    <Grid item xs={12}>
                        <Button variant='contained' color='primary' onClick={isEdit ? onEdit : onSubmit}>
                            {isEdit ? 'Editar Venta' : 'Registrar Venta de Vehiculo'}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default Ventasvf;
