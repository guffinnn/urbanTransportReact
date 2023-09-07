import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import AppTag from './AppTag';
import AppStatus from "./AppStatus";
import AppModal from "./AppModal";

const root = ReactDOM.createRoot(document.getElementById('route'));
root.render(<App />);

const tag = ReactDOM.createRoot(document.getElementById('tag'));
tag.render(<AppTag />);

const status = ReactDOM.createRoot(document.getElementById('status'));
status.render(<AppStatus />);

const btnFilter = document.querySelector('.filter__box');

btnFilter.addEventListener('click', e => {
    const modal = ReactDOM.createRoot(document.getElementById('modal'));
    modal.render(<AppModal />);
})