var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

// Development Tasks 
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css')) // Outputs it in the css folder
})

// Watchers
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
})

// Gulp task to minify CSS files
gulp.task('minifycss', function() {
    return gulp.src([
            'app/css/style.css',
        ])
        // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(concat('bundle.min.css'))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer())
        // Minify the file
        .pipe(cleanCss())
        // Output
        .pipe(gulp.dest('app/css'))
});

// Gulp task to minify JavaScript files
gulp.task('minifyjs', function() {
    return gulp.src([
            'app/js/global.js'

        ])
        // Minify the file
        .pipe(concat('bundle.min.js'))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        // Output
        .pipe(gulp.dest('app/js'))
});