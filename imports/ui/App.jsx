import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
	<h2>to-do-app</h2>
	<h3>v0.0.1</h3>
    <Hello/>
    <Info/>
  </div>
);
