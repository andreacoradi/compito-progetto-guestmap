
Documento di specifica dei requisiti software dell'App EarthMessenger
=======

Tabella contenuti
-----------
## 1. Introduzione
   1.1 Propositi  
   1.2 Obiettivi  
   1.3 Definizioni, acronimi e abbreviazioni  
   1.4 Riferimenti
## 2. Descrizione generale
  2.1 Prospettive del prodotto  
  2.2 Funzionalità del prodotto  
  2.3 Caratteristiche utente  
  2.4 Vincoli generali  
  2.5 Assunzioni e dipendenze
## 3. Requisiti specifici
  ### 3.1 Requisiti Frontend    
  3.1.1 Pagina iniziale  
  3.1.2 Pagina inserimento messaggio e controllo CAPTCHA  
  3.1.3 Pagina con mappa  
  3.1.4 Cronologia delle richieste
### 3.2 Requisiti Backend

---
---

### 1. Introduzione

   **1.1 Propositi**

   Il proposito di questo documento è quello di specificare i requisiti dell'applicazione "EarthMessenger™️" per facilitarne la realizzazione.
	Questo documento è stato scritto seguendo le indicazioni contenute nel documento 	“IEEE Recommended Practice for Software Requirements Specifications” avente 	riferimento IEEEStd 830-1993 (Revision of IEEE Std 830-1984).

   **1.2 Obiettivi**

   Questo progetto ha l'obbiettivo di realizzare un app per la messaggistica all'interno della quale i messaggi non vengono inviati ad una persona bensì vengono postati all'interno di una "bacheca".
   La suddetta bacheca prenderà la forma di una mappa, ed i messaggi verranno segnalati su di essa tramite dei marker nelle coordinate del luogo d'invio.

   **1.3 Definizioni, acronimi e abbreviazioni**

   API, in informatica, nell'ambito delle applicazioni, intende un insieme di procedure (in genere raggruppate per strumenti specifici) atte all'espletamento di un dato compito. Sono la totalità dei servizi che l'applicazione offre all'utente. 

   Servlet, in informatica, nell'ambito della programmazione web, i servlet sono oggetti scritti in linguaggio Java che operano all'interno di un server web oppure un server per applicazioni permettendo la creazione di applicazione web (elaborazione lato server).  	

   **1.4 Riferimenti**
   
   Nessuno.

---
### 2. Descrizione generale

   **2.1 Prospettive del prodotto**
	
   Il sistema informatico EarthMessenger™️ viene offerto sotto forma di un'applicazione web, equipaggiata con un frontend in React e un backend, lato server, in Java.

   **2.2 Funzionalità del prodotto**

   Il sistema permetterà di inviare dei messaggi e successivamente collocarli su di una mappa dopo aver passato il test CAPTCHA.

   **2.3 Caratteristiche utente**
	
   Il bacino d'utenza dell'applicazione è sostanzialmente lo stesso di app come WhatsApp e Messenger.

   **2.4 Vincoli generali**

   Questo progetto presenta un vincolo fondamentale che è la presenza di una connessione alla rete internet.

   **2.5 Assunzioni e dipendenze**

   L'applicazione ha come assunzione principale quella della presenza di un sistema GPS, che permetta l'identificazione di latitudine e longitudine nel momento della scrittura del messaggio, e di un relativo servizio di connessione alla rete.   
	
   ---
### 3. Requisiti specifici

   **3.1 Requisiti Frontend**

   Il frontend è scritto in JavaScript utilizzando il framework React, che utilizza un'architettura a componenti. La mappa viene mostrata utilizzando un'implementazione della libreria Leaflet in React. Viene inoltre utilizzata un'API che permette di ottenere un file in json che contiene varie informazioni topografiche (luogo, latitudine, longitudine, nazione, capitale) che verranno utilizzate per la rappresentazione sulla mappa.

   **3.1.2 Pagina inserimento messaggio e controllo CAPTCHA**

   Questa è la prima pagina della web app, presenta il nome dell'applicazione e un campo di inserimento del messaggio.
   In questa pagina inoltre è presente il controllo CAPTCHA obbligatorio per postare il messaggio. 

   **3.1.3 Pagina con mappa**

   Questa è la seconda pagina che presenta una mappa sulla quale sono posizionati i messaggi con dei marker, questi possono essere premuti per mostrare il contenuto del messaggio, il messaggio viene collocato grazie alle coordinate immagazzinate nel database presente nel backend.

   **3.1.4 Cronologia delle richieste**

   Nel momento in cui viene inviato un messaggio il frontend fa una richiesta tramite l'API che ritorna latitudine e longitudine, successivamemte invia il contenuto del messaggio, latitudine, longitudine al backend dove verranno immagazzinate nel database.  

   **3.2 Requisiti Backend**

   Il backend presenta un'architettura Java a base di Servlet, qui le informazioni vengono ricevute , gestite e immagazzinate nel database che come prima cosa conferisce un id alle informazioni del post.
