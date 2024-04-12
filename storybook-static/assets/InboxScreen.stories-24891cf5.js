import{j as s,a as o}from"./jsx-runtime-29545a09.js";import{r as w}from"./index-76fb7be0.js";import{u as g,a as x,f as k,T as v,P as y,s as b,M as T}from"./TaskList.stories-6997eb9b.js";import{r as E}from"./index-03d05a58.js";import{w as S,a as I,b as j,f as i}from"./index-56fed4a1.js";import"./_commonjsHelpers-de833af9.js";import"./Task.stories-1e0ab09a.js";import"./index-8d47fad6.js";function u(){const a=g(),{error:e}=x(t=>t.taskbox);return w.useEffect(()=>{a(k())},[]),e?s("div",{className:"page lists-show",children:o("div",{className:"wrapper-message",children:[s("span",{className:"icon-face-sad"}),s("p",{className:"title-message",children:"Oh no!"}),s("p",{className:"subtitle-message",children:"Something went wrong"})]})}):o("div",{className:"page lists-show",children:[s("nav",{children:s("h1",{className:"title-page",children:"Taskbox"})}),s(v,{})]})}u.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};var f=E();const O={component:u,title:"InboxScreen",decorators:[a=>s(y,{store:b,children:a()})],tags:["autodocs"]},r={parameters:{msw:{handlers:[f.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(a,e,t)=>e(t.json(T.tasks)))]}},play:async({canvasElement:a})=>{const e=S(a);await I(await e.findByTestId("loading")),await j(async()=>{await i.click(e.getByLabelText("pinTask-1")),await i.click(e.getByLabelText("pinTask-3"))})}},n={parameters:{msw:{handlers:[f.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(a,e,t)=>e(t.status(403)))]}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const P=["Default","Error"];export{r as Default,n as Error,P as __namedExportsOrder,O as default};
