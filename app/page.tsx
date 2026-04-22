"use client";
import { AuthModal } from "@/components/AuthModal";
import { useUser } from "@/lib/hooks/useUser";

import React, { useState, useEffect } from "react";

const SpiralLogo = ({color="white",size=36}:{color?:string,size?:number}) => (

  <svg width={size} height={size} viewBox="0 0 72 72" fill="none">

    <path d="M36 36 C36 33 34 31 31 31 C28 31 26 33 26 36 C26 40 29 43 33 44 C38 45 43 42 45 37 C47 31 44 24 39 21 C33 17 25 19 20 24 C14 30 14 39 18 46 C23 54 33 57 42 54 C52 50 58 40 56 30 C54 19 44 12 33 12 C21 12 11 20 9 32 C7 44 13 57 24 62 C36 68 51 65 59 54"

      stroke={color} strokeWidth="2.5" strokeLinecap="round"/>

    <circle cx="36" cy="36" r="2.5" fill={color}/>

  </svg>

);

const experiencias = [

  {id:"meditacion",cat:"Meditacion",title:"Silencio andino",sub:"21 dias · 12 sesiones",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop&crop=center"},

  {id:"yoga",cat:"Yoga",title:"Cuerpo consciente",sub:"30 dias · 20 sesiones",img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop&crop=top"},

  {id:"sabiduria",cat:"Sabiduria ancestral",title:"Misterios de Machu Picchu",sub:"15 dias · 8 sesiones",img:"https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80&fit=crop&crop=center"},

  {id:"respiracion",cat:"Respiracion",title:"El aliento sagrado",sub:"14 dias · 10 sesiones",img:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80&fit=crop&crop=top"},

  {id:"proposito",cat:"Desarrollo personal",title:"Proposito y vision",sub:"21 dias · 15 sesiones",img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop&crop=top"},

  {id:"frecuencias",cat:"Frecuencias",title:"Sonidos que sanan",sub:"10 dias · 7 sesiones",img:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&q=80&fit=crop&crop=center"},

];

const faqs = [

  {q:"¿Que es Solo Gracias?",r:"Solo Gracias es la primera plataforma de streaming de transformacion personal construida desde adentro de la cultura hispanohablante, para 700 millones de personas que comparten idioma, raices y cosmoision ancestral. No es contenido traducido — nacio en Paraguay y habla tu idioma."},

  {q:"¿Por que nacio en Paraguay?",r:"Paraguay es el corazon de Solo Gracias. Nacio aqui porque creemos que Latinoamerica tiene una sabiduria ancestral unica — guarani, andina, maya — que merece una plataforma propia. Paraguay es el punto de partida hacia toda la region."},

  {q:"¿Cuanto cuesta Solo Gracias?",r:"Tenemos tres planes: Libre (gratis), Esencia ($9.99/mes) y Alma+ ($19.99/mes). Todos los planes pagos incluyen 30 dias de prueba completa. Somos 36% mas baratos que Gaia y 90% mas baratos que Mindvalley."},

  {q:"¿Que es una experiencia en Solo Gracias?",r:"Una experiencia es un journey transformacional completo — no es contenido suelto. Tiene modulos, lecciones progresivas, ejercicios practicos y culmina en un certificado. Cada experiencia tiene un inicio, un camino y un resultado medible en tu vida."},

  {q:"¿Quien crea el contenido?",r:"El contenido es creado por instructores, terapeutas y guardianes de sabiduria seleccionados y certificados por el equipo de Solo Gracias. Cada pieza pasa por revision editorial antes de publicarse."},

  {q:"¿Como puedo ser instructor de Solo Gracias?",r:"A traves de la Academia Solo Gracias formamos y certificamos a los instructores que impartiran su conocimiento en la plataforma. Si tenes conocimiento en transformacion personal, bienestar, sabiduria ancestral o cualquier disciplina afin, podes postularte."},

];

// ── TESTIMONIOS CARRUSEL ──────────────────────────────────────────────────

const testimoniosCarrusel = [

  {

    nombre:"María Elena Rodríguez",

    ciudad:"Asunción, Paraguay",

    profesion:"Maestra de escuela primaria",

    img:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80&fit=crop&crop=face",

    texto:"Después de 3 semanas practicando meditación con Solo Gracias, logré controlar la ansiedad que me acompañaba hace años. Mis alumnos notan la diferencia — soy más presente, más paciente. Esta plataforma habla mi idioma, entiende mi cultura.",

    resultado:"Redujo su ansiedad en 3 semanas",

    estrellas:5

  },

  {

    nombre:"Carlos Mendoza Ríos",

    ciudad:"Bogotá, Colombia",

    profesion:"Emprendedor digital",

    img:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&q=80&fit=crop&crop=face",

    texto:"Venía con el síndrome del emprendedor: trabajando 14 horas, sin dormir, sin conectar con mi familia. Las experiencias de propósito y abundancia de Solo Gracias me ayudaron a redefinir el éxito. Hoy trabajo menos y genero más.",

    resultado:"Transformó su relación con el trabajo",

    estrellas:5

  },

  {

    nombre:"Valentina Cruz Pérez",

    ciudad:"Ciudad de México, México",

    profesion:"Diseñadora gráfica",

    img:"https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=400&q=80&fit=crop&crop=face",

    texto:"Nunca pensé que una plataforma digital pudiera tocarme tan profundo. Las frecuencias sagradas y la conexión con la cosmovisión ancestral latinoamericana me devolvieron algo que había perdido: mi identidad. Gracias Solo Gracias.",

    resultado:"Reconectó con su identidad cultural",

    estrellas:5

  },

  {

    nombre:"Jorge Huanca Mamani",

    ciudad:"La Paz, Bolivia",

    profesion:"Contador y padre de familia",

    img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80&fit=crop&crop=face",

    texto:"Como hombre de negocios siempre fui escéptico de estas prácticas. Pero cuando vi que Solo Gracias conectaba la ciencia con la sabiduría guaraní y andina, le di una oportunidad. Cambió mi manera de liderar mi equipo y relacionarme con mis hijos.",

    resultado:"Mejoró su liderazgo y vida familiar",

    estrellas:5

  },

  {

    nombre:"Sofía Quispe Flores",

    ciudad:"Lima, Perú",

    profesion:"Psicóloga clínica",

    img:"https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&q=80&fit=crop&crop=face",

    texto:"Como psicóloga, busco herramientas que realmente funcionen. Solo Gracias combina evidencia científica con nuestra tradición ancestral de una manera que no había visto en ningún otro lugar. Lo recomiendo a mis pacientes y lo practico yo misma.",

    resultado:"Lo integró en su práctica clínica",

    estrellas:5

  },

];

// ─── NAV ───────────────────────────────────────────────────────────────────────

function Nav({page, setPage}:{page:string, setPage:(p:any)=>void}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (p:string, anchor?:string) => {
    setPage(p);
    setMenuOpen(false);
    if (anchor) setTimeout(()=>document.getElementById(anchor)?.scrollIntoView({behavior:"smooth"}), 80);
  };

  const navCss = `
    @media(max-width:768px){
      .sg-nav-links{display:none !important}
      .sg-nav-actions .sg-nav-ingresar{display:none !important}
      .sg-nav-actions .sg-nav-cta{display:none !important}
      .sg-nav-burger{display:flex !important}
      .sg-nav{padding:0 16px !important}
      .sg-nav-logo-text{font-size:14px !important}
    }
    @media(min-width:769px){
      .sg-nav-mobile-menu{display:none !important}
    }
  `;

  return (
    <>
      <style>{navCss}</style>
      <nav className="sg-nav" style={{position:"sticky",top:0,zIndex:50,background:"white",borderBottom:"1px solid #f0f0f0",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>

        <button onClick={()=>goTo("home")} style={{display:"flex",alignItems:"center",gap:10,background:"none",border:"none",cursor:"pointer"}}>
          <SpiralLogo color="#3D1E7A" size={42}/>
          <span className="sg-nav-logo-text" style={{fontFamily:"Georgia,serif",color:"#3D1E7A",fontSize:18,fontWeight:300,letterSpacing:"0.16em"}}>SOLO GRACIAS</span>
        </button>

        <div className="sg-nav-links" style={{display:"flex",alignItems:"center",gap:28}}>
          <button onClick={()=>goTo("home")} style={{fontSize:14,color:"#444",background:"none",border:"none",cursor:"pointer"}}>Inicio</button>
          <button onClick={()=>goTo("membresia")} style={{fontSize:14,color:"#444",background:"none",border:"none",cursor:"pointer"}}>Membresia</button>
          <button onClick={()=>goTo("academia-instructores")} style={{fontSize:14,color:"#444",background:"none",border:"none",cursor:"pointer"}}>Academia</button>
          <button onClick={()=>goTo("home","precios")} style={{fontSize:14,color:"#444",background:"none",border:"none",cursor:"pointer"}}>Precios</button>
          <button onClick={()=>goTo("comunidad")} style={{fontSize:14,color:"#444",background:"none",border:"none",cursor:"pointer"}}>Comunidad</button>
        </div>

        <div className="sg-nav-actions" style={{display:"flex",alignItems:"center",gap:12}}>
          <button className="sg-nav-ingresar" onClick={()=>goTo("onboarding")} style={{fontSize:14,color:"#6B21A8",background:"none",border:"none",cursor:"pointer",fontWeight:500}}>Ingresar</button>
          <button className="sg-nav-cta" onClick={()=>goTo("registro-programas")} style={{background:"#6B21A8",color:"white",border:"none",borderRadius:50,padding:"11px 24px",fontWeight:600,fontSize:14,cursor:"pointer"}}>Comenzar gratis</button>
          <button className="sg-nav-burger" onClick={()=>setMenuOpen(!menuOpen)} style={{display:"none",alignItems:"center",justifyContent:"center",width:40,height:40,background:"none",border:"none",cursor:"pointer",flexDirection:"column",gap:5}}>
            <span style={{width:22,height:2,background:"#3D1E7A",borderRadius:2,transition:"all 0.3s",...(menuOpen?{transform:"rotate(45deg) translate(5px,5px)"}:{})}}/>
            <span style={{width:22,height:2,background:"#3D1E7A",borderRadius:2,transition:"all 0.3s",...(menuOpen?{opacity:0}:{})}}/>
            <span style={{width:22,height:2,background:"#3D1E7A",borderRadius:2,transition:"all 0.3s",...(menuOpen?{transform:"rotate(-45deg) translate(5px,-5px)"}:{})}}/>
          </button>
        </div>

      </nav>

      {menuOpen && (
        <div className="sg-nav-mobile-menu" style={{position:"fixed",top:64,left:0,right:0,bottom:0,zIndex:49,background:"white",padding:"24px",display:"flex",flexDirection:"column",gap:8,overflowY:"auto"}}>
          {[{label:"Inicio",action:()=>goTo("home")},{label:"Membresía",action:()=>goTo("membresia")},{label:"Academia",action:()=>goTo("academia-instructores")},{label:"Precios",action:()=>goTo("home","precios")},{label:"Comunidad",action:()=>goTo("comunidad")}].map((item,i)=>(
            <button key={i} onClick={item.action} style={{fontSize:18,fontWeight:600,color:"#111",background:"none",border:"none",cursor:"pointer",padding:"14px 0",borderBottom:"1px solid #f0f0f0",textAlign:"left"}}>{item.label}</button>
          ))}
          <div style={{marginTop:16,display:"flex",flexDirection:"column",gap:10}}>
            <button onClick={()=>goTo("onboarding")} style={{fontSize:16,color:"#6B21A8",background:"none",border:"2px solid #6B21A8",cursor:"pointer",fontWeight:600,padding:"14px",borderRadius:50,textAlign:"center"}}>Ingresar</button>
            <button onClick={()=>goTo("registro-programas")} style={{background:"#6B21A8",color:"white",border:"none",borderRadius:50,padding:"14px",fontWeight:600,fontSize:16,cursor:"pointer",textAlign:"center"}}>Comenzar gratis</button>
          </div>
        </div>
      )}
    </>
  );

}

// ─── TESTIMONIOS CARRUSEL ─────────────────────────────────────────────────────

function TestimoniosCarrusel({setPage}:{setPage:(p:any)=>void}) {

  const [active, setActive] = useState(0);

  // Auto-avance cada 5 segundos

  const [,forceUpdate] = useState(0);

  if(typeof window!=="undefined"){

    // El intervalo se maneja via useEffect en prod

  }

  useEffect(()=>{

    const interval = setInterval(()=>{

      setActive(prev=>(prev+1)%testimoniosCarrusel.length);

    },5000);

    return ()=>clearInterval(interval);

  },[]);

  const t = testimoniosCarrusel[active];

  return (

    <div style={{position:"relative"}}>

      {/* Card principal del testimonio */}

      <div style={{

        background:"linear-gradient(135deg,#F7F5FF,#EDE9FF)",

        borderRadius:24,padding:"clamp(24px,4vw,48px)",

        display:"grid",gridTemplateColumns:"auto 1fr",gap:"clamp(16px,3vw,40px)",

        alignItems:"center",marginBottom:24,

        border:"1px solid #E8E0FF",

        minHeight:220

      }}>

        {/* Foto */}

        <div style={{position:"relative"}}>

          <div style={{

            width:"clamp(70px,12vw,120px)",height:"clamp(70px,12vw,120px)",borderRadius:"50%",overflow:"hidden",

            border:"4px solid #6B21A8",

            boxShadow:"0 8px 32px rgba(107,33,168,0.25)"

          }}>

            <img src={t.img} alt={t.nombre} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>

          </div>

          <div style={{

            position:"absolute",bottom:-8,right:-8,

            background:"#C9A84C",borderRadius:50,

            padding:"3px 10px",fontSize:10,fontWeight:700,color:"#1A0838"

          }}>✓ Verificado</div>

        </div>

        {/* Contenido */}

        <div>

          <div style={{display:"flex",gap:4,marginBottom:12}}>

            {"★★★★★".split("").map((s,i)=>(

              <span key={i} style={{color:"#C9A84C",fontSize:18}}>{s}</span>

            ))}

          </div>

          <p style={{

            fontSize:17,lineHeight:1.75,color:"#333",

            fontStyle:"italic",marginBottom:20,

            fontFamily:"Georgia,serif"

          }}>"{t.texto}"</p>

          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>

            <div>

              <p style={{fontWeight:700,fontSize:15,color:"#1A0838",margin:"0 0 2px"}}>{t.nombre}</p>

              <p style={{fontSize:13,color:"#888",margin:0}}>{t.profesion} · {t.ciudad}</p>

            </div>

            <div style={{

              background:"#EDE9FF",color:"#6B21A8",

              fontSize:12,fontWeight:700,

              padding:"5px 14px",borderRadius:50,

              border:"1px solid #D0C4FF"

            }}>{t.resultado}</div>

          </div>

        </div>

      </div>

      {/* Navegación — puntos + flechas */}

      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16}}>

        <button

          onClick={()=>setActive((active-1+testimoniosCarrusel.length)%testimoniosCarrusel.length)}

          style={{width:40,height:40,borderRadius:"50%",border:"2px solid #6B21A8",background:"white",color:"#6B21A8",fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}

        >‹</button>

        <div style={{display:"flex",gap:8}}>

          {testimoniosCarrusel.map((_,i)=>(

            <button

              key={i}

              onClick={()=>setActive(i)}

              style={{

                width:i===active?28:8,height:8,

                borderRadius:50,border:"none",cursor:"pointer",

                background:i===active?"#6B21A8":"#D0C4FF",

                transition:"all 0.3s"

              }}

            />

          ))}

        </div>

        <button

          onClick={()=>setActive((active+1)%testimoniosCarrusel.length)}

          style={{width:40,height:40,borderRadius:"50%",border:"2px solid #6B21A8",background:"white",color:"#6B21A8",fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}

        >›</button>

      </div>

      {/* Miniaturas de las otras personas */}

      <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:24}}>

        {testimoniosCarrusel.map((tc,i)=>(

          <div

            key={i}

            onClick={()=>setActive(i)}

            style={{

              width:i===active?56:44,

              height:i===active?56:44,

              borderRadius:"50%",overflow:"hidden",cursor:"pointer",

              border:i===active?"3px solid #6B21A8":"2px solid #E8E0FF",

              transition:"all 0.3s",

              opacity:i===active?1:0.6,

              flexShrink:0

            }}

          >

            <img src={tc.img} alt={tc.nombre} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>

          </div>

        ))}

      </div>

    </div>

  );

}

// ─── HOME ──────────────────────────────────────────────────────────────────────

function Home({setPage, goToExperiencia, onAuthClick}:{setPage:(p:any)=>void, goToExperiencia:(id:string)=>void, onAuthClick:()=>void}) {

  const [open, setOpen] = useState<number|null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const check = ()=>setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return ()=>window.removeEventListener("resize", check);
  },[]);

  // Partículas doradas flotantes en el hero
  useEffect(()=>{
    const container = document.getElementById("sg-particles");
    if(!container || container.childElementCount > 0) return;
    const style = document.createElement("style");
    style.textContent = `@keyframes sgParticleDrift{0%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:1}90%{opacity:.35}100%{transform:translateY(-130px) translateX(35px);opacity:0}}.sg-particle{position:absolute;background:#C9A84C;border-radius:50%;animation:sgParticleDrift linear infinite}`;
    document.head.appendChild(style);
    for(let i=0;i<20;i++){
      const p=document.createElement("div");
      p.className="sg-particle";
      const size=1+Math.random()*2.5;
      p.style.cssText=`left:${Math.random()*100}%;bottom:${Math.random()*40}%;width:${size}px;height:${size}px;animation-duration:${5+Math.random()*9}s;animation-delay:${Math.random()*7}s;opacity:${.25+Math.random()*.45}`;
      container.appendChild(p);
    }
    return ()=>{ if(container) container.innerHTML=""; };
  },[]);

  return (

    <main style={{minHeight:"100vh",background:"white",fontFamily:"system-ui,sans-serif"}}>

      <section style={{position:"relative",overflow:"hidden",minHeight:700,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px) 0",textAlign:"center"}}>

        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 0%, #7C3ABD 0%, #4C1D95 40%, #2D0F5E 75%, #1A0838 100%)"}}/>

        {/* Partículas doradas flotantes */}
        <div id="sg-particles" style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:1}}/>

        <div style={{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=40&fit=crop')",backgroundSize:"cover",backgroundPosition:"center",opacity:0.06}}/>

        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"40%",background:"linear-gradient(to bottom,transparent,#4C1D95)"}}/>

        <div style={{position:"relative",zIndex:2,maxWidth:860,margin:"0 auto"}}>

          <h1 style={{color:"white",fontSize:"clamp(44px,5.5vw,80px)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.02em",marginBottom:22}}>

            La sabiduria de tu cultura,{" "}<span style={{color:"#C9A84C"}}>finalmente en tu idioma.</span>

          </h1>

          <p style={{color:"rgba(255,255,255,0.72)",fontSize:19,fontWeight:300,lineHeight:1.65,maxWidth:560,margin:"0 auto 40px"}}>

            La primera plataforma de crecimiento personal construida para los 700 millones de hispanohablantes del mundo.

          </p>

          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:52}}>

            <button onClick={()=>setPage("registro-programas")} style={{background:"white",color:"#3D1E7A",fontWeight:700,fontSize:16,padding:"16px 36px",borderRadius:50,border:"none",cursor:"pointer"}}>Comenzar gratis</button>

            <button onClick={()=>document.getElementById("experiencias")?.scrollIntoView({behavior:"smooth"})} style={{background:"transparent",color:"white",fontWeight:500,fontSize:16,padding:"16px 36px",borderRadius:50,border:"2px solid rgba(255,255,255,0.4)",cursor:"pointer"}}>Explorar experiencias</button>

          </div>

          <div style={{maxWidth:760,margin:"0 auto",background:"rgba(26,8,56,0.7)",borderRadius:"20px 20px 0 0",border:"1px solid rgba(255,255,255,0.12)",borderBottom:"none",aspectRatio:"16/9",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:14}}>

            <button onClick={()=>setPage("onboarding")} style={{width:68,height:68,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.35)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>

              <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><polygon points="6,3 20,12 6,21"/></svg>

            </button>

            <p style={{color:"rgba(255,255,255,0.55)",fontSize:13,letterSpacing:"0.12em",textTransform:"uppercase",margin:0}}>Video de presentacion</p>

            <p style={{color:"#C9A84C",fontSize:11,letterSpacing:"0.1em",margin:0}}>PROXIMAMENTE</p>

          </div>

        </div>

      </section>

      <section style={{background:"white",padding:"32px clamp(16px,4vw,40px)",textAlign:"center",borderBottom:"1px solid #f0f0f0"}}>

        <p style={{color:"#bbb",fontSize:11,fontWeight:600,letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:18}}>Presentado en</p>

        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:40}}>

          <span style={{fontSize:17,fontWeight:800,color:"#1a1a1a",fontFamily:"Georgia,serif"}}>Moonshot 2026</span>

          <span style={{fontSize:17,fontWeight:700,color:"#1a1a1a",letterSpacing:"0.06em"}}>ITTI</span>

          <span style={{fontSize:17,fontWeight:600,color:"#1a1a1a",fontStyle:"italic",fontFamily:"Georgia,serif"}}>BeYoga Day</span>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",textAlign:"center",background:"white"}}>

        <div style={{maxWidth:720,margin:"0 auto"}}>

          <h2 style={{fontSize:"clamp(36px,4.5vw,58px)",fontWeight:900,color:"#111",lineHeight:1.05,marginBottom:24,letterSpacing:"-0.01em"}}>

            Comienza tu viaje de <span style={{color:"#6B21A8"}}>transformación</span> hoy.

          </h2>

          <p style={{color:"#555",fontSize:18,lineHeight:1.75,maxWidth:620,margin:"0 auto 40px"}}>

            El despertar de tu potencial en todas las áreas de tu vida te abrirá puertas hacia más abundancia, presencia, paz mental y gratitud. Solo Gracias te trae la sabiduría ancestral de Latinoamérica — en tu lengua, para que te reconectes con tus raíces más <strong style={{color:"#3D1E7A"}}>profundas.</strong>

          </p>

          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:36}}>

            <button onClick={onAuthClick} style={{background:"#6B21A8",color:"white",fontWeight:600,fontSize:15,padding:"15px 36px",borderRadius:50,border:"none",cursor:"pointer"}}>Hazte miembro</button>

            <button onClick={()=>document.getElementById("paraguay")?.scrollIntoView({behavior:"smooth"})} style={{background:"white",color:"#6B21A8",fontWeight:600,fontSize:15,padding:"15px 36px",borderRadius:50,border:"2px solid #6B21A8",cursor:"pointer"}}>Paraguay</button>

          </div>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:56}}>

            <div style={{display:"flex"}}>

              {["https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?w=80&q=80&fit=crop&crop=face",

                "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=80&q=80&fit=crop&crop=face",

                "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=80&q=80&fit=crop&crop=face",

                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&q=80&fit=crop&crop=face",

                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=80&q=80&fit=crop&crop=face"

              ].map((src,i)=><img key={i} src={src} alt="" style={{width:40,height:40,borderRadius:"50%",border:"2px solid white",marginLeft:i===0?0:-10,objectFit:"cover",objectPosition:"top"}}/>)}

            </div>

            <div style={{textAlign:"left"}}>

              <p style={{fontSize:13,fontWeight:600,color:"#111",margin:0}}>Lista de espera abierta</p>

              <p style={{fontSize:12,color:"#aaa",margin:0}}>Sé parte de los primeros</p>

            </div>

          </div>

          <form
            onSubmit={async (e)=>{
              e.preventDefault();
              const fd=new FormData(e.target as HTMLFormElement);
              await fetch("https://formspree.io/f/xwvalyzr",{method:"POST",body:fd,headers:{"Accept":"application/json"}});
              (e.target as HTMLFormElement).reset();
              alert("¡Gracias! Te avisamos cuando estemos listos.");
            }}
            style={{display:"flex",gap:10,marginBottom:32,flexWrap:"wrap"}}
          >
            <input type="email" name="email" required placeholder="Tu correo electrónico" style={{flex:1,minWidth:220,padding:"13px 20px",borderRadius:50,border:"1px solid #e0d5f5",background:"#faf8ff",color:"#1A0838",fontSize:15,outline:"none",fontFamily:"system-ui,sans-serif"}}/>
            <button type="submit" style={{padding:"13px 28px",borderRadius:50,border:"none",background:"#C9A84C",color:"#1A0838",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"system-ui,sans-serif",whiteSpace:"nowrap"}}>Yo Soy Solo Gracias</button>
          </form>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:24,paddingTop:48,borderTop:"1px solid #f0f0f0"}}>

            {[{num:"700M+",label:"Hispanohablantes en el mundo"},{num:"90%",label:"Más accesible que Mindvalley"},{num:"30",label:"Días gratis para explorar"}].map((s,i)=>(

              <div key={i}>

                <p style={{fontSize:38,fontWeight:900,color:"#6B21A8",margin:"0 0 4px",lineHeight:1}}>{s.num}</p>

                <p style={{fontSize:13,color:"#888",margin:0,lineHeight:1.4}}>{s.label}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section id="experiencias" style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#f9f9f9",scrollMarginTop:64}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>Crecimiento en todas las areas</p>

          <h2 style={{fontSize:"clamp(32px,4vw,52px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:12,maxWidth:580}}>Experiencias que transforman tu vida, en tu idioma.</h2>

          <p style={{color:"#666",fontSize:17,marginBottom:48,maxWidth:520}}>Cada experiencia es un journey guiado con estructura educativa real, progreso medible y certificacion al completar.</p>

          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:20}}>

            {experiencias.map((e,i)=>(

              <div key={i} onClick={()=>goToExperiencia(e.id)} style={{borderRadius:16,overflow:"hidden",background:"white",border:"1px solid #eee",cursor:"pointer"}}>

                <div style={{position:"relative",height:192,overflow:"hidden"}}>

                  <img src={e.img} alt={e.title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>

                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.75),transparent)"}}/>

                  <div style={{position:"absolute",bottom:14,left:14}}>

                    <p style={{color:"#C9A84C",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>{e.cat}</p>

                    <p style={{color:"white",fontWeight:700,fontSize:15,margin:0,lineHeight:1.3}}>{e.title}</p>

                  </div>

                </div>

                <div style={{padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

                  <span style={{color:"#aaa",fontSize:12}}>{e.sub}</span>

                  <span style={{color:"#6B21A8",fontSize:12,fontWeight:600,cursor:"pointer"}}>Ver experiencia →</span>

                </div>

              </div>

            ))}

          </div>

          <div style={{textAlign:"center",marginTop:40}}>

            <button onClick={()=>setPage("onboarding")} style={{border:"2px solid #6B21A8",background:"white",color:"#6B21A8",fontWeight:600,fontSize:14,padding:"13px 32px",borderRadius:50,cursor:"pointer"}}>Ver todas las experiencias</button>

          </div>

        </div>

      </section>

      {/* SECCIÓN NEUROCIENCIA — imagen cerebro cósmico de fondo completo */}

      <section style={{position:"relative",overflow:"hidden",minHeight:520,display:"flex",alignItems:"center"}}>

        {/* Imagen cerebro neuronal generada IA — sin watermarks */}

        <img

          src="/cerebro-neuronal-clean.jpg"

          alt="Neuroplasticidad"

          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 35%"}}

        />

        {/* Overlay degradado suave — deja ver el cerebro */}

        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(15,8,32,0.82) 0%, rgba(61,30,122,0.65) 45%, rgba(15,8,32,0.78) 100%)"}}/>

        {/* Contenido */}

        <div style={{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",width:"100%"}}>

          <div style={{maxWidth:620}}>

            <span style={{display:"inline-block",background:"rgba(201,168,76,0.15)",border:"1px solid rgba(201,168,76,0.5)",color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",padding:"5px 18px",borderRadius:50,marginBottom:20}}>Neurociencia aplicada</span>

            <h2 style={{color:"white",fontSize:"clamp(32px,4vw,58px)",fontWeight:900,lineHeight:1.05,marginBottom:8,letterSpacing:"-0.02em"}}>

              Neuroplasticidad

            </h2>

            <h3 style={{color:"#9B6DFF",fontSize:"clamp(18px,2.5vw,32px)",fontWeight:900,lineHeight:1.1,marginBottom:20,letterSpacing:"0.04em",textTransform:"uppercase"}}>

              La ciencia de reprogramarse

            </h3>

            <p style={{color:"rgba(255,255,255,0.7)",fontSize:17,lineHeight:1.75,marginBottom:32,maxWidth:540}}>

              La meditación, la respiración consciente y las prácticas ancestrales cambian físicamente la estructura de tu cerebro. Harvard, Stanford y Nature lo demuestran.

            </p>

            <div style={{display:"flex",gap:32,marginBottom:36,flexWrap:"wrap"}}>

              {[{n:"8",l:"semanas para cambiar el cerebro (Harvard)"},{n:"65%",l:"más éxito con mentalidad de crecimiento"},{n:"30%",l:"reducción de cortisol comprobada"}].map((s,i)=>(

                <div key={i}>

                  <div style={{fontSize:32,fontWeight:900,color:"#C9A84C",lineHeight:1}}>{s.n}</div>

                  <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",marginTop:4,lineHeight:1.35,maxWidth:100}}>{s.l}</div>

                </div>

              ))}

            </div>

            <button onClick={()=>setPage("neurociencia")} style={{background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:16,padding:"16px 44px",borderRadius:50,border:"none",cursor:"pointer",letterSpacing:"0.02em"}}>

              Explorar la ciencia →

            </button>

          </div>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px) clamp(32px,5vw,64px)",background:"white",overflow:"hidden"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          {/* TÍTULO */}

          <div style={{textAlign:"center",marginBottom:52}}>

            <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>Transformación real</p>

            <h2 style={{fontSize:"clamp(36px,4.5vw,60px)",fontWeight:900,color:"#111",margin:"0 0 14px",lineHeight:1.05}}>

              Estudios de casos <span style={{color:"#6B21A8"}}>de éxito</span>

            </h2>

            <p style={{color:"#777",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.65}}>

              Solo Gracias busca ser reconocida como la plataforma con uno de los índices de transformación más altos del mundo hispanohablante.

            </p>

          </div>

          {/* CARRUSEL */}

          <TestimoniosCarrusel setPage={setPage}/>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#f9f9f9",textAlign:"center"}}>

        <div style={{maxWidth:800,margin:"0 auto"}}>

          <h2 style={{fontSize:"clamp(32px,4vw,56px)",fontWeight:900,color:"#111",marginBottom:16}}>Transforma con Solo Gracias.</h2>

          <p style={{color:"#666",fontSize:18,lineHeight:1.65,maxWidth:560,margin:"0 auto 36px"}}>Obtene acceso ilimitado a las experiencias, en tu lengua, con tus raices.</p>

          <button onClick={onAuthClick} style={{background:"#6B21A8",color:"white",fontWeight:600,fontSize:16,padding:"16px 48px",borderRadius:50,border:"none",cursor:"pointer"}}>Hazte miembro</button>

        </div>

      </section>

      <section id="creadores" style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"white"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <h2 style={{fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:12,maxWidth:600}}>Conviertete en instructor certificado de Solo Gracias.</h2>

          <p style={{color:"#555",fontSize:17,lineHeight:1.65,maxWidth:580,marginBottom:36}}>Impulsa tu carrera compartiendo tu conocimiento con el mundo hispanohablante.</p>

          <button onClick={()=>setPage("academia-instructores")} style={{border:"2px solid #6B21A8",background:"white",color:"#6B21A8",fontWeight:600,fontSize:14,padding:"13px 32px",borderRadius:50,cursor:"pointer",marginBottom:48}}>Convertirme en instructor</button>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:16}}>

            {[{esp:"Meditacion",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop&crop=top"},{esp:"Yoga",img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=top"},{esp:"Sabiduria guarani",img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=top"},{esp:"Frecuencias",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&fit=crop&crop=top"},{esp:"Respiracion",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=top"}].map((c,i)=>(

              <div key={i} onClick={()=>setPage("academia-instructores")} style={{borderRadius:16,overflow:"hidden",position:"relative",aspectRatio:"3/4",cursor:"pointer"}}>

                <img src={c.img} alt={c.esp} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>

                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.05) 60%,transparent 100%)"}}/>

                <div style={{position:"absolute",bottom:12,left:12,right:12}}><p style={{color:"#C9A84C",fontSize:9,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 2px"}}>{c.esp}</p><p style={{color:"white",fontSize:12,fontWeight:700,margin:0}}>PROXIMAMENTE</p></div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#f9f9f9"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>Proximamente</p>

          <h2 style={{fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:12,maxWidth:560}}>Explora los eventos que Solo Gracias esta programando para vos.</h2>

          <p style={{color:"#555",fontSize:17,lineHeight:1.65,maxWidth:540,marginBottom:36}}>Retiros, ceremonias de sonido, encuentros de meditacion y eventos presenciales en toda Latinoamerica.</p>

          <button onClick={()=>setPage("comunidad")} style={{border:"2px solid #6B21A8",background:"white",color:"#6B21A8",fontWeight:600,fontSize:14,padding:"13px 32px",borderRadius:50,cursor:"pointer",marginBottom:40}}>Ver eventos</button>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:8,borderRadius:20,overflow:"hidden"}}>

            {["https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80&fit=crop","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&fit=crop","https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80&fit=crop"].map((src,i)=>(

              <div key={i} style={{height:"clamp(160px,25vw,200px)",overflow:"hidden"}}><img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>

            ))}

          </div>

        </div>

      </section>

      <section id="paraguay" style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"white"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>El corazon de Solo Gracias</p>

          <h2 style={{fontSize:"clamp(32px,4vw,52px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:16,maxWidth:580}}>Historias de Paraguay</h2>

          <p style={{color:"#555",fontSize:17,lineHeight:1.65,maxWidth:560,marginBottom:48}}>Paraguay es donde nacio Solo Gracias. Estas son las historias reales de personas que ya estan viviendo su transformacion.</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:24,marginBottom:48}}>

            {[{n:"[Nombre]",r:"[Profesion]",c:"Asuncion, Paraguay",t:"[Historia real — a completar]",img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop&crop=top"},{n:"[Nombre]",r:"[Profesion]",c:"Encarnacion, Paraguay",t:"[Historia real — a completar]",img:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80&fit=crop&crop=top"},{n:"[Nombre]",r:"[Profesion]",c:"Ciudad del Este, Paraguay",t:"[Historia real — a completar]",img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=top"}].map((h,i)=>(

              <div key={i} style={{borderRadius:20,overflow:"hidden",border:"1px solid #eee"}}>

                <div style={{height:240,overflow:"hidden"}}><img src={h.img} alt={h.n} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/></div>

                <div style={{padding:"20px 22px"}}>

                  <p style={{fontSize:16,fontWeight:700,color:"#111",lineHeight:1.5,marginBottom:16}}>"{h.t}"</p>

                  <p style={{fontWeight:700,fontSize:14,color:"#111",margin:"0 0 2px"}}>{h.n}</p>

                  <p style={{color:"#888",fontSize:13,margin:0}}>{h.r} · {h.c}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section style={{background:"linear-gradient(135deg,#0F0820 0%,#2D0F5E 50%,#1A0838 100%)",padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",textAlign:"center"}}>

        <div style={{maxWidth:700,margin:"0 auto"}}>

          <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:16}}>Academia Solo Gracias</p>

          <h2 style={{color:"white",fontSize:"clamp(32px,4vw,56px)",fontWeight:900,lineHeight:1.1,marginBottom:16}}>Certificado para transformar.</h2>

          <p style={{color:"rgba(255,255,255,0.65)",fontSize:18,lineHeight:1.65,maxWidth:520,margin:"0 auto 36px"}}>Conviertete en un instructor certificado, formado por Solo Gracias.</p>

          <button onClick={()=>setPage("academia-instructores")} style={{background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:16,padding:"16px 48px",borderRadius:50,border:"none",cursor:"pointer"}}>Explorar la Academia</button>

        </div>

      </section>

      <section id="precios" style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"white",scrollMarginTop:64}}>

        <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>Planes accesibles</p>

          <h2 style={{fontSize:"clamp(32px,4vw,52px)",fontWeight:900,color:"#111",marginBottom:12}}>Un plan para cada etapa.</h2>

          <p style={{color:"#888",fontSize:17,marginBottom:52}}>36% mas barato que Gaia. 90% mas barato que Mindvalley.</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>

            {[{n:"Libre",p:"Gratis",s:"para siempre",f:["3 experiencias por mes","Clases de muestra","Newsletter","Comunidad basica"],c:"Comenzar gratis",d:false},{n:"Esencia",p:"$9.99",s:"/mes o $99/ano",f:["Acceso ilimitado a todas las experiencias","App movil","Comunidad completa","Nuevas experiencias semanales","Certificados"],c:"Comenzar 30 dias gratis",d:true},{n:"Alma+",p:"$19.99",s:"/mes o $199/ano",f:["Todo de Esencia","Eventos en vivo exclusivos","Sesiones grupales","Retiros con descuento","Soporte dedicado"],c:"Seleccionar plan",d:false}].map((p,i)=>(

              <div key={i} style={{borderRadius:20,padding:"32px",border:p.d?"2px solid #6B21A8":"1px solid #e5e7eb",textAlign:"left",position:"relative",background:"white"}}>

                {p.d&&<div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",background:"#C9A84C",color:"#1A0A3D",fontSize:11,fontWeight:700,padding:"4px 18px",borderRadius:50,whiteSpace:"nowrap"}}>Mas popular</div>}

                <p style={{color:"#888",fontSize:13,margin:"0 0 4px"}}>{p.n}</p>

                <p style={{fontSize:44,fontWeight:900,color:"#111",margin:"0 0 2px",lineHeight:1}}>{p.p}</p>

                <p style={{color:"#aaa",fontSize:13,margin:"0 0 24px"}}>{p.s}</p>

                <button onClick={()=>setPage(p.d?"pago":"membresia")} style={{width:"100%",padding:"13px",borderRadius:50,fontWeight:600,fontSize:14,marginBottom:24,cursor:"pointer",background:p.d?"#6B21A8":"white",color:p.d?"white":"#444",border:p.d?"none":"2px solid #e5e7eb"}}>{p.c}</button>

                <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10}}>

                  {p.f.map((f,j)=><li key={j} style={{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,color:"#555"}}><span style={{color:"#6B21A8",fontWeight:700,flexShrink:0}}>✓</span>{f}</li>)}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section id="faq" style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#f9f9f9"}}>

        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(24px,4vw,64px)",alignItems:"start"}}>

          <div>

            <h2 style={{fontSize:"clamp(28px,3vw,42px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:16}}>Preguntas frecuentes</h2>

            <p style={{color:"#666",fontSize:15,lineHeight:1.65}}>Consulta las respuestas a las preguntas mas frecuentes sobre Solo Gracias.</p>

          </div>

          <div style={{display:"flex",flexDirection:"column",gap:8}}>

            {faqs.map((f,i)=>(

              <div key={i} style={{background:"white",borderRadius:14,overflow:"hidden",border:"1px solid #eee"}}>

                <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>

                  <span style={{fontWeight:600,color:"#111",fontSize:14}}>{f.q}</span>

                  <span style={{color:"#6B21A8",fontSize:22,marginLeft:16,fontWeight:300,flexShrink:0}}>{open===i?"−":"+"}</span>

                </button>

                {open===i&&<div style={{padding:"0 22px 18px",color:"#666",fontSize:14,lineHeight:1.65,borderTop:"1px solid #f5f5f5"}}><p style={{margin:"12px 0 0"}}>{f.r}</p></div>}

              </div>

            ))}

          </div>

        </div>

      </section>

      <section style={{background:"linear-gradient(135deg,#f0e8ff 0%,#e8f4e8 100%)",padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(20px,4vw,48px)",alignItems:"center"}}>

          <div style={{borderRadius:20,overflow:"hidden",position:"relative",minHeight:"clamp(280px,40vw,400px)"}}>

            <img src="/rita.jpg" alt="Rita Margonato" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",position:"absolute",inset:0}}/>

            <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top,rgba(15,8,32,0.9),transparent)",padding:"clamp(16px,3vw,24px)"}}>

              <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",margin:"0 0 4px"}}>Fundadora y directora</p>

              <p style={{color:"white",fontWeight:900,fontSize:"clamp(18px,2.5vw,24px)",margin:0}}>Rita Margonato</p>

            </div>

          </div>

          <div>

            <h2 style={{fontSize:"clamp(28px,3vw,44px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:12}}>Evoluciona un paso cada dia.</h2>

            <p style={{fontWeight:600,fontSize:16,color:"#333",marginBottom:16}}>Tu mente. Tu vida. Tu transformacion.</p>

            <p style={{color:"#555",fontSize:15,lineHeight:1.65,marginBottom:28}}>Bienvenido a Solo Gracias Daily. Te enviaremos sabiduria ancestral, herramientas de transformacion y los ultimos contenidos directamente a tu bandeja de entrada.</p>

            <div style={{display:"flex",flexDirection:"column",gap:12}}>

              <input type="email" placeholder="Tu direccion de correo electronico" style={{width:"100%",padding:"14px 20px",borderRadius:50,border:"1px solid #ddd",fontSize:14,outline:"none",boxSizing:"border-box" as any}}/>

              <button style={{width:"100%",background:"#6B21A8",color:"white",fontWeight:700,padding:"14px",borderRadius:50,border:"none",cursor:"pointer",fontSize:15}} onClick={()=>alert("¡Gracias! Te avisamos cuando lancemos.")}>Suscribirme</button>

            </div>

            <p style={{color:"#aaa",fontSize:12,marginTop:10}}>Tus datos estan seguros. Podes darte de baja cuando quieras.</p>

          </div>

        </div>

      </section>

      <footer style={{background:"white",padding:"clamp(24px,4vw,48px) clamp(16px,4vw,40px)",borderTop:"1px solid #f0f0f0"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:24,marginBottom:32}}>

            <div style={{display:"flex",alignItems:"center",gap:10}}><SpiralLogo color="#3D1E7A" size={32}/><span style={{fontFamily:"Georgia,serif",color:"#3D1E7A",fontSize:15,fontWeight:300,letterSpacing:"0.16em"}}>SOLO GRACIAS</span></div>

            <div style={{display:"flex",gap:28,flexWrap:"wrap"}}>{[

              {label:"Experiencias", action:()=>{ setPage("home"); setTimeout(()=>document.getElementById("experiencias")?.scrollIntoView({behavior:"smooth"}),80); }},

              {label:"Creadores", action:()=>{ setPage("home"); setTimeout(()=>document.getElementById("creadores")?.scrollIntoView({behavior:"smooth"}),80); }},

              {label:"Academia", action:()=>setPage("academia-instructores")},

              {label:"Paraguay", action:()=>{ setPage("home"); setTimeout(()=>document.getElementById("paraguay")?.scrollIntoView({behavior:"smooth"}),80); }},

              {label:"Precios", action:()=>{ setPage("home"); setTimeout(()=>document.getElementById("precios")?.scrollIntoView({behavior:"smooth"}),80); }},

              {label:"FAQ", action:()=>{ setPage("home"); setTimeout(()=>document.getElementById("faq")?.scrollIntoView({behavior:"smooth"}),80); }},

              {label:"Contacto", action:()=>setPage("onboarding")},

            ].map(l=><button key={l.label} onClick={l.action} style={{color:"#444",fontSize:13,textDecoration:"none",background:"none",border:"none",cursor:"pointer"}}>{l.label}</button>)}</div>

          </div>

          <div style={{borderTop:"1px solid #f0f0f0",paddingTop:24,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,alignItems:"center"}}>

            <p style={{color:"#aaa",fontSize:12,margin:0}}>2026 Solo Gracias. Todos los derechos reservados.</p>

            <p style={{color:"#444",fontSize:12,margin:0}}>info@sologracias.com</p>

          </div>

        </div>

      </footer>

    </main>

  );

}

// ─── MEMBRESIA ─────────────────────────────────────────────────────────────────

function Membresia({setPage, onAuthClick}:{setPage:(p:any)=>void, onAuthClick:()=>void}) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const check = ()=>setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return ()=>window.removeEventListener("resize", check);
  },[]);

  const mosaico = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=400&q=80&fit=crop",
  ];

  const pilares = [
    {img:"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80&fit=crop",titulo:"Sabiduria viva, no teoria",desc:"Nuestros instructores no ensenan desde libros. Ensenan desde la experiencia propia. Cada programa nace de una transformacion real."},
    {img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fit=crop",titulo:"Comunidad que sostiene",desc:"El cambio en soledad es dificil. En Solo Gracias te rodeas de personas que ya decidieron vivir diferente. La comunidad es parte del metodo."},
    {img:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80&fit=crop",titulo:"Raices latinoamericanas",desc:"Somos la primera plataforma construida desde la sabiduria ancestral de nuestra region. En tu idioma, para tu alma."},
  ];

  const testimonios = [
    {texto:"Llevo 3 meses en Solo Gracias y por primera vez siento que estoy viviendo mi vida, no la que me dijeron que tenia que vivir.",nombre:"Carolina M.",lugar:"Buenos Aires, Argentina"},
    {texto:"La experiencia de proposito de vida me cambio completamente. Encontre mi mision en 8 semanas despues de anos buscandola.",nombre:"Rodrigo V.",lugar:"Ciudad de Mexico, Mexico"},
    {texto:"Nunca pense que una plataforma online pudiera darme lo que anos de terapia no lograron. La comunidad es lo que lo hace diferente.",nombre:"Valentina S.",lugar:"Bogota, Colombia"},
  ];

  return (

    <main style={{minHeight:"100vh",background:"white",fontFamily:"system-ui,sans-serif"}}>

      <section style={{background:"white",padding:isMobile?"48px 20px 32px":"clamp(60px,8vw,100px) clamp(16px,4vw,40px) 48px",textAlign:"center"}}>

        <div style={{maxWidth:820,margin:"0 auto 48px"}}>
          <p style={{color:"#6B21A8",fontSize:12,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:16}}>La educacion que tu escuela olvido darte</p>
          <h1 style={{fontSize:"clamp(36px,5.5vw,72px)",fontWeight:900,color:"#111",lineHeight:1.05,marginBottom:20,fontFamily:"Georgia,serif"}}>Solo Gracias te enseña el arte de vivir la vida para la que naciste.</h1>
          <p style={{fontSize:18,color:"#555",lineHeight:1.75,maxWidth:600,margin:"0 auto 36px"}}>Somos la primera plataforma de transformacion personal en espanol, construida desde la sabiduria ancestral latinoamericana. Una membresia. Mas de 20 experiencias que cambian vidas.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={onAuthClick} style={{background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:17,padding:"18px 44px",borderRadius:50,border:"none",cursor:"pointer"}}>Hazte miembro</button>
            <button onClick={()=>setPage("pago")} style={{background:"white",color:"#6B21A8",fontWeight:600,fontSize:16,padding:"18px 36px",borderRadius:50,border:"2px solid #6B21A8",cursor:"pointer"}}>Ver planes</button>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginTop:20}}>
            {"★★★★★".split("").map((s,i)=><span key={i} style={{color:"#C9A84C",fontSize:18}}>{s}</span>)}
            <span style={{color:"#777",fontSize:14,marginLeft:6}}>Valoracion 4.9 · primeros miembros</span>
          </div>
        </div>

        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(3,1fr)",gridTemplateRows:isMobile?"repeat(3,160px)":"repeat(2,200px)",gap:8,borderRadius:20,overflow:"hidden"}}>
          {mosaico.map((src,i)=>(
            <div key={i} style={{position:"relative",overflow:"hidden",background:"#eee"}}>
              <img src={src} alt="" loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
            </div>
          ))}
        </div>

      </section>

      <section style={{background:"#FAFAFA",padding:isMobile?"40px 20px":"56px 40px",borderTop:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
        <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(4,1fr)",gap:isMobile?24:0,textAlign:"center"}}>
          {[
            {num:"700M+",label:"Hispanohablantes en el mundo"},
            {num:"21",label:"Paises de Latinoamerica y Espana"},
            {num:"20+",label:"Experiencias transformadoras"},
            {num:"4.9★",label:"Valoracion de nuestros miembros"},
          ].map((s,i)=>(
            <div key={i} style={{padding:"0 20px",borderLeft:(!isMobile&&i>0)?"1px solid #e5e7eb":"none"}}>
              <p style={{fontSize:"clamp(32px,4vw,52px)",fontWeight:900,color:"#3D1E7A",margin:"0 0 6px",lineHeight:1}}>{s.num}</p>
              <p style={{fontSize:13,color:"#777",lineHeight:1.4,margin:0}}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:isMobile?"48px 20px":"clamp(60px,8vw,100px) clamp(16px,4vw,40px)",background:"white"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?36:80,alignItems:"center"}}>

          <div>
            <p style={{color:"#C9A84C",fontSize:12,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:14}}>Por que existimos</p>
            <h2 style={{fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,color:"#111",marginBottom:24,fontFamily:"Georgia,serif",lineHeight:1.1}}>La educacion tradicional te enseno a trabajar. Nosotros te ensenamos a vivir.</h2>
            <p style={{color:"#444",fontSize:16,lineHeight:1.8,marginBottom:14}}>Aprendiste historia, <strong style={{color:"#111"}}>pero no quien sos realmente.</strong></p>
            <p style={{color:"#444",fontSize:16,lineHeight:1.8,marginBottom:14}}>Estudiaste materias, <strong style={{color:"#111"}}>pero no tu proposito de vida.</strong></p>
            <p style={{color:"#444",fontSize:16,lineHeight:1.8,marginBottom:24}}>Avanzaste en tu carrera, <strong style={{color:"#111"}}>pero te falto plenitud.</strong></p>
            <p style={{color:"#3D1E7A",fontWeight:700,fontSize:17,lineHeight:1.7,marginBottom:28,borderLeft:"3px solid #C9A84C",paddingLeft:16}}>Solo Gracias existe para cerrar esa brecha. Somos la educacion que tu alma siempre pidio.</p>
            <button onClick={onAuthClick} style={{background:"#6B21A8",color:"white",fontWeight:700,fontSize:15,padding:"15px 36px",borderRadius:50,border:"none",cursor:"pointer"}}>Comenzar ahora</button>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,height:isMobile?320:480}}>
            <div style={{borderRadius:16,overflow:"hidden",gridRow:"span 2"}}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80&fit=crop" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div style={{borderRadius:16,overflow:"hidden"}}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80&fit=crop" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div style={{borderRadius:16,overflow:"hidden"}}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&fit=crop" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
          </div>

        </div>
      </section>

      <section style={{background:"#1A0838",padding:isMobile?"48px 24px":"80px 40px",textAlign:"center"}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <SpiralLogo color="#C9A84C" size={48}/>
          <p style={{color:"white",fontSize:"clamp(20px,2.8vw,30px)",fontFamily:"Georgia,serif",fontWeight:400,lineHeight:1.65,margin:"28px 0 24px",fontStyle:"italic"}}>"Latinoamerica tiene una sabiduria milenaria que el mundo necesita. Solo Gracias es el puente entre esa sabiduria y la vida que cada hispanohablante merece vivir."</p>
          <p style={{color:"#C9A84C",fontSize:14,fontWeight:700,letterSpacing:"0.1em"}}>— Fundador, Solo Gracias</p>
        </div>
      </section>

      <section style={{padding:isMobile?"48px 20px":"clamp(60px,8vw,100px) clamp(16px,4vw,40px)",background:"white"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:56}}>
            <p style={{color:"#6B21A8",fontSize:12,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:12}}>Por que Solo Gracias es diferente</p>
            <h2 style={{fontSize:"clamp(28px,3.5vw,52px)",fontWeight:900,color:"#111",fontFamily:"Georgia,serif",marginBottom:16,lineHeight:1.1}}>No vendemos cursos. Construimos personas.</h2>
            <p style={{color:"#666",fontSize:17,maxWidth:560,margin:"0 auto"}}>Tres principios que hacen de Solo Gracias una experiencia unica en el mundo hispanohablante.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:28}}>
            {pilares.map((p,i)=>(
              <div key={i} style={{borderRadius:20,overflow:"hidden",border:"1px solid #f0f0f0",background:"white"}}>
                <div style={{height:220,overflow:"hidden",position:"relative"}}>
                  <img src={p.img} alt={p.titulo} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 40%,rgba(26,8,56,0.7) 100%)"}}/>
                  <p style={{position:"absolute",bottom:16,left:16,right:16,color:"white",fontFamily:"Georgia,serif",fontSize:18,fontWeight:700,margin:0,lineHeight:1.2}}>{p.titulo}</p>
                </div>
                <div style={{padding:"20px 22px"}}>
                  <p style={{color:"#555",fontSize:15,lineHeight:1.75,margin:0}}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"#F7F5FF",padding:isMobile?"48px 20px":"clamp(60px,8vw,100px) clamp(16px,4vw,40px)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(26px,3vw,44px)",fontWeight:900,color:"#111",fontFamily:"Georgia,serif",marginBottom:12}}>Lo que dicen nuestros miembros</h2>
            <p style={{color:"#777",fontSize:16}}>Personas reales. Transformaciones reales.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:24}}>
            {testimonios.map((t,i)=>(
              <div key={i} style={{background:"white",borderRadius:20,padding:"28px 24px",border:"1px solid #ede8ff"}}>
                <div style={{display:"flex",marginBottom:12}}>
                  {"★★★★★".split("").map((s,j)=><span key={j} style={{color:"#C9A84C",fontSize:16}}>{s}</span>)}
                </div>
                <p style={{color:"#333",fontSize:15,lineHeight:1.75,marginBottom:20,fontStyle:"italic"}}>"{t.texto}"</p>
                <div style={{borderTop:"1px solid #f0f0f0",paddingTop:16}}>
                  <p style={{fontWeight:700,color:"#111",fontSize:14,margin:"0 0 2px"}}>{t.nombre}</p>
                  <p style={{color:"#888",fontSize:13,margin:0}}>{t.lugar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"linear-gradient(135deg,#2D0F5E,#6B21A8)",padding:isMobile?"56px 24px":"80px 40px",textAlign:"center"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <SpiralLogo color="white" size={52}/>
          <h2 style={{color:"white",fontSize:"clamp(30px,4vw,56px)",fontWeight:900,margin:"20px 0 16px",lineHeight:1.1,fontFamily:"Georgia,serif"}}>Comienza tu transformacion hoy.</h2>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:18,marginBottom:12}}>30 dias gratis. Sin tarjeta. Sin riesgos.</p>
          <p style={{color:"#C9A84C",fontSize:15,fontWeight:600,marginBottom:36}}>Unete a la comunidad hispanohablante de transformacion personal mas poderosa de Latinoamerica.</p>
          <button onClick={onAuthClick} style={{background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:17,padding:"20px 60px",borderRadius:50,border:"none",cursor:"pointer"}}>Hazte miembro</button>
        </div>
      </section>

    </main>

  );

}

// ─── PAGO ──────────────────────────────────────────────────────────────────────

function Pago({setPage}:{setPage:(p:any)=>void}) {

  const [billing, setBilling] = useState<"monthly"|"annual">("annual");

  const [email, setEmail] = useState("");

  const [nombre, setNombre] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const check = ()=>setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return ()=>window.removeEventListener("resize", check);
  },[]);

  return (

    <main style={{minHeight:"100vh",background:"#f9f9f9",fontFamily:"system-ui,sans-serif"}}>

      <div style={{maxWidth:1000,margin:"0 auto",padding:isMobile?"24px 16px":"48px 24px",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?24:48,alignItems:"start"}}>

        <div>

          <button onClick={()=>setPage("membresia")} style={{background:"none",border:"none",cursor:"pointer",color:"#6B21A8",fontSize:14,fontWeight:500,marginBottom:24,display:"flex",alignItems:"center",gap:6,padding:0}}>

            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B21A8" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Volver

          </button>

          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:32}}>

            <SpiralLogo color="#3D1E7A" size={32}/>

            <span style={{fontFamily:"Georgia,serif",color:"#3D1E7A",fontSize:18,letterSpacing:"0.14em"}}>SOLO GRACIAS</span>

          </div>

          <div style={{background:"linear-gradient(135deg,#2D0F5E,#6B21A8)",borderRadius:20,padding:"28px",marginBottom:28,position:"relative",overflow:"hidden"}}>

            <div style={{position:"absolute",top:16,right:16,opacity:0.2}}><SpiralLogo color="white" size={80}/></div>

            <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",margin:"0 0 8px"}}>Membresia Solo Gracias</p>

            <p style={{color:"white",fontSize:13,margin:"0 0 16px",opacity:0.8}}>Esencia — Acceso completo</p>

            <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:8}}>

              <span style={{color:"white",fontSize:44,fontWeight:900,lineHeight:1}}>{billing==="annual"?"$8.25":"$9.99"}</span>

              <span style={{color:"rgba(255,255,255,0.6)",fontSize:15}}>/mes</span>

            </div>

            {billing==="annual"&&<p style={{color:"#C9A84C",fontSize:13,margin:"0 0 16px"}}>Facturado anualmente: $99/ano</p>}

          </div>

          <div style={{display:"flex",gap:8,background:"#eee",borderRadius:50,padding:4,marginBottom:28}}>

            <button onClick={()=>setBilling("monthly")} style={{flex:1,padding:"10px",borderRadius:50,border:"none",fontWeight:600,fontSize:14,cursor:"pointer",background:billing==="monthly"?"white":"transparent",color:billing==="monthly"?"#111":"#888"}}>Mensual</button>

            <button onClick={()=>setBilling("annual")} style={{flex:1,padding:"10px",borderRadius:50,border:"none",fontWeight:600,fontSize:14,cursor:"pointer",background:billing==="annual"?"white":"transparent",color:billing==="annual"?"#111":"#888",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>

              Anual {billing==="annual"&&<span style={{background:"#C9A84C",color:"#1A0838",fontSize:11,padding:"2px 8px",borderRadius:50,fontWeight:700}}>Ahorra 17%</span>}

            </button>

          </div>

        </div>

        <div style={{background:"white",borderRadius:24,padding:"36px",border:"1px solid #eee"}}>

          <h2 style={{fontSize:24,fontWeight:800,color:"#111",marginBottom:24}}>Comienza tu transformacion</h2>

          <p style={{color:"#888",fontSize:13,marginBottom:24}}>30 dias gratis · Cancela cuando quieras</p>

          <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:24}}>

            <div>

              <label style={{fontSize:13,fontWeight:600,color:"#333",display:"block",marginBottom:6}}>Nombre completo</label>

              <input value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Tu nombre" style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #ddd",fontSize:14,outline:"none",boxSizing:"border-box" as any}}/>

            </div>

            <div>

              <label style={{fontSize:13,fontWeight:600,color:"#333",display:"block",marginBottom:6}}>Correo electronico</label>

              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@correo.com" style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #ddd",fontSize:14,outline:"none",boxSizing:"border-box" as any}}/>

            </div>

          </div>

          <div style={{background:"#f9f9f9",borderRadius:16,padding:"20px",marginBottom:24}}>

            <p style={{fontSize:13,fontWeight:700,color:"#111",margin:"0 0 12px"}}>Resumen del pedido</p>

            <div style={{display:"flex",justifyContent:"space-between",fontSize:14,color:"#444",marginBottom:8}}>

              <span>Membresia Esencia — {billing==="annual"?"Anual":"Mensual"}</span>

              <span style={{fontWeight:600}}>{billing==="annual"?"$99/ano":"$9.99/mes"}</span>

            </div>

            <div style={{display:"flex",justifyContent:"space-between",fontSize:14,color:"#22c55e",marginBottom:8}}>

              <span>30 dias gratis</span>

              <span style={{fontWeight:600}}>-${billing==="annual"?"99":"9.99"}</span>

            </div>

            <div style={{borderTop:"1px solid #eee",paddingTop:8,display:"flex",justifyContent:"space-between",fontSize:15,color:"#111",fontWeight:700}}>

              <span>Total hoy</span><span>$0.00</span>

            </div>

          </div>

          <button onClick={()=>setPage("home")} style={{width:"100%",background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:16,padding:"16px",borderRadius:50,border:"none",cursor:"pointer",marginBottom:16}}>Comenzar 30 dias gratis</button>

          <p style={{color:"#888",fontSize:12,textAlign:"center",marginBottom:24}}>Al continuar aceptas nuestros Terminos de Servicio y Politica de Privacidad.</p>

          <div style={{borderTop:"1px solid #eee",paddingTop:20}}>

            <p style={{color:"#888",fontSize:12,textAlign:"center",marginBottom:12}}>Metodos de pago aceptados</p>

            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>

              {["VISA","Mastercard","AMEX","PayPal","MercadoPago"].map(m=>(

                <div key={m} style={{border:"1px solid #eee",borderRadius:8,padding:"6px 12px",fontSize:12,fontWeight:700,color:"#555"}}>{m}</div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}

// ─── ACADEMIA ──────────────────────────────────────────────────────────────────

function Academia({setPage, onAuthClick}:{setPage:(p:any)=>void, onAuthClick:()=>void}) {

  const [open, setOpen] = useState<number|null>(null);

  const programas = [

    {nombre:"Instructor de Meditacion",desc:"Forma a otros en practicas de meditacion, mindfulness y conciencia desde la cosmoision latinoamericana.",fecha:"Proxima admision: Mayo 2026",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop&crop=center"},

    {nombre:"Instructor de Yoga Ancestral",desc:"Combina las practicas de yoga con las ensenanzas de la sabiduria andina y guarani.",fecha:"Proxima admision: Junio 2026",img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop&crop=top"},

    {nombre:"Maestro de Frecuencias",desc:"Domina los instrumentos de sonido sagrados y las tecnicas de sanacion por frecuencias.",fecha:"Proxima admision: Julio 2026",img:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&q=80&fit=crop&crop=center"},

  ];

  const faqs2=[

    {q:"¿Que es la Academia Solo Gracias?",r:"Es el programa de formacion y certificacion de instructores de Solo Gracias."},

    {q:"¿Cuanto tiempo dura la formacion?",r:"Entre 4 y 12 semanas segun el programa, con menos de 3 horas semanales de dedicacion."},

    {q:"¿Puedo generar ingresos como instructor certificado?",r:"Si. Los instructores certificados reciben un porcentaje de los ingresos generados por sus experiencias."},

    {q:"¿Es necesario tener experiencia previa?",r:"Necesitas conocimiento real en tu area y pasion genuina por la transformacion personal."},

  ];

  return (

    <main style={{minHeight:"100vh",background:"white",fontFamily:"system-ui,sans-serif"}}>

      <section style={{position:"relative",background:"#0F0820",padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",textAlign:"center",overflow:"hidden",minHeight:560,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

        <div style={{position:"absolute",inset:0,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"repeat(2,1fr)",gap:4,opacity:0.2}}>

          {["https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=60&fit=crop&crop=top","https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=60&fit=crop&crop=top","https://images.unsplash.com/photo-1546961342-a5a6818e0b5a?w=400&q=60&fit=crop&crop=top","https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&q=60&fit=crop&crop=top","https://images.unsplash.com/photo-1504199367641-aba8151af406?w=400&q=60&fit=crop&crop=top","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=60&fit=crop&crop=top"].map((src,i)=><img key={i} src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>)}

        </div>

        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(15,8,32,0.85),rgba(15,8,32,0.95))"}}/>

        <div style={{position:"relative",zIndex:2}}>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:24}}><SpiralLogo color="#C9A84C" size={32}/><span style={{color:"#C9A84C",fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase"}}>Academia Solo Gracias</span></div>

          <h1 style={{color:"white",fontSize:"clamp(44px,6vw,80px)",fontWeight:900,lineHeight:1.0,letterSpacing:"-0.01em",marginBottom:20,textTransform:"uppercase"}}>CERTIFICADO<br/>PARA TRANSFORMAR</h1>

          <p style={{color:"rgba(255,255,255,0.65)",fontSize:18,maxWidth:560,margin:"0 auto 36px",lineHeight:1.65}}>Conviertete en un instructor certificado, formado por Solo Gracias.</p>

          <button onClick={()=>document.getElementById("programas-acad")?.scrollIntoView({behavior:"smooth"})} style={{background:"#6B21A8",color:"white",fontWeight:700,fontSize:16,padding:"16px 48px",borderRadius:50,border:"none",cursor:"pointer"}}>Explorar certificaciones</button>

        </div>

      </section>

      <section id="programas-acad" style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#0F0820"}}>

        <div style={{maxWidth:1000,margin:"0 auto"}}>

          <h2 style={{color:"white",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>ELIGE TU CERTIFICACION</h2>

          <p style={{color:"rgba(255,255,255,0.55)",fontSize:16,textAlign:"center",marginBottom:48}}>Selecciona la especializacion que resuena con tu conocimiento y tu mision.</p>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>

            {programas.map((prog,i)=>(

              <div key={i} style={{borderRadius:16,overflow:"hidden",display:"flex",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}}>

                <div style={{width:200,flexShrink:0,overflow:"hidden"}}><img src={prog.img} alt={prog.nombre} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/></div>

                <div style={{padding:"28px 32px",flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>

                  <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",margin:"0 0 8px"}}>Certificacion</p>

                  <h3 style={{color:"white",fontSize:22,fontWeight:800,margin:"0 0 10px"}}>{prog.nombre}</h3>

                  <p style={{color:"rgba(255,255,255,0.6)",fontSize:14,lineHeight:1.6,margin:"0 0 16px"}}>{prog.desc}</p>

                  <p style={{color:"#C9A84C",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",margin:"0 0 16px"}}>{prog.fecha}</p>

                  <button onClick={onAuthClick} style={{alignSelf:"flex-start",background:"#6B21A8",color:"white",fontWeight:600,fontSize:13,padding:"10px 24px",borderRadius:50,border:"none",cursor:"pointer"}}>Mas informacion</button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#f9f9f9"}}>

        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 2fr",gap:"clamp(24px,4vw,64px)",alignItems:"start"}}>

          <div><h2 style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:16}}>Preguntas frecuentes</h2></div>

          <div style={{display:"flex",flexDirection:"column",gap:8}}>

            {faqs2.map((f,i)=>(

              <div key={i} style={{background:"white",borderRadius:14,overflow:"hidden",border:"1px solid #eee"}}>

                <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>

                  <span style={{fontWeight:600,color:"#111",fontSize:14}}>{f.q}</span>

                  <span style={{color:"#6B21A8",fontSize:22,marginLeft:16,fontWeight:300,flexShrink:0}}>{open===i?"−":"+"}</span>

                </button>

                {open===i&&<div style={{padding:"0 22px 18px",color:"#666",fontSize:14,lineHeight:1.65,borderTop:"1px solid #f5f5f5"}}><p style={{margin:"12px 0 0"}}>{f.r}</p></div>}

              </div>

            ))}

          </div>

        </div>

      </section>

      <footer style={{background:"#0F0A1E",padding:"32px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>

        <button onClick={()=>setPage("home")} style={{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",cursor:"pointer"}}><SpiralLogo color="#C9A84C" size={28}/><span style={{fontFamily:"Georgia,serif",color:"white",fontSize:14,letterSpacing:"0.14em"}}>SOLO GRACIAS</span></button>

        <p style={{color:"rgba(255,255,255,0.3)",fontSize:12,margin:0}}>Academia Solo Gracias · 2026 · Todos los derechos reservados</p>

      </footer>

    </main>

  );

}

// ─── ONBOARDING ────────────────────────────────────────────────────────────────

const areas = [

  {id:"mente",      titulo:"Mente",             desc:"Claridad, enfoque y poder del pensamiento",      tags:["Meditación","Mindfulness","Enfoque","Creencias"]},

  {id:"cuerpo",     titulo:"Cuerpo",             desc:"Salud física, movimiento y energía vital",       tags:["Yoga","Respiración","Bienestar","Sueño"]},

  {id:"alma",       titulo:"Alma",               desc:"Propósito, gratitud, conexión interior y paz",   tags:["Gratitud","Propósito","Paz interior","Amor propio"]},

  {id:"espiritual", titulo:"Espiritual",         desc:"Conciencia expandida y sabiduría ancestral",     tags:["Sabiduría ancestral","Frecuencias","Rituales"]},

  {id:"relaciones", titulo:"Relaciones",         desc:"Vínculos genuinos, amor y comunidad",            tags:["Amor","Comunicación","Familia","Comunidad"]},

  {id:"abundancia", titulo:"Abundancia",         desc:"Prosperidad, mentalidad y libertad financiera",  tags:["Mentalidad","Liderazgo","Metas","Libertad"]},

  {id:"emprendimiento",titulo:"Emprendimiento",  desc:"Construir ideas y negocios con propósito",       tags:["Startup","Creatividad","Acción","Resiliencia"]},

  {id:"carrera",    titulo:"Carrera & Negocios", desc:"Propósito profesional y crecimiento",            tags:["Marca personal","Productividad","Networking","Éxito"]},

  {id:"familia",    titulo:"Crianza & Familia",  desc:"Hijos, adolescentes y vínculos familiares",      tags:["Niños","Adolescentes","Crianza","Comunicación"]},

];

const areaColors: Record<string,string> = {

  mente:"#6B21A8", cuerpo:"#065F46", alma:"#C9A84C", espiritual:"#4C1D95",

  relaciones:"#9B6DFF", abundancia:"#B45309", emprendimiento:"#7C2D12",

  carrera:"#1E3A5F", familia:"#831843",

};

const programasPorArea: Record<string,{id:string,nombre:string,instructor:string,area:string,areaId:string,img:string,modules:string[],desc:string}[]> = {

  mente:[

    {id:"m1",areaId:"mente",nombre:"Mente Brillante",instructor:"Dr. Andrés Valiente",area:"Mente",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop",modules:["El poder de tu mente","Meditación para claridad","Hábitos de enfoque","Reprogramación de creencias","Vivir en consciencia"],desc:"Despierta el potencial ilimitado de tu mente a través de técnicas ancestrales y neurociencia moderna. Aprende a enfocar tu energía mental y transformar tus creencias limitantes."},

    {id:"m2",areaId:"mente",nombre:"Maestro Interior",instructor:"Sofía Ramos",area:"Mente",img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop",modules:["Silencio interior","Técnicas de respiración","Flow mental","Gestión emocional","Paz cotidiana"],desc:"Accede al estado de flow y maestría interior que transforma cada aspecto de tu vida. Una jornada profunda hacia el autoconocimiento y la paz mental."},

    {id:"m3",areaId:"mente",nombre:"Código Mental",instructor:"Mario Espinoza",area:"Mente",img:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",modules:["Neuroplasticidad","Hábitos mentales","Visualización creativa","Mindset de abundancia","Acción decidida"],desc:"Reprograma tu mente como un código fuente. Elimina bloqueos mentales y activa tu máximo potencial con técnicas de neuroplasticidad."},

  ],

  cuerpo:[

    {id:"c1",areaId:"cuerpo",nombre:"Cuerpo en Armonía",instructor:"Valentina Cruz",area:"Cuerpo",img:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&fit=crop",modules:["Movimiento consciente","Respiración vital","Yoga ancestral","Nutrición sagrada","Sueño reparador"],desc:"Reconecta con tu cuerpo como templo sagrado. A través del movimiento, la respiración y la nutrición, descubrirás una vitalidad que no conocías."},

    {id:"c2",areaId:"cuerpo",nombre:"Energía Vital",instructor:"Carlos Mendoza",area:"Cuerpo",img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop",modules:["Activación energética","Pranayama","Posturas de poder","Detox natural","Ritmos circadianos"],desc:"Despierta tu energía vital con prácticas milenarias adaptadas al mundo moderno. Siente el poder de tu cuerpo funcionando en su máximo nivel."},

    {id:"c3",areaId:"cuerpo",nombre:"Yoga Guaraní",instructor:"Lía Benítez",area:"Cuerpo",img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop",modules:["Raíces del movimiento","Posturas de la tierra","Respiración del viento","Conexión sagrada","Integración"],desc:"Una fusión única de yoga clásico con la sabiduría corporal del pueblo guaraní. Una práctica que nació en Paraguay para el mundo."},

  ],

  alma:[

    {id:"a1",areaId:"alma",nombre:"Alma Despierta",instructor:"Isabel Flores",area:"Alma",img:"https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80&fit=crop",modules:["Propósito de vida","Gratitud profunda","Amor incondicional","Sanación interior","Servicio"],desc:"Un viaje profundo hacia el alma. Descubre tu propósito genuino y aprende a vivir desde la gratitud y el amor como estados permanentes."},

    {id:"a2",areaId:"alma",nombre:"Gratitud Total",instructor:"Ana Vargas",area:"Alma",img:"https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?w=600&q=80&fit=crop",modules:["Ciencia de la gratitud","Rituales matutinos","Perdonar y soltar","Abundancia interior","Diario del alma"],desc:"La gratitud como tecnología espiritual. Transforma tu realidad cambiando el lente desde el que observas cada momento de tu vida."},

    {id:"a3",areaId:"alma",nombre:"Amor Propio Radical",instructor:"Camila Torres",area:"Alma",img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop",modules:["Sanando el pasado","Voz interior compasiva","Límites sagrados","Cuerpo y alma","Celebrar quien sos"],desc:"El amor propio es la base de todo lo demás. Aprende a tratarte con la misma compasión que darías a tu mejor amiga."},

  ],

  espiritual:[

    {id:"e1",areaId:"espiritual",nombre:"Frecuencias Sagradas",instructor:"Yolanda Pereira",area:"Espiritual",img:"https://images.unsplash.com/photo-1519810755548-39cd217da494?w=600&q=80&fit=crop",modules:["Sonido y consciencia","Binaural beats","Cantos ancestrales","Meditación de frecuencias","Expansión"],desc:"El sonido como puerta a estados expandidos de consciencia. Explora cómo las frecuencias sagradas transforman tu campo energético."},

    {id:"e2",areaId:"espiritual",nombre:"Sabiduría Ancestral",instructor:"Taví Guaraní",area:"Espiritual",img:"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&q=80&fit=crop",modules:["Cosmovisión guaraní","Medicina de plantas","Rituales de tierra","Conexión con ancestros","Legado vivo"],desc:"La sabiduría que los guardianes transmitieron por siglos, ahora en formato contemporáneo. Un puente entre el mundo ancestral y tu vida actual."},

    {id:"e3",areaId:"espiritual",nombre:"Despertar Kundalini",instructor:"Diego Arce",area:"Espiritual",img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80&fit=crop",modules:["Energía kundalini","Chakras vivos","Meditaciones activas","Kriya yoga","Integración espiritual"],desc:"Activa la energía primordial que duerme en tu interior. Un programa riguroso y transformador para quienes están listos para el siguiente nivel."},

  ],

  relaciones:[

    {id:"r1",areaId:"relaciones",nombre:"Amor Consciente",instructor:"Paola & Rodrigo Salas",area:"Relaciones",img:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80&fit=crop",modules:["Apego y libertad","Comunicación no violenta","Intimidad real","Conflicto como maestro","Amor duradero"],desc:"Las relaciones como el mayor campo de crecimiento personal. Aprende los principios del amor consciente que transforma parejas y familias."},

    {id:"r2",areaId:"relaciones",nombre:"Comunicación Poderosa",instructor:"Fernando Ríos",area:"Relaciones",img:"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80&fit=crop",modules:["Escucha profunda","Palabras que sanan","Asertividad","Empatía radical","Conexión auténtica"],desc:"Las palabras tienen poder. Aprende a comunicarte de manera que seas realmente escuchada, respetada y conectada con quienes más importan."},

    {id:"r3",areaId:"relaciones",nombre:"Tribu y Comunidad",instructor:"Marcela Ortiz",area:"Relaciones",img:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop",modules:["Tu tribu interior","Construir comunidad","Liderar círculos","Servicio y pertenencia","Legado colectivo"],desc:"Somos seres tribales. Aprende a construir comunidades que se apoyan mutuamente en el camino de la transformación."},

  ],

  abundancia:[

    {id:"ab1",areaId:"abundancia",nombre:"Mentalidad Millonaria",instructor:"Luis Castellano",area:"Abundancia",img:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&fit=crop",modules:["Creencias sobre el dinero","Abundancia energética","Estrategia financiera","Inversión consciente","Libertad financiera"],desc:"El dinero es energía. Transforma tu relación con la abundancia desde adentro hacia afuera, combinando espiritualidad con estrategia financiera real."},

    {id:"ab2",areaId:"abundancia",nombre:"Libertad Financiera",instructor:"Natalia Soto",area:"Abundancia",img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&fit=crop",modules:["Flujo de caja personal","Activos vs pasivos","Inversión para todos","Negocios de impacto","Diseño de vida rica"],desc:"Un mapa práctico hacia la libertad financiera diseñado para latinoamericanos. Finanzas personales y mentalidad de abundancia en un solo programa."},

    {id:"ab3",areaId:"abundancia",nombre:"Prosperidad Total",instructor:"Roberto Funes",area:"Abundancia",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&fit=crop",modules:["Ley de atracción aplicada","Metas con sentido","Hábitos de prosperidad","Red de contactos","Legado que deja huella"],desc:"La prosperidad no es solo dinero, es salud, relaciones, propósito y libertad. Diseña una vida verdaderamente próspera en todas sus dimensiones."},

  ],

  emprendimiento:[

    {id:"em1",areaId:"emprendimiento",nombre:"Startup con Alma",instructor:"Javier Montoya",area:"Emprendimiento",img:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop",modules:["Idea a propuesta de valor","MVP en 30 días","Validación real","Pitch para inversores","Escalar con propósito"],desc:"Construye un negocio que combine rentabilidad con impacto real. El emprendimiento consciente que Latinoamérica necesita para el siglo XXI."},

    {id:"em2",areaId:"emprendimiento",nombre:"Creatividad Radical",instructor:"Paola Méndez",area:"Emprendimiento",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",modules:["Mindset creativo","Design thinking","Innovación cultural","Prototipado rápido","Lanzar sin miedo"],desc:"La creatividad es un músculo que se entrena. Desbloquea tu potencial innovador y genera ideas que cambian el juego en tu industria."},

    {id:"em3",areaId:"emprendimiento",nombre:"Resiliencia Emprendedora",instructor:"Carlos Vega",area:"Emprendimiento",img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop",modules:["Fracaso como maestro","Anti-fragilidad","Pivot inteligente","Comunidad de soporte","Persistencia con datos"],desc:"Todo emprendedor conoce el fracaso. Este programa te enseña a convertir cada caída en combustible para un éxito más sólido y duradero."},

  ],

  carrera:[

    {id:"ca1",areaId:"carrera",nombre:"Marca Personal Poderosa",instructor:"Adriana Ruiz",area:"Carrera & Negocios",img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop",modules:["Tu historia de valor","LinkedIn magnético","Hablar en público","Thought leadership","Oportunidades que llegan"],desc:"Tu marca personal es tu activo más valioso. Aprende a proyectar quién sos con autenticidad y estrategia en la economía del conocimiento."},

    {id:"ca2",areaId:"carrera",nombre:"Liderazgo Transformador",instructor:"Miguel Herrera",area:"Carrera & Negocios",img:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80&fit=crop",modules:["Liderazgo consciente","Equipos de alto rendimiento","Feedback poderoso","Visión y cultura","Legado como líder"],desc:"El nuevo liderazgo combina resultados con bienestar humano. Conviértete en el líder que inspira, transforma y deja un legado positivo."},

    {id:"ca3",areaId:"carrera",nombre:"Productividad Sagrada",instructor:"Elena Paredes",area:"Carrera & Negocios",img:"https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=80&fit=crop",modules:["Deep work","Gestión de energía","Sistemas personales","Eliminación inteligente","Trabajo con propósito"],desc:"Haz más con menos energía. Un sistema de productividad que respeta tus ritmos naturales y te permite alcanzar metas sin sacrificar tu bienestar."},

  ],

  familia:[

    {id:"f1",areaId:"familia",nombre:"Crianza Consciente",instructor:"Patricia & Tomás Mora",area:"Crianza & Familia",img:"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80&fit=crop",modules:["Disciplina con amor","Comunicación con niños","Límites sanos","Juego como aprendizaje","Familia que crece junta"],desc:"Ser padre o madre es el rol más transformador que existe. Herramientas concretas para criar hijos conscientes, seguros y felices."},

    {id:"f2",areaId:"familia",nombre:"Adolescentes Reales",instructor:"Sebastián Castro",area:"Crianza & Familia",img:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop",modules:["El cerebro adolescente","Conversaciones difíciles","Redes sociales y salud mental","Identidad y propósito","Conexión sin control"],desc:"Guía práctica para conectar con adolescentes en la era digital. Cómo mantener la relación viva en una etapa que desafía a toda la familia."},

    {id:"f3",areaId:"familia",nombre:"Familia en Flor",instructor:"Rosa Delgado",area:"Crianza & Familia",img:"https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80&fit=crop",modules:["Familia como sistema","Rituales familiares","Sanar heridas heredadas","Comunicación intergeneracional","Legado familiar"],desc:"Construye una familia que sea refugio, escuela y celebración. Herramientas sistémicas para transformar la dinámica familiar desde la raíz."},

  ],

};

function Onboarding({setPage, onAuthClick}:{setPage:(p:any)=>void, onAuthClick:()=>void}) {

  const [step, setStep] = useState<1|2|3>(1);

  const [selected, setSelected] = useState<string[]>([]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [progSeleccionado, setProgSeleccionado] = useState<string|null>(null);

  const [filtroArea, setFiltroArea] = useState<string>("todos");

  const toggle = (id:string) => setSelected(prev =>

    prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]

  );

  const toggleTag = (e:React.MouseEvent, areaId:string, tag:string) => {

    e.stopPropagation();

    // Al clickar un tag, seleccionar el área automáticamente

    if (!selected.includes(areaId)) {

      setSelected(prev => [...prev, areaId]);

    }

    setSelectedTags(prev => prev.includes(tag) ? prev.filter(x=>x!==tag) : [...prev, tag]);

  };

  const getRecomendaciones = () => {

    let recs: typeof programasPorArea["mente"] = [];

    selected.forEach(id => { if(programasPorArea[id]) recs = [...recs, ...programasPorArea[id]]; });

    return recs;

  };

  const progDetalle = progSeleccionado

    ? Object.values(programasPorArea).flat().find(p=>p.id===progSeleccionado)

    : null;

  // ── Vista detalle de programa ──────────────────────────────────────────────

  if (progDetalle) {

    return (

      <main style={{minHeight:"100vh",background:"#0F0820",fontFamily:"Georgia,serif"}}>

        <div style={{padding:"16px 32px",background:"#1A0838",borderBottom:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>

          <div style={{display:"flex",alignItems:"center",gap:10}}>

            <SpiralLogo color="#C9A84C" size={28}/>

            <span style={{fontFamily:"Georgia,serif",color:"white",fontSize:16,fontWeight:300,letterSpacing:"0.16em"}}>SOLO GRACIAS</span>

          </div>

          <button onClick={()=>setProgSeleccionado(null)} style={{color:"rgba(255,255,255,0.5)",fontSize:13,background:"none",border:"1px solid rgba(255,255,255,0.2)",borderRadius:50,padding:"6px 18px",cursor:"pointer",fontFamily:"Georgia,serif"}}>← Volver</button>

        </div>

        {/* Hero */}

        <div style={{position:"relative",minHeight:280,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"36px 40px",overflow:"hidden"}}>

          <div style={{position:"absolute",inset:0}}>

            <img src={progDetalle.img} alt={progDetalle.nombre} style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.28)"}}/>

          </div>

          <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(61,30,122,0.75),rgba(15,8,32,0.85))"}}/>

          <div style={{position:"relative",zIndex:2,maxWidth:700}}>

            <span style={{display:"inline-block",background:"rgba(201,168,76,0.15)",border:"1px solid #C9A84C",color:"#C9A84C",fontFamily:"Georgia,serif",fontSize:11,fontWeight:300,padding:"4px 16px",borderRadius:50,marginBottom:14,letterSpacing:"0.1em"}}>{progDetalle.area}</span>

            <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"white",margin:"0 0 10px",lineHeight:1.15}}>{progDetalle.nombre}</h1>

            <p style={{fontFamily:"Georgia,serif",fontSize:14,fontWeight:300,color:"#C9A84C",margin:0}}>Por {progDetalle.instructor}</p>

          </div>

        </div>

        {/* Cuerpo */}

        <div style={{maxWidth:780,margin:"0 auto",padding:"36px 32px"}}>

          <p style={{fontFamily:"Georgia,serif",fontSize:11,fontWeight:300,color:"#9B6DFF",textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:14}}>Presentación del programa</p>

          {/* Espacio del video */}

          <div style={{width:"100%",aspectRatio:"16/9",borderRadius:18,overflow:"hidden",position:"relative",cursor:"pointer",border:"1px solid rgba(107,33,168,0.4)"}}>

            <img src={progDetalle.img} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.4) saturate(1.6)"}}/>

            <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, rgba(107,33,168,0.6) 0%, rgba(61,30,122,0.7) 45%, rgba(15,8,32,0.92) 100%)"}}/>

            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",opacity:0.07}}>

              <SpiralLogo color="#C9A84C" size={260}/>

            </div>

            <div style={{position:"absolute",top:0,left:0,right:0,padding:"20px 24px",background:"linear-gradient(to bottom,rgba(15,8,32,0.7),transparent)"}}>

              <p style={{fontFamily:"Georgia,serif",fontSize:15,fontWeight:700,color:"white",margin:0,letterSpacing:"0.04em"}}>{progDetalle.nombre}</p>

            </div>

            <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>

              <div style={{width:72,height:72,borderRadius:"50%",background:"#C9A84C",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 36px rgba(201,168,76,0.5),0 0 80px rgba(201,168,76,0.2)"}}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A0838"><polygon points="6,3 20,12 6,21"/></svg>

              </div>

            </div>

            <div style={{position:"absolute",bottom:16,right:16}}>

              <span style={{background:"rgba(201,168,76,0.15)",border:"1px solid #C9A84C",color:"#C9A84C",fontSize:10,fontWeight:700,fontFamily:"Georgia,serif",padding:"4px 12px",borderRadius:50,letterSpacing:"0.1em"}}>PRÓXIMAMENTE</span>

            </div>

          </div>

          <p style={{fontFamily:"Georgia,serif",fontSize:15,fontWeight:300,color:"rgba(255,255,255,0.75)",lineHeight:1.8,margin:"28px 0"}}>{progDetalle.desc}</p>

          <p style={{fontFamily:"Georgia,serif",fontSize:11,fontWeight:300,color:"#C9A84C",textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:14}}>Módulos del programa</p>

          {progDetalle.modules.map((mod,i)=>(

            <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>

              <div style={{width:28,height:28,borderRadius:"50%",background:"#3D1E7A",color:"#9B6DFF",fontSize:11,fontWeight:700,fontFamily:"Georgia,serif",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</div>

              <span style={{fontFamily:"Georgia,serif",fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.75)"}}>{mod}</span>

            </div>

          ))}

          <div style={{display:"flex",gap:14,marginTop:36,flexWrap:"wrap"}}>

            <button onClick={onAuthClick} style={{background:"#C9A84C",color:"#1A0838",fontFamily:"Georgia,serif",fontWeight:700,fontSize:15,padding:"15px 40px",borderRadius:50,border:"none",cursor:"pointer"}}>Comenzar gratis — 30 días</button>

            <button onClick={()=>setProgSeleccionado(null)} style={{background:"none",border:"1px solid #6B21A8",color:"white",fontFamily:"Georgia,serif",fontSize:14,fontWeight:300,padding:"15px 32px",borderRadius:50,cursor:"pointer"}}>Guardar programa</button>

          </div>

        </div>

      </main>

    );

  }

  // ── Onboarding principal ───────────────────────────────────────────────────

  return (

    <main style={{minHeight:"100vh",background:"radial-gradient(ellipse at 50% 0%, #6B21A8 0%, #3D1E7A 30%, #1A0838 65%, #0F0820 100%)",fontFamily:"Georgia,serif",display:"flex",flexDirection:"column"}}>

      {/* Header */}

      <div style={{padding:"24px clamp(12px,3vw,40px)",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.07)",gap:8}}>

        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>

          <SpiralLogo color="#C9A84C" size={28}/>

          <span style={{fontFamily:"Georgia,serif",color:"white",fontSize:"clamp(12px,2vw,16px)",fontWeight:300,letterSpacing:"0.16em"}}>SOLO GRACIAS</span>

        </div>

        <div style={{display:"flex",gap:4,alignItems:"center"}}>

          {[1,2,3].map(n=>(

            <div key={n} style={{display:"flex",alignItems:"center",gap:4}}>

              <div style={{width:n<=step?24:16,height:3,borderRadius:2,background:n<=step?"#C9A84C":"rgba(255,255,255,0.12)",transition:"all 0.4s"}}/>

              {n<3&&<div style={{width:3,height:3,borderRadius:"50%",background:"rgba(255,255,255,0.15)"}}/>}

            </div>

          ))}

        </div>

        <button onClick={()=>setPage("home")} style={{color:"rgba(255,255,255,0.35)",fontSize:12,fontFamily:"Georgia,serif",background:"none",border:"none",cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}}>Saltar</button>

      </div>

      {/* STEP 1 */}

      {step===1&&(

        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(24px,4vw,48px) clamp(16px,4vw,40px)",textAlign:"center"}}>

          <div style={{marginBottom:28}}><SpiralLogo color="#C9A84C" size={72}/></div>

          <div style={{display:"inline-block",border:"1px solid rgba(201,168,76,0.35)",color:"#C9A84C",fontFamily:"Georgia,serif",fontSize:11,fontWeight:300,letterSpacing:"0.2em",textTransform:"uppercase",padding:"5px 16px",borderRadius:50,marginBottom:24}}>Bienvenido a Solo Gracias</div>

          <h1 style={{color:"white",fontFamily:"Georgia,serif",fontSize:"clamp(36px,5vw,60px)",fontWeight:700,lineHeight:1.05,marginBottom:16,maxWidth:640}}>

            Tu transformación<br/>comienza <span style={{color:"#C9A84C"}}>aquí.</span>

          </h1>

          <p style={{color:"rgba(255,255,255,0.6)",fontFamily:"Georgia,serif",fontSize:17,fontWeight:300,lineHeight:1.7,maxWidth:500,marginBottom:48}}>En los próximos minutos vamos a conocerte mejor para guiarte hacia las experiencias que más resuenen con vos.</p>

          <div style={{display:"flex",flexDirection:"column",gap:14,width:"100%",maxWidth:420}}>

            <div>

              <label style={{color:"rgba(255,255,255,0.55)",fontFamily:"Georgia,serif",fontSize:13,fontWeight:300,display:"block",marginBottom:7,textAlign:"left",letterSpacing:"0.04em"}}>Cómo te llamamos</label>

              <input value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Tu nombre" style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.06)",color:"white",fontFamily:"Georgia,serif",fontSize:15,outline:"none",boxSizing:"border-box" as any}}/>

            </div>

            <div>

              <label style={{color:"rgba(255,255,255,0.55)",fontFamily:"Georgia,serif",fontSize:13,fontWeight:300,display:"block",marginBottom:7,textAlign:"left",letterSpacing:"0.04em"}}>Tu correo electrónico</label>

              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@correo.com" style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.06)",color:"white",fontFamily:"Georgia,serif",fontSize:15,outline:"none",boxSizing:"border-box" as any}}/>

            </div>

          </div>

          <button onClick={()=>setStep(2)} style={{marginTop:28,background:"#C9A84C",color:"#1A0838",fontFamily:"Georgia,serif",fontWeight:700,fontSize:16,padding:"16px 56px",borderRadius:50,border:"none",cursor:"pointer"}}>Comenzar mi viaje</button>

          <p style={{color:"rgba(255,255,255,0.25)",fontFamily:"Georgia,serif",fontSize:12,fontWeight:300,marginTop:14}}>Gratis · Sin compromiso · Cancela cuando quieras</p>

        </div>

      )}

      {/* STEP 2 */}

      {step===2&&(

        <div style={{flex:1,background:"white",position:"relative",overflow:"hidden"}}>

          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"80%",height:"80%",background:"radial-gradient(ellipse at center, rgba(107,33,168,0.10) 0%, rgba(61,30,122,0.06) 45%, transparent 70%)",pointerEvents:"none"}}/>

          <div style={{position:"relative",zIndex:1,padding:"52px 40px 48px",maxWidth:1100,margin:"0 auto",width:"100%",boxSizing:"border-box" as any}}>

            <div style={{textAlign:"center",marginBottom:48}}>

              <h2 style={{fontFamily:"Georgia,serif",color:"#1A0838",fontSize:"clamp(28px,4vw,52px)",fontWeight:700,lineHeight:1.1,marginBottom:12}}>

                {nombre?`${nombre}, ¿en qué`:"¿En qué"} áreas de tu vida{" "}

                <span style={{color:"#6B21A8"}}>quieres crecer?</span>

              </h2>

              <p style={{fontFamily:"Georgia,serif",color:"#888",fontSize:16,fontWeight:300,lineHeight:1.65}}>Selecciona todas las que resuenen contigo.</p>

            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14,marginBottom:40}}>

              {areas.map(area=>{

                const isSel=selected.includes(area.id);

                return (

                  <div key={area.id} onClick={()=>toggle(area.id)} style={{borderRadius:18,cursor:"pointer",border:`2px solid ${isSel?"#9B6DFF":"transparent"}`,background:isSel?"white":"#1A0838",padding:"22px 22px 18px",transition:"all 0.25s",transform:isSel?"scale(1.02)":"scale(1)",position:"relative",boxShadow:isSel?"0 4px 28px rgba(155,109,255,0.22)":"none"}}>

                    {isSel&&(

                      <div style={{position:"absolute",top:14,right:14,width:26,height:26,borderRadius:"50%",background:"#6B21A8",display:"flex",alignItems:"center",justifyContent:"center"}}>

                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>

                      </div>

                    )}

                    <p style={{fontFamily:"Georgia,serif",color:isSel?"#3D1E7A":"rgba(255,255,255,0.92)",fontWeight:700,fontSize:18,margin:"0 0 6px",transition:"color 0.25s"}}>{area.titulo}</p>

                    <p style={{fontFamily:"Georgia,serif",color:isSel?"#6B21A8":"rgba(255,255,255,0.5)",fontSize:13,fontWeight:300,lineHeight:1.5,margin:"0 0 14px",transition:"color 0.25s"}}>{area.desc}</p>

                    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>

                      {area.tags.map(tag=>{

                        const tagSel=selectedTags.includes(tag);

                        return (

                          <span key={tag} onClick={(e)=>toggleTag(e,area.id,tag)} style={{fontFamily:"Georgia,serif",fontSize:11,fontWeight:tagSel?700:300,padding:"5px 14px",borderRadius:50,background:tagSel?"#6B21A8":isSel?"rgba(107,33,168,0.08)":"rgba(255,255,255,0.08)",color:tagSel?"white":isSel?"#6B21A8":"rgba(255,255,255,0.5)",border:`1px solid ${tagSel?"#6B21A8":isSel?"rgba(107,33,168,0.2)":"rgba(255,255,255,0.1)"}`,cursor:"pointer",transition:"all 0.2s"}}>{tag}</span>

                        );

                      })}

                    </div>

                  </div>

                );

              })}

            </div>

            <div style={{textAlign:"center"}}>

              <p style={{fontFamily:"Georgia,serif",color:"#aaa",fontSize:13,fontWeight:300,marginBottom:16}}>

                {selected.length===0?"Selecciona al menos un área":`${selected.length} área${selected.length>1?"s":""} seleccionada${selected.length>1?"s":""}`}

              </p>

              <button onClick={()=>{if(selected.length>0){setStep(3);setFiltroArea("todos");}}} disabled={selected.length===0} style={{background:"#C9A84C",color:"#1A0838",fontFamily:"Georgia,serif",fontWeight:700,fontSize:16,padding:"16px 0",borderRadius:50,border:"none",cursor:selected.length>0?"pointer":"not-allowed",opacity:selected.length>0?1:0.35,width:"100%",maxWidth:500,transition:"opacity 0.2s"}}>

                Ver mis programas recomendados →

              </button>

            </div>

          </div>

        </div>

      )}

      {/* STEP 3 */}

      {step===3&&(

        <div style={{flex:1,background:"white",position:"relative",overflow:"hidden"}}>

          <div style={{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%,-50%)",width:"80%",height:"60%",background:"radial-gradient(ellipse at center, rgba(107,33,168,0.07) 0%, transparent 70%)",pointerEvents:"none"}}/>

          <div style={{position:"relative",zIndex:1,padding:"52px 40px 48px",maxWidth:1100,margin:"0 auto",width:"100%",boxSizing:"border-box" as any}}>

            <div style={{textAlign:"center",marginBottom:40}}>

              <h2 style={{fontFamily:"Georgia,serif",color:"#1A0838",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,lineHeight:1.15,marginBottom:10}}>

                Programas <span style={{color:"#C9A84C"}}>recomendados para vos</span>

              </h2>

              <p style={{fontFamily:"Georgia,serif",color:"#888",fontSize:15,fontWeight:300,marginBottom:20}}>Seleccionados especialmente según tus áreas y temas de interés.</p>

              <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>

                {selected.map(id=>{

                  const area=areas.find(a=>a.id===id);

                  return area?(

                    <span key={id} style={{background:areaColors[id]+"22",color:areaColors[id],border:`1px solid ${areaColors[id]}55`,fontFamily:"Georgia,serif",fontSize:12,fontWeight:300,padding:"4px 14px",borderRadius:50}}>{area.titulo}</span>

                  ):null;

                })}

              </div>

            </div>

            {/* Filtros por área */}

            <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:28}}>

              {(["Todos",...selected.map(id=>areas.find(a=>a.id===id)?.titulo||"")]).map((areaLabel,i)=>{

                const filterId = i===0?"todos":selected[i-1];

                return (

                  <button

                    key={i}

                    onClick={()=>setFiltroArea(i===0?"todos":selected[i-1])}

                    style={{

                      fontFamily:"Georgia,serif", fontSize:12, padding:"6px 18px",

                      borderRadius:50, cursor:"pointer",

                      border:`1px solid ${filtroArea===filterId?"#6B21A8":"rgba(107,33,168,0.3)"}`,

                      background:filtroArea===filterId?"#6B21A8":"white",

                      color:filtroArea===filterId?"white":"#6B21A8",

                      fontWeight:filtroArea===filterId?700:300,

                      transition:"all 0.15s"

                    }}

                  >{areaLabel}</button>

                );

              })}

            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",gap:20,marginBottom:40}}>

              {getRecomendaciones().filter(prog=>filtroArea==="todos"||prog.areaId===filtroArea).map(prog=>(

                <div key={prog.id} onClick={()=>setProgSeleccionado(prog.id)} style={{borderRadius:16,overflow:"hidden",cursor:"pointer",border:"1px solid #e4daf5",transition:"transform 0.2s, box-shadow 0.2s",background:"white"}}

                  onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLDivElement).style.boxShadow="0 12px 32px rgba(61,30,122,0.14)";}}

                  onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(0)";(e.currentTarget as HTMLDivElement).style.boxShadow="none";}}>

                  <div style={{height:168,position:"relative",overflow:"hidden"}}>

                    <img src={prog.img} alt={prog.nombre} loading="lazy" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>

                    <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(10,4,30,0.92) 0%,rgba(10,4,30,0.2) 55%,transparent 100%)"}}/>

                    <span style={{position:"absolute",top:10,right:10,zIndex:3,background:"#C9A84C",color:"#1A0838",fontFamily:"Georgia,serif",fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:50,letterSpacing:"0.05em"}}>Recomendado</span>

                    <div style={{position:"absolute",bottom:0,left:0,right:0,zIndex:2,padding:"12px 14px"}}>

                      <p style={{fontFamily:"Georgia,serif",fontSize:14,fontWeight:700,color:"white",lineHeight:1.25,margin:0}}>{prog.nombre}</p>

                    </div>

                  </div>

                  <div style={{background:"#1A0838",padding:"14px 16px"}}>

                    <p style={{fontFamily:"Georgia,serif",fontSize:10,color:"#9B6DFF",textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:300,margin:"0 0 5px"}}>{prog.area}</p>

                    <p style={{fontFamily:"Georgia,serif",fontSize:13,color:"#C9A84C",fontWeight:700,margin:"0 0 2px"}}>{prog.instructor}</p>

                    <p style={{fontFamily:"Georgia,serif",fontSize:11,color:"#666",fontWeight:300,margin:0}}>Instructor certificado</p>

                  </div>

                </div>

              ))}

            </div>

            <div style={{textAlign:"center",display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>

              <button onClick={()=>setPage("home")} style={{background:"#C9A84C",color:"#1A0838",fontFamily:"Georgia,serif",fontWeight:700,fontSize:16,padding:"16px 48px",borderRadius:50,border:"none",cursor:"pointer"}}>Entrar a Solo Gracias</button>

              <button onClick={onAuthClick} style={{background:"white",color:"#6B21A8",fontFamily:"Georgia,serif",fontWeight:300,fontSize:15,padding:"16px 36px",borderRadius:50,border:"2px solid #6B21A8",cursor:"pointer"}}>Activar membresía completa</button>

            </div>

          </div>

        </div>

      )}

    </main>

  );

}

// ─── COMUNIDAD ────────────────────────────────────────────────────────────────

const eventos = [

  {tipo:"EN VIVO",titulo:"Ceremonia de apertura — Circulo sagrado guarani",desc:"Una experiencia colectiva de conciencia guiada por maestros guaranies.",fecha:"Sabado 19 de abril, 2026",hora:"20:00hs (Paraguay) · 21:00hs (Argentina)",cupos:"Cupos limitados a 200 personas",formato:"Online via Zoom",color:"#4C1D95",img:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&fit=crop&crop=center"},

  {tipo:"PRESENCIAL",titulo:"Retiro de transformacion — Asuncion, Paraguay",desc:"Un fin de semana de inmersion total. Meditacion, yoga, frecuencias, alimentacion consciente y comunidad.",fecha:"Sabado 10 y Domingo 11 de mayo, 2026",hora:"Asuncion, Paraguay",cupos:"Cupos limitados a 50 personas",formato:"Presencial",color:"#065F46",img:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop&crop=top"},

  {tipo:"ONLINE",titulo:"Masterclass — Sabiduria ancestral para el mundo moderno",desc:"Como integrar las ensenanzas milenarias de los pueblos originarios en tu vida cotidiana.",fecha:"Miercoles 7 de mayo, 2026",hora:"19:00hs (Paraguay) · 20:00hs (Argentina)",cupos:"Acceso libre para miembros",formato:"Online — grabado para ver despues",color:"#7C2D12",img:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&fit=crop&crop=top"},

];

const historias = [

  {nombre:"[Nombre]",ciudad:"Asuncion, Paraguay",texto:"[Historia real de transformacion — a completar]",img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop&crop=top"},

  {nombre:"[Nombre]",ciudad:"Buenos Aires, Argentina",texto:"[Historia real de transformacion — a completar]",img:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80&fit=crop&crop=top"},

  {nombre:"[Nombre]",ciudad:"Lima, Peru",texto:"[Historia real de transformacion — a completar]",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop&crop=top"},

  {nombre:"[Nombre]",ciudad:"Ciudad de Mexico",texto:"[Historia real de transformacion — a completar]",img:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80&fit=crop&crop=top"},


];

const encuestaOpciones = ["Retiros presenciales en mi ciudad","Eventos online en vivo","Sesiones grupales de meditacion","Talleres de sabiduria ancestral","Ceremonias de sonido y frecuencias","Encuentros de comunidad informales","Masterclasses con instructores especiales","Eventos familiares y para ninos"];

function Comunidad({setPage, onAuthClick}:{setPage:(p:any)=>void, onAuthClick:()=>void}) {

  const [encuesta, setEncuesta] = useState<string[]>([]);

  const [enviado, setEnviado] = useState(false);

  const [emailEnc, setEmailEnc] = useState("");

  const toggleEnc = (op:string) => setEncuesta(prev=>prev.includes(op)?prev.filter(x=>x!==op):[...prev,op]);

  return (

    <main style={{minHeight:"100vh",background:"white",fontFamily:"system-ui,sans-serif"}}>

      <section style={{position:"relative",overflow:"hidden",minHeight:600,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",textAlign:"center"}}>

        <div style={{position:"absolute",inset:0,background:"#0F0820"}}/>

        <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"140%",height:"70%",borderRadius:"50% 50% 0 0",background:"radial-gradient(ellipse at 50% 100%, #6B21A8 0%, #4C1D95 25%, #2D0F5E 50%, transparent 75%)",opacity:0.9}}/>

        <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",height:"40%",borderRadius:"50% 50% 0 0",background:"radial-gradient(ellipse at 50% 100%, #C9A84C 0%, #9B6DFF 40%, transparent 70%)",opacity:0.5}}/>

        <div style={{position:"relative",zIndex:2,maxWidth:800}}>

          <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",marginBottom:20}}>El corazon de Solo Gracias</p>

          <h1 style={{color:"white",fontSize:"clamp(40px,5.5vw,76px)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.02em",marginBottom:20}}>El cambio de uno<br/>es el <span style={{color:"#C9A84C"}}>cambio de todos.</span></h1>

          <p style={{color:"rgba(255,255,255,0.7)",fontSize:18,lineHeight:1.7,maxWidth:580,margin:"0 auto 36px"}}>Bienvenido a la comunidad de transformacion hispanohablante mas poderosa de Latinoamerica.</p>

          <button onClick={onAuthClick} style={{background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:16,padding:"16px 48px",borderRadius:50,border:"none",cursor:"pointer"}}>Unirme a la comunidad</button>

        </div>

      </section>

      <section style={{background:"white",padding:"48px 40px",borderBottom:"1px solid #f0f0f0"}}>

        <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:32,textAlign:"center"}}>

          {[{num:"700M+",label:"Hispanohablantes en el mundo"},{num:"21",label:"Paises de Latinoamerica y Espana"},{num:"30",label:"Dias gratis para explorar"},{num:"100%",label:"Contenido en espanol, de nuestra cultura"}].map((stat,i)=>(

            <div key={i}><p style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:900,color:"#6B21A8",margin:"0 0 6px",lineHeight:1}}>{stat.num}</p><p style={{color:"#666",fontSize:14,margin:0,lineHeight:1.4}}>{stat.label}</p></div>

          ))}

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"#f9f9f9"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <h2 style={{fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:48,maxWidth:560}}>Historias que transforman e inspiran.</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20}}>

            {historias.map((h,i)=>(

              <div key={i} style={{background:"white",borderRadius:20,overflow:"hidden",border:"1px solid #eee"}}>

                <div style={{height:"clamp(180px,30vw,220px)",overflow:"hidden"}}><img src={h.img} alt={h.nombre} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/></div>

                <div style={{padding:"clamp(14px,2vw,20px) clamp(14px,2vw,22px)"}}>

                  <p style={{fontSize:"clamp(13px,1.5vw,15px)",fontWeight:600,color:"#111",lineHeight:1.6,marginBottom:14}}>"{h.texto}"</p>

                  <p style={{fontWeight:700,fontSize:14,color:"#111",margin:"0 0 2px"}}>{h.nombre}</p>

                  <p style={{color:"#888",fontSize:12,margin:0}}>{h.ciudad}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"white"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <h2 style={{fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:48,maxWidth:560}}>Eventos que Solo Gracias esta preparando para vos.</h2>

          <div style={{display:"flex",flexDirection:"column",gap:20,marginBottom:40}}>

            {eventos.map((ev,i)=>(

              <div key={i} style={{borderRadius:20,overflow:"hidden",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",background:"#f9f9f9",border:"1px solid #eee"}}>

                <div style={{minHeight:180,overflow:"hidden",position:"relative"}}>

                  <img src={ev.img} alt={ev.titulo} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>

                  <div style={{position:"absolute",top:12,left:12,background:ev.color,color:"white",fontSize:10,fontWeight:700,padding:"4px 10px",borderRadius:50,letterSpacing:"0.1em"}}>{ev.tipo}</div>

                </div>

                <div style={{padding:"clamp(16px,3vw,24px) clamp(16px,3vw,28px)"}}>

                  <h3 style={{fontSize:20,fontWeight:800,color:"#111",margin:"0 0 8px",lineHeight:1.3}}>{ev.titulo}</h3>

                  <p style={{color:"#555",fontSize:14,lineHeight:1.65,margin:"0 0 16px"}}>{ev.desc}</p>

                  <p style={{color:"#333",fontSize:13,fontWeight:500,margin:"0 0 4px"}}>{ev.fecha}</p>

                  <p style={{color:"#555",fontSize:13,margin:"0 0 16px"}}>{ev.hora}</p>

                  <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16}}>

                    <span style={{background:"#EDE9FF",color:"#4C1D95",fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:50}}>{ev.formato}</span>

                    <span style={{background:"#FEF3C7",color:"#78350F",fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:50}}>{ev.cupos}</span>

                  </div>

                  <button onClick={()=>setPage("onboarding")} style={{background:"#6B21A8",color:"white",fontWeight:600,fontSize:13,padding:"10px 24px",borderRadius:50,border:"none",cursor:"pointer"}}>Inscribirme</button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section style={{padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)",background:"linear-gradient(135deg,#0F0820,#2D0F5E)"}}>

        <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>

          <h2 style={{color:"white",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,lineHeight:1.1,marginBottom:16}}>¿Como te llega mejor la informacion?</h2>

          <p style={{color:"rgba(255,255,255,0.6)",fontSize:16,lineHeight:1.65,marginBottom:40}}>Contanos que tipo de eventos y formatos preferes.</p>

          {!enviado?(

            <>

              <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:32}}>

                {encuestaOpciones.map(op=>{

                  const sel=encuesta.includes(op);

                  return <button key={op} onClick={()=>toggleEnc(op)} style={{padding:"10px 18px",borderRadius:50,border:`2px solid ${sel?"#C9A84C":"rgba(255,255,255,0.25)"}`,background:sel?"#C9A84C":"transparent",color:sel?"#1A0838":"white",fontSize:14,fontWeight:sel?700:400,cursor:"pointer",transition:"all 0.2s"}}>{op}</button>;

                })}

              </div>

              <input type="email" value={emailEnc} onChange={e=>setEmailEnc(e.target.value)} placeholder="Tu correo para avisarte de los eventos" style={{width:"100%",maxWidth:400,padding:"14px 20px",borderRadius:50,border:"1px solid rgba(255,255,255,0.25)",background:"rgba(255,255,255,0.08)",color:"white",fontSize:14,outline:"none",textAlign:"center",boxSizing:"border-box" as any,marginBottom:20,display:"block",margin:"0 auto 20px"}}/>

              <button onClick={()=>{if(encuesta.length>0)setEnviado(true);}} style={{background:encuesta.length>0?"#C9A84C":"rgba(255,255,255,0.2)",color:encuesta.length>0?"#1A0838":"rgba(255,255,255,0.5)",fontWeight:700,fontSize:16,padding:"15px 48px",borderRadius:50,border:"none",cursor:encuesta.length>0?"pointer":"default",transition:"all 0.3s"}}>Enviar mis preferencias</button>

            </>

          ):(

            <div style={{padding:"48px",background:"rgba(255,255,255,0.06)",borderRadius:24,border:"1px solid rgba(201,168,76,0.3)"}}>

              <div style={{marginBottom:16}}><SpiralLogo color="#C9A84C" size={48}/></div>

              <h3 style={{color:"white",fontSize:24,fontWeight:800,margin:"0 0 12px"}}>Gracias por responder.</h3>

              <p style={{color:"rgba(255,255,255,0.65)",fontSize:16,lineHeight:1.65,margin:0}}>Tus preferencias nos ayudan a crear experiencias que realmente te lleguen.</p>

            </div>

          )}

        </div>

      </section>

      <section style={{background:"white",padding:"clamp(32px,5vw,64px) clamp(16px,4vw,40px)",textAlign:"center"}}>

        <div style={{maxWidth:600,margin:"0 auto"}}>

          <SpiralLogo color="#6B21A8" size={48}/>

          <h2 style={{fontSize:"clamp(28px,3.5vw,44px)",fontWeight:900,color:"#111",margin:"16px 0 12px",lineHeight:1.1}}>Forma parte del movimiento.</h2>

          <p style={{color:"#555",fontSize:17,lineHeight:1.65,marginBottom:32}}>El exito colectivo empieza cuando cada persona elige transformarse.</p>

          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>

            <button onClick={onAuthClick} style={{background:"#6B21A8",color:"white",fontWeight:700,fontSize:16,padding:"16px 44px",borderRadius:50,border:"none",cursor:"pointer"}}>Unirme ahora</button>

            <button onClick={()=>setPage("onboarding")} style={{background:"white",color:"#6B21A8",fontWeight:600,fontSize:16,padding:"16px 44px",borderRadius:50,border:"2px solid #6B21A8",cursor:"pointer"}}>Comenzar gratis</button>

          </div>

        </div>

      </section>

    </main>

  );

}

// ─── GAMIFICACION ─────────────────────────────────────────────────────────────

const insignias = [

  {id:"primer_paso",nombre:"Primer paso",desc:"Completaste tu primera leccion",xp:50,color:"#C9A84C",obtenida:true,icono:"S"},

  {id:"semana_1",nombre:"7 dias",desc:"7 dias consecutivos activo",xp:200,color:"#6B21A8",obtenida:true,icono:"7"},

  {id:"primer_quest",nombre:"Primer quest",desc:"Completaste tu primera experiencia",xp:500,color:"#065F46",obtenida:false,icono:"Q"},

  {id:"explorador",nombre:"Explorador",desc:"Iniciaste 3 experiencias diferentes",xp:300,color:"#1E3A5F",obtenida:false,icono:"E"},

  {id:"sabio",nombre:"Sabio ancestral",desc:"Completaste una experiencia de sabiduria",xp:800,color:"#7C2D12",obtenida:false,icono:"SA"},

  {id:"comunidad",nombre:"Miembro activo",desc:"Participaste en un evento de comunidad",xp:400,color:"#831843",obtenida:false,icono:"C"},

  {id:"instructor",nombre:"Instructor",desc:"Te certificaste como instructor",xp:2000,color:"#2D0F5E",obtenida:false,icono:"IN"},

  {id:"racha_30",nombre:"30 dias",desc:"30 dias consecutivos activo",xp:1000,color:"#78350F",obtenida:false,icono:"30"},

];

const hitos = [

  {xp:0,nombre:"Semilla",color:"#888",activo:true},

  {xp:500,nombre:"Brote",color:"#065F46",activo:false},

  {xp:1500,nombre:"Raiz",color:"#6B21A8",activo:false},

  {xp:3000,nombre:"Arbol",color:"#C9A84C",activo:false},

  {xp:6000,nombre:"Bosque",color:"#7C2D12",activo:false},

  {xp:10000,nombre:"Guardiana",color:"#1E3A5F",activo:false},

];

const USER_XP = 350;

const NEXT_XP = 500;

function Gamificacion({setPage, onAuthClick}:{setPage:(p:any)=>void, onAuthClick:()=>void}) {

  const [tab, setTab] = useState<"insignias"|"hitos"|"ranking">("insignias");

  const progreso = Math.round((USER_XP/NEXT_XP)*100);

  return (

    <main style={{minHeight:"100vh",background:"#0F0820",fontFamily:"system-ui,sans-serif",color:"white"}}>

      <div style={{padding:"24px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>

        <button onClick={()=>setPage("home")} style={{display:"flex",alignItems:"center",gap:10,background:"none",border:"none",cursor:"pointer"}}>

          <SpiralLogo color="#C9A84C" size={28}/>

          <span style={{fontFamily:"Georgia,serif",color:"white",fontSize:16,letterSpacing:"0.14em"}}>SOLO GRACIAS</span>

        </button>

        <div style={{display:"flex",gap:4}}>

          {(["insignias","hitos","ranking"] as const).map(t=>(

            <button key={t} onClick={()=>setTab(t)} style={{padding:"8px 18px",borderRadius:50,border:"none",cursor:"pointer",background:tab===t?"#6B21A8":"rgba(255,255,255,0.06)",color:tab===t?"white":"rgba(255,255,255,0.5)",fontSize:14,fontWeight:tab===t?600:400,transition:"all 0.2s"}}>

              {t==="insignias"?"Insignias":t==="hitos"?"Hitos":"Ranking"}

            </button>

          ))}

        </div>

        <div style={{width:120}}/>

      </div>

      <section style={{padding:"40px",background:"linear-gradient(135deg,#1A0838,#2D0F5E)",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>

        <div style={{maxWidth:800,margin:"0 auto",display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"}}>

          <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,#6B21A8,#C9A84C)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>

            <SpiralLogo color="white" size={36}/>

          </div>

          <div style={{flex:1}}>

            <p style={{color:"#C9A84C",fontSize:12,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>Nivel: Semilla</p>

            <p style={{color:"white",fontSize:22,fontWeight:800,margin:"0 0 12px"}}>Tu nombre aqui</p>

            <div style={{display:"flex",alignItems:"center",gap:12}}>

              <div style={{flex:1,height:8,background:"rgba(255,255,255,0.1)",borderRadius:4,overflow:"hidden"}}>

                <div style={{width:`${progreso}%`,height:"100%",background:"linear-gradient(90deg,#6B21A8,#C9A84C)",borderRadius:4}}/>

              </div>

              <span style={{color:"rgba(255,255,255,0.6)",fontSize:13,whiteSpace:"nowrap"}}>{USER_XP} / {NEXT_XP} XP</span>

            </div>

            <p style={{color:"rgba(255,255,255,0.4)",fontSize:12,margin:"6px 0 0"}}>{NEXT_XP-USER_XP} XP para nivel "Brote"</p>

          </div>

        </div>

      </section>

      <section style={{padding:"48px 40px",maxWidth:1100,margin:"0 auto"}}>

        {tab==="insignias"&&(

          <div>

            <h2 style={{color:"white",fontSize:"clamp(24px,3vw,40px)",fontWeight:900,marginBottom:8}}>Tus insignias</h2>

            <p style={{color:"rgba(255,255,255,0.5)",fontSize:15,marginBottom:40}}>Cada insignia es un testimonio de tu evolucion.</p>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>

              {insignias.map(ins=>(

                <div key={ins.id} style={{borderRadius:20,padding:"24px",background:ins.obtenida?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.03)",border:`1px solid ${ins.obtenida?ins.color:"rgba(255,255,255,0.08)"}`,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:12,opacity:ins.obtenida?1:0.5,position:"relative",overflow:"hidden"}}>

                  {!ins.obtenida&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:20}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>}

                  <div style={{width:64,height:64,borderRadius:"50%",background:`linear-gradient(135deg,${ins.color},${ins.color}88)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:900,color:"white"}}>{ins.icono}</div>

                  <div>

                    <p style={{color:"white",fontWeight:700,fontSize:15,margin:"0 0 4px"}}>{ins.nombre}</p>

                    <p style={{color:"rgba(255,255,255,0.5)",fontSize:12,margin:"0 0 8px",lineHeight:1.4}}>{ins.desc}</p>

                    <span style={{background:`${ins.color}33`,color:ins.obtenida?ins.color:"rgba(255,255,255,0.3)",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:50}}>+{ins.xp} XP</span>

                  </div>

                  {ins.obtenida&&<div style={{position:"absolute",top:12,right:12,width:20,height:20,borderRadius:"50%",background:"#22c55e",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}

                </div>

              ))}

            </div>

          </div>

        )}

        {tab==="hitos"&&(

          <div>

            <h2 style={{color:"white",fontSize:"clamp(24px,3vw,40px)",fontWeight:900,marginBottom:8}}>Tu camino de evolucion</h2>

            <p style={{color:"rgba(255,255,255,0.5)",fontSize:15,marginBottom:48}}>Actualmente estas en el nivel Semilla.</p>

            <div style={{position:"relative",maxWidth:700,margin:"0 auto"}}>

              <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:2,background:"rgba(255,255,255,0.1)",transform:"translateX(-50%)"}}/>

              {hitos.map((hito,i)=>{

                const alcanzado=USER_XP>=hito.xp;

                const esActual=i===0||(USER_XP>=hito.xp&&(i===hitos.length-1||USER_XP<hitos[i+1].xp));

                return (

                  <div key={i} style={{display:"flex",gap:32,alignItems:"center",marginBottom:40,flexDirection:i%2===0?"row":"row-reverse",position:"relative",zIndex:1}}>

                    <div style={{flex:1,display:"flex",justifyContent:i%2===0?"flex-end":"flex-start"}}>

                      <div style={{background:alcanzado?hito.color:"rgba(255,255,255,0.05)",borderRadius:16,padding:"20px 24px",maxWidth:260,border:`1px solid ${alcanzado?hito.color:"rgba(255,255,255,0.08)"}`,opacity:alcanzado?1:0.5}}>

                        <p style={{color:alcanzado?"white":"rgba(255,255,255,0.5)",fontWeight:800,fontSize:20,margin:"0 0 4px"}}>{hito.nombre}</p>

                        <p style={{color:alcanzado?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)",fontSize:13,margin:"0 0 8px"}}>{hito.xp===0?"Nivel inicial":`Requiere ${hito.xp} XP`}</p>

                        {esActual&&<span style={{background:"#C9A84C",color:"#1A0838",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:50}}>Nivel actual</span>}

                      </div>

                    </div>

                    <div style={{width:44,height:44,borderRadius:"50%",background:alcanzado?hito.color:"rgba(255,255,255,0.08)",border:`3px solid ${alcanzado?hito.color:"rgba(255,255,255,0.15)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:2}}>

                      {alcanzado?<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>:<div style={{width:10,height:10,borderRadius:"50%",background:"rgba(255,255,255,0.2)"}}/>}

                    </div>

                    <div style={{flex:1}}/>

                  </div>

                );

              })}

            </div>

          </div>

        )}

        {tab==="ranking"&&(

          <div>

            <h2 style={{color:"white",fontSize:"clamp(24px,3vw,40px)",fontWeight:900,marginBottom:8}}>Comunidad en movimiento</h2>

            <p style={{color:"rgba(255,255,255,0.5)",fontSize:15,marginBottom:40}}>El crecimiento de cada persona inspira a toda la comunidad.</p>

            <div style={{background:"rgba(255,255,255,0.04)",borderRadius:20,overflow:"hidden",border:"1px solid rgba(255,255,255,0.08)"}}>

              {[{pos:1,nombre:"[Pionero 1]",ciudad:"Asuncion",xp:1240,nivel:"Brote",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face"},{pos:2,nombre:"[Pionero 2]",ciudad:"Buenos Aires",xp:980,nivel:"Brote",img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face"},{pos:3,nombre:"[Pionero 3]",ciudad:"Lima",xp:750,nivel:"Semilla",img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&fit=crop&crop=face"},{pos:4,nombre:"Tu nombre",ciudad:"—",xp:350,nivel:"Semilla",img:null,esVos:true},{pos:5,nombre:"[Miembro 5]",ciudad:"Santiago",xp:290,nivel:"Semilla",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&fit=crop&crop=face"}].map((m,i)=>(

                <div key={i} style={{padding:"16px 24px",display:"grid",gridTemplateColumns:"48px 1fr 100px 100px",gap:16,alignItems:"center",background:(m as any).esVos?"rgba(107,33,168,0.2)":"transparent",borderTop:i>0?"1px solid rgba(255,255,255,0.05)":"none"}}>

                  <span style={{color:m.pos<=3?"#C9A84C":"rgba(255,255,255,0.4)",fontSize:16,fontWeight:900}}>{m.pos}</span>

                  <div style={{display:"flex",alignItems:"center",gap:12}}>

                    <div style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.1)",overflow:"hidden",flexShrink:0}}>

                      {m.img?<img src={m.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>:<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}><SpiralLogo color="#C9A84C" size={20}/></div>}

                    </div>

                    <div>

                      <p style={{color:(m as any).esVos?"#C9A84C":"white",fontWeight:(m as any).esVos?700:400,fontSize:14,margin:0}}>{m.nombre}{(m as any).esVos?" (vos)":""}</p>

                      <p style={{color:"rgba(255,255,255,0.4)",fontSize:12,margin:0}}>{m.ciudad}</p>

                    </div>

                  </div>

                  <p style={{color:"#C9A84C",fontWeight:700,fontSize:15,margin:0,textAlign:"center"}}>{m.xp}</p>

                  <span style={{background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.6)",fontSize:12,padding:"3px 10px",borderRadius:50,textAlign:"center"}}>{m.nivel}</span>

                </div>

              ))}

            </div>

          </div>

        )}

      </section>

      <section style={{padding:"48px 40px",background:"rgba(255,255,255,0.02)",borderTop:"1px solid rgba(255,255,255,0.06)"}}>

        <div style={{maxWidth:900,margin:"0 auto"}}>

          <h3 style={{color:"white",fontSize:20,fontWeight:800,marginBottom:24}}>Como ganar XP</h3>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12}}>

            {[{acc:"Completar una leccion",xp:"+10 XP"},{acc:"Completar un modulo",xp:"+50 XP"},{acc:"Completar una experiencia",xp:"+200 XP"},{acc:"Racha diaria de 7 dias",xp:"+100 XP"},{acc:"Participar en evento en vivo",xp:"+150 XP"},{acc:"Compartir tu historia",xp:"+80 XP"},{acc:"Referir a un amigo",xp:"+200 XP"},{acc:"Certificarte como instructor",xp:"+1000 XP"}].map((item,i)=>(

              <div key={i} style={{background:"rgba(255,255,255,0.04)",borderRadius:12,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(255,255,255,0.06)"}}>

                <span style={{color:"rgba(255,255,255,0.7)",fontSize:13}}>{item.acc}</span>

                <span style={{color:"#C9A84C",fontWeight:700,fontSize:13,flexShrink:0,marginLeft:8}}>{item.xp}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}

const experienciasData: Record<string, {

  id: string;

  cat: string;

  titulo: string;

  subtitulo: string;

  dias: string;

  sesiones: string;

  img: string;

  beneficios: {top: string; main: string}[];

  histLabel: string;

  histTitulo: string;

  histParrafo1: string;

  histParrafo2: string;

  maestros: {nombre: string; origen: string; desc: string}[];

  histParrafo3: string;

  ctaTitulo: string;

  ctaSpan: string;

  ctaSub: string;

}> = {

  meditacion: {

    id: "meditacion",

    cat: "Meditación",

    titulo: "Silencio Andino",

    subtitulo: "Un journey de 21 días hacia el silencio interior, la claridad mental y la paz profunda — desde la tradición meditativa de los Andes.",

    dias: "21",

    sesiones: "12",

    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80&fit=crop",

    beneficios: [

      {top:"Estás buscando", main:"Silenciar el ruido y encontrar tu centro."},

      {top:"Descubrirás", main:"Claridad mental que guía cada decisión."},

      {top:"Lograrás", main:"Paz profunda que permanece en la tormenta."},

    ],

    histLabel: "La historia detrás de la práctica",

    histTitulo: "5.000 años de sabiduría que llegaron hasta vos.",

    histParrafo1: "La meditación nació hace más de 5.000 años en las tradiciones védicas de la India, donde los sabios descubrieron que el silencio interior era la puerta al conocimiento más profundo. No era una práctica de escapar del mundo — era la forma más directa de entenderlo.",

    histParrafo2: "En Latinoamérica, esta sabiduría tomó su propia forma. Los pueblos andinos — quechuas, aymaras, guaraníes — desarrollaron sus propias formas de meditación a través del contacto con la naturaleza y el ritual colectivo. El concepto guaraní de \"ñe'ẽ porã\" — las palabras del alma — es una invitación permanente al silencio consciente.",

    maestros: [

      {nombre:"Siddharta Gautama", origen:"India, 563 a.C.", desc:"El Buda histórico sistematizó la meditación como camino hacia la liberación del sufrimiento."},

      {nombre:"Patanjali", origen:"India, 400 d.C.", desc:"Autor de los Yoga Sutras, el primer texto que codificó la meditación como ciencia del ser."},

      {nombre:"Thich Nhat Hanh", origen:"Vietnam, 1926", desc:"Llevó la meditación mindfulness al mundo moderno con claridad y accesibilidad sin precedentes."},

    ],

    histParrafo3: "Hoy, la neurociencia confirma lo que los maestros sabían: la meditación regular cambia físicamente la estructura del cerebro, reduce el cortisol y cultiva estados de bienestar sostenidos. No es misticismo — es la tecnología más antigua del ser humano para conocerse a sí mismo.",

    ctaTitulo: "Comenzá tu práctica de",

    ctaSpan: "meditación",

    ctaSub: "21 días. 12 sesiones. Una transformación real.",

  },

  yoga: {

    id: "yoga",

    cat: "Yoga",

    titulo: "Cuerpo Consciente",

    subtitulo: "30 días de movimiento sagrado para reconectar con tu cuerpo, liberar tensiones acumuladas y despertar tu energía vital.",

    dias: "30",

    sesiones: "20",

    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=80&fit=crop",

    beneficios: [

      {top:"Estás buscando", main:"Reconectar con tu cuerpo como aliado, no como enemigo."},

      {top:"Descubrirás", main:"Fuerza y flexibilidad que van más allá de lo físico."},

      {top:"Lograrás", main:"Un cuerpo vivo, presente y en armonía con tu mente."},

    ],

    histLabel: "La historia detrás de la práctica",

    histTitulo: "Una práctica de 3.000 años que transformó el mundo.",

    histParrafo1: "El yoga nació en el Valle del Indo hace más de 3.000 años como una tecnología integral del ser humano — no como ejercicio físico, sino como un sistema completo de unión entre cuerpo, mente y espíritu. La palabra sánscrita \"yoga\" significa precisamente eso: unión.",

    histParrafo2: "En Latinoamérica, el yoga encontró terreno fértil. La cosmovisión indígena — que siempre vio el cuerpo humano como parte inseparable de la naturaleza — resonó profundamente con las enseñanzas del yoga ancestral. En Solo Gracias fusionamos esta sabiduría con la tradición guaraní del movimiento sagrado y la danza ritual.",

    maestros: [

      {nombre:"Patanjali", origen:"India, 400 d.C.", desc:"Sistematizó el yoga en los 8 caminos, incluyendo posturas, respiración y meditación."},

      {nombre:"T.K.V. Desikachar", origen:"India, 1938", desc:"Desarrolló el yoga terapéutico, adaptando la práctica a cada persona individualmente."},

      {nombre:"B.K.S. Iyengar", origen:"India, 1918", desc:"Llevó el yoga al mundo occidental con un rigor y una precisión que lo transformaron en ciencia."},

    ],

    histParrafo3: "La ciencia moderna respalda lo que los yoguis supieron desde siempre: la práctica regular reduce la inflamación, mejora la neuroplasticidad, equilibra el sistema nervioso autónomo y aumenta los niveles de GABA — el neurotransmisor de la calma profunda.",

    ctaTitulo: "Comenzá tu práctica de",

    ctaSpan: "yoga",

    ctaSub: "30 días. 20 sesiones. Un cuerpo transformado.",

  },

  sabiduria: {

    id: "sabiduria",

    cat: "Sabiduría Ancestral",

    titulo: "Misterios de Machu Picchu",

    subtitulo: "15 días de inmersión en la cosmovisión andina — un viaje hacia el conocimiento que los guardianes de América protegieron por siglos.",

    dias: "15",

    sesiones: "8",

    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1400&q=80&fit=crop",

    beneficios: [

      {top:"Estás buscando", main:"Reconectar con las raíces que te definen."},

      {top:"Descubrirás", main:"Una cosmovisión que responde preguntas que la modernidad olvidó."},

      {top:"Lograrás", main:"Una identidad más profunda, enraizada y poderosa."},

    ],

    histLabel: "La historia detrás de la práctica",

    histTitulo: "El conocimiento que los Andes guardaron para vos.",

    histParrafo1: "Machu Picchu no es solo una ruina arqueológica — es un libro de piedra que los Incas construyeron para transmitir su comprensión del cosmos, el tiempo, la salud y la comunidad. Cada piedra tiene un propósito. Cada alineación, un mensaje. Esta civilización entendió cosas sobre la naturaleza humana que la ciencia moderna apenas está redescubriendo.",

    histParrafo2: "La cosmovisión andina se basa en el concepto del \"Buen Vivir\" — Sumak Kawsay en quechua — que plantea que el bienestar humano es inseparable del bienestar de la comunidad y la naturaleza. No hay prosperidad individual sin prosperidad colectiva. No hay salud del cuerpo sin salud del territorio.",

    maestros: [

      {nombre:"Tupac Yupanqui", origen:"Imperio Inca, 1441", desc:"Gran gobernante inca que expandió el Tahuantinsuyo bajo los principios del Sumak Kawsay."},

      {nombre:"José Carlos Mariátegui", origen:"Perú, 1894", desc:"Pensador que recuperó la filosofía andina como base para una modernidad latinoamericana propia."},

      {nombre:"Rigoberta Menchú", origen:"Guatemala, 1959", desc:"Premio Nobel que llevó la cosmovisión maya-quiché al mundo como mensaje de paz y dignidad."},

    ],

    histParrafo3: "Hoy, el mundo busca en estas tradiciones las respuestas que el modelo occidental no pudo dar: cómo vivir en comunidad, cómo relacionarse con la naturaleza, cómo encontrar propósito más allá del consumo. La sabiduría ancestral no es el pasado — es el futuro.",

    ctaTitulo: "Comenzá tu viaje por la",

    ctaSpan: "sabiduría ancestral",

    ctaSub: "15 días. 8 sesiones. Un nuevo origen.",

  },

  respiracion: {

    id: "respiracion",

    cat: "Respiración",

    titulo: "El Aliento Sagrado",

    subtitulo: "14 días para dominar la herramienta más poderosa que tenés — tu propia respiración — y transformar tu sistema nervioso desde adentro.",

    dias: "14",

    sesiones: "10",

    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1400&q=80&fit=crop",

    beneficios: [

      {top:"Estás buscando", main:"Calmar el sistema nervioso en segundos, no en horas."},

      {top:"Descubrirás", main:"Que la respiración consciente es el interruptor del bienestar."},

      {top:"Lograrás", main:"Control emocional real, energía sostenida y sueño profundo."},

    ],

    histLabel: "La historia detrás de la práctica",

    histTitulo: "La respiración: el primer y último acto sagrado.",

    histParrafo1: "Todas las tradiciones espirituales del mundo comparten un elemento en común: la respiración consciente como puerta al estado sagrado. En el hinduismo se llama Pranayama — control de la energía vital a través del aliento. En el budismo, Anapanasati — atención a la respiración. En la tradición guaraní, el aliento es literalmente el alma: \"ñe'ẽ\" es a la vez voz, palabra y soplo de vida.",

    histParrafo2: "Los pueblos originarios de América sabían lo que la neurociencia confirma hoy: la respiración es el único sistema autónomo del cuerpo que podemos controlar conscientemente. Eso significa que es la puerta directa entre el sistema nervioso voluntario e involuntario — y por lo tanto, la herramienta más poderosa para transformar estados emocionales.",

    maestros: [

      {nombre:"Swami Sivananda", origen:"India, 1887", desc:"Sistematizó las técnicas de Pranayama y las llevó al mundo como medicina del alma."},

      {nombre:"Wim Hof", origen:"Países Bajos, 1959", desc:"Demostró científicamente que la respiración consciente puede alterar el sistema inmune."},

      {nombre:"Stan Grof", origen:"República Checa, 1931", desc:"Desarrolló la Respiración Holotrópica como herramienta de sanación y expansión de consciencia."},

    ],

    histParrafo3: "La ciencia moderna confirma: técnicas de respiración como la respiración diafragmática, la coherencia cardíaca y el método 4-7-8 activan el nervio vago, reducen el cortisol y activan el sistema parasimpático en minutos. No necesitás medicación para encontrar calma — necesitás aprender a respirar.",

    ctaTitulo: "Comenzá tu práctica de",

    ctaSpan: "respiración consciente",

    ctaSub: "14 días. 10 sesiones. Tu sistema nervioso transformado.",

  },

  proposito: {

    id: "proposito",

    cat: "Desarrollo Personal",

    titulo: "Propósito y Visión",

    subtitulo: "21 días para descubrir tu misión de vida, diseñar tu visión de futuro y activar la energía que necesitás para hacerla real.",

    dias: "21",

    sesiones: "15",

    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80&fit=crop",

    beneficios: [

      {top:"Estás buscando", main:"Claridad sobre para qué estás aquí y a dónde vas."},

      {top:"Descubrirás", main:"Que tu propósito no se encuentra — se construye."},

      {top:"Lograrás", main:"Una visión de vida tan clara que cada decisión se vuelve simple."},

    ],

    histLabel: "La historia detrás de la práctica",

    histTitulo: "El propósito: la fuerza más antigua de la humanidad.",

    histParrafo1: "Desde los primeros registros de la filosofía humana, la pregunta del propósito ha estado en el centro de todas las tradiciones. Los griegos lo llamaban \"eudaimonia\" — la vida bien vivida. Los japoneses lo llaman \"ikigai\" — la razón de levantarse cada mañana. Los guaraníes hablaban del \"tekó porã\" — el modo de ser bueno, la vida plena y armoniosa.",

    histParrafo2: "En Latinoamérica, el propósito siempre estuvo conectado con la comunidad y con la tierra. No era una búsqueda individual y solitaria — era el descubrimiento de cómo tu presencia única contribuye al tejido colectivo. Esta visión relacional del propósito es radicalmente diferente al individualismo moderno, y es también radicalmente más poderosa.",

    maestros: [

      {nombre:"Viktor Frankl", origen:"Austria, 1905", desc:"Sobrevivió el Holocausto y fundó la Logoterapia: la sanación a través del sentido y el propósito."},

      {nombre:"Joseph Campbell", origen:"EE.UU., 1904", desc:"Descubrió el \"viaje del héroe\" — el patrón universal de transformación presente en toda cultura humana."},

      {nombre:"Simon Sinek", origen:"Reino Unido, 1973", desc:"Popularizó el concepto del \"Por qué\" como base de toda acción significativa y liderazgo real."},

    ],

    histParrafo3: "La psicología positiva confirma que las personas con un sentido claro de propósito viven más, enferman menos, toman mejores decisiones y tienen relaciones más profundas. El propósito no es un lujo filosófico — es una necesidad biológica del ser humano.",

    ctaTitulo: "Comenzá tu viaje hacia tu",

    ctaSpan: "propósito de vida",

    ctaSub: "21 días. 15 sesiones. Tu misión, clara.",

  },

  frecuencias: {

    id: "frecuencias",

    cat: "Frecuencias",

    titulo: "Sonidos que Sanan",

    subtitulo: "10 días de inmersión sonora — vibraciones sagradas que transforman tu campo energético, reducen el estrés y expanden tu consciencia.",

    dias: "10",

    sesiones: "7",

    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1400&q=80&fit=crop",

    beneficios: [

      {top:"Estás buscando", main:"Liberar tensiones que las palabras no pueden tocar."},

      {top:"Descubrirás", main:"Que el sonido es la tecnología de sanación más antigua del mundo."},

      {top:"Lograrás", main:"Estados profundos de relajación, claridad y expansión interior."},

    ],

    histLabel: "La historia detrás de la práctica",

    histTitulo: "Cuando el universo habla, lo hace con frecuencias.",

    histParrafo1: "Las tradiciones de sanación sonora son las más antiguas de la humanidad. Antes de la escritura, antes del fuego controlado, los seres humanos ya usaban el sonido como medicina. Los cuencos tibetanos, los tambores chamánicos, los cantos gregorianos, las frecuencias Solfeggio — todas estas tradiciones comparten un descubrimiento fundamental: el sonido reorganiza la materia.",

    histParrafo2: "En Latinoamérica, el sonido sagrado es el corazón de todas las ceremonias indígenas. Los mbaraka — instrumentos sagrados guaraníes — son considerados objetos de poder espiritual. Los chamanes amazónicos usan ícaros — cantos curativos — para guiar procesos de sanación. La música de los Andes, con sus escalas pentatónicas y ritmos ternarios, induce estados alterados de consciencia de forma natural.",

    maestros: [

      {nombre:"Pitágoras", origen:"Grecia, 570 a.C.", desc:"Descubrió las proporciones matemáticas del sonido y su relación con la armonía del cosmos."},

      {nombre:"Masaru Emoto", origen:"Japón, 1943", desc:"Fotografió cómo el sonido y las intenciones transforman la estructura cristalina del agua."},

      {nombre:"Jonathan Goldman", origen:"EE.UU., 1949", desc:"Pioneer mundial en terapia de sonido que demostró los efectos físicos de las frecuencias sagradas."},

    ],

    histParrafo3: "La ciencia actual confirma el poder del sonido: las frecuencias de 432 Hz y 528 Hz generan coherencia cardíaca, las ondas binaurales sincronizan hemisferios cerebrales, y el canto grupal libera oxitocina — la hormona del vínculo y la confianza. El sonido no es solo arte — es medicina.",

    ctaTitulo: "Comenzá tu sanación a través del",

    ctaSpan: "sonido sagrado",

    ctaSub: "10 días. 7 sesiones. Una vibración que transforma.",

  },

};

function ExperienciaPage({id, setPage}:{id:string|null, setPage:(p:any)=>void}) {

  const exp = id ? experienciasData[id] : experienciasData["meditacion"];

  if (!exp) return null;

  return (

    <main style={{minHeight:"100vh", background:"white", fontFamily:"system-ui,sans-serif"}}>

      {/* HERO */}

      <div style={{position:"relative", height:"clamp(400px,70vw,580px)", overflow:"hidden", display:"flex", alignItems:"flex-end"}}>

        <img

          src={exp.img} alt={exp.titulo}

          style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%"}}

        />

        <div style={{position:"absolute", inset:0, background:"linear-gradient(to top, rgba(15,8,32,0.92) 0%, rgba(15,8,32,0.4) 50%, rgba(15,8,32,0.15) 100%)"}}/>

        <div style={{position:"relative", zIndex:2, padding:"0 clamp(16px,4vw,60px) clamp(24px,4vw,60px)", maxWidth:800}}>

          <p style={{color:"#C9A84C", fontSize:11, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:14}}>{exp.cat} · Experiencia Solo Gracias</p>

          <h1 style={{color:"white", fontSize:"clamp(44px,6vw,76px)", fontWeight:900, lineHeight:1.0, marginBottom:16, letterSpacing:"-0.02em"}}>{exp.titulo}</h1>

          <p style={{color:"rgba(255,255,255,0.7)", fontSize:18, fontWeight:300, lineHeight:1.65, maxWidth:520, marginBottom:28}}>{exp.subtitulo}</p>

          <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>

            {[exp.cat, `${exp.dias} días · ${exp.sesiones} sesiones`, "Certificado incluido"].map((p,i)=>(

              <span key={i} style={{background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.7)", fontSize:12, padding:"5px 14px", borderRadius:50}}>{p}</span>

            ))}

          </div>

        </div>

      </div>

      {/* BENEFICIOS */}

      <div style={{background:"white", padding:"clamp(32px,5vw,64px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1000, margin:"0 auto"}}>

          <p style={{color:"#6B21A8", fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", textAlign:"center", marginBottom:12}}>Lo que vas a transformar</p>

          <h2 style={{fontSize:"clamp(26px,3vw,40px)", fontWeight:900, color:"#111", textAlign:"center", marginBottom:48, lineHeight:1.1}}>¿Por qué esta práctica cambia todo?</h2>

          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:16}}>

            {exp.beneficios.map((b,i)=>(

              <div key={i} style={{borderRadius:20, padding:"32px 28px", background:["#3D1E7A","#6B21A8","#4C1D95"][i]}}>

                <p style={{fontSize:13, color:"rgba(255,255,255,0.55)", marginBottom:12, letterSpacing:"0.04em"}}>{b.top}</p>

                <p style={{fontSize:24, fontWeight:900, color:"white", lineHeight:1.2}}>{b.main}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* HISTORIA */}

      <div style={{background:"#f9f9f9", padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:800, margin:"0 auto"}}>

          <p style={{color:"#6B21A8", fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:16}}>{exp.histLabel}</p>

          <h2 style={{fontSize:"clamp(28px,3.5vw,44px)", fontWeight:900, color:"#111", lineHeight:1.1, marginBottom:32}}>{exp.histTitulo}</h2>

          <p style={{color:"#444", fontSize:16, lineHeight:1.85, marginBottom:20}}>{exp.histParrafo1}</p>

          <p style={{color:"#444", fontSize:16, lineHeight:1.85, marginBottom:36}}>{exp.histParrafo2}</p>

          {/* MAESTROS */}

          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16, marginBottom:36}}>

            {exp.maestros.map((m,i)=>(

              <div key={i} style={{background:"white", borderRadius:16, padding:"22px", border:"1px solid #eee", textAlign:"center"}}>

                <div style={{width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg,#6B21A8,#3D1E7A)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 12px"}}>

                  <span style={{color:"#C9A84C", fontWeight:900, fontSize:16}}>{m.nombre.charAt(0)}</span>

                </div>

                <p style={{fontSize:14, fontWeight:700, color:"#3D1E7A", marginBottom:4}}>{m.nombre}</p>

                <p style={{fontSize:12, color:"#888", marginBottom:8}}>{m.origen}</p>

                <p style={{fontSize:13, color:"#555", lineHeight:1.5}}>{m.desc}</p>

              </div>

            ))}

          </div>

          <p style={{color:"#444", fontSize:16, lineHeight:1.85}}>{exp.histParrafo3}</p>

        </div>

      </div>

      {/* CTA */}

      <div style={{background:"radial-gradient(ellipse at 50% 100%, #6B21A8 0%, #4C1D95 30%, #2D0F5E 60%, #0F0820 100%)", padding:"clamp(40px,6vw,80px) clamp(16px,4vw,40px)", textAlign:"center"}}>

        <p style={{color:"#C9A84C", fontSize:11, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:20}}>Experiencia Solo Gracias</p>

        <h2 style={{color:"white", fontSize:"clamp(32px,4vw,56px)", fontWeight:900, lineHeight:1.05, marginBottom:14, letterSpacing:"-0.01em"}}>

          {exp.ctaTitulo} <span style={{color:"#C9A84C"}}>{exp.ctaSpan}</span> hoy.

        </h2>

        <p style={{color:"rgba(255,255,255,0.6)", fontSize:18, fontWeight:300, marginBottom:36}}>{exp.ctaSub}</p>

        <div style={{display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginBottom:40}}>

          {[`${exp.dias} días · ${exp.sesiones} sesiones`, "20 min por día", "Certificado al completar", "Instructor certificado"].map((p,i)=>(

            <span key={i} style={{background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.18)", color:"rgba(255,255,255,0.65)", fontSize:13, padding:"7px 18px", borderRadius:50}}>{p}</span>

          ))}

        </div>

        <div style={{display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap"}}>

          <button

            onClick={()=>setPage("onboarding")}

            style={{background:"#C9A84C", color:"#1A0838", fontWeight:700, fontSize:16, padding:"17px 48px", borderRadius:50, border:"none", cursor:"pointer"}}

          >Comenzar esta experiencia →</button>

          <button

            onClick={()=>setPage("home")}

            style={{background:"transparent", color:"white", fontWeight:500, fontSize:15, padding:"17px 36px", borderRadius:50, border:"2px solid rgba(255,255,255,0.35)", cursor:"pointer"}}

          >Ver todos los programas</button>

        </div>

      </div>

    </main>

  );

}

// ─── NEUROCIENCIA PAGE ────────────────────────────────────────────────────────

function NeurocienciaPage({setPage}:{setPage:(p:any)=>void}) {

  return (

    <main style={{minHeight:"100vh",background:"white",fontFamily:"system-ui,sans-serif"}}>

      {/* HERO con imagen cerebro cósmico */}

      <div style={{position:"relative",padding:"clamp(40px,6vw,80px) clamp(12px,4vw,40px) clamp(36px,5vw,72px)",textAlign:"center",overflow:"hidden",minHeight:"clamp(420px,80vw,520px)",display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100vw"}}>

        <img src="/cerebro-neuronal-clean.jpg" alt="Neuroplasticidad" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}}/>

        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(15,8,32,0.88) 0%,rgba(61,30,122,0.75) 50%,rgba(15,8,32,0.92) 100%)"}}/>

        <div style={{position:"relative",zIndex:2,maxWidth:"100%",margin:"0 auto",overflow:"hidden"}}>

          <button onClick={()=>setPage("home")} style={{display:"inline-flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.5)",fontSize:12,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:50,padding:"7px 14px",cursor:"pointer",marginBottom:12}}>← Volver</button>

          <div style={{background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.35)",color:"#C9A84C",fontSize:"clamp(8px,1.2vw,11px)",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",padding:"5px 14px",borderRadius:50,marginBottom:"clamp(14px,2vw,22px)",display:"inline-block"}}>Neurociencia</div>

          <h1 style={{color:"white",fontSize:"clamp(22px,4.5vw,68px)",fontWeight:900,lineHeight:1.1,marginBottom:"clamp(12px,2vw,20px)",letterSpacing:"-0.02em",maxWidth:"100%",overflow:"hidden"}}>

            Tu cerebro puede reprogramarse. La ciencia lo confirma.

          </h1>

          <p style={{color:"rgba(255,255,255,0.65)",fontSize:"clamp(13px,1.8vw,18px)",lineHeight:1.75,maxWidth:"100%",margin:"0 auto clamp(24px,4vw,48px)"}}>Hoy Harvard, Stanford y Nature lo demuestran: las prácticas ancestrales cambian físicamente tu cerebro.</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,maxWidth:"100%",margin:"0 auto"}}>

            {[{n:"8",l:"semanas para cambiar la estructura cerebral (Harvard)"},{n:"30%",l:"reducción de cortisol con meditación regular"},{n:"65%",l:"más éxito con mentalidad de crecimiento (Stanford)"},{n:"71%",l:"menos ansiedad con práctica consciente"}].map((s,i)=>(

              <div key={i} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,padding:"20px 14px",textAlign:"center"}}>

                <div style={{fontSize:"clamp(22px,3vw,30px)",fontWeight:900,color:"#C9A84C",lineHeight:1,marginBottom:6}}>{s.n}</div>

                <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",lineHeight:1.4}}>{s.l}</div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* QUÉ ES NEUROPLASTICIDAD */}

      <div style={{background:"white",padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>La ciencia detrás de la transformación</p>

          <h2 style={{fontSize:"clamp(26px,3vw,42px)",fontWeight:900,color:"#1A0838",lineHeight:1.1,marginBottom:48}}>Neuroplasticidad: tu cerebro no es <span style={{color:"#9B6DFF"}}>fijo.</span></h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(24px,4vw,64px)",alignItems:"center"}}>

            <div>

              <p style={{color:"#444",fontSize:16,lineHeight:1.85,marginBottom:18}}>Durante décadas, la ciencia creyó que el cerebro adulto era inmutable. En 1948, el neurocientífico Jerzy Konorski acuñó "neuroplasticidad" y cambió todo lo que sabíamos sobre el ser humano.</p>

              <p style={{color:"#444",fontSize:16,lineHeight:1.85,marginBottom:18}}>La neuroplasticidad es la capacidad del cerebro para reorganizarse formando nuevas conexiones neuronales en respuesta a experiencias, pensamientos y acciones. En palabras simples: <strong style={{color:"#3D1E7A"}}>podés literalmente recablear tu cerebro.</strong></p>

              <p style={{color:"#444",fontSize:16,lineHeight:1.85,marginBottom:20}}>Donald Hebb lo resumió en 1949 con la frase que cambió la neurociencia moderna:</p>

              <div style={{background:"linear-gradient(135deg,#EDE9FF,#F5F0FF)",borderLeft:"4px solid #6B21A8",borderRadius:"0 16px 16px 0",padding:"20px 24px"}}>

                <p style={{fontSize:16,fontStyle:"italic",color:"#3D1E7A",fontWeight:600,lineHeight:1.6}}>"Las neuronas que se activan juntas, se conectan juntas."</p>

                <p style={{fontSize:12,color:"#888",marginTop:6}}>Donald Hebb, neurocientífico, 1949</p>

              </div>

            </div>

            <div style={{display:"flex",flexDirection:"column",gap:14}}>

              {[

                {icon:"brain",t:"Corteza prefrontal más gruesa",tc:"#E879F9",d:"Meditadores regulares desarrollan mayor grosor cortical en áreas de toma de decisiones y autocontrol."},

                {icon:"bolt",t:"Amígdala menos reactiva",tc:"#22D3EE",d:"El centro del estrés reduce su reactividad hasta un 30% con 8 semanas de mindfulness."},

                {icon:"network",t:"Mayor conectividad neuronal",tc:"#A78BFA",d:"Los taxistas de Londres desarrollan hipocampo más grande memorizando rutas. Tu práctica hace lo mismo."},

                {icon:"dna",t:"Aumento de BDNF",tc:"#C9A84C",d:'Las prácticas mind-body elevan el "fertilizante del cerebro" que genera nuevas neuronas.'},

              ].map((f,i)=>(

                <div key={i} style={{display:"flex",gap:16,alignItems:"flex-start",background:"#F9F7FF",borderRadius:14,padding:18}}>

                  <div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#6B21A8,#3D1E7A)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 4px 14px rgba(107,33,168,0.4)"}}>

                    {f.icon==="brain"&&<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>}

                    {f.icon==="bolt"&&<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}

                    {f.icon==="network"&&<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>}

                    {f.icon==="dna"&&<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M2 9c6.667 6 13.333 0 20 6"/><path d="M4.7 11.5a10 10 0 0 0 1.8 1"/><path d="M4.3 12.5a10 10 0 0 1 1.8-1"/><path d="M17.5 11.5a10 10 0 0 0 1.8 1"/><path d="M17.1 12.5a10 10 0 0 1 1.8-1"/></svg>}

                  </div>

                  <div>

                    <div style={{fontSize:14,fontWeight:700,color:["#E879F9","#22D3EE","#A78BFA","#C9A84C"][i],marginBottom:4}}>{f.t}</div>

                    <div style={{fontSize:13,color:"#555",lineHeight:1.5}}>{f.d}</div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* EVIDENCIA */}

      <div style={{background:"#F7F5FF",padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>Estudios publicados en revistas de primer nivel</p>

          <h2 style={{fontSize:"clamp(26px,3vw,42px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:48,textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>Lo que dicen Harvard, Stanford y Nature.</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20}}>

            {[

              {src:"Harvard Medical School · 2011",n:"8",t:"semanas para cambiar físicamente el cerebro",d:"Sara Lazar demostró con fMRI que 8 semanas de MBSR aumentan el grosor de la corteza prefrontal y reducen la amígdala.",badge:"NeuroReport · Revisado por pares"},

              {src:"Stanford University · Carol Dweck",n:"65%",t:"más probabilidad de éxito con mentalidad de crecimiento",d:"Personas que creen que pueden mejorar con esfuerzo tienen 65% más probabilidad de alcanzar sus metas.",badge:"Mindset: The New Psychology of Success"},

              {src:"Nature · Communications Biology · 2025",n:"↑BDNF",t:"aumento del factor de crecimiento neuronal",d:"Retiro intensivo de meditación elevó el BDNF y cambió la conectividad funcional cerebral medida por fMRI.",badge:"Revisado por pares · 2025"},

              {src:"MDPI Biomedicines · Nov 2024",n:"30%",t:"reducción de cortisol con meditación regular",d:"Revisión sistemática en PubMed, Cochrane y Embase: la meditación reduce la amígdala y mejora la regulación emocional.",badge:"Systematic Review 2024"},

              {src:"University of London",n:"↑",t:"Hipocampo más grande con entrenamiento mental",d:"Taxistas que memorizaban rutas desarrollaban hipocampo significativamente más grande. La mente entrenada cambia el cerebro.",badge:"Neuroplasticidad dirigida"},

              {src:"Translational Psychiatry · Nature · 2023",n:"↑",t:"Mejora de redes cerebrales con mindfulness",d:"Mindfulness mejoró la eficiencia de reconfiguración en los sistemas de control ejecutivo y default mode network.",badge:"Nature · 2023"},

            ].map((e,i)=>(

              <div key={i} style={{background:"white",borderRadius:20,padding:26,border:"1px solid #E8E0FF"}}>

                <div style={{fontSize:10,color:"#9B6DFF",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10}}>{e.src}</div>

                <div style={{fontSize:"clamp(28px,4vw,42px)",fontWeight:900,color:"#3D1E7A",lineHeight:1,marginBottom:8}}>{e.n}</div>

                <div style={{fontSize:14,fontWeight:700,color:"#111",marginBottom:8,lineHeight:1.3}}>{e.t}</div>

                <div style={{fontSize:13,color:"#666",lineHeight:1.6}}>{e.d}</div>

                <span style={{display:"inline-block",background:"#EDE9FF",color:"#4C1D95",fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:50,marginTop:12}}>{e.badge}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* GALERÍA DE PUBLICACIONES */}

      <div style={{background:"white",padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>Publicaciones científicas</p>

          <h2 style={{fontSize:"clamp(26px,3vw,42px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:48,textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>Las investigaciones que respaldan cada práctica.</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>

            {[

              {bg:"linear-gradient(135deg,#2D0F5E,#6B21A8)",year:"2024",journal:"MDPI Biomedicines",title:"Neurobiological Changes Induced by Mindfulness and Meditation: A Systematic Review",authors:"Calderone, Latella, Impellizzeri et al.",resumen:"Revisión sistemática en PubMed, Cochrane y Embase sobre cambios neurobiológicos en meditación.",tag:"Neuroplasticidad"},

              {bg:"linear-gradient(135deg,#1A0838,#3D1E7A)",year:"2025",journal:"Nature · Communications Biology",title:"Neural and molecular changes during a mind-body intervention",authors:"Nature Publishing Group",resumen:"fMRI y multi-ómicas revelan que un retiro intensivo modula conectividad cerebral y activa vías de neuroplasticidad.",tag:"fMRI · BDNF"},

              {bg:"linear-gradient(135deg,#3D1E7A,#6B21A8)",year:"2023",journal:"Translational Psychiatry · Nature",title:"Mindfulness-based therapy improves brain functional network reconfiguration efficiency",authors:"Nature Publishing Group",resumen:"Mindfulness mejoró la eficiencia de redes cerebrales en sistemas de control ejecutivo y default mode.",tag:"Redes cerebrales"},

              {bg:"linear-gradient(135deg,#1A0838,#4C1D95)",year:"2023",journal:"Scientific Reports · Nature",title:"Effects of web-based mindfulness training on psychological outcomes, attention, and neuroplasticity",authors:"Nature Publishing Group",resumen:"Mayor actividad en hipocampo derecho y mejoras en materia blanca tras programa de meditación online.",tag:"Hipocampo"},

              {bg:"linear-gradient(135deg,#2D0F5E,#4C1D95)",year:"2024",journal:"Neuroscience & Biobehavioral Reviews",title:"Neuromodulation and meditation: A review and synthesis",authors:"Abellaneda-Pérez et al. · Harvard",resumen:"Síntesis de evidencia sobre cómo la meditación modula los sistemas cerebrales de control cognitivo.",tag:"Corteza prefrontal"},

              {bg:"linear-gradient(135deg,#3D1E7A,#1A0838)",year:"2025",journal:"Preprints.org",title:"Harnessing Neuroplasticity: Evidence-Based Interventions for Personal Transformation",authors:"Revisión de intervenciones basadas en evidencia",resumen:"Mindfulness y actividad física aprovechan mecanismos neuroplásticos para romper patrones limitantes.",tag:"Transformación personal"},

            ].map((p,i)=>(

              <div key={i} style={{background:"white",borderRadius:16,overflow:"hidden",border:"1px solid #E8E0FF",display:"flex",flexDirection:"column"}}>

                <div style={{height:130,background:p.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:18,position:"relative"}}>

                  <div style={{position:"absolute",top:10,right:10,background:"rgba(201,168,76,0.2)",border:"1px solid #C9A84C",color:"#C9A84C",fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:50}}>{p.year}</div>

                  <div>

                    <div style={{fontSize:10,color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6,textAlign:"center"}}>{p.journal}</div>

                    <div style={{color:"white",fontSize:12,fontWeight:700,lineHeight:1.4,textAlign:"center"}}>{p.title}</div>

                  </div>

                </div>

                <div style={{padding:16,flex:1}}>

                  <div style={{fontSize:11,color:"#9B6DFF",fontWeight:600,marginBottom:6}}>{p.authors}</div>

                  <div style={{fontSize:12,color:"#666",lineHeight:1.5}}>{p.resumen}</div>

                </div>

                <div style={{padding:"10px 16px",borderTop:"1px solid #f0f0f0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

                  <span style={{fontSize:10,background:"#EDE9FF",color:"#4C1D95",padding:"3px 8px",borderRadius:50,fontWeight:700}}>{p.tag}</span>

                  <span style={{fontSize:11,color:"#6B21A8",fontWeight:600,cursor:"pointer"}}>Ver →</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* EXPERTOS */}

      <div style={{background:"#F7F5FF",padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>Los científicos que cambiaron todo</p>

          <h2 style={{fontSize:"clamp(26px,3vw,42px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:48,textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>Las mentes que demostraron que podemos cambiar la nuestra.</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:20}}>

            {[

              {img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&crop=top",uni:"Harvard Medical School",nombre:"Sara Lazar",aporte:"Meditación + Neuroimagen",desc:"Demostró con fMRI que 8 semanas de meditación aumentan el grosor de la corteza prefrontal y reducen físicamente la amígdala.",badge:"NeuroReport · 2011"},

              {img:"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80&fit=crop&crop=top",uni:"Stanford University",nombre:"Carol Dweck",aporte:"Mentalidad de crecimiento",desc:"Creó la teoría científica de que nuestras creencias sobre nuestras capacidades cambian físicamente nuestro cerebro y determinan nuestro éxito.",badge:"Mindset · Stanford"},

              {img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&fit=crop&crop=top",uni:"University of Wisconsin",nombre:"Richard Davidson",aporte:"Neurociencia contemplativa",desc:"Estudió monjes budistas y registró niveles de actividad en el lóbulo frontal nunca antes vistos. El meditador más estudiado fue llamado 'el hombre más feliz del planeta'.",badge:"UW Madison · Center for Healthy Minds"},

              {img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop&crop=top",uni:"Psiquiatra · España",nombre:"Marian Rojas Estapé",aporte:"Neurociencia en español",desc:"Mayor divulgadora de neurociencia en el mundo hispanohablante. Demuestra que hábitos positivos y meditación fortalecen la corteza prefrontal.",badge:"Cómo hacer que te pasen cosas buenas"},

            ].map((e,i)=>(

              <div key={i} style={{borderRadius:20,overflow:"hidden",border:"1px solid #E8E0FF",background:"white"}}>

                <div style={{height:200,overflow:"hidden",position:"relative"}}>

                  <img src={e.img} alt={e.nombre} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>

                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(26,8,56,0.9),transparent)"}}/>

                  <div style={{position:"absolute",bottom:28,left:14,color:"#C9A84C",fontSize:10,fontWeight:700,letterSpacing:"0.06em"}}>{e.uni}</div>

                  <div style={{position:"absolute",bottom:12,left:14,color:"white",fontSize:14,fontWeight:700,lineHeight:1.2}}>{e.nombre}</div>

                </div>

                <div style={{padding:18}}>

                  <div style={{fontSize:10,color:"#9B6DFF",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8}}>{e.aporte}</div>

                  <div style={{fontSize:13,color:"#555",lineHeight:1.55,marginBottom:10}}>{e.desc}</div>

                  <span style={{display:"inline-block",background:"#EDE9FF",color:"#4C1D95",fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:50}}>{e.badge}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* 4 PASOS */}

      <div style={{background:"white",padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#6B21A8",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>El método Solo Gracias</p>

          <h2 style={{fontSize:"clamp(26px,3vw,42px)",fontWeight:900,color:"#111",lineHeight:1.1,marginBottom:48,textAlign:"center",maxWidth:560,margin:"0 auto 48px"}}>Cómo reprogramamos tu cerebro en 4 pasos.</h2>

          {/* Línea conectora horizontal entre pasos */}

          <div style={{position:"relative",marginTop:48}}>

            <div style={{position:"absolute",top:26,left:"12.5%",right:"12.5%",height:2,background:"linear-gradient(to right,#6B21A8,#9B6DFF,#C9A84C,#9B6DFF,#6B21A8)",zIndex:0,borderRadius:2}}/>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:20,position:"relative",zIndex:1}}>

              {[

                {n:1,t:"Consciencia",d:"Identificás los patrones mentales que te limitan. La meditación activa tu corteza prefrontal y te da perspectiva sobre tus propios pensamientos."},

                {n:2,t:"Interrupción",d:"Las técnicas de respiración interrumpen el circuito automático de respuesta al estrés y activan el sistema parasimpático en minutos."},

                {n:3,t:"Reprogramación",d:"A través de la práctica repetida — 20 minutos por día — construís nuevas autopistas neuronales que reemplazan los patrones limitantes."},

                {n:4,t:"Integración",d:"Los nuevos patrones se vuelven automáticos. Tu cerebro opera desde un estado de mayor calma, claridad y capacidad de respuesta."},

              ].map((p,i)=>(

                <div key={i} style={{background:"white",borderRadius:20,padding:"28px 20px",border:"1px solid #E8E0FF",textAlign:"center",boxShadow:"0 4px 20px rgba(107,33,168,0.08)"}}>

                  <div style={{width:52,height:52,borderRadius:"50%",background:"linear-gradient(135deg,#6B21A8,#3D1E7A)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:20,fontWeight:900,color:"white",boxShadow:"0 4px 16px rgba(107,33,168,0.35)"}}>{p.n}</div>

                  <div style={{fontSize:16,fontWeight:700,color:"#1A0838",marginBottom:10}}>{p.t}</div>

                  <div style={{fontSize:13,color:"#666",lineHeight:1.65}}>{p.d}</div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* HISTORIAS */}

      <div style={{background:"linear-gradient(135deg,#0F0820,#1A0838)",padding:"clamp(36px,5vw,72px) clamp(16px,4vw,40px)"}}>

        <div style={{maxWidth:1100,margin:"0 auto"}}>

          <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>Historias reales de neuroplasticidad</p>

          <h2 style={{fontSize:"clamp(26px,3vw,42px)",fontWeight:900,color:"white",lineHeight:1.1,marginBottom:48,maxWidth:560}}>Cuando la mente decide cambiar, el cerebro la sigue.</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20}}>

            {[

              {img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop&crop=top",area:"Meditación · 8 semanas",quote:"Después de 8 semanas de meditación diaria mi médico me dijo que mi presión arterial había bajado a niveles normales por primera vez en 6 años. Solo aprendí a respirar conscientemente.",nombre:"Valentina M., 41 años",ciudad:"Bogotá, Colombia · Ejecutiva",neuro:"La meditación activó el sistema parasimpático y redujo la reactividad de la amígdala, bajando los niveles de cortisol que elevaban su presión."},

              {img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=top",area:"Mindfulness · 3 meses",quote:"Me diagnosticaron ansiedad severa a los 29. Decidí probar 90 días de práctica consciente antes que medicación. Hoy, 3 años después, no tomé una sola pastilla.",nombre:"Marcos R., 32 años",ciudad:"Buenos Aires, Argentina · Ingeniero",neuro:"El mindfulness generó nuevas conexiones en la corteza prefrontal que regulan la amígdala, interrumpiendo el ciclo automático de la ansiedad."},

              {img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&fit=crop&crop=top",area:"Mentalidad de crecimiento · 6 meses",quote:"Crecí creyendo que no era inteligente. A los 34 aprendí sobre neuroplasticidad y decidí entrenar mi mente como un músculo. Hoy dirijo un equipo de 40 personas.",nombre:"Lucía P., 37 años",ciudad:"Ciudad de México · Directora comercial",neuro:"Al cambiar sus creencias activó el sistema dopaminérgico y construyó nuevas redes neuronales de aprendizaje acelerado."},

            ].map((h,i)=>(

              <div key={i} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,overflow:"hidden"}}>

                <div style={{height:180,overflow:"hidden",position:"relative"}}>

                  <img src={h.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",filter:"brightness(0.65)"}}/>

                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(15,8,32,0.85),transparent)"}}/>

                  <span style={{position:"absolute",bottom:12,left:12,background:"rgba(201,168,76,0.18)",border:"1px solid rgba(201,168,76,0.5)",color:"#C9A84C",fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:50}}>{h.area}</span>

                </div>

                <div style={{padding:20}}>

                  <p style={{color:"rgba(255,255,255,0.8)",fontSize:14,lineHeight:1.7,fontStyle:"italic",marginBottom:14}}>"{h.quote}"</p>

                  <div style={{color:"white",fontWeight:700,fontSize:13,marginBottom:2}}>{h.nombre}</div>

                  <div style={{color:"rgba(255,255,255,0.4)",fontSize:11,marginBottom:12}}>{h.ciudad}</div>

                  <div style={{background:"rgba(107,33,168,0.2)",borderRadius:10,padding:"10px 12px"}}>

                    <div style={{color:"#9B6DFF",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:3}}>Lo que pasó en su cerebro</div>

                    <div style={{color:"rgba(255,255,255,0.55)",fontSize:12,lineHeight:1.4}}>{h.neuro}</div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* CTA — fondo blanco con iluminado violeta central */}

      <div style={{background:"white",padding:"clamp(44px,6vw,88px) clamp(16px,4vw,40px)",textAlign:"center",position:"relative",overflow:"hidden"}}>

        {/* Iluminado violeta radial central */}

        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:"clamp(280px,50vw,400px)",background:"radial-gradient(ellipse at center, rgba(107,33,168,0.12) 0%, rgba(155,109,255,0.06) 45%, transparent 70%)",pointerEvents:"none"}}/>

        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:400,height:"clamp(200px,40vw,300px)",background:"radial-gradient(ellipse at center, rgba(107,33,168,0.08) 0%, transparent 65%)",pointerEvents:"none"}}/>

        <div style={{position:"relative",zIndex:2}}>

          <p style={{color:"#C9A84C",fontSize:11,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",marginBottom:20}}>Solo Gracias · Neurociencia aplicada</p>

          <h2 style={{color:"#1A0838",fontSize:"clamp(28px,3.5vw,48px)",fontWeight:900,lineHeight:1.1,marginBottom:12}}>

            Tu cerebro está listo para <span style={{color:"#6B21A8"}}>reprogramarse.</span>

          </h2>

          <p style={{color:"#666",fontSize:17,marginBottom:40,maxWidth:560,margin:"0 auto 40px"}}>Comenzá hoy. 20 minutos por día. Resultados medibles en 8 semanas.</p>

          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>

            <button onClick={()=>setPage("onboarding")} style={{background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:16,padding:"17px 48px",borderRadius:50,border:"none",cursor:"pointer"}}>Comenzar mi transformación →</button>

            <button onClick={()=>setPage("home")} style={{background:"white",color:"#6B21A8",fontWeight:600,fontSize:15,padding:"17px 36px",borderRadius:50,border:"2px solid #6B21A8",cursor:"pointer"}}>Ver las experiencias</button>

          </div>

        </div>

      </div>

    </main>

  );

}

// ─── APP ROOT ──────────────────────────────────────────────────────────────────

// ─── ACADEMIA INSTRUCTORES (BeYoga Day) ────────────────────────────────────────
function AcademiaInstructores({setPage}:{setPage:(p:any)=>void}) {
  const [fOpen, setFOpen] = useState<number|null>(null);
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const scrollToForm = () => document.getElementById("form-instructores")?.scrollIntoView({behavior:"smooth"});

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const form = formRef.current;
      if(!form) return;
      const data = new FormData(form);
      await fetch("https://formspree.io/f/xaqanovg", {method:"POST", body:data, headers:{Accept:"application/json"}});
      setFormSent(true);
    } catch(err) { alert("Error al enviar. Intentá de nuevo."); }
    setSending(false);
  };

  const faqs = [
    {q:"¿Necesito muchos seguidores?",a:"No. Trabajamos con vos para construir tu audiencia. Lo que necesitás es conocimiento real y pasión genuina."},
    {q:"¿Puedo seguir con mis actividades privadas?",a:"Sí. Los programas en Solo Gracias son exclusivos, pero tu trabajo fuera de la plataforma continúa."},
    {q:"¿Necesito equipos de grabación?",a:"Nivel 1: grabás con tu celular, nosotros editamos. Niveles 2 y 3: lo grabamos y editamos todo."},
    {q:"¿Puedo subir de nivel?",a:"Sí, al lanzar una nueva experiencia. El contenido ya publicado no se rehace."},
    {q:"¿Cuándo recibo ingresos?",a:"Desde que tu experiencia está publicada. Los ingresos crecen junto con la comunidad."},
    {q:"¿La oferta vence hoy?",a:"Sí. La sesión extra de rebranding es exclusiva del 18 de abril. Reservá con $100 de seña."},
  ];

  const vidaCards = [
    {n:"01",t:"Viví una vida diseñada por vos",p:"Creá un estilo de vida donde cada día sea intencional. Trabajá desde donde quieras, con los horarios que elijas, haciendo lo que amás.",imgs:["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=70&fit=crop"]},
    {n:"02",t:"Dejá tu huella en el continente",p:"Imaginá que alguien en México, Colombia o Argentina cambia su vida gracias a lo que vos enseñaste desde Paraguay. Tu impacto no tiene fronteras.",single:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=75&fit=crop"},
    {n:"03",t:"Más que una carrera: una misión",p:"Esto no es un trabajo más. Es convertir tu pasión en un camino que asegura tu futuro y sirve a un propósito mucho más grande que vos.",imgs:["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&q=70&fit=crop"]},
    {n:"04",t:"Ganá más haciendo lo que amás",p:"A tiempo completo o como actividad complementaria — vos marcás el ritmo. Tus ingresos ahora están a la altura de tu talento.",imgs:["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=70&fit=crop"]},
    {n:"05",t:"Evolucioná junto con la plataforma",p:"No solo vas a transformar a otros — vas a transformarte vos. Las herramientas y la comunidad te llevan a un nivel que hoy no imaginás.",single:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=75&fit=crop"},
    {n:"06",t:"Creá conexiones que importan",p:"Tu red no se limita a tus alumnos. Es una comunidad de visionarios, agentes de cambio y personas apasionadas por la transformación.",imgs:["https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=200&q=70&fit=crop","https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=200&q=70&fit=crop"]},
  ];

  const niveles = [
    {badge:"Nivel 1 — Básica",badgeColor:"rgba(155,109,255,0.3)",badgeText:"#C4ADFF",price:"$700",sub:"USD pago único",desc:"Certificado digital, sesión 1:1 de 60 min, fotos oficiales, bio profesional, 1 experiencia publicada. Vos grabás, nosotros editamos.",rev:"30%",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop",page:"nivel-basica"},
    {badge:"Nivel 2 — Intermedia",badgeColor:"rgba(201,168,76,0.3)",badgeText:"#C9A84C",price:"$1.500",sub:"USD + $497/mes",desc:"Todo del Nivel 1 + sesión 1:1 de 90 min en vivo, rebranding Instagram completo, 2 experiencias exclusivas, video grabado y editado por nosotros.",rev:"40%",img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop",page:"nivel-intermedia"},
    {badge:"Nivel 3 — Premium",badgeColor:"rgba(201,168,76,0.5)",badgeText:"#FFD966",price:"$2.500",sub:"USD + $497/mes",desc:"Todo del Nivel 2 + sesión 1:1 de 90 min en vivo, rebranding TODAS las redes, landing personal, 3 experiencias, Embajador Oficial.",rev:"50%",img:"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=80&fit=crop",page:"nivel-premium"},
  ];

  const superacion = [
    {cat:"Deportistas",t:"Mentalidad de campeón",img:"https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&q=75&fit=crop"},
    {cat:"Emprendedores",t:"De la quiebra al éxito",img:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&q=75&fit=crop"},
    {cat:"Profesionales",t:"Liderazgo real",img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&q=75&fit=crop"},
    {cat:"Historias de vida",t:"Renacer",img:"https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&q=75&fit=crop"},
  ];

  const benefits = [
    {t:"Plataforma de nivel mundial",p:"Tu experiencia publicada con estructura educativa real, progreso medible y certificado al completar.",img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=70&fit=crop"},
    {t:"Rebranding profesional completo",p:"Instagram, LinkedIn, Facebook, TikTok — todo en coherencia con la identidad visual de Solo Gracias.",img:"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=70&fit=crop"},
    {t:"Audiencia de toda Latinoamérica",p:"Acceso a la comunidad que estamos construyendo juntos. Ser de los primeros tiene un valor único.",img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=70&fit=crop"},
    {t:"Ingresos pasivos reales",p:"Tu experiencia trabaja por vos las 24 horas. Revenue share escalonado según tu nivel.",img:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&q=70&fit=crop"},
  ];

  const css = `
    @media(max-width:480px){
      .ai-split{grid-template-columns:1fr !important}
      .ai-split img.ai-split-img{max-height:240px}
      .ai-split .ai-split-text{padding:20px 16px !important}
      .ai-vida{grid-template-columns:1fr !important;min-height:auto !important}
      .ai-vida.ai-rv{direction:ltr !important}
      .ai-vida .ai-vida-imgs{min-height:180px !important}
      .ai-vida .ai-vida-single{min-height:200px !important}
      .ai-sup-grid{grid-template-columns:1fr !important}
      .ai-mosaic{display:none !important}
      .ai-hero-grid{grid-template-columns:1fr !important}
      .ai-adecuado{grid-template-columns:1fr !important}
      .ai-adecuado img{max-height:280px !important;min-height:200px !important}
      .ai-btn-full{width:100% !important;max-width:100% !important}
      .ai-cert-card{min-height:280px !important}
      .ai-cert-card .ai-cert-overlay{background:linear-gradient(to top,rgba(15,8,32,0.9) 60%,rgba(15,8,32,0.4) 100%) !important}
      .ai-cert-card img{height:280px !important}
    }
    @media(min-width:481px) and (max-width:768px){
      .ai-split{grid-template-columns:1fr !important}
      .ai-split img.ai-split-img{max-height:300px}
      .ai-vida{grid-template-columns:1fr !important;min-height:auto !important}
      .ai-vida.ai-rv{direction:ltr !important}
      .ai-sup-grid{grid-template-columns:1fr 1fr !important}
      .ai-mosaic{display:none !important}
      .ai-hero-grid{grid-template-columns:1fr !important}
      .ai-adecuado{grid-template-columns:1fr !important}
      .ai-adecuado img{max-height:320px !important}
    }
    @media(min-width:769px) and (max-width:1024px){
      .ai-split{grid-template-columns:1fr 1fr !important}
      .ai-vida{grid-template-columns:1fr 1fr !important}
      .ai-sup-grid{grid-template-columns:1fr 1fr !important}
      .ai-adecuado{grid-template-columns:1fr 1fr !important}
    }
    @media(max-width:768px){
      .ai-nav-hide{display:none !important}
    }
  `;

  const Btn = ({children,onClick,violet}:{children:React.ReactNode,onClick?:()=>void,violet?:boolean}) => (
    <button onClick={onClick||scrollToForm} style={{background:violet?"#6B21A8":"#C9A84C",color:violet?"white":"#1A0838",fontWeight:700,fontSize:"clamp(14px,2vw,16px)",padding:"16px 40px",borderRadius:50,border:"none",cursor:"pointer",width:"100%",maxWidth:420}}>{children}</button>
  );

  return (
    <main style={{minHeight:"100vh",background:"white",fontFamily:"system-ui,sans-serif"}}>
      <style>{css}</style>

      {/* ═══ HERO ═══ */}
      <section style={{padding:"clamp(40px,6vw,80px) clamp(20px,4vw,60px)",textAlign:"center"}}>
        <div className="ai-hero-grid" style={{display:"grid",gridTemplateColumns:"90px 1fr 90px",alignItems:"center",maxWidth:900,margin:"0 auto"}}>
          <div className="ai-mosaic" style={{display:"flex",flexDirection:"column",gap:4}}>
            {["photo-1580489944761-15a19d654956","photo-1506794778202-cad84cf45f1d","photo-1438761681033-6461ffad8d80"].map((id,i)=><img key={i} src={`https://images.unsplash.com/${id}?w=150&q=70&fit=crop&crop=face`} alt="" style={{width:90,height:80,objectFit:"cover",borderRadius:10}}/>)}
          </div>
          <div style={{textAlign:"center",padding:"0 clamp(8px,2vw,24px)"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8}}><SpiralLogo color="#6B21A8" size={18}/><span style={{fontSize:9,fontWeight:700,letterSpacing:"0.15em",color:"#6B21A8",textTransform:"uppercase"}}>Instructor certificado</span></div>
            <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(38px,6vw,72px)",fontWeight:900,lineHeight:1.0,color:"#111",margin:"0 0 14px"}}>Certificado para transformar vidas.</h1>
            <p style={{fontSize:"clamp(15px,2vw,19px)",color:"#555",lineHeight:1.6,maxWidth:600,margin:"0 auto 12px"}}>Solo Gracias es la primera plataforma hispanohablante de transformación personal. Estar aquí no es una opción — es el próximo paso para que tu conocimiento llegue a toda Latinoamérica.</p>
            <p style={{color:"#C9A84C",fontSize:10,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:20}}>BeYoga Day · 18 de abril 2026</p>
            <Btn violet>Quiero ser parte de Solo Gracias →</Btn>
          </div>
          <div className="ai-mosaic" style={{display:"flex",flexDirection:"column",gap:4}}>
            {["photo-1534528741775-53994a69daeb","photo-1500648767791-00dcc994a43e","photo-1487412720507-e7ab37603c6f"].map((id,i)=><img key={i} src={`https://images.unsplash.com/${id}?w=150&q=70&fit=crop&crop=face`} alt="" style={{width:90,height:80,objectFit:"cover",borderRadius:10}}/>)}
          </div>
        </div>
      </section>

      {/* ═══ BEYOGA DAY BANNER ═══ */}
      <section style={{position:"relative",overflow:"hidden"}}>
        <img src="/beyoga-day-banner.jpg" alt="BeYoga Day" style={{width:"100%",height:"auto",display:"block"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(15,8,32,0.85) 0%,rgba(15,8,32,0.4) 40%,rgba(107,33,168,0.15) 100%)"}}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"clamp(20px,3vw,32px)",maxWidth:900,margin:"0 auto"}}>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:"0.15em",color:"#C9A84C",textTransform:"uppercase",marginBottom:4}}>Evento presencial · Asunción, Paraguay</p>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:"white",lineHeight:1.1}}>BeYoga Day 2026</h2>
          <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"rgba(255,255,255,0.85)",marginTop:6}}>Sábado 18 de abril · 5:00 AM a 20:00 PM · El evento de yoga más grande del país</p>
        </div>
      </section>

      {/* ═══ PROBLEMA ═══ */}
      <section>
        <div className="ai-split" style={{display:"grid",gridTemplateColumns:"1fr 1fr",overflow:"hidden"}}>
          <div style={{padding:"clamp(24px,4vw,48px)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"#111",lineHeight:1.1}}>Tenés el conocimiento. El mundo no lo está viendo.</h2>
            <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"#666",lineHeight:1.5,marginTop:8}}>¿Por qué elegir entre lo que te apasiona y lo que te genera ingresos?</p>
          </div>
          <img className="ai-split-img" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80&fit=crop&crop=face" alt="" style={{width:"100%",height:"100%",minHeight:220,objectFit:"cover"}}/>
        </div>
        <div style={{padding:"clamp(20px,4vw,40px)",maxWidth:900,margin:"0 auto"}}>
          <p style={{fontSize:"clamp(14px,1.6vw,18px)",color:"#333",lineHeight:1.65,marginBottom:24}}>Solo Gracias nació con el propósito de darle verdadera libertad a personas con talentos extraordinarios, con técnicas que transforman vidas y con historias de superación que impulsan a otros a alcanzar una vida extraordinaria. Aquí podés combinar tu pasión con ingresos reales, trabajando en tus propios términos, desde cualquier lugar, haciendo que tu voz llegue a miles.</p>
          {[{n:"01",t:"Tu talento merece más alcance",p:"Ya transformás vidas con lo que hacés. Pero tus redes y tu presencia digital aún no reflejan el nivel de impacto que realmente tenés. Nosotros cambiamos eso."},{n:"02",t:"Tu audiencia puede ser continental",p:"Hoy llegás a tu círculo. Pero hay 700 millones de hispanohablantes que necesitan exactamente lo que enseñás. Solo Gracias te conecta con todos ellos."},{n:"03",t:"Tus ingresos pueden escalar",p:"Sabés monetizar tu talento, pero no a esta escala. Solo Gracias te da el sistema para generar ingresos pasivos las 24 horas, sin dejar lo que ya construiste."}].map((c,i)=>(
            <div key={i} style={{background:"white",borderRadius:14,padding:"clamp(14px,2vw,20px)",marginBottom:10,borderLeft:"3px solid #6B21A8"}}>
              <p style={{fontSize:"clamp(24px,3vw,32px)",fontWeight:900,color:"#6B21A8",fontFamily:"Georgia,serif",lineHeight:1}}>{c.n}</p>
              <h3 style={{fontSize:"clamp(16px,1.8vw,22px)",fontWeight:700,color:"#111",margin:"4px 0 4px"}}>{c.t}</h3>
              <p style={{fontSize:"clamp(13px,1.4vw,16px)",color:"#666",lineHeight:1.5}}>{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ES PARA VOS SI... ═══ */}
      <section>
        <div className="ai-split ai-adecuado" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80&fit=crop" alt="" style={{width:"100%",height:"100%",minHeight:300,objectFit:"cover"}}/>
          <div style={{padding:"clamp(16px,3vw,28px)"}}>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(18px,2.5vw,28px)",fontWeight:900,color:"#111",marginBottom:16}}>Ser instructor certificado es para vos si...</h2>
            {[{n:1,t:"Tenés conocimiento real",p:"En transformación, mindset, bienestar, experiencias de vida o sabiduría ancestral."},{n:2,t:"Querés escalar tu impacto",p:"Hoy actuás desde el uno a uno o crecés de a poco. Pero naciste para llegar a todas las personas que te buscan y todavía no saben que existís. Con el canal correcto, podés acceder a millones e impactar vidas en todo el continente."},{n:3,t:"Buscás ingresos pasivos",p:"Muchos quieren vivir de su conocimiento e impactar vidas masivamente, pero no saben cómo. Creamos el ecosistema que trabaja por vos las 24 horas — mientras dormís, viajás o estás con tu familia, tu experiencia sigue transformando personas y generando ingresos."},{n:4,t:"Valorás tu legado",p:"Que tu conocimiento quede registrado para siempre, en tu idioma, con tu voz, accesible para las generaciones que vienen."}].map((d,i)=>(
              <div key={i} style={{marginBottom:14}}>
                <div style={{display:"inline-flex",width:24,height:24,borderRadius:"50%",background:"#6B21A8",color:"white",fontSize:11,fontWeight:700,alignItems:"center",justifyContent:"center",marginBottom:4}}>{d.n}</div>
                <h3 style={{fontSize:"clamp(14px,1.5vw,18px)",fontWeight:700,color:"#111"}}>{d.t}</h3>
                <p style={{fontSize:"clamp(12px,1.3vw,15px)",color:"#666",lineHeight:1.45}}>{d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEGADO ═══ */}
      <section style={{position:"relative",minHeight:"clamp(320px,40vw,440px)",overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&fit=crop&crop=face" alt="" style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(45,15,94,0.88),rgba(26,8,56,0.95))"}}/>
        <div style={{position:"relative",zIndex:2,padding:"clamp(28px,5vw,48px)",textAlign:"center",maxWidth:700,margin:"0 auto"}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(22px,3vw,36px)",fontWeight:900,color:"white",marginBottom:8}}>El legado es la huella más permanente que uno puede dejar.</h2>
          <p style={{fontFamily:"Georgia,serif",fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#C9A84C",margin:"16px 0 24px",lineHeight:1.05}}>Sueña en grande, vive aún más grande.</p>
          <div style={{textAlign:"left",maxWidth:440,margin:"0 auto"}}>
            {[{t:"Buscás un mayor impacto",p:"No solo por vos mismo, sino por tu comunidad y por la humanidad en general."},{t:"Estás dedicado al crecimiento",p:"Siempre buscando evolucionar y desarrollar todo tu potencial."},{t:"Buscás la libertad",p:"Finanzas, estilo de vida y la libertad de vivir una vida con propósito e impacto."}].map((pl,i)=>(
              <div key={i} style={{marginBottom:16}}>
                <h3 style={{fontSize:"clamp(14px,1.5vw,18px)",fontWeight:700,color:"white"}}>{pl.t}</h3>
                <p style={{fontSize:"clamp(11px,1.2vw,14px)",color:"rgba(255,255,255,0.6)",lineHeight:1.5,marginTop:2}}>{pl.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CÓMO PODRÍA SER TU VIDA ═══ */}
      <section style={{padding:"clamp(28px,5vw,48px) clamp(16px,3vw,32px)"}}>
        <div style={{textAlign:"center",marginBottom:"clamp(16px,3vw,28px)",maxWidth:700,margin:"0 auto 24px"}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#111",lineHeight:1.05}}>Cómo podría ser tu vida</h2>
          <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"#666"}}>como instructor certificado de Solo Gracias</p>
        </div>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          {vidaCards.map((v,i)=>(
            <div key={i} className={`ai-vida${i%2===1?" ai-rv":""}`} style={{background:"#FAFAFA",borderRadius:14,overflow:"hidden",marginBottom:12,display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:160,...(i%2===1?{direction:"rtl" as const}:{})}}>
              <div style={{padding:"clamp(14px,2vw,22px)",display:"flex",flexDirection:"column",justifyContent:"center",...(i%2===1?{direction:"ltr" as const}:{})}}>
                <p style={{fontFamily:"Georgia,serif",fontSize:"clamp(24px,3vw,36px)",fontWeight:900,color:"#6B21A8",lineHeight:1}}>{v.n}</p>
                <h3 style={{fontFamily:"Georgia,serif",fontSize:"clamp(15px,1.8vw,22px)",fontWeight:900,color:"#111",lineHeight:1.2,margin:"4px 0 6px"}}>{v.t}</h3>
                <p style={{fontSize:"clamp(10px,1.1vw,13px)",color:"#666",lineHeight:1.5}}>{v.p}</p>
              </div>
              {v.single ? (
                <div className="ai-vida-single" style={{overflow:"hidden",...(i%2===1?{direction:"ltr" as const}:{})}}><img src={v.single} alt="" style={{width:"100%",height:"100%",minHeight:160,objectFit:"cover"}}/></div>
              ) : (
                <div className="ai-vida-imgs" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:2,...(i%2===1?{direction:"ltr" as const}:{})}}>
                  {v.imgs!.map((img,j)=><img key={j} src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ LO QUE HACEMOS ═══ */}
      <section style={{padding:"clamp(28px,5vw,48px) clamp(20px,4vw,40px)",maxWidth:900,margin:"0 auto"}}>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"#111",marginBottom:6}}>Somos lo que estabas buscando y que no lo sabías todavía.</h2>
        <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"#555",lineHeight:1.6,marginBottom:24}}>Solo Gracias es tu agencia de marketing, tu equipo de diseño y tu canal de distribución a toda Latinoamérica. Todo en un solo lugar.</p>
        {benefits.map((b,i)=>(
          <div key={i} style={{display:"flex",gap:"clamp(12px,2vw,18px)",alignItems:"flex-start",padding:"clamp(10px,1.5vw,14px) 0",borderBottom:i<benefits.length-1?"0.5px solid #eee":"none"}}>
            <img src={b.img} alt="" style={{width:"clamp(72px,10vw,100px)",height:"clamp(72px,10vw,100px)",borderRadius:14,objectFit:"cover",flexShrink:0}}/>
            <div><h3 style={{fontSize:"clamp(15px,1.7vw,20px)",fontWeight:700,color:"#111"}}>{b.t}</h3><p style={{fontSize:"clamp(13px,1.4vw,16px)",color:"#666",lineHeight:1.4}}>{b.p}</p></div>
          </div>
        ))}
      </section>

      {/* ═══ REVENUE SHARE ═══ */}
      <section style={{background:"linear-gradient(135deg,#2D0F5E,#3D1E7A)",padding:"clamp(28px,5vw,48px) clamp(20px,4vw,40px)"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"white",marginBottom:6}}>Un modelo más justo que cualquier plataforma.</h2>
          <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"rgba(255,255,255,0.65)",lineHeight:1.6,marginBottom:20}}>No les vendemos un porcentaje — les vendemos participación en algo que solos nunca podrían construir.</p>
          {[{n:"Udemy",v:"15% al instructor",ours:false},{n:"Skillshare",v:"30% entre TODOS",ours:false},{n:"Solo Gracias",v:"Hasta 50% para VOS",ours:true}].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"clamp(10px,1.5vw,14px) clamp(12px,2vw,18px)",borderRadius:10,marginBottom:7,fontSize:"clamp(12px,1.3vw,15px)",...(c.ours?{background:"rgba(201,168,76,0.15)",color:"#C9A84C",border:"1px solid rgba(201,168,76,0.3)"}:{background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.5)"})}}>
              <span>{c.n}</span><span style={{fontWeight:700}}>{c.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SUPERACIÓN ═══ */}
      <section style={{padding:"clamp(28px,5vw,48px) clamp(20px,4vw,40px)",maxWidth:900,margin:"0 auto"}}>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"#111",marginBottom:6}}>Tu historia de vida también puede transformar a miles.</h2>
        <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"#555",lineHeight:1.6,marginBottom:20}}>No necesitás ser instructor de yoga para certificarte. Si tenés una historia de superación y la pasión de compartirla, Solo Gracias es tu plataforma.</p>
        <div className="ai-sup-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(8px,1.5vw,12px)"}}>
          {superacion.map((s,i)=>(
            <div key={i} style={{borderRadius:14,overflow:"hidden",position:"relative",height:"clamp(150px,22vw,200px)"}}>
              <img src={s.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(15,8,32,0.85),rgba(15,8,32,0.1))",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"clamp(10px,1.5vw,16px)"}}>
                <p style={{fontSize:8,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C"}}>{s.cat}</p>
                <p style={{fontSize:"clamp(12px,1.4vw,16px)",fontWeight:700,color:"white",lineHeight:1.2}}>{s.t}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ NIVELES ═══ */}
      <section style={{background:"#0F0820",padding:"clamp(28px,5vw,48px) clamp(16px,3vw,24px)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,opacity:0.12}}><img src="/manos-comunidad.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:800,height:800,borderRadius:"50%",background:"radial-gradient(circle,rgba(107,33,168,0.65) 0%,rgba(155,109,255,0.35) 25%,rgba(61,30,122,0.15) 50%,transparent 75%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:"clamp(16px,3vw,24px)"}}>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"white"}}>Tres caminos para comenzar. Uno para escalar.</h2>
            <p style={{fontSize:"clamp(13px,1.5vw,16px)",color:"rgba(255,255,255,0.65)",marginTop:4}}>Empezás donde podés y escalas cuando estés listo. Esto se construye juntos.</p>
          </div>
          {niveles.map((nv,i)=>(
            <div key={i} className="ai-cert-card" style={{borderRadius:16,overflow:"hidden",marginBottom:14,position:"relative",minHeight:"clamp(200px,28vw,260px)"}}>
              <img src={nv.img} alt="" style={{width:"100%",height:"100%",minHeight:"clamp(200px,28vw,260px)",objectFit:"cover",position:"absolute",inset:0}}/>
              <div className="ai-cert-overlay" style={{position:"absolute",inset:0,background:i===2?"linear-gradient(to right,rgba(15,8,32,0.75) 45%,rgba(15,8,32,0.15) 100%)":"linear-gradient(to right,rgba(15,8,32,0.78) 45%,rgba(15,8,32,0.1) 100%)",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(16px,3vw,28px)"}}>
                <span style={{fontSize:8,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",padding:"4px 10px",borderRadius:50,display:"inline-block",width:"fit-content",marginBottom:6,background:nv.badgeColor,color:nv.badgeText}}>{nv.badge}</span>
                <p style={{fontFamily:"Georgia,serif",fontSize:"clamp(32px,4.5vw,48px)",fontWeight:900,color:"white"}}>{nv.price} <span style={{fontSize:"clamp(11px,1.3vw,14px)",fontWeight:400,opacity:0.5}}>{nv.sub}</span></p>
                <p style={{fontSize:"clamp(11px,1.2vw,14px)",color:"rgba(255,255,255,0.6)",margin:"4px 0 8px",lineHeight:1.4,maxWidth:360}}>{nv.desc}</p>
                <p style={{fontSize:"clamp(11px,1.2vw,14px)",fontWeight:700,color:"#C9A84C"}}>Revenue: {nv.rev} instructor</p>
                <button onClick={()=>setPage(nv.page)} style={{display:"inline-block",background:"#6B21A8",color:"white",fontSize:"clamp(11px,1.2vw,13px)",fontWeight:700,padding:"10px 22px",borderRadius:50,border:"none",cursor:"pointer",marginTop:10,width:"fit-content"}}>Más información</button>
              </div>
            </div>
          ))}
          {/* ═══ INSTRUCTOR FUNDADOR CARD ═══ */}
          <div className="ai-cert-card" style={{borderRadius:16,overflow:"hidden",marginBottom:14,position:"relative",minHeight:"clamp(200px,28vw,260px)"}}>
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90&fit=crop&crop=center" alt="" style={{width:"100%",height:"100%",minHeight:"clamp(200px,28vw,260px)",objectFit:"cover",position:"absolute",inset:0}}/>
            <div className="ai-cert-overlay" style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(10,4,24,0.88) 45%,rgba(10,4,24,0.2) 100%)",display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(16px,3vw,28px)"}}>
              <span style={{fontSize:8,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,padding:"4px 10px",borderRadius:50,display:"inline-block",width:"fit-content",marginBottom:6,background:"rgba(201,168,76,0.4)",color:"#FFD966"}}>Cupo exclusivo · Solo 11 lugares</span>
              <p style={{fontFamily:"Georgia,serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"white"}}>Instructor Fundador <span style={{fontSize:"clamp(11px,1.3vw,14px)",fontWeight:400,opacity:0.5}}>#001 — #011</span></p>
              <p style={{fontSize:"clamp(11px,1.2vw,14px)",color:"rgba(255,255,255,0.6)",margin:"4px 0 8px",lineHeight:1.4,maxWidth:360}}>Producción cinematográfica 4K · Summit de lanzamiento · Salida a la prensa · Pauta pagada 6 meses · Consejero de la plataforma.</p>
              <p style={{fontSize:"clamp(11px,1.2vw,14px)",fontWeight:700,color:"#C9A84C"}}>Revenue: 50% instructor · Los instructores son seleccionados</p>
              <button onClick={()=>setPage("nivel-fundador")} style={{display:"inline-block",background:"#C9A84C",color:"#1A0838",fontSize:"clamp(11px,1.2vw,13px)",fontWeight:700,padding:"10px 22px",borderRadius:50,border:"none",cursor:"pointer",marginTop:10,width:"fit-content"}}>Ver beneficios exclusivos</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFERTA BEYOGA DAY ═══ */}
      <section style={{padding:"clamp(24px,4vw,40px)",maxWidth:700,margin:"0 auto"}}>
        <div style={{border:"1.5px solid #C9A84C",borderRadius:16,padding:"clamp(18px,3vw,28px)",textAlign:"center"}}>
          <p style={{color:"#C9A84C",fontSize:10,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:8}}>Solo para hoy — 18 de abril 2026</p>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:900,color:"#111",marginBottom:16}}>Los primeros instructores tienen beneficios que nadie más va a tener.</h2>
          <div style={{textAlign:"left"}}>
            {[{n:"Regalo 1",t:"Sesión extra de rebranding",d:"Valor $200 USD — incluida sin costo"},{n:"Regalo 2",t:"Revisión y ajuste de tu kit visual",d:"Normalmente no incluida en ningún nivel"},{n:"Regalo 3",t:"Sesión estratégica 1:1 de 60 min",d:"Para definir tu posicionamiento"}].map((r,i)=>(
              <div key={i} style={{background:"#F8F4FF",borderRadius:12,padding:"clamp(12px,2vw,16px)",marginBottom:8}}>
                <p style={{fontSize:10,fontWeight:700,color:"#6B21A8"}}>{r.n}</p>
                <p style={{fontSize:"clamp(13px,1.5vw,16px)",fontWeight:700,color:"#111"}}>{r.t}</p>
                <p style={{fontSize:"clamp(11px,1.2vw,13px)",color:"#666"}}>{r.d}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:16}}>
            <Btn violet>Reservá tu lugar — Seña $100 USD</Btn>
            <p style={{fontSize:9,color:"#999",marginTop:8}}>Esta oferta vence hoy a medianoche.</p>
          </div>
        </div>
      </section>

      {/* ═══ PROCESO ═══ */}
      <section style={{background:"#F5F3F8",padding:"clamp(28px,5vw,48px) clamp(20px,4vw,40px)"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"#111",textAlign:"center",marginBottom:"clamp(16px,3vw,24px)"}}>Del evento a tu primera experiencia en 21 días.</h2>
          <div style={{position:"relative",paddingLeft:30}}>
            <div style={{position:"absolute",left:11,top:8,bottom:8,width:2,background:"#E0D6F0",borderRadius:1}}/>
            {[{n:"1",w:"Hoy en el evento",t:"Te sumás",p:"Elegís tu nivel, dejás tu seña de $100 USD y completás el formulario."},{n:"2",w:"Días 1 a 3",t:"Contacto",p:"El equipo confirma tu perfil y agenda la reunión de estrategia."},{n:"3",w:"Días 4 a 14",t:"Rebranding",p:"El equipo trabaja en tu identidad visual. Recibís tus activos para aprobar."},{n:"4",w:"Días 15 a 20",t:"Tu experiencia",p:"Estructuramos juntos tu primera experiencia. Niveles 2 y 3: lo grabamos nosotros."},{n:"5",w:"Día 21",t:"Material listo",p:"Tu experiencia está en la plataforma. Los ingresos llegan desde el día 1."}].map((s,i)=>(
              <div key={i} style={{position:"relative",marginBottom:18}}>
                <div style={{position:"absolute",left:-23,top:2,width:18,height:18,borderRadius:"50%",background:"#6B21A8",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:8,fontWeight:700,color:"white"}}>{s.n}</span></div>
                <p style={{fontSize:9,fontWeight:600,color:"#6B21A8"}}>{s.w}</p>
                <h3 style={{fontSize:"clamp(13px,1.5vw,16px)",fontWeight:700,color:"#111"}}>{s.t}</h3>
                <p style={{fontSize:"clamp(10px,1.2vw,13px)",color:"#666",lineHeight:1.4}}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{background:"#0F0820",padding:"clamp(24px,4vw,40px)"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(18px,2.5vw,26px)",fontWeight:900,color:"white",marginBottom:16}}>Preguntas frecuentes</h2>
          {faqs.map((f,i)=>(
            <div key={i} style={{padding:"clamp(10px,1.5vw,14px) 0",borderBottom:"0.5px solid rgba(255,255,255,0.08)",cursor:"pointer"}} onClick={()=>setFOpen(fOpen===i?null:i)}>
              <div style={{fontSize:"clamp(13px,1.5vw,16px)",fontWeight:600,color:"white",display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:15,color:"#C9A84C",flexShrink:0}}>{fOpen===i?"−":"+"}</span>{f.q}
              </div>
              {fOpen===i&&<p style={{fontSize:"clamp(11px,1.2vw,13px)",color:"rgba(255,255,255,0.5)",marginTop:6,paddingLeft:22,lineHeight:1.5}}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA + FORMULARIO ═══ */}
      <section>
        <div className="ai-split" style={{display:"grid",gridTemplateColumns:"1fr 1fr",overflow:"hidden"}}>
          <div style={{padding:"clamp(20px,3vw,32px)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(24px,3vw,38px)",fontWeight:900,color:"#111",lineHeight:1.1}}>Hoy empieza tu historia como instructor certificado.</h2>
            <p style={{fontSize:"clamp(11px,1.3vw,15px)",color:"#666",lineHeight:1.5,marginTop:8}}>Hay 700 millones de personas que hablan tu idioma y necesitan lo que vos sabés. El momento es ahora.</p>
            <button onClick={scrollToForm} style={{display:"inline-block",border:"1.5px solid #3D1E7A",color:"#3D1E7A",fontSize:"clamp(12px,1.3vw,14px)",fontWeight:600,padding:"11px 24px",borderRadius:50,background:"transparent",cursor:"pointer",marginTop:14,width:"fit-content"}}>Hablar con el equipo</button>
          </div>
          <img src="/rita.jpg" alt="Rita Margonato" style={{width:"100%",height:"100%",minHeight:220,objectFit:"cover",objectPosition:"center top"}}/>
        </div>
      </section>

      {/* ═══ FORMULARIO ═══ */}
      <section id="form-instructores" style={{position:"relative",overflow:"hidden",minHeight:480}}>
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=70&fit=crop" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(107,33,168,0.92),rgba(61,30,122,0.88),rgba(155,109,255,0.85))"}}/>
        <div style={{position:"relative",zIndex:2,padding:"clamp(28px,5vw,48px) clamp(20px,4vw,40px)",textAlign:"center",maxWidth:520,margin:"0 auto"}}>
          <SpiralLogo color="#C9A84C" size={30}/>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,3.5vw,40px)",fontWeight:900,color:"white",margin:"12px 0 6px"}}>Reservá tu lugar ahora</h2>
          <p style={{fontSize:"clamp(12px,1.3vw,15px)",color:"rgba(255,255,255,0.7)",marginBottom:24}}>Completá tus datos y un asesor te contacta en menos de 24 horas.</p>
          {formSent ? (
            <div style={{background:"rgba(255,255,255,0.15)",borderRadius:16,padding:32,textAlign:"center"}}>
              <p style={{fontSize:32,marginBottom:12}}>✓</p>
              <h3 style={{fontFamily:"Georgia,serif",fontSize:22,fontWeight:900,color:"white",marginBottom:8}}>¡Gracias por tu interés!</h3>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.7)",lineHeight:1.6}}>Recibimos tu información. Un asesor de Solo Gracias te va a contactar en menos de 24 horas para coordinar los próximos pasos.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              {[{name:"nombre",placeholder:"Nombre completo"},{name:"email",placeholder:"Email",type:"email"},{name:"telefono",placeholder:"Teléfono / WhatsApp"},{name:"expertise",placeholder:"Área de expertise"},{name:"nivel",placeholder:"Nivel elegido: Básica / Intermedia / Premium"}].map((f,i)=>(
                <input key={i} name={f.name} type={f.type||"text"} required placeholder={f.placeholder} style={{width:"100%",background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:12,padding:"14px 16px",fontSize:14,color:"white",marginBottom:10,outline:"none",boxSizing:"border-box"}}/>
              ))}
              <button type="submit" disabled={sending} style={{width:"100%",background:"#C9A84C",color:"#1A0838",fontSize:"clamp(14px,1.5vw,17px)",fontWeight:700,padding:"16px",borderRadius:50,border:"none",cursor:"pointer",marginTop:8}}>{sending?"Enviando...":"Quiero ser Instructor Certificado →"}</button>
            </form>
          )}
          <p style={{fontSize:9,color:"rgba(255,255,255,0.4)",marginTop:12}}>Encontranos hoy mismo en el evento — estamos para responder todo.</p>
          <div style={{marginTop:18,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            <div style={{height:1,width:40,background:"rgba(201,168,76,0.3)"}}/>
            <span style={{fontSize:8,fontWeight:700,letterSpacing:"0.15em",color:"rgba(201,168,76,0.5)",textTransform:"uppercase"}}>Academia Solo Gracias</span>
            <div style={{height:1,width:40,background:"rgba(201,168,76,0.3)"}}/>
          </div>
        </div>
      </section>

      {/* ═══ VOLVER AL INICIO ═══ */}
      <section style={{padding:"clamp(20px,3vw,32px)",textAlign:"center",background:"#F5F3F8"}}>
        <button onClick={()=>setPage("home")} style={{display:"inline-block",border:"1.5px solid #3D1E7A",color:"#3D1E7A",fontSize:14,fontWeight:600,padding:"13px 32px",borderRadius:50,background:"transparent",cursor:"pointer"}}>← Volver al inicio</button>
      </section>

    </main>
  );
}



function ListaEsperaForm() {
  const [email, setEmail] = React.useState("");
  const [estado, setEstado] = React.useState<"idle"|"loading"|"ok"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEstado("loading");
    try {
      const res = await fetch("https://formspree.io/f/xwvalyzr", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setEstado("ok"); setEmail(""); }
      else setEstado("error");
    } catch { setEstado("error"); }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",gap:10,maxWidth:480,margin:"0 auto 40px",flexWrap:"wrap" as const}}>
      <input
        type="email"
        required
        placeholder="Tu correo electrónico"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        disabled={estado==="loading"||estado==="ok"}
        style={{flex:1,minWidth:200,padding:"13px 20px",borderRadius:50,border:"1px solid #e0d5f5",fontSize:15,outline:"none",fontFamily:"inherit",color:"#1A0838",background:"#faf8ff"}}
      />
      <button
        type="submit"
        disabled={estado==="loading"||estado==="ok"}
        style={{padding:"13px 24px",borderRadius:50,border:"none",background:"#C9A84C",color:"#1A0838",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap" as const,opacity:estado==="loading"?0.7:1}}
      >
        {estado==="ok" ? "¡Anotado!" : estado==="loading" ? "..." : "Yo Soy Solo Gracias"}
      </button>
      {estado==="ok" && <p style={{width:"100%",textAlign:"center" as const,fontSize:13,color:"#6B21A8",margin:"4px 0 0"}}>Te avisamos cuando abramos. ¡Gracias!</p>}
      {estado==="error" && <p style={{width:"100%",textAlign:"center" as const,fontSize:13,color:"#E24B4A",margin:"4px 0 0"}}>Algo salió mal. Intentá de nuevo.</p>}
    </form>
  );
}

export default function App() {

  const [page, setPage] = useState<"home"|"membresia"|"pago"|"academia"|"academia-instructores"|"onboarding"|"comunidad"|"gamificacion"|"experiencia"|"neurociencia"|"registro-programas"|"programas-gratuitos"|"nivel-basica"|"nivel-intermedia"|"nivel-premium"|"nivel-fundador">("home");

  useEffect(() => { window.scrollTo(0, 0); document.body.dataset.page = page; }, [page]);

  const [experienciaActual, setExperienciaActual] = useState<string>("meditacion");
  const { user, loading: userLoading, signOut } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);

  // Show promo modal after 3 seconds — only once, only on home
  const promoShown = React.useRef(false);
  useEffect(() => {
    if (page !== "home") { setShowPromoModal(false); return; }
    if (promoShown.current) return;
    promoShown.current = true;
    const t = setTimeout(() => {
      setShowPromoModal(true);
    }, 3000);
    return () => clearTimeout(t);
  }, [page]);

  const goToExperiencia = (id:string) => { setExperienciaActual(id); setPage("experiencia"); };

  const noNav = page==="onboarding"||page==="gamificacion"||page==="registro-programas"||page==="nivel-fundador"||page==="nivel-basica"||page==="nivel-intermedia"||page==="nivel-premium";

  return (

    <>

      <style>{`*{box-sizing:border-box}img{max-width:100%}body,html{overflow-x:hidden}`}</style>

      {!noNav&&<Nav page={page} setPage={setPage}/>}

      {page==="home"&&<Home setPage={setPage} goToExperiencia={goToExperiencia} onAuthClick={()=>setShowAuthModal(true)}/>}

      {page==="membresia"&&<Membresia setPage={setPage} onAuthClick={()=>setShowAuthModal(true)}/>}

      {page==="pago"&&<Pago setPage={setPage}/>}

      {page==="academia"&&<Academia setPage={setPage} onAuthClick={()=>setShowAuthModal(true)}/>}

      {page==="academia-instructores"&&<AcademiaInstructores setPage={setPage}/>}

      {page==="onboarding"&&<Onboarding setPage={setPage} onAuthClick={()=>setShowAuthModal(true)}/>}

      {page==="comunidad"&&<Comunidad setPage={setPage} onAuthClick={()=>setShowAuthModal(true)}/>}

      {page==="gamificacion"&&<Gamificacion setPage={setPage} onAuthClick={()=>setShowAuthModal(true)}/>}

      {page==="experiencia"&&<ExperienciaPage id={experienciaActual} setPage={setPage}/>}

      {page==="neurociencia"&&<NeurocienciaPage setPage={setPage}/>}

      {page==="registro-programas"&&<RegistroProgramas setPage={setPage}/>}

      {page==="programas-gratuitos"&&<ProgramasGratuitos setPage={setPage}/>}

      {page==="nivel-basica"&&<NivelDetalle nivel="basica" setPage={setPage}/>}

      {page==="nivel-intermedia"&&<NivelDetalle nivel="intermedia" setPage={setPage}/>}

      {page==="nivel-premium"&&<NivelDetalle nivel="premium" setPage={setPage}/>}

      {page==="nivel-fundador"&&<NivelFundador setPage={setPage}/>}

      {showPromoModal && page==="home" && (
        <PromoModal
          onClose={() => setShowPromoModal(false)}
          onCTA={() => { setShowPromoModal(false); setPage("registro-programas"); }}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => setShowAuthModal(false)}
        />
      )}
    </>
  );

}
// ─── REGISTRO PROGRAMAS GRATUITOS ─────────────────────────────────────────────
function RegistroProgramas({setPage}:{setPage:(p:any)=>void}) {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [prefijo, setPrefijo] = React.useState("+595");
  const [tel, setTel] = React.useState("");

  const paises = [
    {c:"🇵🇾",p:"+595"},{c:"🇦🇷",p:"+54"},{c:"🇧🇷",p:"+55"},{c:"🇨🇴",p:"+57"},
    {c:"🇲🇽",p:"+52"},{c:"🇨🇱",p:"+56"},{c:"🇵🇪",p:"+51"},{c:"🇺🇾",p:"+598"},
    {c:"🇧🇴",p:"+591"},{c:"🇪🇨",p:"+593"},{c:"🇻🇪",p:"+58"},{c:"🇪🇸",p:"+34"},
    {c:"🇺🇸",p:"+1"},{c:"🇵🇹",p:"+351"},
  ];

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // TODO: guardar en Supabase / Formspree
    setPage("programas-gratuitos");
  };

  const inp:React.CSSProperties = {
    width:"100%", height:50, padding:"0 16px",
    border:"1.5px solid #E8E0F0", borderRadius:12,
    fontFamily:"system-ui,sans-serif", fontSize:15, color:"#2D1B4E",
    background:"white", outline:"none",
  };

  return (
    <div style={{minHeight:"100vh",background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"80px 24px 40px"}}>

      {/* Logo */}
      <button onClick={()=>setPage("home")} style={{display:"flex",alignItems:"center",gap:10,background:"none",border:"none",cursor:"pointer",marginBottom:40}}>
        <SpiralLogo color="#3D1E7A" size={42}/>
        <span style={{fontFamily:"Georgia,serif",color:"#3D1E7A",fontSize:18,fontWeight:300,letterSpacing:"0.16em"}}>SOLO GRACIAS</span>
      </button>

      {/* Card */}
      <div style={{width:"100%",maxWidth:440}}>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:400,color:"#2D1B4E",textAlign:"center",lineHeight:1.25,marginBottom:6}}>
          Tu transformación<br/>comienza <em style={{color:"#C9A84C"}}>ahora</em>
        </h1>
        <p style={{fontSize:13,color:"#888",textAlign:"center",marginBottom:32,fontWeight:300}}>
          Registrate para acceder a tus 3 programas gratuitos
        </p>

        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:14}}>

          {/* Nombre */}
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            <label style={{fontSize:11,fontWeight:500,color:"#555",letterSpacing:"0.06em",textTransform:"uppercase"}}>Nombre completo</label>
            <input style={inp} type="text" placeholder="¿Cómo te llamás?" value={nombre} onChange={e=>setNombre(e.target.value)} required autoComplete="name"/>
          </div>

          {/* Email */}
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            <label style={{fontSize:11,fontWeight:500,color:"#555",letterSpacing:"0.06em",textTransform:"uppercase"}}>Correo electrónico</label>
            <input style={inp} type="email" placeholder="tu@email.com" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/>
          </div>

          {/* Teléfono */}
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            <label style={{fontSize:11,fontWeight:500,color:"#555",letterSpacing:"0.06em",textTransform:"uppercase"}}>Teléfono</label>
            <div style={{display:"flex",gap:8}}>
              <select
                value={prefijo}
                onChange={e=>setPrefijo(e.target.value)}
                style={{width:110,height:50,padding:"0 10px 0 14px",border:"1.5px solid #E8E0F0",borderRadius:12,fontFamily:"system-ui,sans-serif",fontSize:14,color:"#2D1B4E",background:"white",outline:"none",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239B6DFF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 10px center",cursor:"pointer"}}
              >
                {paises.map(({c,p})=>(
                  <option key={p} value={p}>{c} {p}</option>
                ))}
              </select>
              <input
                style={{...inp,flex:1}}
                type="tel"
                placeholder="Número de teléfono"
                value={tel}
                onChange={e=>setTel(e.target.value)}
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            style={{width:"100%",height:56,marginTop:8,background:"#6B21A8",color:"white",border:"none",borderRadius:14,fontFamily:"system-ui,sans-serif",fontSize:15,fontWeight:500,letterSpacing:"0.02em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"opacity 0.2s"}}
          >
            Desbloquear mis programas gratuitos →
          </button>

        </form>

        <p style={{marginTop:16,fontSize:11,color:"#AAA",textAlign:"center",lineHeight:1.5}}>
          Al registrarte aceptás recibir contenido de Solo Gracias.<br/>Sin spam. Podés darte de baja cuando quieras.
        </p>
      </div>
    </div>
  );
}

// ─── PROGRAMAS GRATUITOS ───────────────────────────────────────────────────────
function ProgramasGratuitos({setPage}:{setPage:(p:any)=>void}) {

  const programas = [
    {
      num:"01",
      titulo:"El Poder de tus Palabras",
      sub:"Cómo los decretos transforman tu realidad",
      desc:"Las palabras que pronunciás cada día están construyendo tu vida. Descubrí por qué lo que decís tiene poder real y cómo usar los decretos como herramienta de transformación.",
      img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80&fit=crop&crop=center",
      episodios:[
        "El lenguaje como herramienta creadora",
        "Palabras que sanan, palabras que limitan",
        "Cómo formular un decreto que funciona",
        "Tu vocabulario interno — el diálogo contigo",
        "Práctica diaria de decretos en 5 minutos",
        "Reprogramando el lenguaje hacia la abundancia",
      ],
    },
    {
      num:"02",
      titulo:"Pedid y Recibiréis",
      sub:"La sabiduría bíblica aplicada a tu vida hoy",
      desc:"Una de las enseñanzas más poderosas de todos los tiempos, revisitada desde nuestra cultura latinoamericana. No como religión — como principio de vida que funciona.",
      img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80&fit=crop&crop=center",
      episodios:[
        "El principio de pedir — más allá de la religión",
        "¿Qué bloquea tu capacidad de recibir?",
        "Pedir con claridad — el arte de ser específico",
        "La gratitud como puerta de acceso",
        "Confiar en el proceso — soltar el control",
        "Recibir con gracia — el arte de aceptar",
      ],
    },
    {
      num:"03",
      titulo:"Sostén tu Vibración",
      sub:"El arte de mantenerte en frecuencia alta",
      desc:"La vibración no es un concepto abstracto — es el estado desde el que atraés o rechazás lo que llega a tu vida. Aprendé a sostenerla en el tiempo con práctica real.",
      img:"https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=700&q=80&fit=crop&crop=center",
      episodios:[
        "¿Qué es la vibración y cómo se mide?",
        "Lo que baja tu frecuencia sin que te des cuenta",
        "Herramientas para elevar tu vibración hoy",
        "Cómo recuperar la frecuencia cuando caés",
        "Entorno, personas y vibración colectiva",
        "El hábito de la frecuencia alta — práctica sostenida",
      ],
    },
  ];

  const V="#3D1E7A", VM="#6B21A8", G="#C9A84C", T2="#6B5F82", BG="#F9F7FF";
  const BD="rgba(61,30,122,0.1)";

  return (
    <div style={{background:"#fff",color:V,fontFamily:"system-ui,sans-serif"}}>

      {/* HERO */}
      <section style={{padding:"80px 24px 64px",textAlign:"center",borderBottom:`1px solid ${BD}`}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 16px",border:"1px solid rgba(201,168,76,0.4)",borderRadius:50,fontSize:11,fontWeight:500,color:"#7B5800",background:"rgba(201,168,76,0.08)",letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:28}}>
          ✦ Acceso gratuito · De por vida
        </div>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(36px,6vw,64px)",fontWeight:400,color:V,lineHeight:1.1,letterSpacing:"-0.01em",marginBottom:20}}>
          Tu transformación<br/><em style={{color:G}}>comienza aquí</em>
        </h1>
        <p style={{fontSize:"clamp(15px,2vw,18px)",color:T2,maxWidth:520,margin:"0 auto 48px",lineHeight:1.7,fontWeight:300}}>
          Tres programas de iniciación creados para darte herramientas reales. No teoría — práctica que podés aplicar hoy mismo.
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:56,flexWrap:"wrap" as const}}>
          {[["3","Programas"],["18","Episodios"],["~3hs","de contenido"],["∞","Acceso"]].map(([n,l])=>(
            <div key={l}>
              <span style={{fontFamily:"Georgia,serif",fontSize:36,fontWeight:400,color:VM,display:"block",lineHeight:1,marginBottom:4}}>{n}</span>
              <span style={{fontSize:11,color:T2,letterSpacing:"0.06em",textTransform:"uppercase" as const}}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section style={{maxWidth:700,margin:"0 auto",padding:"64px 24px 48px",textAlign:"center"}}>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(24px,3.5vw,38px)",fontWeight:400,color:V,marginBottom:16,lineHeight:1.2}}>
          La sabiduría que transforma<br/>no se traduce — se vive
        </h2>
        <p style={{fontSize:16,color:T2,lineHeight:1.75,fontWeight:300,marginBottom:44}}>
          Estos programas nacieron desde adentro de nuestra cultura latinoamericana. Cada uno te da una herramienta fundamental — un punto de partida real en tu camino de transformación personal.
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap" as const}}>
          {[
            {icon:"⚡","title":"Acceso inmediato","sub":"Sin tarjeta. Sin costo."},
            {icon:"♾️","title":"De por vida","sub":"Volvés cuando quieras."},
            {icon:"🌎","title":"Tu idioma","sub":"Desde tu cultura."},
          ].map(({icon,title,sub})=>(
            <div key={title} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:8,maxWidth:140}}>
              <div style={{width:44,height:44,borderRadius:12,background:BG,border:`1px solid ${BD}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{icon}</div>
              <div style={{fontSize:13,color:T2,textAlign:"center",lineHeight:1.4}}>
                <strong style={{fontFamily:"Georgia,serif",color:V,display:"block",marginBottom:2,fontWeight:400,fontSize:13}}>{title}</strong>{sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{maxWidth:1100,margin:"0 auto",padding:"16px 24px 96px"}}>
        <p style={{fontSize:11,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase" as const,color:G,textAlign:"center",marginBottom:10}}>Programas gratuitos</p>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:400,color:V,textAlign:"center",marginBottom:12,lineHeight:1.15}}>
          Tres puertas.<br/>Una transformación.
        </h2>
        <p style={{textAlign:"center",fontSize:15,color:T2,fontWeight:300,maxWidth:500,margin:"0 auto 52px",lineHeight:1.65}}>
          Elegí por dónde empezar. No hay orden correcto — hay el que tu corazón elige primero.
        </p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(310px,1fr))",gap:26}}>
          {programas.map((prog)=>(
            <div key={prog.num} style={{borderRadius:20,overflow:"hidden",border:`1px solid ${BD}`,background:"white",transition:"transform 0.28s,box-shadow 0.28s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLDivElement).style.boxShadow="0 20px 50px rgba(61,30,122,0.10)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(0)";(e.currentTarget as HTMLDivElement).style.boxShadow="none"}}
            >
              {/* Imagen */}
              <div style={{height:220,position:"relative",overflow:"hidden"}}>
                <img src={prog.img} alt={prog.titulo} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(61,30,122,0.15) 0%,transparent 40%,rgba(15,8,32,0.55) 100%)"}}/>
                <div style={{position:"absolute",top:14,left:14,display:"flex",gap:6,zIndex:2}}>
                  <span style={{padding:"4px 10px",background:"rgba(255,255,255,0.95)",borderRadius:20,fontSize:10,fontWeight:600,color:VM,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Gratis</span>
                  <span style={{padding:"4px 10px",background:G,borderRadius:20,fontSize:10,fontWeight:600,color:"white",textTransform:"uppercase" as const}}>6 episodios</span>
                </div>
                <span style={{position:"absolute",bottom:14,left:16,fontFamily:"Georgia,serif",fontSize:11,color:"rgba(255,255,255,0.75)",letterSpacing:"0.1em",textTransform:"uppercase" as const,zIndex:2}}>
                  Programa {prog.num}
                </span>
              </div>

              {/* Body */}
              <div style={{padding:"22px 22px 24px"}}>
                <h3 style={{fontFamily:"Georgia,serif",fontSize:21,fontWeight:400,color:V,lineHeight:1.2,marginBottom:4}}>{prog.titulo}</h3>
                <p style={{fontFamily:"Georgia,serif",fontSize:13,color:G,fontStyle:"italic",marginBottom:12}}>{prog.sub}</p>
                <p style={{fontSize:13,color:T2,lineHeight:1.65,fontWeight:300,marginBottom:18}}>{prog.desc}</p>

                <p style={{fontSize:10,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase" as const,color:T2,marginBottom:7}}>Episodios</p>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:4,marginBottom:18}}>
                  {prog.episodios.map((ep,i)=>(
                    <li key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"7px 10px",background:BG,borderRadius:8,border:`1px solid ${BD}`}}>
                      <span style={{width:20,height:20,background:VM,borderRadius:"50%",fontSize:9,fontWeight:600,color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</span>
                      <span style={{fontSize:12,color:V,flex:1}}>{ep}</span>
                      <span style={{fontSize:10,color:T2,background:"rgba(201,168,76,0.12)",padding:"2px 6px",borderRadius:8,whiteSpace:"nowrap" as const}}>~10 min</span>
                    </li>
                  ))}
                </ul>

                <button disabled style={{width:"100%",height:44,borderRadius:10,border:`1.5px solid #DDD`,background:"transparent",color:"#BBB",fontSize:13,fontWeight:500,cursor:"default",fontFamily:"system-ui,sans-serif"}}>
                  Próximamente
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{maxWidth:800,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",gap:16,opacity:0.28}}>
        <div style={{flex:1,height:1,background:`linear-gradient(to right,transparent,${G},transparent)`}}/>
        <div style={{width:5,height:5,background:G,borderRadius:"50%"}}/>
        <div style={{flex:1,height:1,background:`linear-gradient(to right,${G},transparent)`}}/>
      </div>

      {/* CTA FINAL */}
      <section style={{padding:"80px 24px",textAlign:"center",background:BG,borderTop:`1px solid ${BD}`}}>
        <span style={{fontSize:11,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase" as const,color:"#9B6DFF",marginBottom:18,display:"block"}}>¿Querés ir más lejos?</span>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(26px,4.5vw,48px)",fontWeight:400,color:V,lineHeight:1.12,marginBottom:14}}>
          Si esto es <em style={{color:G}}>gratis</em>,<br/>imaginá lo que es pago.
        </h2>
        <p style={{fontSize:16,color:T2,fontWeight:300,margin:"0 auto 34px",maxWidth:460,lineHeight:1.7}}>
          Accedé a todos los programas, instructores certificados, comunidad y mucho más. Sin compromiso.
        </p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" as const}}>
          <button onClick={()=>setPage("membresia")} style={{padding:"14px 32px",background:VM,color:"white",borderRadius:50,fontSize:14,fontWeight:600,border:"none",cursor:"pointer",fontFamily:"system-ui,sans-serif",transition:"opacity 0.2s"}}>
            Ver planes de membresía →
          </button>
          <button onClick={()=>setPage("home")} style={{padding:"14px 32px",border:`1.5px solid ${BD}`,color:V,borderRadius:50,fontSize:14,background:"transparent",cursor:"pointer",fontFamily:"system-ui,sans-serif"}}>
            Explorar la plataforma
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid #f0f0f0",padding:"24px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap" as const,gap:10}}>
        <span style={{fontSize:12,color:"#AAA"}}>© 2026 Solo Gracias · sologracias.com</span>
        <div style={{display:"flex",gap:20}}>
          {["Privacidad","Términos","info@sologracias.com"].map(l=>(
            <span key={l} style={{fontSize:12,color:"#AAA",cursor:"pointer"}}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

// ─── PROMO MODAL — aparece 3 segundos después de entrar al home ───────────────
function PromoModal({onClose, onCTA}:{onClose:()=>void, onCTA:()=>void}) {

  // Close on ESC key
  React.useEffect(() => {
    const handler = (e:KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const [nombre, setNombre] = React.useState("");
  const [email, setEmail]   = React.useState("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // TODO: guardar en Formspree / Supabase
    onCTA();
  };

  return (
    // Backdrop
    <div
      onClick={onClose}
      style={{
        position:"fixed", inset:0, zIndex:9999,
        background:"rgba(10,4,24,0.78)",
        backdropFilter:"blur(6px)",
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:24,
        animation:"sg-fade-in 0.3s ease both",
      }}
    >
      <style>{`
        @keyframes sg-fade-in  { from{opacity:0} to{opacity:1} }
        @keyframes sg-slide-up { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @media(max-width:640px){.sg-promo-left{display:none!important}.sg-promo-right{padding:28px 20px!important;min-height:auto!important}}
      `}</style>

      {/* Card */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width:"100%", maxWidth:"min(860px,95vw)",
          borderRadius:20,
          overflow:"hidden",
          display:"flex",
          boxShadow:"0 32px 80px rgba(0,0,0,0.5)",
          animation:"sg-slide-up 0.35s cubic-bezier(0.22,1,0.36,1) both",
          position:"relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position:"absolute", top:14, right:14, zIndex:10,
            width:32, height:32, borderRadius:"50%",
            background:"rgba(255,255,255,0.15)",
            border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            color:"white", fontSize:18, lineHeight:1,
            transition:"background 0.2s",
          }}
        >✕</button>

        {/* LEFT — imagen collage instructores */}
        <div className="sg-promo-left" style={{
          width:"42%", flexShrink:0,
          background:"linear-gradient(135deg, #3D1E7A 0%, #6B21A8 50%, #1A0838 100%)",
          position:"relative",
          minHeight:"clamp(200px, 40vw, 420px)",
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"flex-end",
          padding:"0 0 32px",
        }}>
          {/* Grid de fotos placeholder — reemplazar con fotos reales */}
          <div style={{
            position:"absolute", inset:0,
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr",
            gridTemplateRows:"1fr 1fr 1fr",
            gap:3, padding:3, opacity:0.85,
          }}>
            {[
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=70&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=70&fit=crop&crop=face",
            ].map((src,i) => (
              <img key={i} src={src} alt=""
                style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}
              />
            ))}
          </div>
          {/* Gradient overlay bottom */}
          <div style={{position:"absolute",bottom:0,left:0,right:0,height:"50%",background:"linear-gradient(to top,rgba(61,30,122,0.9),transparent)"}}/>
          {/* Text over image */}
          <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 20px"}}>
            <p style={{fontFamily:"Georgia,serif",fontSize:13,color:"rgba(255,255,255,0.7)",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:6}}>
              Instructores certificados
            </p>
            <p style={{fontFamily:"Georgia,serif",fontSize:22,fontWeight:400,color:"white",lineHeight:1.2}}>
              Tu sabiduría,<br/><em style={{color:"#C9A84C"}}>tu idioma.</em>
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="sg-promo-right" style={{
          flex:1,
          background:"white",
          padding:"48px 40px 40px",
          display:"flex", flexDirection:"column", justifyContent:"center",
        }}>
          {/* Logo */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:24}}>
            <SpiralLogo color="#3D1E7A" size={32}/>
            <span style={{fontFamily:"Georgia,serif",color:"#3D1E7A",fontSize:14,fontWeight:300,letterSpacing:"0.16em",textTransform:"uppercase"}}>Solo Gracias</span>
          </div>

          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(20px,2.5vw,26px)",fontWeight:400,color:"#2D1B4E",lineHeight:1.2,marginBottom:10}}>
            Activá tu acceso gratuito<br/><em style={{color:"#C9A84C"}}>hoy mismo</em>
          </h2>
          <p style={{fontSize:13,color:"#6B5F82",lineHeight:1.6,marginBottom:24,fontWeight:300}}>
            Accedé a 3 programas de transformación personal gratuitos — de por vida. Creados desde adentro de nuestra cultura latinoamericana.
          </p>

          <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:12}}>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={e=>setNombre(e.target.value)}
              required
              style={{
                width:"100%", height:48, padding:"0 16px",
                border:"1.5px solid #E8E0F0", borderRadius:10,
                fontFamily:"system-ui,sans-serif", fontSize:14, color:"#2D1B4E",
                outline:"none",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
              style={{
                width:"100%", height:48, padding:"0 16px",
                border:"1.5px solid #E8E0F0", borderRadius:10,
                fontFamily:"system-ui,sans-serif", fontSize:14, color:"#2D1B4E",
                outline:"none",
              }}
            />
            <button
              type="submit"
              style={{
                width:"100%", height:50,
                background:"#6B21A8", color:"white",
                border:"none", borderRadius:10,
                fontFamily:"system-ui,sans-serif",
                fontSize:14, fontWeight:600, cursor:"pointer",
                transition:"opacity 0.2s",
                marginTop:4,
              }}
            >
              Desbloquear mis programas gratuitos →
            </button>
          </form>

          <p style={{marginTop:14,fontSize:11,color:"#AAA",lineHeight:1.5}}>
            Al suscribirte aceptás recibir contenido de Solo Gracias. Sin spam. Podés darte de baja cuando quieras. Consultá nuestra{" "}
            <span style={{color:"#6B21A8",cursor:"pointer",textDecoration:"underline"}}>Política de privacidad</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── HELPERS COMPARTIDOS ──────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/595986185526?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Academia%20Solo%20Gracias";

const tablaIngresos = (pct:number) => {
  const rows = [
    {subs:"100",   pool:"$999",    ing: Math.round(999*pct/100)},
    {subs:"500",   pool:"$4.995",  ing: Math.round(4995*pct/100)},
    {subs:"1.000", pool:"$9.990",  ing: Math.round(9990*pct/100)},
    {subs:"5.000", pool:"$49.950", ing: Math.round(49950*pct/100)},
    {subs:"10.000",pool:"$99.900", ing: Math.round(99900*pct/100)},
    {subs:"100.000",pool:"$999.000",ing: Math.round(999000*pct/100)},
  ];
  const V="#3D1E7A", VM="#6B21A8", G="#C9A84C", GOLD_D="#7B5800";
  return (
    <div style={{overflowX:"auto",marginTop:32}}>
      <p style={{fontFamily:"Georgia,serif",fontSize:"clamp(18px,2.5vw,26px)",fontWeight:700,color:V,marginBottom:8}}>Proyección de ingresos mensuales</p>
      <p style={{fontSize:13,color:"#666",marginBottom:16}}>Calculado sobre el {pct}% del pool proporcional de suscriptores activos.</p>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:"clamp(11px,1.4vw,14px)"}}>
        <thead>
          <tr style={{background:VM}}>
            {["Suscriptores","Ingresos SG/mes","Tu ingreso estimado","Hito"].map(h=>(
              <th key={h} style={{padding:"10px 14px",color:"white",textAlign:"left",fontWeight:600}}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} style={{background:i===rows.length-1?"#FFF8E1":i%2===0?"#F9F7FF":"white",borderBottom:"1px solid #EEE"}}>
              <td style={{padding:"10px 14px",fontFamily:"Georgia,serif",fontWeight:700,color:i===rows.length-1?GOLD_D:VM,fontSize:"clamp(13px,1.6vw,16px)"}}>{r.subs}</td>
              <td style={{padding:"10px 14px",color:"#444"}}>{r.pool}</td>
              <td style={{padding:"10px 14px",fontWeight:700,color:i===rows.length-1?GOLD_D:V}}>~${r.ing.toLocaleString()}/mes</td>
              <td style={{padding:"10px 14px",color:"#888",fontSize:"clamp(10px,1.2vw,12px)",fontStyle:"italic"}}>{
                ["Primeros alumnos","Validación del modelo","Ingreso constante","Escala real","Plataforma establecida","Impacto masivo"][i]
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{fontSize:11,color:"#AAA",marginTop:8}}>* Los ingresos se calculan sobre el pool proporcional total. A mayor número de instructores activos, el pool individual se distribuye entre más participantes.</p>
    </div>
  );
};

// ─── HELPERS COMPARTIDOS ──────────────────────────────────────────────────────

const NIVEL_CSS = `
@keyframes sgNivNavIn{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes sgNivHeroUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes sgNivImgZoom{from{transform:scale(1)}to{transform:scale(1.04)}}
@keyframes sgNivShimmer{0%{background-position:200% center}100%{background-position:-200% center}}
@keyframes sgNivLineGrow{from{width:0;opacity:0}to{width:100%;opacity:1}}
@keyframes sgNivItemIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}
@keyframes sgNivFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

.sgn-nav{position:fixed;top:0;left:0;right:0;z-index:100;height:64px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(61,30,122,.07);display:flex;align-items:center;justify-content:space-between;padding:0 clamp(16px,3vw,40px);box-sizing:border-box}
.sgn-logo{display:flex;align-items:center;gap:10px;text-decoration:none;cursor:pointer;background:none;border:none}
.sgn-logo-text{font-family:Georgia,serif;color:#3D1E7A;font-size:17px;font-weight:300;letter-spacing:.14em;text-transform:uppercase}@media(max-width:600px){.sgn-logo-text{display:none!important}.sgn-cta{padding:7px 12px!important;font-size:11px!important}.sgn-back{font-size:11px!important}.sgn-nav{padding:0 12px!important}}
.sgn-back{font-size:13px;color:#5E4A8A;background:none;border:none;cursor:pointer;transition:color .2s}
.sgn-back:hover{color:#6B21A8}
.sgn-cta{padding:8px 18px;background:#6B21A8;color:white;border-radius:50px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap;align-self:center}
.sgn-cta:hover{background:#3D1E7A;transform:translateY(-1px)}

.sgn-hero{margin-top:0;position:relative;height:100vh;min-height:520px;max-height:820px;overflow:hidden;display:flex;align-items:flex-end}
.sgn-hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;animation:sgNivImgZoom 12s ease-out both}
.sgn-hero-grad{position:absolute;inset:0;background:linear-gradient(115deg,rgba(10,4,20,.88) 0%,rgba(61,30,122,.5) 55%,rgba(10,4,20,.2) 100%)}
.sgn-hero-grad2{position:absolute;bottom:0;left:0;right:0;height:40%;background:linear-gradient(to top,rgba(10,4,20,.7),transparent)}
.sgn-hero-c{position:relative;z-index:2;padding:clamp(32px,5vw,64px);max-width:680px}
.sgn-badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;border-radius:50px;border:1px solid rgba(201,168,76,.4);background:rgba(201,168,76,.07);font-size:9px;font-weight:600;color:rgba(255,255,255,.7);letter-spacing:.14em;text-transform:uppercase;margin-bottom:18px;animation:sgNivHeroUp .7s cubic-bezier(.22,1,.36,1) .4s both}
.sgn-badge-dot{width:5px;height:5px;background:#C9A84C;border-radius:50%}
.sgn-title{font-family:Georgia,serif;font-size:clamp(52px,8vw,88px);font-weight:400;color:white;line-height:.92;letter-spacing:-.02em;margin-bottom:14px;animation:sgNivHeroUp .8s cubic-bezier(.22,1,.36,1) .55s both}
.sgn-title-gold{background:linear-gradient(90deg,#C9A84C 0%,#E8C96A 40%,#C9A84C 70%,#E8C96A 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:sgNivShimmer 4s linear infinite}
.sgn-desc{font-size:clamp(13px,1.7vw,16px);color:rgba(255,255,255,.55);line-height:1.75;max-width:460px;font-weight:300;margin-bottom:28px;animation:sgNivHeroUp .7s cubic-bezier(.22,1,.36,1) .72s both}
.sgn-meta{display:flex;gap:clamp(24px,4vw,48px);animation:sgNivHeroUp .7s cubic-bezier(.22,1,.36,1) .88s both}
.sgn-mv{font-family:Georgia,serif;font-size:clamp(26px,4vw,38px);font-weight:400;color:white;line-height:1;margin-bottom:3px}
.sgn-mk{font-size:10px;color:rgba(255,255,255,.3);letter-spacing:.08em;text-transform:uppercase}

.sgn-main{max-width:980px;margin:0 auto;padding:80px clamp(20px,4vw,40px) 0}
.sgn-reveal{opacity:0;transform:translateY(24px);transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1)}
.sgn-reveal.sgn-in{opacity:1;transform:translateY(0)}
.sgn-d1{transition-delay:.1s}.sgn-d2{transition-delay:.2s}.sgn-d3{transition-delay:.3s}

.sgn-lbl{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#C9A84C;margin-bottom:12px;display:flex;align-items:center;gap:12px}
.sgn-lbl::after{content:"";flex:1;height:1px;background:linear-gradient(to right,rgba(201,168,76,.25),transparent);animation:sgNivLineGrow .8s cubic-bezier(.22,1,.36,1) .2s both}
.sgn-tit{font-family:Georgia,serif;font-size:clamp(28px,4.5vw,46px);font-weight:400;color:#3D1E7A;line-height:1.05;margin-bottom:10px}
.sgn-sub{font-size:14px;color:#5E4A8A;font-weight:300;line-height:1.75;margin-bottom:48px;max-width:520px}

.sgn-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(61,30,122,.06);border:1px solid rgba(61,30,122,.06);border-radius:16px;overflow:hidden;margin-bottom:88px}
.sgn-item{padding:24px 26px;background:white;display:flex;gap:16px;align-items:flex-start;transition:background .2s}
.sgn-item:hover{background:#F4F0FB}
.sgn-num{font-family:Georgia,serif;font-size:11px;font-weight:500;color:rgba(155,109,255,.5);letter-spacing:.1em;padding-top:3px;flex-shrink:0;min-width:24px}
.sgn-it{font-size:14px;font-weight:500;color:#1A0A2E;margin-bottom:4px;line-height:1.3}
.sgn-id{font-size:12px;color:#5E4A8A;line-height:1.6;font-weight:300}

.sgn-phase{padding:28px 30px;border-radius:14px;border:1px solid rgba(155,109,255,.12);background:#F4F0FB;position:relative;overflow:hidden;margin-bottom:40px;transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s}
.sgn-phase:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(61,30,122,.08)}
.sgn-phase::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(to right,#9B6DFF,#6B21A8)}
.sgn-ptag{font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#6B21A8;margin-bottom:10px}
.sgn-ptit{font-family:Georgia,serif;font-size:19px;font-weight:500;color:#3D1E7A;margin-bottom:8px}
.sgn-pdesc{font-size:12.5px;color:#5E4A8A;line-height:1.7;font-weight:300}

.sgn-tbl-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#5E4A8A;margin-bottom:16px}
.sgn-tbl{width:100%;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;border:1px solid rgba(61,30,122,.08);margin-bottom:8px}
.sgn-tbl thead tr{background:#3D1E7A}
.sgn-tbl th{padding:13px 18px;text-align:left;font-size:10px;font-weight:500;color:rgba(255,255,255,.6);letter-spacing:.08em;text-transform:uppercase}
.sgn-tbl tbody tr{transition:background .15s}
.sgn-tbl tbody tr:nth-child(even){background:#F4F0FB}
.sgn-tbl tbody tr:nth-child(odd){background:white}
.sgn-tbl tbody tr.sgn-hl{background:#FFF8E1 !important}
.sgn-tbl tbody tr:hover{background:rgba(155,109,255,.05) !important}
.sgn-tbl td{padding:13px 18px;font-size:13px;color:#1A0A2E;border-top:1px solid rgba(61,30,122,.04);transition:transform .2s cubic-bezier(.22,1,.36,1)}
.sgn-tbl tbody tr:hover td{transform:translateX(3px)}
.sgn-ts{font-family:Georgia,serif;font-size:19px;font-weight:400;color:#6B21A8}
.sgn-hl .sgn-ts{color:#7B5800}.sgn-ti{font-weight:500;color:#3D1E7A}.sgn-hl .sgn-ti{color:#7B5800;font-weight:600}
.sgn-th{font-size:11px;color:#5E4A8A;font-style:italic}
.sgn-tnote{font-size:11px;color:rgba(61,30,122,.3);margin-top:10px;font-style:italic;line-height:1.6;margin-bottom:88px}

.sgn-cta{margin:0 0 88px;border-radius:20px;overflow:hidden}
.sgn-cta-inner{padding:clamp(48px,7vw,72px);background:linear-gradient(135deg,#3D1E7A 0%,#6B21A8 60%,#8B2FC9 100%);position:relative;overflow:hidden;transition:box-shadow .4s}
.sgn-cta-inner:hover{box-shadow:0 20px 60px rgba(107,33,168,.25)}
.sgn-cta-inner::before{content:"";position:absolute;top:-80px;right:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.03)}
.sgn-cta-ey{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#E8C96A;margin-bottom:14px;position:relative;z-index:1}
.sgn-cta-tit{font-family:Georgia,serif;font-size:clamp(28px,4vw,42px);font-weight:400;color:white;line-height:1.1;margin-bottom:12px;position:relative;z-index:1}
.sgn-cta-desc{font-size:14px;color:rgba(255,255,255,.55);line-height:1.75;font-weight:300;max-width:500px;margin-bottom:24px;position:relative;z-index:1}
.sgn-cta-div{width:40px;height:1px;background:rgba(201,168,76,.4);margin-bottom:16px;position:relative;z-index:1}
.sgn-cta-note{font-size:12px;color:rgba(255,255,255,.25);font-style:italic;position:relative;z-index:1}

.sgn-footer{border-top:1px solid rgba(61,30,122,.06);padding:24px clamp(20px,4vw,40px);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;max-width:980px;margin:0 auto}
.sgn-fc{font-size:11px;color:rgba(61,30,122,.25)}
.sgn-fl a{font-size:11px;color:rgba(61,30,122,.25);text-decoration:none;margin-left:20px}
.sgn-fl a:hover{color:#6B21A8}

/* FUNDADOR DARK THEME */
.sgn-dark{background:#0A0414;color:white}
@keyframes sgFundNum{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes sgFundPart{0%{transform:translateY(0) translateX(0);opacity:0}15%{opacity:.8}90%{opacity:.3}100%{transform:translateY(-130px) translateX(30px);opacity:0}}
@keyframes sgFundBorder{0%,100%{border-color:rgba(201,168,76,.15)}50%{border-color:rgba(201,168,76,.4)}}
.sgn-dark .sgn-nav{background:rgba(10,4,20,.85);border-color:rgba(201,168,76,.08);display:flex;align-items:center}
.sgn-dark .sgn-logo-text{color:#E8C96A}
.sgn-dark .sgn-back{color:rgba(255,255,255,.35)}.sgn-dark .sgn-back:hover{color:#E8C96A}
.sgn-dark .sgn-cta{background:#C9A84C;color:#0A0414}
.sgn-dark .sgn-cta:hover{background:#E8C96A}
.sgn-fund-num{font-family:Georgia,serif;font-size:clamp(80px,14vw,160px);font-weight:300;color:rgba(201,168,76,.07);line-height:.85;position:absolute;top:clamp(40px,6vw,80px);left:clamp(40px,6vw,80px);letter-spacing:-.04em;pointer-events:none;animation:sgFundNum 1.5s 1s both}
.sgn-fund-eyebrow{display:inline-flex;align-items:center;gap:10px;margin-bottom:20px;font-size:10px;font-weight:500;color:#E8C96A;letter-spacing:.16em;text-transform:uppercase}
.sgn-fund-eyebrow::before,.sgn-fund-eyebrow::after{content:"";height:1px;background:rgba(201,168,76,.4);flex:1;min-width:20px;display:inline-block}
.sgn-fund-sub{font-family:Georgia,serif;font-size:clamp(20px,3vw,30px);font-weight:300;background:linear-gradient(90deg,#C9A84C 0%,#E8C96A 35%,#fffbe0 50%,#E8C96A 65%,#C9A84C 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:sgNivShimmer 5s linear infinite;margin-bottom:20px}
.sgn-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(201,168,76,.08);border-radius:16px;overflow:hidden;margin:80px 0}
.sgn-stat{padding:40px 32px;background:rgba(255,255,255,.02);text-align:center;transition:background .2s}
.sgn-stat:hover{background:rgba(201,168,76,.04)}
.sgn-sval{font-family:Georgia,serif;font-size:clamp(48px,7vw,72px);font-weight:400;color:white;line-height:1;margin-bottom:6px;transition:transform .3s,color .3s}
.sgn-stat:hover .sgn-sval{transform:scale(1.05);color:#E8C96A}
.sgn-skey{font-size:11px;color:rgba(255,255,255,.3);letter-spacing:.1em;text-transform:uppercase}
.sgn-dark .sgn-lbl{color:#C9A84C}
.sgn-dark .sgn-lbl::after{background:linear-gradient(to right,rgba(201,168,76,.3),transparent)}
.sgn-dark .sgn-tit{color:white}
.sgn-dark .sgn-sub{color:rgba(255,255,255,.45)}
.sgn-why{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:rgba(255,255,255,.04);border-radius:20px;overflow:hidden;margin-bottom:88px}
.sgn-why-item{padding:36px 32px;background:rgba(255,255,255,.015);transition:background .2s,transform .3s cubic-bezier(.22,1,.36,1);position:relative}@media(max-width:640px){.sgn-grid{grid-template-columns:1fr}.sgn-why{grid-template-columns:1fr}.sgn-stats{grid-template-columns:1fr}.sgn-meta{flex-direction:column;gap:16px}.sgn-hero-c{padding:24px}.sgn-tbl{font-size:11px}.sgn-tbl th,.sgn-tbl td{padding:9px 10px}.sgn-cta-inner{padding:32px 24px}.sgn-ben{flex-direction:column}.sgn-tbl{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch}}
.sgn-why-item:hover{background:rgba(201,168,76,.04);transform:translateY(-2px)}
.sgn-why-item::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.15),transparent)}
.sgn-wn{font-family:Georgia,serif;font-size:11px;font-weight:500;color:rgba(201,168,76,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px}
.sgn-wt{font-family:Georgia,serif;font-size:clamp(18px,2.2vw,24px);font-weight:500;color:white;margin-bottom:10px;line-height:1.2}
.sgn-wd{font-size:13px;color:rgba(255,255,255,.4);line-height:1.75;font-weight:300}
.sgn-ben{padding:28px 0;border-bottom:1px solid rgba(255,255,255,.04);display:grid;grid-template-columns:48px 1fr;gap:20px;align-items:start;transition:all .25s cubic-bezier(.22,1,.36,1)}
.sgn-ben:last-child{border-bottom:none}
.sgn-ben:hover .sgn-bt{color:#E8C96A}
.sgn-ben:hover .sgn-bicon{border-color:rgba(201,168,76,.5);color:#E8C96A}
.sgn-bicon{width:44px;height:44px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:16px;color:#C9A84C;transition:all .2s;flex-shrink:0}
.sgn-bt{font-family:Georgia,serif;font-size:clamp(17px,2vw,22px);font-weight:500;color:white;margin-bottom:6px;line-height:1.2;transition:color .2s}
.sgn-bd{font-size:13px;color:rgba(255,255,255,.38);line-height:1.7;font-weight:300}
.sgn-dark .sgn-tbl thead tr{background:rgba(61,30,122,.8)}
.sgn-dark .sgn-tbl tbody tr:nth-child(even){background:rgba(255,255,255,.02)}
.sgn-dark .sgn-tbl tbody tr:nth-child(odd){background:rgba(255,255,255,.01)}
.sgn-dark .sgn-tbl tbody tr.sgn-hl{background:rgba(201,168,76,.07) !important}
.sgn-dark .sgn-tbl tbody tr:hover{background:rgba(201,168,76,.25) !important}.sgn-dark .sgn-tbl tbody tr:hover td{color:white !important;background:transparent}
.sgn-dark .sgn-tbl td{color:rgba(255,255,255,.6);border-top:1px solid rgba(255,255,255,.03)}
.sgn-dark .sgn-ts{color:white}.sgn-dark .sgn-hl .sgn-ts{color:#C9A84C}
.sgn-dark .sgn-ti{color:rgba(255,255,255,.85)}.sgn-dark .sgn-hl .sgn-ti{color:#C9A84C}
.sgn-dark .sgn-th{color:rgba(255,255,255,.25)}
.sgn-dark .sgn-tnote{color:rgba(255,255,255,.2)}
.sgn-price-card{border-radius:24px;border:1px solid rgba(201,168,76,.15);overflow:hidden;position:relative;background:linear-gradient(145deg,rgba(201,168,76,.04) 0%,rgba(255,255,255,.01) 100%);animation:sgFundBorder 4s ease-in-out infinite;margin-bottom:80px}
.sgn-price-top{padding:clamp(40px,6vw,72px);text-align:center;position:relative}
.sgn-price-top::before{content:"";position:absolute;inset:0;border-radius:24px;background:radial-gradient(ellipse at 50% 0%,rgba(201,168,76,.08) 0%,transparent 60%);pointer-events:none}
.sgn-pcupo{display:inline-flex;align-items:center;gap:8px;padding:7px 18px;border-radius:50px;border:1px solid rgba(201,168,76,.25);background:rgba(201,168,76,.06);font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#E8C96A;margin-bottom:32px}
.sgn-pdot{width:4px;height:4px;background:#C9A84C;border-radius:50%}
.sgn-pamount{font-family:Georgia,serif;font-size:clamp(56px,9vw,96px);font-weight:300;color:white;line-height:1;margin-bottom:4px}
.sgn-pamount em{color:#C9A84C;font-style:normal;font-size:.6em}
.sgn-psub{font-size:14px;color:rgba(255,255,255,.3);margin-bottom:24px}
.sgn-pmonthly{font-family:Georgia,serif;font-size:clamp(24px,3.5vw,36px);font-weight:400;color:#E8C96A;margin-bottom:8px}
.sgn-pmonthlysub{font-size:13px;color:rgba(255,255,255,.2);margin-bottom:40px}
.sgn-pnote{max-width:480px;margin:0 auto 40px;padding:16px 24px;border-radius:12px;background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.12);font-size:12px;color:rgba(255,255,255,.45);line-height:1.7}
.sgn-pcta{font-size:13px;color:rgba(255,255,255,.3);font-style:italic;line-height:1.6}
.sgn-pcta strong{color:rgba(201,168,76,.7);font-style:normal}
.sgn-dark .sgn-footer{border-color:rgba(201,168,76,.06)}
.sgn-dark .sgn-fc{color:rgba(255,255,255,.15)}
.sgn-dark .sgn-fl a{color:rgba(255,255,255,.15)}.sgn-dark .sgn-fl a:hover{color:#E8C96A}
@media(max-width:768px){
  .sgn-grid{grid-template-columns:1fr}
  .sgn-meta{gap:20px}
  .sgn-stats{grid-template-columns:1fr}
  .sgn-why{grid-template-columns:1fr}
}
`;

// ─── TABLA INGRESOS HELPER ────────────────────────────────────────────────────
const SgnTablaIngresos = ({pct}:{pct:number}) => {
  const rows = [
    {s:"100",   p:"$999",     hito:"Primeros alumnos"},
    {s:"500",   p:"$4.995",   hito:"Validación del modelo"},
    {s:"1.000", p:"$9.990",   hito:"Ingreso constante"},
    {s:"5.000", p:"$49.950",  hito:"Escala real"},
    {s:"10.000",p:"$99.900",  hito:"Plataforma establecida"},
    {s:"100.000",p:"$999.000",hito:"Impacto masivo"},
  ];
  const pools = [999,4995,9990,49950,99900,999000];
  return (
    <table className="sgn-tbl">
      <thead><tr>
        <th>Suscriptores</th><th>Ingresos SG / mes</th><th>Tu ingreso estimado</th><th>Etapa</th>
      </tr></thead>
      <tbody>
        {rows.map((r,i)=>(
          <tr key={i} className={i===5?"sgn-hl":""}>
            <td className="sgn-ts">{r.s}</td>
            <td>{r.p}</td>
            <td className="sgn-ti">~${Math.round(pools[i]*pct/100).toLocaleString()}/mes</td>
            <td className="sgn-th">{r.hito}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ─── NIVEL DETALLE (Básica / Intermedia / Premium) ────────────────────────────
function NivelDetalle({nivel, setPage}:{nivel:"basica"|"intermedia"|"premium", setPage:(p:any)=>void}) {

  React.useEffect(()=>{
    window.scrollTo(0,0);
    const style=document.createElement("style");
    style.id="sgn-css";
    if(!document.getElementById("sgn-css")) document.head.appendChild(style);
    style.textContent=NIVEL_CSS;
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("sgn-in");obs.unobserve(e.target);}});
    },{threshold:.07});
    setTimeout(()=>document.querySelectorAll(".sgn-reveal").forEach(el=>obs.observe(el)),100);
    // Stagger grid items
    const gObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.querySelectorAll(".sgn-item").forEach((item:any,i:number)=>{
            item.style.opacity="0";item.style.transform="translateX(-10px)";
            setTimeout(()=>{item.style.transition="opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)";item.style.opacity="1";item.style.transform="translateX(0)";},i*80);
          });
          gObs.unobserve(e.target);
        }
      });
    },{threshold:.1});
    setTimeout(()=>document.querySelectorAll(".sgn-grid").forEach(g=>gObs.observe(g)),100);
    return ()=>{obs.disconnect();gObs.disconnect()};
  },[]);

  const data:{[k:string]:{badge:string,bc:string,bt:string,price:string,sub:string,rev:number,img:string,desc:string,incluye:[string,string][],fase1:string}} = {
    basica:{
      badge:"Nivel 1 · Básica · Pago único",
      bc:"rgba(155,109,255,0.25)",bt:"#C4ADFF",
      price:"$700",sub:"Pago único",rev:30,
      img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90&fit=crop&crop=center",
      desc:"El punto de partida para instructores que quieren publicar su conocimiento, obtener certificación oficial y comenzar a generar ingresos pasivos desde el primer día.",
      incluye:[
        ["Certificado digital oficial","Con código QR verificable — acreditable en redes sociales y CV profesional."],
        ["Sesión estratégica 1:1 · 60 min","Con el equipo de Solo Gracias para definir posicionamiento y estructura de contenido."],
        ["1 experiencia publicada","Al menos 1 técnica o metodología exclusiva. Vos grabás con tu celular — SG edita."],
        ["Foto de perfil retocada","Con filtro y estética de marca Solo Gracias para coherencia visual en todas las redes."],
        ["Bio profesional","Redactada por el equipo — tono premium, posicionamiento claro, optimizada para IG y LinkedIn."],
        ["Kit de plantillas","1 plantilla post + 1 story diseñados para Instagram, alineados con la identidad visual."],
      ],
      fase1:"El 30% del pool mensual proporcional, distribuido en su totalidad desde el día 1 de publicación. Simple, transparente y calculable en tiempo real. Tu porcentaje nunca baja del 30%.",
    },
    intermedia:{
      badge:"Nivel 2 · Intermedia · + $497/mes",
      bc:"rgba(201,168,76,0.25)",bt:"#C9A84C",
      price:"$1.500",sub:"+ $497/mes · mín. 12 meses",rev:40,
      img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=90&fit=crop&crop=top",
      desc:"Para instructores que quieren presencia profesional completa en redes, más experiencias publicadas y un rebranding que los posicione como referentes en su área.",
      incluye:[
        ["Todo del Nivel Básica incluido","Certificado, sesión 1:1, foto retocada, bio profesional y plantillas de Instagram."],
        ["Rebranding completo Instagram","Bio · 9 highlights · 12 plantillas post · 8 stories · guía de feed completa."],
        ["Sesión 1:1 en vivo · 90 min","En profundidad, para definir estrategia, posicionamiento y plan de contenido."],
        ["2 experiencias exclusivas publicadas","Video grabado Y editado por Solo Gracias — producción completa incluida."],
        ["Aparición en sección Expertos","Visibilidad en sologracias.com como instructor destacado de la plataforma."],
        ["Ponente en evento online","Participación garantizada en 1 evento online con la comunidad de Solo Gracias."],
      ],
      fase1:"El 40% del pool mensual proporcional desde el primer día de publicación. Transparente y calculable. Tu porcentaje nunca baja del 40% — es el piso garantizado.",
    },
    premium:{
      badge:"Nivel 3 · Premium · + $497/mes",
      bc:"rgba(201,168,76,0.4)",bt:"#FFD966",
      price:"$2.500",sub:"+ $497/mes · mín. 12 meses",rev:50,
      img:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=90&fit=crop&crop=top",
      desc:"El nivel más completo. Para instructores que quieren el mayor impacto, la mayor visibilidad y el porcentaje de ingresos más alto disponible en la plataforma.",
      incluye:[
        ["Todo del Nivel Intermedia","Más todos los beneficios de Básica e Intermedia incluidos sin excepción."],
        ["Rebranding TODAS las redes","Instagram + LinkedIn + Facebook + TikTok — coherencia visual completa."],
        ["Plan de contenido 90 días","Personalizado por el equipo de Solo Gracias según tu área y audiencia."],
        ["Landing page personal","sologracias.com/instructores/[tu-nombre] — tu espacio propio en la plataforma."],
        ["3 experiencias exclusivas","Grabadas y editadas por Solo Gracias con producción completa."],
        ["Embajador Oficial","8 posts + 16 stories por mes gestionados por SG · Mención en newsletter mensual."],
      ],
      fase1:"El 50% del pool mensual proporcional — el máximo disponible en la plataforma — desde el primer día de publicación. Tu porcentaje nunca baja del 50%.",
    },
  };

  const d = data[nivel];
  const nums = ["I","II","III","IV","V","VI"];

  return (
    <div style={{background:"white",minHeight:"100vh",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <style>{NIVEL_CSS}</style>

      <nav className="sgn-nav">
        <button className="sgn-logo sgn-back" onClick={()=>setPage("academia-instructores")}>
          <svg width="34" height="34" viewBox="0 0 72 72" fill="none">
            <path d="M36 36 C36 33 34 31 31 31 C28 31 26 33 26 36 C26 40 29 43 33 44 C38 45 43 42 45 37 C47 31 44 24 39 21 C33 17 25 19 20 24 C14 30 14 39 18 46 C23 54 33 57 42 54 C52 50 58 40 56 30 C54 19 44 12 33 12 C21 12 11 20 9 32 C7 44 13 57 24 62 C36 68 51 65 59 54"
              stroke="#3D1E7A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <circle cx="36" cy="36" r="2.5" fill="#3D1E7A"/>
          </svg>
          <span className="sgn-logo-text">Solo Gracias</span>
        </button>
        <button className="sgn-back" onClick={()=>setPage("academia-instructores")}>← Academia</button>
        <a href={`${WA_LINK.replace('Academia+Solo+Gracias','nivel+'+nivel)}`} target="_blank" rel="noopener noreferrer" className="sgn-cta">Postularme →</a>
      </nav>

      <section className="sgn-hero">
        <img className="sgn-hero-img" src={d.img} alt=""/>
        <div className="sgn-hero-grad"/>
        <div className="sgn-hero-grad2"/>
        <div className="sgn-hero-c">
          <div className="sgn-badge"><div className="sgn-badge-dot"/>{d.badge}</div>
          <h1 className="sgn-title">{d.price} <em className="sgn-title-gold">·</em><br/><span className="sgn-title-gold">{d.rev}%</span> tuyo</h1>
          <p className="sgn-desc">{d.desc}</p>
          <div className="sgn-meta">
            <div><div className="sgn-mv"><span className="sgn-title-gold">{d.rev}%</span></div><div className="sgn-mk">Revenue share</div></div>
            <div><div className="sgn-mv">{d.price}</div><div className="sgn-mk">{d.sub}</div></div>
          </div>
        </div>
      </section>

      <div className="sgn-main">
        <div className="sgn-reveal" style={{marginBottom:20}}>
          <p className="sgn-lbl">Qué incluye</p>
          <h2 className="sgn-tit">Todo lo que está incluido</h2>
          <p className="sgn-sub">Cada elemento fue diseñado para que estés operando desde el primer día.</p>
        </div>
        <div className="sgn-grid sgn-reveal sgn-d1">
          {d.incluye.map(([t,desc],i)=>(
            <div key={i} className="sgn-item">
              <div className="sgn-num">{nums[i]}</div>
              <div><div className="sgn-it">{t}</div><div className="sgn-id">{desc}</div></div>
            </div>
          ))}
        </div>

        <div className="sgn-reveal">
          <p className="sgn-lbl">Modelo de ingresos</p>
          <h2 className="sgn-tit">Modelo de ingresos</h2>
          <p className="sgn-sub">Calculable desde el día 1. Sin letra chica. Tu porcentaje del pool es fijo según tu nivel.</p>
        </div>
        <div className="sgn-phase sgn-reveal sgn-d1">
          <div className="sgn-ptag">Fase 1 — Primeros 6 meses</div>
          <div className="sgn-ptit">Pool proporcional de suscriptores</div>
          <div className="sgn-pdesc">{d.fase1}</div>
        </div>

        <div className="sgn-reveal sgn-d2">
          <p className="sgn-tbl-lbl">Proyección mensual · {d.rev}% revenue share</p>
          <SgnTablaIngresos pct={d.rev}/>
          <p className="sgn-tnote">* Proyección estimada sobre el pool proporcional total. Los valores dependen del número de instructores activos en la plataforma.</p>
        </div>

        <div className="sgn-cta sgn-reveal">
          <div className="sgn-cta-inner">
            <div className="sgn-cta-ey">Postulaciones abiertas</div>
            <h2 className="sgn-cta-tit">Los instructores son<br/>seleccionados.</h2>
            <p className="sgn-cta-desc">El equipo de Solo Gracias revisa cada perfil y se pone en contacto directamente. Hacé clic en "Postularme" en la barra superior para comenzar.</p>
            <div className="sgn-cta-div"/>
            <p className="sgn-cta-note">Solo Gracias selecciona instructores que comparten los valores de la plataforma.</p>
          </div>
        </div>
      </div>

      <footer className="sgn-footer">
        <span className="sgn-fc">© 2026 Solo Gracias · sologracias.com</span>
        <div className="sgn-fl"><a href="#">Privacidad</a><a href="#">Términos</a></div>
      </footer>
    </div>
  );
}

// ─── NIVEL FUNDADOR ───────────────────────────────────────────────────────────
function NivelFundador({setPage}:{setPage:(p:any)=>void}) {

  React.useEffect(()=>{
    window.scrollTo(0,0);
    const style=document.createElement("style");
    style.id="sgn-css-fund";
    if(!document.getElementById("sgn-css-fund")) document.head.appendChild(style);
    style.textContent=NIVEL_CSS;
    // Particles
    const container=document.getElementById("sgn-fund-particles");
    if(container && container.childElementCount===0){
      const ps=document.createElement("style");
      ps.textContent=`.sgn-part{position:absolute;background:#C9A84C;border-radius:50%;animation:sgFundPart linear infinite}`;
      document.head.appendChild(ps);
      for(let i=0;i<20;i++){
        const p=document.createElement("div");
        p.className="sgn-part";
        const sz=1+Math.random()*2.5;
        p.style.cssText=`left:${Math.random()*100}%;bottom:${Math.random()*40}%;width:${sz}px;height:${sz}px;animation-duration:${5+Math.random()*9}s;animation-delay:${Math.random()*7}s;opacity:${.25+Math.random()*.45}`;
        container.appendChild(p);
      }
    }
    // Scroll reveals
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("sgn-in");obs.unobserve(e.target);}});
    },{threshold:.07});
    setTimeout(()=>document.querySelectorAll(".sgn-reveal").forEach(el=>obs.observe(el)),100);
    // Stagger benefits
    const bObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.querySelectorAll(".sgn-ben").forEach((b:any,i:number)=>{
            b.style.opacity="0";b.style.transform="translateX(-14px)";
            setTimeout(()=>{b.style.transition="opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)";b.style.opacity="1";b.style.transform="translateX(0)";},i*70);
          });
          bObs.unobserve(e.target);
        }
      });
    },{threshold:.05});
    // Stagger why grid
    const wObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.querySelectorAll(".sgn-why-item").forEach((item:any,i:number)=>{
            item.style.opacity="0";item.style.transform="translateY(20px)";
            setTimeout(()=>{item.style.transition="opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1)";item.style.opacity="1";item.style.transform="translateY(0)";},i*100);
          });
          wObs.unobserve(e.target);
        }
      });
    },{threshold:.1});
    setTimeout(()=>{
      const benSection=document.querySelector(".sgn-ben-section");
      const whyGrid=document.querySelector(".sgn-why");
      if(benSection) bObs.observe(benSection);
      if(whyGrid) wObs.observe(whyGrid);
    },100);
    return ()=>{obs.disconnect();bObs.disconnect();wObs.disconnect()};
  },[]);

  const beneficios = [
    {n:"I",   t:"Número permanente #001 al #011",d:"Irrepetible en la historia de la plataforma. Cuando haya 500 instructores, ser el #003 es algo que nadie más puede tener. Tu número aparece en tu perfil y materiales para siempre."},
    {n:"II",  t:"Producción cinematográfica 4K",d:"Estudio profesional · Cámara 4K · Iluminación de 3 puntos · Styling y fondo con identidad de marca · Mínimo 10 episodios de 15-25 min."},
    {n:"III", t:"Post-producción estilo Gaia",d:"Motion graphics animados · Color grading cinematográfico · Música licenciada · Efectos visuales premium · Subtítulos en ES, EN y PT."},
    {n:"IV",  t:"Workbooks diseñados",d:"PDFs descargables por episodio con identidad visual del instructor + Solo Gracias."},
    {n:"V",   t:"Summit de Lanzamiento",d:"Evento online de 1 día · 11 ponentes · 5.000-20.000 personas en directo · Grabado como evergreen en la plataforma."},
    {n:"VI",  t:"Salida a la prensa",d:"Comunicado oficial en medios de PY, AR, CO y MX · Pitch a TV, radio y digitales · Kit de prensa personal completo."},
    {n:"VII", t:"Pauta pagada 6 meses",d:"Ads en Instagram y TikTok gestionados y pagados por Solo Gracias · Targeting a audiencia LATAM bienestar."},
    {n:"VIII",t:"Consejero de la plataforma",d:"Voz real en las decisiones importantes. Consultados antes de cambios. Reunión directa mensual con el equipo fundador."},
    {n:"IX",  t:"Revenue share: 50%",d:"El porcentaje más alto disponible en la plataforma, con todos los beneficios exclusivos del Fundador incluidos."},
  ];

  return (
    <div className="sgn-dark" style={{fontFamily:"'DM Sans',system-ui,sans-serif",minHeight:"unset"}}>
      <style>{NIVEL_CSS}</style>

      <nav className="sgn-nav sgn-dark">
        <button className="sgn-logo sgn-back" onClick={()=>setPage("academia-instructores")}>
          <svg width="34" height="34" viewBox="0 0 72 72" fill="none"><path d="M36 36 C36 33 34 31 31 31 C28 31 26 33 26 36 C26 40 29 43 33 44 C38 45 43 42 45 37 C47 31 44 24 39 21 C33 17 25 19 20 24 C14 30 14 39 18 46 C23 54 33 57 42 54 C52 50 58 40 56 30 C54 19 44 12 33 12 C21 12 11 20 9 32 C7 44 13 57 24 62 C36 68 51 65 59 54" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" fill="none"/><circle cx="36" cy="36" r="2.5" fill="#C9A84C"/></svg>
          <span className="sgn-logo-text">Solo Gracias</span>
        </button>
        <button className="sgn-back" onClick={()=>setPage("academia-instructores")}>← Academia</button>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="sgn-cta sgn-dark">Postularme →</a>
      </nav>

      <section className="sgn-hero">
        <img className="sgn-hero-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=90&fit=crop&crop=faces" alt="" style={{filter:"brightness(.55) saturate(.9)"}}/>
        <div className="sgn-hero-grad"/>
        <div className="sgn-hero-grad2"/>
        <div id="sgn-fund-particles" style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:1}}/>
        <div className="sgn-fund-num">11</div>
        <div className="sgn-hero-c">
          <div className="sgn-fund-eyebrow">Cupo exclusivo · Solo 11 lugares en la historia</div>
          <h1 className="sgn-title">Instructor<br/>Fundador</h1>
          <p className="sgn-fund-sub">#001 — #011 · Para siempre</p>
          <p className="sgn-desc">Los primeros 11 instructores de Solo Gracias son co-constructores de la plataforma. Su número, su historia y su legado son irrepetibles.</p>
          <div className="sgn-meta">
            <div><div className="sgn-mv">11</div><div className="sgn-mk">Lugares totales</div></div>
            <div><div className="sgn-mv" style={{color:"#C9A84C"}}>50%</div><div className="sgn-mk">Revenue share</div></div>
            <div><div className="sgn-mv">4K</div><div className="sgn-mk">Producción</div></div>
          </div>
        </div>
      </section>

      <div className="sgn-stats sgn-reveal">
        <div className="sgn-stat"><div className="sgn-sval">11</div><div className="sgn-skey">Lugares en la historia</div></div>
        <div className="sgn-stat"><div className="sgn-sval" style={{color:"#C9A84C"}}>50%</div><div className="sgn-skey">Revenue share — el máximo</div></div>
        <div className="sgn-stat"><div className="sgn-sval">∞</div><div className="sgn-skey">Legado permanente</div></div>
      </div>

      <div style={{maxWidth:1000,margin:"0 auto",padding:"0 clamp(20px,4vw,40px)",paddingBottom:0}}>

        <div className="sgn-reveal" style={{marginBottom:48,textAlign:"center" as const}}>
          <p className="sgn-lbl">Por qué ser fundador</p>
          <h2 className="sgn-tit">No es un nivel más.<br/>Es ser parte de la historia.</h2>
          <p className="sgn-sub">Cuando Solo Gracias tenga millones de usuarios en toda Latinoamérica, tu nombre y tu número van a estar ahí — desde el primer día.</p>
        </div>

        <div className="sgn-why sgn-reveal sgn-d1">
          <div className="sgn-why-item"><div className="sgn-wn">01</div><h3 className="sgn-wt">Número permanente</h3><p className="sgn-wd">Del #001 al #011. Irrepetible. Cuando haya 500 instructores, ser el #003 es algo que nadie más podrá tener.</p></div>
          <div className="sgn-why-item"><div className="sgn-wn">02</div><h3 className="sgn-wt">Consejero de la plataforma</h3><p className="sgn-wd">Voz real en las decisiones importantes. Consultados antes de cambios. Reunión directa mensual con el equipo fundador.</p></div>
          <div className="sgn-why-item"><div className="sgn-wn">03</div><h3 className="sgn-wt">Estándar de calidad</h3><p className="sgn-wd">Tu contenido es el contenido ancla que define el nivel. Los que lleguen después van a aspirar a lo que vos construiste primero.</p></div>
          <div className="sgn-why-item"><div className="sgn-wn">04</div><h3 className="sgn-wt">Legado digital</h3><p className="sgn-wd">Lo que sabés no te pertenece solo a vos — le pertenece a los que vienen. Solo Gracias es el lugar donde ese conocimiento queda registrado para siempre.</p></div>
        </div>

        <div className="sgn-reveal">
          <p className="sgn-lbl">Beneficios incluidos</p>
          <h2 className="sgn-tit">Todo lo que reciben<br/>los 11 Fundadores</h2>
        </div>
        <div className="sgn-ben-section sgn-reveal sgn-d1" style={{marginBottom:88}}>
          {beneficios.map((b)=>(
            <div key={b.n} className="sgn-ben">
              <div className="sgn-bicon">{b.n}</div>
              <div><div className="sgn-bt">{b.t}</div><div className="sgn-bd">{b.d}</div></div>
            </div>
          ))}
        </div>

        <div className="sgn-reveal">
          <p className="sgn-lbl">Proyección de ingresos</p>
          <h2 className="sgn-tit" style={{fontSize:"clamp(24px,3.5vw,36px)",marginBottom:24}}>50% revenue share · Ingresos mensuales estimados</h2>
        </div>
        <div className="sgn-reveal sgn-d1" style={{marginBottom:88}}>
          <SgnTablaIngresos pct={50}/>
          <p className="sgn-tnote">* Proyección estimada sobre el pool proporcional total.</p>
        </div>

        <div className="sgn-price-card sgn-reveal" style={{marginBottom:0,paddingBottom:0}}>
          <div className="sgn-price-top">
            <div className="sgn-pcupo"><div className="sgn-pdot"/><span>Solo 11 lugares · Para siempre</span><div className="sgn-pdot"/></div>
            <p style={{fontSize:11,color:"rgba(255,255,255,.2)",letterSpacing:".1em",textTransform:"uppercase" as const,marginBottom:24}}>Inversión para ser Instructor Fundador</p>
            <div className="sgn-pamount">$3.500 <em>USD</em></div>
            <div className="sgn-psub">Pago único de ingreso</div>
            <div className="sgn-pmonthly">+ $997 / mes</div>
            <div className="sgn-pmonthlysub">Gestión mensual continua</div>
            <div className="sgn-pnote">Los instructores son seleccionados por el equipo de Solo Gracias. Al postularte, revisaremos tu perfil y nos pondremos en contacto contigo.</div>
            <p className="sgn-pcta">Hacé clic en <strong>Postularme →</strong> en la barra superior<br/>para iniciar el proceso de selección.</p>
          </div>
        </div>

      </div>
      <footer className="sgn-footer sgn-dark" style={{marginTop:0,paddingTop:16,paddingBottom:16}}>
        <span className="sgn-fc">© 2026 Solo Gracias · sologracias.com</span>
        <div className="sgn-fl"><a href="#">Privacidad</a><a href="#">Términos</a></div>
      </footer>
    </div>
  );
}
