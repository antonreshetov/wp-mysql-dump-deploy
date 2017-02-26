var gulp = require('gulp');
var shell = require('gulp-shell');
var replace = require('gulp-replace');

var localDB = '';
var remoteDB = '';
var localPath = '';
var remotePath = '';
var server = '';
var user = '';
var pass = '';

gulp.task('dump', shell.task([
    'touch ' + localDB + '.sql',
    'mysqldump -u root -p ' + localDB + ' > ' + localDB + '.sql'
]));

gulp.task('replace', function () {
    return gulp.src('./' + localDB + '.sql')
        .pipe(replace(localPath, remotePath))
        .pipe(gulp.dest('./'));
});

gulp.task('deploy', shell.task([
    'mysql -u ' + user + ' -p' + pass + ' -h ' + server + ' ' + remoteDB + ' < ' + localDB + '.sql'
]));
