/** 
 * Make sure Graphicsmagick is installed on your system
 * osx: brew install graphicsmagick
 * ubuntu: apt-get install graphicsmagick
 * 
 * Install these gulp plugins
 * gulp, gulp-image-resize and gulp-imagemin
 * 
 * Create a task for each image size and call them all with master task
 * 
 **/

 // require these gulp plugins by install using: npm install --save-dev [gulp-plugin-name]
const gulp = require('gulp');
const rename = require('gulp-rename');
const imageResize = require('gulp-image-resize');
const imageMin = require('gulp-imagemin');

gulp.task('resize-sm', function () {
  return gulp.src('../img/*.{jpg,png}')
  .pipe(imageResize({
      width: 375,     
      height: 280,
      crop: true,      
      upscale: false, // never increase image dimensions
      quality: 70, //Optional. The output quality to use for lossy JPEG, WebP and TIFF output formats. The default quality is 80. This property is ignored for PNG images
      progressive: true, //Optional. Use progressive (interlace) scan for JPEG and PNG output. This typically reduces compression performance by 30% but results in an image that can be rendered sooner when decompressed.
      withMetadata: false //Optional. Include all metadata (ICC, EXIF, XMP) from the input image in the output image. The default behaviour is to strip all metadata.
  }))
  .pipe(imageMin())
  .pipe(rename({ suffix: '_small', extname: '.jpg' })) //extname does not have to be specified. 
  .pipe(gulp.dest('../dist/img'));
});        
    
gulp.task('resize-md', function () {
  return gulp.src('../img/*.{jpg,png}')
  .pipe(imageResize({
    width: 480,     
    height: 360,
    crop: true,
    upscale: false,
    quality: 70,
    progressive: true,
    withMetadata: false
  }))
  .pipe(imageMin())
  .pipe(rename({ suffix: '_medium', extname: '.jpg' }))
  .pipe(gulp.dest('../dist/img'));
});

gulp.task('resize-lg', function () {
  return gulp.src('../img/*.{jpg,png}')
  .pipe(imageResize({
      width: 800,     
      height: 600,
      crop: true,
      upscale: false,
      quality: 70,
      progressive: true,
      withMetadata: false
  }))
  .pipe(imageMin())
  .pipe(rename({ suffix: '_large', extname: '.jpg' }))
  .pipe(gulp.dest('../dist/img'));
});

gulp.task('resize', ['resize-sm', 'resize-md', 'resize-lg']);