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



//var clearLink = $('#clearLink');
//$(clearLink).on('click', clearLocal);









var weightOption;




