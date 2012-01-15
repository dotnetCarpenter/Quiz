Ti.include('quiz.js');

var newQuiz = new Quiz();
newQuiz.addQuestions([
	{
		text: 'Hvad lyder det som om man bestiller når man køber en Mac Mini?'
	  , answer: 'En burger'
	  , possibilities: ['En burger', 'En is', 'En sodavand']
	}
]);

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Start quiz',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var possibleView = Ti.UI.createView({
	width: '100%',
	height: 'auto',
	top:0,
	layout: 'vertical'
});

label1.addEventListener('click', function(e){
	/*Ti.API.debug(
		newQuiz.eachQuestion(
			function(el, i, a) {
				Ti.API.debug(el);
			}
		)
	);*/
	label1.hide();
	win1.title = ['Første','Anden','Tredje','Fjerde'][0] + ' spørgsmål';
	newQuiz.eachPossibility(0, function(el, i, a){
		Ti.API.debug(el);
		Ti.API.debug('pos:'+i);
		var b = button(el, i*2);
		b.addEventListener('click', function(a,b){
			console.log(a, a.source, 'b', b);
			win1.title = newQuiz.getQuestion(0).answer;
		});
		possibleView.add(b);
		
		
	});
	function button(txt, pos){
		return Titanium.UI.createButton({
			color:'#999',
			height:'25dt',
			title:txt,
			top:pos,
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'100%'
		});
	}
	function label(txt, pos){
		return Titanium.UI.createLabel({
			color:'#999',
			height:'25dt',
			text:txt,
			top:pos,
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
	}
});
win1.add(label1);
win1.add(possibleView);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();


