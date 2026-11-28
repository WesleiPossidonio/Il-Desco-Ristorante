# Direção visual e estado da implementação

Captura recebida e refinamento de layout autorizado pelo responsável em 27/11/2026.
Paleta editorial creme/bordô/verde com dourado. Sem navegação convencional; marca discreta no Hero. Grid de apresentação em duas colunas, menus e CTA final com ritmo e espaçamentos responsivos. Tipografia editorial proposta: Cormorant Garamond regular e itálica, hospedada localmente com licença SIL Open Font License incluída. Esta escolha faz parte do refinamento autorizado e permanece sujeita à revisão visual.

Imagem Hero aprovada recebida e incorporada como public/assets/images/hero-natale-2026.png, no formato PNG original. Cena conceitual natalina, não documental do espaço real. Foto oficial RIK_8390-Modifica incorporada na seção restaurante como ristorante-interni.jpg; preservada no JPEG original. Dimensões reais declaradas: 4500 × 3000. Formatos originais autorizados; conversão posterior pelo responsável.

Conteúdo editorial complementar é proposta para revisão. Menus vazios e número WhatsApp nulo não geram links fictícios. A prévia apresenta estados pendentes em italiano. Conteúdo essencial é gerado no HTML pelo build; não depende de JavaScript no navegador. Nenhum rastreador está instalado. Links legais institucionais são referências existentes e não comprovam cobertura do subdomínio.

Build: npm ci seguido de npm run build, saída dist/. Netlify não foi reconfigurada. index.html raiz provisório preservado até revisão da primeira composição com assets. Sem merge ou publicação.

Validação desta etapa: build Tailwind e geração HTML estático; node --check e git diff --check. Não realizadas auditorias de navegador, Lighthouse, contraste sobre imagem final ou métricas de performance. Prévia tentada pelo sites-preview: falhou com timeout do relay na porta 4173, sem URL disponível. Não foi possível validar enquadramento mobile/desktop no navegador. Próximo passo: revisão visual quando a infraestrutura de prévia estiver disponível.
