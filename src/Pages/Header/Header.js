import React from 'react';
import { Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='header container'>
            <div className='header-logo'>
                <img src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg" alt="" />
            </div>
            <a className='text' href="/">My Books</a>
            <summary>Browser</summary>
            <div>
                <InputGroup>
                    <DropdownButton
                        variant="secondary"
                        placeholder="Recipient's username"
                        title="All"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
            </div>
            <a className='text' href="/">Log In</a>
            <button className='sign-up'>Sign Up</button>

            <div>
                <img className='togler-btn' src="https://openlibrary.org/static/images/hamburger-icon.svg" alt="" />
            </div>
        </div>
    );
};

export default Header;