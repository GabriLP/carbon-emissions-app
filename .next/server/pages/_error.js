"use strict";(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4258:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>h,reportWebVitals:()=>x,routeModule:()=>C,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var n=r(7093),i=r(5244),o=r(1323),s=r(687),l=r.n(s),d=r(5551),c=r(1879),u=e([d]);d=(u.then?(await u)():u)[0];let p=(0,o.l)(c,"default"),h=(0,o.l)(c,"getStaticProps"),m=(0,o.l)(c,"getStaticPaths"),g=(0,o.l)(c,"getServerSideProps"),f=(0,o.l)(c,"config"),x=(0,o.l)(c,"reportWebVitals"),y=(0,o.l)(c,"unstable_getStaticProps"),b=(0,o.l)(c,"unstable_getStaticPaths"),j=(0,o.l)(c,"unstable_getStaticParams"),v=(0,o.l)(c,"unstable_getServerProps"),P=(0,o.l)(c,"unstable_getServerSideProps"),C=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:c});a()}catch(e){a(e)}})},1879:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let a=r(167),n=a._(r(6689)),i=a._(r(650)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:r}=e,a=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:a}}let l={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends n.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return n.default.createElement("div",{style:l.error},n.default.createElement(i.default,null,n.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),n.default.createElement("div",{style:l.desc},n.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?n.default.createElement("h1",{className:"next-error-h1",style:l.h1},e):null,n.default.createElement("div",{style:l.wrap},n.default.createElement("h2",{style:l.h2},this.props.title||e?r:n.default.createElement(n.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=s,Error.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5980:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{T:()=>c,h:()=>d});var n=r(5184),i=r(6022),o=r(9166),s=r(5103),l=e([o,s]);[o,s]=l.then?(await l)():l;let d=(0,n.configureStore)({reducer:{emissions:o.ZP,countries:s.Z}}),c=()=>(0,i.useDispatch)();a()}catch(e){a(e)}})},8469:(e,t,r)=>{r.d(t,{Z:()=>G});var a=r(997),n=r(6689),i=r(5675),o=r.n(i),s=r(4851),l=r(4117),d=r(3389),c=r.n(d),u=r(713),p=r.n(u),h=r(9285),m=r(4904),g=r.n(m),f=r(6096),x=r.n(f),y=r(1664),b=r.n(y),j=r(6024),v=r.n(j),P=r(8369),C=r.n(P),S=r(5419),E=r.n(S),A=r(7886),_=r.n(A),q=r(2233),w=r.n(q),k=r(3365),F=r.n(k),T=r(4173),Z=r.n(T);let I=()=>{let e=(0,s.Z)(),[t,r]=(0,n.useState)(!1),i=(0,l.Z)(e.breakpoints.down("md")),o=()=>{r(!t)};return(0,a.jsxs)(a.Fragment,{children:[i&&a.jsx(v(),{edge:"start",color:"inherit","aria-label":"menu",onClick:o,style:{zIndex:1300},children:t?a.jsx(Z(),{}):a.jsx(F(),{})}),a.jsx(C(),{anchor:"right",open:t,onClose:o,children:(0,a.jsxs)(E(),{sx:{paddingTop:10},children:[a.jsx(b(),{href:"/",passHref:!0,children:a.jsx(_(),{onClick:o,children:"Emissions By Country"})}),a.jsx(w(),{variant:"middle"}),a.jsx(b(),{href:"/coordinate",passHref:!0,children:a.jsx(_(),{onClick:o,children:"Emission By Coordinates"})}),a.jsx(w(),{variant:"middle"}),a.jsx(b(),{href:"/educational",passHref:!0,children:a.jsx(_(),{onClick:o,children:"Educational Content"})}),a.jsx(w(),{variant:"middle"})]})})]})},G=()=>{let e=(0,s.Z)(),t=(0,l.Z)(e.breakpoints.down("md"));return a.jsx(c(),{position:"static",children:(0,a.jsxs)(p(),{children:[(0,a.jsxs)(h.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center","& .logo-container":{marginRight:e.spacing(1),width:56,height:56,position:"relative"}},children:[a.jsx(h.Z,{className:"logo-container",children:a.jsx(o(),{src:"/logo.png",alt:"Logo",width:56,height:56})}),a.jsx(g(),{variant:"h6",children:"GlobalEmissions"})]}),!t&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(b(),{href:"/",passHref:!0,children:a.jsx(x(),{color:"inherit",children:"Country Selection"})}),a.jsx(b(),{href:"/coordinate",passHref:!0,children:a.jsx(x(),{color:"inherit",children:"Coordinate Check"})}),a.jsx(b(),{href:"/educational",passHref:!0,children:a.jsx(x(),{color:"inherit",children:"Educational Content"})})]}),t&&a.jsx(I,{})]})})}},8107:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(997);r(6689);var n=r(2791),i=r(4643),o=r.n(i),s=r(9285),l=r(4904),d=r.n(l),c=r(6096),u=r.n(c);let p=({onComplete:e})=>(0,a.jsxs)(o(),{maxWidth:"sm",children:[(0,a.jsxs)(n.Helmet,{children:[a.jsx("title",{children:"Welcome | GlobalEmissions"}),a.jsx("meta",{name:"description",content:"Explore and analyze data on carbon monoxide, ozone, and methane emissions globally, either by country or specific coordinates."})]}),(0,a.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(d(),{variant:"h4",gutterBottom:!0,children:"Welcome to the Global Emissions Tracker"}),a.jsx(d(),{variant:"body1",paragraph:!0,children:"Explore and analyze data on carbon monoxide, ozone, and methane emissions globally, either by country or specific coordinates."}),a.jsx(u(),{variant:"contained",color:"primary",onClick:e,children:"Get Started"})]})]})},1083:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{t:()=>d});var n=r(5184),i=r(9648),o=r(8160),s=r.n(o),l=e([i]);i=(l.then?(await l)():l)[0];let d=(0,n.createAsyncThunk)("country/fetchCountries",async(e,{rejectWithValue:t})=>{try{let e=await i.default.get("https://datahub.io/core/country-list/r/data.csv"),t=await s()().fromString(e.data);return t.map(e=>({name:e.Name,code:e.Code}))}catch(e){return t("Error fetching countries")}});a()}catch(e){a(e)}})},5103:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>l});var n=r(5184),i=r(1083),o=e([i]);i=(o.then?(await o)():o)[0];let s=(0,n.createSlice)({name:"countries",initialState:{list:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(i.t.pending,e=>{e.loading=!0,e.error=null}),e.addCase(i.t.fulfilled,(e,t)=>{e.list=t.payload,e.loading=!1}),e.addCase(i.t.rejected,(e,t)=>{e.error=t.payload,e.loading=!1})}}),l=s.reducer;a()}catch(e){a(e)}})},1697:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{F:()=>d,U:()=>l});var n=r(9648),i=r(5184),o=e([n]);n=(o.then?(await o)():o)[0];let s="https://api.v2.emissions-api.org/api/v2",l=(0,i.createAsyncThunk)("emissions/fetchByCountry",async({country:e,startDate:t,endDate:r,product:a},i)=>{try{let i=await n.default.get(`${s}/${a}/average.json`,{params:{country:e,begin:t,end:r}});return i.data}catch(e){if(n.default.isAxiosError(e)){let t=e.response?.data?.message||`Failed to fetch ${a} for the country. Please try again.`;return i.rejectWithValue(t)}return i.rejectWithValue("An unexpected error occurred. Please try again.")}}),d=(0,i.createAsyncThunk)("emissions/fetchByCoordinates",async({lat:e,lng:t,startDate:r,endDate:a,product:i},o)=>{try{let o=`${t},${e}`,l=await n.default.get(`${s}/${i}/average.json`,{params:{point:o,begin:r,end:a}});return l.data}catch(e){if(n.default.isAxiosError(e)){let t=e.response?.data?.message||`Failed to fetch data for ${i} at the coordinates. Please try again.`;return o.rejectWithValue(t)}return o.rejectWithValue("An unexpected error occurred. Please try again.")}});a()}catch(e){a(e)}})},9166:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{ZP:()=>l,dm:()=>d});var n=r(5184),i=r(1697),o=e([i]);i=(o.then?(await o)():o)[0];let s=(0,n.createSlice)({name:"emissions",initialState:{data:[],loading:!1,error:null},reducers:{resetEmissionsData:e=>{e.data=[],e.error=null,e.loading=!1}},extraReducers:e=>{e.addCase(i.U.pending,e=>{e.loading=!0,e.error=null}).addCase(i.U.fulfilled,(e,t)=>{e.data=t.payload.sort((e,t)=>{let r=new Date(e.start).getTime(),a=new Date(t.start).getTime();return r-a}),e.loading=!1}).addCase(i.U.rejected,(e,t)=>{e.error=t.error.message||"Failed to fetch emissions by country",e.loading=!1}).addCase(i.F.pending,e=>{e.loading=!0,e.error=null}).addCase(i.F.fulfilled,(e,t)=>{e.data=t.payload.sort((e,t)=>{let r=new Date(e.start).getTime(),a=new Date(t.start).getTime();return r-a}),e.loading=!1}).addCase(i.F.rejected,(e,t)=>{e.error=t.error.message||"Failed to fetch emissions by coordinates",e.loading=!1})}}),l=s.reducer,{resetEmissionsData:d}=s.actions;a()}catch(e){a(e)}})},5551:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>g});var n=r(997),i=r(6689),o=r(8442),s=r(4960),l=r.n(s),d=r(8469),c=r(2261),u=r(6022),p=r(5980),h=r(8107),m=e([p]);p=(m.then?(await m)():m)[0];let g=function({Component:e,pageProps:t}){let[r,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e="true"===localStorage.getItem("onboardingCompleted");a(e)},[]),n.jsx(u.Provider,{store:p.h,children:(0,n.jsxs)(o.ThemeProvider,{theme:c.Z,children:[n.jsx(l(),{}),n.jsx(d.Z,{}),r?n.jsx(e,{...t}):n.jsx(h.Z,{onComplete:()=>{a(!0),localStorage.setItem("onboardingCompleted","true")}})]})})};a()}catch(e){a(e)}})},2261:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(8442);let n=(0,a.createTheme)({palette:{primary:{main:"#4CAF50"},secondary:{main:"#2196F3"},error:{main:"#F44336"},background:{default:"#FAFAFA"},text:{primary:"#263238"},accent:{main:"#795548"}},typography:{fontFamily:"Roboto, Lato, Arial, sans-serif"},components:{MuiCssBaseline:{styleOverrides:`
        a {
          color: inherit;
          text-decoration: none;
        }
      `},MuiListItemButton:{styleOverrides:{root:{fontFamily:"Roboto, Lato, Arial, sans-serif","&:hover":{backgroundColor:"#e0e0e0"}}}}},spacing:8,breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}}}),i=n},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},3013:e=>{e.exports=require("@mui/base")},7123:e=>{e.exports=require("@mui/base/ClassNameGenerator")},7483:e=>{e.exports=require("@mui/base/FocusTrap")},8951:e=>{e.exports=require("@mui/base/Portal")},9295:e=>{e.exports=require("@mui/base/composeClasses")},5194:e=>{e.exports=require("@mui/base/unstable_useModal")},4173:e=>{e.exports=require("@mui/icons-material/Close")},3365:e=>{e.exports=require("@mui/icons-material/Menu")},4960:e=>{e.exports=require("@mui/material/CssBaseline")},8442:e=>{e.exports=require("@mui/material/styles")},7986:e=>{e.exports=require("@mui/system")},657:e=>{e.exports=require("@mui/utils")},5184:e=>{e.exports=require("@reduxjs/toolkit")},8103:e=>{e.exports=require("clsx")},8160:e=>{e.exports=require("csvtojson")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},6022:e=>{e.exports=require("react-redux")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},9648:e=>{e.exports=import("axios")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[268,872,687],()=>r(4258));module.exports=a})();