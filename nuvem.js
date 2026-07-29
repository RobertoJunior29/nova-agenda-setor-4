/* Sincronizacao na nuvem - IEADESGA - v18 */
(function(){var st=document.createElement('style');st.textContent=".app{padding-top:26px!important;box-sizing:border-box}\n#barraLogin{position:fixed;top:3px;right:14px;z-index:60;display:flex;align-items:center;gap:8px}\n#barraLogin .bl-quem{font-size:11px;line-height:1.25;text-align:right;color:#3c4a52}\n#barraLogin .bl-nome{font-weight:700;display:block}\n#barraLogin .bl-func{font-size:10px;color:#6b7280;display:block}\nbody[data-tema=\"dark\"] #barraLogin .bl-quem{color:#c3d1d8}\nbody[data-tema=\"dark\"] #barraLogin .bl-func{color:#93a4ad}\n#barraLogin .chip{white-space:nowrap}\n.somente-leitura .btn.primary{display:none!important}\n.somente-leitura .month-cell{cursor:default!important}\n#barraLogin .bl-entrar{font-size:13px;font-weight:700;padding:6px 18px;letter-spacing:.3px}\n#telaLogin{position:fixed;inset:0;z-index:200;background:rgba(10,20,26,.55);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaLogin .lg-card{background:#fff;color:#1f2933;width:100%;max-width:340px;border-radius:12px;padding:22px 22px 18px;box-shadow:0 18px 50px rgba(0,0,0,.3)}\n#telaLogin h3{margin:0;font-size:17px;color:#0b4f6c}\n#telaLogin .lg-sub{margin:4px 0 16px;font-size:11.5px;color:#6b7280}\n#telaLogin label{display:block;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px;letter-spacing:.3px}\n#telaLogin input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaLogin input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaLogin .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;margin:-6px 0 8px}\n#telaLogin .lg-acoes{display:flex;gap:8px;justify-content:flex-end}\nbody[data-tema=\"dark\"] #telaLogin .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaLogin h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaLogin input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaLogin .lg-erro{color:#ff8a80}\n#telaLogin .lg-card{text-align:center}\n#telaLogin .lg-logo{margin:0 0 12px}\n#telaLogin .lg-logo img{max-width:190px;max-height:105px;width:auto;height:auto;object-fit:contain;margin:0 auto;background:transparent!important;padding:0!important;border-radius:0!important}\n#telaLogin h3{font-size:16px;letter-spacing:.2px}\n#telaLogin .lg-sub{margin:3px 0 18px}\n#telaLogin label{text-align:left}\n#telaLogin .lg-erro{text-align:left}\nbody.somente-leitura #telaLogin .btn.primary{display:inline-block!important}\nbody.somente-leitura #telaLogin .btn{display:inline-block!important}\n#telaLogin .lg-acoes{justify-content:space-between;align-items:center;margin-top:2px}\n#telaLogin .lg-visitante{background:transparent;border:1px solid transparent;color:#6b7280;font-size:11.5px;padding:6px 2px;text-decoration:underline;text-underline-offset:2px}\n#telaLogin .lg-visitante:hover{color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaLogin .lg-visitante{color:#93a4ad}\nbody[data-tema=\"dark\"] #telaLogin .lg-visitante:hover{color:#7fd4e8}\n#telaLogin #loginOk{padding:8px 22px;font-weight:700}\n#telaLogin{background:rgba(8,16,21,.82);backdrop-filter:blur(4px)}\n#telaLogin .lg-criar{text-align:center;margin:-2px 0 12px}\n#telaLogin .lg-criar button{background:none;border:none;color:#0b4f6c;font-size:11.5px;text-decoration:underline;text-underline-offset:2px;cursor:pointer;padding:2px}\nbody[data-tema=\"dark\"] #telaLogin .lg-criar button{color:#7fd4e8}\n#barraLogin .bl-eng{font-size:14px;padding:4px 9px;line-height:1}\n#telaConfig{position:fixed;inset:0;z-index:210;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaConfig .cf-card{background:#fff;color:#1f2933;width:100%;max-width:620px;max-height:82vh;overflow-y:auto;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.32)}\n#telaConfig .cf-topo{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}\n#telaConfig h3{margin:0;font-size:16px;color:#0b4f6c}\n#telaConfig .cf-item{display:flex;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid #eef2f1;flex-wrap:wrap}\n#telaConfig .cf-quem{flex:1;min-width:150px;line-height:1.25}\n#telaConfig .cf-quem b{display:block;font-size:12.5px}\n#telaConfig .cf-quem span{display:block;font-size:10.5px;color:#6b7280;word-break:break-all}\n#telaConfig select{font-size:11.5px;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933}\n#telaConfig .cf-nota{font-size:11px;color:#6b7280;line-height:1.5;margin:14px 0 0;border-top:1px solid #eef2f1;padding-top:12px}\nbody[data-tema=\"dark\"] #telaConfig .cf-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaConfig h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaConfig .cf-item{border-bottom-color:#24313a}\nbody[data-tema=\"dark\"] #telaConfig select{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaConfig .cf-nota,body[data-tema=\"dark\"] #telaConfig .cf-quem span{color:#93a4ad;border-top-color:#24313a}\n#telaConfig .cf-card{max-width:700px}\n#telaConfig .cf-quem{min-width:130px}\n#telaConfig select{max-width:130px}\n#telaConfig .cf-nome{width:100%;box-sizing:border-box;font-size:12.5px;font-weight:700;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933;margin-bottom:2px}\n#telaConfig .cf-nome:focus{outline:none;border-color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaConfig .cf-nome{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\n#telaConfig .cf-nome{width:100%;box-sizing:border-box;font-size:12.5px;font-weight:700;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933;margin-bottom:2px}\n#telaConfig .cf-nome:focus{outline:none;border-color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaConfig .cf-nome{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\n#telaSenha{position:fixed;inset:0;z-index:215;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaSenha .lg-card{background:#fff;color:#1f2933;width:100%;max-width:330px;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.3);text-align:center}\n#telaSenha h3{margin:0 0 2px;font-size:16px;color:#0b4f6c}\n#telaSenha .lg-sub{margin:0 0 16px;font-size:11px;color:#6b7280;word-break:break-all}\n#telaSenha label{display:block;text-align:left;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px}\n#telaSenha input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaSenha input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaSenha .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;text-align:left;margin:-6px 0 8px}\n#telaSenha .lg-acoes{display:flex;justify-content:space-between;align-items:center}\nbody[data-tema=\"dark\"] #telaSenha .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaSenha h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaSenha input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaSenha .lg-erro{color:#ff8a80}\nbody.somente-leitura #telaSenha .btn{display:inline-block!important}";document.head.appendChild(st);})();

