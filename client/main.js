import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.editor.helpers({
	docid:function(){
		//console.log("doc id finlter");
		console.log(Documents.findOne());
		var doc=Documents.findOne();
		if(doc){
			return Documents.findOne()._id;
		}else{
			return undefined;
		}
		
	},//recibimos al editor, ahora lo podemos configurar
	config:function(){
		return function(editor){//cm_editor es una instancia del editor, e info guarda toda la info sobre los cambios(from,to,text,removed,origin)
			editor.on("change",function(cm_editor, info){
				console.log(cm_editor.getValue());
				$("#viewer_iframe").contents().find("html").html(cm_editor.getValue());
			});
			//console.log(editor);
		}
	},
});



/*
var myVar=10;

//ahora crearemos una session reactive

//actualizara el current_data cada 1 seg

Meteor.setInterval(function(){

	Session.set("current_date",new Date());

},1000);


Template.date_display.helpers({
	current_date: function(){
		return Session.get("current_date");
	},
	myVar:function(){
		return myVar;
	}
});

*/


