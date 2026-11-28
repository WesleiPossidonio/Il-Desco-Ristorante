# Qualidade — estado verificável

## Executado
- npm run build: HTML estático e Tailwind compilados, assets copiados.
- npm run check: idioma, H1 único, IDs, âncoras, assets locais, conteúdo dos menus, dois links WhatsApp e mensagem, sintaxe JSON-LD, ausência de scripts externos e bloqueio de indexação da prévia.
- git diff --check: sem erros de whitespace.
- PDF copiado sem alteração e comparado ao original na etapa de integração.

## Pendente
- Prévia no navegador: tentativa anterior falhou por timeout do relay; sem avaliação visual final de responsividade, contraste, teclado ou enquadramento.
- Lighthouse mobile/desktop, Core Web Vitals e validação externa de schema/OG.
- Conversão de imagens e revisão de pesos de fonte após aprovação visual.
- Revisão editorial, logo/favicon final e design definitivo do PDF.
- Domínio/HTTPS, configuração de build/publish Netlify e headers por HTTP.
- Solução de consentimento e configuração de Analytics autorizadas.
- Aprovação explícita antes de merge/publicação.