/* ===== SINCRONIZACAO NA NUVEM - IEADESGA ===== */
const SUPA_URL='https://sblvlwzhwtlgbbabhwhj.supabase.co';
const SUPA_KEY='sb_publishable_Obrj650fuqadUh4sQjWliA_U0LPE6zG';

let sb=null, usuario=null, perfil=null, pausado=false, idsRemotos=new Set();
let ultimoEstado={}, donos={}, chaveEventos=null, _origSet=null;
let CONGREGACOES=[];

const NOMES_PAPEL={admin:'Administrador',secretario:'Secret\u00e1rio do Setor',leitor:'Leitor'};

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
 if(perfil.papel==='secretario'){
  toast('Voc\u00ea s\u00f3 pode alterar eventos criados por voc\u00ea, do seu setor e congrega\u00e7\u00e3o.');
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
   ?'<button type="button" class="chip bl-eng" onclick="abrirConfig()" title="Configura\u00e7\u00f5es de acesso">\u2699</button>'
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
 else if(perfil&&perfil.papel==='secretario'){
  if(id&&donos[String(id)]&&donos[String(id)]!==usuario.id){travar=true;motivo='outro'}
 }else{travar=true}
 m.querySelectorAll('button').forEach(function(b){
  const t=(b.textContent||'').toLowerCase();
  if(/excluir|apagar|remover|deletar|salvar|criar|adicionar/.test(t)){
   b.style.display=travar?'none':'';
  }
 });
 m.querySelectorAll('input,select,textarea').forEach(function(c){c.disabled=travar});
 if(!travar&&perfil&&perfil.papel==='secretario')fixarEscopo(m,!id);
}

