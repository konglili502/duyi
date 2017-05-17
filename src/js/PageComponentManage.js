'use strict';
import ComponentBaseFactory from './Components/ComponentBaseFactory.js';
import ComponentBarFactory from './Components/ComponentBarFactory.js';
import ComponentPolyLineFactory from './Components/ComponentPolyLineFactory.js';
import ComponentPieFactory from './Components/ComponentPieFactory.js';

let Manage = {
    // 生成外框
    init: function(name){
        this.container = $('<div></div>').addClass(name || '').hide();
        $('body').append(this.container);
        return this;
    },
    //生成多个页
    addPage: function(name){
        this.page = $('<div class="section"></div>').addClass(name || ''); 
        this.page.append(ComponentBaseFactory({
            type:'Base',
            text:'渡一教育 747132880@qq.com',
            height:80,
            css:{
                position:'absolute',
                left:0,
                right:0,
                bottom:0,
                lineHeight:'40px',
                backgroundImage:'url(./src/img/bottom.png)',
                textAlign:'center',
                opacity:0,
                color:'#fff'
            },
            animateIn:{
                opacity:1
            },
            animateOut:{
                opacity:0
            }
        }));
        this.container.append(this.page);
        return this;
    },
    // 生成组件
    addComponent: function(config){
        let Component = null;
        switch(config.type){
            case 'Bar' :
                Component = ComponentBarFactory(config);
                break;
            case 'Poly' :
                Component = ComponentPolyLineFactory(config);
                break;
            case 'Pie' :
                Component = ComponentPieFactory(config);
                break;
            default:
                Component = ComponentBaseFactory(config);
        }
        
        this.page.append(Component);
        return this;
    },
    load: function(){
        // fullpage的参数一般是一个，可以是一个对象
        this.container
                .show()
                .fullpage({
                    sectionsColor:['pink','green','blue'],
                    onLeave: function (index, nextIndex, direction){
                        // console.log(index, nextIndex, direction);
                        $('.section').eq(index - 1).trigger('pageLeave',index);
                    },
                    afterLoad: function (anchorLink, index){
                        // console.log(anchorLink, index);
                        $('.section').eq(index - 1).trigger('pageLoad',index);
                    }
                });

        $('.section').on('pageLeave', (e, data) => {
            //data为trigger里面传的第二个参数
            // console.log(e,data);
            $('.section').eq(data - 1).find('.ComponentBase').trigger('componentLeave');
        });
        $('.section').on('pageLoad', (e, data) => {
            //data为trigger里面传的第二个参数
            // console.log(data);
            $('.section').eq(data - 1).find('.ComponentBase').trigger('componentLoad');
        });

        $('.section').eq(0).trigger('pageLoad', 1);
        return this;
    }
};

export default Manage;