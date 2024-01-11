class Jigsaw{
	constructor(){
		this.piecesnum = 1;
		this.row = 1
	}

	setJigsaw(piecesnum){
		this.piecesnum=piecesnum;
		this.row = Math.sqrt(this.piecesnum)
		if(this.row%1 !== 0){
			console.log("input pieces number error,please input the number which is inter squrt")
		}
	}

	createImages() {
	  const container = document.querySelector('.image_container');
		if (container) {
      container.innerHTML = ''; // 清空容器中的内容
      for (let i = 1; i <= this.piecesnum; i++) {
        const img = document.createElement('img');
        img.id = `jigsaw${i}`;
        img.src = `assets/puzzle01/image${i}.jpeg`;
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
		    const style = document.createElement('style');
		    style.textContent = `
		      .image_container .image_puzzle {
		        display: grid;
		        grid-template-columns: repeat(${this.row}, 200px ); /* 重复 row 次*/
						width:  800px;
						height: 800px;
		      }
		      .img {
		        border: 1px solid black;
		        width:  200px;
		        height: 200px;
		      }
		    `;
		    document.head.appendChild(style); // 将样式添加到文档的头部
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
	                 console.log(jigsaw.src+"---"+jigsaw.id);
	                 machtag = false;
	             }
	         });

	         if (machtag) {
	             alert("Congratulations! You win!");
	         }
	     }
	     console.log("completetag:"+completetag);
	     console.log("machtag:"+machtag);
	 }

}
