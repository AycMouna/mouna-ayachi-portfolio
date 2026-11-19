import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Send, Menu, X, GraduationCap, BriefcaseBusiness, MapPin } from 'lucide-react';

const nav = [['Accueil','#home'],['À propos','#about'],['Compétences','#skills'],['Projets','#projects'],['Parcours','#journey']];
const tools = [
  {name:'Python', color:'#3776ab', glyph:'🐍'}, {name:'React', color:'#08b6d4', glyph:'⚛'}, {name:'Docker', color:'#2496ed', glyph:'🐳'},
  {name:'AWS', color:'#f0a51c', glyph:'aws'}, {name:'Spark', color:'#e76b20', glyph:'✴'}, {name:'Power BI', color:'#e5b61b', glyph:'▥'}, {name:'ML / DL', color:'#713fc4', glyph:'✳'}
];
const projects = [
  {title:'Pneumonia Detection', category:'COMPUTER VISION', desc:'Classification d’images médicales avec Deep Learning.', tags:['AI','Computer Vision','PyTorch'], image:'/images/pneumonia.jpg', accent:'pink', status:'Projet académique'},
  {title:'Video Game Sales Analysis', category:'DATA ANALYTICS', desc:'Analyse et visualisation des ventes de jeux vidéo.', tags:['Power BI','Data Analytics'], image:'/images/game-sales.jpg', accent:'yellow', status:'Projet académique'},
  {title:'Forest Fire Detection', category:'AIoT · DRONES', desc:'Détection précoce d’incendies par IA et drones autonomes.', tags:['Computer Vision','IoT'], image:'/images/fire-drones.jpg', accent:'lime', status:'En cours'}
];
const groups = [
  {title:'Data & AI', items:['Machine Learning','Deep Learning','Computer Vision','Pandas · NumPy','Data Visualization']},
  {title:'Development', items:['Python · Java · C/C++','JavaScript','React · Node.js','Flask · Express','SQL']},
  {title:'Cloud & Systems', items:['Docker','AWS Academy','Spark · Hadoop','Linux · Git','IoT · MQTT']},
];
function App(){
  const [dark,setDark]=useState(true); const [menu,setMenu]=useState(false);
  useEffect(()=>{document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';},[dark]);
  useEffect(()=>{const els=document.querySelectorAll('.reveal');if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('visible'));return;}const ob=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target);}}),{threshold:.12});els.forEach(e=>ob.observe(e));return()=>ob.disconnect();},[]);
  return <div className="site-shell">
    <header className="header"><a href="#home" className="brand" aria-label="Mouna Ayachi home">M<span>A</span><b>.</b></a>
      <nav className="nav desktop-nav">{nav.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
      <div className="header-actions"><a className="contact-pill" href="#contact"><Send size={15}/> Me contacter</a><button className="theme-toggle" onClick={()=>setDark(!dark)} aria-label="Changer de thème">{dark?<Sun size={17}/>:<Moon size={17}/>}</button><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button></div>
    </header>
    {menu&&<nav className="mobile-nav">{nav.map(([label,href])=><a key={label} href={href} onClick={()=>setMenu(false)}>{label}</a>)}</nav>}
    <main>
      <section id="home" className="hero">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="pink-line"/> Bonjour, je suis</div><h1>Mouna Ayachi</h1><h2><span className="purple">Data,</span> <span className="pink">AI</span> &amp; <span className="cyan">Software</span></h2><p className="hero-desc">Étudiante en Master 2 SDSI, passionnée par l’IA, la Data Science et le développement de solutions intelligentes.</p><div className="hero-buttons"><a className="primary-btn" href="#projects">Découvrir mes projets <ArrowRight size={17}/></a><a className="outline-btn" href="/cv.pdf" target="_blank">Mon CV <ArrowUpRight size={16}/></a></div><div className="socials"><a href="https://github.com/mounaayachi-eng" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="#contact" aria-label="LinkedIn"><Linkedin/></a><a href="mailto:ayc.mouna@gmail.com" aria-label="Email"><Mail/></a></div></div>
        <div className="hero-visual reveal delay-2"><div className="shape circle-yellow"/><div className="shape polygon-cyan"/><div className="shape triangle-purple"/><div className="shape blob-pink"/><div className="portrait-stage"><img src="/mouna-portrait.png" alt="Portrait professionnel de Mouna Ayachi"/></div><div className="spark">⌁</div></div>
      </section>
      <section id="skills" className="tools-section reveal"><div className="tools-heading"><span className="pink-line"/><h3>Outils & technologies</h3></div><div className="tool-list">{tools.map(t=><div className="tool-card" key={t.name}><span className="tool-glyph" style={{color:t.color}}>{t.glyph}</span><span>{t.name}</span></div>)}</div></section>
      <section id="projects" className="projects-section"><div className="section-heading reveal"><div><div className="eyebrow"><span className="pink-line"/> Projets sélectionnés</div><h2>Quelques projets <span>phares.</span></h2></div><a href="https://github.com/mounaayachi-eng" target="_blank" rel="noreferrer" className="see-all">Voir tous les projets <ArrowRight size={16}/></a></div>
        <div className="project-grid">{projects.map((p,i)=><article className={`project-card reveal delay-${i+1}`} key={p.title}><div className={`project-accent ${p.accent}`}/><a href="https://github.com/mounaayachi-eng" target="_blank" rel="noreferrer" className="project-arrow" aria-label={`Voir ${p.title}`}><ArrowUpRight size={18}/></a><div className="project-image"><img src={p.image} alt={p.title}/></div><div className="project-content"><div className="project-topline"><span>{p.category}</span>{i===2&&<span className="in-progress">En cours</span>}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>
      <section id="about" className="about-section"><div className="about-inner reveal"><div className="eyebrow"><span className="pink-line"/> À propos</div><h2>Curieuse, créative<br/>et <span>orientée solutions.</span></h2><p>J’aime apprendre, expérimenter et transformer des idées en projets concrets — entre données, intelligence artificielle et développement.</p><a href="#journey" className="text-link">Mon parcours <ArrowRight size={16}/></a></div></section>
      <section id="journey" className="journey-section"><div className="journey-block reveal"><div className="journey-icon"><GraduationCap/></div><div><small>FORMATION</small><h3>Master 2 — Data Science & Intelligent Systems</h3><p>Université Constantine 2</p></div></div><div className="journey-block reveal delay-1"><div className="journey-icon"><BriefcaseBusiness/></div><div><small>EXPÉRIENCE</small><h3>Stage — CAAT</h3><p>Analyse de données, nettoyage et tableaux de bord de suivi des sinistres.</p></div></div><div className="journey-block reveal delay-2"><div className="journey-icon"><MapPin/></div><div><small>BASE</small><h3>Constantine, Algérie</h3><p>Ouverte aux opportunités et collaborations.</p></div></div></section>
      <section id="contact" className="contact-section reveal"><div className="contact-top"><div className="eyebrow"><span className="pink-line"/> Et si on échangeait ?</div><h2>Construisons quelque<br/><span>chose d’intéressant.</span></h2><a href="mailto:ayc.mouna@gmail.com" className="contact-cta">Me contacter <ArrowUpRight size={18}/></a></div><div className="footer"><span className="brand small">M<span>A</span><b>.</b></span><div className="footer-links"><a href="https://github.com/mounaayachi-eng" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:ayc.mouna@gmail.com">Email</a></div><small>© 2026 · Mouna Ayachi</small></div></section>
    </main>
  </div>;
}
export default App;
