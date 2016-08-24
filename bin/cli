#!/usr/bin/env node

require( 'shelljs/global' )

var path = require( 'path' )
var argv = require( 'yargs' ).argv

var tempdir = './template'
var prodir = path.resolve( argv.d || './' )

mkdir( '-p', prodir )

switch ( argv.c ) {
    case 'common':
        genCommon()
        break
    case 'vue':
        genVue()
    case 'rudex':
        genRudex()
}

function genCommon() {
    cp( '-R', `${tempdir}/common/*`, prodir )
}

function genVue() {
    cp( '-R', `${tempdir}/vue/*`, prodir )
}

function genRudex() {
    cp( '-R', `${tempdir}/rudex/*`, prodir )
}