/* Sincronizacao na nuvem - IEADESGA - v81 */
(function(){var st=document.createElement('style');st.textContent=".app{padding-top:26px!important;box-sizing:border-box}\n#barraLogin{position:fixed;top:3px;right:14px;z-index:60;display:flex;align-items:center;gap:8px}\n#barraLogin .bl-quem{font-size:11px;line-height:1.25;text-align:right;color:#3c4a52}\n#barraLogin .bl-nome{font-weight:700;display:block}\n#barraLogin .bl-func{font-size:10px;color:#6b7280;display:block}\nbody[data-tema=\"dark\"] #barraLogin .bl-quem{color:#c3d1d8}\nbody[data-tema=\"dark\"] #barraLogin .bl-func{color:#93a4ad}\n#barraLogin .chip{white-space:nowrap}\n.somente-leitura .btn.primary{display:none!important}\n.somente-leitura .month-cell{cursor:default!important}\n#barraLogin .bl-entrar{font-size:13px;font-weight:700;padding:6px 18px;letter-spacing:.3px}\n#telaLogin{position:fixed;inset:0;z-index:200;background:rgba(10,20,26,.55);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaLogin .lg-card{background:#fff;color:#1f2933;width:100%;max-width:340px;border-radius:12px;padding:22px 22px 18px;box-shadow:0 18px 50px rgba(0,0,0,.3)}\n#telaLogin h3{margin:0;font-size:17px;color:#0b4f6c}\n#telaLogin .lg-sub{margin:4px 0 16px;font-size:11.5px;color:#6b7280}\n#telaLogin label{display:block;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px;letter-spacing:.3px}\n#telaLogin input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaLogin input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaLogin .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;margin:-6px 0 8px}\n#telaLogin .lg-acoes{display:flex;gap:8px;justify-content:flex-end}\nbody[data-tema=\"dark\"] #telaLogin .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaLogin h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaLogin input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaLogin .lg-erro{color:#ff8a80}\n#telaLogin .lg-card{text-align:center}\n#telaLogin .lg-logo{margin:0 0 12px}\n#telaLogin .lg-logo img{max-width:190px;max-height:105px;width:auto;height:auto;object-fit:contain;margin:0 auto;background:transparent!important;padding:0!important;border-radius:0!important}\n#telaLogin h3{font-size:16px;letter-spacing:.2px}\n#telaLogin .lg-sub{margin:3px 0 18px}\n#telaLogin label{text-align:left}\n#telaLogin .lg-erro{text-align:left}\nbody.somente-leitura #telaLogin .btn.primary{display:inline-block!important}\nbody.somente-leitura #telaLogin .btn{display:inline-block!important}\n#telaLogin .lg-acoes{justify-content:space-between;align-items:center;margin-top:2px}\n#telaLogin .lg-visitante{background:transparent;border:1px solid transparent;color:#6b7280;font-size:11.5px;padding:6px 2px;text-decoration:underline;text-underline-offset:2px}\n#telaLogin .lg-visitante:hover{color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaLogin .lg-visitante{color:#93a4ad}\nbody[data-tema=\"dark\"] #telaLogin .lg-visitante:hover{color:#7fd4e8}\n#telaLogin #loginOk{padding:8px 22px;font-weight:700}\n#telaLogin{background:rgba(8,16,21,.82);backdrop-filter:blur(4px)}\n#telaLogin .lg-criar{text-align:center;margin:-2px 0 12px}\n#telaLogin .lg-criar button{background:none;border:none;color:#0b4f6c;font-size:11.5px;text-decoration:underline;text-underline-offset:2px;cursor:pointer;padding:2px}\nbody[data-tema=\"dark\"] #telaLogin .lg-criar button{color:#7fd4e8}\n#barraLogin .bl-eng{font-size:14px;padding:4px 9px;line-height:1}\n#telaConfig{position:fixed;inset:0;z-index:210;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaConfig .cf-card{background:#fff;color:#1f2933;width:100%;max-width:620px;max-height:82vh;overflow-y:auto;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.32)}\n#telaConfig .cf-topo{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}\n#telaConfig h3{margin:0;font-size:16px;color:#0b4f6c}\n#telaConfig .cf-item{display:flex;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid #eef2f1;flex-wrap:wrap}\n#telaConfig .cf-quem{flex:1;min-width:150px;line-height:1.25}\n#telaConfig .cf-quem b{display:block;font-size:12.5px}\n#telaConfig .cf-quem span{display:block;font-size:10.5px;color:#6b7280;word-break:break-all}\n#telaConfig select{font-size:11.5px;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933}\n#telaConfig .cf-nota{font-size:11px;color:#6b7280;line-height:1.5;margin:14px 0 0;border-top:1px solid #eef2f1;padding-top:12px}\nbody[data-tema=\"dark\"] #telaConfig .cf-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaConfig h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaConfig .cf-item{border-bottom-color:#24313a}\nbody[data-tema=\"dark\"] #telaConfig select{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaConfig .cf-nota,body[data-tema=\"dark\"] #telaConfig .cf-quem span{color:#93a4ad;border-top-color:#24313a}\n#telaConfig .cf-card{max-width:700px}\n#telaConfig .cf-quem{min-width:130px}\n#telaConfig select{max-width:130px}\n#telaConfig .cf-nome{width:100%;box-sizing:border-box;font-size:12.5px;font-weight:700;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933;margin-bottom:2px}\n#telaConfig .cf-nome:focus{outline:none;border-color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaConfig .cf-nome{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\n#telaConfig .cf-nome{width:100%;box-sizing:border-box;font-size:12.5px;font-weight:700;padding:5px 7px;border:1px solid #cfdad7;border-radius:6px;background:#fff;color:#1f2933;margin-bottom:2px}\n#telaConfig .cf-nome:focus{outline:none;border-color:#0b4f6c}\nbody[data-tema=\"dark\"] #telaConfig .cf-nome{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\n#telaSenha{position:fixed;inset:0;z-index:215;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaSenha .lg-card{background:#fff;color:#1f2933;width:100%;max-width:330px;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.3);text-align:center}\n#telaSenha h3{margin:0 0 2px;font-size:16px;color:#0b4f6c}\n#telaSenha .lg-sub{margin:0 0 16px;font-size:11px;color:#6b7280;word-break:break-all}\n#telaSenha label{display:block;text-align:left;font-size:11px;font-weight:600;color:#6b7280;margin:0 0 4px}\n#telaSenha input{width:100%;box-sizing:border-box;padding:9px 11px;font-size:14px;border:1px solid #cfdad7;border-radius:7px;margin-bottom:12px;background:#fff;color:#1f2933}\n#telaSenha input:focus{outline:none;border-color:#0b4f6c;box-shadow:0 0 0 3px rgba(11,79,108,.12)}\n#telaSenha .lg-erro{min-height:16px;font-size:11.5px;color:#c0392b;text-align:left;margin:-6px 0 8px}\n#telaSenha .lg-acoes{display:flex;justify-content:space-between;align-items:center}\nbody[data-tema=\"dark\"] #telaSenha .lg-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaSenha h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaSenha input{background:#1d272d;color:#e6edf0;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #telaSenha .lg-erro{color:#ff8a80}\nbody.somente-leitura #telaSenha .btn{display:inline-block!important}\n#locationFilter optgroup{font-style:normal;font-weight:700;color:#0b4f6c}\nbody[data-tema=\"dark\"] #locationFilter optgroup{color:#7fd4e8}\n#cartazBox{grid-column:1/-1}\n#cartazBox .cz-atual{display:flex;align-items:center;gap:10px;margin:2px 0 8px;padding:8px;border:1px solid #e2e8e6;border-radius:8px;background:#f7faf9}\n#cartazBox .cz-atual img{max-width:74px;max-height:74px;border-radius:5px;display:block;object-fit:cover}\n#cartazBox .cz-pdf{font-size:12px;color:#0b4f6c;text-decoration:none;font-weight:600;white-space:nowrap}\n#cartazBox .cz-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;align-items:flex-start}\n#cartazBox .cz-info span{font-size:11px;color:#6b7280;word-break:break-all;line-height:1.3}\n#cartazBox .cz-info button{font-size:10.5px;padding:3px 9px;border:1px solid #d9a5a0;background:#fff;color:#b3453b;border-radius:99px;cursor:pointer}\n#cartazBox .cz-info button:disabled{opacity:.5;cursor:default}\n#cartazBox input[type=file]{font-size:11.5px;width:100%;box-sizing:border-box}\n#cartazBox .cz-dica{font-size:10.5px;color:#6b7280;margin-top:4px;line-height:1.4}\nbody[data-tema=\"dark\"] #cartazBox .cz-atual{background:#1d272d;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #cartazBox .cz-pdf{color:#7fd4e8}\nbody[data-tema=\"dark\"] #cartazBox .cz-info span,body[data-tema=\"dark\"] #cartazBox .cz-dica{color:#93a4ad}\nbody[data-tema=\"dark\"] #cartazBox .cz-info button{background:#2a1f1f;border-color:#6b3b36;color:#ff8a80}\n#modalBackdrop,.modal-backdrop{overflow-y:auto!important;align-items:flex-start!important;padding:12px 0!important}\n#modalBackdrop>div,.modal-backdrop>div,.modal{max-height:92vh!important;overflow-y:auto!important;margin:auto!important}\n#modalBackdrop .field,.modal .field{margin-bottom:7px}\n#modalBackdrop label,.modal label{margin-bottom:2px;font-size:10.5px}\n#modalBackdrop input,#modalBackdrop select,#modalBackdrop textarea,.modal input,.modal select,.modal textarea{padding:6px 9px;font-size:13px}\n#modalBackdrop textarea,.modal textarea{min-height:48px;max-height:86px}\n#cartazBox .cz-atual{padding:6px;gap:8px;margin:2px 0 5px}\n#cartazBox .cz-atual img{max-width:52px;max-height:52px}\n#cartazBox .cz-dica{font-size:10px;margin-top:2px}\n#anoFiltro{margin-left:6px;font-weight:600}\n#cartazBox .cz-atual{align-items:flex-start;gap:10px}\n#cartazBox .cz-mini{display:flex;align-items:center;justify-content:center;position:relative;width:76px;min-height:60px;max-height:100px;border:1px solid #dfe7e5;border-radius:6px;background:#fff;overflow:hidden;flex:0 0 auto;text-decoration:none}\n#cartazBox .cz-mini img,#cartazBox .cz-mini canvas{max-width:100%;max-height:100px;display:block;object-fit:contain}\n#cartazBox .cz-mini canvas:not(.pronto){display:none}\n#cartazBox .cz-carregando{font-size:10px;color:#6b7280;letter-spacing:.5px}\n#cartazBox .cz-mini:hover{border-color:#0b4f6c}\n#cartazBox .cz-abrir{font-size:10.5px;color:#0b4f6c;text-decoration:underline;text-underline-offset:2px}\nbody[data-tema=\"dark\"] #cartazBox .cz-mini{background:#12181b;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #cartazBox .cz-abrir{color:#7fd4e8}\n.month-grid,.month-head,.month-days,.week-head{scrollbar-gutter:stable!important;box-sizing:border-box!important;width:100%!important}\n.month-grid{overflow-y:auto!important}\n.month-grid::-webkit-scrollbar,.month-cell::-webkit-scrollbar{width:6px}\n.month-grid::-webkit-scrollbar-thumb,.month-cell::-webkit-scrollbar-thumb{background:rgba(11,79,108,.28);border-radius:99px}\n.topbar,.toolbar{flex-wrap:nowrap!important}\n#anoFiltro{padding-left:6px;padding-right:4px;min-width:0}\nbody[data-tema=\"dark\"] .head,body[data-tema=\"dark\"] *:has(> .head){background:#161f24!important;border-color:#24313a!important}\nbody[data-tema=\"dark\"] .head h2,body[data-tema=\"dark\"] .head h2 *{color:#e6edf0!important}\nbody[data-tema=\"dark\"] .head span,body[data-tema=\"dark\"] .head small,body[data-tema=\"dark\"] .head div{color:#93a4ad!important}\n.month-grid,.month-head,.month-days,.week-head{grid-template-columns:repeat(7,minmax(0,1fr))!important}\n.month-cell,.month-cell *,.month-head>*,.week-head>*{min-width:0!important}\n.month-cell{overflow:hidden}\n.month-event,.event{min-width:0;max-width:100%;box-sizing:border-box;white-space:normal!important;overflow-wrap:anywhere;word-break:break-word;overflow:hidden}\n.month-event b,.event b,.month-event strong,.event strong{overflow-wrap:anywhere}\n.list-item,.list-main{min-width:0;overflow-wrap:anywhere}\n#barraLogin .bl-sino{position:relative}\n#barraLogin .bl-sino.tem{background:#c0392b;border-color:#c0392b;color:#fff}\n#barraLogin .bl-sino i{font-style:normal;font-size:9px;font-weight:700;margin-left:2px}\n#telaAprov{position:fixed;inset:0;z-index:212;background:rgba(8,16,21,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaAprov .cf-card{background:#fff;color:#1f2933;width:100%;max-width:620px;max-height:82vh;overflow-y:auto;border-radius:12px;padding:20px;box-shadow:0 18px 50px rgba(0,0,0,.32)}\n#telaAprov .cf-topo{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}\n#telaAprov h3{margin:0;font-size:16px;color:#0b4f6c}\n#telaAprov .ap-item{display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #eef2f1;flex-wrap:wrap}\n#telaAprov .cf-quem{flex:1;min-width:180px;line-height:1.3}\n#telaAprov .cf-quem b{display:block;font-size:12.5px}\n#telaAprov .cf-quem span{display:block;font-size:10.5px;color:#6b7280}\n#telaAprov .ap-ok{background:#0d7f5e;border-color:#0d7f5e;color:#fff}\n#telaAprov .ap-no{background:#fff;border-color:#d9a5a0;color:#b3453b}\n#telaAprov .cf-nota{font-size:11px;color:#6b7280;line-height:1.5;margin:14px 0 0;border-top:1px solid #eef2f1;padding-top:12px}\n#apAviso{grid-column:1/-1;font-size:11px;font-weight:600;color:#8a5b00;background:#fff6e0;border:1px solid #f0d79a;border-radius:6px;padding:7px 10px;margin-bottom:8px;line-height:1.4}\nbody[data-tema=\"dark\"] #telaAprov .cf-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaAprov h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaAprov .ap-item{border-bottom-color:#24313a}\nbody[data-tema=\"dark\"] #telaAprov .cf-quem span,body[data-tema=\"dark\"] #telaAprov .cf-nota{color:#93a4ad;border-top-color:#24313a}\nbody[data-tema=\"dark\"] #telaAprov .ap-no{background:#2a1f1f;border-color:#6b3b36;color:#ff8a80}\nbody[data-tema=\"dark\"] #apAviso{background:#2c2415;border-color:#5c4a1f;color:#f0cf8a}\n#czAutor{grid-column:1/-1;font-size:10.5px;color:#6b7280;border-top:1px solid #eef2f1;margin-top:8px;padding-top:7px;line-height:1.4}\nbody[data-tema=\"dark\"] #czAutor{color:#93a4ad;border-top-color:#24313a}\n#avisos{position:fixed;right:14px;bottom:14px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px;pointer-events:none}\n#avisos .av-item{pointer-events:auto;display:flex;align-items:flex-start;gap:8px;background:#0b4f6c;color:#fff;font-size:12px;line-height:1.45;padding:10px 12px;border-radius:8px;box-shadow:0 8px 26px rgba(0,0,0,.28);opacity:1;transition:opacity .35s,transform .35s}\n#avisos .av-item.saindo{opacity:0;transform:translateY(6px)}\n#avisos .av-item span{flex:1}\n#avisos .av-item button{background:none;border:none;color:#fff;font-size:16px;line-height:1;cursor:pointer;padding:0 2px;opacity:.75}\n#avisos .av-item button:hover{opacity:1}\n#avisos .av-info{background:#8a5b00}\n.pendente{position:relative;outline:1.5px dashed #c08a2e!important;outline-offset:-2px;opacity:.88}\n.month-event.pendente::before,.event.pendente::before,.list-item.pendente::before{content:\"\\23F3 \";font-size:10px}\n.list-item.pendente{background:#fffaf0!important}\nbody[data-tema=\"dark\"] .pendente{outline-color:#e0b055!important}\nbody[data-tema=\"dark\"] .list-item.pendente{background:#221c10!important}\n.campo-travado{background:#eef2f1!important;color:#3c4a52!important;cursor:not-allowed;pointer-events:none;opacity:1!important}\nbody[data-tema=\"dark\"] .campo-travado{background:#22313a!important;color:#c3d1d8!important}\n#telaDiag{position:fixed;inset:0;z-index:420;background:rgba(8,16,21,.78);display:flex;align-items:center;justify-content:center;padding:16px}\n#telaDiag .cf-card{background:#fff;color:#1f2933;width:100%;max-width:620px;max-height:84vh;overflow-y:auto;border-radius:12px;padding:18px}\n#telaDiag .cf-topo{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;gap:8px}\n#telaDiag h3{margin:0;font-size:15px;color:#0b4f6c}\n#telaDiag pre{font-size:11px;line-height:1.55;white-space:pre-wrap;word-break:break-word;background:#f5f8f7;border:1px solid #e2e8e6;border-radius:7px;padding:11px;margin:0;font-family:ui-monospace,Consolas,monospace}\nbody[data-tema=\"dark\"] #telaDiag .cf-card{background:#18232a;color:#e6edf0}\nbody[data-tema=\"dark\"] #telaDiag h3{color:#7fd4e8}\nbody[data-tema=\"dark\"] #telaDiag pre{background:#12181b;border-color:#2e3d47;color:#dbe7ec}\n#telaAprov .ap-recusado{background:#fff6f5}\n#telaAprov .ap-motivo{color:#b3453b!important;font-weight:600}\n#telaAprov .ap-del{background:#fff;border-color:#cfd6d4;color:#6b7280}\n#telaAprov .ap-forma{flex:1 0 100%;margin:8px 0 2px;padding:10px;border:1px solid #f0d79a;background:#fffaf0;border-radius:8px}\n#telaAprov .ap-forma label{display:block;font-size:10.5px;font-weight:700;color:#8a5b00;margin-bottom:5px}\n#telaAprov .ap-forma textarea{width:100%;box-sizing:border-box;font-size:12px;padding:7px 9px;border:1px solid #e0c78a;border-radius:6px;resize:vertical;font-family:inherit}\n#telaAprov .ap-forma-bts{display:flex;gap:6px;justify-content:flex-end;margin-top:7px}\n#telaAprov .ap-confirmar{background:#b3453b;border-color:#b3453b;color:#fff}\n#apAviso.recusado{background:#fdeceb;border-color:#e8b4ae;color:#93342c}\n.recusado{outline:1.5px dashed #c0392b!important;outline-offset:-2px}\n.month-event.recusado::before,.event.recusado::before,.list-item.recusado::before{content:\"\\274C \";font-size:9px}\n.list-item.recusado{background:#fff6f5!important}\nbody[data-tema=\"dark\"] #telaAprov .ap-recusado{background:#241716}\nbody[data-tema=\"dark\"] #telaAprov .ap-forma{background:#2c2415;border-color:#5c4a1f}\nbody[data-tema=\"dark\"] #telaAprov .ap-forma textarea{background:#1d272d;color:#e6edf0;border-color:#5c4a1f}\nbody[data-tema=\"dark\"] #apAviso.recusado{background:#2a1614;border-color:#6b3b36;color:#ff9d94}\nbody[data-tema=\"dark\"] .list-item.recusado{background:#241716!important}\n#barraLogin .bl-sino.espera{background:#8a5b00;border-color:#8a5b00;color:#fff}\n#telaAprov .nt-recusado,#telaAprov .nt-pendente,#telaAprov .nt-aprovado{font-style:normal;font-size:10px;font-weight:700;padding:3px 8px;border-radius:99px;white-space:nowrap}\n#telaAprov .nt-recusado{background:#fdeceb;color:#b3453b;border:1px solid #e8b4ae}\n#telaAprov .nt-pendente{background:#fffaf0;color:#8a5b00;border:1px solid #f0d79a}\n#telaAprov .nt-aprovado{background:#eaf6f1;color:#0d7f5e;border:1px solid #b7ddcd}\n#telaAprov .nt-abrir{background:#fff;border-color:#cfd6d4;color:#3c4a52}\nbody[data-tema=\"dark\"] #telaAprov .nt-recusado{background:#2a1614;color:#ff9d94;border-color:#6b3b36}\nbody[data-tema=\"dark\"] #telaAprov .nt-pendente{background:#2c2415;color:#f0cf8a;border-color:#5c4a1f}\nbody[data-tema=\"dark\"] #telaAprov .nt-aprovado{background:#122a22;color:#7fd8b4;border-color:#2c5a48}\nbody[data-tema=\"dark\"] #telaAprov .nt-abrir{background:#22313a;border-color:#2e3d47;color:#dbe7ec}\n#telaAprov pre{font-size:10.5px;line-height:1.5;white-space:pre-wrap;word-break:break-all;background:#f5f8f7;border:1px solid #e2e8e6;border-radius:7px;padding:10px;margin:10px 0 0;font-family:ui-monospace,Consolas,monospace}\nbody[data-tema=\"dark\"] #telaAprov pre{background:#12181b;border-color:#2e3d47;color:#dbe7ec}\n.event.s-congr,.month-event.s-congr{background:#f0eafc!important;color:#3a1f6b!important;border-right:5px solid #7c3aed!important}\n.month-event.s-congr{border-right-width:4px!important}\n.scope.congr,.list-item .scope.congr{background:#7c3aed!important;color:#fff!important}\nbody[data-tema=\"dark\"] .event.s-congr,body[data-tema=\"dark\"] .month-event.s-congr{background:#2a1f4a!important;color:#e2d9fa!important}\n#apAviso .mod-bts{display:flex;gap:6px;margin-top:8px}\n#apAviso .mod-forma{margin-top:8px}\n#apAviso .mod-forma textarea{width:100%;box-sizing:border-box;font-size:12px;padding:6px 8px;border:1px solid #e0c78a;border-radius:6px;resize:vertical;font-family:inherit;margin-bottom:6px}\n#apAviso .ap-ok{background:#0d7f5e;border-color:#0d7f5e;color:#fff}\n#apAviso .ap-no{background:#fff;border-color:#d9a5a0;color:#b3453b}\n#apAviso .ap-confirmar{background:#b3453b;border-color:#b3453b;color:#fff}\nbody[data-tema=\"dark\"] #apAviso .mod-forma textarea{background:#1d272d;color:#e6edf0;border-color:#5c4a1f}\nbody[data-tema=\"dark\"] #apAviso .ap-no{background:#2a1f1f;border-color:#6b3b36;color:#ff8a80}\n.titulo-clicavel{cursor:pointer;user-select:none}\n.titulo-clicavel:hover{text-decoration:underline;text-underline-offset:3px}\n.titulo-clicavel::after{content:\" \\25BE\";font-size:.8em;opacity:.7}\n#mesPop{position:fixed;z-index:300;background:#fff;border:1px solid #dfe7e5;border-radius:10px;box-shadow:0 12px 34px rgba(0,0,0,.22);padding:10px}\n#mesPop .mp-grade{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}\n#mesPop .mp-mes{font-size:11.5px;font-weight:600;padding:7px 9px;min-width:52px;border:1px solid #dfe7e5;background:#fff;color:#3c4a52;border-radius:6px;cursor:pointer}\n#mesPop .mp-mes:hover{border-color:#0b4f6c;color:#0b4f6c}\n#mesPop .mp-mes.on{background:#0b4f6c;border-color:#0b4f6c;color:#fff}\nbody[data-tema=\"dark\"] #mesPop{background:#18232a;border-color:#2e3d47}\nbody[data-tema=\"dark\"] #mesPop .mp-mes{background:#1d272d;border-color:#2e3d47;color:#c3d1d8}\nbody[data-tema=\"dark\"] #mesPop .mp-mes.on{background:#0d7f9e;border-color:#0d7f9e;color:#fff}\n#travAviso{grid-column:1/-1;font-size:11px;font-weight:600;color:#1f4d5e;background:#e6f0f4;border:1px solid #b9d3dd;border-radius:6px;padding:7px 10px;margin-bottom:8px;line-height:1.4}\nbody[data-tema=\"dark\"] #travAviso{background:#152a33;border-color:#2e4d5a;color:#a9cfdd}\n#barraLogin .bl-voltar{text-decoration:none;display:inline-flex;align-items:center;justify-content:center;min-width:30px}\n.brand-link{display:block;text-decoration:none;color:inherit;transition:opacity .18s,transform .18s;border-radius:8px}\n.brand-link:hover{opacity:.78;transform:translateY(-1px)}\n.brand-link:focus-visible{outline:2px solid #c8b273;outline-offset:3px}\n.scope.congr,.list-item .scope.congr,.list-main .scope.congr{background:#7c3aed!important;color:#fff!important;border-color:#7c3aed!important}\n#versaoAgenda{font-family:ui-monospace,Consolas,monospace;font-size:9.5px;letter-spacing:.1em;color:#9aa9b0;margin:14px 0 0;text-align:center;opacity:.75}\nbody[data-tema=\"dark\"] #versaoAgenda{color:#6c8089}\n#mesLista{margin-left:6px;font-weight:500}\n#apAviso .rec-bts{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:9px}\n#apAviso .rec-dica{flex:1;min-width:180px;font-size:10.5px;font-weight:500;opacity:.9;line-height:1.4}\n#apAviso .rec-excluir{background:#fff;border:1px solid #d9a5a0;color:#b3453b;white-space:nowrap}\n#apAviso .rec-excluir:hover{background:#fdeceb}\n#telaAprov .nt-excluir{background:#fff;border-color:#d9a5a0;color:#b3453b}\nbody[data-tema=\"dark\"] #apAviso .rec-excluir{background:#2a1f1f;border-color:#6b3b36;color:#ff8a80}\nbody[data-tema=\"dark\"] #telaAprov .nt-excluir{background:#2a1f1f;border-color:#6b3b36;color:#ff8a80}";document.head.appendChild(st);})();

