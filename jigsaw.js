class Jigsaw{
	constructor(){
		this.piecesnum = null;
		this.row = null;
	}

	setJigsaw(piecesnum){
		this.piecesnum=piecesnum;
		this.row = Math.sqrt(this.piecesnum)
		if(this.row%1 !== 0){
			console.log("input pieces number error,please input the number which is inter squrt")
		}
	}

  setpicno(picno){
		this.picno=picno;
	}

	shuffleArray(array) {
	 for (let i = array.length - 1; i > 0; i--) {
		 const j = Math.floor(Math.random() * (i + 1));
		 [array[i], array[j]] = [array[j], array[i]];
	 }
 }

	createImages() {
	  const container = document.querySelector('.image_container');
		var choosepic= Math.ceil(Math.random() * this.picno);    //随机选择图片
		const imageArray = Array.from({ length: this.piecesnum }, (_, index) => index + 1);
    this.shuffleArray(imageArray); // 使用 shuffleArray 方法对数组进行随机排序

		if (container) {
      container.innerHTML = ''; // 清空容器中的内容
      for (let i = 1; i <= this.piecesnum; i++) {
        const img = document.createElement('img');
        img.id = `jigsaw${i}`;
        img.src = `assets/puzzle${choosepic}/image${imageArray[i - 1]}.jpeg`;
        img.className =`img`;
        img.alt = `image${i}`;
        img.draggable = true;
				img.ondragstart = this.drag.bind(this);
				img.ondrop = this.drop.bind(this);
				img.ondragover = this.allowDrop.bind(this);
        container.appendChild(img); // 将图片添加到容器中
      }
    } else {
      console.log("Image container not found.");
    }
	}

	createcontainer(){
		const image_puzzle = document.querySelector('.image_puzzle');
		if (image_puzzle) {
			image_puzzle.innerHTML = ''; // 清空容器中的内容
			for (let i = 1; i <= this.piecesnum; i++) {
				const img = document.createElement('img');
				img.id = `image${i}`;
				img.src = `assets/none.jpeg`;
				img.className =`img`;
				img.alt = `image${i}`;
				img.draggable = true;
				img.ondragstart = this.drag.bind(this);
				img.ondrop = this.drop.bind(this);
				img.ondragover = this.allowDrop.bind(this);
				image_puzzle.appendChild(img); // 将图片添加到容器中
			}
		} else {
			console.log("Image container not found.");
		}
	}

	addStyles() {
	  const image_puzzle = document.querySelector('.puzzle_frame');
	  image_puzzle.style.gridTemplateColumns = `repeat(${this.row}, 200px)`;
	  image_puzzle.style.gridTemplateRows = `repeat(${this.row}, 200px)`;
	  image_puzzle.style.width = `${this.row * 200}px`;
	  image_puzzle.style.height = `${this.row * 200}px`;
	}

	allowDrop(ev)
		{
		    ev.preventDefault();
		}

	drag(ev)
		{
		    ev.dataTransfer.setData("Image",ev.target.id);

		}

	drop(ev) {
		    ev.preventDefault();
		    var data = ev.dataTransfer.getData("Image");
		    if (document.getElementById(data).src.includes("none.jpeg")) {
		      return;
		    } else if (ev.target.src.includes("none.jpeg")) {
		      ev.target.src = document.getElementById(data).src;
		      ev.target.alt = document.getElementById(data).alt;
		      ev.target.width = document.getElementById(data).width;
		      ev.target.height = document.getElementById(data).height;
		      document.getElementById(data).src = "assets/none.jpeg";
					setTimeout(() => {
			      this.check();
			    }, 50);
		}}

  check() {
	     var jigsawall = document.querySelectorAll('.image_puzzle img');
	     var completetag = true;
	     jigsawall.forEach(function (jigsaw) {
	         if (jigsaw.src.includes('none.jpeg')) {
	             completetag = false;
	         }
	     });

	     if (completetag) {
	         var machtag = true;
	         jigsawall.forEach(function (jigsaw) {
	             if (!jigsaw.src.includes(jigsaw.id)) {
	                 machtag = false;
	             }
	         });

	         if (machtag) {
	             alert("Congratulations! You win!");
							 this.pausetimer.bind(Timer);
	         }
	     }
	     console.log("completetag:"+completetag);
	     console.log("machtag:"+machtag);
	 }
}
