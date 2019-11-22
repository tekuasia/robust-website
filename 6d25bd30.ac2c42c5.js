(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{97:function(e,n,t){"use strict";t.r(n);t(104),t(12),t(51),t(108),t(109);var o=t(0),a=t.n(o),r=t(103),l=(t(138),t(142),t(145)),c=t.n(l),i=a.a.memo((function(e){var n=e.lines;return a.a.createElement("pre",{className:"language-shell__output"},n.split(/\n/g).filter(Boolean).map((function(e,n){return a.a.createElement("div",{key:n,className:"token-line"},a.a.createElement("span",{className:"token plain"},h(e)))})))}),(function(){return!0})),d=/^(info|success|error|warn) /,s=/\+\d+ms$/,p=/^(\s+)((added|inject): .+)/,b=/^(\s*)robust (\w+(?::\w+)*) ((<\w+> )+)?/,u=/{([^}]+)}/gi,m=/([^ ]+) (.+)/,h=function(e){var n={info:"deepskyblue",success:"limegreen",error:"red",warn:"darkorange",name:"lightgoldenrodyellow",light:"white",debug:"dodgerblue",inject:"mediumpurple",added:"limegreen"},t=e.replace(d,(function(e,n){return"{"+n+" "+n+"} "})).replace(s,(function(e){return"{"+n.debug+" "+e+"} "})).replace(p,(function(e,n,t,o){return n+"{"+o+" "+t+"}"})).replace(b,(function(e,n,t,o){return n+"{light robust "+t+" "+(o||"")+"}"}));return c()(t,u,(function(e){var t=m.exec(e);if(!t)return e;var o=t[1],r=t[2],l=n[o]?n[o]:o;return a.a.createElement("span",{key:r,style:{color:l}},r)}))},O=i;function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,"frontMatter",(function(){return f})),t.d(n,"rightToc",(function(){return g})),t.d(n,"default",(function(){return v}));var f={id:"guide-cli",title:"Robust CLI",sidebar_label:"CLI"},g=[{value:"1. List of common commands",id:"1-list-of-common-commands",children:[]},{value:"2. Official commands",id:"2-official-commands",children:[{value:"2.1. <code>robust new</code>",id:"21-robust-new",children:[]},{value:"2.2. <code>robust serve</code>",id:"22-robust-serve",children:[]},{value:"2.3. <code>robust add</code>",id:"23-robust-add",children:[]}]},{value:"3. Other CLI commands",id:"3-other-cli-commands",children:[{value:"3.1. <code>robust add:controller</code>",id:"31-robust-addcontroller",children:[]}]},{value:"4. Extend CLI commands",id:"4-extend-cli-commands",children:[]}],y={rightToc:g},w="wrapper";function v(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(w,j({},y,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-list-of-common-commands"},"1. List of common commands"),Object(r.b)("br",null),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust --help\n")),Object(r.b)(O,{lines:"\nUsage: robust <command>\nCommands:\n  robust new <template> <name>  Scaffold new robust application\n  robust serve                  Start application\n  robust add <name>             Create module\n  robust add:controller <name>  \u1d07 Add new controller\nOptions:\n  -h, --help     Show help                        [boolean]\n  -v, --version  Show version number              [boolean]\n",mdxType:"ShellOutput"}),Object(r.b)("p",null,"Command list can be different when Robust CLI extensions found. For more information, please head down to ",Object(r.b)("a",j({parentName:"p"},{href:"#4-extend-cli-commands"}),"Extend CLI commands"),"."),Object(r.b)("h2",{id:"2-official-commands"},"2. Official commands"),Object(r.b)("h3",{id:"21-robust-new"},"2.1. ",Object(r.b)("inlineCode",{parentName:"h3"},"robust new")),Object(r.b)("p",null,"The first thing we'll want to do is create a new Robust application by running the ",Object(r.b)("inlineCode",{parentName:"p"},"robust new")," command."),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust new api my-api\n")),Object(r.b)(O,{lines:"\ninfo Scaffolding {light api} app {name my-api}\n    added: .gitignore\n    added: controllers/IndexController.js\n    added: index.js\n    added: package.json\n    added: README.md\nsuccess App {name my-api} created\ninfo Installing dependencies ...\nsuccess App {name my-api} ready. Please {light `robust serve`} it\n",mdxType:"ShellOutput"}),Object(r.b)("p",null,"Robust will set you up with what seems like a huge amount of stuff for such a tiny command! You've got the entire Robust directory structure now with all the code you need to run our simple API ",Object(r.b)("inlineCode",{parentName:"p"},"my-api")," application right out of the box."),Object(r.b)("p",null,"There are many available templates you can use for your application, each templates are designed to work to a particular type of application:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"api"),Object(r.b)("li",{parentName:"ul"},"console"),Object(r.b)("li",{parentName:"ul"},"mvc (coming soon)")),Object(r.b)("p",null,"For example, if you want to create a CLI application, please run"),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust new console <app-name>\n")),Object(r.b)("h3",{id:"22-robust-serve"},"2.2. ",Object(r.b)("inlineCode",{parentName:"h3"},"robust serve")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"robust serve")," command launches a web server. You'll use this any time you want to access your application through a web browser (eg: ",Object(r.b)("a",j({parentName:"p"},{href:"//localhost:3000"}),"localhost:3000"),")"),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{className:"language-shell"}),"robust serve\n")),Object(r.b)(O,{lines:"\ninfo Starting app {name my-api} on {light development} port {light 3000}\nsuccess App {name my-api} started\ninfo For more debug information, please run app with DEBUG=app*\n",mdxType:"ShellOutput"}),Object(r.b)("p",null,"The last message indicates how to show useful debug information like loaded modules, created routes, used ports, ... which is simple like:"),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"DEBUG=app* robust serve\n")),Object(r.b)(O,{lines:"\ninfo Starting app {name my-api} on {light development} port {light 3000}\n  {debug app my-api} routed  GET /  +0ms\n  {debug app my-api} loaded modules: ... +4ms\n  {debug app my-api} started in 0s 5.3134ms +1ms\nsuccess App {name my-api} started\n  app my-api started server on port 3000 +2ms\n",mdxType:"ShellOutput"}),Object(r.b)("p",null,"Default port is ",Object(r.b)("inlineCode",{parentName:"p"},"3000"),". You can run your application on a different port using the ",Object(r.b)("inlineCode",{parentName:"p"},"-p")," option. The default ",Object(r.b)("inlineCode",{parentName:"p"},"development")," environment can be changed using ",Object(r.b)("inlineCode",{parentName:"p"},"-e"),"."),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust serve -e production -p 5000\n")),Object(r.b)("h3",{id:"23-robust-add"},"2.3. ",Object(r.b)("inlineCode",{parentName:"h3"},"robust add")),Object(r.b)("p",null,"You can add new empty module to your application using ",Object(r.b)("inlineCode",{parentName:"p"},"robust add")," command, with the module name as paramter"),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust add module-01\n")),Object(r.b)(O,{lines:"\ninfo Scaffolding empty module module-01 to my-api\n   inject: package.json\n    added: modules/module-01/.gitignore\n    added: modules/module-01/index.js\n    added: modules/module-01/package.json\n",mdxType:"ShellOutput"}),Object(r.b)("p",null,"You can also select other modules' template like ",Object(r.b)("inlineCode",{parentName:"p"},"api"),", ",Object(r.b)("inlineCode",{parentName:"p"},"console"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mvc (coming soon)")),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust add api-module --as api\n")),Object(r.b)("h2",{id:"3-other-cli-commands"},"3. Other CLI commands"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Side-note: These commands are added as extensions from many other Robust modules\nFor more information on making CLI extensions, please see ",Object(r.b)("a",j({parentName:"p"},{href:"#4-extend-cli-commands"}),"Extend CLI commands"))),Object(r.b)("h3",{id:"31-robust-addcontroller"},"3.1. ",Object(r.b)("inlineCode",{parentName:"h3"},"robust add:controller")),Object(r.b)("p",null,"( Added by ",Object(r.b)("inlineCode",{parentName:"p"},"@robust/parse-controllers")," )"),Object(r.b)("p",null,"This command will create new controller for your application, for example adding ",Object(r.b)("inlineCode",{parentName:"p"},"TestController"),":"),Object(r.b)("pre",null,Object(r.b)("code",j({parentName:"pre"},{}),"robust add:controller test\n")),Object(r.b)(O,{lines:"\n    added: controllers/TestController.js\n",mdxType:"ShellOutput"}),Object(r.b)("p",null,"Then, after ",Object(r.b)("inlineCode",{parentName:"p"},"robust serve")," your application, you can access ",Object(r.b)("a",j({parentName:"p"},{href:"//localhost:3000/test"}),"localhost:3000/test")),Object(r.b)("h2",{id:"4-extend-cli-commands"},"4. Extend CLI commands"),Object(r.b)("p",null,"Coming soon"))}v.isMDXComponent=!0}}]);