# Preflight técnico — Natale aziendale 2026
Inspeção: 27/11/2026. Escopo desta entrega: preflight, sem implementação visual ou publicação.

## Repositório
GitHub conectado como WesleiPossidonio; acesso de leitura confirmado e criação de branch/arquivo executada.
Base: main em 743e0e73fa4d04cb785f74fc5bcba8ca51c3a5ce.
Árvore recursiva completa: somente README.md (22 bytes) e index.html (7193 bytes).
Somente main existia; protected=false na listagem de branches. Não foi alterada a proteção.
Branch feature/landing-natale-2026 criada a partir da base.
Workspace inicial sem checkout utilizável: git status retornou “not a git repository”; portanto não há avaliação de alterações locais de um checkout anterior. Inspeção remota não detecta mudanças não enviadas do computador do responsável.
index.html é a página provisória italiana, noindex/nofollow, Tailwind CDN e fontes Google externas.
Referencia assets/natale-restaurant.webp, ausente na árvore; não corrigido nesta etapa para preservar a página.
Não há package.json, lockfile, netlify.toml, build, imagens, PDFs ou AGENTS.md na base.

## Netlify
Ausência de configuração versionada confirmada. Isso não comprova ausência de configuração no painel.
Branch de produção, build, diretório publicado, previews, domínio e HTTPS ainda não verificados no painel.
Nenhuma alteração de hospedagem ou DNS executada. Branch/PR podem disparar automações já configuradas pelo proprietário.

## Materiais oficiais
Drive conectado; pasta Materiale grafico listada:
Pastas NUOVE FOTO DESCO 2024, Desco interni, scelte, foto 26 nov, foto bar e ILDESCO_LOGO localizadas.
Listagens de Desco interni e scelte confirmam:
- 33 DESCO AMBIENTI _XH19755.jpg
- 14 DESCO AMBIENTI _XH19627.jpg
- 42 DESCO _3BE9094.jpg
Confirmação é de metadados/listagem; arquivos ainda não baixados nem inspecionados visualmente.
RIK_8390-Modifica não apareceu na busca pelo nome; acesso individual ainda não confirmado.
Logo_ildesco.png localizado na pasta ILDESCO_LOGO.
il_desco_logo_vett.pdf está dentro de logo vecchio; confirmar versão antes de usar.
Buscas “Natale”, “menu” e filtro WebP/ZIP retornaram vazias. Não comprovam inexistência em todo o Drive.
Imagem natalina e pacote WebP não localizados nas buscas nem no repositório.
Nenhum menu oficial de Natal 2026 identificado.

## Referência visual
URL aprovada respondeu HTTP 302 para Vercel SSO e depois login. Layout não inspecionado.
Necessário disponibilizar URL acessível ou captura/arquivos. Não inferir composição, fontes ou tokens definitivos.

## Site institucional
HTML de https://www.ildescopadova.com/it/home/ consultado.
Links legais encontrados:
- https://www.iubenda.com/privacy-policy/75421557
- https://www.iubenda.com/privacy-policy/75421557/cookie-policy
Isso não confirma cobertura do subdomínio. Nenhum href wa.me, api.whatsapp ou tel: extraído na consulta; número oficial permanece pendente.

## Skills
Catálogo cloud percorrido até o fim e catálogo executor consultado (vazio).
GSAP Skills, Emil Kowalski, Impeccable e Intent não disponíveis nestes catálogos; nenhum pacote externo instalado.
Usada a skill google-drive:google-drive para descoberta dos materiais.
Ausência das quatro skills não exige mudança de stack nem impede engenharia nativa.

## Estrutura mínima proposta para a próxima fase
Manter index.html provisório nesta entrega.
Adicionar durante implementação: package.json e lockfile; script pequeno de build; content/landing.json; template HTML para saída estática; src/styles/input.css; módulos JS somente para funções existentes; public/assets para imagens, fontes e PDFs confirmados; netlify.toml após validar pipeline.
Saída sugerida dist/, Tailwind compilado e conteúdo essencial emitido no HTML.
Documentação por assunto somente quando refletir implementação real; este relatório concentra decisões iniciais.
Sem framework, backend, CMS ou arquivos vazios.

## Pendências e dependências
1. Antes do Hero: referência acessível/captura, imagem natalina aprovada, fontes e logo atual.
2. Antes de contato funcional: WhatsApp oficial confirmado.
3. Antes dos cards funcionais: dois PDFs oficiais, nomes, conteúdo e preços aprovados.
4. Antes de rastreamento: IDs/acessos, fornecedores aprovados e CMP cobrindo subdomínio.
5. Antes de produção: pipeline Netlify, DNS/HTTPS, conteúdo institucional e licenças/uso das imagens.
Não substituir materiais faltantes por dados ou artes inventadas.

## Verificações executadas
- Identidade GitHub e permissão prática de escrita em branch de desenvolvimento.
- Listagem de branches, árvore recursiva e leitura de index.html.
- Listagens/buscas Drive e inventário de skills.
- Requisição HTTP da referência e consulta do HTML institucional.
Não executados: build, testes de interface, responsividade, Lighthouse, PageSpeed, consentimento, eventos, validação JSON-LD ou compartilhamento OG. Não existe landing implementada para auditar.