/* ===== SINCRONIZACAO NA NUVEM - IEADESGA ===== */
const SUPA_URL='https://sblvlwzhwtlgbbabhwhj.supabase.co';
const SUPA_KEY='sb_publishable_Obrj650fuqadUh4sQjWliA_U0LPE6zG';

let sb=null, usuario=null, perfil=null, pausado=false, idsRemotos=new Set();
let ultimoEstado={}, donos={}, chaveEventos=null, _origSet=null;
let CONGREGACOES=[], _rotuloTodas=null, _jaConferiu=false, _avisouCampos=false;
let _cartazPendente=null, _anoLido=null, _alinhouLog=false;
let aprovados={}, _pendentes=[], _nomesPerfis={}, recusas={}, _recusasVistas={};
let janelaExclusao=0, _servidor=[], _erroPendentes=null, baixouUmaVez=false;

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
 const r=await sb.from('eventos').select('id,dados,criado_por,aprovado,recusa');
 if(r.error){console.log('erro ao baixar:',r.error.message);return}
 donos={};aprovados={};recusas={};
 r.data.forEach(function(x){
  donos[String(x.id)]=x.criado_por;
  aprovados[String(x.id)]=x.aprovado;
  if(x.recusa)recusas[String(x.id)]=x.recusa;
 });
 avisarAutorRecusas();
 atualizarSino();
 if(usuario){marcarAutor();if(haDiferenca())enviarNuvem()}
 idsRemotos=new Set(r.data.map(function(x){return String(x.id)}));
 baixouUmaVez=true;
 limparLixeiraAntiga(idsRemotos);
 const novos=r.data.map(function(x){
  const e=Object.assign({},x.dados);e.id=x.id;return e;
 });
 const iguais=JSON.stringify(novos)===JSON.stringify(events);
 ultimoEstado={};
 novos.forEach(function(e){ultimoEstado[String(e.id)]=JSON.stringify(e)});
 if(iguais)return;
 pausado=true;
 events.length=0;
 novos.forEach(function(e){if(!lixeira[String(e.id)])events.push(e)});
 gravarLocal();
 pausado=false;
 render();
 marcarPendentesNaTela();
 if(typeof montarTodosChips==='function')montarTodosChips();
}

