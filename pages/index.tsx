export default function Home() {
  return (
    <div id="main">
      <h1>Alle API Endpunkte:</h1>
      <hr />
      <ul>
        <li>
          <p>/api/animes</p>
          <ul>
            <li>
              <p>?id= <strong>Suchen nach einem Anime mit einer ID</strong></p>
            </li>
            <li>
              <p>?title= <strong>Suchen nach Animes mit einem Title</strong></p>
            </li>
            <li>
              <p>?all=true <strong>Anzeigen aller Animes</strong></p>
            </li>
          </ul>
        </li>
        <li>
          <p>/api/pokemon</p>
          <ul>
            <li>
              <p>?nr= <strong>Suchen nach Pokemon mit einer Nr</strong></p>
            </li>
            <li>
              <p>?name= <strong>Suchen nach Pokemon mit einem Namen</strong></p>
            </li>
            <li>
              <p>?all=true <strong>Anzeigen aller Pokemon</strong></p>
            </li>
          </ul>
        </li>
        <li>
          <p>/api/exams</p>
          <ul>
            <li><p>/ <strong>Anzeigen von Infos aller vorhandenen Examen</strong></p></li>
            <li><p>?id= <strong>Anzeigen eines Examens suchen durch ID</strong></p></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
