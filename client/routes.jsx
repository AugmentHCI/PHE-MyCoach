import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';
import MyProgress from '../imports/ui/Pages/MyProgress.jsx';
import MyCoach from '../imports/ui/Pages/MyCoach.jsx';
import PainEducation from '../imports/ui/Pages/Modules/PainEducation/PainEducation.jsx';
import ModuleParser from '../imports/ui/Pages/Modules/ModuleParser.jsx';

//route when no parameters are passed -> MyProgress will render with dummy data
FlowRouter.route('/', {
  name: 'MyProgress',
  action(){
    mount( App, {
      content: <MyProgress />
    })
  }
})

/*
  MY COACH ROUTES
*/
FlowRouter.route('/mycoach/', {
  name: 'MyCoach',
  action(){ 
    mount( App, {
      content: <MyCoach /> 
    })
  }
})

FlowRouter.route('/mycoach/paineducation', {
  name: 'Paineducation',
  action(){ 
    mount( App, {
      content: <PainEducation /> 
    })
  }
})

FlowRouter.route('/mycoach/:module/part-:part', {
  name: 'Paineducation',
  action(){ 
    mount( App, {
      content: <ModuleParser /> 
    })
  }
})


FlowRouter.route('/mycoach/:language/:token', {
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