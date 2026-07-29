/* Sincronizacao na nuvem - IEADESGA - v6 */
(function(){var st=document.createElement('style');st.textContent=".app{padding-top:26px!important;box-sizing:border-box}\n#barraLogin{position:fixed;top:3px;right:14px;z-index:60;display:flex;align-items:center;gap:8px}\n#barraLogin .bl-quem{font-size:11px;line-height:1.25;text-align:right;color:#3c4a52}\n#barraLogin .bl-nome{font-weight:700;display:block}\n#barraLogin .bl-func{font-size:10px;color:#6b7280;display:block}\nbody[data-tema=\"dark\"] #barraLogin .bl-quem{color:#c3d1d8}\nbody[data-tema=\"dark\"] #barraLogin .bl-func{color:#93a4ad}\n#barraLogin .chip{white-space:nowrap}\n.somente-leitura .btn.primary{display:none!important}\n.somente-leitura .month-cell{cursor:default!important}\n#barraLogin .bl-entrar{font-size:13px;font-weight:700;padding:6px 18px;letter-spacing:.3px}\n#telaLogin{position:fixed;inset:0;z-index:200;background:rgba(10,20,26,.55);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaLogin .lg-card{background:#fff;color:#1f2933;width:100%;max-width:340px;border-radius:12px;padding:22px 22px 18px;box-shadow:0 18px 50px rgba(0,0,0,.3)}\n#telaLogin h3{margin:0;font-size:17px;color:#0b4f6c}\n#telaLogin .lg-sub{margin:4px 0 16px;font-size:11.5px;color:#6b7280}\n#telaLogin label{display:block;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px;letter-spacing:.3px}\n#telaLogin input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaLogin input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaLogin .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;margin:-6px 0 8px}\n#telaLogin .lg-acoes{display:flex;gap:8px;justify-content:flex-end}\nbody[data-tema=\"dark\"] #telaLogin .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaLogin h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaLogin input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaLogin .lg-erro{color:#ff8a80}\n#telaLogin .lg-card{text-align:center}\n#telaLogin .lg-logo{margin:0 0 12px}\n#telaLogin .lg-logo img{max-width:190px;max-height:105px;width:auto;height:auto;object-fit:contain;margin:0 auto;background:transparent!important;padding:0!important;border-radius:0!important}\n#telaLogin h3{font-size:16px;letter-spacing:.2px}\n#telaLogin .lg-sub{margin:3px 0 18px}\n#telaLogin label{text-align:left}\n#telaLogin .lg-erro{text-align:left}";document.head.appendChild(st);})();

/* ===== SINCRONIZACAO NA NUVEM - IEADESGA ===== */
const SUPA_URL='https://sblvlwzhwtlgbbabhwhj.supabase.co';
const SUPA_KEY='sb_publishable_Obrj650fuqadUh4sQjWliA_U0LPE6zG';

let sb=null, usuario=null, perfil=null, pausado=false, idsRemotos=new Set();

const NOMES_PAPEL={admin:'Administrador',secretario:'Secret\u00e1rio do Setor',leitor:'Leitor'};

async function carregarPerfil(){
 perfil=null;
 if(!sb||!usuario)return;
 const r=await sb.from('perfis').select('nome,papel,setor').eq('user_id',usuario.id).maybeSingle();
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
 const r=await sb.from('eventos').select('id,dados');
 if(r.error){console.log('erro ao baixar:',r.error.message);return}
 idsRemotos=new Set(r.data.map(function(x){return String(x.id)}));
 const novos=r.data.map(function(x){
  const e=Object.assign({},x.dados);e.id=x.id;return e;
 });
 if(JSON.stringify(novos)===JSON.stringify(events))return;
 pausado=true;
 events.length=0;
 novos.forEach(function(e){events.push(e)});
 pausado=false;
 render();
 if(typeof montarTodosChips==='function')montarTodosChips();
}

async function enviarNuvem(){
 if(!sb||!usuario||pausado)return;
 const linhas=events.map(function(e){
  return {id:String(e.id),dados:e,atualizado_em:new Date().toISOString()};
 });
 if(linhas.length){
  const r=await sb.from('eventos').upsert(linhas);
  if(r.error){toast('Sem permiss\u00e3o para salvar este evento');return}
 }
 const locais=new Set(linhas.map(function(l){return l.id}));
 const apagar=[];
 idsRemotos.forEach(function(id){if(!locais.has(id))apagar.push(id)});
 if(apagar.length){
  const d=await sb.from('eventos').delete().in('id',apagar);
  if(d.error){toast('Sem permiss\u00e3o para excluir');return}
 }
 idsRemotos=locais;
}

function instalarGancho(){
 const orig=localStorage.setItem.bind(localStorage);
 localStorage.setItem=function(k,v){
  orig(k,v);
  try{
   const p=JSON.parse(v);
   if(Array.isArray(p)&&p.length&&p[0]&&p[0].date&&p[0].title){
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
  box.innerHTML='<div class="bl-quem"><span class="bl-nome">'+nome+'</span>'+
   '<span class="bl-func">'+textoFuncao()+'</span></div>'+
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
    '<button type="button" class="btn" id="loginCancelar">Cancelar</button>'+
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
 bg.addEventListener('click',function(ev){if(ev.target===bg)fecharLogin()});
 bg.addEventListener('keydown',function(ev){
  if(ev.key==='Enter')fazerLogin();
  if(ev.key==='Escape')fecharLogin();
 });
 setTimeout(function(){document.getElementById('loginEmail').focus()},60);
}

function fecharLogin(){
 const bg=document.getElementById('telaLogin');
 if(bg)bg.remove();
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
 });
 await carregarPerfil();
 montarBarraLogin();
 instalarGancho();
 await baixarNuvem();
 setInterval(baixarNuvem,15000);
}

iniciarNuvem();
