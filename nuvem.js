/* Sincronizacao na nuvem - IEADESGA - v31 */
(function(){var st=document.createElement('style');st.textContent=".app{padding-top:26px!important;box-sizing:border-box}\n#barraLogin{position:fixed;top:3px;right:14px;z-index:60;display:flex;align-items:center;gap:8px}\n#barraLogin .bl-quem{font-size:11px;line-height:1.25;text-align:right;color:#3c4a52}\n#barraLogin .bl-nome{font-weight:700;display:block}\n#barraLogin .bl-func{font-size:10px;color:#6b7280;display:block}\nbody[data-tema=\"dark\"] #barraLogin .bl-quem{color:#c3d1d8}\nbody[data-tema=\"dark\"] #barraLogin .bl-func{color:#93a4ad}\n#barraLogin .chip{white-space:nowrap}\n.somente-leitura .btn.primary{display:none!important}\n.somente-leitura .month-cell{cursor:default!important}\n#barraLogin .bl-entrar{font-size:13px;font-weight:700;padding:6px 18px;letter-spacing:.3px}\n#telaLogin{position:fixed;inset:0;z-index:200;background:rgba(10,20,26,.55);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaLogin .lg-card{background:#fff;color:#1f2933;width:100%;max-width:340px;border-radius:12px;padding:22px 22px 18px;box-shadow:0 18px 50px rgba(0,0,0,.3)}\n#telaLogin h3{margin:0;font-size:17px;color:#0b4f6c}\n#telaLogin .lg-sub{margin:4px 0 16px;font-size:11.5px;color:#6b7280}\n#telaLogin label{display:block;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px;letter-spacing:.3px}\n#telaLogin input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaLogin input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaLogin .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;margin:-6px 0 8px}\n#telaLogin .lg-acoes{display:flex;gap:8px;justify-content:flex-end}\nbody[data-tema=\"dark\"] #telaLogin .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaLogin h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaLogin input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaLogin .lg-erro{color:#ff8a80}\n#telaLogin .lg-card{text-align:center}\n#telaLogin .lg-logo{margin:0 0 12px}\n#telaLogin .lg-logo img{max-width:190px;max-height:105px;width:auto;height:auto;object-fit:contain;margin:0 auto;background:transparent!important;padding:0!important;border-radius:0!important}\n#telaLogin h3{font-size:16px;letter-spacing:.2px}\n#telaLogin .lg-sub{margin:3px 0 18px}\n#telaLogin label{text-align:left}\n#telaLogin .lg-erro{text-align:left}\nbody.somente-leitura #telaLogin .btn.primary{display:inline-block!important}\nbody.somente-leitura #telaLogin .btn{display:inline-block!important}\n#telaLogin .lg-acoes{justify-content:space-between;align-items:center;margin-top:2px}\n#telaLogin .lg-visitante{background:transparent;border:1px solid transparent;color:#6b7280;font-size:11.5px;padding:6px 2px;text-decoration:underline;text-underline-offset:2px}\n#telaLogin .lg-visitante:hover{color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaLogin .lg-visitante{color:#93a4ad}\nbody[data-tema=\"dark\"] #telaLogin .lg-visitante:hover{color:#7fd4e8}\n#telaLogin #loginOk{padding:8px 22px;font-weight:700}\n#telaLogin{background:rgba(8,16,21,.82);backdrop-filter:blur(4px)}\n#telaLogin .lg-criar{text-align:center;margin:-2px 0 12px}\n#telaLogin .lg-criar button{background:none;border:none;color:#0b4f6c;font-size:11.5px;text-decoration:underline;text-underline-offset:2px;cursor:pointer;padding:2px}\nbody[data-tema=\"dark\"] #telaLogin .lg-criar button{color:#7fd4e8}\n#barraLogin .bl-eng{font-size:14px;padding:4px 9px;line-height:1}\n#telaConfig{position:fixed;inset:0;z-index:210;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaConfig .cf-card{background:#fff;color:#1f2933;width:100%;max-width:620px;max-height:82vh;overflow-y:auto;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.32)}\n#telaConfig .cf-topo{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}\n#telaConfig h3{margin:0;font-size:16px;color:#0b4f6c}\n#telaConfig .cf-item{display:flex;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid #eef2f1;flex-wrap:wrap}\n#telaConfig .cf-quem{flex:1;min-width:150px;line-height:1.25}\n#telaConfig .cf-quem b{display:block;font-size:12.5px}\n#telaConfig .cf-quem span{display:block;font-size:10.5px;color:#6b7280;word-break:break-all}\n#telaConfig select{font-size:11.5px;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933}\n#telaConfig .cf-nota{font-size:11px;color:#6b7280;line-height:1.5;margin:14px 0 0;border-top:1px solid #eef2f1;padding-top:12px}\nbody[data-tema=\"dark\"] #telaConfig .cf-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaConfig h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaConfig .cf-item{border-bottom-color:#24313a}\nbody[data-tema=\"dark\"] #telaConfig select{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaConfig .cf-nota,body[data-tema=\"dark\"] #telaConfig .cf-quem span{color:#93a4ad;border-top-color:#24313a}\n#telaConfig .cf-card{max-width:700px}\n#telaConfig .cf-quem{min-width:130px}\n#telaConfig select{max-width:130px}\n#telaConfig .cf-nome{width:100%;box-sizing:border-box;font-size:12.5px;font-weight:700;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933;margin-bottom:2px}\n#telaConfig .cf-nome:focus{outline:none;border-color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaConfig .cf-nome{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\n#telaConfig .cf-nome{width:100%;box-sizing:border-box;font-size:12.5px;font-weight:700;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933;margin-bottom:2px}\n#telaConfig .cf-nome:focus{outline:none;border-color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaConfig .cf-nome{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\n#telaSenha{position:fixed;inset:0;z-index:215;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaSenha .lg-card{background:#fff;color:#1f2933;width:100%;max-width:330px;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.3);text-align:center}\n#telaSenha h3{margin:0 0 2px;font-size:16px;color:#0b4f6c}\n#telaSenha .lg-sub{margin:0 0 16px;font-size:11px;color:#6b7280;word-break:break-all}\n#telaSenha label{display:block;text-align:left;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px}\n#telaSenha input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaSenha input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaSenha .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;text-align:left;margin:-6px 0 8px}\n#telaSenha .lg-acoes{display:flex;justify-content:space-between;align-items:center}\nbody[data-tema=\"dark\"] #telaSenha .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaSenha h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaSenha input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaSenha .lg-erro{color:#ff8a80}\nbody.somente-leitura #telaSenha .btn{display:inline-block!important}\n#locationFilter optgroup{font-style:normal;font-weight:700;color:#0b4f6c}\nbody[data-tema=\"dark\"] #locationFilter optgroup{color:#7fd4e8}\n#cartazBox{grid-column:1/-1}\n#cartazBox .cz-atual{display:flex;align-items:center;gap:10px;margin:2px 0 8px;padding:8px;border:1px solid #e2e8e6;border-radius:8px;background:#f7faf9}\n#cartazBox .cz-atual img{max-width:74px;max-height:74px;border-radius:5px;display:block;object-fit:cover}\n#cartazBox .cz-pdf{font-size:12px;color:#0b4f6c;text-decoration:none;font-weight:600;white-space:nowrap}\n#cartazBox .cz-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;align-items:flex-start}\n#cartazBox .cz-info span{font-size:11px;color:#6b7280;word-break:break-all;line-height:1.3}\n#cartazBox .cz-info button{font-size:10.5px;padding:3px 9px;border:1px solid #d9a5a0;background:#fff;color:#b3453b;border-radius:99px;cursor:pointer}\n#cartazBox .cz-info button:disabled{opacity:.5;cursor:default}\n#cartazBox input[type=file]{font-size:11.5px;width:100%;box-sizing:border-box}\n#cartazBox .cz-dica{font-size:10.5px;color:#6b7280;margin-top:4px;line-height:1.4}\nbody[data-tema=\"dark\"] #cartazBox .cz-atual{background:#1d272d;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #cartazBox .cz-pdf{color:#7fd4e8}\nbody[data-tema=\"dark\"] #cartazBox .cz-info span,body[data-tema=\"dark\"] #cartazBox .cz-dica{color:#93a4ad}\nbody[data-tema=\"dark\"] #cartazBox .cz-info button{background:#2a1f1f;border-color:#6b3b36;color:#ff8a80}\n#modalBackdrop,.modal-backdrop{overflow-y:auto!important;align-items:flex-start!important;padding:12px 0!important}\n#modalBackdrop>div,.modal-backdrop>div,.modal{max-height:92vh!important;overflow-y:auto!important;margin:auto!important}\n#modalBackdrop .field,.modal .field{margin-bottom:7px}\n#modalBackdrop label,.modal label{margin-bottom:2px;font-size:10.5px}\n#modalBackdrop input,#modalBackdrop select,#modalBackdrop textarea,.modal input,.modal select,.modal textarea{padding:6px 9px;font-size:13px}\n#modalBackdrop textarea,.modal textarea{min-height:48px;max-height:86px}\n#cartazBox .cz-atual{padding:6px;gap:8px;margin:2px 0 5px}\n#cartazBox .cz-atual img{max-width:52px;max-height:52px}\n#cartazBox .cz-dica{font-size:10px;margin-top:2px}";document.head.appendChild(st);})();

