"use strict";(self.webpackChunkcntug=self.webpackChunkcntug||[]).push([[5381],{832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=t(5893),s=t(1151);const r={sidebar_position:7,description:"2022.12.20 (\u4e8c) 19:00 ~ 20:00 | \u7dda\u4e0a"},a="SDN x Cloud Native Meetup #45",o={id:"meetups/2022/20220225",title:"SDN x Cloud Native Meetup #45",description:"2022.12.20 (\u4e8c) 19:00 ~ 20:00 | \u7dda\u4e0a",source:"@site/docs/meetups/2022/20220225.md",sourceDirName:"meetups/2022",slug:"/meetups/2022/20220225",permalink:"/docs/meetups/2022/20220225",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/meetups/2022/20220225.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"2022.12.20 (\u4e8c) 19:00 ~ 20:00 | \u7dda\u4e0a"},sidebar:"meetupSidebar",previous:{title:"SDN x Cloud Native Meetup #46",permalink:"/docs/meetups/2022/20220328"},next:{title:"SDN x Cloud Native Meetup #44",permalink:"/docs/meetups/2022/20220121"}},d={},u=[{value:"\u6d41\u7a0b / Agenda",id:"\u6d41\u7a0b--agenda",level:2},{value:"\u8b70\u7a0b / Sessions",id:"\u8b70\u7a0b--sessions",level:2}];function l(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sdn-x-cloud-native-meetup-45",children:"SDN x Cloud Native Meetup #45"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6642\u9593: Friday, February 25, 2022 at 5:00 AM to Friday, February 25, 2022 at 8:00 AM CST"}),"\n",(0,i.jsx)(n.li,{children:"\u5730\u9ede: \u7dda\u4e0a"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6d41\u7a0b--agenda",children:"\u6d41\u7a0b / Agenda"}),"\n",(0,i.jsx)(n.p,{children:"19:05 - 19:35 Talk 1: \u95dc\u65bc\u6211\u60f3\u7701\u9322\u7d50\u679c\u8dcc\u5165VPP\u5927\u5751\u7684\u9019\u6a94\u4e8b"}),"\n",(0,i.jsx)(n.p,{children:"19:35 - 19:45 Talk 1 QA Time"}),"\n",(0,i.jsx)(n.p,{children:"19:45 - 20:15 Talk 2: Introduction to Aquarium"}),"\n",(0,i.jsx)(n.p,{children:"20:15 - 20:25 Talk 2 QA Time"}),"\n",(0,i.jsx)(n.p,{children:"20:25 - 21:00 \u81ea\u7531\u4ea4\u6d41\u6642\u9593"}),"\n",(0,i.jsx)(n.h2,{id:"\u8b70\u7a0b--sessions",children:"\u8b70\u7a0b / Sessions"}),"\n",(0,i.jsx)(n.p,{children:"Talk 1: \u95dc\u65bc\u6211\u60f3\u7701\u9322\u7d50\u679c\u8dcc\u5165VPP\u5927\u5751\u7684\u9019\u6a94\u4e8b"}),"\n",(0,i.jsx)(n.p,{children:"kernel bypass\u662f\u89e3\u6c7a\u7cfb\u7d71\u7db2\u7d61\u68e7\u548c\u6027\u80fd\u74f6\u9838\u7684\u53e6\u5916\u4e00\u7a2e\u65b9\u5f0f\uff0c\u8207\u50b3\u7d71\u7684\u4e2d\u65b7\u6a5f\u5236\u4e0d\u540c\uff0ckernel bypass\u7684\u6838\u5fc3\u601d\u60f3\u662f\uff1a\u6240\u6709\u6578\u64da\u6d41\u76f8\u95dc\u64cd\u4f5c\u90fd\u5728userspace\u9032\u884c\u8655\u7406\uff0c\u5f9e\u800c\u907f\u514dkernel\u7684\u8cc7\u6599\u8907\u88fd\u3001\u7dda\u7a0b\u8abf\u5ea6\u3001\u7cfb\u7d71\u8abf\u7528\u3001\u4e2d\u65b7\u7b49\u6027\u80fd\u74f6\u9838\uff0c\u4e26\u8f14\u4ee5\u5404\u7a2e\u6027\u80fd\u8abf\u512a\u624b\u6bb5\uff0c\u5f9e\u800c\u9054\u5230\u66f4\u9ad8\u7684\u6027\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"KSKB\u662f\u4e00\u540d\u83dc\u83dc\u5b78\u751f\uff0c\u5e73\u65e5\u559c\u6b61\u6298\u9a30\u5404\u7a2e\u7cfb\u7d71\u3002\u807d\u805eAzure\u4e0a\u6709\u514d\u8cbb\u5bb9\u5668\uff0c\u60f3\u8981\u5728\u4e0a\u9762\u904b\u884cDN42\u7bc0\u9ede\u3002\u4f46\u7121\u7279\u6b0a\u5bb9\u5668\u6c92\u6709DN42\u6240\u9700\u7684kernel\u6b0a\u9650\uff0c\u6240\u4ee5\u60f3\u7528kernel bypass\u7684\u6280\u5de7\u4f86\u4f7f\u4e4b\u904b\u4f5c\uff0c\u5f9e\u6b64\u8dcc\u5165VPP\u5927\u5751\u3002\u4eca\u65e5\u4f86CNTUG\u5411\u5927\u5bb6\u91ce\u4eba\u737b\u66ddKSKB\u7684\u586b\u5751\u8def\u7a0b\uff0c\u5e0c\u671b\u548c\u5927\u5bb6\u4e00\u8d77\u5b78\u7fd2!"}),"\n",(0,i.jsx)(n.p,{children:"\u8b1b\u5e2b\u540d: KusakabeSi"}),"\n",(0,i.jsx)(n.p,{children:"\u8b1b\u5e2b\u7c21\u4ecb: \u662f\u5b78\u751f\uff0c\u5b78\u7fd2\u4e2d\uff0c\u9084\u6709\u597d\u591a\u6771\u897f\u4e0d\u6703\uff0c\u975e\u5e38\u83dc\uff0c\u9700\u8981\u6f86\u6f86"}),"\n",(0,i.jsx)(n.p,{children:"======================================================================"}),"\n",(0,i.jsx)(n.p,{children:"Talk 2: Introduction to Aquarium"}),"\n",(0,i.jsx)(n.p,{children:"Ceph Appliance with easy to use UI"}),"\n",(0,i.jsx)(n.p,{children:"\u8b1b\u5e2b\uff1aAlex Lau (AvengerMoJo)"}),"\n",(0,i.jsx)(n.p,{children:"\u8b1b\u5e2b\u7c21\u4ecb\uff1aAvengerMoJo received his Software Computer Science degree at University of North Texas in 1999. Nortel Network software engineer was his first job, then he moved to China. He became the R&D Site manager for SUSE Linux in Beijing and Taiwan in 2008 and moved to Taiwan in 2012 as CTO for Symbio\u2019s Mobile unit. Working as consultant for multiple enterprise and startup, he focus in ceph distributed file system for SUSE, BCOS for WeBank, CVM and Lity for Cybermiles, Chatbot and Ai for LiMaGo and Finance product with BlockChain for MyInnovate - HaveFund."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);