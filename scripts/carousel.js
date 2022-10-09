// const images = document.querySelectorAll("#corsal1>div>img");
const smallImageContainer1 = document.querySelectorAll(".smImage1");
const smallImageContainer2 = document.querySelectorAll(".smImage2");
const bigContainer = document.querySelectorAll(".biggerImage") 
const images = ["./resources/Rectangle 4.png","./resources/Rectangle 2.png","./resources/Rectangle 5.png"]
var itemHandler = 0;
const intervalId = setInterval(() => {
    changepicture();
  }, 5000);


var changepicture =()=>{
    
    // console.log(smallImageContainer1[0].children[0].src)
    // console.log(images[0].src)
    if(itemHandler==images.length-1){
        smallImageContainer2[0].children[0].src=images[itemHandler-1]//1
        bigContainer[0].children[0].src=images[itemHandler]//2
        smallImageContainer1[0].children[0].src=images[0]//0
    
        itemHandler=0;
    }
    else if(itemHandler==0){
        smallImageContainer2[0].children[0].src=images[images.length-1]//2
        bigContainer[0].children[0].src=images[itemHandler]//0
        smallImageContainer1[0].children[0].src=images[itemHandler+1]//1
        itemHandler++;
        console.log(images[images.length-1].src)
    }
    else{
        smallImageContainer2[0].children[0].src=images[itemHandler-1]//0
        bigContainer[0].children[0].src=images[itemHandler]//1
        smallImageContainer1[0].children[0].src=images[itemHandler+1]//2
        itemHandler++;
    }

}