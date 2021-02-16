import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';
import MyProgress from '../imports/ui/Pages/MyProgress.jsx';
import MyCoach from '../imports/ui/Pages/MyCoach.jsx';
import ModuleParser from '../imports/ui/Pages/Modules/ModuleParser.jsx';
import SubmoduleParser from '../imports/ui/Pages/Modules/SubmoduleParser.jsx';
import PainLogbook from '../imports/ui/Pages/Modules/PainLogbook.jsx';
import AdminScreen from '../imports/ui/AdminScreen.jsx';


FlowRouter.route('/', {
  name: 'Admin',
  action(){
    mount( App, {
      content: <AdminScreen/>
    })
  }
})

/*
  MY COACH ROUTES
*/
FlowRouter.route('/:language/mycoach/', {
  name: 'MyCoach',
  action(){ 
    mount( App, {
      content: <MyCoach /> 
    })
  }
})

FlowRouter.route('/:language/mycoach/painlogbook', {
  name: 'PainLogbook',
  action(){ 
    mount( App, {
      content: <PainLogbook /> 
    })
  }
})

FlowRouter.route('/:language/mycoach/module/:module', {
  name: 'Paineducation',
  action(){ 
    mount( App, {
      content: <ModuleParser /> 
    })
  }
})

FlowRouter.route('/:language/mycoach/module/:module/:submodule', {
  name: 'Paineducation',
  action(){ 
    mount( App, {
      content: <SubmoduleParser /> 
    })
  }
})

FlowRouter.route('/:language/mycoach/:token', {
  name: 'MyCoach',
  action(){ 
    mount( App, {
      content: <MyCoach /> 
    })
  }
})

/*
  MY PROGRESS ROUTES
*/

// Route when token is passed
FlowRouter.route('/:token', {
  name: 'MyProgress',
  action(){ 
    mount( App, {
      content: <MyProgress /> 
    })
  }
})

// Route when language and token are passed: these are the parameters that should always be passed, previous two routings should be obsolete
FlowRouter.route('/:language/:token', {
  name: 'MyProgress',
  action(){ 
    mount( App, {
      content: <MyProgress /> 
    })
  }
})

// Route when language and token are passed: these are the parameters that should always be passed, previous two routings should be obsolete
FlowRouter.route('/:language/myprogress/:token', {
  name: 'MyProgress',
  action(){ 
    mount( App, {
      content: <MyProgress /> 
    })
  }
})