/* ===== SINCRONIZACAO NA NUVEM - IEADESGA ===== */
const SUPA_URL='https://sblvlwzhwtlgbbabhwhj.supabase.co';
const SUPA_KEY='sb_publishable_Obrj650fuqadUh4sQjWliA_U0LPE6zG';

let sb=null, usuario=null, perfil=null, pausado=false, idsRemotos=new Set();
let ultimoEstado={}, donos={}, chaveEventos=null, _origSet=null;
let CONGREGACOES=[], _rotuloTodas=null, _jaConferiu=false, _avisouCampos=false;
let _cartazPendente=null;

const NOMES_PAPEL={admin:'Secretaria Geral',secretario:'Secret\u00e1rio do Setor',secretario_congr:'Secret\u00e1rio de Congrega\u00e7\u00e3o',leitor:'Leitor'};

async function carregarPerfil(){
 perfil=null;
 if(!sb||!usuario)return;
 const r=await sb.from('perfis').select('nome,papel,setor,congregacao').eq('user_id',usuario.id).maybeSingle();
 if(!r.error&&r.data)perfil=r.data;
}

function textoFuncao(){
 if(!perfil)return 'Sem perfil definido';
 const base=NOMES_PAPEL[perfil.papel]||perfil.papel;
 if(perfil.papel==='secretario'&&perfil.setor)return 'Secret\u00e1rio \u2013 '+perfil.setor;
 if(perfil.papel==='secretario_congr'&&perfil.congregacao)return 'Secret\u00e1rio \u2013 '+perfil.congregacao;
 return base;
}

function carregarSDK(){return new Promise(function(ok,err){
 if(window.supabase&&window.supabase.createClient){ok();return}
 const s=document.createElement('script');
 s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
 s.onload=function(){ok()};
 s.onerror=function(){err()};
 document.head.appendChild(s);
});}

