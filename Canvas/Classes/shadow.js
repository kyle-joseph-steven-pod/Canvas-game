let makeShadow = function(x,y){
    let img = createImage(w*2+25, w*2+25);
    img.loadPixels();
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            if(i <= img.width/2 && j <= img.width/2){
                img.set(i,j,color(0,0,0,(255*(((img.width/2-i)+(img.height/2-j))/5))));
            }else if(i < img.width/2 && j > img.width/2){
                img.set(i,j,color(0,0,0,(255*(((img.width/2-i)+(j-img.height/2))/5))));
            }else if(i > img.width/2 && j < img.width/2){
                img.set(i,j,color(0,0,0,(255*(((i-img.width/2)+(img.height/2-j))/5))));
            }else {
                img.set(i,j,color(0,0,0,(255*(((i-img.width/2)+(j-img.height/2))/5))));
            }
        }
    }
    img.updatePixels();
    image(img, x-img.width/2,y-img.height/2);
};