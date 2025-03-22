const gulp = require('gulp');
    const concat = require('gulp-concat');
    gulp.task('styles', function() {
        return gulp.src('src/styles/*.css') // src/styles内のすべてのCSSファイルを選択
            .pipe(concat('styles.css')) // styles.cssに結合
            .pipe(gulp.dest('dist/styles')); // 出力先を指定
});