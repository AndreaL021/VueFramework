import{_ as h,c as d,b as a,t as r,w as u,v as c,d as y,f as w,h as x,T as p,g,n as I,a as V,o as n,i as B,j as C,k,F as v,r as F}from"./index-Bg8QsS1F.js";const S={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},items:{type:Array,default:[]},itemText:{type:String,default:null},itemValue:{type:String,default:null},width:{type:String,default:"auto"},rounded:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},outlined:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},search:{type:Boolean,default:!0}},data(){return{isFocused:!1,model:"",filteredItems:[],dropdown:!1,isClickingDropdownItem:!1}},mounted(){!this.itemText&&!this.itemValue&&(this.model=this.modelValue),this.filteredItems=Array.from(this.items)},watch:{items(e){e&&(this.filteredItems=Array.from(e))},modelValue(e){e&&this.search&&this.filtra()}},computed:{isValuePresent(){return this.model!==null&&this.model!==void 0&&this.model!==""}},methods:{filtra(){this.itemText&&this.itemValue?this.filteredItems=this.items.filter(e=>e[this.itemText].toString().toLowerCase().includes(this.model.toString().toLowerCase())):this.filteredItems=this.items.filter(e=>e.toString().toLowerCase().includes(this.model.toString().toLowerCase()))},selectItem(e,t){t&&(e=""),!this.itemValue&&!this.itemText?this.model=e:this.model=e[this.itemText],this.$emit("update:modelValue",this.itemValue?e[this.itemValue]:e),this.$emit("change"),this.dropdown=!1,this.isClickingDropdownItem=!1},onFocus(){this.$refs.Input.focus(),this.isFocused=!0,this.dropdown=!0,this.filteredItems=Array.from(this.items)},onBlur(){this.isClickingDropdownItem||(this.isFocused=!1,this.dropdown=!1,this.itemText?this.model=this.filteredItems.find(e=>e[this.itemValue]==this.modelValue)?this.filteredItems.find(e=>e[this.itemValue]==this.modelValue)[this.itemText]:"":this.model=this.modelValue)},onDropdownMouseDown(){this.isClickingDropdownItem=!0}}},T=["readonly"],D=["onClick"];function b(e,t,s,A,o,i){const m=V("fa-i");return n(),d("div",{class:g(["input-container",{focused:o.isFocused,value:i.isValuePresent,outlined:s.outlined,rounded:s.rounded}]),style:I({width:s.width,height:"24px",padding:s.clearable&&!s.readonly?"5px 30px 5px 5px":"5px 5px 5px 5px"}),onBlur:t[7]||(t[7]=(...l)=>i.onBlur&&i.onBlur(...l))},[a("span",{onClick:t[0]||(t[0]=(...l)=>i.onFocus&&i.onFocus(...l)),class:"label"},r(s.label),1),u(a("input",{ref:"Input",style:{width:"100%","padding-left":"0","margin-top":"10px"},type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>o.model=l),readonly:s.readonly||!s.search,onInput:t[2]||(t[2]=l=>i.filtra()),onFocus:t[3]||(t[3]=(...l)=>i.onFocus&&i.onFocus(...l)),onBlur:t[4]||(t[4]=(...l)=>i.onBlur&&i.onBlur(...l))},null,40,T),[[c,o.model]]),y(e.$slots,"appendIcon",{},()=>[s.clearable&&!s.readonly&&o.model?(n(),B(m,{key:0,onClick:t[5]||(t[5]=l=>(i.onFocus,i.selectItem(o.model,!0))),icon:"fa-solid fa-circle-xmark",class:"appendIcon",size:s.outlined?"lg":null},null,8,["size"])):C("",!0)],!0),w(p,{name:"fade",appear:""},{default:x(()=>[u(a("div",{class:"item-container",style:{width:"100%"},onMousedown:t[6]||(t[6]=(...l)=>i.onDropdownMouseDown&&i.onDropdownMouseDown(...l))},[(n(!0),d(v,null,F(o.filteredItems,(l,f)=>(n(),d("div",{key:f,class:"item",onClick:L=>i.selectItem(l)},r(s.itemText!=null?l[s.itemText]:l),9,D))),128))],544),[[k,o.dropdown&&!s.readonly]])]),_:1})],38)}const z=h(S,[["render",b],["__scopeId","data-v-01e25993"]]);export{z as default};
