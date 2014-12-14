'use strict'

var React = require('react')
var Cassette = require('react-cassette-player')


React.render(
  React.createElement(Cassette, {file: "http://static.echonest.com/audio2/1391651203164/04%20Limelight.mp3", cassetteColor: "#fff", labelColor: "#fff", tapeColor: "#333", controlsColor: "#999", containerClass: "rush_limelight"}),
  document.getElementById('rush'))

React.render(
  React.createElement(Cassette, {file: "http://static.echonest.com/audio2/1397691367357/10%20The%20View.mp3", cassetteColor: "#7A8867", labelColor: "#D0CAAA", tapeColor: "#777", controlsColor: "#ADBA8C", containerClass: "mm_view"}),
  document.getElementById('modest_mouse'))

React.render(
  React.createElement(Cassette, {file: "http://static.echonest.com/audio2/08%20Express%20Yourself.mp3", cassetteColor: "#333", labelColor: "#000", tapeColor: "#CA0226", controlsColor: "#CA0226", containerClass: "nwa_express_yourself", scaleMethod: "slice"}),
  document.getElementById('nwa'))

React.render(
  React.createElement(Cassette, {file: "http://www.krecs.com/media/samples/sam_klp244_02_icreatein.mp3", cassetteColor: "#F4F8FB", labelColor: "#FFDD5E", tapeColor: "#1B3E06", controlsColor: "#1B3E06", containerClass: "mds_broken_system"}),
  document.getElementById('malaikat_dan_singa'))

React.render(
  React.createElement(Cassette, {file: "http://www.krecs.com/media/samples/sam_klp029_11_pleasepleaseplease.mp3", cassetteColor: "#FF662C", labelColor: "#999", tapeColor: "#61CBC7", controlsColor: "#fff", containerClass: "halo_benders_please"}),
  document.getElementById('halo_benders'))