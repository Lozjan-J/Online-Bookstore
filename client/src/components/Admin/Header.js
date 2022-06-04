import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Header(){
    const [profile, setProfile] = useState();

    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem('Profile'))); //sets Profile so it loads everytime you reload the page
      }, []);

    return (
        <>
        <Container>
            <h3 className='text-center py-3'>Welcome to Admin Dashboard <strong>{profile && profile['First Name'] + ' ' + profile['Last Name']}</strong>.</h3>
            <div className='row text-center'>
                <ul className='list-unstyled border rounded bg-dark text-light py-3'>
                    <Link to="/admin" className='text-white list-inline-item mx-3' style={{fontSize: '20px', textDecoration: 'none'}}>Dashboard</Link>
                    <Link to="/admin/manage" className='text-white list-inline-item mx-3' style={{fontSize: '20px', textDecoration: 'none'}}>Manage</Link>
                    <Link to="/admin/notifications" className='text-white list-inline-item mx-3' style={{fontSize: '20px', textDecoration: 'none'}}>Notifications</Link>
                </ul>
            </div>
        </Container>
        </>
    )
}

export default Header;