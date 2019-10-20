/* global alpha blue brightness color green hue lerpColor lightness red saturation p5.Color background clear colorMode fill noFill noStroke stroke arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus p5.Geometry loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams preload setup draw remove disableFriendlyErrors noLoop loop push pop redraw p5.Element select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement p5.MediaElement p5.Graphics createCanvas resizeCanvas noCanvas createGraphics blendMode setAttributes applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict p5.TypedDict p5.NumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseIsPressed mouseMoved mouseDragged mousePressed mouseReleased mouseClicked doubleClicked mouseWheel requestPointerLock exitPointerLock touches touchStarted touchMoved touchEnded createImage saveCanvas saveFrames p5.Image loadImage image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo p5.XML createWriter p5.PrintWriter save saveJSON saveStrings saveTable p5.Table p5.TableRow day hour minute millis month second year createVector p5.Vector abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont p5.Font orbitControl debugMode noDebugMode ambientLight directionalLight pointLight lights lightFalloff loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess p5.Shader camera perspective ortho createCamera p5.Camera setCamera */

function setup () {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  background(200, 200, 100)
}

function draw () {
  // put drawing code here

  if (mouseIsPressed) {
    fill(110, 240, 100, 100)
  } else {
    fill(120, 250, 150, 150)
  }

  ellipse(mouseX, mouseY, 80, 80)
  square(mouseX, mouseY, 100)
  stroke(100, 100, 100)
  triangle(mouseX, mouseY, 20, 30, 500, 200)
  triangle(800, 700, 100, 200, mouseX, mouseY)
  ellipse(100, 300, mouseX, 400);
  arc(50, 55, 50, 50, 0, HALF_PI);
  arc(200, 200, 200, 200, HALF_PI, PI);
  arc(200, 200, 300, 300, PI, PI + QUARTER_PI);
  arc(200, 200, 400, 400, PI + QUARTER_PI, TWO_PI);
  line(mouseX, mouseY, 900, 300);
  line(50, 50, mouseX, mouseY);

}
