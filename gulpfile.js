const { src, dest, series, watch } = require("gulp");

//styles
const scss = require("gulp-sass")(require("sass"));
const autoPrefixer = require("gulp-autoprefixer");
const cssMinify = require("gulp-clean-css");

function styles() {
  return src("./frontend/src/styles/**/*.scss")
    .pipe(scss())
    .pipe(autoPrefixer("last 2 versions"))
    .pipe(cssMinify())
    .pipe(dest("./frontend/dist/styles/"));
}

//watchTask
function watchTask() {
  watch("./frontend/src/styles/**/*.scss", series(styles));
}

exports.default = series(styles, watchTask);