async function baixarNuvem(){
 if(!sb||pausado)return;
 const r=await sb.from('eventos').select('id,dados,criado_por');
 if(r.error){console.log('erro ao baixar:',r.error.message);return}
 donos={};
 r.data.forEach(function(x){donos[String(x.id)]=x.criado_por});
 idsRemotos=new Set(r.data.map(function(x){return String(x.id)}));
 const novos=r.data.map(function(x){
  const e=Object.assign({},x.dados);e.id=x.id;return e;
 });
 const iguais=JSON.stringify(novos)===JSON.stringify(events);
 ultimoEstado={};
 novos.forEach(function(e){ultimoEstado[String(e.id)]=JSON.stringify(e)});
 if(iguais)return;
 pausado=true;
 events.length=0;
 novos.forEach(function(e){events.push(e)});
 gravarLocal();
 pausado=false;
 render();
 if(typeof montarTodosChips==='function')montarTodosChips();
}

async function enviarNuvem(){
 if(!sb||!usuario||pausado)return;
 const atuais={}, mudados=[];
 events.forEach(function(e){
  const k=String(e.id), s=JSON.stringify(e);
  atuais[k]=s;
  if(ultimoEstado[k]!==s)mudados.push({id:k,dados:e,atualizado_em:new Date().toISOString()});
 });
 if(mudados.length){
  const r=await sb.from('eventos').upsert(mudados);
  if(r.error){avisarRecusa(r.error.message);await baixarNuvem();return}
 }
 const apagar=[];
 Object.keys(ultimoEstado).forEach(function(k){if(!(k in atuais))apagar.push(k)});
 if(apagar.length){
  const d=await sb.from('eventos').delete().in('id',apagar);
  if(d.error){avisarRecusa(d.error.message);await baixarNuvem();return}
 }
 ultimoEstado=atuais;
 idsRemotos=new Set(Object.keys(atuais));
}

function avisarRecusa(msg){
 if(!perfil){toast('Entre para editar a agenda');return}
 if(perfil.papel==='secretario'||perfil.papel==='secretario_congr'){
  toast('Voc\u00ea s\u00f3 pode alterar eventos criados por voc\u00ea, dentro do seu escopo.');
 }else{
  toast('Altera\u00e7\u00e3o recusada pelo servidor');
 }
 console.log('recusa do banco:',msg);
}

function gravarLocal(){
 try{
  if(chaveEventos&&_origSet)_origSet(chaveEventos,JSON.stringify(events));
 }catch(e){}
}

function instalarGancho(){
 _origSet=localStorage.setItem.bind(localStorage);
 localStorage.setItem=function(k,v){
  _origSet(k,v);
  try{
   const p=JSON.parse(v);
   if(Array.isArray(p)&&p.length&&p[0]&&p[0].date&&p[0].title){
    chaveEventos=k;
    aplicarCartazPendente();
    clearTimeout(window._tmrNuvem);
    window._tmrNuvem=setTimeout(enviarNuvem,300);
   }
  }catch(e){}
 };
}

function montarBarraLogin(){
 let box=document.getElementById('barraLogin');
 if(!box){
  box=document.createElement('div');
  box.id='barraLogin';
  (document.querySelector('.sidebar')||document.body).appendChild(box);
 }
 atualizarBarraLogin();
}

function atualizarBarraLogin(){
 const box=document.getElementById('barraLogin');
 if(!box)return;
 if(usuario){
  const nome=(perfil&&perfil.nome)?perfil.nome:usuario.email;
  const chave='<button type="button" class="chip bl-eng" onclick="abrirTrocaSenha()" title="Trocar minha senha">\ud83d\udd11</button>';
  const eng=(perfil&&perfil.papel==='admin')
   ?'<button type="button" class="chip bl-eng" onclick="abrirConfig()" title="Acessos da equipe">\u2699</button>'
   :'';
  box.innerHTML='<div class="bl-quem"><span class="bl-nome">'+nome+'</span>'+
   '<span class="bl-func">'+textoFuncao()+'</span></div>'+chave+eng+
   '<button type="button" class="chip" onclick="sairNuvem()">Sair</button>';
 }else{
  box.innerHTML='<button type="button" class="chip on bl-entrar" onclick="entrarNuvem()">Entrar</button>';
 }
 document.body.classList.toggle('somente-leitura',!usuario);
}

function entrarNuvem(){
 if(!sb){toast('Nuvem indispon\u00edvel');return}
 if(document.getElementById('telaLogin')){document.getElementById('loginEmail').focus();return}
 const bg=document.createElement('div');
 bg.id='telaLogin';
 bg.innerHTML=
  '<div class="lg-card" role="dialog" aria-modal="true" aria-label="Entrar na agenda">'+
   '<div class="lg-logo"></div>'+
   '<h3>Agenda Anual IEADESGA</h3>'+
   '<p class="lg-sub">Acesso restrito \u00e0 equipe</p>'+
   '<label for="loginEmail">E-mail</label>'+
   '<input id="loginEmail" type="email" autocomplete="username" spellcheck="false">'+
   '<label for="loginSenha">Senha</label>'+
   '<input id="loginSenha" type="password" autocomplete="current-password">'+
   '<div id="loginErro" class="lg-erro"></div>'+
   '<div class="lg-acoes">'+
    '<button type="button" class="btn lg-visitante" id="loginCancelar">Ver como visitante</button>'+
    '<button type="button" class="btn primary" id="loginOk">Entrar</button>'+
   '</div>'+
  '</div>';
 document.body.appendChild(bg);
 const caixa=bg.querySelector('.lg-logo');
 document.querySelectorAll('.brand img').forEach(function(img){
  const c=img.cloneNode(true);
  c.removeAttribute('style');
  caixa.appendChild(c);
 });
 if(!caixa.children.length)caixa.remove();
 document.getElementById('loginCancelar').onclick=fecharLogin;
 document.getElementById('loginOk').onclick=fazerLogin;
 bg.addEventListener('keydown',function(ev){
  if(ev.key==='Enter')fazerLogin();
 });
 setTimeout(function(){document.getElementById('loginEmail').focus()},60);
}

function fecharLogin(){
 const bg=document.getElementById('telaLogin');
 if(bg)bg.remove();
 try{sessionStorage.setItem('jaViuLogin','1')}catch(e){}
}

