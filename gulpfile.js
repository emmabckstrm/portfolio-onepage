var gulp = require('gulp')
var parser = require('gulp-tumblr-theme-parser');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var fs = require('fs');
var browserSync = require('browser-sync').create();

// counting on the presence of 'build' and 'start'
require('gulp-npm-run')(gulp, {
  exclude: ['test'],
  include: ['start']
})

gulp.task('clean-scripts', function () {
  return gulp.src('js/all.js', {read: false})
    .pipe(clean());
});

gulp.task('scripts', ['clean-scripts'], function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

// Serving
gulp.task('serve', ['scripts'], function() {
  return gulp.src('./theme.html')
    .pipe(rename('theme-compiled.html'))
    // Adds the css file into the html file
    .pipe(replace(/<link href="style.css"[^>]*>/, function(s) {
        var style = fs.readFileSync('./css/style.css', 'utf8');
        return '<style>\n' + style + '\n</style>';
    }))
    // Adds all js <script src="scripts.js"></script>
    .pipe(replace(/<script src="scripts.js"><\/script>/, function(s) {
        var js = fs.readFileSync('./js/all.js', 'utf8');
        return '<script>\n' + js + '\n</script>';
    }))
    // Parses the tumblr theme
    .pipe(parser({ data: './datatumblr.json' }))
    .on('error', errorHandler)
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

var errorHandler = function (err) {
  console.log('Error: ' + err);
  this.emit('end')
}

gulp.task('default', ['serve'], function (){
  // Serve files 
    browserSync.init({
        server: {
            baseDir: "./build",
            index: "theme-compiled.html"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("css/*.css", ['serve']);
    gulp.watch("js/*.js", ['serve']);
    gulp.watch("theme.html", ['serve']);

});
