import gulp from 'gulp';
import gutil, { colors } from 'gulp-util';
import watch from 'gulp-watch';
import async from 'async';
import { spawn } from 'child_process';

class NodeProcess {
  constructor (name, props) {
    this.name = name;
    this.props = props;
    this.instance = {};
  }
  start (next) {
    this.instance = spawn ('node', [this.props.index], { stdio: 'inherit' });
    if (next) next ();
  }
  stop (next) {
    this.instance.kill ();
    if (next) next ();
  }
  restart () {
    gutil.log ('Restarting \'' + colors.cyan (this.name) + '\'');
    async.series ([ ::this.stop, ::this.start ]);
  }
  watch () {
    /** gulp-watch module is preferred to the built in gulp.watch
        because the latter is intended for small projects and doesn't
        respond to newly created or deleted files, requiring a manual restart **/
    watch (this.props.watch, ::this.restart).on ('error', this.error);
  }
  error (error) {
    gutil.log ('Error \'' + colors.red (error.code) + '\'');
  }
}

const express = new NodeProcess ('express', {
  index: './bin/express.js',
  watch: [
    './bin/express.js',
    './server/**/*',
    "!./server/webpack.js"
  ]
});

const webpack = new NodeProcess ('webpack', {
  index: './bin/webpack.js',
  watch: [
    './bin/webpack.js',
    './server/webpack.js',
    './webpack.config.babel.js',
    './.babelrc'
  ]
});

gulp.task ('express', () => {
  return async.series ([
    ::express.start,
    ::express.watch
  ]);
});

gulp.task ('webpack', () => {
  return async.series ([
    ::webpack.start,
    ::webpack.watch
  ]);
});

gulp.task ('default', [
  'express',
  'webpack'
]);