async function enviarNuvem(){
 if(!sb||!usuario||pausado)return;
 if(!baixouUmaVez){
  console.log('[nuvem] envio adiado: primeira leitura do servidor ainda nao concluida');
  return;
 }
 const atuais={}, mudados=[];
 if(purgarLixeira())return;
 events.forEach(function(e){
  const k=String(e.id), s=JSON.stringify(e);
  if(lixeira[k])return;
  atuais[k]=s;
  if(ultimoEstado[k]!==s)mudados.push({id:k,dados:e,atualizado_em:new Date().toISOString()});
 });

 let criados=0, salvos=0;
 const recusados=[];

 for(let i=0;i<mudados.length;i++){
  const x=mudados[i];
  const eraNovo=!(x.id in ultimoEstado);
  const r=await sb.from('eventos').upsert([x]);
  if(r.error){
   console.log('[nuvem] recusado:',x.dados.title,'| setor:',x.dados.setor,
               '| location:',x.dados.location,'|',r.error.message);
   recusados.push({id:x.id,titulo:x.dados.title||'(sem titulo)',novo:eraNovo,msg:r.error.message});
  }else{
   ultimoEstado[x.id]=JSON.stringify(x.dados);
   salvos++;
   if(eraNovo)criados++;
  }
 }

 const faltando=[];
 Object.keys(ultimoEstado).forEach(function(k){if(!(k in atuais))faltando.push(k)});

 const meus=[], alheios=[];
 faltando.forEach(function(k){
  if(donos[k]===usuario.id)meus.push(k);else alheios.push(k);
 });

 if(alheios.length){
  console.log('[nuvem] ausencias de outros autores IGNORADAS:',alheios.length,alheios);
  await baixarNuvem();
 }

 if(meus.length>3){
  console.log('[nuvem] exclusao em massa ignorada:',meus.length);
  aviso('A agenda ficou fora de sincronia e nada foi exclu\u00eddo, por seguran\u00e7a. '+
        'Recarregue a p\u00e1gina.');
  await baixarNuvem();
 }else{
  for(let i=0;i<meus.length;i++){
   const k=meus[i];
   const d=await sb.from('eventos').delete().eq('id',k).select('id');
   if(d.error){console.log('[nuvem] nao consegui excluir',k,d.error.message);continue}
   if(!d.data||!d.data.length){
    console.log('[nuvem] exclusao recusada pelo servidor:',k);
    aviso('O servidor n\u00e3o autorizou excluir um dos eventos. '+
          'S\u00f3 o autor pode excluir, e apenas antes da aprova\u00e7\u00e3o.');
    await baixarNuvem();
    return;
   }
   delete ultimoEstado[k];
   marcarExcluido(k);
  }
 }

 if(recusados.length)descartarRecusados(recusados);

 if(criados)await baixarNuvem();

 if(criados&&perfil&&perfil.papel!=='admin'){
  aviso('Evento criado e enviado para aprova\u00e7\u00e3o da Secretaria Geral. '+
        'Ele ainda n\u00e3o aparece para as outras pessoas.','info');
 }else if(salvos&&perfil&&perfil.papel!=='admin'){
  aviso('Altera\u00e7\u00e3o salva e enviada para aprova\u00e7\u00e3o.','info');
 }

 idsRemotos=new Set(Object.keys(ultimoEstado));
}

function descartarRecusados(lista){
 const orfaos=[], mantidos=[];
 lista.forEach(function(r){
  if(r.novo)orfaos.push(r.id);
  else mantidos.push(r);
 });

 if(orfaos.length){
  for(let i=events.length-1;i>=0;i--){
   if(orfaos.indexOf(String(events[i].id))>=0)events.splice(i,1);
  }
  gravarLocal();
  render();
  const nomes=lista.filter(function(r){return r.novo})
                   .map(function(r){return '"'+r.titulo+'"'}).join(', ');
  aviso('N\u00e3o foi poss\u00edvel salvar '+nomes+'. Confira se o setor e a congrega\u00e7\u00e3o '+
        'do evento s\u00e3o exatamente os do seu perfil. O evento foi removido da sua tela.');
 }

 if(mantidos.length){
  aviso('Sem permiss\u00e3o para alterar '+
        mantidos.map(function(r){return '"'+r.titulo+'"'}).join(', ')+
        '. Voc\u00ea s\u00f3 pode editar eventos criados por voc\u00ea que ainda n\u00e3o foram aprovados.');
  baixarNuvem();
 }
}

function avisarRecusa(msg){
 if(!perfil){toast('Entre para editar a agenda');return}
 if(perfil.papel==='secretario'||perfil.papel==='secretario_congr'){
  aviso('Recusado pelo servidor. Confira se setor e congrega\u00e7\u00e3o do evento batem com o seu perfil. '+
        'Detalhe: '+String(msg).slice(0,120));
 }else{
  toast('Altera\u00e7\u00e3o recusada pelo servidor');
 }
 console.log('recusa do banco:',msg);
}

function gravarLocal(){
 try{
  if(!chaveEventos)chaveEventos=descobrirChave();
  if(!chaveEventos)return false;
  const txt=JSON.stringify(events);
  if(_origSet)_origSet(chaveEventos,txt);
  else localStorage.setItem(chaveEventos,txt);
  return true;
 }catch(e){console.log('[nuvem] nao consegui gravar local:',e.message);return false}
}

function descobrirChave(){
 for(let i=0;i<localStorage.length;i++){
  const k=localStorage.key(i);
  const v=localStorage.getItem(k);
  if(!v||v.indexOf('"title"')<0||v.indexOf('"date"')<0)continue;
  try{if(Array.isArray(JSON.parse(v)))return k}catch(e){}
 }
 return null;
}

