<script>
function insertSort(arr){
    let n = arr.length
    if(n<1){
        return
    }
    // for (let i =0;i<arr.length;i++){
    //     let temp = arr[i]
    //     let j = i-1
    //     for(;j>0;j--){  
    //         if(arr[j]>temp){
    //             arr[j+1]=arr[j]
    //         }else{
    //             break
    //         }
    //     }
    //     a[j+1] = temp
    // }
    
}

// console.log(insertSort([4,5,6,1,3,2]))

</script>

# 排序

<!-- # 冒泡排序 -->

# 插入排序

```js
function insertSort(arr) {
  let n = arr.length;
  if (n < 1) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (; j > 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    a[j + 1] = temp;
  }
}
```
