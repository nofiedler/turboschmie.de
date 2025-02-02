"use client";

import React from "react";

export default function Impressum() {
  return (
    <div className="flex flex-col items-center md:pt-28 text-white text-center w-10/12 mx-auto">
      <h1 className="pt-6 text-3xl font-bold mb-6">Impressum</h1>

      <section className="w-full text-left">
        <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <address className="not-italic mb-4">
          Frederik Zeiler
          <br />
          Turboschmiede
          <br />
          Gustav-Heinemann-Straße 25
          <br />
          96215 Lichtenfels
          <br />
          Bayern
          <br />
          Germany
        </address>

        <h2 className="text-xl font-semibold mt-6 mb-4">Kontakt</h2>
        <p className="mb-4">
          E-Mail:{" "}
          <a
            href="mailto:turboschmiede.kontakt@gmail.com"
            className="text-blue-400 hover:underline"
          >
            turboschmiede.kontakt@gmail.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE344500331
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          EU-Streitschlichtung
        </h2>
        <p className="mb-4">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </h2>
        <p className="mb-8">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p className="text-sm mt-8">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de/impressum-generator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-4">
          Haftungsausschluss (Disclaimer)
        </h3>

        <h4 className="font-medium mb-2">Haftung für Inhalte</h4>
        <p className="mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>

        <h4 className="font-medium mb-2">Haftung für Links</h4>
        <p className="mb-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h4 className="font-medium mb-2">Urheberrecht</h4>
        <p className="mb-8">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-4">
          Datenschutzerklärung
        </h3>

        <h4 className="font-medium mb-2">1. Datenschutz auf einen Blick</h4>
        <p className="mb-4">
          <strong>Allgemeine Hinweise</strong>
          <br />
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>

        <h4 className="font-medium mb-2">Datenerfassung auf dieser Website</h4>
        <p className="mb-4">
          <strong>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </p>

        <p className="mb-4">
          <strong>Wie erfassen wir Ihre Daten?</strong>
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>

        <p className="mb-4">
          <strong>Wofür nutzen wir Ihre Daten?</strong>
          <br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>

        <p className="mb-4">
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          <br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck IhrerT gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          untere bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie
          zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
          uns wenden.
        </p>

        <h4 className="font-medium mb-2">
          2. Allgemeine Hinweise und Pflichtinformationen
        </h4>
        <p className="mb-4">
          <strong>Datenschutz</strong>
          <br />
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wiex und zu welchem
          Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung
          im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
          Dritte ist nicht möglich.
        </p>
        <p>
          Hinweis zur verantwortlichen Stelle Die verantwortliche Stelle für die
          Datenverarbeitung auf dieser Website ist:
        </p>
        <address className="not-italic mb-4">
          Fischer Automotive
          <br />
          Paul Fischer
          <br />
          Hannebach 27
          <br />
          96269 Großheirath
          <br />
          Telefon: +49 176 32329091
          <br />
          E-Mail: info@fischerautomotive.de
        </address>

        <p className="mb-4">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>

        <p className="mb-4">
          <strong>Speicherdauer</strong>
          <br />
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>

        <p className="mb-4">
          <strong>
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            auf dieser Website
          </strong>
          <br />
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
          Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
          Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs.
          1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
          1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </p>

        <p className="mb-4">
          <strong>
            Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
          </strong>
          <br />
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA
          oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
          diese Tools aktiv sind, können Ihre personenbezogene Daten in diese
          Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
          hin, dass in diesen Ländern kein mit der EU vergleichbares
          Datenschutzniveau garantiert werden kann. Beispielsweise sind
          US-Unternehmen dazu verpflichtet, personenbezogene Daten an
          Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener
          hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
          ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
          US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten,
          auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.
        </p>

        <p className="mb-4">
          <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong>
          <br />
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <p className="mb-4">
          <strong>
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
            gegen Direktwerbung (Art. 21 DSGVO)
          </strong>
          <br />
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder
          f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige
          Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
          dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
          Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs.
          1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um
          Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
          Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener
          Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
          Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
          Wenn Sie widersprechen, werden Ihre personenbezogenen Daten
          anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
          (Widerspruch nach Art. 21 Abs. 2 DSGVO).
        </p>

        <p className="mb-4">
          <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde</strong>
          <br />
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>

        <p className="mb-4">
          <strong>Recht auf Datenübertragbarkeit</strong>
          <br />
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>

        <p className="mb-4">
          <strong>Auskunft, Löschung und Berichtigung</strong>
          <br />
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>

        <p className="mb-4">
          <strong>Recht auf Einschränkung der Verarbeitung</strong>
          <br />
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
          personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
          um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht,
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Wenn die Verarbeitung Ihrer personenbezogenen Daten
          unrechtmäßig geschah/geschieht, können Sie statt der Löschung die
          Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre
          personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
          Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
          benötigen, haben Sie das Recht, statt der Löschung die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie
          einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
          Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
          Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
          das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
          Daten zu verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen
          Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
          abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
          Rechte einer anderen natürlichen oder juristischen Person oder aus
          Gründen eines wichtigen öffentlichen Interesses der Europäischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </p>

        <h4 className="font-medium mb-2">
          3. Datenerfassung auf dieser Website
        </h4>
        <p className="mb-4">
          <strong>Cookies</strong>
          <br />
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Löschung durch Ihren Webbrowser erfolgt. Teilweise können auch Cookies
          von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie
          unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns
          oder Ihnen die Nutzung bestimmter Dienstleistungen des
          Drittunternehmens (z. B. Cookies zur Abwicklung von
          Zahlungsdienstleistungen). Cookies haben verschiedene Funktionen.
          Zahlreiche Cookies sind technisch notwendig, da bestimmte
          Websitefunktionen ohne diese nicht funktionieren würden (z. B. die
          Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen
          dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
          Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
          erforderlich sind (notwendige Cookies), werden auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
          angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an
          der Speicherung von notwendigen Cookies zur technisch fehlerfreien und
          optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
          zur Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit
          widerrufbar. Sie können Ihren Browser so einstellen, dass Sie über das
          Setzen von Cookies informiert werden und Cookies nur im Einzelfall
          erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
          ausschließen sowie das automatische Löschen der Cookies beim Schließen
          des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
          Funktionalität dieser Website eingeschränkt sein. Soweit Cookies von
          Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir
          Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert
          informieren und ggf. eine Einwilligung abfragen.
        </p>

        <p className="mb-4">
          <strong>Server-Log-Dateien</strong>
          <br />
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log- Dateien, die Ihr Browser automatisch an
          uns übermittelt. Dies sind: Browsertyp und Browserversion verwendetes
          Betriebssystem Referrer URL Hostname des zugreifenden Rechners Uhrzeit
          der Serveranfrage IP-Adresse Eine Zusammenführung dieser Daten mit
          anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
          Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Websitebetreiber hat ein berechtigtes Interesse an der technisch
          fehlerfreien Darstellung und der Optimierung seiner Website – hierzu
          müssen die Server-Log-Files erfasst werden.
        </p>

        <p className="mb-4">
          <strong>Kontaktformular</strong>
          <br />
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten
          erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
          Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
          Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
          übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
          Interesse an der effektiven Bearbeitung der an uns gerichteten
          Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
          Einwilligung ist jederzeit widerrufbar. Die von Ihnen im
          Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
          der Zweck für die Datenspeicherung entfällt (z. B. nach
          abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
          Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <p className="mb-4">
          <strong>Anfrage per E-Mail, Telefon oder Telefax</strong>
          <br />
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
          beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
          lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
          sofern diese abgefragt wurde; die Einwilligung ist jederzeit
          widerrufbar. Die von Ihnen an uns per Kontaktanfragen übersandten
          Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
          Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h4 className="font-medium mb-2">4. Soziale Medien</h4>
        <p className="mb-4">
          <strong>Social-Media-Elemente mit Shariff</strong>
          <br />
          Auf dieser Website werden Elemente von sozialen Medien verwendet (z.
          B. Facebook, Twitter, Instagram, Pinterest, XING, LinkedIn, Tumblr).
          Die Social-Media-Elemente können Sie in der Regel anhand der
          jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf dieser
          Website zu gewährleisten, verwenden wir diese Elemente nur zusammen
          mit der sogenannten „Shariff“-Lösung. Diese Anwendung verhindert, dass
          die auf dieser Website integrierten Social-Media-Elemente Ihre
          personenbezogenen Daten schon beim ersten Betreten der Seite an den
          jeweiligen Anbieter übertragen. Erst wenn Sie das jeweilige
          Social-Media-Element durch Anklicken der zugehörigen Schaltfläche
          aktivieren, wird eine direkte Verbindung zum Server des Anbieters
          hergestellt (Einwilligung). Sobald Sie das Social- Media-Element
          aktivieren, erhält der jeweilige Anbieter die Information, dass Sie
          mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie
          gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook)
          eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website
          Ihrem Benutzerkonto zuordnen. 8 / 16 Das Aktivieren des Plugins stellt
          eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TTDSG dar. Diese Einwilligung können Sie jederzeit mit Wirkung
          für die Zukunft widerrufen. Der Einsatz des Dienstes erfolgt, um die
          gesetzlich vorgeschriebenen Einwilligungen für den Einsatz bestimmter
          Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1
          lit. c DSGVO.
        </p>

        <p className="mb-4">
          <strong>Facebook</strong>
          <br />
          Auf dieser Website sind Elemente des sozialen Netzwerks Facebook
          integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland
          Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten
          werden nach Aussage von Facebook jedoch auch in die USA und in andere
          Drittländer übertragen. Eine Übersicht über die Facebook
          Social-Media-Elemente finden Sie hier:
          https://developers.facebook.com/docs/plugins/?locale=de_DE. Wenn das
          Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen
          Ihrem Endgerät und dem Facebook-Server hergestellt. Facebook erhält
          dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website
          besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken, während
          Sie in Ihrem Facebook- Account eingeloggt sind, können Sie die Inhalte
          dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann
          Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir
          weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
          Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook
          erhalten. Weitere Informationen hierzu finden Sie in der
          Datenschutzerklärung von Facebook unter:
          https://de-de.facebook.com/privacy/explanation. Soweit eine
          Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g.
          Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG.
          Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung
          eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage
          unseres berechtigten Interesses an einer möglichst umfassenden
          Sichtbarkeit in den Sozialen Medien. Soweit mit Hilfe des hier
          beschriebenen Tools personenbezogene Daten auf unserer Website erfasst
          und an Facebook weitergeleitet werden, sind wir und die Meta Platforms
          Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
          Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26
          DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei
          ausschließlich auf die Erfassung der Daten und deren Weitergabe an
          Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch
          Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns
          gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung
          über gemeinsame Verarbeitung festgehalten. Den Wortlaut der
          Vereinbarung finden Sie unter:
          https://www.facebook.com/legal/controller_addendum. Laut dieser
          Vereinbarung sind wir für die Erteilung der Datenschutzinformationen
          beim Einsatz des Facebook-Tools und für die datenschutzrechtlich
          sichere Implementierung des Tools auf unserer Website verantwortlich.
          Für die Datensicherheit der Facebook- Produkte ist Facebook
          verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen)
          hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt
          bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns
          geltend machen, sind wir verpflichtet, diese an Facebook
          weiterzuleiten. Die Datenübertragung in die USA wird auf die
          Standardvertragsklauseln der EU-Kommission gestützt. Details finden
          Sie hier: https://www.facebook.com/legal/EU_data_transfer_addendum,
          https://de-de.facebook.com/help/566994660333381 und
          https://www.facebook.com/policy.php.
        </p>

        <p className="mb-4">
          <strong>Twitter</strong>
          <br />
          Auf dieser Website sind Funktionen des Dienstes Twitter eingebunden.
          Diese Funktionen werden angeboten durch die Twitter International
          Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07,
          Irland. Wenn das Social-Media-Element aktiv ist, wird eine direkte
          Verbindung zwischen Ihrem Endgerät und dem Twitter-Server hergestellt.
          Twitter erhält dadurch Informationen über den Besuch dieser Website
          durch Sie. Durch das Benutzen von Twitter und der Funktion „Re-Tweet“
          werden die von Ihnen besuchten Websites mit Ihrem Twitter-Account
          verknüpft und anderen Nutzern bekannt gegeben. Wir weisen darauf hin,
          dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
          übermittelten Daten sowie deren Nutzung durch Twitter erhalten.
          Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
          von Twitter unter: https://twitter.com/de/privacy. Soweit eine
          Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g.
          Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG.
          Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung
          eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage
          unseres berechtigten Interesses an einer möglichst umfassenden
          Sichtbarkeit in den Sozialen Medien. Die Datenübertragung in die USA
          wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
          Details finden Sie hier:
          https://gdpr.twitter.com/en/controller-to-controller-transfers.html.
          Ihre Datenschutzeinstellungen bei Twitter können Sie in den
          Konto-Einstellungen unter https://twitter.com/account/settings ändern.
        </p>

        <p className="mb-4">
          <strong>Instagram</strong>
          <br />
          Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden.
          Diese Funktionen werden angeboten durch die Meta Platforms Ireland
          Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
          Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung
          zwischen Ihrem Endgerät und dem Instagram-Server hergestellt.
          Instagram erhält dadurch Informationen über den Besuch dieser Website
          durch Sie. Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können
          Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website
          mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den
          Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf
          hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
          übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
          Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
          Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a
          DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
          Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des
          Dienstes auf Grundlage unseres berechtigten Interesses an einer
          möglichst umfassenden Sichtbarkeit in den Sozialen Medien. Soweit mit
          Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer
          Website erfasst und an Facebook bzw. Instagram weitergeleitet werden,
          sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square,
          Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese
          Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame
          Verantwortlichkeit beschränkt sich dabei ausschließlich auf die
          Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram.
          Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw.
          Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns
          gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung
          über gemeinsame Verarbeitung festgehalten. Den Wortlaut der
          Vereinbarung finden Sie unter:
          https://www.facebook.com/legal/controller_addendum. Laut dieser
          Vereinbarung sind wir für die Erteilung der Datenschutzinformationen
          beim Einsatz des Facebook- bzw. Instagram-Tools und für die
          datenschutzrechtlich sichere Implementierung des Tools auf unserer
          Website verantwortlich. Für die Datensicherheit der Facebook bzw.
          Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z.
          B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
          verarbeiteten Daten können Sie direkt bei Facebook geltend machen.
          Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir
          verpflichtet, diese an Facebook weiterzuleiten. Die Datenübertragung
          in die USA wird auf die Standardvertragsklauseln der EU-Kommission
          gestützt. Details finden Sie hier:
          https://www.facebook.com/legal/EU_data_transfer_addendum,
          https://help.instagram.com/519522125107875 und
          https://de-de.facebook.com/help/566994660333381. Weitere Informationen
          hierzu finden Sie in der Datenschutzerklärung von Instagram:
          https://instagram.com/about/legal/privacy/.
        </p>

        <p className="mb-4">
          <strong>Tumblr</strong>
          <br />
          Diese Website nutzt Schaltflächen und sonstige Elemente des Dienstes
          Tumblr. Anbieter ist die Tumblr, Inc., 35 East 21st St, 10th Floor,
          New York, NY 10010, USA. Wenn das Social-Media-Element aktiv ist, wird
          eine direkte Verbindung zwischen Ihrem Endgerät und dem Tumblr-Server
          hergestellt. Tumblr erhält dadurch Informationen über den Besuch
          dieser Website durch Sie. Die Tumblr-Schaltflächen ermöglichen es
          Ihnen, einen Beitrag oder eine Seite bei Tumblr zu teilen oder dem
          Anbieter bei Tumblr zu folgen. Wenn Sie eine unserer Websites mit
          Tumblr-Button aufrufen, baut der Browser eine direkte Verbindung mit
          den Servern von Tumblr auf. Wir haben keinen Einfluss auf den Umfang
          der Daten, die Tumblr mit Hilfe dieses Plugins erhebt und übermittelt.
          Nach aktuellem Stand werden die IP-Adresse des Nutzers sowie die URL
          der jeweiligen Website übermittelt. Soweit eine Einwilligung (Consent)
          eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage
          von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist
          jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde,
          erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten
          Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen
          Medien. Weitere Informationen hierzu finden sich in der
          Datenschutzerklärung von Tumblr unter:
          https://www.tumblr.com/privacy/de.
        </p>

        <p className="mb-4">
          <strong>Pinterest</strong>
          <br />
          Auf dieser Website verwenden wir Elemente des sozialen Netzwerkes
          Pinterest, das von der Pinterest Europe Ltd., Palmerston House, 2nd
          Floor, Fenian Street, Dublin 2, Irland betrieben wird. Wenn Sie eine
          Seite aufrufen, die ein solches Element enthält, stellt Ihr Browser
          eine direkte Verbindung zu den Servern von Pinterest her. Dieses
          Social-Media-Element übermittelt dabei Protokolldaten an den Server
          von Pinterest in die USA. Diese Protokolldaten enthalten
          möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites,
          die ebenfalls Pinterest-Funktionen enthalten, Art und Einstellungen
          des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise
          von Pinterest sowie Cookies. Soweit eine Einwilligung (Consent)
          eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage
          von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist
          jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde,
          erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten
          Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen
          Medien. Weitere Informationen zu Zweck, Umfang und weiterer
          Verarbeitung und Nutzung der Daten durch Pinterest sowie Ihre
          diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre
          finden Sie in den Datenschutzhinweisen von Pinterest:
          https://policy.pinterest.com/de/privacy-policy.
        </p>

        <h4 className="font-medium mb-2">5. Analyse-Tools und Werbung</h4>
        <p className="mb-4">
          <strong>IONOS WebAnalytics</strong>
          <br />
          Diese Website nutzt die Analysedienste von IONOS WebAnalytics (im
          Folgenden: IONOS). Anbieter ist die 1&1 IONOS SE, Elgendorfer Straße
          57, D – 56410 Montabaur. Im Rahmen der Analysen mit IONOS können u. a.
          Besucherzahlen und –verhalten (z. B. Anzahl der Seitenaufrufe, Dauer
          eines Webseitenbesuchs, Absprungraten), Besucherquellen (d. h., von
          welcher Seite der Besucher kommt), Besucherstandorte sowie technische
          Daten (Browser- und Betriebssystemversionen) analysiert werden. Zu
          diesem Zweck speichert IONOS insbesondere folgende Daten: Referrer
          (zuvor besuchte Webseite) angeforderte Webseite oder Datei Browsertyp
          und Browserversion verwendetes Betriebssystem verwendeter Gerätetyp
          Uhrzeit des Zugriffs IP-Adresse in anonymisierter Form (wird nur zur
          Feststellung des Orts des Zugriffs verwendet) Die Datenerfassung
          erfolgt laut IONOS vollständig anonymisiert, sodass sie nicht zu
          einzelnen Personen zurückverfolgt werden kann. Cookies werden von
          IONOS WebAnalytics nicht gespeichert. Die Speicherung und Analyse der
          Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Websitebetreiber hat ein berechtigtes Interesse an der statistischen
          Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine
          Werbung zu optimieren. Sofern eine entsprechende Einwilligung
          abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
          von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
          Einwilligung die Speicherung von Cookies oder den Zugriff auf
          Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          Weitere Informationen zur Datenerfassung und Verarbeitung durch IONOS
          WebAnalytics entnehmen Sie der Datenschutzerklaerung von IONOS unter
          folgendem Link: https://www.ionos.de/terms-gtc/index.php?id=6
        </p>

        <p className="mb-4">
          <strong>Auftragsverarbeitung</strong>
          <br />
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben
          genannten Anbieter geschlossen. Hierbei handelt es sich um einen
          datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass
          dieser die personenbezogenen Daten unserer Websitebesucher nur nach
          unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>

        <h4 className="font-medium mb-2">6. Newsletter</h4>
        <p className="mb-4">
          <strong>Newsletterdaten</strong>
          <br />
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
          benötigen wir von Ihnen eine EMail- Adresse sowie Informationen,
          welche uns die .berprüfung gestatten, dass Sie der Inhaber der
          angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters
          einverstanden sind. Weitere Daten werden nicht bzw. nur auf
          freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich
          für den Versand der angeforderten Informationen und geben diese nicht
          an Dritte weiter. Die Verarbeitung der in das
          Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich
          auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die
          erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse
          sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
          widerrufen, etwa über den „Austragen“-Link im Newsletter. Die
          Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt
          vom Widerruf unberührt. Die von Ihnen zum Zwecke des Newsletter-Bezugs
          bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
          dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert
          und nach der Abbestellung des Newsletters oder nach Zweckfortfall aus
          der Newsletterverteilerliste gelöscht. Wir behalten uns vor,
          E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen
          im Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
          DSGVO zu löschen oder zu sperren. Daten, die zu anderen Zwecken bei
          uns gespeichert wurden, bleiben hiervon unberührt. Nach Ihrer
          Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse
          bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist
          gespeichert, sofern dies zur Verhinderung künftiger Mailings
          erforderlich ist. Die Daten aus der Blacklist werden nur für diesen
          Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies
          dient sowohl Ihrem Interesse als auch unserem Interesse an der
          Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern
          (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
          Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können
          der Speicherung widersprechen, sofern Ihre Interessen unser
          berechtigtes Interesse überwiegen.
        </p>

        <h4 className="font-medium mb-2">7. Plugins und Tools</h4>
        <p className="mb-4">
          <strong>YouTube mit erweitertem Datenschutz</strong>
          <br />
          Diese Website bindet Videos der YouTube ein. Betreiber der Seiten ist
          die Google Ireland Limited („Google“), Gordon House, Barrow Street,
          Dublin 4, Irland. Wir nutzen YouTube im erweiterten Datenschutzmodus.
          Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen
          über die Besucher auf dieser Website speichert, bevor diese sich das
          Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch
          den erweiterten Datenschutzmodus hingegen nicht zwingend
          ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein
          Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.
          Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine
          Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem
          YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
          Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie
          YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil
          zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem
          YouTube- Account ausloggen. Des Weiteren kann YouTube nach Starten
          eines Videos verschiedene Cookies auf Ihrem Endgerät speichern oder
          vergleichbare Wiedererkennungstechnologien (z. B.
          Device-Fingerprinting) einsetzen. Auf diese Weise kann YouTube
          Informationen über Besucher dieser Website erhalten. Diese
          Informationen werden u. a. verwendet, um Videostatistiken zu erfassen,
          die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen
          vorzubeugen. Gegebenenfalls können nach dem Start eines YouTube-Videos
          weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir
          keinen Einfluss haben. Die Nutzung von YouTube erfolgt im Interesse
          einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt
          ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
          dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
          die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
          (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
          Einwilligung ist jederzeit widerrufbar. Weitere Informationen über
          Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung
          unter: https://policies.google.com/privacy?hl=de.
        </p>

        <p className="mb-4">
          <strong>Google Maps</strong>
          <br />
          Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
          Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin
          4, Irland. Zur Nutzung der Funktionen von Google Maps ist es
          notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in
          der Regel an einen Server von Google in den USA übertragen und dort
          gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
          Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum
          Zwecke der einheitlichen Darstellung der Schriftarten Google Web Fonts
          verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten
          Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
          anzuzeigen. Die Nutzung von Google Maps erfolgt im Interesse einer
          ansprechenden Darstellung unserer Online- Angebote und an einer
          leichten Auffindbarkeit der von uns auf der Website angegebenen Orte.
          Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
          f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
          erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
          des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
          Die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in
          die USA wird auf die Standardvertragsklauseln der EU-Kommission
          gestützt. Details finden Sie hier:
          https://privacy.google.com/businesses/gdprcontrollerterms/ und
          https://privacy.google.com/businesses/gdprcontrollerterms/sccs/. Mehr
          Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von Google:
          https://policies.google.com/privacy?hl=de.
        </p>

        <p className="mb-4">
          <strong>OpenStreetMap</strong>
          <br />
          Wir nutzen den Kartendienst von OpenStreetMap (OSM). Wir binden das
          Kartenmaterial von OpenStreetMap auf dem Server der OpenStreetMap
          Foundation, St John’s Innovation Centre, Cowley Road, Cambridge, CB4
          0WS, Großbritannien, ein. Großbritannien gilt als datenschutzrechtlich
          sicherer Drittstaat. Das bedeutet, dass Großbritannien ein
          Datenschutzniveau aufweist, das dem Datenschutzniveau in der
          Europäischen Union entspricht. Bei der Nutzung der
          OpenStreetMap-Karten wird eine Verbindung zu den Servern der
          OpenStreetMap-Foundation hergestellt. Dabei können u. a. Ihre
          IP-Adresse und weitere Informationen über Ihr Verhalten auf dieser
          Website an die OSMF weitergeleitet werden. OpenStreetMap speichert
          hierzu unter Umständen Cookies in Ihrem Browser oder setzt
          vergleichbare Wiedererkennungstechnologien ein. Die Nutzung von
          OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung
          unserer Online- Angebote und einer leichten Auffindbarkeit der von uns
          auf der Website angegebenen Orte. Dies stellt ein berechtigtes
          Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder
          den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>

        <p className="mb-4">
          <strong>Google reCAPTCHA</strong>
          <br />
          Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser
          Website. Anbieter ist die Google Ireland Limited („Google“), Gordon
          House, Barrow Street, Dublin 4, Irland. Mit reCAPTCHA soll überprüft
          werden, ob die Dateneingabe auf dieser Website (z. B. in einem 
          Kontaktformular) durch einen Menschen oder durch ein automatisiertes
          Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des
          Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt
          automatisch, sobald der Websitebesucher die Website betritt. Zur
          Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B.
          IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom
          Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten
          werden an Google weitergeleitet. Die reCAPTCHA-Analysen laufen
          vollständig im Hintergrund. Websitebesucher werden nicht darauf
          hingewiesen, dass eine Analyse stattfindet. Die Speicherung und
          Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran,
          seine Webangebote vor missbräuchlicher automatisierter Ausspähung und
          vor SPAM zu schützen. Sofern eine entsprechende Einwilligung abgefragt
          wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
          Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
          Einwilligung die Speicherung von Cookies oder den Zugriff auf
          Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
          Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen
          unter folgenden Links: https://policies.google.com/privacy?hl=de und
          https://policies.google.com/terms?hl=de.
        </p>

        <p className="text-sm mt-8">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://www.e-recht24.de
          </a>
        </p>
      </section>
    </div>
  );
}
