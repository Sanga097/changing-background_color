  const btnColor = document.querySelector("button");

  btnColor.addEventListener('click',function(){
    const color = ["#eb4034","#34eb37","#8034eb","#eb34b7","#eb344f"];
    const randomColor = color[Math.floor(Math.random()*color.length)];
    document.body.style.backgroundColor = randomColor;
  });