async function fazerLogin(){
 const em=document.getElementById('loginEmail'),
       se=document.getElementById('loginSenha'),
       er=document.getElementById('loginErro'),
       bt=document.getElementById('loginOk');
 if(!em.value.trim()){er.textContent='Informe o e-mail.';em.focus();return}
 if(!se.value){er.textContent='Informe a senha.';se.focus();return}
 er.textContent='';
 bt.disabled=true;bt.textContent='Verificando...';
 const r=await sb.auth.signInWithPassword({email:em.value.trim(),password:se.value});
 if(r.error){
  er.textContent='E-mail ou senha incorretos.';
  bt.disabled=false;bt.textContent='Entrar';
  se.value='';se.focus();
  return;
 }
 fecharLogin();
 await carregarPerfil();
 atualizarBarraLogin();
 toast('Bem-vindo, '+((perfil&&perfil.nome)?perfil.nome:'')+'!');
 baixarNuvem();
}

async function sairNuvem(){
 if(!sb)return;
 await sb.auth.signOut();
 toast('Voc\u00ea saiu');
}

async function iniciarNuvem(){
 try{await carregarSDK()}
 catch(e){toast('Sem internet - modo local');return}
 sb=window.supabase.createClient(SUPA_URL,SUPA_KEY);
 const s=await sb.auth.getSession();
 usuario=(s.data&&s.data.session)?s.data.session.user:null;
 sb.auth.onAuthStateChange(async function(_ev,sess){
  usuario=sess?sess.user:null;
  await carregarPerfil();
  atualizarBarraLogin();
  if(_ev==='PASSWORD_RECOVERY'){
   fecharLogin();
   try{sessionStorage.setItem('jaViuLogin','1')}catch(e){}
   setTimeout(function(){
    abrirTrocaSenha();
    toast('Defina sua nova senha');
   },400);
  }
 });
 await carregarPerfil();
 await carregarCongregacoes();
 injetarFiltroCongregacoes();
 ligarInjecaoNoRender();
 montarBarraLogin();
 instalarGancho();
 let jaViu=false;
 try{jaViu=!!sessionStorage.getItem('jaViuLogin')}catch(e){}
 if(!usuario&&!jaViu)setTimeout(entrarNuvem,300);
 await baixarNuvem();
 setInterval(baixarNuvem,15000);
}


function acharModal(){
 return document.getElementById('modalBackdrop')||document.querySelector('.modal-backdrop')||document.querySelector('.modal');
}

function travarModalLeitura(id){
 const m=acharModal();
 if(!m)return;
 let travar=false, motivo='';
 if(!usuario){travar=true}
 else if(perfil&&perfil.papel==='admin'){travar=false}
 else if(perfil&&(perfil.papel==='secretario'||perfil.papel==='secretario_congr')){
  if(id&&donos[String(id)]&&donos[String(id)]!==usuario.id){travar=true;motivo='outro'}
 }else{travar=true}
 m.querySelectorAll('button').forEach(function(b){
  const t=(b.textContent||'').toLowerCase();
  if(/excluir|apagar|remover|deletar|salvar|criar|adicionar/.test(t)){
   b.style.display=travar?'none':'';
  }
 });
 m.querySelectorAll('input,select,textarea').forEach(function(c){c.disabled=travar});
 if(!travar&&perfil&&(perfil.papel==='secretario'||perfil.papel==='secretario_congr'))fixarEscopo(m,!id);
}

function fixarEscopo(m,novo){
 const soCongr=(perfil.papel==='secretario_congr');
 const setorDest=soCongr
  ? (perfil.setor||setorDaCongregacao(perfil.congregacao))
  : perfil.setor;
 const cSetor=acharCampoSetor(m);
 if(cSetor&&setorDest){
  if(novo||soCongr)cSetor.value=setorDest;
  cSetor.disabled=true;
 }
 const cLocal=acharCampoCongregacao(m);
 if(cLocal&&perfil.congregacao){
  if(novo||soCongr)cLocal.value=perfil.congregacao;
  cLocal.disabled=true;
 }
}

function setorDaCongregacao(nome){
 const c=CONGREGACOES.filter(function(x){return x.nome===nome})[0];
 return c?c.setor:'';
}

function acharCampoCongregacao(m){
 const ids=['fLocation','fLocal','fCongregacao','fCongregation','fLocalidade'];
 for(let i=0;i<ids.length;i++){
  const el=document.getElementById(ids[i]);
  if(el)return el;
 }
 const labels=m.querySelectorAll('label');
 for(let i=0;i<labels.length;i++){
  const lb=labels[i];
  if(!/congrega|local/i.test(lb.textContent||''))continue;
  if(lb.htmlFor){
   const el=document.getElementById(lb.htmlFor);
   if(el)return el;
  }
  const cx=(lb.closest?lb.closest('.field'):null)||lb.parentElement;
  const el2=cx?cx.querySelector('select,input:not([type=hidden])'):null;
  if(el2)return el2;
 }
 const nomes=CONGREGACOES.map(function(c){return c.nome});
 const cand=m.querySelectorAll('select,input');
 for(let i=0;i<cand.length;i++){
  if(cand[i].value&&nomes.indexOf(cand[i].value)>=0)return cand[i];
 }
 return null;
}

function acharCampoSetor(m){
 const ids=['fSetor','fSector'];
 for(let i=0;i<ids.length;i++){
  const el=document.getElementById(ids[i]);
  if(el)return el;
 }
 const labels=m?m.querySelectorAll('label'):[];
 for(let i=0;i<labels.length;i++){
  const lb=labels[i];
  const t=(lb.textContent||'');
  if(!/setor/i.test(t)||/\u00e2mbito|ambito/i.test(t))continue;
  if(lb.htmlFor){
   const el=document.getElementById(lb.htmlFor);
   if(el)return el;
  }
  const cx=(lb.closest?lb.closest('.field'):null)||lb.parentElement;
  const el2=cx?cx.querySelector('select,input'):null;
  if(el2)return el2;
 }
 return null;
}

