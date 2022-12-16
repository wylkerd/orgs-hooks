### Rodar projeto React Native CLI
- Prerequisitos React native CLI: Node LTS, npm, android studio e java jdk 18
- Rode npx react-native start -> abra Android Studio e rode diretamente lá no botão play (Device Android 10 API 29 or newer / Eu utilizei Pixel 4 Android 13 Tiramisu API 33) -> adb reverse tcp:8081 tcp:8081 (ou adb kill-server antes deste passo, e depois dê reload no Metro bundle)
