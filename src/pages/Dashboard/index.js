import React, { useEffect , useState, useMemo} from 'react';
import socketio from 'socket.io-client';
import api from '../../services/api';
import Routes from './routesDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

/* Importing images */
import logo from '../../assets/mipp_white_h.png';

export default function Dashboard() {
    // const [spots, setSpots] = useState([]);
    // const [requests, setResquests] = useState([]);

    // const user_id = localStorage.getItem('user');

    // const socket = useMemo(() => socketio('http://192.168.0.33:3333', {
    //     query: { user_id },
    // }), [user_id]);

    // useEffect(() => {
    //     socket.on('booking_request', data => {
    //         setResquests([...requests, data]);
    //     })
    // }, [requests, socket]);

    // useEffect(() => {
    //     async function loadSpots(){
    //         const user_id = localStorage.getItem('user');
    //         const response = await api.get('/dashboard', {
    //             headers: { user_id }
    //         });

    //         setSpots(response.data);
    //     }

    //     loadSpots();
    // }, []);

    // async function handleAccept(id){
    //     await api.post(`/bookings/${id}/approvals`);
        
    //     setResquests(requests.filter(request => request._id !== id));
    // };
    
    // async function handleReject(id){
    //     await api.post(`/bookings/${id}/rejections`);

    //     setResquests(requests.filter(request => request._id !== id));
    // };

    async function handleMenu(){
        document.querySelector(".sidebar-wrapper").classList.toggle("active");
        if(document.querySelector(".sidebar-wrapper").classList.contains("active")) {
            document.querySelector(".logo").classList.toggle("active-logo");
        }
    }

    async function handleMenuClose(){
        document.querySelector(".sidebar-wrapper").classList.toggle("active");
        if(!document.querySelector(".sidebar-wrapper").classList.contains("active")) {
            document.querySelector(".logo").classList.toggle("active-logo");
        } 
    }

    return (
        <>
            <div className="row">
                <div className="sidebar-nav">
                    <FontAwesomeIcon icon={Icon.faBars} className="menu-toggle" onClick={handleMenu}/>
                    <div className="logo">
                        <img src={logo} alt="MIPP" />
                    </div>
                    <div className="sidebar-wrapper">
                        <FontAwesomeIcon icon={Icon.faTimes} className="menu-toggle-close" onClick={handleMenuClose}/>
                        <ul className="nav">
                            <li><strong>Dashboard</strong></li>
                                <li><a className="nav-link" href="/dashboard"><p>Dashboard</p></a></li>
                            <li><strong>Configurações</strong></li>
                                <li><a className="nav-link" href="/dashboard/screen-configuration"><p>Configurações de tela</p></a></li>
                            <li><strong>Cadastro</strong></li>
                                <li><a className="nav-link" href="/dashboard/media-registration"><p>Cadastro de mídias</p></a></li>
                                <li><a className="nav-link" href="/dashboard/background-registration"><p>Cadastro de plano de fundo</p></a></li>
                            <li><strong>Usuário</strong></li>
                                <li><a className="nav-link" href="/dashboard/change-password"><p>Alterar senha</p></a></li>
                                <li><a className="nav-link" href="/dashboard/logout"><p>Logout</p></a></li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <Routes />
                </div>
            </div>
            {/* <ul className="notifications">
                {requests.map(request => (
                    <li key={request._id}>
                        <p>
                            <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>.
                        </p>
                        <button className="accept" onClick={() => handleAccept(request._id)}>ACEITAR</button>
                        <button className="reject" onClick={() => handleReject(request._id)}>REJEITAR</button>
                    </li>
                ))}
            </ul>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
               <button className="btn">Cadastrar novo spot</button>
            </Link> */}
        </>
    );
}