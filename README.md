![Zdjęcie](https://microplay.ml/assets/img/Firebase_logo.png)
# Google Firebase SDK
> Autor: SuperKing

## Co to jest Google Firebase SDK?
Google Firebase SDK jest to biblioteka JavaScript stworzona do łatwiejszej implementacji Google Firebase SDK do twojego projektu JavaScript poprzez CDN. Pisz kod, nawet 10 razy szybciej niż poprzez orginalną bibliotekę!
# Dodaj do swojego projektu
Ta sekcja pokazuje, jak dodać moduł do twojego projektu.
## Importowanie skryptów
Aby zaimportować bibliotekę, wystarczy że do seksji `<head>` wrzucisz następujący kod:
```html
<!-- Firebase SDK by Microplay Interactive -->
<script type="text/javascript" src="https://microplay.ml/firebase/js/1.42/sdk/Firebase-min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-database-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-functions-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-auth-compat.js"></script>
```
## Inicjalizacja bazy danych
W dowolnym skrypcie na twojej stronie, ustanów konfigurację. Znajdziesz ją w [konsoli deweloperskiej Firebase.](https://console.firebase.google.com/)
![Zdjęcie](https://microplay.ml/assets/img/configScreen.png)