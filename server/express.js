import { resolve } from 'path';
import express, { static as _static } from 'express';

const PORT_NUMBER = 3000;
const { NODE_ENV } = process.env;

const DIST_DIR = resolve (__dirname, '..', 'dist');
const MEDIA_DIR = resolve (__dirname, '..', 'media');

/** Instantiate your
    express server instance **/
const _express = express ();

_express.set ('json spaces', 2);

/** Tells express to serve files
    located in your build directory -> ../dist/ **/
_express.use ('/', _static (DIST_DIR));
_express.use ('/resources', _static (MEDIA_DIR));
_express.use ('*', _static (DIST_DIR));

/** Start your server instance,
    and point your browser to localhost:PORT_NUMBER **/
_express.listen (PORT_NUMBER, () => {
  console.log ('Express is listening on port', PORT_NUMBER);
});
