var gulp = require('gulp'),
    del = require('del'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css')
    ;

var project = {
    out: "./gulpout"
};

gulp.task("compass+autoprefixer+minify", function() {
    gulp
        .src('./styles/*.scss')

        .pipe(compass({
            project: __dirname,
            sass: './styles',
            import_path: 'bower_components',
            font: 'bower_components/bootstrap-sass-official/assets/fonts/',
            relative: false
        }))

        .pipe(autoprefixer({
            browsers: ['last 1 versions'],
            cascade: false
        }))

        .pipe(minify())

        .pipe(gulp.dest(project.out))
});

gulp.task('clean', function (cb) {
  del([project.out], cb);
});

gulp.task('default',[
    'clean',
    'compass+autoprefixer+minify'
]);