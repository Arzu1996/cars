
require('./bootstrap');
import React, { Component } from 'react';
import  { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import Index from './components/Index';
import Contacts from './components/Contacts';
 render(<Index />,document.getElementById('root'));
 render(<Contacts />,document.getElementById('app'));