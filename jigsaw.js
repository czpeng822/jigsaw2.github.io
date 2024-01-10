class Jigsaw{
	constructor(){
		this.piecesnum = 1;
		this.row = 1
	}

	setJigsaw(piecesnum){
		this.piecesnum=piecesnum;
		this.row = Math.sqrt(this.piecesnum)
		if(this.row%1 != 0){
			console.log("input pieces number error,please input the number which is inter squrt")
		}
	}
}
