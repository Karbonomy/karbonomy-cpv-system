import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// @mui
import {
    Card,
    Table,
    Stack,
    Paper,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    Link,
    Snackbar,
    Alert,
    Hidden
} from '@mui/material';
// components
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import ConfirmModal from '../../components/common/ConfirmModal';
// sections
import { ProjectListHead, ProjectListToolbar } from '../../sections/@dashboard/projects';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// mock
import PROJECTS from '../../_mock/projects';
import axios from "axios";
// store
import { useDispatch, useSelector } from 'react-redux';
import { updateCarbonAmount, updateProjectSharded } from '../../features/userSlice';

const baseURL = "http://localhost:3333/projectNfts/";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    { id: 'name', label: 'Project Name', alignRight: false },
    { id: 'origin', label: 'Implementing Origin', alignRight: false },
    { id: 'amount', label: 'Purchase Amount (t-CO2)', alignRight: false },
    { id: 'price', label: 'Purchase Price', alignRight: false },
    { id: 'start_date', label: 'Start date', alignRight: false },
    { id: 'end_date', label: 'End date', alignRight: false },
    { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_Project) => _Project.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function ProjectPage() {
    const [message, setMessage] = useState(useLocation()?.state?.message ?? '')
    const test = () => {
        setMessage("red");
    }
    const notify = () => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setMessage('');

    }

    useEffect(() => {
        if (message !== '') {
            notify();

        }

    });

    const { wallet, projectSharded } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleTokenizeCarbonAmount = (ownerWallet, carbonAmount) => {
        if (wallet === ownerWallet) {
            dispatch(updateCarbonAmount(parseInt(carbonAmount)));
        }
    }

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('name');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [datas, setData] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const [shardedProjects, setShardedProjects] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [currentProjectId, setCurrentProjectId] = useState(null);

    const handleTokenShardingClick = (projectId, projectName, ownerWallet, carbonAmount) => {
        setCurrentProjectId({ id: projectId, name: projectName });
        setShowConfirmModal(true);
        setShardedProjects(prev => [...prev, projectId]);
        handleTokenizeCarbonAmount(ownerWallet, carbonAmount);
        dispatch(updateProjectSharded(projectId));
        // setShowAlert(true);
    };

    const handleConfirmSharding = () => {
        setShardedProjects(prev => [...prev, currentProjectId]);

        setMessage('Token sharding successful!');
        setShowConfirmModal(false);
    };



    useEffect(() => {
        axios.get(baseURL + wallet).then((res) => {
            setData(res.data);
        })
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = datas.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - datas.length) : 0;

    const filteredProjects = applySortFilter(datas, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredProjects.length && !!filterName;

    return (
        <>
            <Helmet>
                <title> Projects </title>
            </Helmet>

            <Container>
                <Snackbar
                    open={showAlert}
                    autoHideDuration={2000}
                    severity="success"
                    onClose={() => setShowAlert(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
                        Token sharding successful!
                    </Alert>
                </Snackbar>
                <ConfirmModal
                    open={showConfirmModal}
                    title="Token Sharding"
                    projectName={currentProjectId?.name}
                    onConfirm={handleConfirmSharding}
                    onCancel={() => setShowConfirmModal(false)}
                />
                <div>
                    <Hidden onClick={test}>
                    </Hidden>
                    <ToastContainer limit={1} />
                </div>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Projects
                    </Typography>
                    <Link to="/projects/create" component={RouterLink} sx={{ display: 'contents' }}>
                        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                            New Project
                        </Button>
                    </Link>
                </Stack>

                <Card>
                    <ProjectListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                <ProjectListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={PROJECTS.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredProjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        const { id, name, origin, amount, price, start_date, end_date } = row;
                                        const selectedProject = selected.indexOf(name) !== -1;

                                        return (
                                            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedProject}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={selectedProject} onChange={(event) => handleClick(event, name)} />
                                                </TableCell>

                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Typography variant="subtitle2" noWrap>
                                                            {name}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>

                                                <TableCell align="left">{origin}</TableCell>

                                                <TableCell align="left">{amount}</TableCell>

                                                <TableCell align="left">{price}</TableCell>

                                                <TableCell align="left">{start_date}</TableCell>

                                                <TableCell align="left">{end_date}</TableCell>


                                                <TableCell align="right">
                                                    <Button
                                                        variant="outlined"
                                                        onClick={() => handleTokenShardingClick(id, name, wallet, amount)}
                                                        disabled={projectSharded.includes(id)}
                                                    >
                                                        <Iconify icon={'ic:baseline-token'} />token sharding
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>

                                {isNotFound && (
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                <Paper
                                                    sx={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <Typography variant="h6" paragraph>
                                                        Not found
                                                    </Typography>

                                                    <Typography variant="body2">
                                                        No results found for &nbsp;
                                                        <strong>&quot;{filterName}&quot;</strong>.
                                                        <br /> Try checking for typos or using complete words.
                                                    </Typography>
                                                </Paper>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                    </Scrollbar>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={datas.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </>
    );
}
