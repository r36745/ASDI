//Steven Roseman
//ASDI
//Week 1

$('#home').on('pageinit',function(){
	console.log ( $('#nav li') );
});
$('#aboutUs').on('pageinit',function(){

});
$('#addUser').on('pageinit',function(){
	var woForm = $('#lifeForm')
	woForm.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = woForm.serializeArray();
			storeData(data);
			getData(this.key);
		}
	});


});


function storeData(data)  {

	var id              = Math.floor(Math.random() * 1000000001);

	var item = 	{};
	item.fname = ['First Name:', $('#fname').val()];
	item.lname = ['First Name:', $('#lname').val()];
	item.email = ['Email:', $('#email').val()];
	item.weightOpt = ['Personal Goal:', $('#weightOpt1').is(':selected')];
	item.newsLetter = ['News Letter:', $('#newsletter').is(':checked')];
	item.comments = ['Daily Notes:', $('#notes').val()];

	localStorage.setItem(id, JSON.stringify(item));
    alert("contact saved");

};	

function getData() {
	if(localStorage.length===0) {
		alert("There is no data in localStorage")
	};
	//Write Data from localStorage to browser
	var makeDiv = $('<div></div>');
	makeDiv.prop('id', 'items');
	var makeUl = $('<ul></ul>');
	console.log('here');
	makeDiv.append(makeUl);
	document.body.append(makeDiv);
	for(i=0, j=localStorage.length; i<j; i++) {
		var makeLi = $('<li></li>');
		makeUl.append(makeLi);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		//Convert the string from localStorage to an object by using JSON.parse
		var obj = JSON.parse(value);
		var subUl = $('<ul></ul>');
		makeLi.append(subUl);
		for(n in obj) {
			var subLi = $('<li></li>');
			subUl.append(subLi);
			var innerText = obj[n][0]+' '+obj[n][1];
			subLi.html() = innerText;
		};

	};
};


var displayLink = $('#displayLink');
$(displayLink).on('click',getData);

//var clearLink = $('#clearLink');
//$(clearLink).on('click', clearLocal);









var weightOption;




