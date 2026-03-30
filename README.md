#  Nimbus App (React Native + Expo)

Aplicação mobile desenvolvida com **React Native (Expo)** que permite consultar previsões do tempo em tempo real utilizando a API pública **OpenWeather**.

O app foi construído com foco em **performance, experiência do usuário e arquitetura escalável**, com sincronização entre componentes e interface fluida.

<img width="230px" src="./demo.gif" />

## 📱 Funcionalidades

### 🌍 Header
- Dark e light mode
- Botao que abre modal para seleção de cidades
- Atualização dinâmica da previsão ao trocar cidade

### 📊 Forecast (Lista Horizontal)
- Exibição de previsões por horário com `FlatList`
- Scroll horizontal otimizado
- Sincronização automática do dia visível ao scrolar
- Destaque visual do item selecionado
- Performance otimizada com:
  - `React.memo`
  - `useCallback`
  - `getItemLayout`


### 📌 Detalhes do Clima
- Exibição completa do horário selecionado:
  - Sensação térmica
  - Temperatura mínima e máxima
  - Umidade
  - Velocidade do vento
  - Cobertura de nuvens
  - Pressão atmosférica
- Atualização em tempo real conforme a seleção



### 🧭 Header Dinâmico
- Cidade atual
- Temperatura atual
- Descrição do clima
- Dia da semana baseado no item visível



### 🎨 UI / UX
- Suporte a **tema dark/light**
- Layout responsivo
- Uso de ícones para melhor leitura visual
- Feedback visual de item selecionado
- Scroll fluido e performático



### ⚠️ Estados da Aplicação
- Loading durante requisição
- EmptyState para ausência de dados
- Modal de erro em falhas da API
- Pull-to-refresh para atualização manual



## 🧠 Decisões Técnicas

- Uso de **Context API** para:
  - Gerenciar cidade selecionada
  - Armazenar forecast atual
  - Sincronizar item visível no scroll

- Uso de **FlatList** com foco em performance:
  - `getItemLayout`
  - `useCallback`
  - `React.memo`
  - Separação de lógica para evitar re-render global

- Arquitetura baseada em:
  - Componentes reutilizáveis (Card, Modal, Loading, EmptyState)
  - Hooks customizados (`useFetch`)
  - Helpers para formatação de data

- Tipagem com **TypeScript**


## 🛠️ Tecnologias Utilizadas

- React Native (Expo SDK 50+)
- TypeScript
- Axios
- Context API
- React Hooks (useState, useEffect, useCallback, useMemo)
- Expo Vector Icons


## 📡 API

Os dados são consumidos da API pública:

👉 https://openweathermap.org/api


## ▶️ Como rodar o projeto

1. Clone o repositório

```bash
git clone [https://github.com/brenolg/User-Chat-React-Native.git](https://github.com/brenolg/Nimbus-React-Native.git)
```
2. Acesse a pasta do projeto
```bash
cd Nimbus-React-Native
```
3. Instale as dependências
```bash
npm install
```
4. Crie um arquivo `.env` na raiz do projeto com uma chave na open weather:
```env
EXPO_PUBLIC_WEATHER_KEY=SUA_API_KEY_AQUI
```
5. Inicie o projeto
```bash
npx expo start
```
5. Execute no dispositivo

Você pode rodar o app de várias formas:

📱 Celular (recomendado)

Instale o app Expo Go

Escaneie o QR Code exibido no terminal com o Expo ou aperte a letra a no terminal e emular com Android Studio
