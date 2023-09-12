function largest(ar){
    let largest=0;
    for(let i=1;i<6;i++){
      if(a[i]>a[largest]){
        largest=i
      }
    }return a[largest];
  }

  function secondLargest(a){
    let l=largest(a);
    let res=-1
    for(let i=0;i<a.length;i++){
      if(a[i] != a[l]){
        if(res== -1){
          res=i;
        }
        else if(a[i]>a[res]){
          res=a[i];
        }
      }
    }
    return res;
  }
  
  
  let arr=[2,3,5,6,7,8] // 1st Case
  //let arr=[5,5,5,5] 2nd Case

  console.log("Second Largest is: "+secondLargest(arr));