try{
 if(typeof openModal==='function'){
  const _abrir=openModal;
  openModal=function(id){
   if(!usuario&&!id){toast('Entre para criar eventos');return}
   _abrir.apply(null,arguments);
   setTimeout(function(){
    const m=acharModal();
    if(m)prepararCongregacaoModal(m);
    travarModalLeitura(id);
    if(m)prepararCartaz(m,id);
    if(m)ocultarCampos(m);
   },40);
  };
 }
}catch(e){console.log('nao foi possivel proteger o modal:',e.message)}


/* ---------- cadastro de conta ---------- */
function abrirCadastro(){
 fecharLogin();
 const bg=document.createElement('div');
 bg.id='telaLogin';
 bg.innerHTML=
  '<div class="lg-card">'+
   '<h3>Criar conta</h3>'+
   '<p class="lg-sub">Depois de criar, pe\u00e7a ao administrador para liberar seu acesso.</p>'+
   '<label for="cadNome">Nome completo</label>'+
   '<input id="cadNome" type="text">'+
   '<label for="cadEmail">E-mail</label>'+
   '<input id="cadEmail" type="email" autocomplete="username" spellcheck="false">'+
   '<label for="cadSenha">Senha (m\u00ednimo 6 caracteres)</label>'+
   '<input id="cadSenha" type="password" autocomplete="new-password">'+
   '<div id="cadErro" class="lg-erro"></div>'+
   '<div class="lg-acoes">'+
    '<button type="button" class="btn lg-visitante" id="cadVoltar">Voltar</button>'+
    '<button type="button" class="btn primary" id="cadOk">Criar conta</button>'+
   '</div>'+
  '</div>';
 document.body.appendChild(bg);
 document.getElementById('cadVoltar').onclick=function(){bg.remove();entrarNuvem()};
 document.getElementById('cadOk').onclick=fazerCadastro;
 bg.addEventListener('keydown',function(ev){if(ev.key==='Enter')fazerCadastro()});
 setTimeout(function(){document.getElementById('cadNome').focus()},60);
}

async function fazerCadastro(){
 const no=document.getElementById('cadNome'),
       em=document.getElementById('cadEmail'),
       se=document.getElementById('cadSenha'),
       er=document.getElementById('cadErro'),
       bt=document.getElementById('cadOk');
 if(!no.value.trim()){er.textContent='Informe seu nome.';no.focus();return}
 if(!em.value.trim()){er.textContent='Informe o e-mail.';em.focus();return}
 if(se.value.length<6){er.textContent='A senha precisa ter ao menos 6 caracteres.';se.focus();return}
 er.textContent='';bt.disabled=true;bt.textContent='Criando...';
 const r=await sb.auth.signUp({
  email:em.value.trim(),
  password:se.value,
  options:{data:{nome:no.value.trim()}}
 });
 if(r.error){
  er.textContent=r.error.message;
  bt.disabled=false;bt.textContent='Criar conta';
  return;
 }
 document.getElementById('telaLogin').remove();
 toast('Conta criada! Aguarde a libera\u00e7\u00e3o do administrador.');
 try{sessionStorage.setItem('jaViuLogin','1')}catch(e){}
}

/* ---------- painel de configuracoes ---------- */
const PAPEIS=['admin','secretario','secretario_congr','leitor'];
const SETORES=['','Sede','Setor 1','Setor 2','Setor 3','Setor 4','Setor 5'];

function listaCongregacoes(){
 const fora=[''];
 CONGREGACOES.forEach(function(c){if(fora.indexOf(c.nome)<0)fora.push(c.nome)});
 if(fora.length>1)return fora;
 const sel=document.getElementById('locationFilter');
 if(!sel)return fora;
 for(let i=0;i<sel.options.length;i++){
  const v=sel.options[i].value;
  if(v&&fora.indexOf(v)<0)fora.push(v);
 }
 return fora;
}

function opcoesSetor(papel,atual){
 atual=atual||'';
 let vazio='\u2013 todos do campo';
 if(papel==='secretario')vazio='\u2013 selecione o setor';
 if(papel==='secretario_congr')vazio='\u2013 selecione o setor';
 let html='<option value=""'+(atual===''?' selected':'')+'>'+vazio+'</option>';
 SETORES.forEach(function(x){
  if(!x)return;
  html+='<option value="'+x+'"'+(atual===x?' selected':'')+'>'+x+'</option>';
 });
 return html;
}

function opcoesCongr(papel,setor,atual){
 atual=atual||'';
 const todas=CONGREGACOES.map(function(c){return c.nome});
 let lista, vazio;
 if(papel==='admin'){
  lista=todas;
  vazio='\u2013 todas do campo';
 }else if(!setor){
  lista=[];
  vazio='\u2013 selecione o setor primeiro';
 }else if(papel==='secretario_congr'){
  lista=CONGREGACOES.filter(function(c){return c.setor===setor})
                    .map(function(c){return c.nome});
  vazio='\u2013 selecione a congrega\u00e7\u00e3o (obrigat\u00f3rio)';
 }else{
  lista=CONGREGACOES.filter(function(c){return c.setor===setor})
                    .map(function(c){return c.nome});
  vazio='\u2013 todas do setor';
 }
 const unica=(!atual&&papel!=='admin'&&lista.length===1)?lista[0]:null;
 let html='<option value=""'+((atual===''&&!unica)?' selected':'')+'>'+vazio+'</option>';
 lista.forEach(function(n){
  const marcado=(n===atual)||(n===unica);
  html+='<option value="'+n+'"'+(marcado?' selected':'')+'>'+n+'</option>';
 });
 if(atual&&lista.indexOf(atual)<0){
  html+='<option value="'+atual+'" selected>'+atual+' (fora do setor)</option>';
 }
 return html;
}

