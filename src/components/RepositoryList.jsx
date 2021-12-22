import { useState, useEffect } from "react"
import { ReposityItem } from "./RepositoryItem";
import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/pedrokasak/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <ReposityItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  );
}
