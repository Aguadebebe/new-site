import "./ReactAppProjects.css";

const ReactAppProjects = () => {
  const apps = [
    {
      title: "Color-Picks,",
      url: "https://aguadebebe.github.io/color-picks/"
    },

    {
      title: "Color-picks-GitHub Repository",
      url: "https://github.com/Aguadebebe/color-picks"
    },

    {
      title: "Todo-List,",
      url: "https://aguadebebe.github.io/todo-list/"
    },

    {
      title: "Todo-List-GitHub Repository",
      url: "https://github.com/Aguadebebe/todo-list"
    }
  ];

  return (
    <div className="map-container">
      {apps.map((app, index) => (
        <a key={index} href={app.url} target={"_blank"} rel="noopener noreferrer">
          <div className="app-title">{app.title}</div>
        </a>
      ))}
    </div>
  );
};

export default ReactAppProjects;