function instalarGancho(){
 _origSet=localStorage.setItem.bind(localStorage);
 localStorage.setItem=function(k,v){
  _origSet(k,v);
  if(k===CHAVE_ATIV)return;
  try{
   if(typeof v==='string'&&v.indexOf('"title"')>=0&&v.indexOf('"date"')>=0){
    const p=JSON.parse(v);
    if(Array.isArray(p))chaveEventos=k;
   }
  }catch(e){}
  janelaExclusao=Date.now()+2500;
  clearTimeout(window._tmrNuvem);
  window._tmrNuvem=setTimeout(sincronizarLocal,250);
 };
}

function sincronizarLocal(){
 if(!usuario||pausado)return;
 marcarAutor();
 aplicarCartazPendente();
 enviarNuvem();
}

function haDiferenca(){
 const vistos={};
 for(let i=0;i<events.length;i++){
  const k=String(events[i].id);
  vistos[k]=1;
  if(ultimoEstado[k]!==JSON.stringify(events[i]))return true;
 }
 for(const k in ultimoEstado){if(!(k in vistos))return true}
 return false;
}

function vigiarAgenda(){
 setInterval(function(){
  if(!usuario||pausado)return;
  if(haDiferenca())sincronizarLocal();
 },3000);
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
  const voltar='<a class="chip bl-eng bl-voltar" href="index.html" title="Voltar \u00e0 Secretaria">\u2190</a>';
  const criaEventos=perfil&&(perfil.papel==='admin'||perfil.papel==='secretario'||perfil.papel==='secretario_congr');
  const sino=criaEventos
   ?'<button type="button" class="chip bl-eng bl-sino" onclick="abrirSino()" title="Notifica\u00e7\u00f5es">\ud83d\udd14<i id="blQtd"></i></button>'
   :'';
  const eng=(perfil&&perfil.papel==='admin')
   ?'<button type="button" class="chip bl-eng" onclick="abrirConfig()" title="Acessos da equipe">\u2699</button>'
   :'';
  box.innerHTML='<div class="bl-quem"><span class="bl-nome">'+nome+'</span>'+
   '<span class="bl-func">'+textoFuncao()+'</span></div>'+voltar+sino+chave+eng+
   '<button type="button" class="chip" onclick="sairNuvem()">Sair</button>';
 }else{
  box.innerHTML='<a class="chip bl-eng bl-voltar" href="index.html" title="Voltar \u00e0 Secretaria">\u2190</a>'+
   '<button type="button" class="chip on bl-entrar" onclick="entrarNuvem()">Entrar</button>';
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
 usuario=null;perfil=null;
 _recusasVistas={};
 try{sessionStorage.removeItem('jaViuLogin')}catch(e){}
 ['telaConfig','telaAprov','telaSenha','telaDiag'].forEach(function(x){
  const el=document.getElementById(x);
  if(el)el.remove();
 });
 atualizarBarraLogin();
 await baixarNuvem();
 aviso('Voc\u00ea saiu. Voltando para a Secretaria...');
 setTimeout(function(){location.href='index.html'},1200);
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
 ligarLogoPortal();
 ajustarTitulo();
 ligarTituloMes();
 garantirAmbito();
 aplicarClasseAmbito();
 ajustarChipsCongr();
 const _ss=document.getElementById('setorFilter');
 if(_ss)_ss.addEventListener('change',function(){setTimeout(ajustarChipsCongr,0)});
 montarSeletorAno();
 montarFiltroMes();
 limparTextos();
 setTimeout(alinharGrade,150);
 setTimeout(alinharGrade,600);
 if(usuario)marcarAtividade();
 purgarLixeira();
 contarPendentes(true);
 abrirPainelPorURL();
 setInterval(function(){contarPendentes(false)},60000);
 vigiarAgenda();
 ligarInjecaoNoRender();
 montarBarraLogin();
 instalarGancho();
 /* a entrada agora e feita pelo portal (index.html) */
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
  const k=String(id||'');
  if(id&&donos[k]&&donos[k]!==usuario.id){travar=true;motivo='outro'}
  else if(id&&aprovados[k]===true){travar=true;motivo='publicado'}
 }else{travar=true}
 m.querySelectorAll('button').forEach(function(b){
  const t=(b.textContent||'').toLowerCase();
  if(/excluir|apagar|remover|deletar|salvar|criar|adicionar/.test(t)){
   b.style.display=travar?'none':'';
  }
 });
 m.querySelectorAll('input,select,textarea').forEach(function(c){c.disabled=travar});
 avisoTravado(m,motivo);
 if(!travar&&perfil&&(perfil.papel==='secretario'||perfil.papel==='secretario_congr'))fixarEscopo(m,!id);
}

function fixarEscopo(m,novo){
 limitarAmbito(m,novo);
 const soCongr=(perfil.papel==='secretario_congr');
 const congr=perfil.congregacao||'';
 const setorDest=perfil.setor||(congr?setorDaCongregacao(congr):'');

 const cSetor=acharCampoSetor(m);
 if(cSetor&&setorDest)travarCampo(cSetor,setorDest);

 const cLocal=acharCampoCongregacao(m);
 if(cLocal){
  if(congr){
   travarCampo(cLocal,congr);
  }else if(setorDest&&cLocal.tagName==='SELECT'){
   const lista=CONGREGACOES.filter(function(c){return c.setor===setorDest})
                           .map(function(c){return c.nome});
   const atual=cLocal.value;
   let html='<option value="">Escolha a congrega\u00e7\u00e3o</option>';
   lista.forEach(function(n){
    html+='<option value="'+n+'"'+(n===atual?' selected':'')+'>'+n+'</option>';
   });
   cLocal.innerHTML=html;
   cLocal.disabled=false;
   if(!atual&&lista.length===1)cLocal.value=lista[0];
  }
 }
}

function travarCampo(el,valor){
 if(!el)return;
 el.disabled=false;
 if(el.tagName==='SELECT'){
  el.innerHTML='<option value="'+valor+'" selected>'+valor+'</option>';
  el.value=valor;
 }else{
  el.value=valor;
  el.readOnly=true;
 }
 el.classList.add('campo-travado');
 el.setAttribute('data-travado','1');
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
    if(m)m.querySelectorAll('[data-travado]').forEach(function(el){
     el.removeAttribute('data-travado');el.classList.remove('campo-travado');el.readOnly=false;
    });
    garantirAmbito();
    if(m)prepararCongregacaoModal(m);
    travarModalLeitura(id);
    if(m)prepararCartaz(m,id);
    if(m)ocultarCampos(m);
    if(m)avisoPendente(m,id);
    if(m)mostrarAutor(m,id);
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
   ligarLogoPortal();
   ajustarTitulo();
   ligarTituloMes();
   sincronizarAno();
   ajustarFiltroMes();
   setTimeout(alinharGrade,0);
   limparTextos();
   marcarPendentesNaTela();
   garantirAmbito();
   aplicarClasseAmbito();
   if(typeof montarTodosChips==='function')montarTodosChips();
   if(typeof montarChipsSetor==='function')montarChipsSetor();
   ajustarChipsCongr();
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
  if(campo.getAttribute('data-travado')==='1')return;
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

 if(campo.getAttribute('data-travado')==='1')return;
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
  const ehImg=/^image\//.test(atual.tipo||'');
  html+='<div class="cz-atual">';
  html+='<a class="cz-mini" href="'+u+'" target="_blank" rel="noopener" title="Abrir em tamanho real">';
  if(ehImg)html+='<img src="'+u+'" alt="Cartaz">';
  else html+='<canvas id="czCanvas"></canvas><span class="cz-carregando">PDF</span>';
  html+='</a>';
  html+='<div class="cz-info"><span>'+(atual.nome||'arquivo')+'</span>'+
        '<a class="cz-abrir" href="'+u+'" target="_blank" rel="noopener">Abrir em nova aba</a>';
  if(podeEditar)html+='<button type="button" id="czRemover">Remover</button>';
  html+='</div></div>';
 }
 if(podeEditar){
  html+='<input type="file" id="czArquivo" accept="application/pdf,image/jpeg,image/png">';
  html+='<div class="cz-dica">PDF, JPG ou PNG \u2013 at\u00e9 8 MB. Clique em Salvar para anexar.</div>';
 }else if(!atual){
  html+='<div class="cz-dica">Nenhum cartaz anexado.</div>';
 }
 box.innerHTML=html;

 const destino=m.querySelector('.form-grid')||m.querySelector('form')||m.querySelector('.modal')||m;
 destino.appendChild(box);

 if(atual&&!/^image\//.test(atual.tipo||'')){
  const cv=document.getElementById('czCanvas');
  if(cv)miniaturaPdf(urlCartaz(atual.caminho),cv);
 }

 const inp=document.getElementById('czArquivo');
 if(inp)inp.addEventListener('change',function(){enviarCartaz(inp,id)});
 const rm=document.getElementById('czRemover');
 if(rm)rm.addEventListener('click',function(){
  _cartazPendente={alvo:id,remover:true};
  toast('Cartaz ser\u00e1 removido ao salvar o evento.');
  rm.disabled=true;
 });
}

function carregarPdfJs(){
 return new Promise(function(ok){
  if(window.pdfjsLib){ok(true);return}
  const s=document.createElement('script');
  s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  s.onload=function(){
   if(window.pdfjsLib){
    window.pdfjsLib.GlobalWorkerOptions.workerSrc=
     'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
   }
   ok(!!window.pdfjsLib);
  };
  s.onerror=function(){ok(false)};
  document.head.appendChild(s);
 });
}

