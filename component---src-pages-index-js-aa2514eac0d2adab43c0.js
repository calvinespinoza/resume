(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(e,a,t){"use strict";t.r(a);t(51);var n=t(0),i=t.n(n),c=(t(194),t(241),t(204)),r=(t(220),t(200)),s=(t(246),t(278),t(279)),l=t.n(s),m=t(280),o=t.n(m);var d=function(e){var a,t;function n(a){return e.call(this,a)||this}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var s=n.prototype;return s.componentDidMount=function(){},s.componentDidUpdate=function(){},s.render=function(){var e=p.map(function(e){for(var a=[],t=e.percent,n=0;n<10;n++)n<t?a.push(i.a.createElement("div",{className:"skill-circle"})):a.push(i.a.createElement("div",{className:"skill-circle clear"}));return i.a.createElement("div",{className:"ind-skill"},i.a.createElement("h3",null,e.name),i.a.createElement("div",{className:"circles"},a))}),a=f.map(function(e){return i.a.createElement("div",{id:"education"},i.a.createElement("div",null,i.a.createElement("h3",null,e.año_init," — ",e.año_fin),i.a.createElement("h4",null,"Tegucigalpa")),i.a.createElement("div",null,i.a.createElement("h2",null,e.name),i.a.createElement("h3",null,e.insti),i.a.createElement("h4",null,e.descripcion)),i.a.createElement("h3",{className:"indice"},e.indice,"%"))}),t=g.map(function(e){return i.a.createElement("h3",null,e)}),n=E.map(function(e){return i.a.createElement("h3",null,e.name)}),s=v.map(function(e){return i.a.createElement("div",null,i.a.createElement("span",{className:"s3"},e.name),i.a.createElement("h3",null,e.info))}),l=b.map(function(e,a){return a%2==0?i.a.createElement("div",{className:"port-item"},i.a.createElement("div",null,i.a.createElement("img",{className:"port-img",src:e.image})),i.a.createElement("div",{className:"port-info"},i.a.createElement("span",{className:"s3"},e.category),i.a.createElement("span",{className:"outline"},e.project),i.a.createElement("h4",null,e.description))):i.a.createElement("div",{className:"port-item left"},i.a.createElement("div",{className:"port-info"},i.a.createElement("span",{className:"s3"},e.category),i.a.createElement("span",{className:"outline"},e.project),i.a.createElement("h4",null,e.description)),i.a.createElement("div",null,i.a.createElement("img",{className:"port-img",src:e.image})))});return i.a.createElement(c.a,null,i.a.createElement(r.a,{title:"Home"}),i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"nav-right"},i.a.createElement("a",{href:"#ed"},"Educacion"),i.a.createElement("span",null,"Habilidades"),i.a.createElement("span",null,"Perfil"),i.a.createElement("span",null,"Contacto"))),i.a.createElement("div",{className:"main-area"},i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"welcome"},i.a.createElement("span",{className:"intro"},"Hi, I'm"),i.a.createElement("div",{className:"name"},i.a.createElement("strong",null,"Calvin"),i.a.createElement("strong",null,"Espinoza")),i.a.createElement("div",{className:"description"},i.a.createElement("p",null,"I’m a software developer currently based"),i.a.createElement("p",null,"in Tegucigalpa, Honduras"))),i.a.createElement("div",{className:"profession"},i.a.createElement("span",{className:"name"},"UI/UX Developer"),i.a.createElement("span",{className:"name"},"Full-Stack Developer"))),i.a.createElement("div",{className:"block light",id:"ed"},i.a.createElement(u,{name:"Educación",number:"01"}),a),i.a.createElement("div",{className:"block prim",id:"skills"},i.a.createElement(u,{name:"Habilidades",number:"02"}),i.a.createElement("div",{className:"col-block"},i.a.createElement("div",null,i.a.createElement("span",{className:"s2"},"Lenguajes"),e),i.a.createElement("div",{className:"light",id:"softskills"},i.a.createElement("span",{className:"s2"},"Habilidades Blandas"),i.a.createElement("div",{id:"softs"}," ",t))),i.a.createElement("div",{className:"row-block"},i.a.createElement("span",{className:"s2"},"Tecnologías y Herramientas"),i.a.createElement("div",{id:"techs"},n))),i.a.createElement("div",{className:"block light",id:"portfolio"},i.a.createElement(u,{name:"Portfolio",number:"03"}),l),i.a.createElement("div",{className:"block prim"},i.a.createElement(u,{name:"Perfil",number:"04"}),i.a.createElement("div",{className:"col-block25"},i.a.createElement("div",{className:"light",id:"general"},s),i.a.createElement("span",{className:"quote",id:"description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Mi ipsum faucibus vitae aliquet."))),i.a.createElement("div",{className:"block light"},i.a.createElement(u,{name:"Contacto",number:"05"}),i.a.createElement("div",{id:"contact"},i.a.createElement("div",{className:"input"},i.a.createElement("span",{className:"s3"},"Nombre"),i.a.createElement("input",null)),i.a.createElement("div",{className:"input"},i.a.createElement("span",{className:"s3"},"Correo"),i.a.createElement("input",null)),i.a.createElement("div",{className:"input"},i.a.createElement("span",{className:"s3"},"¿En que te puedo ayudar?"),i.a.createElement("textarea",{rows:"5"}))),i.a.createElement("button",{className:"dark-bt"}," ",i.a.createElement("span",{className:"s3"},"Enviar")))))},n}(i.a.Component),u=function(e){var a=e.name,t=e.number;return i.a.createElement("div",null,i.a.createElement("div",{className:"sub"},i.a.createElement("h1",{className:"backing"},t),i.a.createElement("h2",{className:"heading"},a)),i.a.createElement("div",{className:"num-obj"},i.a.createElement("div",{className:"number"},t)))},p=[{name:"HTML/SCSS",percent:9},{name:"Javascript",percent:8},{name:"Java",percent:7},{name:"C/C++",percent:7},{name:"Python",percent:5}],E=[{name:"Node.js",img:""},{name:"React JS",img:""},{name:"React Native",img:""},{name:"Meteor",img:""},{name:"Node.js",img:""},{name:"Angular",img:""},{name:"MongoDB",img:""},{name:"Firebase",img:""},{name:"SQL Server",img:""},{name:"Hadoop",img:""},{name:"Unreal Engine",img:""}],g=["Integridad","Trabajo en equipo","Determinación","Responsabilidad"],f=[{name:"Educacion Primaria Bilingüe",insti:"Elvel School","año_init":"2004","año_fin":"2010",indice:"97.6"},{name:"Educacion Secundaria Bilingüe",insti:"Elvel School","año_init":"2010","año_fin":"2015",indice:"98.3",descripcion:"Salutatorian: 2º de la promoción"},{name:"Ingeniería en Sistemas Computacionales",insti:"Universidad Tecnologica Centroamericana","año_init":"2015","año_fin":"2020",indice:"90.2",descripcion:"Calificación más alta: Area de Computacion Intermedia 2018"}],v=[{name:"Nombre",info:"Calvin Espinoza"},{name:"Edad",info:"21 años"},{name:"Nacido en",info:"Tegucigalpa, Honduras"},{name:"Redes Sociales"}],b=[{project:"Sprouting Productive Gear",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",category:"Development",image:l.a},{project:"Morazán Vigila",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",category:"Development",image:l.a},{project:"Pinewood Cinema",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",category:"Prototype & Design",image:o.a},{project:"anting",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",category:"Prototype & Design",image:l.a}];a.default=d},193:function(e,a,t){var n;e.exports=(n=t(199))&&n.default||n},194:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(66),r=t.n(c);t.d(a,"a",function(){return r.a});t(193),t(9).default.enqueue,i.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},199:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),i=t.n(n),c=t(96);a.default=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},200:function(e,a,t){"use strict";var n=t(201),i=t(0),c=t.n(i),r=t(213),s=t.n(r);function l(e){var a=e.description,t=e.lang,i=e.meta,r=e.title,l=n.data.site,m=a||l.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:t},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:r},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:m}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},a.a=l},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},204:function(e,a,t){"use strict";var n=t(198),i=t(0),c=t.n(i),r=t(194),s=function(e){var a=e.siteTitle;return c.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},a))))};s.defaultProps={siteTitle:""};a.a=function(e){var a=e.children;n.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},c.a.createElement("main",null,a)))}},220:function(e,a,t){"use strict";t(221),t(0),t(245)},221:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},279:function(e,a,t){e.exports=t.p+"static/spg-2abb38c31da1c4e39a99c01b28be2929.png"},280:function(e,a,t){e.exports=t.p+"static/pinewood-8bad4e26b404a01dd2be586ff471c978.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-aa2514eac0d2adab43c0.js.map