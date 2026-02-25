# Cholera Monitor - Uíge Real-Time Outbreak Tracker

Sistema de monitorização geográfica em tempo real de casos suspeitos e confirmados de cólera na província do Uíge, Angola.

Permite que agentes de saúde enviem localizações via telemóvel e visualize os casos num mapa interativo atualizado em tempo real.

## Demo (se disponível)

- Painel web: [https://cholera-monitor-uige.web.app](https://cholera-monitor-uige.web.app) *(substitua pelo link real quando deployado)*
- Vídeo demonstrativo: [YouTube / Loom link] *(opcional)*

## Funcionalidades

- Envio de casos suspeitos/confirmados diretamente do telemóvel Android (sem app nativa)
- Registo automático de coordenadas GPS + metadados (agente, gravidade, data/hora)
- Armazenamento em tempo real na nuvem
- Mapa interativo com marcadores coloridos por gravidade
- Filtros por data, gravidade e agente
- Interface web responsiva

## Stack Tecnológica

| Camada         | Tecnologia                          | Finalidade                              |
|----------------|-------------------------------------|-----------------------------------------|
| Frontend       | React 18 + Vite                     | Interface e mapa interativo             |
| Mapas          | Google Maps JavaScript API          | Visualização geográfica                 |
| Backend/DB     | Firebase Realtime Database          | Armazenamento e sincronização em tempo real |
| Mobile coleta  | HTTP Shortcuts (Android)            | Envio simples de dados via POST         |
| Autenticação   | Firebase Authentication (planeado)  | Controle de acesso futuro               |


