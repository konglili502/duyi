'use strict';
import ComponentBaseFactory from './ComponentBaseFactory.js';
import '../../less/ComponentPolyLineFactory.less';

const ComponentPolyLineFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    //二次改造,通过canvas画折线图
    Component.addClass('ComponentPolyLine');
    let oCanvasBg = $('<canvas/>').get(0);
    let ctxBg = oCanvasBg.getContext('2d');

    oCanvasBg.width = config.width;
    oCanvasBg.height = config.height;
    let {width, height} = config;

    ctxBg.beginPath(); 
    ctxBg.lineWidth = 2;
    ctxBg.strokeStyle = '#f00';
    //水平的线
    let step = 10;  //step代表10个格 ->画11条线 循环11次
    for(let i = 0; i < step + 1; i ++){
        let y = (height / step) * i;
        ctxBg.moveTo(0,y);
        ctxBg.lineTo(width, y);
    }
    ctxBg.stroke();
    //垂直的线
    step = config.data.length;  //step代表数据个数 ->画11条线 循环11次
    for(let i = 0; i < step + 2; i ++){
        let x = (width / (step + 1)) * i;
        ctxBg.moveTo(x,0);
        ctxBg.lineTo(x, height);
    }
    ctxBg.stroke();
    //写折线图下方文本
    let data = config.data;
    let domWidth = width / 2 / (config.data.length + 1);  //每个格的宽度
    data.forEach((ele, index) => {
        //ele -> ['j/h/c', 0.4, '#fff']
        let oText = $('<div class="text"/>').text(ele[0]).css('width', domWidth);
        let x = domWidth * (index + 1) - domWidth / 2;
        oText.css({position:'absolute', bottom: '-23px', height: '20px', lineHeight: '20px',textAlign:'center', left:x});
        
        Component.append(oText);
    })

    let oCanvasLine = $('<canvas/>').get(0);
    let ctxLine = oCanvasLine.getContext('2d');

    oCanvasLine.width = config.width;
    oCanvasLine.height = config.height;

    function draw(per){
        ctxLine.clearRect(0, 0, width, height);
        ctxLine.beginPath(); 
        ctxLine.lineWidth = 1;
        ctxLine.strokeStyle = '#1188f8';
        //描点
        let paintingSingleWidth = width / (data.length + 1);
        data.forEach((ele, index) => {
            let x = paintingSingleWidth * (index + 1);
            let y = height - height * ele[1] * per;
            ctxLine.moveTo(x,y);
            ctxLine.arc(x,y,5,0,Math.PI * 2);
        })
        ctxLine.fill();
        //连线
        ctxLine.moveTo(paintingSingleWidth, height - height * data[0][1] * per);
        let lastX = 0;
        data.forEach((ele, index) => {
            let x = paintingSingleWidth * (index + 1);
            let y = height - height * ele[1] * per;
            ctxLine.lineTo(x,y);
            lastX = x;
        })
        ctxLine.stroke();
        //阴影
        ctxLine.lineTo(lastX, height);
        ctxLine.lineTo(paintingSingleWidth, height);
        ctxLine.fillStyle = 'rgba(17, 136, 248, 0.37)';
        ctxLine.fill();
        // 写折线图圆点上方文本
        data.forEach((ele, index) => {
            let x = paintingSingleWidth * (index + 1);
            let y = height - height * ele[1] * per;
            if(ele[2]){
                ctxLine.fillStyle = ele[2] ? ele[2] : '#676767';
            }
            ctxLine.font = '25px Arial';
            ctxLine.fillText(ele[1] * 100 + '%', x-10, y-10);
        })
        ctxLine.stroke();
    }

    Component.on('componentLoad', () => {
        let progress = 0;
        setTimeout(() => {
            for(var i = 0; i < 100; i++){
                setTimeout(() => {
                    progress += 0.01;
                    draw(progress);
                }, i * 10);
            }
        },1500);
    });
    Component.on('componentLeave', () => {
        draw(0);
    });

    Component.append(oCanvasBg).append(oCanvasLine);

    return Component;
}

export default ComponentPolyLineFactory;