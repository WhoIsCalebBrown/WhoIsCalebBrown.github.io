import{o as n,c as d,b as e,i as h,a as c,d as r,u as i,C as g,D as o,E as a}from"./index-DpRj76n7.js";import{r as f}from"./PhoneIcon-D82Avnlw.js";function x(m,s){return n(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"})])}function v(m,s){return n(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})])}const w={class:"relative isolate bg-raisin-black"},b={class:"mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"},y={class:"relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"},k={class:"mx-auto max-w-xl lg:mx-0 lg:max-w-lg"},_={class:"mt-10 space-y-4 text-base/7 text-gray-300"},V={class:"flex gap-x-4"},M={class:"flex-none"},E={class:"flex gap-x-4"},S={class:"flex-none"},U={class:"flex gap-x-4"},j={class:"flex-none"},C={class:"mx-auto max-w-xl lg:mr-0 lg:max-w-lg"},T={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},B={class:"mt-2.5"},N={class:"mt-2.5"},O={class:"sm:col-span-2"},Z={class:"mt-2.5"},z={class:"sm:col-span-2"},D={class:"mt-2.5"},F={class:"sm:col-span-2"},P={class:"mt-2.5"},A={__name:"Contact",setup(m){const s=h({"first-name":"","last-name":"",email:"","phone-number":"",message:""}),p=async u=>{try{const t=await fetch("https://jow6hm5wuc.execute-api.us-east-2.amazonaws.com/default/contactFormToEmail",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)});console.log("Response status:",t.status);const l=await t.text();if(console.log("Response body:",l),t.ok)alert("Message sent successfully!"),u.target.reset();else throw new Error(`Failed to send message: ${t.status}`)}catch(t){console.error("Error:",t),alert("Error sending message. Please try again later.")}};return(u,t)=>(n(),d("div",w,[e("div",b,[e("div",y,[e("div",k,[t[11]||(t[11]=c('<div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-purple-heart/5 lg:w-1/2"><svg class="absolute inset-0 size-full stroke-purple-heart/70 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true"><defs><pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"><path d="M130 200V.5M.5 .5H200" fill="none"></path></pattern></defs><svg x="100%" y="-1" class="overflow-visible fill-purple-heart/20"><path d="M-470.5 0h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"></rect></svg><div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true"><div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-purple-heart to-royal-purple opacity-20" style="clip-path:polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%);"></div></div></div><h2 class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get in touch</h2><p class="mt-6 text-lg/8 text-gray-300">Ready to start your fitness journey? Contact me to discuss your goals and how we can work together to achieve them.</p>',3)),e("dl",_,[e("div",V,[e("dt",M,[t[5]||(t[5]=e("span",{class:"sr-only"},"Address",-1)),r(i(x),{class:"h-7 w-6 text-purple-heart","aria-hidden":"true"})]),t[6]||(t[6]=e("dd",null,"Waterloo, ON",-1))]),e("div",E,[e("dt",S,[t[7]||(t[7]=e("span",{class:"sr-only"},"Telephone",-1)),r(i(f),{class:"h-7 w-6 text-purple-heart","aria-hidden":"true"})]),t[8]||(t[8]=e("dd",null,[e("a",{class:"hover:text-purple-heart",href:"tel:+1 (555) 234-5678"},"+1 (555) 234-5678")],-1))]),e("div",U,[e("dt",j,[t[9]||(t[9]=e("span",{class:"sr-only"},"Email",-1)),r(i(v),{class:"h-7 w-6 text-purple-heart","aria-hidden":"true"})]),t[10]||(t[10]=e("dd",null,[e("a",{class:"hover:text-purple-heart",href:"mailto:hello@lift-ed.com"},"hello@lift-ed.com")],-1))])])])]),e("form",{onSubmit:g(p,["prevent"]),class:"px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"},[e("div",C,[e("div",T,[e("div",null,[t[12]||(t[12]=e("label",{for:"first-name",class:"block text-sm/6 font-semibold text-white"},"First name",-1)),e("div",B,[o(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>s.value["first-name"]=l),type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"},null,512),[[a,s.value["first-name"]]])])]),e("div",null,[t[13]||(t[13]=e("label",{for:"last-name",class:"block text-sm/6 font-semibold text-white"},"Last name",-1)),e("div",N,[o(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>s.value["last-name"]=l),type:"text",name:"last-name",id:"last-name",autocomplete:"family-name",class:"block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"},null,512),[[a,s.value["last-name"]]])])]),e("div",O,[t[14]||(t[14]=e("label",{for:"email",class:"block text-sm/6 font-semibold text-white"},"Email",-1)),e("div",Z,[o(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.email=l),type:"email",name:"email",id:"email",autocomplete:"email",class:"block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"},null,512),[[a,s.value.email]])])]),e("div",z,[t[15]||(t[15]=e("label",{for:"phone-number",class:"block text-sm/6 font-semibold text-white"},"Phone number",-1)),e("div",D,[o(e("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>s.value["phone-number"]=l),type:"tel",name:"phone-number",id:"phone-number",autocomplete:"tel",class:"block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"},null,512),[[a,s.value["phone-number"]]])])]),e("div",F,[t[16]||(t[16]=e("label",{for:"message",class:"block text-sm/6 font-semibold text-white"},"Message",-1)),e("div",P,[o(e("textarea",{"onUpdate:modelValue":t[4]||(t[4]=l=>s.value.message=l),name:"message",id:"message",rows:"4",class:"block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"},null,512),[[a,s.value.message]])])])]),t[17]||(t[17]=e("div",{class:"mt-8 flex justify-end"},[e("button",{type:"submit",class:"rounded-md bg-purple-heart px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-royal-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart"},"Send message")],-1))])],32)])]))}};export{A as default};