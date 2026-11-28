# Qualidade — estado verificável

## Executado
- npm run build: HTML estático e Tailwind compilados, assets copiados.
- npm run check: idioma, H1 único, IDs, âncoras, assets locais, conteúdo dos menus, dois links WhatsApp e mensagem, sintaxe JSON-LD, ausência de scripts externos e bloqueio de indexação da prévia.
- git diff --check: sem erros de whitespace.
- PDF copiado sem alteração e comparado ao original na etapa de integração.

## Integração
- GitHub Actions configurado para instalação limpa, build e check em PRs e pushes em main. Resultado remoto deve ser consultado no PR.
- netlify.toml limitado a deploy-preview: dist/; produção segue a configuração existente.

## Pendente
- Janela estreita de 388 CSS px e desktop de 1158px revisados, sem overflow horizontal. GSAP ScrollTrigger observado em scroll; cards e CTA retornam a opacity 1/transform none. Ainda pendentes: aparelho físico, preferência reduzida em execução, teclado completo e contraste sobre fotografia.
- Lighthouse mobile/desktop, Core Web Vitals e validação externa de schema/OG.
- Conversão de imagens e revisão de pesos de fonte após aprovação visual.
- Revisão editorial, logo/favicon final e design definitivo do PDF.
- Domínio/HTTPS, configuração de build/publish Netlify e headers por HTTP.
- Solução de consentimento e configuração de Analytics autorizadas.
- Aprovação explícita antes de merge/publicação.
