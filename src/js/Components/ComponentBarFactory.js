'use strict';
import ComponentBaseFactory from './ComponentBaseFactory.js';
import '../../less/ComponentBar.less';

const ComponentBarFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    //二次加工
    Component.addClass('ComponentBar');
    let data = config.data;  //data是二维数组
    data.forEach( (ele,index) => {
        //ele -> ['javascript', 0.4, '#fff'] -> 处理这样的数据
        let maxWidth = 200;
        let oRow = $('<div class="row"/>');
        let oName = $('<div class="name"/>').text(ele[0]);
        let oLoadBorder = $('<div class="loadBorder"/>').css({width: maxWidth * ele[1]});
        let oLoadContent = $('<div class="loadContent"/>').css({ backgroundColor: ele[2]});
        let oPercent = $('<div class="percent"/>').text(ele[1] * 100 + '%').css({color: ele[2]});

        oRow.append(oName).append(oLoadBorder.append(oLoadContent)).append(oPercent);

        Component.append(oRow);
    });
    return Component;
}

export default ComponentBarFactory;