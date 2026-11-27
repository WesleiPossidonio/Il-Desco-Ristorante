# Direção visual e estado da implementação

Captura recebida e refinamento de layout autorizado pelo responsável em 27/11/2026.
Paleta editorial creme/bordô/verde com dourado. Sem navegação convencional; marca discreta no Hero. Grid de apresentação em duas colunas, menus e CTA final com ritmo e espaçamentos responsivos. Tipografia serifada do sistema provisória: fonte exata/licença ainda precisam ser confirmadas.

Imagem Hero aprovada visualmente na conversa, porém ausente nos anexos materializados do workspace. Configurar heroImage após receber o arquivo, sem substituição por imagem inventada. Fotos oficiais ainda não incorporadas. Formatos originais autorizados; conversão posterior pelo responsável.

Conteúdo editorial complementar é proposta para revisão. Menus vazios e número WhatsApp nulo não geram links fictícios. A prévia apresenta estados pendentes em italiano. Conteúdo essencial é gerado no HTML pelo build; não depende de JavaScript no navegador. Nenhum rastreador está instalado. Links legais institucionais são referências existentes e não comprovam cobertura do subdomínio.

Build: npm ci seguido de npm run build, saída dist/. Netlify não foi reconfigurada. index.html raiz provisório preservado até revisão da primeira composição com assets. Sem merge ou publicação.

Validação desta etapa: build Tailwind e geração HTML estático; node --check e git diff --check. Não realizadas auditorias de navegador, Lighthouse, contraste sobre imagem final ou métricas de performance. Próximo passo: incorporar assets, validar enquadramento mobile e desktop e confirmar fontes antes de considerar o Hero concluído.
