$(document).ready(function() {
    let id=0
    obarry=[];
    $('#brect').click(function(){
        let ob=new Rectangle($('#i1').val(),$('#i2').val(),id)
        ob.drawshape()
        obarry.push(ob)
        id++
        console.log(obarry)
    })
    $('#bsquar').click(function(){
        let ob=new Square($('#i3').val(),$('#i3').val(),id)
        ob.drawshape()
        obarry.push(ob)
        id++
    })
    $('#bcirc').click(function(){
        let ob=new Circle($('#i4').val(),$('#i4').val(),id)
        ob.drawshape()
        obarry.push(ob)
        id++
    })
    $('#btri').click(function(){
        let ob=new Triangle($('#i5').val(),$('#i5').val(),id)
        ob.drawshape()
        obarry.push(ob)
        id++
    })

class Shape {
    constructor(a,b=a,id,name){
        this.a=a
        this.b=b
        this.id=id
    }
    addshape(){
        let v=Number(this.a)
        let r=v/2
        $('.main').append("<div></div>")
        $('.main div:last-child').attr({'id': this.id })
        $('#'+String(this.id)).css({
            'position': 'absolute',
            'top': String(Math.floor(Math.random()*(600-Number(this.b))))+'px',
            'left': String(Math.floor(Math.random()*(600-v))+12)+'px'
        })
        $('#'+String(this.id)).on('dblclick',function () {
            $(this).remove()
        })
    }
    describe(){
        $('span').remove()
        if(this.name==='Circle'){
            $('#shape').append("<span>"+String(this.name)+"</span>")
            $('#width').append()
            $('#height').append()
            $('#radius').append('<span>'+String(this.a)+' px</span>')
            $('#area').append('<span>'+this.area+' px</span>')
            $('#perim').append('<span>'+this.peri+' px</span>')
        }
        if(this.name==='Triangle'){
            $('#shape').append("<span>"+String(this.name)+"</span>")
            $('#width').append('<span>'+String(this.a)+' px</span>')
            $('#height').append('<span>'+String(this.b)+' px</span>')
            $('#radius').append()
            $('#area').append('<span>'+this.area+' px</span>')
            $('#perim').append('<span>'+this.peri+' px</span>')
        }
        if(this.name==='Rectangle'){
            $('#shape').append("<span>"+String(this.name)+"</span>")
            $('#width').append('<span>'+String(this.a)+' px</span>')
            $('#height').append('<span>'+String(this.b)+' px</span>')
            $('#radius').append()
            $('#area').append('<span>'+String(this.area)+' px</span>')
            $('#perim').append('<span>'+String(this.peri)+' px</span>')
        }
        if (this.name==='Square') {
            $('#shape').append("<span>"+String(this.name)+"</span>")
            $('#width').append('<span>'+String(this.a)+' px</span>')
            $('#height').append('<span>'+String(this.b)+' px</span>')
            $('#radius').append()
            $('#area').append('<span>'+String(this.area)+' px</span>')
            $('#perim').append('<span>'+String(this.peri)+' px</span>')
        }
    }
}
class Circle extends Shape {
    constructor(a,b,id,name='Circle',radius=a,peri,area){
        super(a,b,id)
        this.name=name
        this.radius=radius
        this.peri=Math.round((2*Number(this.a)*Math.PI)*100)/100
        this.area=Math.round((Math.pow(this.a,2)*Math.PI)*100)/100
    }
drawshape(){
    this.addshape()
    $('#'+String(this.id)).attr('class', 'circle')
    $('#'+String(this.id)).css({
        'height': String(this.radius)+'px',
        'width': String(this.radius)+'px'
    })
    $('#'+String(this.id)).on('click',function() {
        let obd=obarry[this.id]
            obd.describe()
    })
}
}
class Triangle extends Shape{
    constructor(a,b,id,name='Triangle',height=a,peri,area){
        super(a,b,id)
        this.name=name
        this.height=height
        this.peri=Math.round((2*this.a+Math.sqrt(2)*this.a)*100)/100
        this.area=Math.round((this.a*.5*this.a)*100)/100
    }
    drawshape(){
        this.addshape()
        $('#'+String(this.id)).attr('class', 'triangle')
        $('#'+String(this.id)).css({
            'border-bottom-width': String(this.height)+'px',
            'border-right-width': String(this.height)+'px'
        })
        $('#'+String(this.id)).on('click',function() {
            let obd=obarry[this.id]
            obd.describe()
        })
    }
}
class Rectangle extends Shape{
    constructor(a,b,id,name='Rectangle',width=a,height=b,peri,area){
        super(a,b,id)
        this.name=name
        this.width=width
        this.height=height
        this.peri=2*Number(this.a)+2*Number(this.b)
        this.area=Number(this.a)*Number(this.b)
    }
    drawshape(){
        this.addshape()
        $('#'+String(this.id)).attr('class', 'rectangle')
        $('#'+String(this.id)).css({
            'height': String(this.height)+'px',
            'width': String(this.width)+'px'
        })
        $('#'+String(this.id)).click(function() {
            let obd=obarry[this.id]
            obd.describe()
        })
    }
}
class Square extends Rectangle{
    constructor(a,b,id,name='Square',sidlength=a,peri,area){
        super(a,b,id)
        this.name=name
        this.sidlength=sidlength
        this.peri=4*this.a
        this.area=Math.pow(this.a,2)
    }
    drawshape(){
        this.addshape()
        $('#'+String(this.id)).attr('class', 'square')
        $('#'+String(this.id)).css({
            'height': String(this.sidlength)+'px',
            'width': String(this.sidlength)+'px'
        })
        $('#'+String(this.id)).on('click',function() {
            let obd=obarry[this.id]
            obd.describe()
        })
    }
}
})