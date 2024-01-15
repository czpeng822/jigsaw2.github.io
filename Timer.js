class Timer{
	constructor() {
		this.timecount = 0
  };

	createtimer(){
		const timer = document.getElementById('timer');
		var s=0;
		this.timecount=setInterval(()=>{
		  timer.innerText=s;
		  if(s==120){
				this.pausetimer();
				setTimeout(function () {
				alert("Times up. Game over!");
				},0)
			} else{
			s++;
			}
		},1000);
	}

	pausetimer() {
    clearInterval(this.timecount);
  }
}
