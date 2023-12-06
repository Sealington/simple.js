/**
 * simple.js
 *
 * Copyright (c) @Sealington
 * Under the MIT License.
 *
 * Simplifying JS in small but loving ways.
**/

function idHTML(id, text) {
  document.getElementById(id).innerHTML = text;
}

function classHTML(Class, text) {
  document.getElementByClass(Class).innerHTML = text;
}

function getId(id) {
  document.getElementById(id);
}

function log(String) {
  console.log(String);
}

function info(String) {
  console.info(String);
}

function warn(String) {
  console.warn(String);
}

function error(String) {
  console.error(String);
}

function getClass(Class) {
  document.getElementByClass(Class);
}

function get(id) {
  localStorage.getItem(id);
}

function set(id, value) {
  localStorage.setItem(id, value);
}

function del(id) {
  localStorage.removeItem(id);
}

function select(thing) {
  document.querySelector(thing);
}