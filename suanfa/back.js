/* 
  * 最长回文字符串
*/

function back(target){
  let length = target.length;
  let result = "";
  if(length===1||length===0) return target;
  for(let i=0;i<length;i++){
    for(let j=i+1;j<length;j++){
      let str = target.slice(i,j);
      let reversized = str.split("").reverse().join("");
      if(reversized===str){
        result = str.length> result.length? str:result;
      }
    }
  }
  return result;
}

const result = back("asdfgijkjlofqwerirewqs");

/* 
 *
*/