function rotuloPapel(x){
 if(x==='admin')return 'Secretaria Geral';
 if(x==='secretario')return 'Secret\u00e1rio de Setor';
 if(x==='secretario_congr')return 'Secret\u00e1rio de Congrega\u00e7\u00e3o';
 return 'Leitor';
}

function abrirConfig(){
 if(!sb||!perfil||perfil.papel!=='admin'){toast('Acesso restrito \u00e0 Secretaria Geral');return}
 if(document.getElementById('telaConfig'))return;
 const bg=document.createElement('div');
 bg.id='telaConfig';
 bg.innerHTML=
  '<div class="cf-card">'+
   '<div class="cf-topo"><h3>Acessos da equipe</h3>'+
   '<button type="button" class="chip" id="cfFechar">Fechar</button></div>'+
   '<div id="cfLista" class="cf-lista">Carregando...</div>'+
   '<p class="cf-nota">Para dar acesso a alguem: crie a conta no painel do Supabase, em <b>Authentication &rsaquo; Users</b>. '+
   'A pessoa aparece nesta lista automaticamente como <b>Leitor</b>; defina a fun\u00e7\u00e3o e o setor, e clique em Salvar.</p>'+
  '</div>';
 document.body.appendChild(bg);
 document.getElementById('cfFechar').onclick=function(){bg.remove()};
 carregarListaPerfis();
}

