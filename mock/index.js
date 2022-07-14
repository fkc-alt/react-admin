const Mock = require('mockjs');

const { getParams } = require('./utils');

const modulesFiles = require.context('./modules', true, /\.js$/);

const excludeModules = ['./index.js']

const Mocks = modulesFiles.keys().reduce( (prev, pathName) => {
    !excludeModules.includes(pathName) && (prev = [...prev, ...modulesFiles(pathName).default]);
    return prev;
}, []);

function XHRMapResopnse(_, response) {
    _.body && (_.body = JSON.parse(_.body));
    return typeof response === 'function' ? response(Mock, _, getParams(_.url)) : response;
}

for (const i of Mocks) {
    Mock.mock(new RegExp(i.url), i.method, options => XHRMapResopnse(options, i.response));
}