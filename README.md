**Readme.md - Projeto React Native com Expo e OneSignal**

# App com React Native, Expo e OneSignal

Este projeto demonstra como integrar o OneSignal em um aplicativo React Native criado com Expo, permitindo a recepção de notificações push.

## Criando um Novo Projeto

Para criar esse projeto foi usado o seguinte comando.

1. **Criando o template usando Tabs:**
   ```bash
   npx create-expo-app@latest --template tabs@49
   ```

## Configuração do OneSignal

1. **Crie uma Conta no OneSignal:**

   - Acesse [OneSignal](https://onesignal.com/) e crie uma conta gratuita.

2. **Crie um Novo Aplicativo:**

   - No painel do OneSignal, crie um novo aplicativo e siga as instruções para configurá-lo.

3. **Obtenha a Chave do Servidor e a ID do Remetente:**
   - Encontre suas chaves de API no painel do OneSignal, são elas:
     ONESIGNAL_APP_ID
     ONESIGNAL_API_KEY

## Adicionando o OneSignal ao Projeto

1. **Instale o Pacote do OneSignal:**
   ```bash
   npx expo install onesignal-react-native
   ```
2. **Instale o Plugin do OneSignal para o Expo:**
   ```bash
   npx expo install onesignal-expo-plugin
   ```

## Executando o Projeto

1. **Inicie o Servidor Local:**

   ```bash
   npx expo run:android
   ```
   or
   ```bash
   npx expo run:ios
   ```

2. **Abra o Aplicativo Expo no Seu Dispositivo ou Emulador:**

   - Escaneie o código QR gerado no terminal ou acesse o link fornecido no navegador.

3. **Teste a Recebimento de Notificações:**
   - No painel do OneSignal, envie uma notificação push para seu aplicativo e veja em tempo real no dispositivo/emulador.

## Personalização Adicional

Sinta-se à vontade para personalizar o aplicativo de acordo com suas necessidades. Consulte a documentação do [Expo](https://docs.expo.dev/) e do [OneSignal](https://documentation.onesignal.com/) para mais detalhes.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