async function miniaturaPdf(url,canvas){
 const aviso=canvas.parentElement?canvas.parentElement.querySelector('.cz-carregando'):null;
 try{
  const pronto=await carregarPdfJs();
  if(!pronto)throw new Error('pdf.js indisponivel');
  const pdf=await window.pdfjsLib.getDocument(url).promise;
  const pg=await pdf.getPage(1);
  const v1=pg.getViewport({scale:1});
  const esc=Math.min(150/v1.width,200/v1.height);
  const vp=pg.getViewport({scale:esc});
  canvas.width=Math.round(vp.width);
  canvas.height=Math.round(vp.height);
  await pg.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
  canvas.classList.add('pronto');
  if(aviso)aviso.remove();
 }catch(e){
  console.log('miniatura do PDF:',e.message);
  if(aviso)aviso.textContent='\ud83d\udcc4 PDF';
 }
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


/* ---------- seletor de ano ---------- */
function acharSetas(){
 const bts=document.querySelectorAll('.topbar button,.toolbar button,header button,button');
 let prev=null,next=null;
 for(let i=0;i<bts.length;i++){
  const t=(bts[i].textContent||'').trim();
  if(!prev&&(t==='\u2039'||t==='<'||t==='\u25c0'||t==='\u2190'))prev=bts[i];
  if(!next&&(t==='\u203a'||t==='>'||t==='\u25b6'||t==='\u2192'))next=bts[i];
 }
 return {prev:prev,next:next};
}

function tituloAgenda(){
 return document.querySelector('.head h2')||document.querySelector('h2');
}

function ajustarTitulo(){
 const h=tituloAgenda();
 if(!h)return;
 const t=(h.textContent||'').trim();
 const anos=t.match(/\b\d{4}\b/g);
 if(anos&&anos.length===1)_anoLido=parseInt(anos[0],10);
 const digitos=(t.match(/\d/g)||[]).length;
 if(!anos||anos.length!==1||digitos!==4)return;
 const limpo=t.replace(/\s*\bde\b\s*\d{4}/i,'').replace(/\s*\b\d{4}\b/,'').trim();
 if(limpo&&limpo!==t)h.textContent=limpo;
}

function anoVisivel(){
 const h=tituloAgenda();
 const m=h?(h.textContent||'').match(/\b\d{4}\b/):null;
 if(m)return parseInt(m[0],10);
 if(_anoLido!==null)return _anoLido;
 return new Date().getFullYear();
}

function irParaAno(alvo){
 const s=acharSetas();
 if(!s.prev||!s.next){toast('N\u00e3o encontrei as setas de navega\u00e7\u00e3o');return}
 let guarda=0;
 while(anoVisivel()!==alvo&&guarda<500){
  (anoVisivel()<alvo?s.next:s.prev).click();
  guarda++;
 }
 sincronizarAno();
}

function montarSeletorAno(){
 if(document.getElementById('anoFiltro'))return;
 const s=acharSetas();
 const ancora=s.next;
 if(!ancora||!ancora.parentElement)return;
 const sel=document.createElement('select');
 sel.id='anoFiltro';
 sel.className='select';
 sel.title='Ir para o ano';
 const base=new Date().getFullYear();
 let html='';
 for(let a=base-3;a<=base+5;a++)html+='<option value="'+a+'">'+a+'</option>';
 sel.innerHTML=html;
 sel.value=String(anoVisivel());
 sel.addEventListener('change',function(){irParaAno(parseInt(sel.value,10))});
 ancora.parentElement.insertBefore(sel,ancora.nextSibling);
}

function sincronizarAno(){
 const sel=document.getElementById('anoFiltro');
 if(!sel)return;
 const a=String(anoVisivel());
 let tem=false;
 for(let i=0;i<sel.options.length;i++)if(sel.options[i].value===a)tem=true;
 if(!tem){
  const o=document.createElement('option');
  o.value=a;o.textContent=a;
  sel.appendChild(o);
 }
 if(sel.value!==a)sel.value=a;
}


/* ---------- alinhar a faixa dos dias com a grade ---------- */
const DIAS_SEM=['Dom','Seg','Ter','Qua','Qui','Sex','Sab','S\u00e1b'];

function acharFaixaDias(){
 const alvos=document.querySelectorAll('div,span,th,b,strong');
 for(let i=0;i<alvos.length;i++){
  const t=(alvos[i].textContent||'').trim();
  if(DIAS_SEM.indexOf(t)>=0&&!alvos[i].children.length){
   const p=alvos[i].parentElement;
   if(p&&p.children.length>=7)return p;
  }
 }
 return document.querySelector('.month-head')||document.querySelector('.week-head');
}

function acharGradeMes(){
 const g=document.querySelector('.month-grid');
 if(g)return g;
 const c=document.querySelector('.month-cell');
 if(c&&c.parentElement)return c.parentElement;
 return null;
}

function alinharGrade(){
 const g=acharGradeMes(), h=acharFaixaDias();
 if(!g||!h||g===h)return;
 const cs=getComputedStyle(g);
 if(cs.display.indexOf('grid')<0)return;
 const barra=Math.max(0,g.offsetWidth-g.clientWidth);
 h.style.boxSizing='border-box';
 h.style.display='grid';
 h.style.gridTemplateColumns=cs.gridTemplateColumns;
 h.style.columnGap=cs.columnGap;
 h.style.marginLeft=cs.marginLeft;
 h.style.marginRight=cs.marginRight;
 h.style.paddingLeft=cs.paddingLeft;
 h.style.paddingRight=(parseFloat(cs.paddingRight||0)+barra)+'px';
 h.style.width=g.offsetWidth+'px';
 if(!_alinhouLog){
  _alinhouLog=true;
  console.log('[nuvem] faixa:',h.className||h.tagName,'| grade:',g.className||g.tagName,
              '| colunas:',cs.gridTemplateColumns,'| barra:',barra+'px');
 }
}

window.addEventListener('resize',function(){
 clearTimeout(window._tmAlinha);
 window._tmAlinha=setTimeout(alinharGrade,120);
});


/* ---------- remover textos dispensaveis ---------- */
const TEXTOS_REMOVER=[/Organize os eventos/i];

function limparTextos(){
 const alvos=document.querySelectorAll('p,span,small,div,h4,h5');
 for(let i=0;i<alvos.length;i++){
  const el=alvos[i];
  if(el.children.length)continue;
  const t=(el.textContent||'').trim();
  if(!t)continue;
  for(let j=0;j<TEXTOS_REMOVER.length;j++){
   if(TEXTOS_REMOVER[j].test(t)){el.style.display='none';break}
  }
 }
}


/* ---------- aprovacao de eventos ---------- */
async function contarPendentes(avisar){
 if(!sb||!perfil||perfil.papel!=='admin')return;
 const r=await sb.from('eventos').select('id,dados,criado_por,recusa').eq('aprovado',false);
 if(r.error){_erroPendentes=r.error.message;console.log('pendentes:',r.error.message);return}
 _erroPendentes=null;
 _pendentes=r.data||[];
 const tot=await sb.from('eventos').select('id,dados,aprovado,criado_por,recusa');
 _servidor=tot.error?[]:(tot.data||[]);
 const novos=_pendentes.filter(function(x){return !x.recusa});
 const marca=document.getElementById('blQtd');
 if(marca)marca.textContent=novos.length?String(novos.length):'';
 const bt=marca?marca.parentElement:null;
 if(bt)bt.classList.toggle('tem',novos.length>0);
 if(avisar&&novos.length)aviso(novos.length+' evento(s) aguardando sua aprova\u00e7\u00e3o.','info');
}

async function abrirAprovacoes(){
 if(!perfil||perfil.papel!=='admin'){toast('Acesso restrito \u00e0 Secretaria Geral');return}
 if(document.getElementById('telaAprov'))return;
 const bg=document.createElement('div');
 bg.id='telaAprov';
 bg.innerHTML=
  '<div class="cf-card">'+
   '<div class="cf-topo"><h3>Eventos aguardando aprova\u00e7\u00e3o</h3>'+
   '<button type="button" class="chip" id="apFechar">Fechar</button></div>'+
   '<div id="apLista" class="cf-lista">Carregando...</div>'+
   '<p class="cf-nota">Eventos criados por secret\u00e1rios ficam vis\u00edveis apenas para o autor e para a '+
   'Secretaria Geral at\u00e9 serem aprovados. <b>Recusar</b> devolve o evento ao autor com o motivo; '+
   '<b>Excluir</b> apaga definitivamente.</p>'+
  '</div>';
 document.body.appendChild(bg);
 document.getElementById('apFechar').onclick=function(){bg.remove()};
 await contarPendentes(false);
 await listarPendentes();
}

async function listarPendentes(){
 const box=document.getElementById('apLista');
 if(!box)return;
 if(!_pendentes.length){box.textContent='Nenhum evento pendente.';return}
 const nomes={};
 const rp=await sb.from('perfis').select('user_id,nome,email');
 if(!rp.error&&rp.data)rp.data.forEach(function(p){
  nomes[p.user_id]=p.nome||p.email;
  _nomesPerfis[p.user_id]=p.nome||p.email;
 });
 box.innerHTML='';
 _pendentes.forEach(function(row){
  const d=row.dados||{};
  const li=document.createElement('div');
  li.className='cf-item ap-item'+(row.recusa?' ap-recusado':'');
  const quando=(d.date||'')+(d.time?' \u00e0s '+d.time:'');
  const onde=[d.setor,d.location].filter(Boolean).join(' \u2013 ');
  let info='<div class="cf-quem"><b>'+(d.title||'(sem t\u00edtulo)')+'</b>'+
   '<span>'+quando+(onde?' | '+onde:'')+'</span>'+
   '<span>por '+(nomes[row.criado_por]||'desconhecido')+'</span>';
  if(row.recusa)info+='<span class="ap-motivo">Recusado: '+row.recusa+'</span>';
  info+='</div>';
  li.innerHTML=info+
   '<button type="button" class="chip nt-abrir" data-id="'+row.id+'">Abrir</button>'+
   '<button type="button" class="chip ap-ok">Aprovar</button>'+
   (row.recusa?'':'<button type="button" class="chip ap-no">Recusar</button>')+
   '<button type="button" class="chip ap-del">Excluir</button>';

  li.querySelector('.nt-abrir').onclick=function(){
   const bg=document.getElementById('telaAprov');
   if(bg)bg.remove();
   if(typeof openModal==='function')openModal(row.id);
  };
  li.querySelector('.ap-ok').onclick=async function(ev){
   ev.currentTarget.disabled=true;
   if(!await aprovarEvento(row.id)){ev.currentTarget.disabled=false;return}
   await listarPendentes();
  };

  const bno=li.querySelector('.ap-no');
  if(bno)bno.onclick=function(){abrirMotivo(li,row)};

  li.querySelector('.ap-del').onclick=async function(ev){
   if(!confirm('Excluir definitivamente "'+(d.title||'evento')+'"?'))return;
   ev.currentTarget.disabled=true;
   const u=await sb.from('eventos').delete().eq('id',row.id);
   if(u.error){aviso('Erro: '+u.error.message);ev.currentTarget.disabled=false;return}
   aviso('Evento exclu\u00eddo.');
   await contarPendentes(false);await listarPendentes();await baixarNuvem();
  };
  box.appendChild(li);
 });
}

function abrirMotivo(li,row){
 if(li.querySelector('.ap-forma'))return;
 const f=document.createElement('div');
 f.className='ap-forma';
 f.innerHTML=
  '<label>Motivo da recusa (o autor vai ler esta mensagem)</label>'+
  '<textarea rows="2" placeholder="Ex.: conflito de data com o congresso do campo"></textarea>'+
  '<div class="ap-forma-bts">'+
   '<button type="button" class="chip ap-cancelar">Cancelar</button>'+
   '<button type="button" class="chip ap-confirmar">Confirmar recusa</button>'+
  '</div>';
 li.appendChild(f);
 const ta=f.querySelector('textarea');
 ta.focus();
 f.querySelector('.ap-cancelar').onclick=function(){f.remove()};
 f.querySelector('.ap-confirmar').onclick=async function(ev){
  const motivo=ta.value.trim();
  if(!motivo){aviso('Descreva o motivo da recusa.');ta.focus();return}
  ev.currentTarget.disabled=true;
  if(!await recusarEvento(row.id,motivo)){ev.currentTarget.disabled=false;return}
  await listarPendentes();
 };
}

function avisoPendente(m,id){
 const antigo=document.getElementById('apAviso');
 if(antigo)antigo.remove();
 if(!id)return;
 const rec=recusas[String(id)];
 const pend=(aprovados[String(id)]===false);
 if(!rec&&!pend)return;
 const d=document.createElement('div');
 d.id='apAviso';
 if(rec){
  d.className='recusado';
  d.textContent='Recusado pela Secretaria Geral: '+rec+
   ' \u2014 corrija o evento e salve para envi\u00e1-lo novamente.';
 }else{
  d.textContent=(perfil&&perfil.papel==='admin')
   ? 'Este evento aguarda aprova\u00e7\u00e3o.'
   : 'Aguardando aprova\u00e7\u00e3o da Secretaria Geral. Ainda n\u00e3o aparece para os demais.';
 }
 const alvo=m.querySelector('.form-grid')||m;
 alvo.insertBefore(d,alvo.firstChild);
 if(pend&&!rec)botoesModeracao(d,id);
 if(rec&&perfil&&perfil.papel==='admin')botoesModeracao(d,id);
 if(rec)acoesAutorRecusado(d,id);
}


/* ---------- registro de autoria ---------- */
function marcarAutor(){
 if(!usuario)return;
 const quem=(perfil&&perfil.nome)?perfil.nome:usuario.email;
 const funcao=(perfil&&perfil.papel)?rotuloPapel(perfil.papel):'';
 let mudou=false;
 for(let i=0;i<events.length;i++){
  const e=events[i];
  if(e.autor)continue;
  const k=String(e.id);
  const dono=donos[k];
  const meu=(dono===usuario.id);
  const novoAqui=(dono===undefined&&!(k in ultimoEstado));
  if(!meu&&!novoAqui)continue;
  e.autor=quem;
  if(funcao)e.autorFuncao=funcao;
  if(!e.autorEm)e.autorEm=new Date().toISOString();
  mudou=true;
 }
 if(mudou)gravarLocal();
}

function mostrarAutor(m,id){
 const antigo=document.getElementById('czAutor');
 if(antigo)antigo.remove();
 if(!id)return;
 const ev=events.filter(function(e){return String(e.id)===String(id)})[0];
 if(!ev)return;
 const dono=donos[String(id)];
 let quem=ev.autor||'';
 if(!quem&&_nomesPerfis&&dono)quem=_nomesPerfis[dono]||'';
 if(!quem&&usuario&&dono===usuario.id)quem=(perfil&&perfil.nome)?perfil.nome:usuario.email;
 if(!quem)quem='n\u00e3o registrado';
 let txt='Criado por '+quem;
 if(ev.autorFuncao)txt+=' \u2013 '+ev.autorFuncao;
 if(ev.autorEm){
  const d=new Date(ev.autorEm);
  if(!isNaN(d)){
   txt+=' \u00b7 '+d.toLocaleDateString('pt-BR')+
        ' \u00e0s '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  }
 }
 const el=document.createElement('div');
 el.id='czAutor';
 el.textContent=txt;
 const alvo=m.querySelector('.form-grid')||m;
 alvo.appendChild(el);
}


/* ---------- avisos que dao tempo de ler ---------- */
function caixaAvisos(){
 let c=document.getElementById('avisos');
 if(!c){
  c=document.createElement('div');
  c.id='avisos';
  document.body.appendChild(c);
 }
 return c;
}

function aviso(msg,tipo){
 try{console.log('[aviso]',new Date().toLocaleTimeString('pt-BR'),msg)}catch(e){}
 const c=caixaAvisos();
 const el=document.createElement('div');
 el.className='av-item'+(tipo?' av-'+tipo:'');
 el.innerHTML='<span></span><button type="button" aria-label="Fechar">\u00d7</button>';
 el.querySelector('span').textContent=msg;
 el.querySelector('button').onclick=function(){el.remove()};
 c.appendChild(el);
 setTimeout(function(){
  el.classList.add('saindo');
  setTimeout(function(){el.remove()},400);
 },9000);
}

try{
 if(typeof toast==='function'){
  toast=function(m,t){aviso(m,t)};
 }
}catch(e){console.log('nao foi possivel substituir o toast:',e.message)}


/* ---------- marcar eventos pendentes na agenda ---------- */
function idDoCard(el){
 const on=el.getAttribute('onclick')||'';
 const m=on.match(/openModal\(\s*['"]([^'"]+)['"]\s*\)/);
 return m?m[1]:null;
}

function marcarPendentesNaTela(){
 const cards=document.querySelectorAll('.month-event,.event,.list-item,[onclick*="openModal"]');
 for(let i=0;i<cards.length;i++){
  const el=cards[i];
  const id=idDoCard(el);
  if(!id)continue;
  const rec=recusas[String(id)];
  const pend=(aprovados[String(id)]===false);
  el.classList.remove('pendente','recusado');
  if(rec){
   el.classList.add('recusado');
   el.setAttribute('data-tip','Recusado: '+rec);
  }else if(pend){
   el.classList.add('pendente');
   el.setAttribute('data-tip','Aguardando aprova\u00e7\u00e3o da Secretaria Geral');
  }else{
   el.removeAttribute('data-tip');
  }
 }
}

function avisarAutorRecusas(){
 if(!usuario)return;
 for(const id in recusas){
  if(_recusasVistas[id])continue;
  if(donos[id]!==usuario.id&&!(perfil&&perfil.papel==='admin'))continue;
  if(donos[id]!==usuario.id)continue;
  _recusasVistas[id]=true;
  const ev=events.filter(function(e){return String(e.id)===id})[0];
  const t=ev?(ev.title||'evento'):'evento';
  aviso('"'+t+'" foi recusado pela Secretaria Geral. Motivo: '+recusas[id]+
        '. Abra o evento, corrija e salve para reenviar.','info');
 }
}


/* ---------- diagnostico de permissoes ---------- */
async function abrirDiagnostico(){
 if(document.getElementById('telaDiag'))return;
 const bg=document.createElement('div');
 bg.id='telaDiag';
 bg.innerHTML=
  '<div class="cf-card">'+
   '<div class="cf-topo"><h3>Diagn\u00f3stico</h3>'+
   '<span><button type="button" class="chip" id="dgCopiar">Copiar</button> '+
   '<button type="button" class="chip" id="dgFechar">Fechar</button></span></div>'+
   '<pre id="dgTexto">Executando...</pre>'+
  '</div>';
 document.body.appendChild(bg);
 document.getElementById('dgFechar').onclick=function(){bg.remove()};
 document.getElementById('dgCopiar').onclick=function(){
  const t=document.getElementById('dgTexto').textContent;
  if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){aviso('Copiado.')});
 };
 document.getElementById('dgTexto').textContent=await rodarDiagnostico();
}

