import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App              from '../imports/ui/App.jsx';
import MyProgress       from '../imports/ui/pages/MyProgress.jsx';
import MyCoach          from '../imports/ui/pages/MyCoach.jsx';
import ModuleParser     from '../imports/ui/pages/modules/ModuleParser.jsx';
import SubmoduleParser  from '../imports/ui/pages/modules/SubmoduleParser.jsx';
import AdminScreen      from '../imports/ui/AdminScreen.jsx';
import AdminSettings    from '../imports/ui/pages/AdminSettings.jsx';
/* Logbooks */
import PainLogbook      from '../imports/ui/pages/PainLogbook/PainLogbook.jsx';
import PainLogbookEntry from '../imports/ui/pages/PainLogbook/PainLogbookEntry.jsx';
import PainLogbookDetail from '../imports/ui/pages/PainLogbook/PainLogbookDetail.jsx';
import ActivityLogbook  from '../imports/ui/pages/ActivityLogbook/ActivityLogbook.jsx';
import ValueLogbook from '../imports/ui/pages/ValueLogbook/ValueLogbook.jsx';
import NewGoalScreen from '../imports/ui/pages/ValueLogbook/NewGoalScreen';
import FeedbackScreen from '../imports/ui/pages/FeedbackScreen.jsx';
/* User study */
import PainLogbookHybrid from '../imports/ui/pages/userstudy/PainLogbookHybrid.jsx';
import QuestionnairePage from '../imports/ui/pages/userstudy/QuestionnairePage';
import PainLogbookTextual from '../imports/ui/pages/userstudy/PainLogbookTextual.jsx';
import PainLogbookVisual from '../imports/ui/pages/userstudy/PainLogbookVisual.jsx';
import Introduction from '../imports/ui/pages/userstudy/Introduction.jsx';
import Information from '../imports/ui/pages/userstudy/Information.jsx';
import Explanation from '../imports/ui/pages/userstudy/Explanation.jsx';
import StudyFlow from '../imports/ui/pages/userstudy/StudyFlow.jsx';
import Conclusion from '../imports/ui/pages/userstudy/Conclusion.jsx';
import ThankYou from '../imports/ui/pages/userstudy/ThankYou.jsx';
import ProlificIntroduction from '../imports/ui/pages/userstudy/ProlificIntroduction.jsx';
import ProlificInformation from '../imports/ui/pages/userstudy/ProlificInformation.jsx';
import GoalEntryScreen from '../imports/ui/pages/ValueLogbook/ViewGoalEntry.jsx';


FlowRouter.route('/', {
  name: 'Admin',
  action(){ mount( App, { content: <AdminScreen/> })}
});

/*
  PROLIFIC
*/

FlowRouter.route('/mycoach/prolific/userstudy/information', {
  name: 'Userstudy',
  action(){ mount( App, { content: <ProlificInformation /> })}
});

FlowRouter.route('/mycoach/prolific/userstudy/introduction', {
  name: 'Userstudy',
  action(){ mount( App, { content: <ProlificIntroduction /> })}
});

/*
  USER STUDY ROUTES
*/

FlowRouter.route('/mycoach/userstudy/introduction', {
  name: 'Userstudy',
  action(){ mount( App, { content: <Introduction /> })}
});


FlowRouter.route('/mycoach/userstudy/information', {
  name: 'Userstudy',
  action(){ mount( App, { content: <Information /> })}
});

FlowRouter.route('/mycoach/userstudy/explanation', {
  name: 'Userstudy',
  action(){ mount( App, { content: <Explanation /> })}
});

FlowRouter.route('/mycoach/userstudy/studyflow', {
  name: 'Userstudy',
  action(){ mount( App, { content: <StudyFlow /> })}
});

FlowRouter.route('/mycoach/userstudy/textual', {
  name: 'Userstudy',
  action(){ mount( App, { content: <PainLogbookTextual /> })}
});

FlowRouter.route('/mycoach/userstudy/visual', {
  name: 'Userstudy',
  action(){ mount( App, { content: <PainLogbookVisual /> })}
});

FlowRouter.route('/mycoach/userstudy/hybrid', {
  name: 'Userstudy',
  action(){ mount( App, { content: <PainLogbookHybrid /> })}
});

FlowRouter.route('/mycoach/userstudy/questionnaire/:type', {
  name: 'Userstudy',
  action(){ mount( App, { content: <QuestionnairePage /> })}
});

FlowRouter.route('/mycoach/userstudy/conclusion', {
  name: 'Userstudy',
  action(){ mount( App, { content: <Conclusion /> })}
});

FlowRouter.route('/mycoach/userstudy/thankyou', {
  name: 'Userstudy',
  action(){ mount( App, { content: <ThankYou /> })}
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
  action(){ mount( App, { content: <GoalEntryScreen /> })}
});

FlowRouter.route('/:language/mycoach/:token/values/edit/:id', {
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