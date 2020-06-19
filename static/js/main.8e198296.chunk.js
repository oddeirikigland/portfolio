(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{126:function(e){e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')},128:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return h}));var n,i,o,r,s,l,c,m=a(1),p=a.n(m),d=a(29);function u(){e.requestAnimationFrame(u),l.rotation.x+=.05,l.rotation.y+=0,o.render(i,n)}class h extends m.Component{componentDidMount(){(n=new d.f(70,window.innerWidth/window.innerHeight,.01,10)).position.z=1,(i=new d.g).background=new d.b("lightgray"),(c=new d.c(16777215)).position.set(0,20,10),i.add(c),r=new d.a(.1,.1,.1),s=new d.e,l=new d.d(r,s),i.add(l),(o=new d.h({antialias:!0})).setSize(window.innerWidth,window.innerHeight),document.body.appendChild(o.domElement),u()}render(){return p.a.createElement("div",{ref:e=>this.mount=e})}}}).call(this,a(39))},129:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return n}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}}).call(this,a(39))},133:function(e,t,a){e.exports=a(226)},138:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},219:function(e,t,a){},221:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(12),r=a.n(o),s=(a(138),a(64)),l=a(16),c=a(56);a(141);var m=()=>i.a.createElement("div",null,i.a.createElement("span",{id:"icon"},i.a.createElement("a",{style:{color:"inherit"},href:"https://github.com/oddeirikigland"},i.a.createElement("i",{className:"fab fa-github mdi-dark"}))),i.a.createElement("span",{id:"icon"},i.a.createElement("a",{style:{color:"inherit"},href:"https://www.linkedin.com/in/odd-eirik-igland-342172155"},i.a.createElement("i",{className:"fab fa-linkedin"})))),p=(a(142),a(229)),d=a(230);var u=e=>(c.a.pageview("/"+e.link),i.a.createElement(p.a,{style:{width:"18rem"}},i.a.createElement(p.a.Body,null,i.a.createElement(p.a.Title,null,e.title),i.a.createElement(p.a.Text,null,e.text),i.a.createElement(s.b,{to:e.link},i.a.createElement(d.a,{variant:"primary"},"Take a look"))))),h=a(93);const g=[{title:"Segment Map",text:"Shows information about Strava segments in a map.",link:"strava"},{title:"Segment Table",text:"The user logs in to Strava. The table contains the logged in users segment efforts on the last activities. Sorts the segments after their difficulty to get the KOM.",link:"strava_table"},{title:"City bike",text:"Shows available city bikes in Trondheim. Green pin means many bikes, while red means few available bikes. Realtime data.",link:"city"},{title:"Smart Display for Homes",text:"It is intended to be non portable and placed e.g. in the hall. The need of easy accessible information is convenient in a busy everyday life. The display is a enhanced version of a notice board that changes according to who is looking at it.",link:"ambient"},{title:"Restarts in Julia",text:"Handling of exceptional situations in Julia, including use of restarts. This is the documentation for the project.",link:"restart_in_julia"},{title:"Regression modelling",text:"The main purpose of this project is to predict how many people that will come to work at Telenor Fornebu, for up to x into the future.",link:"pred_telenor"}];class f extends n.Component{render(){return i.a.createElement("div",{id:"home"},i.a.createElement("div",{id:"container"},i.a.createElement("header",null,"Welcome to my site!"),i.a.createElement("p",null,"Check out my projects below"),i.a.createElement(m,null)),i.a.createElement("div",{id:"grid"},i.a.createElement(h.b,{columns:"repeat(auto-fit, minmax(120px, 286px))",minRowHeight:"45px"},g.map(e=>i.a.createElement(h.a,{key:e.link},i.a.createElement(u,{title:e.title,text:e.text,link:e.link}))))))}}var b=a(69),y=a(53),v=a.n(y),x=a(51),S=a(70),w=a.n(S),k=a(45),E=a(57),_=a(25),C=a(55),j=a(131),O=a(15),N=a(123),A=a.n(N),z=(a(106),a(96));a(219),a(220);const D=({children:e})=>i.a.createElement("div",{className:"control-panel"},e),I=Object(z.a)(z.b);function L(e){return"".concat(e," km")}function U(e){return"".concat(e," %")}class M extends n.PureComponent{constructor(e){super(e),this.state={activity:[{type:"All"},{type:"Run"},{type:"Ride"}]}}_renderButton(e,t){return i.a.createElement("div",{key:"btn-".concat(t),className:"input"},i.a.createElement("input",{type:"radio",name:"activity",id:"activity-".concat(t),defaultChecked:"All"===e.type,onClick:()=>this.props.filterActivityType(e)}),i.a.createElement("label",{htmlFor:"city-".concat(t)},e.type))}render(){const e=this.props.containerComponent||D;return i.a.createElement(e,null,i.a.createElement("h6",null,"FIND EASISEST SEGMENTS AND GO FOR KOM"),"They are ranked from green to red. Press a county to zoom in.",i.a.createElement("p",null,"Filter segment on type of sport"),this.state.activity.map(this._renderButton),"Shows segments in ","".concat(this.props.segmentDistance)," km from where you click",i.a.createElement(I,{value:this.props.segmentDistance,onChange:this.props.onSliderChange,onAfterChange:this.props.onAfterSliderChange,tipFormatter:L,min:2,max:1e4}),"Showing ","".concat(this.props.numberOfSegments)," % of the relevant segments",i.a.createElement(I,{value:this.props.numberOfSegments,onChange:this.props.onSliderChangeNumberSegments,onAfterChange:this.props.onAfterSliderChangeNumberSegments,tipFormatter:U,min:1,max:100}))}}const T={cursor:"pointer",stroke:"none"};class J extends n.PureComponent{render(){const e=this.props,t=e.size,a=void 0===t?20:t,n=e.onClick;return i.a.createElement("svg",{height:a,viewBox:"0 0 24 24",style:Object(k.a)(Object(k.a)({},T),{},{fill:"rgb("+2.56*(100-this.props.colorPercent)+","+2.56*this.props.colorPercent+",0)",transform:"translate(".concat(-a/2,"px,").concat(-a,"px)")}),onClick:n},i.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}class $ extends n.PureComponent{render(){const e=this.props.info;return i.a.createElement("div",null,i.a.createElement("div",null,e.name," |"," ",i.a.createElement("a",{target:"_new",href:"https://www.strava.com/segments/".concat(e._id)},"View on Strava")),i.a.createElement("p",null,"Star count ".concat(e.star_count)),i.a.createElement("p",null,"Efforts ".concat(e.efforts)),i.a.createElement("p",null,"Info updated ".concat((e=>{const t=e.getHours(),a=e.getMinutes(),n=e.getDate(),i=e.getMonth(),o=e.getFullYear();return"".concat(t,":").concat(a," ").concat(n,". ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(o)})(new Date(e.time_info_added)))))}}var B=a(126);const P=Object(C.a)({id:"data",source:"county",type:"fill",interactive:!0,paint:{"fill-color":["match",["get","fylkesnummer"],["01"],"#e6194b",["02"],"#3cb44b",["04"],"#4363d8",["05"],"#f58231",["06"],"#911eb4",["07"],"#46f0f0",["08"],"#f032e6",["09"],"#bcf60c",["10"],"#fabebe",["11"],"#008080",["12"],"#e6beff",["13"],"#9a6324",["14"],"#fffac8",["15"],"#800000",["16"],"#aaffc3",["17"],"#808000",["18"],"#ffd8b1",["19"],"#000075",["20"],"#ffe119",["50"],"#808080","#ffffff"],"fill-opacity":.3}}),F=Object(C.a)(B),R={position:"absolute",top:0,left:0,padding:"10px"},W={position:"absolute",top:36,left:0,margin:10},V={position:"absolute",top:72,left:0,padding:"10px"};class H extends n.Component{constructor(e){super(e),this.state={viewport:{width:"100%",height:"100vh",latitude:65,longitude:15,zoom:3.5},popupInfo:null,activityView:"All",mapStyle:F,data:null,segmentDistance:5e3,focusCountyNumber:0,numberOfSegments:100},this.handleOnSliderChange=this.handleOnSliderChange.bind(this),this.handleOnAfterSliderChange=this.handleOnAfterSliderChange.bind(this)}componentDidMount(){this.props.toogleLoading(),Object(j.a)("https://segment-analyzer.herokuapp.com/map/countyNorway",(e,t)=>{this.props.toogleLoading(),e||(this._loadData(t),this.segmentUpdate())})}_loadData(e){const t=F.setIn(["sources","county"],Object(C.a)({type:"geojson",data:e})).set("layers",F.get("layers").push(P));this.setState({data:e,mapStyle:t})}_renderPopup(){const e=this.state.popupInfo;return e&&i.a.createElement(_.f,{tipSize:5,anchor:"top",longitude:e.start_longitude,latitude:e.start_latitude,closeOnClick:!1,onClose:()=>this.setState({popupInfo:null})},i.a.createElement($,{info:e}))}updateSegmentView(e){const t=e.type;this.setState({activityView:t},()=>{this.segmentUpdate()})}segmentUpdate(){this.props.segmentApiUpdate(this.state.focusCountyNumber,this.state.segmentDistance,this.state.viewport.latitude,this.state.viewport.longitude,this.state.activityView,this.state.numberOfSegments)}handleOnClickMap(e){const t=e.features[0];if(t){const a=parseInt(t.properties.fylkesnummer),n=A()(t),i=Object(E.a)(n,4),o=i[0],r=i[1],s=i[2],l=i[3],c=new O.a(this.state.viewport).fitBounds([[o,r],[s,l]],{padding:40}),m=c.longitude,p=c.latitude,d=c.zoom;this.setState({viewport:Object(k.a)(Object(k.a)({},this.state.viewport),{},{longitude:m,latitude:p,zoom:d,transitionInterpolator:new _.c({around:[e.offsetCenter.x,e.offsetCenter.y]}),transitionDuration:1e3}),focusCountyNumber:a}),this.segmentUpdate()}}handleOnSliderChange(e){this.setState({segmentDistance:e})}handleOnAfterSliderChange(){this.segmentUpdate()}handleOnSliderChangeNumberSegments(e){this.setState({numberOfSegments:e})}handleOnAfterSliderChangeNumberSegments(){this.segmentUpdate()}render(){return i.a.createElement(_.g,Object.assign({},this.state.viewport,{mapStyle:this.state.mapStyle,mapboxApiAccessToken:"pk.eyJ1Ijoib2RkZWlyaWsiLCJhIjoiY2s1ejlzdXhqMGNzaDNsbWxiNXQ2cjludyJ9.x9SZhIpJZ_cUzujqiQJu9g",onClick:this.handleOnClickMap,onViewportChange:e=>this.setState({viewport:e})}),this.props.segments.map((e,t)=>i.a.createElement(_.d,{key:t,latitude:e.start_latitude,longitude:e.start_longitude,offsetLeft:-20,offsetTop:-10},i.a.createElement(J,{onClick:()=>this.setState({popupInfo:e}),colorPercent:e.color}))),this._renderPopup(),i.a.createElement("div",{className:"fullscreen",style:R},i.a.createElement(_.a,null)),i.a.createElement(_.b,{style:W,positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),i.a.createElement("div",{className:"nav",style:V},i.a.createElement(_.e,null)),i.a.createElement(M,{containerComponent:this.props.containerComponent,filterActivityType:this.updateSegmentView,segmentDistance:this.state.segmentDistance,onSliderChange:this.handleOnSliderChange,onAfterSliderChange:this.handleOnAfterSliderChange,numberOfSegments:this.state.numberOfSegments,onSliderChangeNumberSegments:this.handleOnSliderChangeNumberSegments,onAfterSliderChangeNumberSegments:this.handleOnAfterSliderChangeNumberSegments}))}}function q(){const e=Object(b.a)(["\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  z-index: 99;\n"]);return q=function(){return e},e}const Z={width:"100%",height:"100%"},G=Object(x.css)(q());class Q extends n.Component{constructor(e){super(e),this.state={segments:[],loading:!1},this.getSegments=this.getSegments.bind(this),this.segmentApiUpdate=this.segmentApiUpdate.bind(this),this.toogleLoading=this.toogleLoading.bind(this)}getSegments(e,t,a,n,i,o){this.setState({loading:!0}),v.a.get("https://segment-analyzer.herokuapp.com/strava_segments?county_number=".concat(e,"&segment_distance=").concat(t,"&latitude=").concat(a,"&longitude=").concat(n,"&activity_view=").concat(i,"&number_of_segments=").concat(o)).then(e=>{const t=e.data;this.setState({segments:t,loading:!1})})}segmentApiUpdate(e,t,a,n,i,o){this.getSegments(e,t,a,n,i,o)}toogleLoading(){this.setState({loading:!this.state.loading})}render(){return i.a.createElement("div",{id:"segmentAnalyzer",style:Z},i.a.createElement(w.a,{css:G,sizeUnit:"px",size:150,color:"#36D7B7",loading:this.state.loading}),i.a.createElement(H,{segments:this.state.segments,segmentApiUpdate:this.segmentApiUpdate,toogleLoading:this.toogleLoading}))}}var X=a(127);a(221);var Y=()=>{const e=Object(X.a)({defaultValues:{exercise:"11"}}),t=e.handleSubmit,a=e.register,n=e.errors,o=e.watch,r=({item:e})=>i.a.createElement("div",{className:"form-group row",key:e.name},i.a.createElement("label",{className:"control-label col-sm-2",htmlFor:e.name},e.name),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("input",{type:"text",className:"form-control",name:e,ref:a})),n.item&&n.item.message),s=({list:e})=>e.map(e=>i.a.createElement(r,{item:e,key:e.name}));return i.a.createElement("form",{className:"form-horizontal",onSubmit:t(e=>{console.log(e)})},i.a.createElement("fieldset",{className:"form-group"},i.a.createElement("div",{className:"row"},i.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"Exercise"),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("div",{className:"form-check"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"exercise",id:"11",value:"11",ref:a,defaultChecked:!0}),i.a.createElement("label",{className:"form-check-label",htmlFor:"11"},"11")),i.a.createElement("div",{className:"form-check"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"exercise",id:"12",value:"12",ref:a}),i.a.createElement("label",{className:"form-check-label",htmlFor:"12"},"12")),i.a.createElement("div",{className:"form-check disabled"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"exercise",id:"13",value:"13",ref:a}),i.a.createElement("label",{className:"form-check-label",htmlFor:"13"},"13"))))),i.a.createElement(s,{list:{11:[{name:"squat"},{name:"curl"}],12:[{name:"deadlift"},{name:"dance"}],13:[{name:"asd"}]}[o("exercise")]}),i.a.createElement("button",{type:"submit"},"Submit"))},K=a(128),ee=a(13),te=a.n(ee),ae=a(19);class ne extends n.Component{constructor(e){super(e),this.state={viewport:{width:"100%",height:"100vh",latitude:63.42957,longitude:10.39844,zoom:12}}}render(){return i.a.createElement(_.g,Object.assign({},this.state.viewport,{mapStyle:this.props.mapStyle,mapboxApiAccessToken:"pk.eyJ1Ijoib2RkZWlyaWsiLCJhIjoiY2s1ejlzdXhqMGNzaDNsbWxiNXQ2cjludyJ9.x9SZhIpJZ_cUzujqiQJu9g",onClick:this.props.onClick,onViewportChange:e=>this.setState({viewport:e})}),this.props.children)}}class ie extends n.Component{constructor(e){super(e),this.state={mapStyle:F}}render(){return i.a.createElement(ne,{mapStyle:this.state.mapStyle},this.props.stations.map((e,t)=>i.a.createElement(_.d,{key:t,latitude:e.lat,longitude:e.lon},i.a.createElement(J,{onClick:()=>this.setState({popupInfo:e}),colorPercent:e.color}))))}}function oe(){const e=Object(b.a)(["\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  z-index: 99;\n"]);return oe=function(){return e},e}const re={width:"100%",height:"100%"},se=Object(x.css)(oe());class le extends n.Component{constructor(e){super(e),this.state={loading:!1,stations:[],availability:[]},this.getStations=this.getStations.bind(this),this.getAvailability=this.getAvailability.bind(this)}componentDidMount(){var e=this;return Object(ae.a)(te.a.mark((function t(){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,e.getStations();case 3:return t.next=5,e.getAvailability();case 5:setInterval(()=>e.getAvailability(),11e3);case 6:case"end":return t.stop()}}),t)})))()}getStations(){var e=this;return Object(ae.a)(te.a.mark((function t(){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"https://gbfs.urbansharing.com/trondheimbysykkel.no/station_information.json",v.a.get("https://gbfs.urbansharing.com/trondheimbysykkel.no/station_information.json",{headers:{"Client-Identifier":"oe"}}).then(t=>{const a=t.data.data.stations;e.setState({stations:a})}).catch(e=>{console.log("error 3 "+e)});case 2:case"end":return t.stop()}}),t)})))()}getAvailability(){var e=this;return Object(ae.a)(te.a.mark((function t(){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({loading:!0}),"https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json",v.a.get("https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json",{headers:{"Client-Identifier":"oe"}}).then(t=>{const a=t.data.data.stations;e.setState({availability:a},()=>e.setStationStatus())}).catch(e=>{console.log("error 3 "+e)});case 3:case"end":return t.stop()}}),t)})))()}setStationStatus(){this.setState(e=>{const t=[...e.stations];return this.state.availability.forEach(e=>{const a=100*e.num_bikes_available/e.num_docks_available,n=t.findIndex(t=>t.station_id===e.station_id);"undefined"!==typeof t[n]&&(t[n].color=a)}),{stations:t,loading:!1}})}render(){return i.a.createElement("div",{id:"cityMonitor",style:re},i.a.createElement(w.a,{css:se,sizeUnit:"px",size:150,color:"#36D7B7",loading:this.state.loading}),i.a.createElement(ie,{stations:this.state.stations}))}}c.a.initialize("UA-124441029-2"),c.a.pageview("/");const ce=()=>i.a.createElement("div",{style:{position:"absolute",width:"100%",top:"50%",textAlign:"center"}},"The page you are looking for does not exist."),me=e=>(window.location.href=e,null);class pe extends n.Component{render(){return i.a.createElement(s.a,{basename:""},i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",component:f}),i.a.createElement(l.a,{path:"/strava",component:Q}),i.a.createElement(l.a,{path:"/form",component:Y}),i.a.createElement(l.a,{path:"/animation",component:K.a}),i.a.createElement(l.a,{path:"/city",component:le}),i.a.createElement(l.a,{path:"/strava_table",component:()=>me("https://segment-analyzer.herokuapp.com/strava")}),i.a.createElement(l.a,{path:"/ambient",component:()=>me("https://shielded-peak-50254.herokuapp.com/")}),i.a.createElement(l.a,{path:"/restart_in_julia",component:()=>me("https://oddeirikigland.github.io/restarts-in-julia/stable/")}),i.a.createElement(l.a,{path:"/pred_telenor",component:()=>me("https://htmlpreview.github.io/?https://raw.githubusercontent.com/oddeirikigland/Summer-Project-Smarte-bygg/master/models/all_models.html")}),i.a.createElement(l.a,{component:ce})))}}var de=a(129),ue=(a(223),a(130));Object(ue.config)(),r.a.render(i.a.createElement(pe,null),document.getElementById("root")),de.a()}},[[133,1,2]]]);
//# sourceMappingURL=main.8e198296.chunk.js.map