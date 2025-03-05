
/**
 * 数据表某一列转下拉列表json
 */
export function getDropList(tableDate, columnname: string){
    //获取下拉列表list
    let listdate: string[];
    listdate = []
    for(var i=0;i<tableDate._rawValue.length;i++){
        listdate.push(tableDate._rawValue[i][columnname])
    };
    //增加一个全部的选项
    listdate.unshift("全部");
    //列表去重
    listdate = Array.from(new Set(listdate));
    //存入json数组
    var json = {};
    for(var i=0;i<listdate.length;i++){
        json[i] = listdate[i]
    };
    return json
}