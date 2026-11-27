# Instruções do projeto — Il Desco
## Escopo e fluxo
- Landing independente para cene aziendali di Natale 2026, inteiramente em italiano.
- Trabalhar em feature/landing-natale-2026; preservar a página provisória de main.
- Commits organizados e PR para revisão. Não fazer merge, publicar campanha, alterar branch de produção ou DNS sem autorização explícita.
- Inspecionar estado e alterações antes de editar; não sobrescrever trabalho existente.
## Arquitetura
- HTML5 semântico, Tailwind compilado e JavaScript ES modules. Node somente como build.
- Sem React, Next.js, Vite, backend, CMS, banco de dados, login, formulários, reservas ou checkout.
- Conteúdo editorial em content/landing.json; conteúdo essencial presente no HTML estático entregue.
- Adicionar arquivos somente quando tiverem função real; build pequeno e reproduzível com lockfile.
## Design e conteúdo
- Seguir a referência aprovada sem redesenhar. Se inacessível, solicitar captura ou arquivos antes da composição visual.
- Sem header convencional nem navegação sticky. Hero: “Il Natale si vive insieme.”
- Cinco áreas: Hero, apresentação, dois menus oficiais, restaurante e CTA final verde profundo.
- Usar a imagem natalina aprovada no Hero, identificando sua natureza conceitual quando necessário; fotos oficiais para representar o espaço físico.
- Não inventar menus, preços, pratos, telefone, endereço, diferenciais ou identificadores.
- Confirmar logo atual: o PDF encontrado em logo vecchio não deve ser adotado automaticamente.
- Centralizar tokens e preservar tipografia da referência; fontes locais com licença verificada.
## Contato e privacidade
- WhatsApp oficial confirmado; número e mensagem centralizados; encodeURIComponent na mensagem.
- Contato deve funcionar sem Analytics e sem aguardar envio de eventos.
- Não carregar rastreadores não essenciais antes de consentimento válido; interação genérica não é consentimento.
- Aceitar, rejeitar, configurar e revogar quando houver CMP; rejeição não bloqueia conteúdo.
- GTM, GA4, Ads, Meta e Clarity somente com configuração e autorização disponíveis.
- Eventos previstos: whatsapp_click por posição, menu_view e menu_download. Clique não equivale a reserva.
- Não inventar políticas ou dados legais; confirmar cobertura iubenda no subdomínio.
## Qualidade e entrega
- Mobile-first; HTML acessível, foco visível, headings corretos, contraste e áreas de toque.
- Hero sem lazy loading; imagens responsivas WebP com dimensões. Lazy loading abaixo da dobra.
- Movimento discreto com transform/opacity e prefers-reduced-motion; conteúdo visível sem JS.
- SEO italiano, metadados, OG e JSON-LD apenas com fatos verificados; prévias sem indexação.
- Canonical de produção somente após validar URL final. Nenhum segredo em arquivos públicos.
- Documentar decisões e bloqueios; registrar somente testes e métricas realmente executados.
- Lighthouse alvo: performance 90+, acessibilidade/boas práticas/SEO 95+; metas não são resultados.