async function carregarListaPerfis(){
 const box=document.getElementById('cfLista');
 if(!box)return;
 const r=await sb.from('perfis').select('user_id,nome,email,papel,setor').order('nome');
 if(r.error){box.textContent='Erro ao carregar: '+r.error.message;return}
 if(!r.data.length){box.textContent='Nenhum perfil encontrado.';return}
 box.innerHTML='';
 r.data.forEach(function(p){
  const li=document.createElement('div');
  li.className='cf-item';
  const opP=PAPEIS.map(function(x){
   return '<option value="'+x+'"'+(p.papel===x?' selected':'')+'>'+rotuloPapel(x)+'</option>';
  }).join('');
  const opS=opcoesSetor(p.papel,p.setor);
  const opC=opcoesCongr(p.papel,p.setor,p.congregacao);
  li.innerHTML=
   '<div class="cf-quem"><input class="cf-nome" type="text" value="'+(p.nome||'').replace(/"/g,'&quot;')+'" placeholder="Nome completo">'+
   '<span>'+(p.email||'')+'</span></div>'+
   '<select class="cf-papel">'+opP+'</select>'+
   '<select class="cf-setor">'+opS+'</select>'+
   '<select class="cf-congr">'+opC+'</select>'+
   '<button type="button" class="chip cf-salvar">Salvar</button>';
  const selPap=li.querySelector('.cf-papel'),
        selSet=li.querySelector('.cf-setor'),
        selCon=li.querySelector('.cf-congr');
  selSet.addEventListener('change',function(){
   selCon.innerHTML=opcoesCongr(selPap.value,selSet.value,selCon.value);
  });
  selPap.addEventListener('change',function(){
   const ehAdmin=(selPap.value==='admin');
   const set=ehAdmin?'':selSet.value;
   const con=ehAdmin?'':selCon.value;
   selSet.innerHTML=opcoesSetor(selPap.value,set);
   selCon.innerHTML=opcoesCongr(selPap.value,set,con);
   if(ehAdmin){selSet.value='';selCon.value=''}
  });
  li.querySelector('.cf-salvar').onclick=async function(ev){
   const bt=ev.currentTarget;
   const papel=li.querySelector('.cf-papel').value;
   const setor=li.querySelector('.cf-setor').value||null;
   const congregacao=li.querySelector('.cf-congr').value||null;
   const nome=li.querySelector('.cf-nome').value.trim()||null;
   if(papel==='secretario_congr'&&!congregacao){
    toast('Secret\u00e1rio de Congrega\u00e7\u00e3o precisa de uma congrega\u00e7\u00e3o definida.');
    return;
   }
   if(papel==='secretario'&&!setor){
    toast('Secret\u00e1rio de Setor precisa de um setor definido.');
    return;
   }
   bt.disabled=true;bt.textContent='...';
   const u=await sb.from('perfis').update({nome:nome,papel:papel,setor:setor,congregacao:congregacao}).eq('user_id',p.user_id);
   bt.disabled=false;bt.textContent='Salvar';
   if(u.error){toast('Erro: '+u.error.message);return}
   toast('Acesso atualizado');
   if(p.user_id===usuario.id){await carregarPerfil();atualizarBarraLogin()}
  };
  box.appendChild(li);
 });
}


/* ---------- congregacoes oficiais ---------- */
async function carregarCongregacoes(){
 if(!sb)return;
 const r=await sb.from('congregacoes').select('nome,setor,ordem').order('setor').order('ordem');
 if(r.error){console.log('congregacoes:',r.error.message);return}
 CONGREGACOES=r.data||[];
}

function congregacoesDoSetor(setor){
 if(!setor)return CONGREGACOES.map(function(c){return c.nome});
 const f=CONGREGACOES.filter(function(c){return c.setor===setor});
 return (f.length?f:CONGREGACOES).map(function(c){return c.nome});
}

function injetarFiltroCongregacoes(){
 const sel=document.getElementById('locationFilter');
 if(!sel||!CONGREGACOES.length)return;
 const atual=sel.value;
 if(!_rotuloTodas&&sel.options.length)_rotuloTodas=sel.options[0].textContent;
 const oficiais=CONGREGACOES.map(function(c){return c.nome});
 let html='<option value="">'+(_rotuloTodas||'Todas as congrega\u00e7\u00f5es')+'</option>';
 let grupo=null;
 CONGREGACOES.forEach(function(c){
  if(c.setor!==grupo){
   if(grupo!==null)html+='</optgroup>';
   html+='<optgroup label="'+c.setor+'">';
   grupo=c.setor;
  }
  html+='<option value="'+c.nome+'">'+c.nome+'</option>';
 });
 if(grupo!==null)html+='</optgroup>';
 sel.innerHTML=html;
 sel.value=atual;
 if(sel.value!==atual)sel.value='';
 conferirDivergentes(oficiais);
}

function conferirDivergentes(oficiais){
 if(_jaConferiu)return;
 const fora=[];
 events.forEach(function(e){
  if(e.location&&oficiais.indexOf(e.location)<0&&fora.indexOf(e.location)<0)fora.push(e.location);
 });
 if(!fora.length){_jaConferiu=true;return}
 if(!perfil||perfil.papel!=='admin')return;
 _jaConferiu=true;
 console.log('Congregacoes fora da lista oficial:',fora);
 toast(fora.length+' congrega\u00e7\u00e3o(\u00f5es) em eventos antigos n\u00e3o est\u00e3o na lista oficial: '+fora.join(', '));
}

function ligarInjecaoNoRender(){
 try{
  if(typeof render!=='function')return;
  const _r=render;
  render=function(){
   _r.apply(null,arguments);
   injetarFiltroCongregacoes();
   if(typeof montarTodosChips==='function')montarTodosChips();
   if(typeof montarChipsSetor==='function')montarChipsSetor();
  };
 }catch(e){console.log('nao foi possivel ligar no render:',e.message)}
}

function prepararCongregacaoModal(m){
 if(!CONGREGACOES.length)return;
 const campo=acharCampoCongregacao(m);
 const cSetor=acharCampoSetor(m);
 if(!_avisouCampos){
  _avisouCampos=true;
  console.log('[nuvem] campo congregacao:',campo?(campo.id||campo.tagName+'/'+campo.name):'NAO ENCONTRADO',
              '| campo setor:',cSetor?(cSetor.id||cSetor.tagName):'NAO ENCONTRADO');
 }
 if(!campo)return;

 function permitidas(setor){
  if(!setor)return [];
  const f=CONGREGACOES.filter(function(c){return c.setor===setor})
                      .map(function(c){return c.nome});
  return f;
 }

 function atualizar(){
  const setor=cSetor?cSetor.value:'';
  const lista=permitidas(setor);
  let atual=campo.value;
  const conhecida=CONGREGACOES.some(function(c){return c.nome===atual});
  if(atual&&setor&&conhecida&&lista.indexOf(atual)<0){atual='';campo.value=''}
  if(campo.tagName==='SELECT'){
   const legado=(atual&&!conhecida)?atual:null;
   let html='<option value="">'+(setor?'Escolha a congrega\u00e7\u00e3o':'Escolha o setor primeiro')+'</option>';
   lista.forEach(function(n){html+='<option value="'+n+'">'+n+'</option>'});
   if(legado)html+='<option value="'+legado+'">'+legado+'</option>';
   if(campo.innerHTML!==html){
    campo.innerHTML=html;
    const alvo=atual||((lista.length===1)?lista[0]:'');
    campo.value=alvo;
   }
  }else{
   let dl=document.getElementById('listaCongr');
   if(!dl){dl=document.createElement('datalist');dl.id='listaCongr';document.body.appendChild(dl)}
   const html=lista.map(function(n){return '<option value="'+n+'">'}).join('');
   if(dl.innerHTML!==html)dl.innerHTML=html;
   campo.setAttribute('list','listaCongr');
   if(!campo.value&&lista.length===1)campo.value=lista[0];
  }
 }

 atualizar();
 setTimeout(atualizar,200);

 if(campo.tagName==='SELECT'&&!campo._vigia){
  campo._vigia=new MutationObserver(function(){
   clearTimeout(campo._tm);
   campo._tm=setTimeout(atualizar,20);
  });
  campo._vigia.observe(campo,{childList:true});
 }
 if(cSetor&&!cSetor._ligadoCongr){
  cSetor._ligadoCongr=true;
  cSetor.addEventListener('change',atualizar);
  cSetor.addEventListener('input',atualizar);
 }
}


/* ---------- trocar a propria senha ---------- */
function abrirTrocaSenha(){
 if(!sb||!usuario){toast('Entre para trocar a senha');return}
 if(document.getElementById('telaSenha'))return;
 const bg=document.createElement('div');
 bg.id='telaSenha';
 bg.innerHTML=
  '<div class="lg-card">'+
   '<h3>Trocar minha senha</h3>'+
   '<p class="lg-sub">'+usuario.email+'</p>'+
   '<label for="snNova">Nova senha (m\u00ednimo 6 caracteres)</label>'+
   '<input id="snNova" type="password" autocomplete="new-password">'+
   '<label for="snRepete">Repita a nova senha</label>'+
   '<input id="snRepete" type="password" autocomplete="new-password">'+
   '<div id="snErro" class="lg-erro"></div>'+
   '<div class="lg-acoes">'+
    '<button type="button" class="btn lg-visitante" id="snCancelar">Cancelar</button>'+
    '<button type="button" class="btn primary" id="snOk">Salvar senha</button>'+
   '</div>'+
  '</div>';
 document.body.appendChild(bg);
 document.getElementById('snCancelar').onclick=function(){bg.remove()};
 document.getElementById('snOk').onclick=salvarSenha;
 bg.addEventListener('keydown',function(ev){
  if(ev.key==='Enter')salvarSenha();
  if(ev.key==='Escape')bg.remove();
 });
 setTimeout(function(){document.getElementById('snNova').focus()},60);
}

async function salvarSenha(){
 const a=document.getElementById('snNova'),
       b=document.getElementById('snRepete'),
       er=document.getElementById('snErro'),
       bt=document.getElementById('snOk');
 if(a.value.length<6){er.textContent='A senha precisa ter ao menos 6 caracteres.';a.focus();return}
 if(a.value!==b.value){er.textContent='As duas senhas n\u00e3o s\u00e3o iguais.';b.value='';b.focus();return}
 er.textContent='';bt.disabled=true;bt.textContent='Salvando...';
 const r=await sb.auth.updateUser({password:a.value});
 if(r.error){
  er.textContent=r.error.message;
  bt.disabled=false;bt.textContent='Salvar senha';
  return;
 }
 document.getElementById('telaSenha').remove();
 toast('Senha alterada com sucesso!');
}


/* ---------- cartaz de divulgacao ---------- */
const CARTAZ_MAX = 8 * 1024 * 1024;

function urlCartaz(caminho){
 if(!sb||!caminho)return '';
 const r=sb.storage.from('cartazes').getPublicUrl(caminho);
 return (r&&r.data)?r.data.publicUrl:'';
}

function nomeSeguro(nome){
 const p=nome.lastIndexOf('.');
 const ext=(p>0?nome.slice(p+1):'bin').toLowerCase().replace(/[^a-z0-9]/g,'');
 const base=(p>0?nome.slice(0,p):nome)
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40) || 'cartaz';
 return Date.now()+'-'+Math.random().toString(36).slice(2,7)+'-'+base+'.'+ext;
}

