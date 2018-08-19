let tracker = () => {

<<<<<<< HEAD
    // let inc = document.getElementsByClassName('inc');
    // inc.addEventListener('click', ()=>{
    //   console.log('clicked');
    // });
    // console.log(inc);

    let min5 = document.getElementById('5-min');
    let counter = document.getElementById('counter');
    let i = 0;
    min5.addEventListener('click', ()=>{
      i += 5;
      counter.innerHTML = i;
    });
    console.log(min5);

};
=======
	let min5 = document.getElementById('5-min')
	let counter = document.getElementById('counter');
	let i = 0;
	min5.addEventListener('click', ()=>{
		i += 5;
		counter.innerHTML = i;
	});
	console.log(min5);
};

>>>>>>> 56a3d4ecb05d4430519cf27e21f22086bfede3d2
document.addEventListener('DOMContentLoaded', tracker, false);
