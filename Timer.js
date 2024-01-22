class Timer{
	constructor() {
		this.timecount = 0;
		this.s = 0;    // Transfer s after 1 sescond.
  };

	createtimer(){
		const timer = document.getElementById('timer');
		this.#addseconds();

	}

	pausetimer() {
    clearInterval(this.timecount);
  }

	#addseconds(){
		  this.timecount = setInterval(()=>{
		  if(this.s == 120){
				this.pausetimer();
				setTimeout(function () {
				alert("Times up. Game over!");
				},0)
			} else{
			this.s++;
			timer.innerText = this.s;
			}
		},1000);
	}
}
