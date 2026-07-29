/* Sincronizacao na nuvem - IEADESGA - v4 */
(function(){var st=document.createElement('style');st.textContent=".app{padding-top:26px!important;box-sizing:border-box}\n#barraLogin{position:fixed;top:3px;right:14px;z-index:60;display:flex;align-items:center;gap:8px}\n#barraLogin .bl-quem{font-size:11px;line-height:1.25;text-align:right;color:#3c4a52}\n#barraLogin .bl-nome{font-weight:700;display:block}\n#barraLogin .bl-func{font-size:10px;color:#6b7280;display:block}\nbody[data-tema=\"dark\"] #barraLogin .bl-quem{color:#c3d1d8}\nbody[data-tema=\"dark\"] #barraLogin .bl-func{color:#93a4ad}\n#barraLogin .chip{white-space:nowrap}\n.somente-leitura .btn.primary{display:none!important}\n.somente-leitura .month-cell{cursor:default!important}\n#barraLogin .bl-entrar{font-size:13px;font-weight:700;padding:6px 18px;letter-spacing:.3px}";document.head.appendChild(st);})();

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

async function entrarNuvem(){
 if(!sb){toast('Nuvem indispon\u00edvel');return}
 const em=prompt('E-mail:');
 if(!em)return;
 const se=prompt('Senha:');
 if(!se)return;
 const r=await sb.auth.signInWithPassword({email:em.trim(),password:se});
 if(r.error){toast('E-mail ou senha incorretos');return}
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
