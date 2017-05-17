'use strict';
//es6
import '../less/ComponentBase.less';
import './jquery-1.8.3.min.js';
import './jquery.fullPage.min.js';
import Manage from './PageComponentManage.js';
import '../less/index.less';

Manage
    .init('container')
        .addPage('index')
            .addComponent({
                type:'Base',
                width:428,
                height:92,
                center:true,
                css:{
                    backgroundImage:'url(./src/img/logoIndex.png)',
                    position:'absolute',
                    top:-40,
                    opacity:0
                },
                animateIn:{
                    top:100,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                }
            })
            .addComponent({
                type:'Base',
                name:'shake',
                width:369,
                height:95,
                center:true,
                css:{
                    backgroundImage:'url(./src/img/slogan.png)',
                    position:'absolute',
                    top:220,
                    left:-400,
                    opacity:0
                },
                animateIn:{
                    left:'50%',
                    opacity:1
                },
                animateOut:{
                    left:-400,
                    opacity:0
                },
                delay:500
            })
            .addComponent({
                type:'Base',
                name:'left',
                width:345,
                height:493,
                css:{
                    backgroundImage:'url(./src/img/left.png)',
                    position:'absolute',
                    bottom:40,
                    left:-345,
                    opacity:0
                },
                animateIn:{
                    left:0,
                    opacity:1
                },
                animateOut:{
                    left:-345,
                    opacity:0
                },
                delay:1000
            })
            .addComponent({
                type:'Base',
                name:'right',
                width:324,
                height:449,
                css:{
                    backgroundImage:'url(./src/img/right.png)',
                    position:'absolute',
                    bottom:40,
                    right:-324,
                    opacity:0
                },
                animateIn:{
                    right:0,
                    opacity:1
                },
                animateOut:{
                    right:-324,
                    opacity:0
                },
                delay:1500
            })
        .addPage()
            .addComponent({
                type:'Base',
                width:500,
                height:124,
                css:{
                    backgroundImage:'url(./src/img/mind.png)',
                    position:'absolute',
                    top:-40,
                    left:0,
                    opacity:0
                },
                animateIn:{
                    top:40,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                }
            })
            .addComponent({
                type:'Base',
                width:500,
                height:15,
                text:'用实力让情怀落地',
                center:true,
                css:{
                    position:'absolute',
                    top:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'25px'
                },
                animateIn:{
                    top:140,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                },
                delay:500
            })
            .addComponent({
                type:'Base',
                width:521,
                height:325,
                text:'渡一创立于2015年！渡一创立于2015年！渡一创立于2015年！渡一创立于2015年！渡一创立于2015年！渡一创立于2015年！渡一创立于2015年！渡一创立于2015年！',
                center:true,
                css:{
                    position:'absolute',
                    bottom:30,
                    opacity:0,
                    color:'#000',
                    textAlign:'justify',
                    fontSize:'18px',
                    lineHeight:'24px',
                    fontWeight:700,
                    padding:8,
                    backgroundImage:'url(./src/img/dialog.png)'
                },
                animateIn:{
                    bottom:280,
                    opacity:1
                },
                animateOut:{
                    bottom:30,
                    opacity:0
                },
                delay:1500
            })
            .addComponent({
                type:'Base',
                width:515,
                height:305,
                center:true,
                css:{
                    backgroundImage:'url(./src/img/people.png)',
                    position:'absolute',
                    bottom:-20,
                    opacity:0
                },
                animateIn:{
                    bottom:80,
                    opacity:1
                },
                animateOut:{
                    bottom:-20,
                    opacity:0
                },
                delay:1000
            })
        .addPage()
            .addComponent({
                type:'Base',
                width:500,
                height:124,
                css:{
                    backgroundImage:'url(./src/img/bar.png)',
                    position:'absolute',
                    top:-40,
                    left:0,
                    opacity:0
                },
                animateIn:{
                    top:40,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                }
            })
            .addComponent({
                type:'Base',
                width:500,
                height:15,
                text:'课程体系水平柱状图',
                center:true,
                css:{
                    position:'absolute',
                    top:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'25px'
                },
                animateIn:{
                    top:160,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                },
                delay:500
            })
            .addComponent({
                type:'Bar',
                width:530,
                height:600,
                center:true,
                css:{
                    position:'absolute',
                    bottom:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'25px'
                },
                data:[
                    ['js',0.3,'#af3321'],
                    ['css',0.1,'#10ff00'],
                    ['html',0.1,'#567aa3'],
                    ['vue',0.4,'#99c99f'],
                    ['jquery',0.6,'#c7921c']
                ],
                animateIn:{
                    bottom:120,
                    opacity:1
                },
                animateOut:{
                    bottom:-40,
                    opacity:0
                },
                delay:500
            })
        .addPage()
            .addComponent({
                type:'Base',
                width:500,
                height:124,
                css:{
                    backgroundImage:'url(./src/img/polyline.png)',
                    position:'absolute',
                    top:-40,
                    left:0,
                    opacity:0
                },
                animateIn:{
                    top:40,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                }
            })
            .addComponent({
                type:'Base',
                width:500,
                height:15,
                text:'课程体系折线图',
                center:true,
                css:{
                    position:'absolute',
                    top:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'25px'
                },
                animateIn:{
                    top:160,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                },
                delay:500
            })
            .addComponent({
                type:'Poly',
                width:530,
                height:600,
                center:true,
                css:{
                    position:'absolute',
                    bottom:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'15px'
                },
                data:[
                    ['js',0.3,'#af3321'],
                    ['css',0.1,'#10ff00'],
                    ['html',0.1,'#567aa3'],
                    ['vue',0.4,'#99c99f'],
                    ['jquery',0.6,'#c7921c']
                ],
                animateIn:{
                    bottom:120,
                    opacity:1
                },
                animateOut:{
                    bottom:-40,
                    opacity:0
                },
                delay:500
            })
        .addPage()
            .addComponent({
                type:'Base',
                width:500,
                height:124,
                css:{
                    backgroundImage:'url(./src/img/pie.png)',
                    position:'absolute',
                    top:-40,
                    left:0,
                    opacity:0
                },
                animateIn:{
                    top:40,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                }
            })
            .addComponent({
                type:'Base',
                width:500,
                height:15,
                text:'课程体系饼图',
                center:true,
                css:{
                    position:'absolute',
                    top:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'25px'
                },
                animateIn:{
                    top:160,
                    opacity:1
                },
                animateOut:{
                    top:-40,
                    opacity:0
                },
                delay:500
            })
            .addComponent({
                type:'Pie',
                width:530,
                height:600,
                center:true,
                css:{
                    position:'absolute',
                    bottom:-40,
                    opacity:0,
                    color:'#f00',
                    lineHeight:'15px',
                    textAlign:'center',
                    fontSize:'15px'
                },
                data:[
                    ['js',0.3,'#af3321'],
                    ['css',0.1,'#10ff00'],
                    ['html',0.2,'#567aa3'],
                    ['vue',0.4,'#99c99f']
                ],
                animateIn:{
                    bottom:120,
                    opacity:1
                },
                animateOut:{
                    bottom:-40,
                    opacity:0
                },
                delay:500
            })
        .addPage()
            .addComponent({
                type:'Base',
                name:'back',
                width:96,
                height:52,
                center:true,
                css:{
                    backgroundImage:'url(./src/img/back.png)',
                    position:'absolute',
                    opacity:0
                },
                animateIn:{
                    opacity:1
                },
                animateOut:{
                    opacity:0
                },
                eventType: {
                    click: () => {
                        Manage.container.fullpage.moveTo(1);
                    }
                }
            })
            .addComponent({
                type:'Base',
                width:128,
                height:120,
                css:{
                    backgroundImage:'url(./src/img/share.png)',
                    position:'absolute',
                    top:200,
                    right:100,
                    opacity:0
                },
                animateIn:{
                    top:0, 
                    right:0,
                    opacity:1
                },
                animateOut:{
                    top:0,
                    right:0,
                    opacity:0
                },
                delay:500
            })
            .addComponent({
                type:'Base',
                name:'shake',
                width:428,
                height:92,
                center:true,
                css:{
                    backgroundImage:'url(./src/img/logo.png)',
                    position:'absolute',
                    top:240,
                    left:-400,
                    opacity:0
                },
                animateIn:{
                    left:'50%',
                    opacity:1
                },
                animateOut:{
                    left:-400,
                    opacity:0
                },
                delay:1000
            })
            .addComponent({
                type:'Base',
                width:369,
                height:95,
                center:true,
                css:{
                    backgroundImage:'url(./src/img/slogan.png)',
                    position:'absolute',
                    bottom:-20,
                    opacity:0
                },
                animateIn:{
                    bottom:250,
                    opacity:1
                },
                animateOut:{
                    bottom:-20,
                    opacity:0
                },
                delay:1500
            })
    .load();





