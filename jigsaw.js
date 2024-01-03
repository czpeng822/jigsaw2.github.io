class Jigsaw{
	construtor(numpieces){
		this.numpieces = numpieces;
	}
	var row = Math.sqrt(numpieces)
	if(row%1==0){
		var i;
		for(i=0,i<numpieces,i++){
			var newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'row'+i);
            newDiv.setAttribute('id', 'row'+i);
            document.body.appendChild(newDiv);
            newDiv.body

		}
	}
	else{
		console ("input numpieces error,please input the number which is inter squrt")
	}
}