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

## Typy zmiany: onChange()
`child_added` - Pobieraj listy elementów lub słuchaj dodatków do listy elementów. To zdarzenie jest wyzwalane raz dla każdego istniejącego elementu podrzędnego, a następnie ponownie za każdym razem, gdy do określonej ścieżki zostanie dodany nowy element podrzędny. Odbiornik otrzymuje migawkę zawierającą dane nowego dziecka.
`child_changed` - Słuchaj zmian pozycji na liście. To zdarzenie jest wyzwalane za każdym razem, gdy modyfikowany jest węzeł podrzędny. Obejmuje to wszelkie modyfikacje potomków węzła podrzędnego. Migawka przekazana do detektora zdarzeń zawiera zaktualizowane dane elementu podrzędnego.
`child_removed` - Słuchaj, czy elementy są usuwane z listy. To zdarzenie jest wyzwalane po usunięciu bezpośredniego elementu podrzędnego. Migawka przekazana do bloku wywołania zwrotnego zawiera dane usuniętego elementu podrzędnego.
`child_moved` - Słuchaj zmian kolejności elementów na uporządkowanej liście. zdarzenia zawsze następują po zdarzeniu, które spowodowało zmianę kolejności elementu (na podstawie bieżącej metody zamawiania według). child_movedchild_changed
