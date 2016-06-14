webpackJsonp([106,359],{709:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(22),a(21)),o=t(p),e=(a(6),a(5)),c=t(e),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u9009\u62e9\u540e\u8fdb\u884c\u64cd\u4f5c\uff0c\u5b8c\u6210\u540e\u6e05\u7a7a\u9009\u62e9\uff0c\u901a\u8fc7 ",["code","rowSelection.selectedRowKeys"]," \u6765\u63a7\u5236\u9009\u4e2d\u9879\u3002"]],meta:{order:2,title:"\u9009\u62e9\u548c\u64cd\u4f5c",filename:"components/table/demo/row-selection-and-operation.md",id:"components-table-demo-row-selection-and-operation"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >46</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  data<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> i<span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u674e\u5927\u5634</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n    age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n    address<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\u53f7`</span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      selectedRowKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>  <span class="token comment" spellcheck="true">// \u8fd9\u91cc\u914d\u7f6e\u9ed8\u8ba4\u52fe\u9009\u5217</span>\n      loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >start</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// \u6a21\u62df ajax \u8bf7\u6c42\uff0c\u5b8c\u6210\u540e\u6e05\u7a7a</span>\n    <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        selectedRowKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSelectChange</span><span class="token punctuation" >(</span>selectedRowKeys<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'selectedRowKeys changed: \'</span><span class="token punctuation" >,</span> selectedRowKeys<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> selectedRowKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >,</span> selectedRowKeys <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> rowSelection <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      selectedRowKeys<span class="token punctuation" >,</span>\n      onChange<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>onSelectChange<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> hasSelected <span class="token operator" >=</span> selectedRowKeys<span class="token punctuation" >.</span>length <span class="token operator" >></span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>start<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >!</span>hasSelected<span class="token punctuation" >}</span></span> <span class="token attr-name" >loading</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>loading<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>hasSelected <span class="token operator" >?</span> <span class="token template-string" ><span class="token string" >`\u9009\u62e9\u4e86 </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>selectedRowKeys<span class="token punctuation" >.</span>length<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u4e2a\u5bf9\u8c61`</span></span> <span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >rowSelection</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>rowSelection<span class="token punctuation" >}</span></span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){for(var n=[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u5e74\u9f84",dataIndex:"age"},{title:"\u4f4f\u5740",dataIndex:"address"}],s=[],a=0;46>a;a++)s.push({key:a,name:"\u674e\u5927\u5634"+a,age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed"+a+"\u53f7"});var t=l["default"].createClass({displayName:"App",getInitialState:function(){return{selectedRowKeys:[],loading:!1}},start:function(){var n=this;this.setState({loading:!0}),setTimeout(function(){n.setState({selectedRowKeys:[],loading:!1})},1e3)},onSelectChange:function(n){console.log("selectedRowKeys changed: ",n),this.setState({selectedRowKeys:n})},render:function(){var a=this.state,t=a.loading,p=a.selectedRowKeys,e={selectedRowKeys:p,onChange:this.onSelectChange},u=p.length>0;return l["default"].createElement("div",null,l["default"].createElement("div",{style:{marginBottom:16}},l["default"].createElement(c["default"],{type:"primary",onClick:this.start,disabled:!u,loading:t},"\u64cd\u4f5c"),l["default"].createElement("span",{style:{marginLeft:8}},u?"\u9009\u62e9\u4e86 "+p.length+" \u4e2a\u5bf9\u8c61":"")),l["default"].createElement(o["default"],{rowSelection:e,columns:n,dataSource:s}))}});return l["default"].createElement(t,null)}}}});