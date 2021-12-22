import { ReposityItem } from "./RepositoryItem";

const repository = {
  name: "Unform",
  description: "Forms in React",
  link: "https://github.com/pedrokasak/Github-Explorer",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <ReposityItem repository={repository} />
        <ReposityItem repository={repository} />
        <ReposityItem repository={repository} />
      </ul>
    </section>
  );
}