async function rodarDiagnostico(){
 const L=[];
 function add(k,v){L.push(k+': '+v)}
 add('SDK carregado',!!sb);
 add('Sessao',usuario?usuario.email:'SEM LOGIN');
 add('UID',usuario?usuario.id:'-');
 if(perfil){
  add('Perfil.papel',perfil.papel);
  add('Perfil.setor',JSON.stringify(perfil.setor));
  add('Perfil.congregacao',JSON.stringify(perfil.congregacao));
  add('Perfil.nome',JSON.stringify(perfil.nome));
 }else{
  add('Perfil','NAO ENCONTRADO (sem permissao para escrever)');
 }
 add('Congregacoes carregadas',CONGREGACOES.length);
 add('Eventos locais',events.length);
 add('Chave localStorage',chaveEventos||'NAO DETECTADA');
 add('Pausado',pausado);
 add('Chave descoberta',descobrirChave()||'nenhuma');
 add('Ha diferenca para enviar',haDiferenca());
 const ult=events[events.length-1];
 if(ult)add('Ultimo evento local',JSON.stringify({id:ult.id,title:ult.title,date:ult.date,setor:ult.setor,location:ult.location}));

 if(sb&&usuario){
  const idT='diag-'+Date.now();
  const dados={
   title:'TESTE DIAGNOSTICO',
   date:new Date().toISOString().slice(0,10),
   time:'23:59',
   category:'Culto / Evento',
   setor:(perfil&&perfil.setor)||'',
   location:(perfil&&perfil.congregacao)||''
  };
  add('Teste enviando setor',JSON.stringify(dados.setor));
  add('Teste enviando location',JSON.stringify(dados.location));
  const ins=await sb.from('eventos').insert([{id:idT,dados:dados}]);
  if(ins.error){
   add('TESTE DE GRAVACAO','FALHOU - '+ins.error.message);
   if(ins.error.details)add('Detalhes',ins.error.details);
   if(ins.error.hint)add('Dica',ins.error.hint);
  }else{
   add('TESTE DE GRAVACAO','OK - gravou');
   const ver=await sb.from('eventos').select('id,aprovado').eq('id',idT);
   if(!ver.error&&ver.data&&ver.data.length)add('Aprovado ao gravar',ver.data[0].aprovado);
   else add('Releitura','nao retornou a linha');
   const del=await sb.from('eventos').delete().eq('id',idT);
   add('Limpeza do teste',del.error?('FALHOU - '+del.error.message):'OK');
  }
 }
 const m=acharModal();
 if(m){
  const cc=acharCampoCongregacao(m), cs=acharCampoSetor(m);
  add('Campo congregacao',cc?(cc.id||cc.tagName):'nao encontrado');
  add('Campo setor',cs?(cs.id||cs.tagName):'nao encontrado');
 }
 return L.join('\n');
}


/* ---------- sino: painel conforme o perfil ---------- */
function abrirSino(){
 if(perfil&&perfil.papel==='admin')return abrirAprovacoes();
 return abrirNotificacoes();
}

function minhasNotificacoes(){
 if(!usuario)return [];
 const naoEnv=[],rec=[],pen=[],apr=[];
 events.forEach(function(e){
  const id=String(e.id);
  const dono=donos[id];
  const meu=(dono===usuario.id)||(dono===undefined&&!(id in ultimoEstado));
  if(!meu)return;
  if(!(id in aprovados))naoEnv.push({e:e,tipo:'naoenviado'});
  else if(recusas[id])rec.push({e:e,tipo:'recusado',msg:recusas[id]});
  else if(aprovados[id]===true)apr.push({e:e,tipo:'aprovado'});
  else pen.push({e:e,tipo:'pendente'});
 });
 apr.sort(function(a,b){return String(b.e.date||'').localeCompare(String(a.e.date||''))});
 return naoEnv.concat(rec,pen,apr.slice(0,8));
}

function atualizarSino(){
 const marca=document.getElementById('blQtd');
 if(!marca||!perfil)return;
 if(perfil.papel==='admin')return;
 const lista=minhasNotificacoes();
 const recusados=lista.filter(function(x){
  return x.tipo==='recusado'||x.tipo==='naoenviado';
 }).length;
 const pendentes=lista.filter(function(x){return x.tipo==='pendente'}).length;
 const n=recusados||pendentes;
 marca.textContent=n?String(n):'';
 const bt=marca.parentElement;
 if(bt){
  bt.classList.toggle('tem',recusados>0);
  bt.classList.toggle('espera',recusados===0&&pendentes>0);
 }
}