function prepararCartaz(m,id){
 const antigo=document.getElementById('cartazBox');
 if(antigo)antigo.remove();
 if(!sb)return;

 const ev=id?events.filter(function(e){return String(e.id)===String(id)})[0]:null;
 const atual=(ev&&ev.cartaz)?ev.cartaz:null;
 const podeEditar=!!usuario&&!(m.querySelector('input[disabled]'));

 const box=document.createElement('div');
 box.id='cartazBox';
 box.className='field';
 let html='<label>Cartaz de divulga\u00e7\u00e3o</label>';
 if(atual){
  const u=urlCartaz(atual.caminho);
  const img=/^image\//.test(atual.tipo||'');
  html+='<div class="cz-atual">';
  if(img)html+='<a href="'+u+'" target="_blank" rel="noopener"><img src="'+u+'" alt="Cartaz"></a>';
  else html+='<a class="cz-pdf" href="'+u+'" target="_blank" rel="noopener">\ud83d\udcc4 Abrir PDF</a>';
  html+='<div class="cz-info"><span>'+(atual.nome||'arquivo')+'</span>';
  if(podeEditar)html+='<button type="button" id="czRemover">Remover</button>';
  html+='</div></div>';
 }
 if(podeEditar){
  html+='<input type="file" id="czArquivo" accept="application/pdf,image/jpeg,image/png">';
  html+='<div class="cz-dica">PDF, JPG ou PNG \u2013 at\u00e9 8 MB. O cartaz \u00e9 salvo junto com o evento.</div>';
 }else if(!atual){
  html+='<div class="cz-dica">Nenhum cartaz anexado.</div>';
 }
 box.innerHTML=html;

 const destino=m.querySelector('.form-grid')||m.querySelector('form')||m.querySelector('.modal')||m;
 destino.appendChild(box);

 const inp=document.getElementById('czArquivo');
 if(inp)inp.addEventListener('change',function(){enviarCartaz(inp,id)});
 const rm=document.getElementById('czRemover');
 if(rm)rm.addEventListener('click',function(){_cartazPendente={alvo:id,remover:true};toast('Cartaz ser\u00e1 removido ao salvar o evento.');rm.disabled=true});
}

async function enviarCartaz(inp,id){
 const f=inp.files&&inp.files[0];
 if(!f)return;
 if(f.size>CARTAZ_MAX){toast('Arquivo muito grande (limite 8 MB).');inp.value='';return}
 const ok=['application/pdf','image/jpeg','image/png'];
 if(ok.indexOf(f.type)<0){toast('Use PDF, JPG ou PNG.');inp.value='';return}
 inp.disabled=true;
 toast('Enviando cartaz...');
 const caminho=nomeSeguro(f.name);
 const r=await sb.storage.from('cartazes').upload(caminho,f,{contentType:f.type});
 inp.disabled=false;
 if(r.error){toast('Falha ao enviar: '+r.error.message);inp.value='';return}
 _cartazPendente={alvo:id,caminho:caminho,nome:f.name,tipo:f.type};
 toast('Cartaz enviado. Clique em Salvar para anexar ao evento.');
}

function aplicarCartazPendente(){
 if(!_cartazPendente)return;
 let idx=-1;
 if(_cartazPendente.alvo){
  for(let i=0;i<events.length;i++){
   if(String(events[i].id)===String(_cartazPendente.alvo)){idx=i;break}
  }
 }else{
  for(let i=events.length-1;i>=0;i--){
   if(!(String(events[i].id) in ultimoEstado)){idx=i;break}
  }
 }
 if(idx<0)return;
 if(_cartazPendente.remover)delete events[idx].cartaz;
 else events[idx].cartaz={caminho:_cartazPendente.caminho,nome:_cartazPendente.nome,tipo:_cartazPendente.tipo};
 _cartazPendente=null;
 gravarLocal();
}


/* ---------- enxugar o formulario ---------- */
const CAMPOS_OCULTOS=/recorr|repet|respons/i;

function ocultarCampos(m){
 if(!m)return;
 const labels=m.querySelectorAll('label');
 for(let i=0;i<labels.length;i++){
  const lb=labels[i];
  if(!CAMPOS_OCULTOS.test(lb.textContent||''))continue;
  const cx=(lb.closest?lb.closest('.field'):null)||lb.parentElement;
  if(cx&&cx.id!=='cartazBox')cx.style.display='none';
 }
}

iniciarNuvem();
