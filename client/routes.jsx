import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App              from '../imports/ui/App.jsx';
import MyProgress       from '../imports/ui/Pages/MyProgress.jsx';
import MyCoach          from '../imports/ui/Pages/MyCoach.jsx';
import ModuleParser     from '../imports/ui/Pages/Modules/ModuleParser.jsx';
import SubmoduleParser  from '../imports/ui/Pages/Modules/SubmoduleParser.jsx';
import AdminScreen      from '../imports/ui/AdminScreen.jsx';
import AdminSettings    from '../imports/ui/Pages/AdminSettings.jsx';
/* Logbooks */
import PainLogbook      from '../imports/ui/Pages/PainLogbook/PainLogbook.jsx';
import PainLogbookEntry from '../imports/ui/Pages/PainLogbook/PainLogbookEntry.jsx';
import PainLogbookDetail from '../imports/ui/Pages/PainLogbook/PainLogbookDetail.jsx';
import ActivityLogbook  from '../imports/ui/Pages/ActivityLogbook/ActivityLogbook.jsx';
import ValueLogbook from '../imports/ui/Pages/ValueLogbook/ValueLogbook.jsx';
import NewGoalScreen from '../imports/ui/Pages/ValueLogbook/NewGoalScreen';
import FeedbackScreen from '../imports/ui/Pages/FeedbackScreen.jsx';


FlowRouter.route('/', {
  name: 'Admin',
  action(){ mount( App, { content: <AdminScreen/> })}
});

/*
  MY COACH ROUTES
*/
/* With user token */
FlowRouter.route('/:language/mycoach/:token', {
  name: 'MyCoach',
  action(){ mount( App, { content: <MyCoach /> })}
});

FlowRouter.route('/:language/mycoach/:token/adminsettings', {
  name: 'AdminSettings',
  action(){ mount( App, { content: <AdminSettings /> })}
});

FlowRouter.route('/:language/mycoach/:token/feedback', {
  name: 'Feedback',
  action(){ mount( App, { content: <FeedbackScreen /> })}
});

FlowRouter.route('/:language/mycoach/:token/painlogbook', {
  name: 'PainLogbook',
  action(){ mount( App, { content: <PainLogbook /> })}
});

FlowRouter.route('/:language/mycoach/:token/painlogbook/newentry', {
  name: 'PainLogbook',
  action(){ mount( App, { content: <PainLogbookEntry /> })}
});

FlowRouter.route('/:language/mycoach/:token/painlogbook/:id', {
  name: 'PainLogbook',
  action(){ mount( App, { content: <PainLogbookDetail /> })}
});

FlowRouter.route('/:language/mycoach/:token/activitylogbook', {
  name: 'ActivityLogbook',
  action(){ mount( App, { content: <ActivityLogbook /> })}
});

FlowRouter.route('/:language/mycoach/:token/values', {
  name: 'ValueLogbook',
  action(){ mount( App, { content: <ValueLogbook /> })}
});

FlowRouter.route('/:language/mycoach/:token/values/newgoal', {
  name: 'ValueLogbook',
  action(){ mount( App, { content: <NewGoalScreen /> })}
});

FlowRouter.route('/:language/mycoach/:token/values/:id', {
  name: 'ValueLogbook',
  action(){ mount( App, { content: <NewGoalScreen /> })}
});

FlowRouter.route('/:language/mycoach/:token/module/:module', {
  name: 'Module',
  action(){ mount( App, { content: <ModuleParser /> })}
});

FlowRouter.route('/:language/mycoach/:token/module/:module/:submodule', {
  name: 'Submodule',
  action(){ mount( App, { content: <SubmoduleParser /> })}
});

/*
  MY PROGRESS ROUTES
*/

// Route when token is passed
FlowRouter.route('/:token', {
  name: 'MyProgress',
  action(){ mount( App, { content: <MyProgress /> })}
})

// Route when language and token are passed: these are the parameters that should always be passed, previous two routings should be obsolete
FlowRouter.route('/:language/:token', {
  name: 'MyProgress',
  action(){ mount( App, { content: <MyProgress /> })}
})

// Route when language and token are passed: these are the parameters that should always be passed, previous two routings should be obsolete
FlowRouter.route('/:language/myprogress/:token', {
  name: 'MyProgress',
  action(){ mount( App, { content: <MyProgress /> })}
})