function abrirNotificacoes(){
 if(document.getElementById('telaAprov'))return;
 const lista=minhasNotificacoes();
 const bg=document.createElement('div');
 bg.id='telaAprov';
 let itens='';
 if(!lista.length){
  itens='<div class="cf-item"><div class="cf-quem"><span>Voc\u00ea ainda n\u00e3o criou eventos.</span></div></div>';
 }else{
  lista.forEach(function(x){
   const d=x.e||{};
   const quando=(d.date||'')+(d.time?' \u00e0s '+d.time:'');
   const onde=[d.setor,d.location].filter(Boolean).join(' \u2013 ');
   let selo='',extra='',cls='';
   if(x.tipo==='naoenviado'){
    selo='<em class="nt-recusado">N\u00e3o enviado</em>';
    extra='<span class="ap-motivo">Este evento ainda n\u00e3o foi gravado no servidor.</span>'+
          '<span>Confira sua conex\u00e3o e se setor e congrega\u00e7\u00e3o s\u00e3o os do seu perfil.</span>';
    cls=' ap-recusado';
   }else if(x.tipo==='recusado'){
    selo='<em class="nt-recusado">Recusado</em>';
    extra='<span class="ap-motivo">Motivo: '+x.msg+'</span>'+
          '<span>Corrija o evento e salve para reenviar.</span>';
    cls=' ap-recusado';
   }else if(x.tipo==='pendente'){
    selo='<em class="nt-pendente">Aguardando aprova\u00e7\u00e3o</em>';
   }else{
    selo='<em class="nt-aprovado">Publicado</em>';
   }
   itens+='<div class="cf-item ap-item'+cls+'">'+
    '<div class="cf-quem"><b>'+(d.title||'(sem t\u00edtulo)')+'</b>'+
    '<span>'+quando+(onde?' | '+onde:'')+'</span>'+extra+'</div>'+
    selo+
    '<button type="button" class="chip nt-abrir" data-id="'+d.id+'">Abrir</button>'+
    (x.tipo==='recusado'?'<button type="button" class="chip nt-excluir" data-id="'+d.id+'">Excluir</button>':'')+
   '</div>';
  });
 }
 bg.innerHTML=
  '<div class="cf-card">'+
   '<div class="cf-topo"><h3>Minhas notifica\u00e7\u00f5es</h3>'+
   '<button type="button" class="chip" id="apFechar">Fechar</button></div>'+
   '<div class="cf-lista">'+itens+'</div>'+
   '<p class="cf-nota">Eventos que voc\u00ea cria passam pela aprova\u00e7\u00e3o da Secretaria Geral antes de '+
   'aparecerem para as outras pessoas. Se algum for recusado, o motivo aparece aqui.</p>'+
  '</div>';
 document.body.appendChild(bg);
 document.getElementById('apFechar').onclick=function(){bg.remove()};
 bg.querySelectorAll('.nt-excluir').forEach(function(b){
  b.onclick=function(){
   const id=b.getAttribute('data-id');
   bg.remove();
   excluirRecusado(id);
  };
 });
 bg.querySelectorAll('.nt-abrir').forEach(function(b){
  b.onclick=function(){
   const id=b.getAttribute('data-id');
   bg.remove();
   if(typeof openModal==='function')openModal(id);
  };
 });
}


/* ---------- ambito: Congregacao ---------- */
const AMBITO_NOVO='Congrega\u00e7\u00e3o';
const COR_CONGR='#7c3aed';

function garantirAmbito(){
 ['fScope','scopeFilter'].forEach(function(id){
  const sel=document.getElementById(id);
  if(!sel)return;
  let tem=false;
  for(let i=0;i<sel.options.length;i++){
   if(sel.options[i].value===AMBITO_NOVO||sel.options[i].textContent===AMBITO_NOVO)tem=true;
  }
  if(!tem){
   const o=document.createElement('option');
   o.value=AMBITO_NOVO;o.textContent=AMBITO_NOVO;
   sel.appendChild(o);
  }
 });
 const sf=document.getElementById('scopeFilter');
 if(sf){
  for(let i=0;i<sf.options.length;i++){
   if(sf.options[i].value===''){sf.options[i].textContent='Todos os \u00e2mbitos';break}
  }
 }
 try{
  if(typeof CORES==='object'&&CORES){
   CORES[AMBITO_NOVO]=COR_CONGR;
   if(typeof montarTodosChips==='function')montarTodosChips();
  }
 }catch(e){}
}

function aplicarClasseAmbito(){
 const cards=document.querySelectorAll('.month-event,.event,.list-item,[onclick*="openModal"]');
 for(let i=0;i<cards.length;i++){
  const el=cards[i];
  const id=idDoCard(el);
  if(!id)continue;
  const ev=events.filter(function(e){return String(e.id)===String(id)})[0];
  if(!ev)continue;
  const amb=ev.scope||'Setor';
  const congr=(amb===AMBITO_NOVO);
  el.classList.toggle('s-congr',congr);
  if(congr)el.classList.remove('s-setor','s-campo');
  const selo=el.querySelector('.scope');
  if(selo){
   selo.classList.toggle('congr',congr);
   selo.classList.toggle('campo',amb==='Campo');
  }
 }
 document.querySelectorAll('.scope').forEach(function(s){
  const t=(s.textContent||'').trim();
  if(t===AMBITO_NOVO){s.classList.add('congr');s.classList.remove('campo')}
  else if(t==='Campo'){s.classList.add('campo');s.classList.remove('congr')}
  else{s.classList.remove('campo','congr')}
 });
}


function dadosServidor(){
 const L=['Erro na consulta: '+(_erroPendentes||'nenhum'),
          'Total de eventos no servidor: '+_servidor.length,
          'Meu papel: '+(perfil?perfil.papel:'-'),''];
 _servidor.forEach(function(x){
  L.push([x.id,(x.dados&&x.dados.title)||'(sem titulo)',
          'aprovado='+x.aprovado,
          'autor='+(x.criado_por?String(x.criado_por).slice(0,8):'null'),
          x.recusa?('recusa='+x.recusa):''].filter(Boolean).join(' | '));
 });
 const t=L.join('\n');
 console.log(t);
 return t;
}
window.dadosServidor=dadosServidor;


/* ---------- aprovar / recusar de dentro do evento ---------- */
async function aprovarEvento(id){
 const u=await sb.from('eventos').update({aprovado:true,recusa:null,recusado_em:null}).eq('id',id);
 if(u.error){aviso('Erro: '+u.error.message);return false}
 aviso('Evento aprovado e publicado.');
 await contarPendentes(false);
 await baixarNuvem();
 return true;
}

async function recusarEvento(id,motivo){
 const u=await sb.from('eventos')
  .update({aprovado:false,recusa:motivo,recusado_em:new Date().toISOString()})
  .eq('id',id);
 if(u.error){aviso('Erro: '+u.error.message);return false}
 aviso('Recusa registrada. O autor ser\u00e1 avisado.');
 await contarPendentes(false);
 await baixarNuvem();
 return true;
}

function botoesModeracao(caixa,id){
 if(!perfil||perfil.papel!=='admin')return;
 const bts=document.createElement('div');
 bts.className='mod-bts';
 bts.innerHTML='<button type="button" class="chip ap-ok">Aprovar</button>'+
               '<button type="button" class="chip ap-no">Recusar</button>';
 caixa.appendChild(bts);
 bts.querySelector('.ap-ok').onclick=async function(ev){
  ev.currentTarget.disabled=true;
  if(await aprovarEvento(id))caixa.textContent='Evento aprovado e publicado.';
 };
 bts.querySelector('.ap-no').onclick=function(){
  if(caixa.querySelector('.mod-forma'))return;
  const f=document.createElement('div');
  f.className='mod-forma';
  f.innerHTML='<textarea rows="2" placeholder="Motivo da recusa"></textarea>'+
              '<button type="button" class="chip ap-confirmar">Confirmar recusa</button>';
  caixa.appendChild(f);
  const ta=f.querySelector('textarea');
  ta.focus();
  f.querySelector('.ap-confirmar').onclick=async function(ev){
   const motivo=ta.value.trim();
   if(!motivo){aviso('Descreva o motivo da recusa.');ta.focus();return}
   ev.currentTarget.disabled=true;
   if(await recusarEvento(id,motivo))caixa.textContent='Recusa registrada: '+motivo;
  };
 };
}


function avisoTravado(m,motivo){
 const antigo=document.getElementById('travAviso');
 if(antigo)antigo.remove();
 if(!motivo)return;
 const d=document.createElement('div');
 d.id='travAviso';
 d.textContent=(motivo==='publicado')
  ? 'Evento j\u00e1 aprovado e publicado. A partir daqui, s\u00f3 a Secretaria Geral pode alterar ou excluir.'
  : 'Este evento foi criado por outra pessoa. Voc\u00ea pode consultar, mas n\u00e3o alterar.';
 const alvo=m.querySelector('.form-grid')||m;
 alvo.insertBefore(d,alvo.firstChild);
}


/* ---------- chips de congregacao seguem o setor filtrado ---------- */
function ajustarChipsCongr(){
 const box=document.getElementById('chipsLoc');
 const loc=document.getElementById('locationFilter');
 if(!box||!loc||!CONGREGACOES.length)return;
 const selSetor=document.getElementById('setorFilter');
 const setor=selSetor?selSetor.value:'';
 const permitidas=setor
  ? CONGREGACOES.filter(function(c){return c.setor===setor}).map(function(c){return c.nome})
  : null;

 if(permitidas&&loc.value&&permitidas.indexOf(loc.value)<0){
  loc.value='';
  if(typeof render==='function')render();
  return;
 }

 const btns=box.querySelectorAll('.chip');
 for(let i=0;i<btns.length;i++){
  const b=btns[i];
  const t=(b.textContent||'').trim();
  const ehTodas=(i===0)||/^todas/i.test(t);
  const mostrar=(!permitidas)||ehTodas||(permitidas.indexOf(t)>=0);
  b.style.display=mostrar?'':'none';
 }
}


/* ---------- seletor de mes no titulo (restaurado) ---------- */
const MESES=['Janeiro','Fevereiro','Mar\u00e7o','Abril','Maio','Junho',
             'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function semAcento(s){
 return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}

function mesVisivel(){
 const h=tituloAgenda();
 const t=semAcento(h?h.textContent:'');
 for(let i=0;i<MESES.length;i++){
  if(t.indexOf(semAcento(MESES[i]))>=0)return i;
 }
 return new Date().getMonth();
}

function irParaMes(alvo){
 const s=acharSetas();
 if(!s.prev||!s.next){aviso('N\u00e3o encontrei as setas de navega\u00e7\u00e3o');return}
 let guarda=0;
 while(mesVisivel()!==alvo&&guarda<80){
  const atual=mesVisivel();
  let dif=alvo-atual;
  if(dif>6)dif-=12;
  if(dif<-6)dif+=12;
  (dif>0?s.next:s.prev).click();
  guarda++;
 }
 fecharSeletorMes();
 sincronizarAno();
}

function fecharSeletorMes(){
 const p=document.getElementById('mesPop');
 if(p)p.remove();
}

function abrirSeletorMes(){
 if(document.getElementById('mesPop')){fecharSeletorMes();return}
 const h=tituloAgenda();
 if(!h)return;
 const atual=mesVisivel();
 const pop=document.createElement('div');
 pop.id='mesPop';
 let html='<div class="mp-grade">';
 MESES.forEach(function(m,i){
  html+='<button type="button" class="mp-mes'+(i===atual?' on':'')+'" data-m="'+i+'">'+
        m.slice(0,3)+'</button>';
 });
 html+='</div>';
 pop.innerHTML=html;
 const r=h.getBoundingClientRect();
 pop.style.top=(r.bottom+6)+'px';
 pop.style.left=Math.max(8,r.left)+'px';
 document.body.appendChild(pop);
 pop.querySelectorAll('.mp-mes').forEach(function(b){
  b.onclick=function(){irParaMes(parseInt(b.getAttribute('data-m'),10))};
 });
 setTimeout(function(){document.addEventListener('click',aoClicarFora,{once:true})},0);
}