function fixarEscopo(m,novo){
 const cSetor=document.getElementById('fSetor');
 if(cSetor&&perfil.setor){
  if(novo)cSetor.value=perfil.setor;
  cSetor.disabled=true;
 }
 const cLocal=acharCampoCongregacao(m);
 if(cLocal&&perfil.congregacao){
  if(novo)cLocal.value=perfil.congregacao;
  cLocal.disabled=true;
 }
}

function acharCampoCongregacao(m){
 const direto=document.getElementById('fLocation')||document.getElementById('fLocal');
 if(direto)return direto;
 const campos=m.querySelectorAll('.field');
 for(let i=0;i<campos.length;i++){
  const lb=campos[i].querySelector('label');
  if(lb&&/congrega/i.test(lb.textContent||'')){
   return campos[i].querySelector('input,select');
  }
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
const PAPEIS=['admin','secretario','leitor'];
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

function rotuloPapel(x){
 if(x==='admin')return 'Administrador';
 if(x==='secretario')return 'Secret\u00e1rio';
 return 'Leitor';
}

function abrirConfig(){
 if(!sb||!perfil||perfil.papel!=='admin'){toast('Apenas administradores');return}
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
  const opS=SETORES.map(function(x){
   return '<option value="'+x+'"'+((p.setor||'')===x?' selected':'')+'>'+(x||'\u2013')+'</option>';
  }).join('');
  const opC=listaCongregacoes().map(function(x){
   return '<option value="'+x+'"'+((p.congregacao||'')===x?' selected':'')+'>'+(x||'\u2013')+'</option>';
  }).join('');
  li.innerHTML=
   '<div class="cf-quem"><input class="cf-nome" type="text" value="'+(p.nome||'').replace(/"/g,'&quot;')+'" placeholder="Nome completo">'+
   '<span>'+(p.email||'')+'</span></div>'+
   '<select class="cf-papel">'+opP+'</select>'+
   '<select class="cf-setor">'+opS+'</select>'+
   '<select class="cf-congr">'+opC+'</select>'+
   '<button type="button" class="chip cf-salvar">Salvar</button>';
  li.querySelector('.cf-salvar').onclick=async function(ev){
   const bt=ev.currentTarget;
   const papel=li.querySelector('.cf-papel').value;
   const setor=li.querySelector('.cf-setor').value||null;
   const congregacao=li.querySelector('.cf-congr').value||null;
   const nome=li.querySelector('.cf-nome').value.trim()||null;
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
 const atual=sel.value, tem=[];
 for(let i=0;i<sel.options.length;i++)tem.push(sel.options[i].value);
 CONGREGACOES.forEach(function(c){
  if(tem.indexOf(c.nome)<0){
   const o=document.createElement('option');
   o.value=c.nome;o.textContent=c.nome;
   sel.appendChild(o);
  }
 });
 sel.value=atual;
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
 if(!campo)return;
 const cSetor=document.getElementById('fSetor');
 function atualizar(){
  const setor=cSetor?cSetor.value:'';
  const lista=congregacoesDoSetor(setor);
  const atual=campo.value;
  if(campo.tagName==='SELECT'){
   let html='<option value=""></option>';
   lista.forEach(function(n){
    html+='<option value="'+n+'"'+(n===atual?' selected':'')+'>'+n+'</option>';
   });
   if(atual&&lista.indexOf(atual)<0){
    html+='<option value="'+atual+'" selected>'+atual+'</option>';
   }
   campo.innerHTML=html;
  }else{
   let dl=document.getElementById('listaCongr');
   if(!dl){dl=document.createElement('datalist');dl.id='listaCongr';document.body.appendChild(dl)}
   dl.innerHTML=lista.map(function(n){return '<option value="'+n+'">'}).join('');
   campo.setAttribute('list','listaCongr');
  }
 }
 atualizar();
 if(cSetor&&!cSetor._ligadoCongr){
  cSetor._ligadoCongr=true;
  cSetor.addEventListener('change',atualizar);
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

iniciarNuvem();
