var gulp = require('gulp');
var shell = require('gulp-shell');
var replace = require('gulp-replace');

var local = {
    db: '',
    path: '',
    user: '',
    pass: ''
};

var remote = {
    db: '',
    path: '',
    server: '',
    user: '',
    pass: ''
};

gulp.task('dump', shell.task([
    'touch ' + local.db + '.sql',
    'mysqldump -u ' + local.user + ' -p' + local.pass + ' ' + local.db + ' > ' + local.db + '.sql'
]));

gulp.task('replace', function () {
    return gulp.src('./' + local.db + '.sql')
        .pipe(replace(local.path, remote.path))
        .pipe(gulp.dest('./'));
});

gulp.task('deploy', shell.task([
    'mysql -u ' + remote.user + ' -p' + remote.pass + ' -h ' + remote.server + ' ' + remote.db + ' < ' + local.db + '.sql'
]));
