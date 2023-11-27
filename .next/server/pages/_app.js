"use strict";(()=>{var e={};e.id=888,e.ids=[888],e.modules={5980:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{T:()=>c,h:()=>d});var s=t(5184),i=t(6022),n=t(9166),o=t(5103),l=e([n,o]);[n,o]=l.then?(await l)():l;let d=(0,s.configureStore)({reducer:{emissions:n.ZP,countries:o.Z}}),c=()=>(0,i.useDispatch)();a()}catch(e){a(e)}})},8469:(e,r,t)=>{t.d(r,{Z:()=>D});var a=t(997),s=t(6689),i=t(5675),n=t.n(i),o=t(4851),l=t(4117),d=t(3389),c=t.n(d),u=t(713),m=t.n(u),h=t(9285),x=t(4904),p=t.n(x),g=t(6096),y=t.n(g),j=t(1664),f=t.n(j),C=t(6024),v=t.n(C),b=t(8369),q=t.n(b),w=t(5419),F=t.n(w),k=t(7886),Z=t.n(k),E=t(2233),T=t.n(E),A=t(3365),S=t.n(A),P=t(4173),B=t.n(P);let $=()=>{let e=(0,o.Z)(),[r,t]=(0,s.useState)(!1),i=(0,l.Z)(e.breakpoints.down("md")),n=()=>{t(!r)};return(0,a.jsxs)(a.Fragment,{children:[i&&a.jsx(v(),{edge:"start",color:"inherit","aria-label":"menu",onClick:n,style:{zIndex:1300},children:r?a.jsx(B(),{}):a.jsx(S(),{})}),a.jsx(q(),{anchor:"right",open:r,onClose:n,children:(0,a.jsxs)(F(),{sx:{paddingTop:10},children:[a.jsx(f(),{href:"/",passHref:!0,children:a.jsx(Z(),{onClick:n,children:"Emissions By Country"})}),a.jsx(T(),{variant:"middle"}),a.jsx(f(),{href:"/coordinate",passHref:!0,children:a.jsx(Z(),{onClick:n,children:"Emission By Coordinates"})}),a.jsx(T(),{variant:"middle"}),a.jsx(f(),{href:"/educational",passHref:!0,children:a.jsx(Z(),{onClick:n,children:"Educational Content"})}),a.jsx(T(),{variant:"middle"})]})})]})},D=()=>{let e=(0,o.Z)(),r=(0,l.Z)(e.breakpoints.down("md"));return a.jsx(c(),{position:"static",children:(0,a.jsxs)(m(),{children:[(0,a.jsxs)(h.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center","& .logo-container":{marginRight:e.spacing(1),width:56,height:56,position:"relative"}},children:[a.jsx(h.Z,{className:"logo-container",children:a.jsx(n(),{src:"/logo.png",alt:"Logo",width:56,height:56})}),a.jsx(p(),{variant:"h6",children:"GlobalEmissions"})]}),!r&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(f(),{href:"/",passHref:!0,children:a.jsx(y(),{color:"inherit",children:"Country Selection"})}),a.jsx(f(),{href:"/coordinate",passHref:!0,children:a.jsx(y(),{color:"inherit",children:"Coordinate Check"})}),a.jsx(f(),{href:"/educational",passHref:!0,children:a.jsx(y(),{color:"inherit",children:"Educational Content"})})]}),r&&a.jsx($,{})]})})}},8107:(e,r,t)=>{t.d(r,{Z:()=>m});var a=t(997);t(6689);var s=t(2791),i=t(4643),n=t.n(i),o=t(9285),l=t(4904),d=t.n(l),c=t(6096),u=t.n(c);let m=({onComplete:e})=>(0,a.jsxs)(n(),{maxWidth:"sm",children:[(0,a.jsxs)(s.Helmet,{children:[a.jsx("title",{children:"Welcome | GlobalEmissions"}),a.jsx("meta",{name:"description",content:"Explore and analyze data on carbon monoxide, ozone, and methane emissions globally, either by country or specific coordinates."})]}),(0,a.jsxs)(o.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(d(),{variant:"h4",gutterBottom:!0,children:"Welcome to the Global Emissions Tracker"}),a.jsx(d(),{variant:"body1",paragraph:!0,children:"Explore and analyze data on carbon monoxide, ozone, and methane emissions globally, either by country or specific coordinates."}),a.jsx(u(),{variant:"contained",color:"primary",onClick:e,children:"Get Started"})]})]})},1083:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{t:()=>d});var s=t(5184),i=t(9648),n=t(8160),o=t.n(n),l=e([i]);i=(l.then?(await l)():l)[0];let d=(0,s.createAsyncThunk)("country/fetchCountries",async(e,{rejectWithValue:r})=>{try{let e=await i.default.get("https://datahub.io/core/country-list/r/data.csv"),r=await o()().fromString(e.data);return r.map(e=>({name:e.Name,code:e.Code}))}catch(e){return r("Error fetching countries")}});a()}catch(e){a(e)}})},5103:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>l});var s=t(5184),i=t(1083),n=e([i]);i=(n.then?(await n)():n)[0];let o=(0,s.createSlice)({name:"countries",initialState:{list:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(i.t.pending,e=>{e.loading=!0,e.error=null}),e.addCase(i.t.fulfilled,(e,r)=>{e.list=r.payload,e.loading=!1}),e.addCase(i.t.rejected,(e,r)=>{e.error=r.payload,e.loading=!1})}}),l=o.reducer;a()}catch(e){a(e)}})},1697:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{F:()=>d,U:()=>l});var s=t(9648),i=t(5184),n=e([s]);s=(n.then?(await n)():n)[0];let o="https://api.v2.emissions-api.org/api/v2",l=(0,i.createAsyncThunk)("emissions/fetchByCountry",async({country:e,startDate:r,endDate:t,product:a},i)=>{try{let i=await s.default.get(`${o}/${a}/average.json`,{params:{country:e,begin:r,end:t}});return i.data}catch(e){if(s.default.isAxiosError(e)){let r=e.response?.data?.message||`Failed to fetch ${a} for the country. Please try again.`;return i.rejectWithValue(r)}return i.rejectWithValue("An unexpected error occurred. Please try again.")}}),d=(0,i.createAsyncThunk)("emissions/fetchByCoordinates",async({lat:e,lng:r,startDate:t,endDate:a,product:i},n)=>{try{let n=`${r},${e}`,l=await s.default.get(`${o}/${i}/average.json`,{params:{point:n,begin:t,end:a}});return l.data}catch(e){if(s.default.isAxiosError(e)){let r=e.response?.data?.message||`Failed to fetch data for ${i} at the coordinates. Please try again.`;return n.rejectWithValue(r)}return n.rejectWithValue("An unexpected error occurred. Please try again.")}});a()}catch(e){a(e)}})},9166:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{ZP:()=>l,dm:()=>d});var s=t(5184),i=t(1697),n=e([i]);i=(n.then?(await n)():n)[0];let o=(0,s.createSlice)({name:"emissions",initialState:{data:[],loading:!1,error:null},reducers:{resetEmissionsData:e=>{e.data=[],e.error=null,e.loading=!1}},extraReducers:e=>{e.addCase(i.U.pending,e=>{e.loading=!0,e.error=null}).addCase(i.U.fulfilled,(e,r)=>{e.data=r.payload.sort((e,r)=>{let t=new Date(e.start).getTime(),a=new Date(r.start).getTime();return t-a}),e.loading=!1}).addCase(i.U.rejected,(e,r)=>{e.error=r.error.message||"Failed to fetch emissions by country",e.loading=!1}).addCase(i.F.pending,e=>{e.loading=!0,e.error=null}).addCase(i.F.fulfilled,(e,r)=>{e.data=r.payload.sort((e,r)=>{let t=new Date(e.start).getTime(),a=new Date(r.start).getTime();return t-a}),e.loading=!1}).addCase(i.F.rejected,(e,r)=>{e.error=r.error.message||"Failed to fetch emissions by coordinates",e.loading=!1})}}),l=o.reducer,{resetEmissionsData:d}=o.actions;a()}catch(e){a(e)}})},5551:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.r(r),t.d(r,{default:()=>p});var s=t(997),i=t(6689),n=t(8442),o=t(4960),l=t.n(o),d=t(8469),c=t(2261),u=t(6022),m=t(5980),h=t(8107),x=e([m]);m=(x.then?(await x)():x)[0];let p=function({Component:e,pageProps:r}){let[t,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e="true"===localStorage.getItem("onboardingCompleted");a(e)},[]),s.jsx(u.Provider,{store:m.h,children:(0,s.jsxs)(n.ThemeProvider,{theme:c.Z,children:[s.jsx(l(),{}),s.jsx(d.Z,{}),t?s.jsx(e,{...r}):s.jsx(h.Z,{onComplete:()=>{a(!0),localStorage.setItem("onboardingCompleted","true")}})]})})};a()}catch(e){a(e)}})},2261:(e,r,t)=>{t.d(r,{Z:()=>i});var a=t(8442);let s=(0,a.createTheme)({palette:{primary:{main:"#4CAF50"},secondary:{main:"#2196F3"},error:{main:"#F44336"},background:{default:"#FAFAFA"},text:{primary:"#263238"},accent:{main:"#795548"}},typography:{fontFamily:"Roboto, Lato, Arial, sans-serif"},components:{MuiCssBaseline:{styleOverrides:`
        a {
          color: inherit;
          text-decoration: none;
        }
      `},MuiListItemButton:{styleOverrides:{root:{fontFamily:"Roboto, Lato, Arial, sans-serif","&:hover":{backgroundColor:"#e0e0e0"}}}}},spacing:8,breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}}}),i=s},3013:e=>{e.exports=require("@mui/base")},7123:e=>{e.exports=require("@mui/base/ClassNameGenerator")},7483:e=>{e.exports=require("@mui/base/FocusTrap")},8951:e=>{e.exports=require("@mui/base/Portal")},9295:e=>{e.exports=require("@mui/base/composeClasses")},5194:e=>{e.exports=require("@mui/base/unstable_useModal")},4173:e=>{e.exports=require("@mui/icons-material/Close")},3365:e=>{e.exports=require("@mui/icons-material/Menu")},4960:e=>{e.exports=require("@mui/material/CssBaseline")},8442:e=>{e.exports=require("@mui/material/styles")},7986:e=>{e.exports=require("@mui/system")},657:e=>{e.exports=require("@mui/utils")},5184:e=>{e.exports=require("@reduxjs/toolkit")},8103:e=>{e.exports=require("clsx")},8160:e=>{e.exports=require("csvtojson")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},6022:e=>{e.exports=require("react-redux")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},9648:e=>{e.exports=import("axios")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[268,872],()=>t(5551));module.exports=a})();