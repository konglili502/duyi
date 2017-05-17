'use strict';
import ComponentBaseFactory from './ComponentBaseFactory.js';
import '../../less/ComponentPie.less';

let ComponentPieFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    //二次改造
    Component.addClass('ComponentPie');
    let {data, width, height} = config;

    //底图层
    let oCanvasBg = $('<canvas/>').get(0);
    let ctxBg = oCanvasBg.getContext('2d');
    let canvasR = width / 2;
    oCanvasBg.width = width;
    oCanvasBg.height = height;
    Component.append(oCanvasBg);

    ctxBg.beginPath();
    ctxBg.fillStyle = '#ccc';
    ctxBg.strokeStyle = '#ddd';
    ctxBg.lineWidth = 1;
    ctxBg.arc(canvasR, canvasR, canvasR, 0, 2 * Math.PI);
    ctxBg.fill();

    // 数据层
    let oCanvasData = $('<canvas/>').get(0);
    let ctxData = oCanvasBg.getContext('2d');
    oCanvasData.width = width;
    oCanvasData.height = height;
    Component.append(oCanvasData);

    let sAngel = 1.5 * Math.PI; //开始角度
    let eAngel = 0; //结束角度
    let aAngel = 2 * Math.PI;   // 2π
    let oTextR = canvasR / 2;

    data.forEach((ele, index) => {
        eAngel = sAngel + aAngel * ele[1];
        ctxData.beginPath();
        ctxData.fillStyle = ele[2];
        ctxData.moveTo(canvasR, canvasR);
        ctxData.arc(canvasR, canvasR, canvasR, sAngel, eAngel);
        ctxData.fill();
        //写字
        let X = Math.abs(oTextR * Math.cos(aAngel - (sAngel + (eAngel - sAngel) / 2) ));
        let Y = Math.abs(oTextR * Math.sin(aAngel - (sAngel + (eAngel - sAngel) / 2) ));
        let trueAngel = sAngel + (eAngel - sAngel) / 2;
        let oText = $('<div/>').text(ele[0] + ele[1] * 100 + '%').css({'position':'absolute'});
        if(trueAngel >= 1.5 * Math.PI && trueAngel < 2.5 * Math.PI){
            oText.css('left', oTextR + X);
        }
        if(trueAngel >= 2.5 * Math.PI && trueAngel < 3.5 * Math.PI){
            oText.css('right', oTextR + X);
        }
        if((trueAngel >= 1.5 * Math.PI && trueAngel < 2 * Math.PI) || (trueAngel >= 3 * Math.PI && trueAngel < 3.5 * Math.PI)){
            oText.css('bottom', oTextR + Y);
        }
        if(trueAngel >= 2 * Math.PI && trueAngel < 3 * Math.PI){
            oText.css('top', oTextR + Y);
        }
        Component.append(oText);

        sAngel = eAngel;
    });

    //顶层 覆盖层
    let oCanvasMask = $('<canvas/>').get(0);
    let ctxMask = oCanvasMask.getContext('2d');
    oCanvasMask.width = width;
    oCanvasMask.height = height;
    Component.append(oCanvasMask);

    function draw(per){
        ctxMask.clearRect(0,0,width,height);
        ctxMask.beginPath();
        ctxMask.fillStyle = '#f00';
        ctxMask.moveTo(canvasR, canvasR);
        ctxMask.arc(canvasR, canvasR, canvasR, 1.5 * Math.PI, 1.5 * Math.PI - per * 2 * Math.PI, 1);
        ctxMask.fill();
    }
    draw(1);

    Component.on('componentLoad', () => {
        let progress = 1;
        setTimeout(() => {
            for(var i = 0; i < 100; i++){
                setTimeout(() => {
                    progress -= 0.01;
                    draw(progress);
                }, i * 10);
            }
        },1000);
    });
    Component.on('componentLeave', () => {
        draw(1);
    });
    

    return Component;
};

export default ComponentPieFactory;