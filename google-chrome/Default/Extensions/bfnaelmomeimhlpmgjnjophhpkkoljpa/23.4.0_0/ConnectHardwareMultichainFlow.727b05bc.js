(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;n.register("3qeW6",(function(a,r){var o;o=a.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return m}));var c=n("1fwzV"),i=n("lz5BI"),s=n("29o0l"),l=n("84vNm"),u=n("2CuFm"),d=n("bQfjx"),p=n("krk0C"),h=n("V2q0K");var m=()=>{var t;const{hardwareStepStack:n,pushStep:a,popStep:r,currentStep:o}=(0,h.useHardwareOnboardingStore)(),m=(0,l.default)(n,((e,t)=>(null==e?void 0:e.length)===t.length)),f=(0,s.useCallback)((()=>{var e,t,n,a,c;(null===(e=o())||void 0===e?void 0:e.props.preventBack)||((null===(t=o())||void 0===t?void 0:t.props.onBackCallback)&&(null===(c=null===(n=o())||void 0===n?void 0:(a=n.props).onBackCallback)||void 0===c||c.call(a)),r())}),[o,r]);(0,s.useEffect)((()=>{a(e(s).createElement(p.ConnectHardwareMultichain,null))}),[a]);const g=n.length>(null!=m?m:[]).length,y=0===(null==m?void 0:m.length),C={initial:{x:y?0:g?150:-150,opacity:y?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(s).createElement(u.ConnectHardwareContainer,null,e(s).createElement(d.StepHeader,{totalSteps:u.TOTAL_CONNECT_HARDWARE_STEPS,onBackClick:f,showBackButton:!(null===(t=o())||void 0===t?void 0:t.props.preventBack),currentStepIndex:n.length-1}),e(s).createElement(c.AnimatePresence,{exitBeforeEnter:!0},e(s).createElement(i.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${n.length}_${null==m?void 0:m.length}`},C),o())))}})),n.register("krk0C",(function(a,r){t(a.exports,"ConnectHardwareMultichain",(function(){return A}));var o=n("hcj6g"),c=n("43063"),i=n("29o0l"),s=n("9CoSy"),l=n("gkfw3"),u=n("2CuFm"),d=n("6Klzw"),p=n("6Xahj"),h=n("dWu3Y"),m=n("hFkH3"),f=n("cb8KS"),g=n("3mrWC"),y=n("j81qC"),C=n("bhnmm"),w=n("efSU2"),S=n("ivB1q"),b=n("V2q0K");const v=l.keyframes`
  0% { left: -30px; opacity: 0; }
  100% { left: 15px; opacity: 1; }
`,x=l.keyframes`
  0% { right: -30px; opacity: 0; }
  100% { right: 15px; opacity: 1; }
`,k=l.default.div`
  display: flex;
`,T=l.default.div`
  left: 15px;
  position: relative;
  z-index: 1;
  animation-name: ${v};
  animation-duration: ${".5s"};
`,E=l.default.div`
  position: relative;
  right: 15px;
  animation-name: ${x};
  animation-duration: ${".5s"};
`,H={mainnetOnly:!0},I=()=>{(0,h.usePrefetchFeatureFlagsEffect)();const t=(0,b.useHardwareOnboardingStore)((e=>e.pushStep)),n=(0,b.useHardwareOnboardingStore)((e=>e.setSelectedChains)),{t:a}=(0,c.useTranslation)(),{data:r}=(0,p.useEnabledChainTypes)(),{data:l}=(0,p.useEnabledChainIDs)(H),{data:y,isFetching:v,refetch:x}=d.queryHooks.useRequestLedgerPermission(!0,!0),{buttonDisabled:k,defaultIcon:T,primaryText:E,secondaryText:I,buttonText:A,iconType:O,onClick:D}=(0,i.useMemo)((()=>{var c,u;let d=!1;const p=e(i).createElement(C.SpinnerIcon,null);let h,m,g,b=f.ConfirmationIconType.Default,k=s.NOOP;if(v)h=a("connectHardwareSearching"),m=a("connectHardwareMakeSureConnected"),g=a("commandContinue"),d=!0;else if("granted"===(null==y?void 0:y.type)){const s=null!==(u=null===(c=y.transport.deviceModel)||void 0===c?void 0:c.productName)&&void 0!==u?u:"Ledger";b=f.ConfirmationIconType.Success,h=a("connectHardwarePairSuccessPrimary",{productName:s}),m=a("connectHardwarePairSuccessSecondary",{productName:s}),g=a("commandContinue"),d=!1,k=()=>{if(1===r.length){const a=new Map;a.set(r[0],{});for(const e of l){const t=(0,o.getChainType)(e);a.set(t,{[e]:!0})}n(r,a),t(e(i).createElement(w.ConnectHardwareMultichainOpenApp,{preventBack:!0}))}else t(e(i).createElement(S.ConnectHardwareMultichainSelectChain,{onBackCallback:()=>{n([],new Map)}}))}}else"denied"===(null==y?void 0:y.type)?(b=f.ConfirmationIconType.Failure,h=a("connectHardwarePermissionDeniedPrimary"),m=a("connectHardwarePermissionDeniedSecondary"),g=a("commandTryAgain"),d=!1,k=x):y&&"unable-to-connect"!==y.type||(b=f.ConfirmationIconType.Failure,h=a("connectHardwarePermissionUnableToConnect"),m=a("connectHardwareWaitingForApplicationSecondaryText"),g=a("commandTryAgain"),d=!1,k=x);return{buttonDisabled:d,defaultIcon:p,primaryText:h,secondaryText:m,buttonText:g,iconType:b,onClick:k}}),[l,r,y,t,x,v,n,a]);return e(i).createElement(u.ConnectHardwareStepContainer,null,e(i).createElement(g.IconHeader,{icon:e(i).createElement(f.ConfirmationIcon,{defaultIcon:T,type:O}),primaryText:E,headerStyle:g.IconHeaderStyle.Large,secondaryText:I}),e(i).createElement(m.Button,{onClick:D,theme:"primary",disabled:k},A))},A=()=>{const{pushSubStep:t}=(0,b.useHardwareOnboardingStore)(),{t:n}=(0,c.useTranslation)();return e(i).createElement(u.ConnectHardwareStepContainer,null,e(i).createElement(g.IconHeader,{icon:e(i).createElement(k,null,e(i).createElement(T,null,e(i).createElement(y.IconPhantom,null)),e(i).createElement(E,null,e(i).createElement(y.IconLedgerLogo,null))),primaryText:n("connectHardwareLedger"),headerStyle:g.IconHeaderStyle.Large,secondaryText:n("connectHardwareStartConnection"),animateText:!0}),e(i).createElement(m.Button,{onClick:()=>{t(e(i).createElement(I,null))},theme:"primary"},n("commandConnect")))}})),n.register("dWu3Y",(function(e,a){t(e.exports,"useFeatureFlags",(function(){return d}),(function(e){return d=e})),t(e.exports,"useRefreshFeatureFlags",(function(){return p}),(function(e){return p=e})),t(e.exports,"usePrefetchFeatureFlagsEffect",(function(){return h}),(function(e){return h=e}));var r=n("5ekp2"),o=n("7dHjq"),c=n("29o0l"),i=n("twk6W"),s=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((a=a.apply(e,t||[])).next())}))};const l="feature-flags",u=()=>s(void 0,void 0,void 0,(function*(){const e=yield i.analytics.getFeatureFlags();return new Map(Object.entries(e))})),d=e=>{const t=(0,r.useQuery)({queryKey:[l],queryFn:u});return(0,c.useMemo)((()=>{const n=t.data,a=[];for(const t of e)a.push(!!(null==n?void 0:n.get(t)));return a}),[t.data,e])},p=()=>{const e=(0,o.useQueryClient)();return()=>e.invalidateQueries([l])},h=()=>{const e=(0,o.useQueryClient)();(0,c.useEffect)((()=>{e.prefetchQuery([l],u)}),[e])}})),n.register("efSU2",(function(a,r){t(a.exports,"ConnectHardwareMultichainOpenApp",(function(){return D}),(function(e){return D=e}));var o=n("4xbAj"),c=n("hcj6g"),i=n("eJxop"),s=n("43063"),l=n("29o0l"),u=n("66DML"),d=n("gkfw3"),p=n("creZv"),h=n("2CuFm"),m=n("6Klzw"),f=n("dWu3Y"),g=n("twk6W"),y=n("gcdBN"),C=n("hFkH3"),w=n("cGJ3C"),S=n("cb8KS"),b=n("3mrWC"),v=n("bhnmm"),x=n("27SDj"),k=n("6NY04"),T=n("V2q0K"),E=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((a=a.apply(e,t||[])).next())}))};const H=d.default.div`
  align-self: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,I=d.default.div`
  display: flex;

  svg {
    position: relative;

    :first-child {
      left: ${e=>e.logoCount>1?"12.5px":0};
    }

    :nth-child(2) {
      left: ${e=>e.logoCount>1?"-12.5px":0};
    }
  }
`,A={chainType:c.ChainType.Solana,pathType:o.DerivationPathType.Bip44RootSolana},O={chainType:c.ChainType.Ethereum,pathType:o.DerivationPathType.Bip44RootEthereum},D=()=>{const t=(0,T.useHardwareOnboardingStore)((e=>e.chainImportStep)),n=(0,T.useHardwareOnboardingStore)((e=>e.setIncrementChainImportStep)),a=(0,T.useHardwareOnboardingStore)((e=>e.selectedChains)),r=(0,T.useHardwareOnboardingStore)((e=>e.selectedChainsMap)),d=(0,T.useHardwareOnboardingStore)((e=>e.pushStep)),B=(0,T.useHardwareOnboardingStore)((e=>e.pushSubStep)),j=(0,T.useHardwareOnboardingStore)((e=>e.setDiscoveredAccounts)),M=(0,T.useHardwareOnboardingStore)((e=>e.setUndiscoveredAccountGroups)),L=(0,l.useRef)(T.useHardwareOnboardingStore.getState().undiscoveredAccountGroups),{t:P,i18n:F}=(0,s.useTranslation)(),N=a[t-1],{data:z=[],isFetched:q,isError:W}=m.queryHooks.useAllMultiChainAccounts(),[K,R]=(0,l.useState)(!1),V=(0,l.useMemo)((()=>{const e=[],t=r.get(N)||{};for(const[n,a]of Object.entries(t))a&&e.push(n);return e}),[N,r]),{chainNameTextOr:$,chainNameTextAnd:_}=(0,l.useMemo)((()=>{const e=V.map((e=>(0,c.getChainNameByID)(e))),t=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"disjunction"}),n=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:t.format(e),chainNameTextAnd:n.format(e)}}),[V,F]),G=(0,l.useMemo)((()=>V.map((t=>e(l).createElement(w.ChainLogo,{key:t,chainId:t,width:90,height:90,strokeWidth:1})))),[V]);(0,l.useEffect)((()=>{const e=T.useHardwareOnboardingStore.subscribe((e=>L.current=e.undiscoveredAccountGroups));return()=>e()}),[]);const U=(0,l.useMemo)((()=>{const e=[];N===c.ChainType.Solana?e.push(A):N===c.ChainType.Ethereum&&e.push(O);for(let t=0;t<19;++t)switch(N){case c.ChainType.Solana:{const n={chainType:N,index:t};e.push(Object.assign(Object.assign({},n),{pathType:o.DerivationPathType.Bip44ChangeSolana})),e.push(Object.assign(Object.assign({},n),{pathType:o.DerivationPathType.Bip44Solana}));break}case c.ChainType.Ethereum:{const n={chainType:N,index:t};e.push(Object.assign(Object.assign({},n),{pathType:o.DerivationPathType.Bip44Ethereum})),e.push(Object.assign(Object.assign({},n),{pathType:o.DerivationPathType.Bip44EthereumSecondary}));break}}return e}),[N]),[J,Q]=(0,l.useState)(!0),{data:Y=i.LEDGER_NOT_CONNECTED_STATE}=m.queryHooks.useLedgerTransportState(J,!0),[X]=(0,f.useFeatureFlags)(["enable-ledger-xpub-derivation-v1"]),{data:Z,error:ee,fetchStatus:te,refetch:ne}=m.queryHooks.useLedgerAddresses(Y,U,!0,X,(e=>{const t=U[0]?(0,c.getChainTypeGenericName)(U[0].chainType):void 0,n=X;g.analytics.capture("connectHardwareFoundAccounts",{data:{duration:e,chainType:t,enabledXPubDerivation:n}})})),ae="fetching"===te,re=!Y.isConnected&&"reconnecting"!==Y.status,[oe,ce]=(0,l.useState)(!1),{data:ie,refetch:se}=m.queryHooks.useRequestLedgerPermission(oe,!0);(0,l.useEffect)((()=>{re&&Q(!1)}),[re]),(0,l.useEffect)((()=>{"granted"===(null==ie?void 0:ie.type)&&(Q(!0),ce(!1))}),[ie]);const le=(0,l.useCallback)((()=>E(void 0,void 0,void 0,(function*(){var n;if(Z&&Object.keys(Z).length){const r=[...L.current];let i=0;for(const e of Object.values(Z)){const t=null!==(n=r[i])&&void 0!==n?n:{accounts:{}},a={accounts:Object.assign({},t.accounts),derivationIndex:U[i].index};switch(N){case c.ChainType.Ethereum:V.includes(c.ChainID.PolygonMainnet)&&(a.accounts[`${c.ChainID.PolygonMainnet}-${e}`]={chainType:N,chainId:c.ChainID.PolygonMainnet,address:e,derivationPathType:U[i].pathType}),V.includes(c.ChainID.EthereumMainnet)&&(a.accounts[`${c.ChainID.EthereumMainnet}-${e}`]={chainType:N,chainId:c.ChainID.EthereumMainnet,address:e,derivationPathType:U[i].pathType});break;case c.ChainType.Solana:a.accounts[`${c.ChainID.SolanaMainnet}-${e}`]={chainType:N,address:e,chainId:c.ChainID.SolanaMainnet,derivationPathType:U[i].pathType}}r[i]=a,i++}if(M(r),q&&a.length===t){R(!0);const t=(e=>{const t=new Set;for(const n of e)for(const{address:e}of n.addresses)t.add(e);return t})(z),n=r.reduce(((e,n)=>{let a=!1;for(const{address:e}of Object.values(n.accounts))a=a||t.has(e);return a||e.push(n),e}),[]),a=[],c=[];for(let e=0;e<n.length;e+=o.BATCH_SIZE_BY_PLATFORM.extension){const t=n.slice(e,e+o.BATCH_SIZE_BY_PLATFORM.extension).map((e=>{const t=Object.entries(e.accounts).reduce(((t,[n,a])=>{var r;return t[n]={account:a,seedIndex:null!==(r=e.derivationIndex)&&void 0!==r?r:-1},t}),{});return t}));c.push(t)}for(const e of c)a.push((0,u.discoverAccounts)(e));const i=(yield Promise.all(a)).flat().filter((e=>e.accounts.length>0)).map((e=>{const t=(0,p.default)();return Object.assign(Object.assign({},e),{discoveryIdentifier:t})})),s=i.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault)),h=s.length>0,m=z.filter((e=>e.type===o.AccountType.Ledger)).length,f=(h?s:i.filter((e=>!e.accounts.some((e=>(0,o.isLegacyDerivationPathType)(e.derivationPathType))))).slice(0,3)).map(((e,t)=>Object.assign(Object.assign({},e),{accountIndex:m+t})));j(f,h),d(e(l).createElement(k.ConnectHardwareMultichainImportAccount,{preventBack:!0}))}}}))),[Z,M,q,a.length,t,U,N,V,z,j,d]);let ue,de,pe,he;(0,l.useEffect)((()=>{Z&&Object.keys(Z).length===U.length&&(le(),a.length!==t&&(n(),B(e(l).createElement(D,{preventBack:!0}))))}),[Z,U,d,B,t,a,le,n]);let me=()=>{};return W?(ue=e(l).createElement(S.ConfirmationIcon,{type:S.ConfirmationIconType.Failure}),de=P("connectHardwareErrorLedgerGeneric"),pe=P("connectHardwareErrorLedgerPhantomLocked"),me=()=>E(void 0,void 0,void 0,(function*(){const e=yield(0,y.getCurrentTabAsync)();void 0!==e.id&&(0,y.closeTabAsync)(e.id)})),he=P("commandClose")):ie&&"granted"!==ie.type?(ue=e(l).createElement(S.ConfirmationIcon,{type:S.ConfirmationIconType.Warning}),de=P("connectHardwarePermissionDeniedPrimary"),pe=P("connectHardwarePermissionDeniedSecondary"),he=P("homeErrorButtonText"),me=se):re?(ue=e(l).createElement(S.ConfirmationIcon,{type:S.ConfirmationIconType.Warning}),de=P("connectHardwarePermissionUnableToConnect"),pe=P("connectHardwarePermissionUnableToConnectDescription"),he=P("commandConnect"),me=se):ee===i.LEDGER_LOCKED?(ue=e(l).createElement(S.ConfirmationIcon,{type:S.ConfirmationIconType.Failure}),de=P("connectHardwareErrorLedgerLocked"),pe=P("connectHardwareErrorLedgerLockedDescription"),he=P("homeErrorButtonText"),me=ne):ee?(ue=e(l).createElement(S.ConfirmationIcon,{type:S.ConfirmationIconType.Failure}),de=P("connectHardwareErrorLedgerGeneric"),pe=P("connectHardwareErrorLedgerGenericDescription"),he=P("homeErrorButtonText"),me=ne):"reconnecting"==Y.status?(ue=e(l).createElement(S.ConfirmationIcon,{defaultIcon:e(l).createElement(v.SpinnerIcon,null),type:S.ConfirmationIconType.Default}),de=P("connectHardwareConnecting"),pe=P("connectHardwareConnectingDescription")):K?(ue=e(l).createElement(S.ConfirmationIcon,{defaultIcon:e(l).createElement(v.SpinnerIcon,null),type:S.ConfirmationIconType.Default}),de=P("connectHardwareDiscoveringAccounts"),pe=P("connectHardwareDiscoveringAccountsDescription")):ae?(ue=e(l).createElement(S.ConfirmationIcon,{defaultIcon:e(l).createElement(v.SpinnerIcon,null),type:S.ConfirmationIconType.Default}),de=P("connectHardwareConnectingAccounts"),pe=P("connectHardwareFindingAccountsWithActivity",{chainName:_})):(ue=e(l).createElement(I,{logoCount:G.length},G),de=P("connectHardwareOpenAppInterpolated",{app:$}),pe=P("connectHardwareOpenAppDescription")),e(l).createElement(h.ConnectHardwareStepContainer,null,e(l).createElement(b.IconHeader,{icon:ue,primaryText:de,headerStyle:b.IconHeaderStyle.Large,secondaryText:pe}),he?e(l).createElement(C.Button,{onClick:me,theme:"primary"},he):e(l).createElement(H,null,e(l).createElement(x.Text,{color:"#999999",size:14},P("connectHardwareAccountsStepOfSteps",{stepNum:t,totalSteps:a.length}))))}})),n.register("6NY04",(function(a,r){t(a.exports,"ConnectHardwareMultichainImportAccount",(function(){return y}));var o=n("43063"),c=n("29o0l"),i=n("gkfw3"),s=n("2CuFm"),l=n("hFkH3"),u=n("cb8KS"),d=n("3mrWC"),p=n("2QUtj"),h=n("eNcWQ"),m=n("V2q0K");const f=i.default.div`
  margin-bottom: 35px;
`,g=(0,i.default)(l.Button)`
  margin-bottom: 10px;
`,y=()=>{const t=(0,m.useHardwareOnboardingStore)((e=>e.discoveredAccounts)),n=(0,m.useHardwareOnboardingStore)((e=>e.activeAccountsFound)),a=(0,m.useHardwareOnboardingStore)((e=>e.setSelectedAccounts)),r=(0,m.useHardwareOnboardingStore)((e=>e.pushSubStep)),{t:i}=(0,o.useTranslation)(),y=(0,c.useMemo)((()=>n?i(1===t.length?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:t.length}):i("connectHardwareFoundSomeAccounts")),[n,i,t.length]),C=(0,c.useCallback)((()=>{r(e(c).createElement(h.ConnectHardwareMultichainSelectAccounts,{activeAccounts:t}))}),[r,t]),w=(0,c.useCallback)((()=>{r(e(c).createElement(p.ConnectHardwareMultichainImportConfirmation,{preventBack:!0}))}),[r]);return(0,c.useEffect)((()=>{const e=t.reduce(((e,t,n)=>(("discovered"===t.status&&t.isSelectedByDefault||0===n)&&(e[t.discoveryIdentifier]=!0),e)),{});a(e)}),[t,a,n,i]),e(c).createElement(s.ConnectHardwareStepContainer,null,e(c).createElement(f,null,e(c).createElement(d.IconHeader,{icon:e(c).createElement(u.ConfirmationIcon,{type:u.ConfirmationIconType.Success}),primaryText:i("connectHardwareConnectAccounts"),headerStyle:d.IconHeaderStyle.Large,secondaryText:y})),e(c).createElement(g,{onClick:C,theme:"default"},i("connectHardwareSelectAccounts")),e(c).createElement(l.Button,{onClick:w,theme:"primary"},i("commandContinue")))}})),n.register("2QUtj",(function(a,r){t(a.exports,"ConnectHardwareMultichainImportConfirmation",(function(){return m}));var o=n("43063"),c=n("29o0l"),i=n("2CuFm"),s=n("6Klzw"),l=n("twk6W"),u=n("hFkH3"),d=n("cb8KS"),p=n("3mrWC"),h=n("V2q0K");const m=()=>{const t=(0,h.useHardwareOnboardingStore)((e=>e.discoveredAccounts)),n=(0,h.useHardwareOnboardingStore)((e=>e.selectedAccounts)),{t:a}=(0,o.useTranslation)(),{mutateAsync:r}=s.queryHooks.useConnectLedgerAccounts(),[m,f]=(0,c.useState)(!1),g=(0,c.useMemo)((()=>t.filter((e=>!!n[e.discoveryIdentifier]))),[t,n]);return(0,c.useEffect)((()=>{if(g.length){const e={accounts:g.map((e=>{const{accounts:t,seedIndex:n,accountIndex:a}=e;return{derivationIndex:n,publicKeys:t.map((e=>({pathType:e.derivationPathType,publicKey:e.address}))),accountIndex:a}}))};r(e).then((()=>{l.analytics.capture("connectHardwareConnectAccounts",{data:{accountsImported:g.length}})})).finally((()=>{f(!0)}))}else f(!0)}),[g,r]),e(c).createElement(i.ConnectHardwareStepContainer,null,e(c).createElement(p.IconHeader,{icon:e(c).createElement(d.ConfirmationIcon,{type:d.ConfirmationIconType.Success}),primaryText:a("connectHardwareAccountsAddedInterpolated",{numOfAccounts:g.length}),headerStyle:p.IconHeaderStyle.Large,secondaryText:a("connectHardwareFinishSecondaryText")}),e(c).createElement(u.Button,{onClick:()=>{l.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary",disabled:!m},a("pastParticipleDone")))}})),n.register("V2q0K",(function(a,r){t(a.exports,"useHardwareOnboardingStore",(function(){return l}));var o=n("RVqnc"),c=n("1I4L6"),i=n("gTwcH");const s={hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,undiscoveredAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{}},l=e(i)(((e,t)=>Object.assign(Object.assign({},s),{pushStep:n=>{const a=t().hardwareStepStack;e({hardwareStepStack:a.concat(n)})},popStep:()=>{var n;const a=t().hardwareStepStack.length-1;if((null!==(n=t().hardwareStepSubStack[a])&&void 0!==n?n:[]).length)return e((0,c.default)((e=>{e.hardwareStepSubStack[a]=e.hardwareStepSubStack[a].slice(0,-1)})));e((0,c.default)((e=>{e.hardwareStepStack=e.hardwareStepStack.slice(0,-1)})))},pushSubStep:n=>{var a;const r=t().hardwareStepStack.length-1,o=null!==(a=t().hardwareStepSubStack[r])&&void 0!==a?a:[];e((0,c.default)((e=>{e.hardwareStepSubStack[r]=o.concat([n])})))},currentStep:()=>{var e;const n=t().hardwareStepStack,a=t().hardwareStepSubStack,r=n.length>0?n.length-1:n.length;return(null===(e=a[r])||void 0===e?void 0:e.length)?(0,o.getLast)(a[r]):(0,o.getLast)(n)},setSelectedChains:(t,n)=>{e({selectedChains:t,selectedChainsMap:n})},setDecrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n-1})},setIncrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n+1})},setUndiscoveredAccountGroups:t=>{e({undiscoveredAccountGroups:t})},setDiscoveredAccounts:(t,n)=>{e({discoveredAccounts:t,activeAccountsFound:n})},selectAccount:n=>{const a=t().selectedAccounts,r=Object.assign({},a);r[n]=!0,e({selectedAccounts:r})},deselectAccount:n=>{const a=t().selectedAccounts,r=Object.assign({},a);delete r[n],e({selectedAccounts:r})},setSelectedAccounts:t=>{e({selectedAccounts:t})}})))})),n.register("eNcWQ",(function(a,r){t(a.exports,"ConnectHardwareMultichainSelectAccounts",(function(){return f}));var o=n("43063"),c=n("29o0l"),i=n("gkfw3"),s=n("2CuFm"),l=n("hFkH3"),u=n("27SDj"),d=n("ghHB9"),p=n("2QUtj"),h=n("V2q0K");const m=(0,i.default)(u.Text)`
  margin-top: 15px;
`,f=({activeAccounts:t})=>{const n=(0,h.useHardwareOnboardingStore)((e=>e.selectedAccounts)),a=(0,h.useHardwareOnboardingStore)((e=>e.selectAccount)),r=(0,h.useHardwareOnboardingStore)((e=>e.deselectAccount)),i=(0,h.useHardwareOnboardingStore)((e=>e.pushSubStep)),{t:f}=(0,o.useTranslation)(),g=(0,c.useMemo)((()=>0===Object.values(n).filter((e=>!!e)).length),[n]),y=(0,c.useCallback)((()=>{i(e(c).createElement(p.ConnectHardwareMultichainImportConfirmation,{preventBack:!0}))}),[i]);return e(c).createElement(s.ConnectHardwareStepContainer,null,e(c).createElement("div",{style:{marginBottom:15}},e(c).createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},e(c).createElement(u.Text,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},f("connectHardwareSelectAccounts")),e(c).createElement(m,{wordBreak:"break-word",size:18,lineHeight:22,color:"#777777"},f("connectHardwareChooseAccountsToConnect"))),e(c).createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},t.map((({accounts:t,discoveryIdentifier:o,accountIndex:i})=>{const s=!!n[o];return e(c).createElement(d.ImportAccountRow,{key:o,accountType:"ledger",accounts:t,accountIndex:i,checked:s,onPress:()=>{s?r(o):a(o)}})})))),e(c).createElement(l.Button,{onClick:y,theme:"primary",disabled:g},f("commandContinue")))}})),n.register("ghHB9",(function(a,r){t(a.exports,"ImportAccountRow",(function(){return m}));var o=n("hcj6g"),c=n("43063"),i=n("29o0l"),s=n("Nt4tV"),l=n("gkfw3"),u=n("cGJ3C"),d=n("lLNMU"),p=n("27SDj");const h=({account:t})=>{const{t:n}=(0,c.useTranslation)();let a,r;return"chain"in t?(a=t.chain.id,r=t.chain.name):(a=t.chainId,r=(0,o.getChainNameByID)(t.chainId)),e(i).createElement(b,null,e(i).createElement(g,null,e(i).createElement(u.ChainLogo,{chainId:a,height:40,width:40,spacing:"large"})),e(i).createElement(y,null,e(i).createElement(w,null,e(i).createElement(v,null,r),e(i).createElement(v,null,(0,s.formatHashMedium)(t.address,4))),e(i).createElement(C,null,"amount"in t&&"chain"in t?e(i).createElement(x,null,(0,s.formatTokenAmount)(t.amount)," ",t.chain.symbol):null,"amount"in t?e(i).createElement(x,null,t.lastActivityTimestamp?n("onboardingImportAccountsLastActive",{formattedTimestamp:(0,s.formatTimestampFromNow)(1e3*t.lastActivityTimestamp,!0)}):n("onboardingImportAccountsCreateNew")):null)))},m=e(i).memo((({accountType:t,accounts:n,checked:a,accountIndex:r,onPress:o})=>{const{t:s}=(0,c.useTranslation)(),l=r+1;return e(i).createElement(f,null,e(i).createElement(S,null,e(i).createElement(v,null,((e,t,n)=>{switch(t){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:n});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:n})}})(s,t,l)),e(i).createElement(d.Checkbox,{checked:a,onChange:o})),n.map(((t,n)=>e(i).createElement(h,{key:`${t.address}-${n}`,account:t}))))})),f=l.default.div`
  margin-bottom: 24px;
  width: 100%;
`,g=l.default.div`
  flex-shrink: 0;
  margin-right: 10px;
`,y=l.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,C=l.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,w=(0,l.default)(C)`
  margin-bottom: 2px;
`,S=(0,l.default)(C)`
  background: #2a2a2a;
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,b=l.default.div`
  background: #2a2a2a;
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,v=(0,l.default)(p.Text).attrs({size:16,lineHeight:19,weight:600})``,x=(0,l.default)(p.Text).attrs({size:14,lineHeight:17,weight:400,color:"#777777"})``})),n.register("ivB1q",(function(a,r){t(a.exports,"ConnectHardwareMultichainSelectChain",(function(){return T}));var o=n("hcj6g"),c=n("43063"),i=n("29o0l"),s=n("gkfw3"),l=n("2CuFm"),u=n("6Xahj"),d=n("cI6uH"),p=n("twk6W"),h=n("hFkH3"),m=n("cGJ3C"),f=n("lLNMU"),g=n("27SDj"),y=n("efSU2"),C=n("V2q0K");const w=s.default.div`
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  :last-child {
    margin-bottom: 28px;
  }

  > span {
    margin-right: 0px;
  }
`,S=s.default.div`
  margin-right: 12px;
`,b=s.default.div`
  margin-top: 30px;
`,v=s.default.div`
  display: flex;
  align-items: center;
`,x=({chainId:t,icon:n,onPressChain:a,isChecked:r})=>e(i).createElement(w,{onClick:()=>{a(t)}},e(i).createElement(v,null,e(i).createElement(S,null,n),e(i).createElement(g.Text,{size:16,weight:600},(0,o.getChainNameByID)(t))),e(i).createElement(f.Checkbox,{checked:r})),k={mainnetOnly:!0},T=()=>{const{pushSubStep:t,selectedChains:n,setSelectedChains:a,selectedChainsMap:r}=(0,C.useHardwareOnboardingStore)(),{data:s}=(0,u.useEnabledChainIDs)(k),{data:f}=(0,u.useEnabledChainTypes)(),{t:w}=(0,c.useTranslation)(),S=(0,i.useCallback)((e=>{const t=new Map(r),n=(0,o.getChainType)(e),c=r.get(n),i=null==c?void 0:c[e];t.set(n,Object.assign(Object.assign({},c),{[e]:!i}));const s=f.filter((e=>{const n=t.get(e)||{};return Object.values(n).reduce(((e,t)=>t?++e:e),0)>0}));a(s,t)}),[f,a,r]);(0,d.useEffectOnce)((()=>{const e=new Map;for(const t of f)e.set(t,{});for(const t of s){const n=(0,o.getChainType)(t),a=e.get(n);e.set(n,Object.assign(Object.assign({},a),{[t]:!1}))}a(n,e)}),f.length>0&&s.length>0);const v=(0,i.useMemo)((()=>s.map((t=>{const n=(0,o.getChainType)(t),a=r.get(n),c=(null==a?void 0:a[t])||!1;return e(i).createElement(x,{key:t,icon:e(i).createElement(m.ChainLogo,{chainId:t,width:40,height:40,stroke:""}),chainId:t,onPressChain:S,isChecked:c})}))),[s,r,S]),T=(0,i.useMemo)((()=>{let e=0;for(const t of r.values())e+=Object.values(t).reduce(((e,t)=>t?++e:e),0);return 0===e}),[r]);return e(i).createElement(l.ConnectHardwareStepContainer,null,e(i).createElement("div",null,e(i).createElement(g.Text,{weight:500,size:28,lineHeight:34},w("connectHardwareSelectChains")),e(i).createElement(b,null,v)),e(i).createElement(h.Button,{onClick:()=>{var n;const a=[];for(const e of s){(null!==(n=r.get((0,o.getChainType)(e)))&&void 0!==n?n:{})[e]&&(0,o.isChainID)(e)&&(0,o.isMainnetChainID)(e)&&a.push((0,o.getChainNameByID)(e))}const c={numChains:a.length,selectedChains:a.join(", ")};p.analytics.capture("connectHardwareSelectedChains",{data:c}),t(e(i).createElement(y.ConnectHardwareMultichainOpenApp,{preventBack:!0}))},theme:"primary",disabled:T},w("commandContinue")))}})),n.register("cI6uH",(function(e,a){t(e.exports,"useEffectOnce",(function(){return o}));var r=n("29o0l");const o=(e,t)=>{const n=(0,r.useRef)(!1);(0,r.useEffect)((()=>{if(!n.current&&t)return n.current=!0,e()}))}})),n.register("6tBWY",(function(a,r){t(a.exports,"removeSubdomainFromDomain",(function(){return h}),(function(e){return h=e})),t(a.exports,"detectPhishing",(function(){return S}),(function(e){return S=e})),t(a.exports,"getNFTBlocklist",(function(){return b}),(function(e){return b=e}));var o=n("dX6ZT"),c=n("HlEsU"),i=n("bKbRw"),s=n("9CoSy"),l=n("7qsqs"),u=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((a=a.apply(e,t||[])).next())}))};const d=6e5;class p{check(t){if(!t)return{type:"all",result:!1};const n=h(t),a=f(n);if(w(a,this.whitelist)){const e=new URL(t).hostname;return C(f(e),this.blocklist)?{type:"blocklist",result:!0,source:e,isSubdomainDomainWhitelisted:!0}:{type:"whitelist",result:!1,source:e,isSubdomainDomainWhitelisted:!0}}if(C(a,this.whitelist))return{type:"whitelist",result:!1,source:n,isSubdomainDomainWhitelisted:!1};if(C(a,this.blocklist))return{type:"blocklist",result:!0,source:n,isSubdomainDomainWhitelisted:!1};if(this.tolerance>0){let t=y(a);t=t.replace("www.","");const r=this.fuzzylist.find((n=>{const a=y(n);return e(i).get(t,a)<=this.tolerance}));if(r){return{type:"fuzzy",result:!0,match:g(r),source:n,isSubdomainDomainWhitelisted:!1}}}return{type:"all",result:!1,source:n}}constructor(e,t,n,a){this.blocklist=m(e),this.whitelist=m(t),this.fuzzylist=m(n),this.tolerance=a||3}}const h=e=>{const t=new URL(e).hostname.split(".");return t.slice(0).slice(-(4===t.length?3:2)).join(".")},m=e=>e.map(f),f=e=>e.split(".").reverse(),g=e=>e.slice().reverse().join("."),y=e=>e.slice(1).reverse().join("."),C=(e,t)=>t.some((t=>!(t.length>e.length)&&t.every(((t,n)=>e[n]===t)))),w=(e,t)=>t.some((t=>t[0]===e[0]&&t[1]===e[1]&&"*"===t[2])),S=e=>u(void 0,void 0,void 0,(function*(){const t=(0,o.getBlocklist)(),n=yield(0,l.getStorageValue)(c.StorageKeys.CachedBlocklistDiff),a=JSON.parse(`${n}`);if(a&&a.expiresAt&&a.expiresAt>Date.now()){return new p(t.blocklist.concat(a.blocklist),t.whitelist.concat(a.whitelist),t.fuzzylist.concat(a.fuzzylist)).check(e)}{const n=new Headers,r=(0,o.getVersion)();a&&n.append("lastContentHash",`${a.contentHash}`),r&&n.append("localBlocklistVersion",`${r}`);const i=yield fetch(s.PHANTOM_BLOCKLIST_URL,{headers:n});if(200===i.status){const n=yield i.json();n.expiresAt=Date.now()+d,(0,l.setStorageValue)(c.StorageKeys.CachedBlocklistDiff,JSON.stringify(n));return new p(t.blocklist.concat(n.blocklist),t.whitelist.concat(n.whitelist),t.fuzzylist.concat(n.fuzzylist)).check(e)}if(304===i.status){a.expiresAt=Date.now()+d,(0,l.setStorageValue)(c.StorageKeys.CachedBlocklistDiff,JSON.stringify(a));return new p(t.blocklist.concat(a.blocklist),t.whitelist.concat(a.whitelist),t.fuzzylist.concat(a.fuzzylist)).check(e)}return{result:!1,type:"error"}}})),b=()=>u(void 0,void 0,void 0,(function*(){const e=yield(0,l.getStorageValue)(c.StorageKeys.CachedBlocklistDiff),t=JSON.parse(`${e}`);return t&&t.nftBlocklist?t.nftBlocklist:[]}))})),n.register("dX6ZT",(function(e,a){var r,o;t(e.exports,"getVersion",(function(){return r}),(function(e){return r=e})),t(e.exports,"getBlocklist",(function(){return o}),(function(e){return o=e}));var c=n("hqGpV").version,i=n("3CIKc");r=()=>c,o=()=>i})),n.register("hqGpV",(function(e,t){e.exports=JSON.parse('{"name":"@phantom-labs/blocklist","version":"0.13.0","main":"index.js","types":"index.d.ts","repository":"git@github.com:phantom-labs/blocklist.git","author":"Jordan Leigh <AlwaysBCoding@gmail.com>","license":"MIT","scripts":{"build":"node build.js"},"dependencies":{"js-yaml":"^4.1.0","sha3":"^2.1.4"}}')})),n.register("3CIKc",(function(e,t){e.exports=JSON.parse('{"blocklist":["phantomweb.app","aurory.app","solvision.io","staratlas.art","starsatlas.com","sollet.cc","raydlum.io","aurorynft.com","sneks.gg","solletweb.io","i-sollet.com","fancyfrenchienft.art","solanawebwallet.online","phahtom.com","server-syncwallet.com","staratias.app","raydium.network","grapesnetwork.me","staratias.art","soistarter.org","audius-nft.top","aurory.me","degenapes.app","phantom-app.online","phantomwallet.net","dapps-node.com","phantom-app.link","solanaoutage.com","walletconnectdapps.net","staratlas.cx","web-phantom.app","0120tt.com"],"whitelist":[],"fuzzylist":[],"contentHash":"830ea1c9a833213eabc17990adf053081f503b1203ca9a2c711db7199e657293"}')})),n.register("bKbRw",(function(e,t){!function(){"use strict";var a;try{a="undefined"!=typeof Intl&&void 0!==Intl.Collator?Intl.Collator("generic",{sensitivity:"base"}):null}catch(e){console.log("Collator could not be initialized and wouldn't be used")}var r=n("ekLy5"),o=[],c=[],i={get:function(e,t,n){if(n&&a&&n.useCollator){var i,s,l,u,d,p,h=e.length,m=t.length;if(0===h)return m;if(0===m)return h;for(l=0;l<m;++l)o[l]=l,c[l]=t.charCodeAt(l);for(o[m]=m,l=0;l<h;++l){for(s=l+1,u=0;u<m;++u)i=s,p=0===a.compare(e.charAt(l),String.fromCharCode(c[u])),(s=o[u]+(p?0:1))>(d=i+1)&&(s=d),s>(d=o[u+1]+1)&&(s=d),o[u]=i;o[u]=s}return s}return r.distance(e,t)}};"undefined"!=typeof define&&null!==define&&define.amd?define((function(){return i})):null!==e&&e.exports===t?e.exports=i:"undefined"!=typeof self&&"function"==typeof self.postMessage&&"function"==typeof self.importScripts?self.Levenshtein=i:"undefined"!=typeof window&&null!==window&&(window.Levenshtein=i)}()})),n.register("ekLy5",(function(e,t){"use strict";const n=new Uint32Array(65536),a=(e,t)=>{if(e.length>t.length){const n=t;t=e,e=n}return 0===e.length?t.length:e.length<=32?((e,t)=>{const a=e.length,r=t.length,o=1<<a-1;let c=-1,i=0,s=a,l=a;for(;l--;)n[e.charCodeAt(l)]|=1<<l;for(l=0;l<r;l++){let e=n[t.charCodeAt(l)];const a=e|i;e|=(e&c)+c^c,i|=~(e|c),c&=e,i&o&&s++,c&o&&s--,i=i<<1|1,c=c<<1|~(a|i),i&=a}for(l=a;l--;)n[e.charCodeAt(l)]=0;return s})(e,t):((e,t)=>{const a=e.length,r=t.length,o=[],c=[],i=Math.ceil(a/32),s=Math.ceil(r/32);let l=r;for(let e=0;e<i;e++)c[e]=-1,o[e]=0;let u=0;for(;u<s-1;u++){let i=0,s=-1;const d=32*u,p=Math.min(32,r)+d;for(let e=d;e<p;e++)n[t.charCodeAt(e)]|=1<<e;l=r;for(let t=0;t<a;t++){const a=n[e.charCodeAt(t)],r=c[t/32|0]>>>t&1,l=o[t/32|0]>>>t&1,u=a|i,d=((a|l)&s)+s^s|a|l;let p=i|~(d|s),h=s&d;p>>>31^r&&(c[t/32|0]^=1<<t),h>>>31^l&&(o[t/32|0]^=1<<t),p=p<<1|r,h=h<<1|l,s=h|~(u|p),i=p&u}for(let e=d;e<p;e++)n[t.charCodeAt(e)]=0}let d=0,p=-1;const h=32*u,m=Math.min(32,r-h)+h;for(let e=h;e<m;e++)n[t.charCodeAt(e)]|=1<<e;l=r;for(let t=0;t<a;t++){const a=n[e.charCodeAt(t)],i=c[t/32|0]>>>t&1,s=o[t/32|0]>>>t&1,u=a|d,h=((a|s)&p)+p^p|a|s;let m=d|~(h|p),f=p&h;l+=m>>>r-1&1,l-=f>>>r-1&1,m>>>31^i&&(c[t/32|0]^=1<<t),f>>>31^s&&(o[t/32|0]^=1<<t),m=m<<1|i,f=f<<1|s,p=f|~(u|m),d=m&u}for(let e=h;e<m;e++)n[t.charCodeAt(e)]=0;return l})(e,t)};e.exports={closest:(e,t)=>{let n=1/0,r=0;for(let o=0;o<t.length;o++){const c=a(e,t[o]);c<n&&(n=c,r=o)}return t[r]},distance:a}}))}();
//# sourceMappingURL=ConnectHardwareMultichainFlow.727b05bc.js.map
define=__define;})(window.define);