webpackJsonp([276,359],{535:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(70),s(69)),e=t(p),o=(s(9),s(7)),c=t(o),l=(s(20),s(19)),u=t(l),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u4e0b\u62c9\u83dc\u5355\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/dropdown/demo/basic.md",id:"components-dropdown-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Dropdown<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> menu <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >target</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>_blank<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>http://www.alipay.com/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >target</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>_blank<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>http://www.taobao.com/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >target</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>_blank<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>http://www.tmall.com/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Dropdown</span> <span class="token attr-name" >overlay</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>menu<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-dropdown-link<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      \u89e6\u53d1\u94fe\u63a5 <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>down<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Dropdown</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createElement(u["default"],null,i["default"].createElement(u["default"].Item,null,i["default"].createElement("a",{target:"_blank",href:"http://www.alipay.com/"},"\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879")),i["default"].createElement(u["default"].Item,null,i["default"].createElement("a",{target:"_blank",href:"http://www.taobao.com/"},"\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879")),i["default"].createElement(u["default"].Item,null,i["default"].createElement("a",{target:"_blank",href:"http://www.tmall.com/"},"\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879")));return i["default"].createElement(e["default"],{overlay:n},i["default"].createElement("a",{className:"ant-dropdown-link",href:"#"},"\u89e6\u53d1\u94fe\u63a5 ",i["default"].createElement(c["default"],{type:"down"})))}}}});