import{a as P,j as u}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import{P as e}from"./index-8d47fad6.js";import{I}from"./IconCross-7d58d73f.js";import"./_commonjsHelpers-de833af9.js";const s=({primary:T,backgroundColor:n,size:h,label:v,icon:B,variant:l,...C})=>{console.log(l);const _=i=>{console.log("modeClass = (variant) ==== ",i);let r;switch(i){case"primary":r="storybook-button--primary";break;case"secondary":r="storybook-button--secondary";break;default:r="storybook-button--primary";break}return{btnModeClass:r}};return P("button",{type:"button",className:["storybook-button",`storybook-button--${h}`,_(l).btnModeClass].join(" "),style:n&&{backgroundColor:n},...C,children:[B&&u("div",{className:"flex border-2 rounded-full p-1 mr-2",children:u(I,{})}),v]})};s.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};s.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"ButtonTailwind",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}};const V={title:"Example/ButtonTailwind",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},variant:{options:["primary","secondary"],control:{type:"radio"}}}},o={args:{variant:"primary",primary:!0,icon:!1,label:"Button"}},a={args:{primary:!0,icon:!0,label:"Button"}},t={args:{label:"Button",icon:!1}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    primary: true,
    icon: false,
    label: "Button"
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,y,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    icon: true,
    label: "Button"
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Button",
    icon: false
  }
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const z=["Primary","Primary_With_Icon","Secondary"];export{o as Primary,a as Primary_With_Icon,t as Secondary,z as __namedExportsOrder,V as default};
