import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(!Documents.findOne()){ //continua si no encuentra uno
  	Documents.insert({title:"my nuevo documentos"});
  }
});
