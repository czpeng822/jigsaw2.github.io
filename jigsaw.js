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
        container.appendChild(img); // 将图片添加到容器中
      }
    } else {
      console.log("Image container not found.");
    }
	}

	addStyles() {
	    const style = document.createElement('style');
	    style.textContent = `
	      .image-container .image_puzzle  {
	        display: grid;
	        grid-template-columns: repeat(${this.row}, 200px ); /* 重复 row 次*/
					grid-row-gap: 0;
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
				image_puzzle.appendChild(img); // 将图片添加到容器中
			}
		} else {
			console.log("Image container not found.");
		}
	}
}
