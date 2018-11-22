Run(33);

function Run(n:number) {
  while (n!==1){
    if (n%2===0){
      n=n/2;
    }
    else{
      n=n*3+1;
    }

    console.log(n);
  }
}
