---
type_page: Exemple
description: Cet exemple implémente une extension de message Teams qui peut être utilisée comme un plugin pour Microsoft 365 Copilot. L'extension de message permet aux utilisateurs d'interroger la base de données de Contoso.
produits:
- office-teams
- copilot-m365
langues:
- typescript
---

# ContoDrone extension de message Teams

![License.](https://img.shields.io/badge/license-MIT-green.svg)

Cet exemple implémente une extension de message Teams qui peut être utilisée comme un plugin pour Microsoft Copilot pour Microsoft 365. L'extension de message permet aux utilisateurs d'interroger la base de données de Contoso sur ses drones.

Elle est inspirée de l'extension de message Teams [Northwind Inventory](https://github.com/OfficeDev/Copilot-for-M365-Plugins-Samples/tree/main).

## Prérequis

- [Node.js 18.x](https://nodejs.org/download/release/v18.18.2/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Teams Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
- Vous aurez besoin d'un compte Microsoft professionnel ou scolaire avec [les autorisations de télécharger des applications Teams personnalisées](https://learn.microsoft.com/microsoftteams/platform/concepts/build-and-test/prepare-your-o365-tenant#enable-custom-teams-apps-and-turn-on-custom-app-uploading). Le compte aura également besoin d'une licence Microsoft 365 Copilot pour utiliser l'extension dans Copilot.