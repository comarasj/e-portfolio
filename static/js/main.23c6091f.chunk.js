(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/headshot.27235772.JPG"},,,function(e,t,a){e.exports=a.p+"static/media/Stephen_Comarata_resume.442e540b.pdf"},,,function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(14),r=a.n(o),c=(a(24),a(2)),s=a(3),l=a(5),m=a(4),d=a(6),u=a(41),p=a(40),h=(a(25),a(39)),b=(a(26),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",null,i.a.createElement("div",{className:"topbar"},i.a.createElement(h.a,{to:"/",className:"links"},"Home"),i.a.createElement(h.a,{to:"/aboutme",className:"links"}," About Me"),i.a.createElement(h.a,{to:"/coop",className:"links"},"Co-op"),i.a.createElement(h.a,{to:"/projects",className:"links"},"Projects"),i.a.createElement(h.a,{to:"/resume",className:"links"},"Resume")))}}]),t}(n.Component)),f=(a(29),a(10)),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("header",{className:"homeHeader"},"Stephen Comarata",i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/comarasj",className:"ilinks"},i.a.createElement(f.b,null)),i.a.createElement("a",{href:"https://www.linkedin.com/in/stephen-comarata-a68175180/",className:"ilinks"},i.a.createElement(f.c,null)))))}}]),t}(n.Component),E=(a(30),a(12)),j=a.n(E),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={data:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("h1",{className:"header"},"About Me"),i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"details"},"My name is Stephen Comarata. I am a Computer Engineering Student at The University of Cincinnati."),i.a.createElement("div",{className:"picture"},i.a.createElement("img",{src:j.a,alt:j.a,height:552,width:441}))))}}]),t}(n.Component),k=(a(31),a(32),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).toggleExpanded=function(){e.setState({expanded:!e.state.expanded})},e.state={expanded:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.details.map(function(e,t){return i.a.createElement("li",{key:e.id},e.detail)});return e=this.state.expanded?[i.a.createElement("h3",{className:"tile-header"},this.props.company),i.a.createElement("h4",{className:"tile-header"},this.props.position),i.a.createElement("p",{className:"tile-text"},this.props.intro),i.a.createElement("h4",{className:"tile-header"},"Project Highlights: "),i.a.createElement("ul",{className:"list-group"},t),i.a.createElement("h4",{className:"tile-header"},"Skills Learned"),i.a.createElement("p",{className:"tile-text"},this.props.skills)]:[],i.a.createElement("div",{className:"coop-tile"},i.a.createElement("h2",{className:"tile-header"},this.props.semester," ",i.a.createElement("button",{className:"expand",onClick:this.toggleExpanded},i.a.createElement(f.a,null))),e)}}]),t}(n.Component)),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={data:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<2;t++){var a=O[t].semester,n=O[t].company,o=O[t].details,r=O[t].position,c=O[t].skills,s=O[t].intro;console.log(o),e.push(i.a.createElement(k,{semester:a,company:n,details:o,position:r,skills:c,intro:s}))}return i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Co-op & Experience"),i.a.createElement("div",{className:"tiles"},e))}}]),t}(n.Component),O=[{number:1,semester:"Spring 2018",company:"Siemens PLM Software",position:"Strategic Student Co-op",intro:"This was my first semester at Siemens and co-oping overall.             I learned about Software Development, how to maintain code and the Agile Methodology.             My main project was developing a CodeCoverage Dashboard for Software Developers and Managers using Code Coverage             data generated by test suites. I gained alot of experience with Database queries, API calls, Frontend Development,             and big data.",details:[{id:1,detail:"Used Angular2 to create a web dashboard"},{id:2,detail:"Wrote python code to generate and organize CodeCoverage data"},{id:3,detail:"Worked with Neo4j for big data visualization"}],skills:"Angular2, Git, Neo4j, Python, Web Development"},{number:2,semester:"Fall 2018",company:"Siemens PLM Software",position:"Strategic Student Co-op",intro:"My second semester at Siemens strengthened my skills in Software Development, especially in creating and             maintaining a code base. I practiced Agile in my day to day work and preseneted in sprint reviews.             My main project was creating a Machine Learning software that utilized Google's TensorFlow library for Python.             This software was a proof of concept for determining the risk factor of a submitted code change based on specific factors.             I gained experience using Machine Learning (TensorFlow), Frontend Development, Backend Development, and database queries.",details:[{id:1,detail:"Created a code-change Risk Tool"},{id:2,detail:"Utilized Google's TensorFlow machine learning to make predictions on code-change data"},{id:3,detail:"Developed a web dashboard using ReactJS"}],skills:"Neo4j, Python, ReactJS, SQL, TensorFlow"}],w=y,N=(a(33),a(34),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).toggleExpanded=function(){e.setState({expanded:!e.state.expanded})},e.state={expanded:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return e=this.state.expanded?[i.a.createElement("p",{className:"tile-header"},this.props.description),i.a.createElement("a",{className:"tile-header",href:this.props.gitlink},"Repo on Github")]:[],i.a.createElement("div",{className:"project-tile"},i.a.createElement("h2",{className:"tile-header"},this.props.name,i.a.createElement("button",{className:"expand",onClick:this.toggleExpanded},i.a.createElement(f.a,null))),e)}}]),t}(n.Component)),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={data:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<3;t++){var a=S[t].name,n=S[t].gitlink,o=S[t].description;e.push(i.a.createElement(N,{name:a,gitlink:n,description:o}))}return i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Projects"),i.a.createElement("div",{className:"tiles"},e))}}]),t}(n.Component),S=[{number:1,name:"Wind Game",gitlink:"https://github.com/comarasj/WindGame",description:"The Wind Game is a High School coding project that utilzes Processing and Arduino.             The Wind Game features ways to play with an Arduino custom built controller or the keyboard.             This project was meant to be a combination of hardware and software with different communication techniques.             See the Code on Github.",picture:""},{number:2,name:"Spotify Playlist Generator",gitlink:"https://github.com/comarasj/spotipy",description:"This project was built using Python and a Python Library called Spotipy.             It allows the user to create custom spotify playlists in minutes as opposed to handpicking songs. Read more on Github.",picture:""},{number:3,name:"E-portfolio Project",link:"https://comarasj.github.io/e-portfolio/#/",gitlink:"https://github.com/comarasj/e-portfolio",description:"This is an E-Portfolio Project for PD-2050. This project was built using ReactJS and Github Pages.             Its a website meant to act as an online Resume for myself. Check out the code on Github.",picture:""}],x=C,P=(a(35),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={data:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Technical Skills"),i.a.createElement("div",null,i.a.createElement("p",null)))}}]),t}(n.Component)),T=(a(36),a(15)),G=a.n(T),M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={data:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Resume"),i.a.createElement("div",{className:"resume"},i.a.createElement("a",{href:G.a,classname:"linkbutton"},"Click here")))}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement("div",{className:"contents"},i.a.createElement(p.a,{exact:!0,path:"/",component:g}),i.a.createElement(p.a,{exact:!0,path:"/aboutme",component:v}),i.a.createElement(p.a,{exact:!0,path:"/coop",component:w}),i.a.createElement(p.a,{exact:!0,path:"/projects",component:x}),i.a.createElement(p.a,{exact:!0,path:"/skills",component:P}),i.a.createElement(p.a,{exact:!0,path:"/resume",component:M}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.23c6091f.chunk.js.map