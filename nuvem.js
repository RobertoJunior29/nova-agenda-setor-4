/* Sincronizacao na nuvem - IEADESGA */
(function(){var st=document.createElement('style');st.textContent="#barraLogin{margin:auto 0 0;padding:10px 12px;border-top:1px solid #e2e8e6;display:flex;flex-direction:column;gap:6px;align-items:center}\n#barraLogin .bl-email{font-size:10px;color:#6b7280;text-align:center;word-break:break-all;line-height:1.3}\nbody[data-tema=\"dark\"] #barraLogin{border-top-color:#24313a}\nbody[data-tema=\"dark\"] #barraLogin .bl-email{color:#93a4ad}\n.sidebar{display:flex;flex-direction:column}\n.somente-leitura .btn.primary{display:none!important}\n.somente-leitura .month-cell{cursor:default!important}";document.head.appendChild(st);})();

/* ===== SINCRONIZACAO NA NUVEM - IEADESGA ===== */
const SUPA_URL='https://sblvlwzhwtlgbbabhwhj.supabase.co';
const SUPA_KEY='sb_publishable_Obrj650fuqadUh4sQjWliA_U0LPE6zG';

let sb=null, usuario=null, pausado=false, idsRemotos=new Set();

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
  if(r.error){toast('Sem permissao para salvar este evento');return}
 }
 const locais=new Set(linhas.map(function(l){return l.id}));
 const apagar=[];
 idsRemotos.forEach(function(id){if(!locais.has(id))apagar.push(id)});
 if(apagar.length){
  const d=await sb.from('eventos').delete().in('id',apagar);
  if(d.error){toast('Sem permissao para excluir');return}
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
  box.innerHTML='<div class="bl-email">'+usuario.email+'</div>'+
   '<button type="button" class="chip" onclick="sairNuvem()">Sair</button>';
 }else{
  box.innerHTML='<div class="bl-email">Somente leitura</div>'+
   '<button type="button" class="chip on" onclick="entrarNuvem()">Entrar para editar</button>';
 }
 document.body.classList.toggle('somente-leitura',!usuario);
}

async function entrarNuvem(){
 if(!sb){toast('Nuvem indisponivel');return}
 const em=prompt('E-mail:');
 if(!em)return;
 const se=prompt('Senha:');
 if(!se)return;
 const r=await sb.auth.signInWithPassword({email:em.trim(),password:se});
 if(r.error){toast('E-mail ou senha incorretos');return}
 toast('Conectado!');
 baixarNuvem();
}

async function sairNuvem(){
 if(!sb)return;
 await sb.auth.signOut();
 toast('Voce saiu');
}

async function iniciarNuvem(){
 try{await carregarSDK()}
 catch(e){toast('Sem internet - modo local');return}
 sb=window.supabase.createClient(SUPA_URL,SUPA_KEY);
 const s=await sb.auth.getSession();
 usuario=(s.data&&s.data.session)?s.data.session.user:null;
 sb.auth.onAuthStateChange(function(_ev,sess){
  usuario=sess?sess.user:null;
  atualizarBarraLogin();
 });
 montarBarraLogin();
 instalarGancho();
 await baixarNuvem();
 setInterval(baixarNuvem,15000);
}

iniciarNuvem();