function aoClicarFora(ev){
 const pop=document.getElementById('mesPop');
 const h=tituloAgenda();
 if(!pop)return;
 if(pop.contains(ev.target)||(h&&h.contains(ev.target))){
  document.addEventListener('click',aoClicarFora,{once:true});
  return;
 }
 fecharSeletorMes();
}

function ligarTituloMes(){
 const h=tituloAgenda();
 if(!h||h._ligadoMes)return;
 h._ligadoMes=true;
 h.classList.add('titulo-clicavel');
 h.title='Escolher o m\u00eas';
 h.addEventListener('click',function(ev){ev.stopPropagation();abrirSeletorMes()});
}

/* ---------- logo leva de volta ao portal ---------- */
function ligarLogoPortal(){
 const b=document.querySelector('.brand');
 if(!b){setTimeout(ligarLogoPortal,600);return}
 if(b.querySelector('a.brand-link'))return;
 const a=document.createElement('a');
 a.className='brand-link';
 a.href='index.html';
 a.title='Voltar \u00e0 Secretaria';
 a.setAttribute('aria-label','Voltar \u00e0 p\u00e1gina inicial da Secretaria');
 while(b.firstChild)a.appendChild(b.firstChild);
 b.appendChild(a);
}


/* ---------- marca de versao ---------- */
function marcarVersao(){
 if(document.getElementById('versaoAgenda'))return;
 const alvo=document.querySelector('.legend')||document.querySelector('.sidebar');
 if(!alvo){setTimeout(marcarVersao,700);return}
 const p=document.createElement('p');
 p.id='versaoAgenda';
 p.textContent='Agenda v81 \u00b7 03.08.2026';
 alvo.appendChild(p);
}


/* ---------- filtro de mes na visao Lista ---------- */
let mesLista='';

function acharSelectVisao(){
 const sels=document.querySelectorAll('select');
 for(let i=0;i<sels.length;i++){
  const txt=[];
  for(let j=0;j<sels[i].options.length;j++){
   txt.push(semAcento(sels[i].options[j].textContent));
  }
  if(txt.indexOf('lista')>=0&&txt.indexOf('mes')>=0)return sels[i];
 }
 return null;
}

function ehVisaoLista(){
 const v=acharSelectVisao();
 if(!v)return false;
 const o=v.options[v.selectedIndex];
 return semAcento(o?o.textContent:'')==='lista';
}

function montarFiltroMes(){
 const v=acharSelectVisao();
 if(!v||!v.parentElement)return;
 if(!document.getElementById('mesLista')){
  const sel=document.createElement('select');
  sel.id='mesLista';
  sel.className='select';
  sel.title='Filtrar por m\u00eas';
  let html='<option value="">Todos os meses</option>';
  MESES.forEach(function(m,i){html+='<option value="'+i+'">'+m+'</option>'});
  sel.innerHTML=html;
  sel.addEventListener('change',function(){
   mesLista=sel.value;
   if(typeof render==='function')render();
  });
  v.parentElement.insertBefore(sel,v.nextSibling);
 }
 if(!v._ligadoMesLista){
  v._ligadoMesLista=true;
  v.addEventListener('change',function(){setTimeout(ajustarFiltroMes,0)});
 }
 ajustarFiltroMes();
}

function ajustarFiltroMes(){
 const sel=document.getElementById('mesLista');
 if(!sel)return;
 const lista=ehVisaoLista();
 sel.style.display=lista?'':'none';
 if(!lista&&mesLista!==''){
  mesLista='';sel.value='';
  if(typeof render==='function')render();
 }
}

function ligarFiltroMesNoFiltered(){
 try{
  if(typeof filtered!=='function'||filtered._comMes)return;
  const _f=filtered;
  const novo=function(){
   let arr=_f.apply(null,arguments);
   if(mesLista!==''){
    const m=parseInt(mesLista,10);
    const a=anoVisivel();
    arr=arr.filter(function(e){
     const d=new Date(String(e.date)+'T12:00');
     return !isNaN(d)&&d.getMonth()===m&&d.getFullYear()===a;
    });
   }
   return arr;
  };
  novo._comMes=true;
  filtered=novo;
 }catch(e){console.log('nao foi possivel ligar o filtro de mes:',e.message)}
}



/* ---------- registro dos excluidos ---------- */
const CHAVE_LIXEIRA='ieadesga_excluidos';
let lixeira={};
try{lixeira=JSON.parse(localStorage.getItem(CHAVE_LIXEIRA)||'{}')||{}}catch(e){lixeira={}}

function gravarLixeira(){
 try{
  const f=_origSet||localStorage.setItem.bind(localStorage);
  f(CHAVE_LIXEIRA,JSON.stringify(lixeira));
 }catch(e){}
}

function marcarExcluido(id){
 lixeira[String(id)]=Date.now();
 gravarLixeira();
}

function purgarLixeira(){
 let mudou=false;
 for(let i=events.length-1;i>=0;i--){
  if(lixeira[String(events[i].id)]){events.splice(i,1);mudou=true}
 }
 if(mudou){gravarLocal();if(typeof render==='function')render()}
 return mudou;
}

function limparLixeiraAntiga(idsNoServidor){
 let mudou=false;
 const limite=7*24*60*60*1000;
 Object.keys(lixeira).forEach(function(k){
  if(idsNoServidor&&idsNoServidor.has(k)){delete lixeira[k];mudou=true;return}
  if(Date.now()-Number(lixeira[k]||0)>limite){delete lixeira[k];mudou=true}
 });
 if(mudou)gravarLixeira();
}

/* ---------- autor age sobre o evento recusado ---------- */
function fecharModal(m){
 if(!m)return;
 const bts=m.querySelectorAll('button');
 for(let i=0;i<bts.length;i++){
  const t=(bts[i].textContent||'').trim().toLowerCase();
  if(t==='cancelar'||t==='fechar'||t==='\u00d7'||t==='x'){bts[i].click();return}
 }
 m.style.display='none';
}

async function excluirRecusado(id){
 if(!sb||!usuario)return;
 if(!confirm('Excluir definitivamente este evento recusado?'))return;
 const r=await sb.from('eventos').delete().eq('id',String(id)).select('id');
 if(r.error){
  aviso('N\u00e3o foi poss\u00edvel excluir: '+r.error.message);
  console.log('[nuvem] erro ao excluir',id,r.error);
  return;
 }
 if(!r.data||!r.data.length){
  aviso('O servidor n\u00e3o autorizou a exclus\u00e3o. S\u00f3 o autor pode excluir, '+
        'e apenas enquanto o evento n\u00e3o estiver aprovado.');
  console.log('[nuvem] exclusao recusada em silencio. id:',id,
              '| dono:',donos[String(id)],'| eu:',usuario.id,
              '| aprovado:',aprovados[String(id)],'| papel:',perfil&&perfil.papel);
  return;
 }
 marcarExcluido(id);
 for(let i=events.length-1;i>=0;i--){
  if(String(events[i].id)===String(id))events.splice(i,1);
 }
 delete ultimoEstado[String(id)];
 delete recusas[String(id)];
 delete aprovados[String(id)];
 gravarLocal();
 fecharModal(acharModal());
 render();
 atualizarSino();
 aviso('Evento exclu\u00eddo.');
}

function acoesAutorRecusado(caixa,id){
 if(!usuario||!perfil)return;
 if(perfil.papel==='admin')return;
 if(donos[String(id)]!==usuario.id)return;
 const bts=document.createElement('div');
 bts.className='rec-bts';
 bts.innerHTML='<span class="rec-dica">Corrija os campos e clique em Salvar para reenviar, '+
               'ou exclua o evento.</span>'+
               '<button type="button" class="chip rec-excluir">Excluir evento</button>';
 caixa.appendChild(bts);
 bts.querySelector('.rec-excluir').onclick=function(){excluirRecusado(id)};
}

ligarFiltroMesNoFiltered();
ligarLogoPortal();
marcarVersao();
function montarControles(){
 try{ajustarTitulo();ligarTituloMes();montarSeletorAno();montarFiltroMes();
     garantirAmbito();aplicarClasseAmbito()}catch(e){}
}
montarControles();
setTimeout(montarControles,350);
setTimeout(montarControles,1400);
setTimeout(ligarLogoPortal,400);
setTimeout(ligarLogoPortal,1500);

/* ---------- ambitos permitidos por perfil ---------- */
function ambitosPermitidos(){
 if(!perfil)return null;
 if(perfil.papel==='secretario_congr')return [AMBITO_NOVO];
 if(perfil.papel==='secretario')return ['Setor',AMBITO_NOVO];
 return null;
}

function limitarAmbito(m,novo){
 const sel=document.getElementById('fScope');
 if(!sel)return;
 const ok=ambitosPermitidos();
 if(!ok)return;
 const atual=sel.value;
 let html='';
 ok.forEach(function(p){html+='<option value="'+p+'">'+p+'</option>'});
 sel.innerHTML=html;
 sel.disabled=false;
 if(atual&&ok.indexOf(atual)>=0&&!novo)sel.value=atual;
 else sel.value=ok[0];
 if(ok.length===1){
  sel.classList.add('campo-travado');
  sel.setAttribute('data-travado','1');
 }
}


/* ---------- abrir painel indicado pelo endereco ---------- */
function abrirPainelPorURL(){
 let p=null;
 try{p=new URLSearchParams(location.search).get('painel')}catch(e){}
 if(!p)return;
 try{history.replaceState({},'',location.pathname)}catch(e){}
 if(!usuario)return;
 setTimeout(function(){
  if(p==='aprovacoes'&&perfil&&perfil.papel==='admin')abrirAprovacoes();
  else if(p==='notificacoes')abrirNotificacoes();
 },600);
}


/* ---------- expiracao por inatividade ---------- */
const INATIVIDADE_MIN=30, AVISO_ANTES_MIN=2;
const CHAVE_ATIV='ieadesga_ultima_atividade';
let _ultMarca=0,_avisouInat=false;

function marcarAtividade(){
 const agora=Date.now();
 if(agora-_ultMarca<5000)return;
 _ultMarca=agora;_avisouInat=false;
 try{(_origSet||localStorage.setItem.bind(localStorage))(CHAVE_ATIV,String(agora))}catch(e){}
}
['mousedown','keydown','scroll','touchstart','click','mousemove'].forEach(function(ev){
 document.addEventListener(ev,marcarAtividade,{passive:true});
});

async function encerrarPorInatividade(){
 try{localStorage.removeItem(CHAVE_ATIV)}catch(e){}
 if(sb)await sb.auth.signOut();
 aviso('Sess\u00e3o encerrada por inatividade. Voltando para a Secretaria...');
 setTimeout(function(){location.href='index.html'},1500);
}

function conferirInatividade(){
 if(!usuario)return;
 let t=0;
 try{t=Number(localStorage.getItem(CHAVE_ATIV)||0)}catch(e){}
 if(!t){marcarAtividade();return}
 const min=(Date.now()-t)/60000;
 if(min>=INATIVIDADE_MIN)encerrarPorInatividade();
 else if(min>=INATIVIDADE_MIN-AVISO_ANTES_MIN&&!_avisouInat){
  _avisouInat=true;
  aviso('Sua sess\u00e3o encerra em 2 minutos por inatividade. Mexa na tela para continuar.');
 }
}
setInterval(conferirInatividade,20000);

window.abrirDiagnostico=abrirDiagnostico;
iniciarNuvem();
