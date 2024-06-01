### Démarrer l'app 
- yarn install
- yarn start 

### Explication 
- La Dimension API est essentielle pour créer des interfaces réactives et adaptatives dans React Native, permettant aux développeurs de concevoir des applications qui fonctionnent bien sur une variété de tailles d'écran et orientations.
 
- Le hook `useWindowDimensions` dans React Native est un moyen pratique d'accéder aux dimensions de la fenêtre de l'application de manière réactive. Contrairement à la `Dimensions API` qui nécessite la gestion manuelle des écouteurs d'événements, `useWindowDimensions` fournit automatiquement les dimensions de la fenêtre et met à jour les valeurs lorsque les dimensions changent, par exemple lors d'une rotation de l'écran.

- KeyboardAvoidingView est un composant de React Native conçu pour gérer les interactions entre le clavier virtuel et les composants de votre application, particulièrement les champs de saisie. Quand le clavier virtuel apparaît, il peut masquer les champs de saisie, rendant l'expérience utilisateur frustrante. KeyboardAvoidingView aide à éviter cela en ajustant la position des composants enfants pour s'assurer qu'ils restent visibles et accessibles.

- Le module Platform dans React Native permet de déterminer sur quelle plateforme (iOS, Android, Web, etc.) l'application s'exécute. Cela est particulièrement utile lorsque vous devez écrire du code spécifique à une plateforme ou ajuster le comportement de votre application en fonction de la plateforme.

- SafeAreaView est un composant dans React Native qui permet de garantir que le contenu de votre application est affiché dans la zone sûre d'un appareil, en particulier sur les appareils avec des encoches, des bords arrondis ou d'autres découpes.