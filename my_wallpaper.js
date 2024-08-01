//your parameter variables go here!
let rect_width  = 10;
let rect_height = 10;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 400;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  
  noSmooth(); 
  drawPixelArtCat(200, 250, 4); 
  drawPixelArtHeart(50, 30, 4); 
  drawPixelArtDog(300, 80, 3);  
  drawPixelArtStar(150, 400, 5); 
  drawPixelArtHeart2(800, 200, 3);
}


function drawPixelArtCat(x, y, scale) {
  
  let catPattern = [
    
    [0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
    [0, 0, 3, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 3, 0, 0],
    [0, 0, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 3, 1, 1, 1, 3, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0],
    [0, 3, 1, 1, 1, 1, 2, 3, 1, 1, 1, 2, 3, 1, 1, 1, 1, 3, 0],
    [0, 3, 1, 1, 1, 1, 3, 3, 1, 3, 1, 3, 3, 1, 1, 1, 1, 3, 0],
    [3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
    [0, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 0],
    [3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3],
    [0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
  ];

  let catColor = color(255, 211, 122); // for the cat
  let highlights = color(255, 255, 255); // for highlights
   let outline = color(0, 0, 0); //  for the outline 
 
  
  for (let i = 0; i < catPattern.length; i++) {
    for (let j = 0; j < catPattern[i].length; j++) {
      if (catPattern[i][j] === 1) {
        fill(catColor);
        
      } else if (catPattern[i][j] === 2) {
        fill(highlights);
  
      } else if (catPattern[i][j] === 3) {
        fill(outline);

    
      } else {
        continue;  
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtHeart(x, y, scale) {
  
  let heartPattern = [
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 3, 0],
    [3, 1, 1, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 1, 1, 3],
    [3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 1, 2, 1, 3],
    [3, 1, 2, 1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 1, 2, 1, 3],
    [0, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [0, 0, 3, 1, 2, 1, 3, 1, 1, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 0, 3, 1, 2, 1, 3, 3, 1, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let heartColor = color(255, 189, 227); // for the heart
  let highlights = color(255, 255, 255); // for highlights
  let outline = color(0, 0, 0); // for the outline 

  for (let i = 0; i < heartPattern.length; i++) {
    for (let j = 0; j < heartPattern[i].length; j++) {
      if (heartPattern[i][j] === 1) {
        fill(heartColor);
      } else if (heartPattern[i][j] === 2) {
        fill(highlights);
      } else if (heartPattern[i][j] === 3) {
        fill(outline);
      } else {
        continue;
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtDog(x, y, scale) {
  
  let dogPattern = [
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [3, 1, 1, 1, 3, 1, 2, 3, 1, 1, 1, 2, 3, 1, 3, 1, 1, 1, 3],
    [3, 1, 1, 3, 1, 1, 2, 3, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 3],
    [0, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 3, 3, 3, 0],
    [0, 0, 0, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 3, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
  
    
    
 ];
  let dogColor = color(171, 207, 255); // for the Dog
  let highlights = color(255, 255, 255); // for highlights
  let outline = color(0, 0, 0); // for the outline 

  for (let i = 0; i < dogPattern.length; i++) {
    for (let j = 0; j < dogPattern[i].length; j++) {
      if (dogPattern[i][j] === 1) {
        fill(dogColor);
      } else if (dogPattern[i][j] === 2) {
        fill(highlights);
      } else if (dogPattern[i][j] === 3) {
        fill(outline);
      } else {
        continue;
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtStar(x, y, scale) {
 
  let starPattern = [
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 2, 1, 3, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 3, 1, 1, 1, 2, 1, 3, 3, 3, 3, 0],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 3, 1, 1, 1, 3, 0, 3, 1, 1, 1, 3, 0, 0],
    [0, 0, 3, 1, 3, 3, 0, 0, 0, 3, 3, 1, 3, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  ];
  let starColor = color(184, 252, 226); // for the Star
  let highlights = color(255, 255, 255); // for highlights
  let outline = color(0, 0, 0); // for the outline 

  for (let i = 0; i < starPattern.length; i++) {
    for (let j = 0; j < starPattern[i].length; j++) {
      if (starPattern[i][j] === 1) {
        fill(starColor);
      } else if (starPattern[i][j] === 2) {
        fill(highlights);
      } else if (starPattern[i][j] === 3) {
        fill(outline);
      } else {
        continue;
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtHeart2(x, y, scale) {
  
  let heart2Pattern = [
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 3, 0, 0],
    [0 ,3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 3, 0],
    [3, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 2, 1, 1, 3],
    [3, 1, 2, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 2, 1, 3],
    [3, 1, 2, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 2, 1, 3],
    [0, 3, 1, 2, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 0],
    [0, 0, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 0, 3, 1, 2, 3, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 1, 1, 3, 3, 1, 1, 1, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let heartwColor = color(244, 255, 186); // for the Heart2
  let highlights = color(255, 255, 255); // for highlights
  let outline = color(0, 0, 0); // for the outline 

  for (let i = 0; i < heart2Pattern.length; i++) {
    for (let j = 0; j < heart2Pattern[i].length; j++) {
      if (heart2Pattern[i][j] === 1) {
        fill(heart2Color);
      } else if (heart2Pattern[i][j] === 2) {
        fill(highlights);
      } else if (heart2Pattern[i][j] === 3) {
        fill(outline);
      } else {
        continue;
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}
