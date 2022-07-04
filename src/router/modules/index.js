const modulesFiles = require.context('./', true, /\.js$/);

/*
    自动化导入黑名单，如果不想导入某些文件就在该数组中添加
在使用require.context自动导入路由文件时发现一个问题,路由的顺序不是你期望的样子,因为webpack是根据你文件夹中文件的位置排序的,这个时候需要定义一个标识符来给路由数组排序,这里我们给每个文件夹最上层的路由添加一个sort属性用于排序
*/ 
const excludeModules = ['./index.js']

export default modulesFiles.keys().reduce( (prev, pathName) => {
    !excludeModules.includes(pathName) && (prev = prev.concat(modulesFiles(pathName).default))
    return prev;
}, []).sort((a, b)=> a.sort ? a.sort - b.sort : -1);