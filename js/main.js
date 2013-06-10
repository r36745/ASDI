//Steven Roseman
//ASDI
//Week 1

$('#home').on('pageinit',function(){

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
	item.fname = ["First Name:", $("#fname").val()];
	item.lname = ['First Name:', $('#lname').val()];
	item.email = ['Email:', $('#email').val()];
	item.weightOpt = ['Personal Goal:', weightOption];
	item.newsLetter = ['News Letter:', $('#newsLetter').val()];
	item.comments = ['Daily Notes:', $('#notes').val()];

	localStorage.setItem(id, JSON.stringify(item));
    alert("contact saved");
};		

var weightOption;

