var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cp = require('child_process'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/* Build the Jekyll Site */
gulp.task('jekyll-build', ['jsMin'], function (done) {
    browserSync.notify(messages.jekyllBuild);
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
    return cp.spawn(jekyll, ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/* Rebuild Jekyll & do page reload */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    return browserSync.reload();
});

/* Wait for jekyll-build, then launch the Server */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/* Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds) */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'expanded',
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 2 versions', 'ie 8', 'ie 9'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css/'));
});

/* Js */
gulp.task('jsConcat', ['sass'], function() {
    return gulp.src([
            'assets/js/vendor/*',
            'assets/js/common/*'
        ])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('assets/app'));
});

gulp.task('jsMin', ['jsConcat'], function() {
    return gulp.src(['assets/app/all.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('assets/app'));
});

/* Watch scss files for changes & recompile, watch html/md files, run jekyll & reload BrowserSync */
gulp.task('watch', ['jsMin', 'browser-sync'], function () {
    gulp.watch([
        '_scss/*.scss',
        '_includes/**/*.scss',
        ], ['sass']);
    gulp.watch([
            '_layouts/*.html',
            '_includes/**/*.html',
            '_posts/**/*',
            '_data/*',
            'assets/img/**/*',
            'assets/fonts/**/*',
            'assets/js/**/*',
            '_config.yml',
            '_config_dev.yml'
        ], ['jekyll-rebuild']);
});

/* Default task, running just `gulp` will compile the sass, compile the jekyll site, launch BrowserSync & watch files. */
// gulp.task('default', ['browser-sync', 'watch']);
gulp.task('default', ['sass', 'jekyll-build']);
