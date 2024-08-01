//your parameter variables go here!
let bgColor = "#FFF0F9"; // light honeydew green colour for the Background

let catColor = "#E0F5CB"; // for the Cat
let catPosX = 400; // X coord of the Cat
let catPosY = 260; // Y coord of the Cat
let catScale = 7; // scale of the Cat
let catHidden = true;

let heartColor = "#F5A6C1"; // // for the Heart
let heartPosX = 450; // X coord of the Heart
let heartPosY = 70; // Y coord of the Heart
let heartScale = 7; // scale of the Heart
let heartHidden = false;

let dogColor = "#FFFDD4"; // for the Dog
let dogPosX = 70; // X coord of the Dog
let dogPosY = 50; // Y coord of the Dog
let dogScale = 7; // scale of the Dog
let dogHidden = false;

let starColor = "#DBEBFF"; // for the Star
let starPosX = 240; // X coord of the Star
let starPosY = 130; // Y coord of the Star
let starScale = 7; // scale of the Star
let starHidden = false;

let heart2Color = "#FA9BCF"; // for the 2nd Heart
let heart2PosX = 70; // X coord of the 2nd Heart
let heart2PosY = 260; // Y coord of the 2nd Heart
let heart2Scale = 7; // scale of the 2nd Heart
let heart2Hidden = false;

function setup_wallpaper(pWallpaper) {
  createCanvas(2000, 1000);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 600;
  pWallpaper.grid_settings.cell_height = 400;
  pWallpaper.grid_settings.row_offset = 100;
}

function wallpaper_background() {
  background(bgColor);
}

function my_symbol() {
  // do not rename this function. Treat this similarly to a Draw function
  noSmooth();
  if (!catHidden) {
    drawPixelArtCat(catPosX, catPosY, catScale, catColor);
  }
  if (!heartHidden) {
    drawPixelArtHeart(heartPosX, heartPosY, heartScale, heartColor);
  }
  if (!dogHidden) {
    drawPixelArtDog(dogPosX, dogPosY, dogScale, dogColor);
  }
  if (!starHidden) {
    drawPixelArtStar(starPosX, starPosY, starScale, starColor);
  }
  if (!heart2Hidden) {
    drawPixelArtHeart2(heart2PosX, heart2PosY, heart2Scale, heart2Color);
  }
}

function drawPixelArtCat(x, y, scale, catColor) {
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
        noFill();
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtHeart(x, y, scale, heartColor) {
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
        noFill();
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtDog(x, y, scale, dogColor) {
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
        noFill();
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtStar(x, y, scale, starColor) {
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
        noFill();
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}

function drawPixelArtHeart2(x, y, scale, heart2Color) {
  let heart2Pattern = [
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 3, 0],
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
        noFill();
      }
      noStroke();
      rect(x + j * scale, y + i * scale, scale, scale);
    }
  }
}