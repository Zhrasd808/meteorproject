import React from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';

const tasks = [
	{_id: 0, text: 'First Task'},
	{_id: 1, text:'Secend Task'},
    {_id: 2, text:'Third Task' }
];

export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}).fetch());

	return(

 
       <div>
          <h1>Welcome to Meteor!</h1>
	
        	<ul>
         	   { tasks.map(task => <Task key={ task._id } task={ task } />) }
        	</ul>
    
      </div>
    );
};
