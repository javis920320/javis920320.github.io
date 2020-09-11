
/*document.addEventListener('DOMContentLoaded',function(){
   

   const lista=  document.querySelector('.lista');

   let Back=['Javascript','PHP','Codeigniter','Laravel ','Nest Js'];
   let front=['Angular','Vue','Bostrap','jquery','Wordpress'];

  for (let index = 0; index < Back.length; index++) {
    lista.innerHTML += Back[index]+'<br>';
      
  }

    //lista.innerHTML='<h1>hOLA muNDO '+Back[2]+'</h1>'
    
})*/

var app = new Vue({
    el: '#app',
    data: {
      message: 'Skills',
        backend:[
            {text:'Java'},
            {text:'PHP'},
            {text:'Codeigniter'},
            {text:'Laravel'},
            {text:'Nest js'}
        ],
        frontend:[
            {text:'Javascript'},
            {text:'Angular'},
            {text:'Vue'},
            {text:'jquery'},
            {text:'Boostrap'}
        ]

    }
  })